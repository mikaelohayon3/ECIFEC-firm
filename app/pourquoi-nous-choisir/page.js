'use client';
import { Box, Container, Grid, Card, CardContent, Typography, Paper } from '@mui/material';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SpeedIcon from '@mui/icons-material/Speed';
import DescriptionIcon from '@mui/icons-material/Description';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PlaceIcon from '@mui/icons-material/Place';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SectionTitle from '@/components/shared/SectionTitle';
import CTASection from '@/components/shared/CTASection';
import FadeInSection from '@/components/shared/FadeInSection';

import OurGuarantees from '@/components/whychooseus/OurGuarantees';
import OurTools from '@/components/whychooseus/OurTools';
import { WHY_CHOOSE_US } from '@/lib/data/services';

const iconMap = {
  HeadsetMic: HeadsetMicIcon,
  PersonPin: PersonPinIcon,
  CloudUpload: CloudUploadIcon,
  Speed: SpeedIcon,
  Description: DescriptionIcon,
  Summarize: SummarizeIcon,
};

export default function WhyChooseUsPage() {
  return (
    <>
      
      {/* Header Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #043033 0%, #065a5f 50%, #043033 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(199, 179, 118, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle
            subtitle="Pourquoi nous choisir"
            title="Ce qui fait la différence chez ECIFEC"
            description="Un cabinet d'expertise comptable à taille humaine qui place la relation clientèle au cœur de ses préoccupations, en associant compétences pluridisciplinaires et service d'excellence."
            light
            noMargin
          />
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {WHY_CHOOSE_US.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <Grid item xs={12} md={6} key={index}>
                  <FadeInSection delay={index * 150} direction={index % 2 === 0 ? 'left' : 'right'}>
                    <Card
                    sx={{
                      height: '100%',
                      p: { xs: 2, md: 3 },
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 32px rgba(199, 179, 118, 0.2)',
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 3,
                        }}
                      >
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: 2,
                            backgroundColor: 'secondary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          {IconComponent && (
                            <IconComponent sx={{ fontSize: 42, color: 'white' }} />
                          )}
                        </Box>

                        <Box>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 700,
                              mb: 2,
                              color: 'primary.main',
                            }}
                          >
                            {item.title}
                          </Typography>

                          <Typography
                            variant="body1"
                            sx={{
                              color: 'text.secondary',
                              lineHeight: 1.8,
                            }}
                          >
                            {item.description}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                  </FadeInSection>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Additional Benefits Section - Redesigned */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background: 'linear-gradient(135deg, #EDF5F2 0%, #ffffff 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '60%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(199, 179, 118, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <SectionTitle
            title="Notre engagement envers vous"
            description="Au-delà de l'expertise technique, nous nous engageons à être un véritable partenaire de votre réussite."
          />

          <Grid container spacing={4} sx={{ mt: 2 }}>
            {/* Proximité */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  p: 4,
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #043033 0%, #0a5a5f 100%)',
                  color: 'white',
                  borderRadius: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 20px 40px rgba(4, 48, 51, 0.3)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(199, 179, 118, 0.15) 0%, transparent 70%)',
                    animation: 'pulse 4s ease-in-out infinite',
                  },
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 0.5 },
                    '50%': { opacity: 1 },
                  },
                }}
              >
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    backgroundColor: 'secondary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    boxShadow: '0 8px 24px rgba(199, 179, 118, 0.4)',
                  }}
                >
                  <PlaceIcon sx={{ fontSize: 50, color: 'white' }} />
                </Box>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700, mb: 2, position: 'relative', zIndex: 1 }}
                >
                  Proximité
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.95,
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  Un interlocuteur dédié qui connaît votre entreprise et ses enjeux
                </Typography>
              </Paper>
            </Grid>

            {/* Expertise */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  p: 4,
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #C7B376 0%, #d4c291 100%)',
                  color: 'white',
                  borderRadius: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 20px 40px rgba(199, 179, 118, 0.4)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                    animation: 'pulse 4s ease-in-out infinite 1s',
                  },
                }}
              >
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
                    boxShadow: '0 8px 24px rgba(4, 48, 51, 0.4)',
                  }}
                >
                  <EmojiObjectsIcon sx={{ fontSize: 50, color: 'secondary.main' }} />
                </Box>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700, mb: 2, position: 'relative', zIndex: 1 }}
                >
                  Expertise
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.95,
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  Plus de 35 ans d'expérience cumulée dans des secteurs variés
                </Typography>
              </Paper>
            </Grid>

            {/* Engagement */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  p: 4,
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #043033 0%, #0a5a5f 100%)',
                  color: 'white',
                  borderRadius: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 20px 40px rgba(4, 48, 51, 0.3)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(199, 179, 118, 0.15) 0%, transparent 70%)',
                    animation: 'pulse 4s ease-in-out infinite 2s',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    backgroundColor: 'secondary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    boxShadow: '0 8px 24px rgba(199, 179, 118, 0.4)',
                  }}
                >
                  <FavoriteIcon sx={{ fontSize: 50, color: 'white' }} />
                </Box>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700, mb: 2, position: 'relative', zIndex: 1 }}
                >
                  Engagement
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.95,
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  Votre réussite est notre priorité, nous nous investissons pleinement
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Guarantees Section */}
      <OurGuarantees />

      {/* Our Tools Section */}
      <OurTools />

      {/* CTA Section */}
      <CTASection
        title="Prêt à travailler avec un cabinet à votre écoute ?"
        subtitle="Découvrez comment nous pouvons vous accompagner dans la réussite de votre entreprise."
      />
    </>
  );
}
