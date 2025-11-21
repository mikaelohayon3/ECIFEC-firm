'use client';
import { Box, Container, Typography, Paper, Stepper, Step, StepLabel, StepContent } from '@mui/material';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';

const TIMELINE_STEPS = [
  {
    label: 'Mois 1-2 : Démarrage et mise en place',
    content: 'Audit de votre situation actuelle, reprise des dossiers, paramétrage des outils, et définition du planning annuel.',
  },
  {
    label: 'Mois 3-11 : Accompagnement mensuel',
    content: 'Saisie comptable mensuelle, déclarations de TVA, bulletins de paie, tableaux de bord, points réguliers et conseils proactifs tout au long de l\'année.',
  },
  {
    label: 'Mois 12 : Clôture de l\'exercice',
    content: 'Révision des comptes, établissement du bilan et du compte de résultat, assemblée générale, liasses fiscales et préparation de l\'exercice suivant.',
  },
  {
    label: 'Année N+1 : Suivi et optimisation',
    content: 'Analyse des résultats de l\'année écoulée, conseils d\'optimisation fiscale, accompagnement sur vos projets de développement et ajustement de notre prestation à vos besoins.',
  },
];

export default function FirstYearTimeline() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
      <Container maxWidth="md">
        <SectionTitle
          title="Vos différentes étapes avec ECIFEC"
          description="Un accompagnement structuré dès le premier jour"
        />

        <FadeInSection delay={200} direction="up">
          <Paper
            elevation={0}
            sx={{
              mt: 4,
              p: { xs: 3, md: 5 },
              backgroundColor: 'background.paper',
              borderRadius: 3,
            }}
          >
            <Stepper orientation="vertical" activeStep={-1}>
              {TIMELINE_STEPS.map((step, index) => (
                <Step key={index} expanded>
                  <StepLabel
                    StepIconProps={{
                      sx: {
                        color: 'secondary.main',
                        '&.Mui-completed': {
                          color: 'secondary.main',
                        },
                        '&.Mui-active': {
                          color: 'secondary.main',
                        },
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: 'primary.main' }}
                    >
                      {step.label}
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.8,
                        pb: 3,
                      }}
                    >
                      {step.content}
                    </Typography>
                  </StepContent>
                </Step>
              ))}
            </Stepper>

            <Box
              sx={{
                mt: 4,
                p: 3,
                backgroundColor: 'white',
                borderRadius: 2,
                borderLeft: '4px solid',
                borderColor: 'secondary.main',
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontStyle: 'italic', color: 'text.secondary', lineHeight: 1.8 }}
              >
                <strong>Note :</strong> Ce planning est indicatif et sera adapté en fonction de votre
                date de clôture, de votre secteur d'activité et de vos besoins spécifiques.
              </Typography>
            </Box>
          </Paper>
        </FadeInSection>
      </Container>
    </Box>
  );
}
