export const SECTORS = [
  {
    id: 'btp',
    title: 'Artisanat & BTP',
    slug: 'btp',
    icon: 'Construction',
    description: 'Expert des spécificités comptables et fiscales du secteur du BTP : gestion des chantiers, TVA sur encaissement, garanties décennales, sous-traitance.',
    specialties: [
      'Comptabilité par chantier',
      'TVA spécifique BTP (autoliquidation)',
      'Gestion de la sous-traitance',
      'Garanties et assurances décennales',
      'Déclarations DAS2',
    ],
    faq: [
      {
        question: 'Comment fonctionne la TVA en autoliquidation dans le BTP ?',
        answer: "Dans le BTP, lorsque vous sous-traitez, le donneur d'ordre collecte et reverse la TVA à votre place. Nous gérons ces opérations complexes et assurons la conformité de vos déclarations.",
      },
      {
        question: 'Dois-je faire une déclaration DAS2 ?',
        answer: "Oui, si vous versez des commissions ou honoraires. Nous établissons cette déclaration annuelle obligatoire et vous conseillons sur vos obligations.",
      },
    ],
    keyRatios: [
      {
        title: 'Taux de marge brute',
        description: 'Marge sur coût direct des chantiers',
        benchmark: '25% à 35% selon spécialité',
      },
      {
        title: 'Taux de main d\'œuvre',
        description: 'Part du coût de main d\'œuvre dans le CA',
        benchmark: '30% à 45% du CA',
      },
      {
        title: 'Rentabilité par chantier',
        description: 'Marge nette après tous les coûts directs',
        benchmark: '> 10% par chantier',
      },
      {
        title: 'Délai moyen de paiement',
        description: 'Temps entre facturation et encaissement',
        benchmark: '45 à 60 jours',
      },
    ],
    ratiosDisclaimer: "Ces ratios sont donnés à titre indicatif et peuvent varier significativement selon votre situation spécifique, votre zone géographique, votre type de clientèle et la nature exacte de vos prestations. Chaque entreprise est unique et nécessite une analyse personnalisée.",
    commonPitfalls: [
      {
        title: 'Mauvaise évaluation des devis',
        description: "Sous-estimer les temps de travail, matériaux ou imprévus lors de l'établissement du devis.",
        impact: 'Chantiers déficitaires et trésorerie fragilisée',
      },
      {
        title: 'Erreurs de TVA en sous-traitance',
        description: "Mal gérer l'autoliquidation de TVA ou facturer avec TVA alors qu'elle ne doit pas être appliquée.",
        impact: 'Redressements fiscaux et pénalités',
      },
      {
        title: 'Non-conformité garantie décennale',
        description: "Exercer sans assurance décennale valide ou avec des garanties insuffisantes.",
        impact: 'Sanctions pénales et engagements financiers lourds',
      },
      {
        title: 'Absence de suivi par chantier',
        description: "Ne pas comptabiliser les coûts et marges chantier par chantier.",
        impact: 'Impossibilité d\'identifier les chantiers rentables',
      },
    ],
    optimizations: [
      {
        title: 'Comptabilité analytique par chantier',
        description: "Mise en place d'un suivi détaillé des coûts et marges pour chaque chantier.",
        benefit: 'Amélioration de la rentabilité de 5 à 10%',
      },
      {
        title: 'Optimisation du BFR',
        description: 'Gestion des acomptes, facturation progressive et optimisation des délais fournisseurs.',
        benefit: 'Amélioration trésorerie de 15 à 25%',
      },
      {
        title: 'Régime de TVA sur encaissement',
        description: "Application de la TVA sur encaissement pour améliorer la trésorerie.",
        benefit: 'Décalage de trésorerie significatif',
      },
      {
        title: 'Crédit d\'impôt et aides BTP',
        description: 'CITE, aides à l\'embauche d\'apprentis, crédit d\'impôt formation.',
        benefit: 'Réduction fiscale et aides de 3 000€ à 10 000€/an',
      },
    ],
    optimizationsDisclaimer: "Ces optimisations et leurs bénéfices estimés sont donnés à titre indicatif. Les résultats réels dépendent de nombreux facteurs propres à votre entreprise et à votre secteur d'activité. Nous réalisons une analyse personnalisée pour identifier les leviers les plus pertinents dans votre situation.",
  },
  {
    id: 'commerciaux',
    title: 'Commerce & Distribution',
    slug: 'commerciaux',
    icon: 'Storefront',
    description: 'Expertise comptable pour les commerces de détail et de gros (épicerie, boulangerie, prêt-à-porter, électronique, grossiste alimentaire, etc.) : gestion des stocks, encaissements, TVA, optimisation fiscale et conseil commercial.',
    examples: [
      'Commerce alimentaire (épicerie, boucherie, boulangerie)',
      'Commerce non alimentaire (prêt-à-porter, électronique, décoration)',
      'Commerce de gros (grossiste alimentaire, fournitures professionnelles)',
      'Franchise et réseau de distribution',
      'E-commerce et vente en ligne',
    ],
    specialties: [
      'Gestion des stocks et inventaires',
      'Comptabilité des encaissements',
      'TVA commerce de détail',
      'Optimisation de la marge commerciale',
      'Tableaux de bord commerciaux',
    ],
    faq: [
      {
        question: 'Comment optimiser ma marge commerciale ?',
        answer: "Nous analysons vos prix d'achat, vos marges par produit et vous conseillons sur votre politique tarifaire. Nous mettons en place des tableaux de bord pour suivre vos indicateurs clés.",
      },
      {
        question: 'Comment gérer la comptabilité de mes stocks ?',
        answer: "Nous assurons le suivi comptable de vos stocks, réalisons les inventaires et vous aidons à optimiser votre rotation de stock pour améliorer votre trésorerie.",
      },
    ],
    keyRatios: [
      {
        title: 'Taux de marge brute',
        description: 'Entre 25% et 45% selon le type de commerce',
        benchmark: 'Idéal > 35%',
      },
      {
        title: 'Rotation des stocks',
        description: 'Nombre de fois où le stock se renouvelle par an',
        benchmark: '6 à 12 fois/an selon secteur',
      },
      {
        title: 'Durée moyenne de stockage',
        description: 'Nombre de jours moyen de détention des marchandises',
        benchmark: '< 60 jours',
      },
      {
        title: 'Ratio de liquidité',
        description: 'Actifs circulants / Dettes à court terme',
        benchmark: '> 1,5',
      },
    ],
    ratiosDisclaimer: "Ces ratios sont donnés à titre indicatif et peuvent varier significativement selon votre type de commerce, votre positionnement (bas de gamme, milieu de gamme, haut de gamme), votre zone de chalandise et votre modèle économique. Une analyse personnalisée est nécessaire pour établir vos objectifs spécifiques.",
    commonPitfalls: [
      {
        title: 'Sous-estimation des charges variables',
        description: "Ne pas intégrer tous les coûts liés à l'achat (transport, assurance, casse) dans le calcul de la marge.",
        impact: 'Rentabilité surestimée et décisions commerciales inadaptées',
      },
      {
        title: 'Mauvaise gestion des stocks',
        description: 'Sur-stockage entraînant immobilisation de trésorerie ou ruptures de stock perdant des ventes.',
        impact: 'Trésorerie dégradée ou perte de chiffre d\'affaires',
      },
      {
        title: 'Négligence de la TVA sur marge',
        description: "Pour les biens d'occasion, ne pas appliquer le régime de TVA sur marge qui peut être plus avantageux.",
        impact: 'Surcharge de TVA et perte de compétitivité',
      },
      {
        title: 'Absence de tableaux de bord',
        description: 'Piloter son commerce sans indicateurs clés et attendre la fin d\'année pour analyser les résultats.',
        impact: 'Réaction tardive aux problèmes de rentabilité',
      },
    ],
    optimizations: [
      {
        title: 'Optimisation fiscale de la rémunération',
        description: "Arbitrage entre salaire, dividendes et compte courant d'associé pour minimiser les charges sociales et fiscales.",
        benefit: 'Économie de 3 000€ à 8 000€/an selon la structure',
      },
      {
        title: 'Mise en place d\'outils de gestion modernes',
        description: 'Logiciels de caisse connectés, gestion automatisée des stocks, tableaux de bord en temps réel.',
        benefit: 'Gain de temps de 5-10h/semaine et meilleure visibilité',
      },
      {
        title: 'Optimisation de la marge par produit',
        description: 'Analyse ABC des produits, ajustement des prix et focus sur les produits à forte marge.',
        benefit: 'Amélioration de la marge globale de 2 à 5 points',
      },
      {
        title: 'Négociation fournisseurs',
        description: 'Accompagnement sur les conditions d\'achat, délais de paiement et remises volume.',
        benefit: 'Réduction des coûts d\'achat de 3 à 7%',
      },
    ],
    optimizationsDisclaimer: "Les bénéfices indiqués sont des estimations basées sur notre expérience. Les résultats réels varient en fonction de nombreux paramètres : taille de l'entreprise, secteur d'activité précis, situation de départ et capacité à mettre en œuvre les recommandations. Nous établissons un diagnostic personnalisé avant toute intervention.",
  },
  {
    id: 'transport',
    title: 'Transport & Logistique',
    slug: 'transport',
    icon: 'LocalShipping',
    description: 'Expertise pointue pour le transport et la logistique : gestion des frais de carburant, amortissement des véhicules, réglementations sociales spécifiques et régimes de TVA particuliers.',
    specialties: [
      'Gestion des frais de carburant et péages',
      'Amortissement des véhicules et matériels',
      'Réglementation sociale du transport',
      'TVA intracommunautaire et internationale',
      'Licences de transport et autorisations',
      'Optimisation fiscale du parc automobile',
    ],
    faq: [
      {
        question: 'Comment optimiser la gestion fiscale de mon parc automobile ?',
        answer: "Nous vous accompagnons dans le choix entre achat, location ou crédit-bail pour vos véhicules, et optimisons la récupération de TVA sur le carburant et les péages. Nous gérons également les amortissements pour minimiser votre charge fiscale.",
      },
      {
        question: 'Quelles sont les spécificités de la TVA dans le transport ?',
        answer: "Le transport présente des règles de TVA complexes, notamment pour le transport international et intracommunautaire. Nous maîtrisons ces régimes spécifiques et assurons la conformité de vos déclarations tout en optimisant votre trésorerie.",
      },
    ],
    keyRatios: [
      {
        title: 'Taux de marge opérationnelle',
        description: 'Marge après coûts d\'exploitation',
        benchmark: '5% à 15% selon type de transport',
      },
      {
        title: 'Coût au kilomètre',
        description: 'Coût total par km parcouru (carburant, entretien, amortissement)',
        benchmark: 'Suivi mensuel recommandé',
      },
      {
        title: 'Taux d\'utilisation des véhicules',
        description: 'Km chargés / Km totaux parcourus',
        benchmark: '> 80% pour rentabilité',
      },
      {
        title: 'Délai moyen de paiement',
        description: 'Temps entre prestation et encaissement',
        benchmark: '30 à 60 jours',
      },
    ],
    ratiosDisclaimer: "Ces ratios sont donnés à titre indicatif et varient considérablement selon votre type de transport (routier, express, messagerie, logistique), votre zone géographique (national, international) et votre modèle d'exploitation. Une analyse personnalisée est essentielle pour définir vos objectifs réalistes.",
    commonPitfalls: [
      {
        title: 'Sous-estimation des coûts réels',
        description: "Ne pas intégrer tous les coûts (carburant, entretien, péages, assurances, amortissement) dans le calcul du prix de revient.",
        impact: 'Prestations vendues à perte',
      },
      {
        title: 'Mauvaise gestion de la TVA',
        description: "Erreurs dans l'application des régimes de TVA intracommunautaire ou de récupération sur le gazole.",
        impact: 'Redressements fiscaux et pénalités',
      },
      {
        title: 'Non-respect des réglementations sociales',
        description: "Infractions aux temps de conduite, repos obligatoires et réglementation sociale spécifique au transport.",
        impact: 'Amendes et sanctions administratives',
      },
      {
        title: 'Absence de suivi par véhicule',
        description: "Ne pas analyser la rentabilité véhicule par véhicule et route par route.",
        impact: 'Impossibilité d\'optimiser les tournées et tarifs',
      },
    ],
    optimizations: [
      {
        title: 'Optimisation de la récupération de TVA',
        description: 'Maximisation de la récupération de TVA sur le gazole, péages et entretien selon les régimes applicables.',
        benefit: 'Récupération de TVA optimisée et gain de trésorerie',
      },
      {
        title: 'Choix optimal du mode de financement',
        description: 'Arbitrage entre achat, crédit-bail et location longue durée pour optimiser fiscalité et trésorerie.',
        benefit: 'Économie de 3 000€ à 10 000€/véhicule/an',
      },
      {
        title: 'Comptabilité analytique par véhicule',
        description: 'Suivi détaillé des coûts et marges par véhicule et par route pour optimiser la rentabilité.',
        benefit: 'Amélioration de la marge de 3 à 7%',
      },
      {
        title: 'Gestion optimisée du BFR',
        description: 'Négociation des délais de paiement clients et fournisseurs, facturation rapide des prestations.',
        benefit: 'Amélioration trésorerie de 15 à 25%',
      },
    ],
    optimizationsDisclaimer: "Les bénéfices mentionnés sont des estimations basées sur notre expérience. Les résultats réels dépendent de nombreux facteurs : taille de votre flotte, type de transport, zone d'activité et capacité à mettre en œuvre les optimisations. Nous réalisons un diagnostic personnalisé pour identifier les leviers les plus pertinents pour votre entreprise.",
  },
  {
    id: 'liberales',
    title: 'Professions libérales',
    slug: 'liberales',
    icon: 'LocalHospital',
    description: "Accompagnement adapté aux professions libérales : médecins, avocats, architectes, consultants. Optimisation BNC, retraite, et prévoyance.",
    specialties: [
      'Régime BNC optimisé',
      'Gestion URSSAF et caisses de retraite',
      'Optimisation fiscale libérale',
      'Conseil retraite et prévoyance',
      'Adhésion à un OGA',
    ],
    faq: [
      {
        question: 'Quel est l\'intérêt d\'adhérer à un OGA ?',
        answer: "L'adhésion à un Organisme de Gestion Agréé (OGA) vous permet de bénéficier d'avantages fiscaux et d'éviter la majoration de 25% du bénéfice imposable.",
      },
      {
        question: 'Comment optimiser ma retraite en profession libérale ?',
        answer: "Nous vous conseillons sur les cotisations optimales à verser selon votre situation, les dispositifs de retraite complémentaire et la prévoyance adaptée à votre profession.",
      },
    ],
    keyRatios: [
      {
        title: 'Taux de charges sociales',
        description: 'Part des cotisations sociales dans le revenu',
        benchmark: '40% à 45% du bénéfice',
      },
      {
        title: 'Taux de frais professionnels',
        description: 'Ratio des frais par rapport au chiffre d\'affaires',
        benchmark: '15% à 30% selon la profession',
      },
      {
        title: 'Délai moyen de paiement clients',
        description: 'Temps moyen entre facturation et encaissement',
        benchmark: '< 45 jours',
      },
      {
        title: 'Taux d\'épargne retraite',
        description: 'Part du revenu consacrée à la retraite/prévoyance',
        benchmark: '10% à 15% du revenu',
      },
    ],
    ratiosDisclaimer: "Ces ratios sont indicatifs et peuvent varier significativement selon votre profession (médecin, avocat, architecte, consultant, etc.), votre ancienneté, votre zone d'exercice et votre mode d'organisation (individuel, cabinet de groupe, SEL). Une analyse personnalisée est essentielle pour optimiser votre situation.",
    commonPitfalls: [
      {
        title: 'Non-adhésion à un OGA',
        description: "Ne pas adhérer à un Organisme de Gestion Agréé entraîne une majoration de 25% du bénéfice imposable.",
        impact: 'Surcoût fiscal de plusieurs milliers d\'euros par an',
      },
      {
        title: 'Sous-cotisation retraite',
        description: "Cotiser au minimum pour réduire les charges, mais pénaliser sa future retraite.",
        impact: 'Perte de droits à la retraite et pension réduite',
      },
      {
        title: 'Mauvaise gestion trésorerie',
        description: "Ne pas provisionner les charges sociales et fiscales trimestrielles/annuelles.",
        impact: 'Difficultés de trésorerie aux échéances',
      },
      {
        title: 'Dépassement des seuils',
        description: "Franchir les seuils de CA sans anticiper les conséquences (TVA, régime fiscal).",
        impact: 'Charges supplémentaires non anticipées',
      },
    ],
    optimizations: [
      {
        title: 'Optimisation du régime BNC',
        description: "Choix entre régime micro-BNC et déclaration contrôlée selon votre situation, déduction optimale des charges.",
        benefit: 'Économie fiscale de 2 000€ à 6 000€/an',
      },
      {
        title: 'Constitution d\'une SCP ou SEL',
        description: "Passage en société pour optimiser la fiscalité et préparer la transmission ou l'association.",
        benefit: 'Optimisation globale et souplesse patrimoniale',
      },
      {
        title: 'Optimisation retraite et prévoyance',
        description: 'Loi Madelin, PERP, contrats prévoyance adaptés avec déduction fiscale des cotisations.',
        benefit: 'Préparation retraite + économie fiscale immédiate',
      },
      {
        title: 'Déduction des frais réels',
        description: 'Optimisation des frais de véhicule, bureau à domicile, déplacements professionnels.',
        benefit: 'Réduction du bénéfice imposable de 5 à 15%',
      },
    ],
    optimizationsDisclaimer: "Les économies fiscales et les bénéfices mentionnés sont des estimations moyennes. Les résultats réels dépendent de votre situation personnelle, de votre niveau de revenu, de votre structure juridique et de votre capacité d'épargne. Nous établissons un plan d'optimisation sur mesure adapté à vos objectifs personnels et professionnels.",
  },
  {
    id: 'services-entreprises',
    title: 'Services aux Entreprises (B2B)',
    slug: 'services-entreprises',
    icon: 'BusinessCenter',
    description: 'Accompagnement des entreprises de services B2B : conseil, informatique, marketing, ingénierie. Gestion des prestations, facturation et optimisation.',
    specialties: [
      'Comptabilité des prestations de services',
      'Gestion de la facturation récurrente',
      'Suivi de la rentabilité par projet',
      'Optimisation fiscale des services',
      'Gestion des contrats cadres',
    ],
    faq: [
      {
        question: 'Comment suivre la rentabilité par projet ?',
        answer: "Nous mettons en place une comptabilité analytique par projet vous permettant de suivre les coûts, le temps passé et la marge de chaque mission.",
      },
      {
        question: 'Comment gérer la facturation récurrente de mes contrats ?',
        answer: "Nous pouvons automatiser votre facturation récurrente et assurer le suivi comptable de vos abonnements et contrats au long cours.",
      },
    ],
    keyRatios: [
      {
        title: 'Taux de marge sur prestations',
        description: 'Marge après coûts directs (temps, sous-traitance)',
        benchmark: '40% à 60% selon type de service',
      },
      {
        title: 'Taux d\'utilisation',
        description: 'Temps facturable / Temps total disponible',
        benchmark: '> 70% pour être rentable',
      },
      {
        title: 'Délai moyen de facturation',
        description: 'Temps entre prestation et facturation',
        benchmark: '< 15 jours',
      },
      {
        title: 'Taux de renouvellement clients',
        description: 'Clients récurrents / Total clients',
        benchmark: '> 60%',
      },
    ],
    ratiosDisclaimer: "Ces ratios sont donnés à titre indicatif et peuvent varier significativement selon votre type de prestation (conseil, technique, créatif), votre niveau d'expertise, votre positionnement tarifaire et votre modèle commercial (régie, forfait, abonnement). Chaque entreprise de services nécessite une analyse spécifique.",
    commonPitfalls: [
      {
        title: 'Facturation retardée',
        description: "Attendre la fin du mois ou du projet pour facturer, impactant la trésorerie.",
        impact: 'Décalage de trésorerie et risque d\'impayés',
      },
      {
        title: 'Absence de suivi du temps',
        description: "Ne pas tracker le temps passé par projet/client pour mesurer la rentabilité réelle.",
        impact: 'Projets déficitaires non identifiés',
      },
      {
        title: 'Sous-évaluation des prestations',
        description: "Proposer des tarifs trop bas par rapport à la valeur délivrée et au temps investi.",
        impact: 'Rentabilité faible malgré forte activité',
      },
      {
        title: 'Mauvaise gestion des contrats récurrents',
        description: "Ne pas mettre à jour les tarifs ou les conditions contractuelles régulièrement.",
        impact: 'Perte de marge sur les contrats longs',
      },
    ],
    optimizations: [
      {
        title: 'Modèle de facturation récurrente',
        description: 'Développement d\'offres d\'abonnement ou de contrats récurrents pour stabiliser le CA.',
        benefit: 'Trésorerie prévisible et amélioration de 20 à 40%',
      },
      {
        title: 'Optimisation des prix et packages',
        description: 'Analyse de la valeur perçue, ajustement des tarifs, création de packages premium.',
        benefit: 'Augmentation du CA moyen par client de 15 à 30%',
      },
      {
        title: 'Automatisation facturation et relances',
        description: 'Mise en place d\'outils pour automatiser la facturation récurrente et les relances.',
        benefit: 'Gain de temps de 3-5h/semaine et réduction impayés',
      },
      {
        title: 'Comptabilité analytique par projet',
        description: 'Suivi détaillé des temps et coûts par projet pour optimiser les tarifs futurs.',
        benefit: 'Amélioration marge globale de 5 à 15%',
      },
    ],
    optimizationsDisclaimer: "Les bénéfices indiqués sont des moyennes observées. Les résultats réels dépendent de votre marché, de votre positionnement concurrentiel, de la maturité de votre entreprise et de votre capacité à faire évoluer votre modèle commercial. Nous vous accompagnons dans une démarche progressive et adaptée à votre rythme.",
  },
  {
    id: 'services-particuliers',
    title: 'Services aux Particuliers (B2C)',
    slug: 'services-particuliers',
    icon: 'People',
    description: 'Expertise pour les services aux particuliers : coiffure, esthétique, bien-être, services à la personne, formation. Gestion des encaissements, TVA et optimisation.',
    specialties: [
      'Gestion des encaissements espèces et CB',
      'TVA services aux particuliers',
      'Gestion des plannings et rendez-vous',
      'Optimisation de la rentabilité',
      'Conformité URSSAF et fiscale',
    ],
    faq: [
      {
        question: 'Quel régime fiscal choisir pour mon activité de services ?',
        answer: "Le choix dépend de votre CA et de votre structure : micro-entreprise, réel simplifié ou réel normal. Nous analysons votre situation pour optimiser votre fiscalité tout en respectant vos obligations.",
      },
      {
        question: 'Comment gérer les encaissements en espèces et CB ?',
        answer: "Nous vous accompagnons dans le choix d'outils adaptés (caisse enregistreuse, logiciels de gestion) et assurons la conformité de votre comptabilité avec les règles fiscales.",
      },
    ],
    keyRatios: [
      {
        title: 'Taux de marge brute',
        description: 'Marge après coûts directs des prestations',
        benchmark: '60% à 80% selon activité',
      },
      {
        title: 'Taux d\'occupation',
        description: 'Temps facturable / Temps d\'ouverture',
        benchmark: '> 65% pour être rentable',
      },
      {
        title: 'Ticket moyen',
        description: 'CA moyen par client et par visite',
        benchmark: 'Suivi mensuel recommandé',
      },
      {
        title: 'Taux de fidélisation',
        description: 'Clients réguliers / Total clients',
        benchmark: '> 50%',
      },
    ],
    ratiosDisclaimer: "Ces ratios sont donnés à titre indicatif et varient fortement selon votre activité spécifique (coiffure, esthétique, bien-être, services à domicile, etc.), votre zone géographique, votre positionnement tarifaire et votre clientèle. Une analyse personnalisée est indispensable pour fixer vos objectifs.",
    commonPitfalls: [
      {
        title: 'Mauvaise gestion des encaissements',
        description: "Ne pas enregistrer correctement les encaissements espèces ou ne pas déclarer l'intégralité du CA.",
        impact: 'Redressement fiscal et pénalités URSSAF',
      },
      {
        title: 'Sous-évaluation des charges',
        description: "Oublier de provisionner les charges sociales et fiscales dans le calcul de rentabilité.",
        impact: 'Difficultés de trésorerie aux échéances',
      },
      {
        title: 'Absence de suivi de rentabilité',
        description: "Ne pas calculer le coût horaire et la marge par prestation pour optimiser les prix.",
        impact: 'Activité intense mais peu rentable',
      },
      {
        title: 'Gestion inadaptée des stocks',
        description: "Pour les activités nécessitant des produits (esthétique, coiffure), mauvaise gestion des stocks de consommables.",
        impact: 'Immobilisation de trésorerie ou ruptures',
      },
    ],
    optimizations: [
      {
        title: 'Optimisation de la grille tarifaire',
        description: 'Analyse de la concurrence, valorisation de l\'expertise, création de packages et prestations premium.',
        benefit: 'Augmentation du CA de 10 à 25%',
      },
      {
        title: 'Programme de fidélisation',
        description: 'Mise en place de cartes de fidélité, abonnements ou offres récurrentes pour stabiliser le CA.',
        benefit: 'Amélioration de la régularité du CA',
      },
      {
        title: 'Optimisation fiscale du statut',
        description: 'Choix du meilleur régime fiscal et social selon votre CA et vos perspectives de développement.',
        benefit: 'Économie fiscale de 1 500€ à 5 000€/an',
      },
      {
        title: 'Outils de gestion modernes',
        description: 'Logiciels de prise de rendez-vous, caisse connectée, suivi de la rentabilité en temps réel.',
        benefit: 'Gain de temps 3-5h/semaine et meilleure visibilité',
      },
    ],
    optimizationsDisclaimer: "Les bénéfices mentionnés sont des estimations moyennes. Les résultats réels dépendent de nombreux facteurs : votre notoriété locale, votre expérience, la qualité de vos prestations, votre emplacement et votre capacité à mettre en œuvre les recommandations. Nous vous accompagnons de manière pragmatique et progressive.",
  },
];

export const STATS = [
  {
    value: 2007,
    label: 'Année de création',
    isYear: true,
  },
  {
    value: 35,
    suffix: ' ans',
    label: "D'expérience cumulée",
  },
  {
    value: 1000,
    prefix: '+',
    label: 'Clients satisfaits',
  },
  {
    value: 'OEC',
    label: "Ordre des Experts-Comptables",
    isImage: true,
  },
];
