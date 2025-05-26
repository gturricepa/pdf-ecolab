import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        title: "EXECUTIVE REPORT OF PRACTICAL TRAINING",
        fullName: "Full Name",
        company: "Company",
        transmissionType: "Transmission Type",
        activityName: "Activity Name",
        activityDue: "Activity",
        licenseDue: "License Due",
        yearsExperience: "Years of Experience",
        country: "Country",
        resultObtained: "Result Obtained",
        appliedWithoutAssistance: "Applied without assistance",
        appliedWithTraining: "Applied with training",
        opportunityArea: "Opportunity area",
        criticalElements: "Critical elements",
        performanceReview: "Performance Review",
        safeDrivingBySegment:
          "Application Of Safe Driving Techniques By Segment",
        moduleLabels: {
          module1: "Previous inspections",
          module2: "Before leaving",
          module3: "During the tour",
          module4: "Parking",
          module5: "Command Operation",
          module6: "Attitude",
        },
        criticalElementsIdentified:
          "Critical elements identified during the training",
        Automatic: "Automatic",
        Manual: "Manual",
        "More than 5": "More than 5",
        "More than 10": "More than 10",
        "No Data": "No Data",
        Approved: "Approved",
        "Approved with observations": "Approved with observations",
        "Not approved": "Not approved",
        BELGIUM: "Belgium",
        CROATIA: "Croatia",
        ESPAÑA: "Spain",
        FRANCE: "France",
        FRANKREICH: "France",
        GERMANY: "Germany",
        ITALIA: "Italy",
        NETHERLANDS: "Netherlands",
        POLAND: "Poland",
        inadequateSpeed: "Inadequate speed",
        trafficViolation: "Traffic violation",
        aggressiveness: "Aggressiveness",
        distractionWhileDriving: "Distraction while driving",
        doesNotTransmitSecurity: "Does not transmit security",
        doesNotCoordinateGearbox: "Does not coordinate gearbox",
        recklessDriving: "Reckless driving",
        noDrivingExperience: "No driving experience",
        newness: "Newness",
        item: "item",
        generalComments: "General Comments",
        DETECTED: "DETECTED",
        "NOT DETECTED": "NOT DETECTED",
        report: "Report",
        certificate: "Certificate",
        "Training Course": "Training Course",
        Certificate: "Certificate",
        "A good level of knowledge is identified regarding previous vehicle inspections and integrated technological systems.":
          "A good level of knowledge is identified regarding previous vehicle inspections and integrated technological systems.",
        "It will be appropriate to pay attention to carrying out prior inspections of the vehicle before making a trip.":
          "It will be appropriate to pay attention to carrying out prior inspections of the vehicle before making a trip.",
        "Receive assistance in several of the safety procedures prior to driving, so it is recommended to follow up on the points described as areas of opportunity":
          "Receive assistance in several of the safety procedures prior to driving, so it is recommended to follow up on the points described as areas of opportunity",
        "Demonstrates correct habits before driving, as well as good practices in the use of passive safety devices":
          "Demonstrates correct habits before driving, as well as good practices in the use of passive safety devices",
        "He has a good level of observation and identification of risk, so that during training he was able to cancel the influence of risk on his driving.":
          "He has a good level of observation and identification of risk, so that during training he was able to cancel the influence of risk on his driving.",
        "You receive assistance in applying the procedure of observation, identification and anticipation of risk, and can incorporate preventive techniques into your driving to nullify the influence of risk on your driving.":
          "You receive assistance in applying the procedure of observation, identification and anticipation of risk, and can incorporate preventive techniques into your driving to nullify the influence of risk on your driving.",
        "It is assisted in relation to safety distances from the vehicle in front.":
          "It is assisted in relation to safety distances from the vehicle in front.",
        "Maintains adequate safety distances from the vehicle in front":
          "Maintains adequate safety distances from the vehicle in front",
        "It identifies and controls well the situations that arise behind your vehicle, correctly anticipating potential risk situations.":
          "It identifies and controls well the situations that arise behind your vehicle, correctly anticipating potential risk situations.",
        "Receive assistance in applying preventive techniques to identify and anticipate potential risk situations in the rear of your vehicle.":
          "Receive assistance in applying preventive techniques to identify and anticipate potential risk situations in the rear of your vehicle.",
        "Assisted in developing preventative techniques to control intersections. It is important to continue practicing these techniques during daily driving to increase safety at intersections.":
          "Assisted in developing preventative techniques to control intersections. It is important to continue practicing these techniques during daily driving to increase safety at intersections.",
        "Carry out preventive practices that help maintain good control of intersections during training.":
          "Carry out preventive practices that help maintain good control of intersections during training.",
        "Understands the concept of vulnerable users, is respectful and applies preventive techniques to safely coexist with this type of user.":
          "Understands the concept of vulnerable users, is respectful and applies preventive techniques to safely coexist with this type of user.",
        "Make position changes following the necessary procedures to execute them safely and in advance.":
          "Make position changes following the necessary procedures to execute them safely and in advance.",
        "Receive assistance in applying the procedures necessary to execute position changes safely and early.":
          "Receive assistance in applying the procedures necessary to execute position changes safely and early.",
        "Develops the parking maneuver at a good level. Select a suitable place and present the appropriate technique.":
          "Develops the parking maneuver at a good level. Select a suitable place and present the appropriate technique.",
        "Receives assistance and trains the parking maneuver, performing it satisfactorily.":
          "Receives assistance and trains the parking maneuver, performing it satisfactorily.",
        "Properly operate the controls (steering wheel, pedal and gearbox) of the vehicle.":
          "Properly operate the controls (steering wheel, pedal and gearbox) of the vehicle.",
        "Receive assistance regarding the correct use of the controls (steering wheel, pedal and gearbox) of the vehicle. Trying to do it properly.":
          "Receive assistance regarding the correct use of the controls (steering wheel, pedal and gearbox) of the vehicle. Trying to do it properly.",
        "This certificate is awarded to": "This certificate is awarded to",
        "For successfully completing the": "For successfully completing the",
        "Director of Operations": "Director of Operations",
        "Effectively develops the driving techniques proposed by the training.":
          "Effectively develops the driving techniques proposed by the training.",
        "Despite having little practical experience, demonstrated a good level of driving ability and successfully applied the techniques developed in training":
          "Despite having little practical experience, demonstrated a good level of driving ability and successfully applied the techniques developed in training",
        "No comments": "No comments",
        "Through the assistance of the instructor and specific work on some of the preventive techniques proposed by the training, he/she manages to reach a satisfactory level. It is recommended to work individually on the development of the revised concepts so that you improve your evolution as a safe driver.":
          "Through the assistance of the instructor and specific work on some of the preventive techniques proposed by the training, he/she manages to reach a satisfactory level. It is recommended to work individually on the development of the revised concepts so that you improve your evolution as a safe driver.",
        notApprovedReason:
          "Does not fully develop the preventive driving techniques proposed by the training. A significant risk level is identified, leading to the decision of NOT APPROVED. A special report will be issued on the training characteristics and recommended actions. Does not fully develop the preventive driving techniques proposed by the training. A significant risk level is identified, leading to the decision of NOT APPROVED. A special report will be issued on the training characteristics and recommended actions. Does not fully develop the preventive driving techniques proposed by the training. A significant risk level is identified, leading to the decision of NOT APPROVED. A special report will be issued on the training characteristics and recommended actions.",
      },
    },
    es: {
      translation: {
        title: "INFORME EJECUTIVO DE ENTRENAMIENTO PRÁCTICO",
        fullName: "Nombre Completo",
        company: "Empresa",
        transmissionType: "Tipo de Transmisión",
        activityName: "Nombre Actividad",
        activityDue: "Actividad",
        licenseDue: "Vto. Licencia",
        yearsExperience: "Años Experiencia",
        country: "País",
        resultObtained: "Resultado Obtenido",
        appliedWithoutAssistance: "Aplicó sin asistencia",
        appliedWithTraining: "Aplicó mediante entrenamiento",
        opportunityArea: "Área de oportunidad",
        criticalElements: "Elementos críticos",
        performanceReview: "Evaluación de Desempeño",
        safeDrivingBySegment:
          "Aplicación de técnicas de conducción segura por segmento",
        moduleLabels: {
          module1: "Inspecciones previas",
          module2: "Antes de salir",
          module3: "Durante el recorrido",
          module4: "Estacionamiento",
          module5: "Operación de mandos",
          module6: "Actitud",
        },
        criticalElementsIdentified:
          "Elementos críticos identificados durante el entrenamiento",
        Automatic: "Automático",
        Manual: "Manual",
        "More than 5": "Más de 5",
        "More than 10": "Más de 10",
        "No Data": "Sin datos",
        Approved: "Aprobado",
        "Approved with observations": "Aprobado con observaciones",
        "Not approved": "No aprobado",
        BELGIUM: "Bélgica",
        CROATIA: "Croacia",
        ESPAÑA: "España",
        FRANCE: "Francia",
        FRANKREICH: "Francia",
        GERMANY: "Alemania",
        ITALIA: "Italia",
        NETHERLANDS: "Países Bajos",
        POLAND: "Polonia",
        inadequateSpeed: "Velocidad inadecuada",
        trafficViolation: "Violación de tráfico",
        aggressiveness: "Agresividad",
        distractionWhileDriving: "Distracción mientras conduces",
        doesNotTransmitSecurity: "No transmite seguridad",
        doesNotCoordinateGearbox: "No coordina la caja de cambios",
        recklessDriving: "Conducción imprudente",
        noDrivingExperience: "Sin experiencia de conducción",
        newness: "Novedad",
        item: "artículo",
        generalComments: "Comentarios Generales",
        DETECTED: "DETECTADO",
        "NOT DETECTED": "NO DETECTADO",
        report: "Informe",
        certificate: "Certificado",
        "Training Course": "Curso de Formación",
        Certificate: "Certificado",
        "A good level of knowledge is identified regarding previous vehicle inspections and integrated technological systems.":
          "Se identifica un buen nivel de conocimiento sobre las inspecciones previas del vehículo y los sistemas tecnológicos integrados.",
        "It will be appropriate to pay attention to carrying out prior inspections of the vehicle before making a trip.":
          "Será apropiado prestar atención a la realización de inspecciones previas del vehículo antes de realizar un viaje.",
        "Receive assistance in several of the safety procedures prior to driving, so it is recommended to follow up on the points described as areas of opportunity":
          "Recibe asistencia en varios de los procedimientos de seguridad previos a la conducción, por lo que se recomienda dar seguimiento a los puntos descritos como áreas de oportunidad.",
        "Demonstrates correct habits before driving, as well as good practices in the use of passive safety devices":
          "Demuestra hábitos correctos antes de conducir, así como buenas prácticas en el uso de dispositivos de seguridad pasiva.",
        "He has a good level of observation and identification of risk, so that during training he was able to cancel the influence of risk on his driving.":
          "Tiene un buen nivel de observación e identificación de riesgos, de modo que durante el entrenamiento pudo cancelar la influencia del riesgo en su conducción.",
        "You receive assistance in applying the procedure of observation, identification and anticipation of risk, and can incorporate preventive techniques into your driving to nullify the influence of risk on your driving.":
          "Recibes asistencia para aplicar el procedimiento de observación, identificación y anticipación del riesgo, y puedes incorporar técnicas preventivas en tu conducción para anular la influencia del riesgo en tu conducción.",
        "It is assisted in relation to safety distances from the vehicle in front.":
          "Se recibe asistencia con respecto a las distancias de seguridad con el vehículo de adelante.",
        "Maintains adequate safety distances from the vehicle in front":
          "Mantiene distancias de seguridad adecuadas con el vehículo de adelante.",
        "It identifies and controls well the situations that arise behind your vehicle, correctly anticipating potential risk situations.":
          "Identifica y controla bien las situaciones que se presentan detrás de su vehículo, anticipando correctamente situaciones potenciales de riesgo.",
        "Receive assistance in applying preventive techniques to identify and anticipate potential risk situations in the rear of your vehicle.":
          "Recibe asistencia para aplicar técnicas preventivas para identificar y anticipar situaciones potenciales de riesgo en la parte trasera de su vehículo.",
        "Assisted in developing preventative techniques to control intersections. It is important to continue practicing these techniques during daily driving to increase safety at intersections.":
          "Asistido en el desarrollo de técnicas preventivas para controlar intersecciones. Es importante continuar practicando estas técnicas durante la conducción diaria para aumentar la seguridad en las intersecciones.",
        "Carry out preventive practices that help maintain good control of intersections during training.":
          "Realiza prácticas preventivas que ayudan a mantener un buen control de las intersecciones durante el entrenamiento.",
        "Understands the concept of vulnerable users, is respectful and applies preventive techniques to safely coexist with this type of user.":
          "Comprende el concepto de usuarios vulnerables, es respetuoso y aplica técnicas preventivas para coexistir de forma segura con este tipo de usuario.",
        "Make position changes following the necessary procedures to execute them safely and in advance.":
          "Realiza cambios de posición siguiendo los procedimientos necesarios para ejecutarlos de forma segura y anticipada.",
        "Receive assistance in applying the procedures necessary to execute position changes safely and early.":
          "Recibe asistencia para aplicar los procedimientos necesarios para ejecutar cambios de posición de forma segura y anticipada.",
        "Develops the parking maneuver at a good level. Select a suitable place and present the appropriate technique.":
          "Desarrolla la maniobra de estacionamiento a buen nivel. Selecciona un lugar adecuado y presenta la técnica apropiada.",
        "Receives assistance and trains the parking maneuver, performing it satisfactorily.":
          "Recibe asistencia y entrena la maniobra de estacionamiento, realizándola satisfactoriamente.",
        "Properly operate the controls (steering wheel, pedal and gearbox) of the vehicle.":
          "Opera correctamente los controles (volante, pedal y caja de cambios) del vehículo.",
        "Receive assistance regarding the correct use of the controls (steering wheel, pedal and gearbox) of the vehicle. Trying to do it properly.":
          "Recibe asistencia respecto al uso correcto de los controles (volante, pedal y caja de cambios) del vehículo. Intentando hacerlo correctamente.",
        "This certificate is awarded to": "Este certificado se otorga a",
        "For successfully completing the": "Por completar con éxito el",
        "Director of Operations": "Director de Operaciones",
        "Through the assistance of the instructor and specific work on some of the preventive techniques proposed by the training, he/she manages to reach a satisfactory level. It is recommended to work individually on the development of the revised concepts so that you improve your evolution as a safe driver.":
          "A través de la asistencia del instructor y un trabajo específico sobre algunas de las técnicas preventivas propuestas por el entrenamiento, él/ella logra alcanzar un nivel satisfactorio. Se recomienda trabajar de forma individual en el desarrollo de los conceptos revisados para que puedas mejorar tu evolución como conductor seguro.",
        "Effectively develops the driving techniques proposed by the training.":
          "Desarrolla eficazmente las técnicas de conducción propuestas por el entrenamiento.",
        "Despite having little practical experience, demonstrated a good level of driving ability and successfully applied the techniques developed in training":
          "A pesar de tener poca experiencia práctica, demostró un buen nivel de habilidad al conducir y aplicó con éxito las técnicas desarrolladas en la formación",
        "No comments": "Sin comentarios",
        notApprovedReason:
          "No logra desarrollar en plenitud las técnicas de manejo preventivo propuestas por el entrenamiento. Se identifica un nivel de riesgo importante que llevan al dictamen de NO APROBADO. Se emitirá informe especial sobre las características del entrenamiento y las acciones recomendadas. No logra desarrollar en plenitud las técnicas de manejo preventivo propuestas por el entrenamiento. Se identifica un nivel de riesgo importante que llevan al dictamen de NO APROBADO. Se emitirá informe especial sobre las características del entrenamiento y las acciones recomendadas. No logra desarrollar en plenitud las técnicas de manejo preventivo propuestas por el entrenamiento. Se identifica un nivel de riesgo importante que llevan al dictamen de NO APROBADO. Se emitirá informe especial sobre las características del entrenamiento y las acciones recomendadas.",
      },
    },
    nl: {
      translation: {
        title: "UITGEBREID VERSLAG VAN PRAKTISCHE TRAINING",
        fullName: "Volledige Naam",
        company: "Bedrijf",
        transmissionType: "Type Transmissie",
        activityName: "Activiteit Naam",
        activityDue: "Activiteit",
        licenseDue: "Licentie Vervaldatum",
        yearsExperience: "Jaren Ervaring",
        country: "Land",
        resultObtained: "Behaald Resultaat",
        appliedWithoutAssistance: "Toegepast zonder hulp",
        appliedWithTraining: "Toegepast met training",
        opportunityArea: "Kansgebied",
        criticalElements: "Kritieke elementen",
        performanceReview: "Prestatiebeoordeling",
        safeDrivingBySegment:
          "Toepassing van veilige rijtechnieken per segment",
        moduleLabels: {
          module1: "Voorafgaande inspecties",
          module2: "Voor vertrek",
          module3: "Tijdens de rit",
          module4: "Parkeren",
          module5: "Bediening van de bedieningselementen",
          module6: "Houding",
        },
        criticalElementsIdentified:
          "Kritieke elementen geïdentificeerd tijdens de training",
        Automatic: "Automatisch",
        Manual: "Handmatig",
        "More than 5": "Meer dan 5",
        "More than 10": "Meer dan 10",
        "No Data": "Geen gegevens",
        Approved: "Goedgekeurd",
        "Approved with observations": "Goedgekeurd met opmerkingen",
        "Not approved": "Niet goedgekeurd",
        BELGIUM: "België",
        CROATIA: "Kroatië",
        ESPAÑA: "Spanje",
        FRANCE: "Frankrijk",
        FRANKREICH: "Frankrijk",
        GERMANY: "Duitsland",
        ITALIA: "Italië",
        NETHERLANDS: "Nederland",
        POLAND: "Polen",
        inadequateSpeed: "Onvoldoende snelheid",
        trafficViolation: "Verkeersovertreding",
        aggressiveness: "Agressiviteit",
        distractionWhileDriving: "Afleiding tijdens het rijden",
        doesNotTransmitSecurity: "Zorgt niet voor veiligheid",
        doesNotCoordinateGearbox: "Coördineert de versnellingsbak niet",
        recklessDriving: "Roekeloos rijden",
        noDrivingExperience: "Geen rijervaring",
        newness: "Nieuwheid",
        item: "item",
        generalComments: "Algemene Opmerkingen",
        DETECTED: "GEDETECTEERD",
        "NOT DETECTED": "NIET GEDETECTEERD",
        report: "Verslag",
        certificate: "Certificaat",
        "Training Course": "Opleidingscursus",
        Certificate: "Certificaat",
        "A good level of knowledge is identified regarding previous vehicle inspections and integrated technological systems.":
          "Er is een goed kennisniveau vastgesteld over eerdere voertuiginspecties en geïntegreerde technologische systemen.",
        "It will be appropriate to pay attention to carrying out prior inspections of the vehicle before making a trip.":
          "Het is gepast om aandacht te besteden aan het uitvoeren van voorafgaande inspecties van het voertuig voordat u op reis gaat.",
        "Receive assistance in several of the safety procedures prior to driving, so it is recommended to follow up on the points described as areas of opportunity":
          "Ontvang hulp bij verschillende veiligheidsprocedures vóór het rijden, dus het wordt aanbevolen om de punten die als verbeterpunten worden beschreven op te volgen.",
        "Demonstrates correct habits before driving, as well as good practices in the use of passive safety devices":
          "Toont correcte gewoonten voor het rijden, evenals goede praktijken in het gebruik van passieve veiligheidsvoorzieningen.",
        "He has a good level of observation and identification of risk, so that during training he was able to cancel the influence of risk on his driving.":
          "Hij heeft een goed niveau van observatie en risicobeoordeling, zodat hij tijdens de training de invloed van risico op zijn rijgedrag kon neutraliseren.",
        "You receive assistance in applying the procedure of observation, identification and anticipation of risk, and can incorporate preventive techniques into your driving to nullify the influence of risk on your driving.":
          "U krijgt hulp bij het toepassen van het proces van observatie, identificatie en anticipatie van risico's, en kunt preventieve technieken in uw rijstijl integreren om de invloed van risico's op uw rijgedrag te neutraliseren.",
        "It is assisted in relation to safety distances from the vehicle in front.":
          "Er wordt hulp geboden met betrekking tot de veiligheidsafstanden tot het voertuig voor u.",
        "Maintains adequate safety distances from the vehicle in front":
          "Handhaaft adequate veiligheidsafstanden tot het voertuig voor zich.",
        "It identifies and controls well the situations that arise behind your vehicle, correctly anticipating potential risk situations.":
          "Het identificeert en controleert goed de situaties die zich achter uw voertuig voordoen, en anticipeert correct op potentiële risicosituaties.",
        "Receive assistance in applying preventive techniques to identify and anticipate potential risk situations in the rear of your vehicle.":
          "Ontvang hulp bij het toepassen van preventieve technieken om potentiële risicosituaties achter uw voertuig te identificeren en te anticiperen.",
        "Assisted in developing preventative techniques to control intersections. It is important to continue practicing these techniques during daily driving to increase safety at intersections.":
          "Geassisteerd bij het ontwikkelen van preventieve technieken om kruispunten te beheersen. Het is belangrijk om deze technieken tijdens het dagelijks rijden te blijven oefenen om de veiligheid bij kruispunten te vergroten.",
        "Carry out preventive practices that help maintain good control of intersections during training.":
          "Voer preventieve praktijken uit die helpen om een goede controle over kruispunten te behouden tijdens de training.",
        "Understands the concept of vulnerable users, is respectful and applies preventive techniques to safely coexist with this type of user.":
          "Begrijpt het concept van kwetsbare weggebruikers, is respectvol en past preventieve technieken toe om veilig samen te leven met dit type gebruiker.",
        "Make position changes following the necessary procedures to execute them safely and in advance.":
          "Voer positie veranderingen uit volgens de benodigde procedures om ze veilig en op tijd uit te voeren.",
        "Receive assistance in applying the procedures necessary to execute position changes safely and early.":
          "Ontvang hulp bij het toepassen van de procedures die nodig zijn om positie veranderingen veilig en tijdig uit te voeren.",
        "Develops the parking maneuver at a good level. Select a suitable place and present the appropriate technique.":
          "Ontwikkelt de parkeer manoeuvre op een goed niveau. Kies een geschikte plek en presenteer de juiste techniek.",
        "Receives assistance and trains the parking maneuver, performing it satisfactorily.":
          "Ontvangt assistentie en oefent de parkeer manoeuvre, waarbij deze naar tevredenheid wordt uitgevoerd.",
        "Properly operate the controls (steering wheel, pedal and gearbox) of the vehicle.":
          "Bedient de bedieningselementen (stuur, pedaal en versnellingsbak) van het voertuig correct.",
        "Receive assistance regarding the correct use of the controls (steering wheel, pedal and gearbox) of the vehicle. Trying to do it properly.":
          "Krijgt hulp bij het juiste gebruik van de bedieningselementen (stuur, pedaal en versnellingsbak) van het voertuig. Probeert het correct te doen.",
        "This certificate is awarded to": "Dit certificaat wordt toegekend aan",
        "For successfully completing the":
          "Voor het succesvol voltooien van de",
        "Director of Operations": "Directeur Operaties",
        "Through the assistance of the instructor and specific work on some of the preventive techniques proposed by the training, he/she manages to reach a satisfactory level. It is recommended to work individually on the development of the revised concepts so that you improve your evolution as a safe driver.":
          "Door de hulp van de instructeur en specifiek werk aan enkele van de preventieve technieken die door de training worden voorgesteld, slaagt hij/zij erin een bevredigend niveau te bereiken. Het wordt aanbevolen om individueel te werken aan de ontwikkeling van de herziende concepten zodat je je evolutie als veilige bestuurder kunt verbeteren.",
        "Effectively develops the driving techniques proposed by the training.":
          "Ontwikkelt effectief de rijtechnieken die tijdens de training zijn voorgesteld.",
        "Despite having little practical experience, demonstrated a good level of driving ability and successfully applied the techniques developed in training":
          "Ondanks weinig praktijkervaring toonde hij een goed rijvermogen en paste hij met succes de aangeleerde technieken toe",
        "No comments": "Geen opmerkingen",
        notApprovedReason:
          "De preventieve rijtechnieken voorgesteld in de training worden niet volledig ontwikkeld. Er wordt een belangrijk risiconiveau vastgesteld dat leidt tot het oordeel NIET GOEDGEKEURD. Er zal een speciaal rapport worden opgesteld over de kenmerken van de training en de aanbevolen acties. De preventieve rijtechnieken voorgesteld in de training worden niet volledig ontwikkeld. Er wordt een belangrijk risiconiveau vastgesteld dat leidt tot het oordeel NIET GOEDGEKEURD. Er zal een speciaal rapport worden opgesteld over de kenmerken van de training en de aanbevolen acties. De preventieve rijtechnieken voorgesteld in de training worden niet volledig ontwikkeld. Er wordt een belangrijk risiconiveau vastgesteld dat leidt tot het oordeel NIET GOEDGEKEURD. Er zal een speciaal rapport worden opgesteld over de kenmerken van de training en de aanbevolen acties.",
      },
    },
    fr: {
      translation: {
        title: "RAPPORT EXÉCUTIF DE FORMATION PRATIQUE",
        fullName: "Nom Complet",
        company: "Entreprise",
        transmissionType: "Type de Transmission",
        activityName: "Nom de l'Activité",
        activityDue: "Activité",
        licenseDue: "Date d'Échéance de la Licence",
        yearsExperience: "Années d'Expérience",
        country: "Pays",
        resultObtained: "Résultat Obtenu",
        appliedWithoutAssistance: "Appliqué sans assistance",
        appliedWithTraining: "Appliqué avec formation",
        opportunityArea: "Zone d'opportunité",
        criticalElements: "Éléments critiques",
        performanceReview: "Évaluation de Performance",
        safeDrivingBySegment:
          "Application des techniques de conduite sécuritaire par segment",
        moduleLabels: {
          module1: "Inspections préalables",
          module2: "Avant le départ",
          module3: "Pendant le trajet",
          module4: "Stationnement",
          module5: "Commandes du véhicule",
          module6: "Attitude",
        },
        criticalElementsIdentified:
          "Éléments critiques identifiés pendant la formation",
        Automatic: "Automatique",
        Manual: "Manuel",
        "More than 5": "Plus de 5",
        "More than 10": "Plus de 10",
        "No Data": "Aucune donnée",
        Approved: "Approuvé",
        "Approved with observations": "Approuvé avec observations",
        "Not approved": "Non approuvé",
        BELGIUM: "Belgique",
        CROATIA: "Croatie",
        ESPAÑA: "Espagne",
        FRANCE: "France",
        FRANKREICH: "France",
        GERMANY: "Allemagne",
        ITALIA: "Italie",
        NETHERLANDS: "Pays-Bas",
        POLAND: "Pologne",
        inadequateSpeed: "Vitesse inadéquate",
        trafficViolation: "Infraction au code de la route",
        aggressiveness: "Agressivité",
        distractionWhileDriving: "Distraction pendant la conduite",
        doesNotTransmitSecurity: "Ne transmet pas la sécurité",
        doesNotCoordinateGearbox: "Ne coordonne pas la boîte de vitesses",
        recklessDriving: "Conduite imprudente",
        noDrivingExperience: "Aucune expérience de conduite",
        newness: "Nouvelle expérience",
        item: "article",
        generalComments: "Commentaires Généraux",
        DETECTED: "DÉTECTÉ",
        "NOT DETECTED": "NON DÉTECTÉ",
        report: "Rapport",
        certificate: "Certificat",
        "Training Course": "Cours de Formation",
        Certificate: "Certificat",
        "A good level of knowledge is identified regarding previous vehicle inspections and integrated technological systems.":
          "Un bon niveau de connaissance est identifié concernant les inspections antérieures du véhicule et les systèmes technologiques intégrés.",
        "It will be appropriate to pay attention to carrying out prior inspections of the vehicle before making a trip.":
          "Il convient de prêter attention à la réalisation d'inspections préalables du véhicule avant d'effectuer un trajet.",
        "Receive assistance in several of the safety procedures prior to driving, so it is recommended to follow up on the points described as areas of opportunity":
          "Recevez une assistance dans plusieurs des procédures de sécurité avant de conduire, il est donc recommandé de suivre les points décrits comme des axes d'amélioration.",
        "Demonstrates correct habits before driving, as well as good practices in the use of passive safety devices":
          "Démontre de bonnes habitudes avant de conduire, ainsi que de bonnes pratiques dans l'utilisation des dispositifs de sécurité passive.",
        "He has a good level of observation and identification of risk, so that during training he was able to cancel the influence of risk on his driving.":
          "Il a un bon niveau d'observation et d'identification des risques, de sorte que pendant la formation, il a pu annuler l'influence du risque sur sa conduite.",
        "You receive assistance in applying the procedure of observation, identification and anticipation of risk, and can incorporate preventive techniques into your driving to nullify the influence of risk on your driving.":
          "Vous recevez une assistance pour appliquer la procédure d'observation, d'identification et d'anticipation des risques, et vous pouvez intégrer des techniques préventives dans votre conduite pour annuler l'influence des risques sur votre conduite.",
        "It is assisted in relation to safety distances from the vehicle in front.":
          "Il reçoit une assistance concernant les distances de sécurité avec le véhicule devant.",
        "Maintains adequate safety distances from the vehicle in front":
          "Maintient des distances de sécurité adéquates avec le véhicule devant.",
        "It identifies and controls well the situations that arise behind your vehicle, correctly anticipating potential risk situations.":
          "Il identifie et contrôle bien les situations qui se présentent derrière votre véhicule, anticipant correctement les situations à risque potentielles.",
        "Receive assistance in applying preventive techniques to identify and anticipate potential risk situations in the rear of your vehicle.":
          "Recevez une assistance pour appliquer des techniques préventives afin d'identifier et d'anticiper les situations à risque potentielles à l'arrière de votre véhicule.",
        "Assisted in developing preventative techniques to control intersections. It is important to continue practicing these techniques during daily driving to increase safety at intersections.":
          "Assisté dans le développement de techniques préventives pour contrôler les intersections. Il est important de continuer à pratiquer ces techniques pendant la conduite quotidienne pour augmenter la sécurité aux intersections.",
        "Carry out preventive practices that help maintain good control of intersections during training.":
          "Effectuez des pratiques préventives qui aident à maintenir un bon contrôle des intersections pendant la formation.",
        "Understands the concept of vulnerable users, is respectful and applies preventive techniques to safely coexist with this type of user.":
          "Comprend le concept des usagers vulnérables, est respectueux et applique des techniques préventives pour coexister en toute sécurité avec ce type d'usager.",
        "Make position changes following the necessary procedures to execute them safely and in advance.":
          "Effectue des changements de position en suivant les procédures nécessaires pour les exécuter en toute sécurité et à l'avance.",
        "Receive assistance in applying the procedures necessary to execute position changes safely and early.":
          "Recevez une assistance pour appliquer les procédures nécessaires à l'exécution des changements de position en toute sécurité et en avance.",
        "Develops the parking maneuver at a good level. Select a suitable place and present the appropriate technique.":
          "Développe la manœuvre de stationnement à un bon niveau. Choisissez un endroit approprié et présentez la technique adéquate.",
        "Receives assistance and trains the parking maneuver, performing it satisfactorily.":
          "Reçoit de l'aide et s'entraîne à la manœuvre de stationnement, la réalisant de manière satisfaisante.",
        "Properly operate the controls (steering wheel, pedal and gearbox) of the vehicle.":
          "Manipule correctement les commandes (volant, pédale et boîte de vitesses) du véhicule.",
        "Receive assistance regarding the correct use of the controls (steering wheel, pedal and gearbox) of the vehicle. Trying to do it properly.":
          "Reçoit une assistance concernant la bonne utilisation des commandes (volant, pédale et boîte de vitesses) du véhicule. Essaie de bien faire.",
        "This certificate is awarded to": "Ce certificat est décerné à",
        "For successfully completing the": "Pour avoir réussi le",
        "Director of Operations": "Directeur des Opérations",
        "Through the assistance of the instructor and specific work on some of the preventive techniques proposed by the training, he/she manages to reach a satisfactory level. It is recommended to work individually on the development of the revised concepts so that you improve your evolution as a safe driver.":
          "Grâce à l'assistance de l'instructeur et à un travail spécifique sur certaines des techniques préventives proposées par la formation, il/elle parvient à atteindre un niveau satisfaisant. Il est recommandé de travailler individuellement sur le développement des concepts révisés afin d'améliorer votre évolution en tant que conducteur sûr.",
        "Effectively develops the driving techniques proposed by the training.":
          "Développe efficacement les techniques de conduite proposées par la formation.",
        "Despite having little practical experience, demonstrated a good level of driving ability and successfully applied the techniques developed in training":
          "Bien qu’il ait peu d’expérience pratique, il a démontré de bonnes aptitudes à la conduite et a appliqué avec succès les techniques acquises pendant la formation",
        "No comments": "Aucun commentaire",
        notApprovedReason:
          "Ne parvient pas à développer pleinement les techniques de conduite préventive proposées par la formation. Un niveau de risque important a été identifié, ce qui conduit à la décision de NON APPROUVÉ. Un rapport spécial sera émis sur les caractéristiques de la formation et les actions recommandées. Ne parvient pas à développer pleinement les techniques de conduite préventive proposées par la formation. Un niveau de risque important a été identifié, ce qui conduit à la décision de NON APPROUVÉ. Un rapport spécial sera émis sur les caractéristiques de la formation et les actions recommandées. Ne parvient pas à développer pleinement les techniques de conduite préventive proposées par la formation. Un niveau de risque important a été identifié, ce qui conduit à la décision de NON APPROUVÉ. Un rapport spécial sera émis sur les caractéristiques de la formation et les actions recommandées.",
      },
    },
    de: {
      translation: {
        title: "EXECUTIVE-BERICHT ÜBER PRAKTISCHE AUSBILDUNG",
        fullName: "Vollständiger Name",
        company: "Unternehmen",
        transmissionType: "Übertragungsart",
        activityName: "Aktivitätsname",
        activityDue: "Aktivität",
        licenseDue: "Lizenzfälligkeit",
        yearsExperience: "Jahre Erfahrung",
        country: "Land",
        resultObtained: "Erzieltes Ergebnis",
        appliedWithoutAssistance: "Angewendet ohne Unterstützung",
        appliedWithTraining: "Angewendet mit Schulung",
        opportunityArea: "Möglichkeitsbereich",
        criticalElements: "Kritische Elemente",
        performanceReview: "Leistungsbeurteilung",
        safeDrivingBySegment: "Anwendung sicherer Fahrtechniken nach Segment",
        moduleLabels: {
          module1: "Vorherige Inspektionen",
          module2: "Vor der Abfahrt",
          module3: "Während der Fahrt",
          module4: "Parken",
          module5: "Bedienung der Steuerungen",
          module6: "Einstellung",
        },
        criticalElementsIdentified:
          "Kritische Elemente während des Trainings identifiziert",
        Automatic: "Automatisch",
        Manual: "Manuell",
        "More than 5": "Mehr als 5",
        "More than 10": "Mehr als 10",
        "No Data": "Keine Daten",
        Approved: "Genehmigt",
        "Approved with observations": "Genehmigt mit Anmerkungen",
        "Not approved": "Nicht genehmigt",
        BELGIUM: "Belgien",
        CROATIA: "Kroatien",
        ESPAÑA: "Spanien",
        FRANCE: "Frankreich",
        FRANKREICH: "Frankreich",
        GERMANY: "Deutschland",
        ITALIA: "Italien",
        NETHERLANDS: "Niederlande",
        POLAND: "Polen",
        inadequateSpeed: "Unzureichende Geschwindigkeit",
        trafficViolation: "Verkehrsverstoß",
        aggressiveness: "Aggressivität",
        distractionWhileDriving: "Ablenkung während der Fahrt",
        doesNotTransmitSecurity: "Überträgt keine Sicherheit",
        doesNotCoordinateGearbox: "Koordiniert das Getriebe nicht",
        recklessDriving: "Rücksichtsloses Fahren",
        noDrivingExperience: "Keine Fahrerfahrung",
        newness: "Neuheit",
        item: "Artikel",
        generalComments: "Allgemeine Kommentare",
        DETECTED: "ERKANNT",
        "NOT DETECTED": "NICHT ERKANNT",
        report: "Bericht",
        certificate: "Zertifikat",
        "Training Course": "Schulungskurs",
        Certificate: "Zertifikat",
        "A good level of knowledge is identified regarding previous vehicle inspections and integrated technological systems.":
          "Ein gutes Wissensniveau in Bezug auf frühere Fahrzeuginspektionen und integrierte technologische Systeme wurde festgestellt.",
        "It will be appropriate to pay attention to carrying out prior inspections of the vehicle before making a trip.":
          "Es ist angebracht, vor der Fahrt eine vorherige Fahrzeuginspektion durchzuführen.",
        "Receive assistance in several of the safety procedures prior to driving, so it is recommended to follow up on the points described as areas of opportunity":
          "Erhält Unterstützung bei mehreren Sicherheitsverfahren vor der Fahrt, daher wird empfohlen, die als Verbesserungsmöglichkeiten beschriebenen Punkte zu verfolgen.",
        "Demonstrates correct habits before driving, as well as good practices in the use of passive safety devices":
          "Zeigt richtige Gewohnheiten vor dem Fahren sowie gute Praktiken bei der Verwendung passiver Sicherheitsvorrichtungen.",
        "He has a good level of observation and identification of risk, so that during training he was able to cancel the influence of risk on his driving.":
          "Er verfügt über ein gutes Beobachtungs- und Risikoerkennungsvermögen, sodass er während der Ausbildung den Einfluss von Risiken auf sein Fahrverhalten neutralisieren konnte.",
        "You receive assistance in applying the procedure of observation, identification and anticipation of risk, and can incorporate preventive techniques into your driving to nullify the influence of risk on your driving.":
          "Sie erhalten Unterstützung bei der Anwendung des Verfahrens zur Beobachtung, Identifizierung und Antizipation von Risiken und können präventive Techniken in Ihr Fahrverhalten integrieren, um den Einfluss von Risiken auf Ihr Fahrverhalten zu neutralisieren.",
        "It is assisted in relation to safety distances from the vehicle in front.":
          "Unterstützung wird in Bezug auf Sicherheitsabstände zum vorausfahrenden Fahrzeug geleistet.",
        "Maintains adequate safety distances from the vehicle in front":
          "Hält angemessene Sicherheitsabstände zum vorausfahrenden Fahrzeug ein.",
        "It identifies and controls well the situations that arise behind your vehicle, correctly anticipating potential risk situations.":
          "Es identifiziert und kontrolliert gut die Situationen, die hinter Ihrem Fahrzeug auftreten, und antizipiert potenzielle Risikosituationen korrekt.",
        "Receive assistance in applying preventive techniques to identify and anticipate potential risk situations in the rear of your vehicle.":
          "Erhält Unterstützung bei der Anwendung präventiver Techniken zur Identifizierung und Antizipation potenzieller Risikosituationen hinter Ihrem Fahrzeug.",
        "Assisted in developing preventative techniques to control intersections. It is important to continue practicing these techniques during daily driving to increase safety at intersections.":
          "Unterstützt bei der Entwicklung präventiver Techniken zur Kontrolle von Kreuzungen. Es ist wichtig, diese Techniken während des täglichen Fahrens weiter zu üben, um die Sicherheit an Kreuzungen zu erhöhen.",
        "Carry out preventive practices that help maintain good control of intersections during training.":
          "Führt während des Trainings präventive Praktiken durch, die dazu beitragen, Kreuzungen gut zu kontrollieren.",
        "Understands the concept of vulnerable users, is respectful and applies preventive techniques to safely coexist with this type of user.":
          "Versteht das Konzept der gefährdeten Nutzer, ist respektvoll und wendet präventive Techniken an, um sicher mit dieser Nutzergruppe zusammenzuleben.",
        "Make position changes following the necessary procedures to execute them safely and in advance.":
          "Führt Positionsänderungen unter Einhaltung der notwendigen Verfahren sicher und rechtzeitig durch.",
        "Receive assistance in applying the procedures necessary to execute position changes safely and early.":
          "Erhält Unterstützung bei der Anwendung der Verfahren, die notwendig sind, um Positionsänderungen sicher und frühzeitig durchzuführen.",
        "Develops the parking maneuver at a good level. Select a suitable place and present the appropriate technique.":
          "Entwickelt die Parkmanöver auf gutem Niveau. Wählt einen geeigneten Platz und zeigt die entsprechende Technik.",
        "Receives assistance and trains the parking maneuver, performing it satisfactorily.":
          "Erhält Unterstützung und trainiert das Parkmanöver, das zufriedenstellend ausgeführt wird.",
        "Properly operate the controls (steering wheel, pedal and gearbox) of the vehicle.":
          "Bedient die Steuerungselemente (Lenkrad, Pedal und Getriebe) des Fahrzeugs korrekt.",
        "Receive assistance regarding the correct use of the controls (steering wheel, pedal and gearbox) of the vehicle. Trying to do it properly.":
          "Erhält Unterstützung bei der korrekten Bedienung der Steuerungselemente (Lenkrad, Pedal und Getriebe) des Fahrzeugs. Versucht, es richtig zu machen.",
        "This certificate is awarded to": "Dieses Zertifikat wird verliehen an",
        "For successfully completing the":
          "Für das erfolgreiche Absolvieren des",
        "Director of Operations": "Betriebsleiter",
        "Through the assistance of the instructor and specific work on some of the preventive techniques proposed by the training, he/she manages to reach a satisfactory level. It is recommended to work individually on the development of the revised concepts so that you improve your evolution as a safe driver.":
          "Durch die Unterstützung des Ausbilders und spezifische Arbeit an einigen der präventiven Techniken, die im Training vorgeschlagen wurden, erreicht er/sie ein zufriedenstellendes Niveau. Es wird empfohlen, individuell an der Entwicklung der überarbeiteten Konzepte zu arbeiten, damit Sie Ihre Entwicklung als sicherer Fahrer verbessern.",
        "Effectively develops the driving techniques proposed by the training.":
          "Entwickelt die im Training vorgeschlagenen Fahrtechniken effektiv.",
        "Despite having little practical experience, demonstrated a good level of driving ability and successfully applied the techniques developed in training":
          "Trotz wenig praktischer Erfahrung zeigte er gute Fahrfähigkeiten und wandte erfolgreich die in der Schulung erlernten Techniken an",
        "No comments": "Keine Kommentare",
        notApprovedReason:
          "Die präventiven Fahrtechniken, die im Training vermittelt werden, konnten nicht vollständig entwickelt werden. Es wurde ein erhebliches Risiko festgestellt, das zur Entscheidung NICHT GENEHMIGT führt. Ein Sonderbericht über die Schulung und empfohlene Maßnahmen wird erstellt. Die präventiven Fahrtechniken, die im Training vermittelt werden, konnten nicht vollständig entwickelt werden. Es wurde ein erhebliches Risiko festgestellt, das zur Entscheidung NICHT GENEHMIGT führt. Ein Sonderbericht über die Schulung und empfohlene Maßnahmen wird erstellt. Die präventiven Fahrtechniken, die im Training vermittelt werden, konnten nicht vollständig entwickelt werden. Es wurde ein erhebliches Risiko festgestellt, das zur Entscheidung NICHT GENEHMIGT führt. Ein Sonderbericht über die Schulung und empfohlene Maßnahmen wird erstellt.",
      },
    },
    pl: {
      translation: {
        title: "RAPORT WYKONAWCZY SZKOLEŃ PRAKTYCZNYCH",
        fullName: "Pełne Imię",
        company: "Firma",
        transmissionType: "Typ Transmisji",
        activityName: "Nazwa Aktywności",
        activityDue: "Aktywność",
        licenseDue: "Termin Licencji",
        yearsExperience: "Lata Doświadczenia",
        country: "Kraj",
        resultObtained: "Osiągnięty Wynik",
        appliedWithoutAssistance: "Zastosowano bez pomocy",
        appliedWithTraining: "Zastosowano z treningiem",
        opportunityArea: "Obszar możliwości",
        criticalElements: "Elementy krytyczne",
        performanceReview: "Ocena Wydajności",
        safeDrivingBySegment:
          "Stosowanie bezpiecznych technik jazdy według segmentów",
        moduleLabels: {
          module1: "Wstępne inspekcje",
          module2: "Przed wyjazdem",
          module3: "Podczas jazdy",
          module4: "Parkowanie",
          module5: "Obsługa elementów sterujących",
          module6: "Postawa",
        },
        criticalElementsIdentified:
          "Elementy krytyczne zidentyfikowane podczas szkolenia",
        Automatic: "Automatyczny",
        Manual: "Ręczny",
        "More than 5": "Więcej niż 5",
        "More than 10": "Więcej niż 10",
        "No Data": "Brak danych",
        Approved: "Zaakceptowane",
        "Approved with observations": "Zaakceptowane z uwagami",
        "Not approved": "Odrzucone",
        BELGIUM: "Belgia",
        CROATIA: "Chorwacja",
        ESPAÑA: "Hiszpania",
        FRANCE: "Francja",
        FRANKREICH: "Francja",
        GERMANY: "Niemcy",
        ITALIA: "Włochy",
        NETHERLANDS: "Holandia",
        POLAND: "Polska",
        inadequateSpeed: "Niewłaściwa prędkość",
        trafficViolation: "Wykroczenie drogowe",
        aggressiveness: "Agressywność",
        distractionWhileDriving: "Rozproszenie uwagi podczas jazdy",
        doesNotTransmitSecurity: "Nie zapewnia bezpieczeństwa",
        doesNotCoordinateGearbox: "Nie koordynuje skrzyni biegów",
        recklessDriving: "Brawurowa jazda",
        noDrivingExperience: "Brak doświadczenia w prowadzeniu",
        newness: "Nowość",
        item: "element",
        generalComments: "Ogólne Komentarze",
        DETECTED: "WYKRYTO",
        "NOT DETECTED": "NIE WYKRYTO",
        report: "Raport",
        certificate: "Certyfikat",
        "Training Course": "Kurs Szkoleniowy",
        Certificate: "Certyfikat",
        "A good level of knowledge is identified regarding previous vehicle inspections and integrated technological systems.":
          "Zidentyfikowano dobry poziom wiedzy dotyczącej wcześniejszych przeglądów pojazdu i zintegrowanych systemów technologicznych.",
        "It will be appropriate to pay attention to carrying out prior inspections of the vehicle before making a trip.":
          "Właściwe będzie zwrócenie uwagi na przeprowadzanie wcześniejszych inspekcji pojazdu przed wyjazdem.",
        "Receive assistance in several of the safety procedures prior to driving, so it is recommended to follow up on the points described as areas of opportunity":
          "Otrzymujesz pomoc w kilku procedurach bezpieczeństwa przed jazdą, dlatego zaleca się śledzenie punktów opisanych jako obszary do poprawy.",
        "Demonstrates correct habits before driving, as well as good practices in the use of passive safety devices":
          "Wykazuje prawidłowe nawyki przed jazdą oraz dobre praktyki w używaniu pasywnych urządzeń bezpieczeństwa.",
        "He has a good level of observation and identification of risk, so that during training he was able to cancel the influence of risk on his driving.":
          "Posiada dobry poziom obserwacji i identyfikacji ryzyka, dzięki czemu podczas szkolenia potrafił zneutralizować wpływ ryzyka na swoją jazdę.",
        "You receive assistance in applying the procedure of observation, identification and anticipation of risk, and can incorporate preventive techniques into your driving to nullify the influence of risk on your driving.":
          "Otrzymujesz pomoc w stosowaniu procedury obserwacji, identyfikacji i przewidywania ryzyka oraz możesz włączyć techniki zapobiegawcze do swojej jazdy, aby zneutralizować wpływ ryzyka na swoją jazdę.",
        "It is assisted in relation to safety distances from the vehicle in front.":
          "Otrzymuje wsparcie w zakresie zachowania bezpiecznych odległości od pojazdu przed nim.",
        "Maintains adequate safety distances from the vehicle in front":
          "Utrzymuje odpowiednie odległości bezpieczeństwa od pojazdu przed nim.",
        "It identifies and controls well the situations that arise behind your vehicle, correctly anticipating potential risk situations.":
          "Dobrze identyfikuje i kontroluje sytuacje za pojazdem, prawidłowo przewidując potencjalne sytuacje ryzyka.",
        "Receive assistance in applying preventive techniques to identify and anticipate potential risk situations in the rear of your vehicle.":
          "Otrzymujesz pomoc w stosowaniu technik zapobiegawczych do identyfikacji i przewidywania potencjalnych sytuacji ryzyka z tyłu pojazdu.",
        "Assisted in developing preventative techniques to control intersections. It is important to continue practicing these techniques during daily driving to increase safety at intersections.":
          "Otrzymuje wsparcie w rozwijaniu technik zapobiegawczych do kontrolowania skrzyżowań. Ważne jest, aby kontynuować ćwiczenia tych technik podczas codziennej jazdy, aby zwiększyć bezpieczeństwo na skrzyżowaniach.",
        "Carry out preventive practices that help maintain good control of intersections during training.":
          "Wykonuje praktyki zapobiegawcze pomagające utrzymać dobrą kontrolę nad skrzyżowaniami podczas szkolenia.",
        "Understands the concept of vulnerable users, is respectful and applies preventive techniques to safely coexist with this type of user.":
          "Rozumie pojęcie użytkowników wrażliwych, jest szanujący i stosuje techniki zapobiegawcze, aby bezpiecznie współistnieć z tego typu użytkownikami.",
        "Make position changes following the necessary procedures to execute them safely and in advance.":
          "Dokonuje zmian pozycji, stosując niezbędne procedury do ich bezpiecznego i wcześniejszego wykonania.",
        "Receive assistance in applying the procedures necessary to execute position changes safely and early.":
          "Otrzymujesz pomoc w stosowaniu procedur niezbędnych do bezpiecznego i wcześniejszego wykonywania zmian pozycji.",
        "Develops the parking maneuver at a good level. Select a suitable place and present the appropriate technique.":
          "Wykonuje manewr parkowania na dobrym poziomie. Wybiera odpowiednie miejsce i prezentuje właściwą technikę.",
        "Receives assistance and trains the parking maneuver, performing it satisfactorily.":
          "Otrzymuje wsparcie i ćwiczy manewr parkowania, wykonując go zadowalająco.",
        "Properly operate the controls (steering wheel, pedal and gearbox) of the vehicle.":
          "Prawidłowo obsługuje sterowanie (kierownicę, pedał i skrzynię biegów) pojazdu.",
        "Receive assistance regarding the correct use of the controls (steering wheel, pedal and gearbox) of the vehicle. Trying to do it properly.":
          "Otrzymujesz pomoc dotyczącą prawidłowego użycia sterowania (kierownica, pedał i skrzynia biegów) pojazdu. Próbuje robić to poprawnie.",
        "This certificate is awarded to": "Ten certyfikat jest przyznawany",
        "For successfully completing the": "Za pomyślne ukończenie",
        "Director of Operations": "Dyrektor Operacyjny",
        "Through the assistance of the instructor and specific work on some of the preventive techniques proposed by the training, he/she manages to reach a satisfactory level. It is recommended to work individually on the development of the revised concepts so that you improve your evolution as a safe driver.":
          "Dzięki pomocy instruktora i pracy nad niektórymi z technik prewencyjnych zaproponowanych w trakcie szkolenia, udaje mu/jej się osiągnąć zadowalający poziom. Zaleca się pracę indywidualną nad rozwojem przeglądanych koncepcji, aby poprawić swoją ewolucję jako bezpieczny kierowca.",
        "Effectively develops the driving techniques proposed by the training.":
          "Skutecznie rozwija techniki jazdy zaproponowane podczas szkolenia.",
        "Despite having little practical experience, demonstrated a good level of driving ability and successfully applied the techniques developed in training":
          "Pomimo niewielkiego doświadczenia praktycznego wykazał się dobrą umiejętnością jazdy i skutecznie zastosował techniki opracowane podczas szkolenia",
        "No comments": "Brak komentarzy",
        notApprovedReason:
          "Nie rozwija w pełni technik jazdy defensywnej zaproponowanych podczas szkolenia. Zidentyfikowano istotny poziom ryzyka, co prowadzi do decyzji NIEZATWIERDZONY. Zostanie wydany specjalny raport dotyczący cech szkolenia i zalecanych działań. Nie rozwija w pełni technik jazdy defensywnej zaproponowanych podczas szkolenia. Zidentyfikowano istotny poziom ryzyka, co prowadzi do decyzji NIEZATWIERDZONY. Zostanie wydany specjalny raport dotyczący cech szkolenia i zalecanych działań. Nie rozwija w pełni technik jazdy defensywnej zaproponowanych podczas szkolenia. Zidentyfikowano istotny poziom ryzyka, co prowadzi do decyzji NIEZATWIERDZONY. Zostanie wydany specjalny raport dotyczący cech szkolenia i zalecanych działań.",
      },
    },
    hr: {
      translation: {
        title: "IZVRŠNO IZVJEŠĆE O PRAKTIČNOJ OBUCI",
        fullName: "Puno Ime",
        company: "Tvrtka",
        transmissionType: "Vrsta Prijenosa",
        activityName: "Naziv Aktivnosti",
        activityDue: "Aktivnost",
        licenseDue: "Datum Isteka Licencije",
        yearsExperience: "Godine Iskustva",
        country: "Zemlja",
        resultObtained: "Postignuti Rezultat",
        appliedWithoutAssistance: "Primijenjeno bez pomoći",
        appliedWithTraining: "Primijenjeno uz obuku",
        opportunityArea: "Područje prilika",
        criticalElements: "Kritični elementi",
        performanceReview: "Pregled Učinkovitosti",
        safeDrivingBySegment: "Primjena sigurnih tehnika vožnje po segmentima",
        moduleLabels: {
          module1: "Prethodne inspekcije",
          module2: "Prije polaska",
          module3: "Tijekom vožnje",
          module4: "Parkiranje",
          module5: "Upravljanje komandama",
          module6: "Stav",
        },
        criticalElementsIdentified:
          "Kritični elementi identificirani tijekom obuke",
        Automatic: "Automatski",
        Manual: "Ručno",
        "More than 5": "Više od 5",
        "More than 10": "Više od 10",
        "No Data": "Nema podataka",
        Approved: "Odobreno",
        "Approved with observations": "Odobreno s primjedbama",
        "Not approved": "Nije odobreno",
        BELGIUM: "Belgija",
        CROATIA: "Hrvatska",
        ESPAÑA: "Španjolska",
        FRANCE: "Francuska",
        FRANKREICH: "Francuska",
        GERMANY: "Njemačka",
        ITALIA: "Italija",
        NETHERLANDS: "Nizozemska",
        POLAND: "Poljska",
        inadequateSpeed: "Neprikladna brzina",
        trafficViolation: "Prekršaj u prometu",
        aggressiveness: "Agresivnost",
        distractionWhileDriving: "Ometanje tijekom vožnje",
        doesNotTransmitSecurity: "Ne prenosi sigurnost",
        doesNotCoordinateGearbox: "Ne koordinira mjenjač",
        recklessDriving: "Bezobzirna vožnja",
        noDrivingExperience: "Nema iskustva u vožnji",
        newness: "Novost",
        item: "stavka",
        generalComments: "Opći Komentari",
        DETECTED: "OTKRIVENO",
        "NOT DETECTED": "NIJE OTKRIVENO",
        report: "Izvješće",
        certificate: "Certifikat",
        "Training Course": "Tečaj Obuke",
        Certificate: "Potvrda",
        "A good level of knowledge is identified regarding previous vehicle inspections and integrated technological systems.":
          "Utvrđena je dobra razina znanja o prethodnim inspekcijama vozila i integriranim tehnološkim sustavima.",
        "It will be appropriate to pay attention to carrying out prior inspections of the vehicle before making a trip.":
          "Primjereno je obratiti pažnju na provođenje prethodnih pregleda vozila prije putovanja.",
        "Receive assistance in several of the safety procedures prior to driving, so it is recommended to follow up on the points described as areas of opportunity":
          "Dobivate pomoć u nekoliko sigurnosnih postupaka prije vožnje, pa se preporučuje praćenje točaka opisanih kao područja za poboljšanje.",
        "Demonstrates correct habits before driving, as well as good practices in the use of passive safety devices":
          "Pokazuje ispravne navike prije vožnje, kao i dobre prakse u korištenju pasivnih sigurnosnih uređaja.",
        "He has a good level of observation and identification of risk, so that during training he was able to cancel the influence of risk on his driving.":
          "Ima dobru razinu opažanja i identificiranja rizika, tako da je tijekom treninga mogao neutralizirati utjecaj rizika na svoju vožnju.",
        "You receive assistance in applying the procedure of observation, identification and anticipation of risk, and can incorporate preventive techniques into your driving to nullify the influence of risk on your driving.":
          "Dobivate pomoć u primjeni postupka opažanja, identificiranja i anticipacije rizika te možete ugraditi preventivne tehnike u svoju vožnju kako biste poništili utjecaj rizika na svoju vožnju.",
        "It is assisted in relation to safety distances from the vehicle in front.":
          "Pomaže se u vezi s sigurnosnim udaljenostima od vozila ispred.",
        "Maintains adequate safety distances from the vehicle in front":
          "Održava odgovarajuće sigurnosne udaljenosti od vozila ispred.",
        "It identifies and controls well the situations that arise behind your vehicle, correctly anticipating potential risk situations.":
          "Dobro identificira i kontrolira situacije koje se pojavljuju iza vašeg vozila, ispravno predviđajući potencijalne situacije rizika.",
        "Receive assistance in applying preventive techniques to identify and anticipate potential risk situations in the rear of your vehicle.":
          "Dobivate pomoć u primjeni preventivnih tehnika za identifikaciju i anticipaciju potencijalnih rizičnih situacija u stražnjem dijelu vašeg vozila.",
        "Assisted in developing preventative techniques to control intersections. It is important to continue practicing these techniques during daily driving to increase safety at intersections.":
          "Pomaže se u razvoju preventivnih tehnika za kontrolu raskrižja. Važno je nastaviti s vježbanjem tih tehnika tijekom svakodnevne vožnje kako bi se povećala sigurnost na raskrižjima.",
        "Carry out preventive practices that help maintain good control of intersections during training.":
          "Provodi preventivne prakse koje pomažu održati dobru kontrolu raskrižja tijekom obuke.",
        "Understands the concept of vulnerable users, is respectful and applies preventive techniques to safely coexist with this type of user.":
          "Razumije pojam ranjivih korisnika, poštuje ih i primjenjuje preventivne tehnike za sigurno suživot s ovom vrstom korisnika.",
        "Make position changes following the necessary procedures to execute them safely and in advance.":
          "Izvodi promjene položaja slijedeći potrebne postupke kako bi ih sigurno i na vrijeme proveo.",
        "Receive assistance in applying the procedures necessary to execute position changes safely and early.":
          "Dobiva pomoć u primjeni potrebnih postupaka za sigurnu i pravovremenu promjenu položaja.",
        "Develops the parking maneuver at a good level. Select a suitable place and present the appropriate technique.":
          "Razvija manevriranje parkiranja na dobrom nivou. Odabire prikladno mjesto i prikazuje odgovarajuću tehniku.",
        "Receives assistance and trains the parking maneuver, performing it satisfactorily.":
          "Prima pomoć i uvježbava manevar parkiranja, izvodeći ga zadovoljavajuće.",
        "Properly operate the controls (steering wheel, pedal and gearbox) of the vehicle.":
          "Ispravno rukuje kontrolama vozila (upravljač, pedala i mjenjač).",
        "Receive assistance regarding the correct use of the controls (steering wheel, pedal and gearbox) of the vehicle. Trying to do it properly.":
          "Prima pomoć u vezi ispravnog korištenja kontrola vozila (upravljač, pedala i mjenjač). Pokušava to učiniti ispravno.",
        "This certificate is awarded to": "Ova potvrda se dodjeljuje",
        "For successfully completing the": "Za uspješno završavanje",
        "Director of Operations": "Direktor Operacija",
        "Through the assistance of the instructor and specific work on some of the preventive techniques proposed by the training, he/she manages to reach a satisfactory level. It is recommended to work individually on the development of the revised concepts so that you improve your evolution as a safe driver.":
          "Uz pomoć instruktora i specifičan rad na nekim od preventivnih tehnika predloženih obukom, on/a uspijeva postići zadovoljavajuću razinu. Preporučuje se raditi pojedinačno na razvoju revidiranih koncepata kako biste poboljšali svoj napredak kao siguran vozač.",
        "Effectively develops the driving techniques proposed by the training.":
          "Učinkovito razvija tehnike vožnje predložene tijekom obuke.",
        "Despite having little practical experience, demonstrated a good level of driving ability and successfully applied the techniques developed in training":
          "Unatoč malom praktičnom iskustvu, pokazao je dobru sposobnost vožnje i uspješno primijenio tehnike naučene tijekom obuke",
        "No comments": "Nema komentara",
        notApprovedReason:
          "Ne uspijeva u potpunosti razviti tehnike preventivne vožnje predložene obukom. Identificirana je značajna razina rizika koja dovodi do ocjene NIJE ODOBRENO. Izvješće o karakteristikama obuke i preporučenim radnjama bit će izdano. Ne uspijeva u potpunosti razviti tehnike preventivne vožnje predložene obukom. Identificirana je značajna razina rizika koja dovodi do ocjene NIJE ODOBRENO. Izvješće o karakteristikama obuke i preporučenim radnjama bit će izdano. Ne uspijeva u potpunosti razviti tehnike preventivne vožnje predložene obukom. Identificirana je značajna razina rizika koja dovodi do ocjene NIJE ODOBRENO. Izvješće o karakteristikama obuke i preporučenim radnjama bit će izdano.",
      },
    },
    it: {
      translation: {
        title: "REPORT ESECUTIVO DELLA FORMAZIONE PRATICA",
        fullName: "Nome Completo",
        company: "Azienda",
        transmissionType: "Tipo di Trasmissione",
        activityName: "Nome dell'Attività",
        activityDue: "Attività",
        licenseDue: "Scadenza Licenza",
        yearsExperience: "Anni di Esperienza",
        country: "Paese",
        resultObtained: "Risultato Ottenuto",
        appliedWithoutAssistance: "Applicato senza assistenza",
        appliedWithTraining: "Applicato con formazione",
        opportunityArea: "Area di opportunità",
        criticalElements: "Elementi critici",
        performanceReview: "Valutazione delle Prestazioni",
        safeDrivingBySegment:
          "Applicazione delle tecniche di guida sicura per segmento",
        moduleLabels: {
          module1: "Ispezioni preliminari",
          module2: "Prima della partenza",
          module3: "Durante il tragitto",
          module4: "Parcheggio",
          module5: "Comandi del veicolo",
          module6: "Atteggiamento",
        },
        criticalElementsIdentified:
          "Elementi critici identificati durante la formazione",
        Automatic: "Automatico",
        Manual: "Manuale",
        "More than 5": "Più di 5",
        "More than 10": "Più di 10",
        "No Data": "Nessun dato",
        Approved: "Approvato",
        "Approved with observations": "Approvato con osservazioni",
        "Not approved": "Non approvato",
        BELGIUM: "Belgio",
        CROATIA: "Croazia",
        ESPAÑA: "Spagna",
        FRANCE: "Francia",
        FRANKREICH: "Francia",
        GERMANY: "Germania",
        ITALIA: "Italia",
        NETHERLANDS: "Paesi Bassi",
        POLAND: "Polonia",
        inadequateSpeed: "Velocità inadeguata",
        trafficViolation: "Violazione del traffico",
        aggressiveness: "Aggressività",
        distractionWhileDriving: "Distrazione durante la guida",
        doesNotTransmitSecurity: "Non trasmette sicurezza",
        doesNotCoordinateGearbox: "Non coordina il cambio",
        recklessDriving: "Guida spericolata",
        noDrivingExperience: "Nessuna esperienza di guida",
        newness: "Novità",
        item: "articolo",
        generalComments: "Commenti Generali",
        DETECTED: "RILEVATO",
        "NOT DETECTED": "NON RILEVATO",
        report: "Rapporto",
        certificate: "Certificato",
        "Training Course": "Corso di Formazione",
        Certificate: "Certificato",
        "A good level of knowledge is identified regarding previous vehicle inspections and integrated technological systems.":
          "È stato identificato un buon livello di conoscenza riguardo alle ispezioni precedenti del veicolo e ai sistemi tecnologici integrati.",
        "It will be appropriate to pay attention to carrying out prior inspections of the vehicle before making a trip.":
          "È opportuno prestare attenzione all'esecuzione di controlli preliminari del veicolo prima di intraprendere un viaggio.",
        "Receive assistance in several of the safety procedures prior to driving, so it is recommended to follow up on the points described as areas of opportunity":
          "Riceve assistenza in diverse procedure di sicurezza prima della guida, quindi è consigliabile seguire i punti descritti come aree di miglioramento.",
        "Demonstrates correct habits before driving, as well as good practices in the use of passive safety devices":
          "Dimostra abitudini corrette prima della guida, nonché buone pratiche nell'uso dei dispositivi di sicurezza passiva.",
        "He has a good level of observation and identification of risk, so that during training he was able to cancel the influence of risk on his driving.":
          "Ha un buon livello di osservazione e identificazione del rischio, pertanto durante l'addestramento è stato in grado di annullare l'influenza del rischio sulla sua guida.",
        "You receive assistance in applying the procedure of observation, identification and anticipation of risk, and can incorporate preventive techniques into your driving to nullify the influence of risk on your driving.":
          "Riceve assistenza nell'applicazione della procedura di osservazione, identificazione e anticipazione del rischio e può incorporare tecniche preventive nella sua guida per annullare l'influenza del rischio.",
        "It is assisted in relation to safety distances from the vehicle in front.":
          "Viene assistito nel mantenere le distanze di sicurezza dal veicolo che precede.",
        "Maintains adequate safety distances from the vehicle in front":
          "Mantiene adeguate distanze di sicurezza dal veicolo che precede.",
        "It identifies and controls well the situations that arise behind your vehicle, correctly anticipating potential risk situations.":
          "Identifica e controlla bene le situazioni che si verificano dietro il veicolo, anticipando correttamente potenziali situazioni di rischio.",
        "Receive assistance in applying preventive techniques to identify and anticipate potential risk situations in the rear of your vehicle.":
          "Riceve assistenza nell'applicazione di tecniche preventive per identificare e anticipare potenziali situazioni di rischio nella parte posteriore del veicolo.",
        "Assisted in developing preventative techniques to control intersections. It is important to continue practicing these techniques during daily driving to increase safety at intersections.":
          "Riceve assistenza nello sviluppo di tecniche preventive per controllare le intersezioni. È importante continuare a praticare queste tecniche durante la guida quotidiana per aumentare la sicurezza agli incroci.",
        "Carry out preventive practices that help maintain good control of intersections during training.":
          "Esegue pratiche preventive che aiutano a mantenere un buon controllo delle intersezioni durante l'addestramento.",
        "Understands the concept of vulnerable users, is respectful and applies preventive techniques to safely coexist with this type of user.":
          "Comprende il concetto di utenti vulnerabili, è rispettoso e applica tecniche preventive per convivere in sicurezza con questo tipo di utenti.",
        "Make position changes following the necessary procedures to execute them safely and in advance.":
          "Effettua cambi di posizione seguendo le procedure necessarie per eseguirli in modo sicuro e anticipato.",
        "Receive assistance in applying the procedures necessary to execute position changes safely and early.":
          "Riceve assistenza nell'applicazione delle procedure necessarie per eseguire i cambi di posizione in modo sicuro e anticipato.",
        "Develops the parking maneuver at a good level. Select a suitable place and present the appropriate technique.":
          "Esegue la manovra di parcheggio a un buon livello. Seleziona un luogo adatto e applica la tecnica appropriata.",
        "Receives assistance and trains the parking maneuver, performing it satisfactorily.":
          "Riceve assistenza ed esercita la manovra di parcheggio, eseguendola in modo soddisfacente.",
        "Properly operate the controls (steering wheel, pedal and gearbox) of the vehicle.":
          "Utilizza correttamente i comandi del veicolo (volante, pedale e cambio).",
        "Receive assistance regarding the correct use of the controls (steering wheel, pedal and gearbox) of the vehicle. Trying to do it properly.":
          "Riceve assistenza riguardo al corretto uso dei comandi del veicolo (volante, pedale e cambio). Sta cercando di farlo correttamente.",
        "This certificate is awarded to": "Questo certificato è assegnato a",
        "For successfully completing the":
          "Per aver completato con successo il",
        "Director of Operations": "Direttore delle Operazioni",
        "Through the assistance of the instructor and specific work on some of the preventive techniques proposed by the training, he/she manages to reach a satisfactory level. It is recommended to work individually on the development of the revised concepts so that you improve your evolution as a safe driver.":
          "Grazie all'assistenza dell'istruttore e a un lavoro specifico su alcune delle tecniche preventive proposte dalla formazione, lui/lei riesce a raggiungere un livello soddisfacente. Si consiglia di lavorare individualmente sullo sviluppo dei concetti rivisitati per migliorare la propria evoluzione come conducente sicuro.",
        "Effectively develops the driving techniques proposed by the training.":
          "Sviluppa efficacemente le tecniche di guida proposte dalla formazione.",
        "Despite having little practical experience, demonstrated a good level of driving ability and successfully applied the techniques developed in training":
          "Nonostante la scarsa esperienza pratica, ha dimostrato una buona abilità alla guida e ha applicato con successo le tecniche apprese durante la formazione",
        "No comments": "Nessun commento",
        notApprovedReason:
          "Non riesce a sviluppare pienamente le tecniche di guida preventiva proposte dalla formazione. Si identifica un livello di rischio significativo che porta al giudizio di NON APPROVATO. Verrà emesso un rapporto speciale sulle caratteristiche della formazione e sulle azioni raccomandate. Non riesce a sviluppare pienamente le tecniche di guida preventiva proposte dalla formazione. Si identifica un livello di rischio significativo che porta al giudizio di NON APPROVATO. Verrà emesso un rapporto speciale sulle caratteristiche della formazione e sulle azioni raccomandate. Non riesce a sviluppare pienamente le tecniche di guida preventiva proposte dalla formazione. Si identifica un livello di rischio significativo che porta al giudizio di NON APPROVATO. Verrà emesso un rapporto speciale sulle caratteristiche della formazione e sulle azioni raccomandate.",
      },
    },
  },
});

export default i18n;
