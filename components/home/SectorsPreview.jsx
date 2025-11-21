'use client';
import { useRef } from 'react';
import { Box, Container, Card, CardContent, Typography, Button, IconButton } from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SectionTitle from '@/components/shared/SectionTitle';
import SectionDivider from '@/components/shared/SectionDivider';
import { SECTORS } from '@/lib/data/secteurs';
import SectorIcon from '@/components/sectors/SectorIcon';

export default function SectorsPreview() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.querySelector('.sector-card')?.offsetWidth || 0;
    const gap = 24; // MUI spacing(3) = 24px
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <SectionTitle
          subtitle="Nos Spécialisations"
          title="Une expertise sectorielle reconnue"
          description="Nous maîtrisons les spécificités de votre métier pour vous offrir un accompagnement sur-mesure."
        />

        <SectionDivider variant="default" spacing="small" />

        {/* Horizontal Scrollable Carousel */}
        <Box
          sx={{
            position: 'relative',
            my: 6,
          }}
        >
          {/* Navigation Arrows */}
          <IconButton
            onClick={() => handleScroll('previous')}
            sx={{
              position: 'absolute',
              left: { xs: -10, md: -20 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: 'secondary.main',
              color: 'primary.main',
              width: { xs: 40, md: 50 },
              height: { xs: 40, md: 50 },
              '&:hover': {
                backgroundColor: 'secondary.dark',
                transform: 'translateY(-50%) scale(1.1)',
              },
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
          >
            <ChevronLeftIcon sx={{ fontSize: { xs: 28, md: 36 } }} />
          </IconButton>

          <IconButton
            onClick={() => handleScroll('next')}
            sx={{
              position: 'absolute',
              right: { xs: -10, md: -20 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: 'secondary.main',
              color: 'primary.main',
              width: { xs: 40, md: 50 },
              height: { xs: 40, md: 50 },
              '&:hover': {
                backgroundColor: 'secondary.dark',
                transform: 'translateY(-50%) scale(1.1)',
              },
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
          >
            <ChevronRightIcon sx={{ fontSize: { xs: 28, md: 36 } }} />
          </IconButton>

          {/* Scrollable Container */}
          <Box
            ref={scrollContainerRef}
            sx={{
              display: 'flex',
              gap: 3,
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              pb: 2,
              // Hide scrollbar but keep functionality
              '&::-webkit-scrollbar': {
                height: 8,
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'rgba(4, 48, 51, 0.1)',
                borderRadius: 4,
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'secondary.main',
                borderRadius: 4,
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                },
              },
              // Snap scroll on mobile for better UX
              scrollSnapType: 'x mandatory',
              '@media (max-width: 900px)': {
                gap: 2,
              },
            }}
          >
            {SECTORS.map((sector, index) => (
              <Card
                key={sector.id}
                className="sector-card"
                sx={{
                  minWidth: { xs: 280, sm: 340, md: 380 },
                  maxWidth: { xs: 280, sm: 340, md: 380 },
                  flexShrink: 0,
                  background: 'linear-gradient(135deg, #043033 0%, #0a5a5f 100%)',
                  color: 'white',
                  borderRadius: 4,
                  boxShadow: '0 8px 24px rgba(4, 48, 51, 0.2)',
                  border: '4px solid',
                  borderColor: 'primary.main',
                  transition: 'all 0.3s ease',
                  scrollSnapAlign: 'start',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 32px rgba(4, 48, 51, 0.3)',
                    borderColor: 'secondary.main',
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '50%',
                      backgroundColor: 'secondary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <SectorIcon
                      iconName={sector.icon}
                      sx={{ fontSize: 40, color: 'primary.main' }}
                    />
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      fontSize: { xs: '1.3rem', md: '1.5rem' },
                    }}
                  >
                    {sector.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.95,
                      lineHeight: 1.7,
                      mb: 3,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      flexGrow: 1,
                    }}
                  >
                    {sector.description}
                  </Typography>

                  <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                    {sector.specialties.slice(0, 3).map((specialty, idx) => (
                      <Typography
                        component="li"
                        key={idx}
                        variant="body2"
                        sx={{ mb: 1, opacity: 0.9, fontSize: '0.85rem' }}
                      >
                        {specialty}
                      </Typography>
                    ))}
                  </Box>

                  <Button
                    component={Link}
                    href={`/secteurs/${sector.slug}`}
                    variant="contained"
                    color="secondary"
                    size="small"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      borderRadius: 50,
                      px: 3,
                      py: 1,
                      alignSelf: 'flex-start',
                    }}
                  >
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={Link}
            href="/secteurs"
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
            Découvrir nos expertises sectorielles
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
