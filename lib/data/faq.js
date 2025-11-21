export const FAQ_CATEGORIES = [
  { id: 'general', label: 'Questions générales', icon: 'Help' },
  { id: 'tarifs', label: 'Tarifs et facturation', icon: 'Euro' },
  { id: 'comptabilite', label: 'Comptabilité', icon: 'Receipt' },
  { id: 'fiscal', label: 'Fiscal', icon: 'AccountBalance' },
  { id: 'creation', label: 'Création d\'entreprise', icon: 'Business' },
  { id: 'outils', label: 'Outils et digital', icon: 'Computer' },
];

export const FAQ_PROFILES = [
  { id: 'tous', label: 'Tous' },
  { id: 'createur', label: 'Créateur d\'entreprise' },
  { id: 'tpe', label: 'TPE/PME' },
  { id: 'liberal', label: 'Profession libérale' },
  { id: 'commercant', label: 'Commerçant' },
  { id: 'artisan', label: 'Artisan/BTP' },
];

export const FAQ_ITEMS = [
  {
    question: 'Quels sont vos tarifs ?',
    answer: 'Nos tarifs sont personnalisés en fonction de votre activité, de la taille de votre entreprise et de vos besoins spécifiques. Nous proposons des forfaits mensuels transparents et sans surprise. Contactez-nous pour un devis gratuit et sur-mesure.',
    category: 'tarifs',
    profiles: ['tous'],
  },
  {
    question: 'Proposez-vous un forfait pour les TPE ?',
    answer: 'Oui, nous avons des forfaits adaptés aux TPE incluant la tenue comptable mensuelle, les déclarations de TVA et le bilan annuel.',
    category: 'tarifs',
    profiles: ['tpe'],
  },
  {
    question: 'Y a-t-il des frais cachés ?',
    answer: 'Non, nos devis sont transparents et détaillés. Toutes les prestations sont clairement indiquées. Les éventuels frais supplémentaires (missions exceptionnelles) sont toujours validés avec vous avant intervention.',
    category: 'tarifs',
    profiles: ['tous'],
  },
  {
    question: 'Dans quelles zones intervenez-vous ?',
    answer: "Notre cabinet est situé à Sarcelles, mais nous intervenons dans tout le Bassin Parisien et pouvons accompagner des clients sur l'ensemble du territoire national grâce à nos outils digitaux.",
    category: 'general',
    profiles: ['tous'],
  },
  {
    question: 'Comment se déroule un premier rendez-vous ?',
    answer: "Le premier rendez-vous est gratuit et sans engagement. Il nous permet de comprendre votre activité, vos besoins et vos objectifs. Nous vous présentons ensuite une proposition d'accompagnement personnalisée avec un devis détaillé.",
    category: 'general',
    profiles: ['tous'],
  },
  {
    question: 'Êtes-vous spécialisés dans certains secteurs ?',
    answer: 'Oui, nous rencontrons des secteurs communs mais nous savons tout faire. Notre expérience diversifiée et notre capacité d\'adaptation nous permettent d\'accompagner efficacement tous types d\'activités, quelle que soit leur complexité ou leurs spécificités.',
    category: 'general',
    profiles: ['tous'],
  },
  {
    question: 'Quels documents dois-je fournir pour ma comptabilité ?',
    answer: "Vous devez nous transmettre vos factures d'achats et de ventes, relevés bancaires, bulletins de paie si vous avez des salariés, et tout document relatif à la vie de votre entreprise (contrats, emprunts, etc.). Nous pouvons mettre en place un système de transmission dématérialisée.",
    category: 'comptabilite',
    profiles: ['tous'],
  },
  {
    question: 'À quelle fréquence dois-je transmettre mes documents ?',
    answer: 'Idéalement chaque mois pour assurer un suivi régulier. Vous pouvez transmettre vos documents au fil de l\'eau via email, ce qui facilite grandement le suivi.',
    category: 'comptabilite',
    profiles: ['tpe', 'commercant'],
  },
  {
    question: 'Combien de temps gardez-vous mes documents ?',
    answer: 'Nous conservons vos documents comptables pendant la durée légale de 10 ans. Les documents sont stockés de manière sécurisée et accessible à tout moment.',
    category: 'comptabilite',
    profiles: ['tous'],
  },
  {
    question: "Que faire en cas de contrôle fiscal ?",
    answer: "En cas de contrôle fiscal, nous vous assistons et vous représentons auprès de l'administration. Notre expertise nous permet de défendre au mieux vos intérêts et de gérer sereinement cette situation.",
    category: 'fiscal',
    profiles: ['tous'],
  },
  {
    question: 'Comment optimiser ma fiscalité ?',
    answer: 'Nous analysons votre situation pour identifier les opportunités d\'optimisation : choix du régime fiscal, déductions possibles, optimisation de la rémunération dirigeant, crédits d\'impôt, etc. Tout en restant dans la légalité.',
    category: 'fiscal',
    profiles: ['tous'],
  },
  {
    question: 'Quand dois-je payer mes impôts ?',
    answer: 'Les échéances fiscales varient selon votre régime : TVA mensuelle/trimestrielle, acomptes d\'IS, CFE, etc. Nous vous accompagnons sur le calendrier fiscal et les échéances à respecter.',
    category: 'fiscal',
    profiles: ['tpe', 'commercant', 'artisan'],
  },
  {
    question: "Combien de temps pour créer mon entreprise ?",
    answer: "La création d'entreprise prend généralement entre 7 et 15 jours selon le statut juridique choisi et la complexité du dossier. Nous vous accompagnons à chaque étape pour accélérer le processus.",
    category: 'creation',
    profiles: ['createur'],
  },
  {
    question: 'Quel statut juridique choisir pour mon entreprise ?',
    answer: 'Le choix dépend de nombreux critères : nature de l\'activité, nombre d\'associés, régime fiscal souhaité, protection du patrimoine personnel, etc. Nous analysons votre projet pour vous recommander le statut le plus adapté.',
    category: 'creation',
    profiles: ['createur'],
  },
  {
    question: 'Puis-je créer mon entreprise en étant salarié ?',
    answer: 'Oui, c\'est possible sous certaines conditions. Vous devez vérifier votre contrat de travail (clause d\'exclusivité) et respecter votre obligation de loyauté envers votre employeur. Nous vous conseillons sur ces aspects.',
    category: 'creation',
    profiles: ['createur'],
  },
  {
    question: 'Comment puis-je consulter ma comptabilité ?',
    answer: "Vous pouvez demander à consulter votre comptabilité à tout moment. Nous vous transmettons rapidement vos documents et rapports comptables en PDF : comptes, indicateurs clés, situations mensuelles et tous documents demandés. Nous nous engageons à vous répondre dans les 24 heures.",
    category: 'outils',
    profiles: ['tous'],
  },
  {
    question: 'Comment transmettre mes documents de façon sécurisée ?',
    answer: 'Vous pouvez nous transmettre vos documents de plusieurs façons : par email sécurisé (24h/24, 7j/7), par photo pour les documents urgents, ou par courrier. Tous vos documents sont traités immédiatement, numérisés et archivés de manière sécurisée.',
    category: 'outils',
    profiles: ['tous'],
  },
  {
    question: 'Puis-je recevoir des rapports réguliers sur ma situation ?',
    answer: 'Oui, sur demande nous vous transmettons des rapports détaillés en PDF : grand livre, Soldes Intermédiaires de Gestion, bilan prévisionnel, rapport de situation financière et tous indicateurs clés. Vous pouvez également suivre les nouveautés de nos services sur notre site.',
    category: 'outils',
    profiles: ['tous'],
  },
];

