'use client';
import { Box, Container, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';

const SERVICES_FAQ = [
  {
    question: 'Quels services sont inclus dans un forfait de base ?',
    answer: 'Un forfait de base comprend généralement la saisie comptable mensuelle, les déclarations de TVA, l\'établissement du bilan annuel et de la liasse fiscale. Les autres prestations (paie, conseil, audit) peuvent être ajoutées selon vos besoins.',
  },
  {
    question: 'Puis-je combiner plusieurs services ?',
    answer: 'Absolument ! Nous construisons des forfaits sur-mesure combinant plusieurs services selon vos besoins. La plupart de nos clients bénéficient d\'un package comptabilité + fiscalité + paie.',
  },
  {
    question: 'Comment se déroule la transmission de mes documents ?',
    answer: 'Vous pouvez transmettre vos documents de plusieurs façons : par email, par courrier ou lors de rendez-vous en cabinet.',
  },
  {
    question: 'Quel est le délai de traitement de ma comptabilité ?',
    answer: 'En règle générale, votre comptabilité mensuelle est traitée sous 5 à 10 jours après réception de l\'ensemble des pièces. Les situations urgentes peuvent être traitées plus rapidement sur demande.',
  },
  {
    question: 'Puis-je changer de forfait en cours d\'année ?',
    answer: 'Oui, votre forfait peut évoluer en fonction de vos besoins. Si votre activité change (embauche, nouvelle activité, etc.), nous adaptons notre prestation et nos tarifs en conséquence.',
  },
  {
    question: 'Proposez-vous un accompagnement pour la création d\'entreprise ?',
    answer: 'Oui, nous accompagnons les créateurs d\'entreprise de A à Z : choix du statut juridique, business plan, formalités de création, demandes de financement et conseils de démarrage.',
  },
  {
    question: 'Comment se passe l\'arrêté des comptes annuels ?',
    answer: 'L\'arrêté des comptes se déroule en plusieurs étapes : révision complète de la comptabilité, ajustements et écritures de clôture, établissement du bilan et du compte de résultat, puis présentation en assemblée générale avec analyse des résultats.',
  },
  {
    question: 'Que faire si je suis contrôlé par les impôts ou l\'URSSAF ?',
    answer: 'Nous vous assistons lors des contrôles fiscaux et sociaux : préparation des documents, présence lors des entretiens et défense de vos intérêts. Notre expertise permet souvent de limiter les redressements.',
  },
];

export default function ServicesFAQ() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <SectionTitle
          title="Questions fréquentes sur nos services"
          description="Tout ce que vous devez savoir sur notre accompagnement"
        />

        <Box sx={{ mt: 4 }}>
          {SERVICES_FAQ.map((faq, index) => (
            <FadeInSection key={index} delay={index * 60} direction="up">
              <Accordion
                defaultExpanded={index === 0}
                sx={{
                  mb: 2,
                  '&:before': { display: 'none' },
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  '&:hover': {
                    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: 'white',
                    '&:hover': {
                      backgroundColor: 'background.paper',
                    },
                    py: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      fontSize: '1.05rem',
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 3, pb: 4, px: 4 }}>
                  <Typography
                    variant="body1"
                    sx={{ color: 'text.secondary', lineHeight: 1.8 }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </FadeInSection>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
