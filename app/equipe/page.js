'use client';
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GavelIcon from '@mui/icons-material/Gavel';
import PeopleIcon from '@mui/icons-material/People';
import SectionTitle from '@/components/shared/SectionTitle';
import CTASection from '@/components/shared/CTASection';
import FadeInSection from '@/components/shared/FadeInSection';
import PageHead from '@/components/shared/PageHead';
import { TEAM_MEMBERS } from '@/lib/data/team';
import TeamPhilosophy from '@/components/team/TeamPhilosophy';
import TeamCertifications from '@/components/team/TeamCertifications';
import QualityCommitment from '@/components/team/QualityCommitment';

const iconMap = {
  Receipt: ReceiptIcon,
  AccountBalance: AccountBalanceIcon,
  Gavel: GavelIcon,
  People: PeopleIcon,
};

export default function EquipePage() {
  return (
    <>
      <PageHead
        title="Notre Équipe - Cabinet ECIFEC | Experts-Comptables à Sarcelles"
        description="Rencontrez l'équipe du Cabinet ECIFEC : experts-comptables diplômés, collaborateurs qualifiés. Plus de 35 ans d'expérience au service des entreprises du bassin parisien."
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
            subtitle="Notre Équipe"
            title="Des spécialistes à votre service"
            description="Une équipe pluridisciplinaire d'experts comptables, fiscalistes, juristes et gestionnaires de paie, tous dédiés à la réussite de votre entreprise."
            light
            noMargin
          />
        </Container>
      </Box>

      {/* Team Introduction */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <FadeInSection delay={0} direction="up">
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                mb: 4,
                fontSize: '1.15rem',
                color: 'text.secondary',
                lineHeight: 1.8,
              }}
            >
              Chez ECIFEC, nous croyons qu'une expertise comptable de qualité repose avant
              tout sur les femmes et les hommes qui la composent. Notre équipe combine
              compétences techniques pointues et approche humaine pour vous offrir le
              meilleur accompagnement possible.
            </Typography>
          </FadeInSection>

          <Grid container spacing={4}>
            {TEAM_MEMBERS.map((member, index) => {
              const IconComponent = iconMap[member.icon];
              return (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <FadeInSection delay={index * 100} direction="up">
                    <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-12px)',
                        boxShadow: '0 12px 32px rgba(4, 48, 51, 0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      {/* Icon Circle */}
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: '50%',
                          backgroundColor: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                        }}
                      >
                        {IconComponent && (
                          <IconComponent sx={{ fontSize: 48, color: 'white' }} />
                        )}
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          color: 'primary.main',
                        }}
                      >
                        {member.role}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.7,
                        }}
                      >
                        {member.description}
                      </Typography>
                    </CardContent>
                  </Card>
                  </FadeInSection>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <SectionTitle
            title="Nos valeurs"
            description="Ce qui guide notre action au quotidien"
          />

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FadeInSection delay={0} direction="up">
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}
                  >
                    Excellence
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Nous visons l'excellence dans chaque mission, avec rigueur et
                    professionnalisme.
                  </Typography>
                </Box>
              </FadeInSection>
            </Grid>
            <Grid item xs={12} md={4}>
              <FadeInSection delay={100} direction="up">
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}
                  >
                    Écoute
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Nous prenons le temps de comprendre vos besoins pour y répondre au
                    mieux.
                  </Typography>
                </Box>
              </FadeInSection>
            </Grid>
            <Grid item xs={12} md={4}>
              <FadeInSection delay={200} direction="up">
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}
                  >
                    Engagement
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Nous nous engageons pleinement pour la réussite de votre projet
                    d'entreprise.
                  </Typography>
                </Box>
              </FadeInSection>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team Philosophy */}
      <TeamPhilosophy />

      {/* Team Certifications */}
      <TeamCertifications />

      {/* Quality Commitment */}
      <QualityCommitment />

      {/* CTA Section */}
      <CTASection
        title="Rencontrez notre équipe"
        subtitle="Prenez rendez-vous pour faire connaissance et discuter de vos besoins."
      />
    </>
  );
}
