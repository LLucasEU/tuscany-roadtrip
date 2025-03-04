import { Injectable } from '@angular/core';

interface TripStage {
  date: string;
  ville: string;
  train?: {
    heure_arrivee?: string;
    heure_depart?: string;
    destination?: string;
    adresse_gare_depart?: string;
    adresse_gare_arrivee?: string
    docs?: string;
  };
  logement?: {
    heure_depart?: string;
    heure_arrivee?: string;
    adresse?: string;
    docs?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private tripStages: TripStage[] = [
    {
      date: '2025-04-17',
      ville: 'Lyon',
      train: {
        heure_depart: '16:00',
        heure_arrivee: '20:40',
        destination: 'Turin',
        adresse_gare_depart: 'Gare Routière de Lyon Perrache, Cours de Verdun, 69002 Lyon, France',
        adresse_gare_arrivee: 'Corso Vittorio Emanuele II 131, 10138 Turin, Italie',
        docs: 'https://mfb-fb-pdf-prod.s3.eu-central-1.amazonaws.com/1mewukws3imcu8kn7cd252tp9hydc8iyyogi3z2w8zbukscjcl/Ticket-Lyon-Torino-3234765278.pdf?platform=app'
      }
    },
    {
      date: '2025-04-18',
      ville: 'Turin',
      train: {
        heure_depart: '10:20',
        heure_arrivee: '13:30',
        destination: 'La Spezia',
        adresse_gare_depart: 'C.so Vittorio Emanuele II, 58, 10121 Torino TO, Italie',
        adresse_gare_arrivee: "Piazzale Medaglie d'Oro al Valor Militare, 19122 La Spezia SP, Italie",
        docs: "https://web.trenitalia-france.fr/Channels.WebsiteFr.WEB/#/user-area/purchase/ticketDetail?id=XB0vmKIpRX1ygzA4uiK5IoaSvoylSyr3y1gSypCoMFc=",
      },
      logement: {
        heure_arrivee: '16:00 - 22:00',
        adresse: '5 Via Caporacca, La Spezia, 19132, Italie',
        docs: "https://secure.booking.com/confirmation.fr.html?label=gen173nr-1FCAEoggI46AdIM1gEaE2IAQKYAQ24AQfIAQ3YAQHoAQH4AQ2IAgGoAgO4AuH8nb4GwAIB0gIkNTlhNDkwOTQtNWFhNS00N2ZkLTk3NzktMjRiZDZkNDhhYzVm2AIG4AIB&sid=d094e72e92e4b8d2fc92c3bd0d25e5a9&aid=304142&auth_key=pwaZSj24sLqIJYdn&source=mytrips"
      }
    },
    {
      date: '2025-04-19',
      ville: 'La Spezia',
      logement: {
        adresse: '5 Via Caporacca, La Spezia, 19132, Italie',
        docs: "https://secure.booking.com/confirmation.fr.html?label=gen173nr-1FCAEoggI46AdIM1gEaE2IAQKYAQ24AQfIAQ3YAQHoAQH4AQ2IAgGoAgO4AuH8nb4GwAIB0gIkNTlhNDkwOTQtNWFhNS00N2ZkLTk3NzktMjRiZDZkNDhhYzVm2AIG4AIB&sid=d094e72e92e4b8d2fc92c3bd0d25e5a9&aid=304142&auth_key=pwaZSj24sLqIJYdn&source=mytrips"
      }
    },
    {
      date: '2025-04-20',
      ville: 'La Spezia',
      logement: {
        adresse: '5 Via Caporacca, La Spezia, 19132, Italie',
        heure_depart: 'demain 8:00 - 10:00',
        docs: "https://secure.booking.com/confirmation.fr.html?label=gen173nr-1FCAEoggI46AdIM1gEaE2IAQKYAQ24AQfIAQ3YAQHoAQH4AQ2IAgGoAgO4AuH8nb4GwAIB0gIkNTlhNDkwOTQtNWFhNS00N2ZkLTk3NzktMjRiZDZkNDhhYzVm2AIG4AIB&sid=d094e72e92e4b8d2fc92c3bd0d25e5a9&aid=304142&auth_key=pwaZSj24sLqIJYdn&source=mytrips"
      }
    },
    {
      date: '2025-04-21',
      ville: 'La Spezia',
      train: {
        heure_depart: '10:11',
        heure_arrivee: '12:30',
        destination: 'Lucca',
        adresse_gare_depart: 'Piazzale Medaglie d\'Oro al Valor Militare, 19122 La Spezia SP, Italie',
        adresse_gare_arrivee: "Piazzale Bettino Ricasoli 203, 55100 Lucca, Italie",
        docs: "https://web.trenitalia-france.fr/Channels.WebsiteFr.WEB/#/user-area/purchase/ticketDetail?id=R3JKkEfrlauGON-G9P_PIIaSvoylSyr3y1gSypCoMFc=",
      },
    },
    {
      date: '2025-04-21',
      ville: 'Lucca',
      train: {
        heure_depart: '21:13',
        heure_arrivee: '21:43',
        destination: 'Pise',
        adresse_gare_depart: 'Piazzale Bettino Ricasoli 203, 55100 Lucca, Italie',
        adresse_gare_arrivee: "Piazzale Medaglie d'Oro al Valor Militare, 19122 La Spezia SP, Italie",
        docs: "https://web.trenitalia-france.fr/Channels.WebsiteFr.WEB/#/user-area/purchase/ticketDetail?id=yiyhUAfjNFQhYxa--kFmmYaSvoylSyr3y1gSypCoMFc=",
      },
      logement: {
        heure_arrivee: '14:00',
        heure_depart: 'demain 10:00',
        adresse: 'Via Pietro Mascagni, 15 Pise, Toscana, Italie',
        docs: "https://www.airbnb.fr/trips/v1/ro/RESERVATION2_CHECKIN/HM9JKPQ32E",
      }
    },
    {
      date: '2025-04-22',
      ville: 'Pise',
      train: {
        heure_depart: '17:54',
        heure_arrivee: '19:38',
        destination: 'Sienne',
        adresse_gare_depart: 'Piazza della Stazione 9, 56121 Pisa, Italie',
        adresse_gare_arrivee: "Piazza Carlo Rosselli 6, 53100 Siena, Italie",
        docs: "https://web.trenitalia-france.fr/Channels.WebsiteFr.WEB/#/user-area/purchase/ticketDetail?id=m_SGmJll2ZVTvrW9MhAAdYaSvoylSyr3y1gSypCoMFc=",
      },
      logement: {
        heure_arrivee: '13:00',
        adresse: 'Via del Giglio, 3 int.3, Sienne, Toscana 53100, Italie',
        docs: "https://www.airbnb.fr/trips/v1/ro/RESERVATION_USER_CHECKIN/HMEJ2SZNM8"
      }
    },
    {
      date: '2025-04-23',
      ville: 'Sienne',
      logement: {
        adresse: 'Via del Giglio, 3 int.3, Sienne, Toscana 53100, Italie',
        heure_depart: '10:00',
        docs: "https://www.airbnb.fr/trips/v1/ro/RESERVATION_USER_CHECKIN/HMEJ2SZNM8"
      }
    },
    {
      date: '2025-04-24',
      ville: 'Sienne',
      train: {
        heure_depart: '9:18',
        heure_arrivee: '10:52',
        destination: 'Florence',
        adresse_gare_depart: 'Piazza Carlo Rosselli 6, 53100 Siena, Italie',
        adresse_gare_arrivee: "Piazza della Stazione, 50123 Firenze FI, Italie",
        docs: "https://web.trenitalia-france.fr/Channels.WebsiteFr.WEB/#/user-area/purchase/ticketDetail?id=g2oDb8aZFUtgF-fLyb_troaSvoylSyr3y1gSypCoMFc=",
      },
      logement: {
        heure_arrivee: '14:00',
        adresse: 'Via delle Cinque Giornate, 52, Florence, Toscana 50129, Italie',
        docs: "https://www.airbnb.fr/trips/v1/ro/RESERVATION2_CHECKIN/HMZHZM5NMA"
      }
    },
    {
      date: '2025-04-25',
      ville: 'Florence',
      logement: {
        adresse: 'Via delle Cinque Giornate, 52, Florence, Toscana 50129, Italie',
        docs: "https://www.airbnb.fr/trips/v1/ro/RESERVATION2_CHECKIN/HMZHZM5NMA"
      }
    },
    {
      date: '2025-04-26',
      ville: 'Florence',
      train: {
        heure_depart: '20:10',
        heure_arrivee: '23:26',
        destination: 'Turin',
        adresse_gare_depart: 'Piazza della Stazione, 50123 Firenze FI, Italie',
        adresse_gare_arrivee: "C.so Vittorio Emanuele II, 58, 10121 Torino TO, Italie",
        docs: "https://web.trenitalia-france.fr/Channels.WebsiteFr.WEB/#/user-area/purchase/ticketDetail?id=tf6k3G9lac4m7PNQ10rNN4aSvoylSyr3y1gSypCoMFc=",

      },
      logement: {
        heure_depart: '10:00',
        adresse: 'Via delle Cinque Giornate, 52, Florence, Toscana 50129, Italie',
        docs: "https://www.airbnb.fr/trips/v1/ro/RESERVATION2_CHECKIN/HMZHZM5NMA"
      }
    },
  ];

  constructor() {
    console.log("📜 Available Trip Stages:", this.tripStages);
  }

  getAllStages(): TripStage[] {
    return this.tripStages;
  }
}
