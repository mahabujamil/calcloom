import type { Tool } from './tools';

type ArTool = Pick<Tool, 'name' | 'title' | 'description' | 'h1' | 'intro' | 'steps' | 'faq' | 'about' | 'tableTitle' | 'table'>;

export const coreFr: Record<string, ArTool> = {
  'percentage-calculator': {
    name: 'Calculateur de pourcentage',
    title: 'Calculateur de pourcentage : calculer un % rapidement',
    description:
      'Calculateur de pourcentage gratuit. Trouvez X % d\'un nombre, quel pourcentage un nombre représente d\'un autre, et la hausse ou la baisse en pourcentage en quelques secondes.',
    h1: 'Calculateur de pourcentage',
    intro:
      'Calculez un pourcentage d\'un nombre, trouvez quel pourcentage une valeur représente d\'une autre, ou mesurez la variation en pourcentage entre deux valeurs.',
    steps: [
      'Choisissez le type de calcul souhaité.',
      'Saisissez les deux nombres.',
      'Lisez le résultat instantanément. Rien n\'est envoyé à un serveur.',
    ],
    faq: [
      { q: 'Comment calculer un pourcentage d\'un nombre ?', a: 'Multipliez le nombre par le pourcentage, puis divisez par 100. Par exemple, 15 % de 200 = 200 × 15 ÷ 100 = 30.' },
      { q: 'Comment calculer une hausse en pourcentage ?', a: 'Soustrayez l\'ancienne valeur de la nouvelle, divisez par l\'ancienne valeur, puis multipliez par 100. Passer de 50 à 65 donne (65 − 50) ÷ 50 × 100 = 30 % de hausse.' },
      { q: 'Quelle est la différence entre pourcentage et points de pourcentage ?', a: 'Le pourcentage décrit une variation relative. Les points de pourcentage décrivent l\'écart brut entre deux pourcentages : passer de 10 % à 12 % représente +2 points de pourcentage, mais une hausse de 20 %.' },
    ],
  },
  'loan-calculator': {
    name: 'Calculateur de prêt',
    title: 'Calculateur de prêt : mensualité, intérêts et coût total',
    description:
      'Calculateur de prêt gratuit. Saisissez le montant, le taux d\'intérêt et la durée pour connaître votre mensualité, le total des intérêts et le coût total de tout prêt.',
    h1: 'Calculateur de mensualité de prêt',
    intro:
      'Estimez la mensualité, le total des intérêts et le remboursement total d\'un prêt auto, d\'un prêt personnel, d\'un prêt étudiant ou d\'un prêt immobilier.',
    steps: [
      'Saisissez le montant du prêt.',
      'Saisissez le taux d\'intérêt annuel et la durée en années.',
      'Consultez la mensualité, le total des intérêts et le coût total.',
    ],
    faq: [
      { q: 'Comment calcule-t-on la mensualité d\'un prêt ?', a: 'On utilise la formule d\'amortissement : mensualité = P × r ÷ (1 − (1 + r)^−n), où P est le montant, r le taux mensuel et n le nombre de mensualités.' },
      { q: 'Un prêt plus long coûte-t-il plus cher ?', a: 'Une durée plus longue réduit la mensualité, mais augmente le total des intérêts payés sur la durée du prêt.' },
      { q: 'Ce calculateur est-il exact pour ma banque ?', a: 'C\'est une estimation proche. Les frais, l\'assurance et les règles de capitalisation peuvent modifier le chiffre final, vérifiez donc auprès de votre prêteur.' },
    ],
  },
  'compound-interest-calculator': {
    name: 'Calculateur d\'intérêts composés',
    title: 'Calculateur d\'intérêts composés avec versements mensuels',
    description:
      'Calculateur d\'intérêts composés gratuit. Voyez comment votre épargne grandit avec des versements réguliers, différents taux et périodes de capitalisation au fil du temps.',
    h1: 'Calculateur d\'intérêts composés',
    intro:
      'Voyez comment un montant initial, auquel s\'ajoutent des versements mensuels réguliers, grandit avec le temps à un taux d\'intérêt donné.',
    steps: [
      'Saisissez votre solde de départ et votre versement mensuel.',
      'Saisissez le taux annuel et le nombre d\'années.',
      'Consultez le solde final et la part provenant des intérêts.',
    ],
    faq: [
      { q: 'Que sont les intérêts composés ?', a: 'Ce sont les intérêts gagnés à la fois sur votre capital de départ et sur les intérêts déjà ajoutés, ce qui accélère la croissance avec le temps.' },
      { q: 'Quelle est la formule des intérêts composés ?', a: 'A = P(1 + r/n)^(nt), où P est le capital, r le taux annuel, n le nombre de périodes de capitalisation par an et t le nombre d\'années.' },
      { q: 'Cela garantit-il un rendement ?', a: 'Non. C\'est une projection à taux fixe. Les rendements réels d\'un placement varient et peuvent être négatifs.' },
    ],
  },
  'age-calculator': {
    name: 'Calculateur d\'âge',
    title: 'Calculateur d\'âge : âge exact en années, mois et jours',
    description:
      'Calculateur d\'âge gratuit. Saisissez votre date de naissance pour obtenir votre âge exact en années, mois et jours, le total de jours vécus et le temps avant votre anniversaire.',
    h1: 'Calculateur d\'âge',
    intro:
      'Trouvez votre âge exact en années, mois et jours, le nombre total de jours que vous avez vécus et le temps restant avant votre prochain anniversaire.',
    steps: [
      'Saisissez la date de naissance.',
      'Modifiez si besoin la date « âge au ».',
      'Lisez votre âge exact et le compte à rebours de votre anniversaire.',
    ],
    faq: [
      { q: 'Comment l\'âge est-il calculé exactement ?', a: 'On compte les années complètes depuis la date de naissance, puis les mois complets restants et les jours, en tenant compte de la longueur différente des mois.' },
      { q: 'Puis-je calculer l\'âge à une date passée ou future ?', a: 'Oui. Modifiez la date « âge au » pour n\'importe quel jour afin de voir l\'âge à cette date.' },
      { q: 'Ma date de naissance est-elle enregistrée ?', a: 'Non. Le calcul s\'effectue dans votre navigateur et rien n\'est envoyé ni enregistré.' },
    ],
  },
  'bmi-calculator': {
    name: 'Calculateur d\'IMC',
    title: 'Calculateur d\'IMC : indice de masse corporelle adulte',
    description:
      'Calculateur d\'IMC gratuit pour adultes. Saisissez la taille et le poids en unités métriques ou impériales pour obtenir votre indice de masse corporelle et votre catégorie.',
    h1: 'Calculateur d\'IMC',
    intro:
      'Calculez votre indice de masse corporelle à partir de la taille et du poids, en unités métriques ou impériales, et voyez dans quelle catégorie standard il se situe.',
    steps: [
      'Choisissez les unités métriques ou impériales.',
      'Saisissez votre taille et votre poids.',
      'Consultez votre IMC et la catégorie de l\'OMS.',
    ],
    faq: [
      { q: 'Comment l\'IMC est-il calculé ?', a: 'IMC = poids en kg ÷ (taille en mètres)². En unités impériales : 703 × poids en lb ÷ (taille en pouces)².' },
      { q: 'Quelle est la plage d\'IMC saine ?', a: 'L\'OMS définit 18,5 à 24,9 comme la plage normale pour les adultes. En dessous de 18,5, on parle de maigreur, de 25 à 29,9 de surpoids, et 30 ou plus d\'obésité.' },
      { q: 'L\'IMC est-il fiable pour tout le monde ?', a: 'Non. Il ne distingue pas la masse musculaire de la masse grasse et n\'est pas conçu pour les enfants, la grossesse ou les sportifs. C\'est un outil de dépistage, pas un diagnostic. Parlez de votre santé à un médecin.' },
    ],
  },
  'tip-calculator': {
    name: 'Calculateur de pourboire',
    title: 'Calculateur de pourboire : partager l\'addition par personne',
    description:
      'Calculateur de pourboire gratuit. Saisissez l\'addition et le pourcentage de pourboire pour obtenir le pourboire, le total et le montant que paie chaque personne lors du partage.',
    h1: 'Calculateur de pourboire',
    intro: 'Calculez le pourboire et le total d\'une addition de restaurant, et partagez-la équitablement entre autant de personnes que vous voulez.',
    steps: ['Saisissez le montant de l\'addition.', 'Choisissez le pourcentage de pourboire.', 'Saisissez le nombre de personnes qui partagent.'],
    faq: [
      { q: 'Quel pourboire laisser ?', a: 'Aux États-Unis, 15 % à 20 % est courant dans les restaurants. Les usages varient selon les pays et, dans beaucoup d\'endroits, le service est déjà inclus : vérifiez votre addition.' },
      { q: 'Faut-il calculer le pourboire avant ou après les taxes ?', a: 'Beaucoup de gens calculent le pourboire sur le sous-total hors taxes, d\'autres sur le total. Les deux sont courants, choisissez celui que vous préférez.' },
      { q: 'Comment partager une addition avec le pourboire ?', a: 'Ajoutez le pourboire à l\'addition, puis divisez le total par le nombre de personnes. Le calculateur le fait pour vous.' },
    ],
  },
  'discount-calculator': {
    name: 'Calculateur de remise',
    title: 'Calculateur de remise : prix soldé et économie réalisée',
    description:
      'Calculateur de remise gratuit. Saisissez le prix d\'origine et le pourcentage de réduction pour voir le prix soldé et ce que vous économisez, avec une seconde remise possible.',
    h1: 'Calculateur de remise',
    intro: 'Trouvez le prix final après une remise en pourcentage, voyez combien vous économisez et ajoutez une remise supplémentaire par-dessus.',
    steps: ['Saisissez le prix d\'origine.', 'Saisissez le pourcentage de remise.', 'Ajoutez éventuellement une remise supplémentaire.'],
    faq: [
      { q: 'Comment calcule-t-on une remise ?', a: 'Multipliez le prix par le pourcentage de remise et divisez par 100 pour obtenir l\'économie, puis soustrayez-la du prix. 20 % de remise sur 80 fait économiser 16, le prix est donc 64.' },
      { q: 'Que se passe-t-il quand deux remises se cumulent ?', a: 'Elles s\'appliquent l\'une après l\'autre, et ne s\'additionnent pas. 20 % puis 10 % de remise font 28 % de remise au total, et non 30 %.' },
      { q: 'Comment retrouver le prix d\'origine à partir du prix soldé ?', a: 'Divisez le prix soldé par (1 − remise ÷ 100). Si 64 est le prix après 20 % de remise, le prix d\'origine est 64 ÷ 0,8 = 80.' },
    ],
  },
  'days-between-dates-calculator': {
    name: 'Calculateur de jours entre deux dates',
    title: 'Jours entre deux dates : compter jours, semaines, mois',
    description:
      'Calculateur de jours entre deux dates gratuit. Comptez le nombre exact de jours, de semaines, de mois et d\'années entre deux dates, avec ou sans le jour de fin.',
    h1: 'Calculateur de jours entre deux dates',
    intro: 'Comptez combien de jours, de semaines, de mois et d\'années séparent deux dates.',
    steps: ['Saisissez la date de début.', 'Saisissez la date de fin.', 'Lisez l\'écart en jours, en semaines et en mois.'],
    faq: [
      { q: 'Comment compter les jours entre deux dates ?', a: 'Soustrayez la date la plus ancienne de la plus récente. Le calculateur tient compte des mois de longueurs différentes et des années bissextiles.' },
      { q: 'La date de fin est-elle incluse ?', a: 'Par défaut, la date de fin n\'est pas comptée. Cochez l\'option pour l\'inclure, ce qui ajoute un jour.' },
      { q: 'Les week-ends sont-ils inclus ?', a: 'Oui, tous les jours du calendrier sont comptés. Le résultat indique aussi le nombre de jours ouvrés.' },
    ],
  },
  'hourly-to-salary-calculator': {
    name: 'Calculateur de taux horaire en salaire',
    title: 'Salaire à partir du taux horaire : mensuel et annuel',
    description:
      'Calculateur gratuit pour convertir un taux horaire en paie quotidienne, hebdomadaire, mensuelle et annuelle selon vos heures par semaine et les semaines travaillées.',
    h1: 'Calculateur de taux horaire en salaire',
    intro: 'Convertissez votre taux horaire en rémunération hebdomadaire, mensuelle et annuelle, avant impôt.',
    steps: ['Saisissez votre taux horaire.', 'Saisissez les heures par semaine et les semaines par an.', 'Consultez votre rémunération pour chaque période.'],
    faq: [
      { q: 'Comment convertir un taux horaire en salaire annuel ?', a: 'Multipliez le taux horaire par les heures par semaine, puis par les semaines par an. À 20 de l\'heure, 40 heures et 52 semaines, cela fait 41 600 par an.' },
      { q: 'Le résultat est-il avant ou après impôt ?', a: 'Avant impôt. Votre salaire net dépend des impôts et des retenues locales.' },
      { q: 'Comment tenir compte des congés non payés ?', a: 'Réduisez le nombre de semaines par an. Par exemple, utilisez 50 semaines si vous prenez deux semaines de congé sans solde.' },
    ],
  },
  'word-counter': {
    name: 'Compteur de mots',
    title: 'Compteur de mots : mots, caractères et temps de lecture',
    description:
      'Compteur de mots gratuit. Collez votre texte pour compter les mots, les caractères, les phrases et les paragraphes et estimer instantanément le temps de lecture.',
    h1: 'Compteur de mots',
    intro: 'Collez ou saisissez votre texte pour compter les mots, les caractères, les phrases et les paragraphes, et voir le temps de lecture estimé.',
    steps: ['Collez ou saisissez votre texte dans la zone.', 'Les compteurs se mettent à jour pendant la saisie.', 'Consultez le temps de lecture et de parole.'],
    faq: [
      { q: 'Comment les mots sont-ils comptés ?', a: 'Toute suite de caractères séparée par des espaces ou des sauts de ligne compte pour un mot.' },
      { q: 'Comment le temps de lecture est-il estimé ?', a: 'Nous retenons environ 238 mots par minute en lecture silencieuse et 150 à voix haute.' },
      { q: 'Mon texte est-il enregistré ?', a: 'Non. Le comptage se fait dans votre navigateur et votre texte ne quitte jamais votre appareil.' },
    ],
  },
  'temperature-converter': {
    name: 'Convertisseur de température',
    title: 'Convertisseur de température : Celsius, Fahrenheit, Kelvin',
    description:
      'Convertisseur de température gratuit. Convertissez instantanément entre Celsius, Fahrenheit et Kelvin, avec les formules et les repères courants expliqués.',
    h1: 'Convertisseur de température',
    intro: 'Convertissez n\'importe quelle température entre Celsius, Fahrenheit et Kelvin en une seule étape.',
    steps: ['Saisissez la température.', 'Choisissez l\'unité de départ.', 'Lisez les trois unités en même temps.'],
    faq: [
      { q: 'Comment convertir des Celsius en Fahrenheit ?', a: 'Multipliez par 9/5 et ajoutez 32. Par exemple, 25 °C × 1,8 + 32 = 77 °F.' },
      { q: 'Comment convertir des Fahrenheit en Celsius ?', a: 'Soustrayez 32 et multipliez par 5/9. Par exemple, (68 − 32) × 5/9 = 20 °C.' },
      { q: 'Qu\'est-ce que le zéro absolu ?', a: 'Le zéro absolu est 0 K, soit −273,15 °C ou −459,67 °F. Rien ne peut être plus froid.' },
    ],
  },
  'password-generator': {
    name: 'Générateur de mot de passe',
    title: 'Générateur de mot de passe fort et aléatoire, gratuit',
    description:
      'Générateur de mot de passe fort gratuit. Créez des mots de passe aléatoires et sûrs avec lettres, chiffres et symboles, générés dans votre navigateur et jamais stockés.',
    h1: 'Générateur de mot de passe fort',
    intro: 'Créez un mot de passe aléatoire sécurisé dans votre navigateur. Rien n\'est envoyé ni stocké nulle part.',
    steps: ['Choisissez la longueur.', 'Sélectionnez les types de caractères à inclure.', 'Appuyez sur Générer, puis copiez le mot de passe.'],
    faq: [
      { q: 'Quelle longueur doit avoir un mot de passe ?', a: 'Au moins 12 caractères, et 16 ou plus pour les comptes importants comme la messagerie et la banque. La longueur compte plus que la complexité.' },
      { q: 'Ce générateur est-il sûr ?', a: 'Oui. Il utilise le générateur aléatoire cryptographique de votre navigateur et le mot de passe ne quitte jamais votre appareil.' },
      { q: 'Faut-il réutiliser ses mots de passe ?', a: 'Non. Utilisez un mot de passe différent pour chaque compte et conservez-les dans un gestionnaire de mots de passe.' },
    ],
  },
  'savings-goal-calculator': {
    name: 'Calculateur d\'objectif d\'épargne',
    title: 'Objectif d\'épargne : combien de temps pour l\'atteindre',
    description:
      'Calculateur d\'objectif d\'épargne gratuit. Voyez en combien d\'années et de mois vous atteignez votre objectif avec des versements mensuels et des intérêts.',
    h1: 'Calculateur d\'objectif d\'épargne',
    intro: 'Découvrez combien de temps il faudra pour atteindre un objectif d\'épargne avec des versements mensuels réguliers et des intérêts facultatifs.',
    steps: ['Saisissez votre objectif et ce que vous avez déjà épargné.', 'Saisissez votre versement mensuel et les intérêts annuels attendus.', 'Consultez le temps nécessaire.'],
    faq: [
      { q: 'Comment calculer le temps nécessaire pour atteindre un objectif d\'épargne ?', a: 'Ajoutez au solde le versement mensuel et les intérêts de chaque mois jusqu\'à atteindre l\'objectif. Le calculateur le fait mois par mois.' },
      { q: 'Faut-il compter les intérêts ?', a: 'Si votre épargne rapporte des intérêts, oui. Saisissez 0 pour voir le résultat sans intérêts.' },
      { q: 'Comment atteindre mon objectif plus vite ?', a: 'Augmentez le versement mensuel ou baissez l\'objectif. Même une petite hausse du versement peut raccourcir nettement la durée.' },
    ],
  },
  'kg-to-liters-converter': {
    name: 'Convertisseur de kilogrammes en litres',
    title: 'Convertisseur kg en litres (kg en L) selon la densité',
    description:
      'Convertisseur kg en litres gratuit. Convertissez kilogrammes et litres pour l\'eau, le lait, l\'huile, l\'essence, le miel et plus, avec de vraies densités.',
    h1: 'Convertisseur de kilogrammes en litres',
    intro: 'Le kilogramme mesure une masse et le litre un volume : la conversion dépend donc de la densité du liquide. Choisissez la substance et convertissez dans les deux sens.',
    steps: ['Choisissez la substance (eau, lait, huile, essence et plus).', 'Saisissez les kilogrammes ou les litres.', 'Lisez la quantité convertie.'],
    faq: [
      { q: 'Comment convertir des kg en litres ?', a: 'Divisez la masse en kilogrammes par la densité en kg par litre. Pour l\'eau (1 kg/L), 1 kg fait 1 litre. Pour l\'huile d\'olive (0,91 kg/L), 1 kg fait environ 1,1 litre.' },
      { q: '1 kg fait-il toujours 1 litre ?', a: 'Seulement pour l\'eau à environ 4 °C. Les autres substances sont plus légères ou plus lourdes, donc 1 kg correspond à plus ou moins de litres.' },
      { q: 'Comment convertir des litres en kg ?', a: 'Multipliez les litres par la densité. Pour l\'essence (environ 0,745 kg/L), 10 litres pèsent environ 7,45 kg.' },
    ],
  },
  'fuel-economy-converter': {
    name: 'Convertisseur de consommation de carburant',
    title: 'Consommation carburant : MPG en L/100 km et km/L',
    description:
      'Convertisseur de consommation gratuit. Convertissez instantanément les miles par gallon (US et UK) en litres aux 100 km et en kilomètres par litre.',
    h1: 'Convertisseur de consommation de carburant',
    intro: 'Convertissez la consommation de carburant entre MPG (US), MPG (UK), litres aux 100 km et kilomètres par litre.',
    steps: ['Saisissez la valeur.', 'Choisissez l\'unité dont vous disposez.', 'Lisez toutes les autres unités en même temps.'],
    faq: [
      { q: 'Comment convertir des MPG en L/100 km ?', a: 'Divisez 235,215 par les MPG (US). Par exemple, 30 MPG font 235,215 ÷ 30 = 7,84 L/100 km.' },
      { q: 'Pourquoi un L/100 km plus bas est-il meilleur ?', a: 'Le L/100 km mesure le carburant utilisé par distance : un nombre plus bas signifie que la voiture consomme moins. Avec les MPG, c\'est l\'inverse : plus haut, c\'est mieux.' },
      { q: 'Quelle est la différence entre les MPG US et UK ?', a: 'Un gallon britannique (impérial) est environ 20 % plus grand qu\'un gallon américain : la même voiture affiche donc plus de MPG en unités UK.' },
    ],
  },
  'fuel-cost-calculator': {
    name: 'Calculateur de coût de carburant',
    title: 'Coût du carburant : prix d\'un trajet selon la distance',
    description:
      'Calculateur de coût de carburant gratuit. Saisissez la distance, la consommation et le prix du carburant pour voir combien de carburant et d\'argent votre trajet demande.',
    h1: 'Calculateur de coût de carburant',
    intro: 'Estimez le carburant utilisé et le coût d\'un trajet à partir de la distance, de la consommation de votre voiture et du prix au litre.',
    steps: ['Saisissez la distance du trajet en kilomètres.', 'Saisissez la consommation en litres aux 100 km.', 'Saisissez le prix du carburant au litre.'],
    faq: [
      { q: 'Comment calculer le coût du carburant pour un trajet ?', a: 'Carburant utilisé = distance ÷ 100 × litres aux 100 km. Coût = carburant utilisé × prix au litre.' },
      { q: 'Où trouver la consommation de ma voiture ?', a: 'Consultez le manuel de la voiture ou l\'ordinateur de bord. Une voiture essence typique consomme de 6 à 9 litres aux 100 km.' },
      { q: 'Le style de conduite change-t-il le résultat ?', a: 'Oui. La vitesse, la circulation, la climatisation et la charge modifient tous la consommation : considérez donc le résultat comme une estimation.' },
    ],
  },
};
