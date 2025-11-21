'use client';
import { Box, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';

const QUALITY_COMMITMENTS = [
  {
    title: 'Respect des normes professionnelles',
    points: [
      'Application stricte des normes de l\'Ordre des Experts-Comptables',
      'Respect du code de déontologie et du secret professionnel',
      'Conformité aux normes d\'exercice professionnel (NEP)',
    ],
  },
  {
    title: 'Procédures de contrôle qualité',
    points: [
      'Double contrôle systématique sur tous les dossiers sensibles',
      'Revue indépendante des comptes annuels',
      'Contrôle qualité interne trimestriel',
    ],
  },
  {
    title: 'Outils et technologies',
    points: [
      'Logiciels professionnels certifiés et à jour (Sage)',
      'Sauvegardes quotidiennes et plan de reprise d\'activité',
      'Contact sécurisé via email et téléphone',
    ],
  },
  {
    title: 'Engagement de service',
    points: [
      'Délais de traitement garantis selon forfait',
      'Réponse sous 48h maximum à vos questions',
      'Disponibilité et joignabilité de votre interlocuteur dédié',
    ],
  },
];

export default function QualityCommitment() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Notre engagement qualité"
          subtitle="Des processus rigoureux pour vous garantir le meilleur service"
        />

        <FadeInSection delay={200} direction="up">
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              mb: 6,
              fontSize: '1.1rem',
              color: 'text.secondary',
              lineHeight: 1.8,
            }}
          >
            La qualité n'est pas un hasard chez ECIFEC. Elle repose sur des procédures établies,
            des contrôles réguliers et un engagement sans faille de toute l'équipe. Voici nos
            garanties pour vous assurer un service irréprochable.
          </Typography>
        </FadeInSection>

        <Grid container spacing={4}>
          {QUALITY_COMMITMENTS.map((commitment, index) => (
            <Grid item xs={12} md={6} key={index}>
              <FadeInSection delay={index * 120 + 300} direction="up">
                <Box
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    border: '2px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      color: 'primary.main',
                    }}
                  >
                    {commitment.title}
                  </Typography>

                  <List sx={{ p: 0 }}>
                    {commitment.points.map((point, idx) => (
                      <ListItem key={idx} sx={{ px: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ color: 'secondary.main', fontSize: 24 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={point}
                          primaryTypographyProps={{
                            variant: 'body2',
                            color: 'text.secondary',
                            sx: { lineHeight: 1.7 },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </FadeInSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
