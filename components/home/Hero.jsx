'use client';
import { Box, Container, Typography, Button } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import Link from 'next/link';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneIcon from '@mui/icons-material/Phone';
import { CABINET_INFO } from '@/lib/data/navigation';
import FadeInSection from '@/components/shared/FadeInSection';

export default function Hero() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
        pt: { xs: 6, md: 3 },
        pb: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Grid2 container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box sx={{ pr: { md: 4 } }}>
              <FadeInSection delay={0} direction="right">
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    display: 'block',
                    mb: 2,
                  }}
                >
                  Cabinet d'Expertise Comptable
                </Typography>
              </FadeInSection>

              <FadeInSection delay={100} direction="right">
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    background: 'linear-gradient(135deg, #043033 0%, #0a5a5f 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Consacrez-vous à votre métier, nous transformons vos obligations légales en opportunités
                </Typography>
              </FadeInSection>

              <FadeInSection delay={200} direction="right">
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.15rem',
                    color: 'text.secondary',
                    mb: 4,
                    lineHeight: 1.8,
                  }}
                >
                  Expertise comptable, conseil fiscal et accompagnement social : libérez-vous du temps pour développer votre activité.
                </Typography>
              </FadeInSection>

              <FadeInSection delay={300} direction="up">
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                  <Button
                    component={Link}
                    href="/contact"
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      borderRadius: 50,
                    }}
                  >
                    Obtenez un devis gratuit
                  </Button>
                  <Button
                    href={`tel:${CABINET_INFO.contact.phone.replace(/\s/g, '')}`}
                    variant="outlined"
                    color="primary"
                    size="large"
                    startIcon={<PhoneIcon />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      borderRadius: 50,
                    }}
                  >
                    {CABINET_INFO.contact.phone}
                  </Button>
                </Box>
              </FadeInSection>

              {/* Logo Ordre des Experts-Comptables */}
              <FadeInSection delay={400} direction="up">
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    px: 3,
                    py: 2,
                    borderRadius: 2,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                >
                  <Image
                    src="/images/oec.png"
                    alt="Ordre des Experts-Comptables"
                    width={250}
                    height={250}
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </FadeInSection>
            </Box>
          </Grid2>

          {/* Right Images Section (Keobiz style) */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            {/* Mobile Images - Keobiz Style Layout */}
            <Box
              sx={{
                display: { xs: 'block', md: 'none' },
                position: 'relative',
                width: '100%',
                height: 420,
                mb: 2,
              }}
            >
              {/* Top Left - Chef */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '48%',
                  height: 200,
                  borderRadius: 3,
                  border: '5px solid',
                  borderColor: 'primary.main',
                  overflow: 'hidden',
                  zIndex: 2,
                  boxShadow: '0 12px 32px rgba(4, 48, 51, 0.25)',
                }}
              >
                <Image
                  src="/images/accueil2.jpg"
                  alt="Chef cuisinier"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </Box>

              {/* Bottom Left - Construction worker */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 220,
                  left: 5,
                  width: '48%',
                  height: 190,
                  borderRadius: 3,
                  border: '5px solid',
                  borderColor: 'primary.main',
                  overflow: 'hidden',
                  zIndex: 2,
                  boxShadow: '0 12px 32px rgba(4, 48, 51, 0.25)',
                }}
              >
                <Image
                  src="/images/accueil1.jpg"
                  alt="Artisan BTP"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </Box>

              {/* Right - Professional (Largest and most prominent with gold border) */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 60,
                  right: 0,
                  width: '48%',
                  height: 280,
                  borderRadius: 3,
                  border: '6px solid',
                  borderColor: 'secondary.main',
                  overflow: 'hidden',
                  zIndex: 3,
                  boxShadow: '0 16px 48px rgba(199, 179, 118, 0.4)',
                }}
              >
                <Image
                  src="/images/accueil3.jpg"
                  alt="Entrepreneur"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </Box>
            </Box>

            {/* Desktop Images - 3 separate images */}
            <Box
              sx={{
                position: 'relative',
                height: { xs: 400, md: 620 },
                display: { xs: 'none', md: 'block' },
              }}
            >
              {/* Elegant dotted connections */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '45%',
                  left: '48%',
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: 'secondary.main',
                  zIndex: 1,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -30,
                    left: -30,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    backgroundColor: 'secondary.main',
                    opacity: 0.3,
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -40,
                    right: -40,
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: 'secondary.main',
                    opacity: 0.2,
                  },
                }}
              />

              {/* Images Keobiz style - Large and impactful */}
              {/* Top left - Construction worker */}
              <FadeInSection delay={400} direction="left">
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 310,
                    height: 310,
                    borderRadius: 8,
                    border: '6px solid',
                    borderColor: 'primary.main',
                    overflow: 'hidden',
                    zIndex: 3,
                    boxShadow: '0 16px 48px rgba(4, 48, 51, 0.25)',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.03)',
                      boxShadow: '0 20px 60px rgba(4, 48, 51, 0.35)',
                      borderColor: 'secondary.main',
                    },
                  }}
                >
                  <Image
                    src="/images/accueil1.jpg"
                    alt="Artisan BTP"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </Box>
              </FadeInSection>

              {/* Bottom left - Chef/Restaurant */}
              <FadeInSection delay={500} direction="left">
                <Box
                  sx={{
                    position: 'absolute',
                    top: 340,
                    left: 15,
                    width: 290,
                    height: 290,
                    borderRadius: 8,
                    border: '6px solid',
                    borderColor: 'primary.main',
                    overflow: 'hidden',
                    zIndex: 2,
                    boxShadow: '0 16px 48px rgba(4, 48, 51, 0.25)',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.03)',
                      boxShadow: '0 20px 60px rgba(4, 48, 51, 0.35)',
                      borderColor: 'secondary.main',
                    },
                  }}
                >
                  <Image
                    src="/images/accueil2.jpg"
                    alt="Chef cuisinier"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </Box>
              </FadeInSection>

              {/* Right - Professional (Largest and prominent) */}
              <FadeInSection delay={600} direction="right">
                <Box
                  sx={{
                    position: 'absolute',
                    top: 50,
                    right: 0,
                    width: 350,
                    height: 460,
                    borderRadius: 8,
                    border: '6px solid',
                    borderColor: 'primary.main',
                    overflow: 'hidden',
                    zIndex: 4,
                    boxShadow: '0 20px 60px rgba(4, 48, 51, 0.3)',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.03)',
                      boxShadow: '0 24px 72px rgba(4, 48, 51, 0.4)',
                      borderColor: 'secondary.main',
                    },
                  }}
                >
                  <Image
                    src="/images/accueil3.jpg"
                    alt="Entrepreneur"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </Box>
              </FadeInSection>

              {/* Subtle geometric decorative elements */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  right: 340,
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  border: '3px solid',
                  borderColor: 'secondary.main',
                  opacity: 0.15,
                  zIndex: 0,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 290,
                  right: 330,
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  backgroundColor: 'secondary.main',
                  opacity: 0.08,
                  zIndex: 0,
                }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
