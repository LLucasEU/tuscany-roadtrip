import { Component, OnInit } from '@angular/core';
import { TripService } from "../../services/trip.service";
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentStageIndex: number | null = null;
  tripStages = this.tripService.getAllStages();
  swipeDirection: string = '';
  countdown: string = '';

  constructor(private tripService: TripService) {}

  ngOnInit(): void {
    this.findTodayOrNextStage();
  }

  findTodayOrNextStage() {
    const today = new Date();

    const futureStages = this.tripStages
      .map(stage => ({ ...stage, dateObject: new Date(stage.date) }))
      .filter(stage => stage.dateObject >= today)

    if (futureStages.length === 0) {
      this.currentStageIndex = this.tripStages.length - 1;
    } else {
      const foundIndex = this.tripStages.findIndex(stage =>
        new Date(stage.date).toISOString().split('T')[0] === today.toISOString().split('T')[0]
      );
      this.currentStageIndex = foundIndex !== -1 ? foundIndex : null;

      if (this.currentStageIndex === null) {
        this.updateCountdown(futureStages[0].date);
      }
    }
  }

  updateCountdown(startDate: string) {
    const targetDate = new Date(startDate);
    setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        this.countdown = 'Le trip commence aujourd’hui ! 🎉';
        this.findTodayOrNextStage();
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        this.countdown = `Il reste ${days} jours, ${hours}h et ${minutes}m avant le départ...`;
      }
    }, 1000);
  }

  changeStage(direction: 'left' | 'right') {
    this.swipeDirection = direction === 'left' ? 'swipe-left' : 'swipe-right';

    setTimeout(() => {
      if (direction === 'left') {
        if (this.currentStageIndex === null) {
          this.currentStageIndex = 0;
        } else if (this.currentStageIndex < this.tripStages.length - 1) {
          this.currentStageIndex++;
        }
      } else if (direction === 'right' && this.currentStageIndex !== null && this.currentStageIndex > 0) {
        this.currentStageIndex--;
      }

      this.swipeDirection = 'fade-in';
      setTimeout(() => this.swipeDirection = '', 300);
    }, 300);
  }

  onSwipeLeft() {
    this.changeStage('left');
  }

  onSwipeRight() {
    this.changeStage('right');
  }

  openInMaps(address: string | undefined) {
    if (!address) return;
    const formattedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${formattedAddress}`, '_blank');
  }
}
