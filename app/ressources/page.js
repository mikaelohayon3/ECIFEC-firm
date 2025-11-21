'use client';
import { Box, Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import Link from 'next/link';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionTitle from '@/components/shared/SectionTitle';
import CTASection from '@/components/shared/CTASection';
import FadeInSection from '@/components/shared/FadeInSection';
import PageHead from '@/components/shared/PageHead';

const RESOURCES = [
  {
    id: 'calendrier',
    title: 'Calendrier Fiscal et Social',
    description: 'Consultez les dates clés et échéances fiscales et sociales pour ne rien manquer tout au long de l\'année.',
    icon: CalendarTodayIcon,
    href: '/ressources/calendrier',
    color: 'primary.main',
  },
  {
    id: 'simulateurs',
    title: 'Simulateurs',
    description: 'Accédez aux simulateurs officiels de l\'URSSAF pour estimer vos charges sociales et autres cotisations.',
    icon: CalculateIcon,
    href: '/ressources/simulateurs',
    color: 'secondary.main',
  },
  {
    id: 'structure-service',
    title: 'Structure de Service',
    description: 'Découvrez l\'organisation complète de votre dossier : juridique, fiscal, social, comptabilité et personnel.',
    icon: AccountTreeIcon,
    href: '/ressources/structure-service',
    color: 'primary.main',
  },
];

export default function RessourcesPage() {
  return (
    <>
      <PageHead
        title="Ressources - Cabinet ECIFEC | Outils et guides pratiques"
        description="Accédez à nos ressources : calendrier fiscal et social 2026, simulateurs URSSAF, structure de service. Outils pratiques pour gérer votre entreprise."
      />
      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: { xs: 6, md: 8 },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle
            subtitle="Ressources"
            title="Outils et ressources pour votre entreprise"
            description="Découvrez nos ressources pratiques pour vous accompagner au quotidien : calendriers des échéances, simulateurs officiels et organisation de votre dossier."
            light
            noMargin
          />
        </Container>
      </Box>

      {/* Resources Grid */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {RESOURCES.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <Grid item xs={12} md={4} key={resource.id}>
                  <FadeInSection delay={index * 100} direction="up">
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 12px rgba(4, 48, 51, 0.08)',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 12px 32px rgba(4, 48, 51, 0.15)',
                        },
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1, p: 4, textAlign: 'center' }}>
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            backgroundColor: resource.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 3,
                          }}
                        >
                          <IconComponent sx={{ fontSize: 40, color: 'white' }} />
                        </Box>

                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            mb: 2,
                            color: 'primary.main',
                          }}
                        >
                          {resource.title}
                        </Typography>

                        <Typography
                          variant="body1"
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.7,
                            mb: 3,
                          }}
                        >
                          {resource.description}
                        </Typography>

                        <Button
                          component={Link}
                          href={resource.href}
                          variant="contained"
                          color={resource.id === 'simulateurs' ? 'secondary' : 'primary'}
                          size="large"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            borderRadius: 50,
                            px: 4,
                            py: 1.5,
                          }}
                        >
                          Accéder
                        </Button>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Information Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <FadeInSection delay={0} direction="up">
            <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
                Des outils pour mieux piloter votre activité
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
                Nous mettons à votre disposition des ressources pratiques pour vous aider à gérer
                votre entreprise au quotidien. Ces outils vous permettent de rester informé des
                échéances importantes et d'estimer vos charges en toute transparence.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Besoin d'aide pour interpréter les résultats ou pour aller plus loin ? Nos
                experts-comptables sont à votre disposition pour vous accompagner.
              </Typography>
            </Box>
          </FadeInSection>
        </Container>
      </Box>

      {/* CTA Section */}
      <CTASection
        title="Besoin d'un accompagnement personnalisé ?"
        subtitle="Contactez-nous pour discuter de vos besoins et bénéficier de l'expertise de nos consultants."
      />
    </>
  );
}
