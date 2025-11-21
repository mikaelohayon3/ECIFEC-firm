'use client';
import { Box, Container, Grid, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';

const METHODOLOGY_POINTS = [
  'Écoute active de vos besoins et analyse de votre situation',
  'Proposition personnalisée adaptée à votre activité',
  'Planning de travail clair avec des échéances définies',
  'Communication régulière et proactive tout au long de l\'année',
  'Utilisation d\'outils digitaux pour simplifier les échanges',
  'Veille réglementaire permanente pour anticiper les changements',
];

export default function OurMethodology() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Notre méthodologie de travail"
          description="Une approche structurée et collaborative pour votre sérénité"
        />

        <Grid container spacing={6} sx={{ mt: 2 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <FadeInSection delay={0} direction="left">
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}
                >
                  Comment nous travaillons
                </Typography>
                <List>
                  {METHODOLOGY_POINTS.map((point, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <CheckCircleIcon sx={{ color: 'secondary.main' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={point}
                        primaryTypographyProps={{
                          fontSize: '0.95rem',
                          lineHeight: 1.7,
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </FadeInSection>
          </Grid>

          <Grid item xs={12} md={6}>
            <FadeInSection delay={200} direction="right">
              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}
                >
                  Notre engagement relationnel
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                  Chez ECIFEC, nous croyons que la relation client est au cœur d'un
                  accompagnement comptable réussi. C'est pourquoi nous vous attribuons
                  un interlocuteur dédié qui apprend à connaître votre entreprise, vos
                  enjeux et vos objectifs.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                  Cette proximité nous permet d'anticiper vos besoins, de vous alerter
                  en cas de risque et de vous conseiller de manière proactive. Vous
                  n'êtes pas un dossier parmi d'autres, mais un partenaire avec qui nous
                  construisons une relation de confiance sur le long terme.
                </Typography>
                <Paper
                  sx={{
                    p: 3,
                    backgroundColor: 'secondary.light',
                    borderLeft: '4px solid',
                    borderColor: 'secondary.main',
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontStyle: 'italic', color: 'text.secondary' }}
                  >
                    "Nous ne nous contentons pas de tenir votre comptabilité, nous vous
                    accompagnons dans votre réussite."
                  </Typography>
                </Paper>
              </Box>
            </FadeInSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
