'use client';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '@/components/shared/SectionTitle';
import CTASection from '@/components/shared/CTASection';
import FadeInSection from '@/components/shared/FadeInSection';
import PageHead from '@/components/shared/PageHead';
import { SECTORS } from '@/lib/data/secteurs';
import SectorIcon from '@/components/sectors/SectorIcon';

export default function SecteursPage() {
  // Mapping des images des secteurs
  const sectorImages = {
    btp: '/images/secteur-artisanat_btp.jpg',
    commerciaux: '/images/secteur-commerce_distribution.jpg',
    transport: '/images/secteur-transport_logistique.jpg',
    liberales: '/images/secteur-professions_liberales.jpg',
    'services-entreprises': '/images/secteur-service_entreprise.jpg',
    'services-particuliers': '/images/secteur-service_particulier.jpg',
  };

  return (
    <>
      <PageHead
        title="Nos Secteurs d'Activité - Cabinet ECIFEC | Expertise sectorielle"
        description="Expertise comptable spécialisée par secteur : BTP & Artisanat, Commerce, Transport & Logistique, Professions libérales, Services B2B et B2C. Accompagnement adapté à votre métier."
      />
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
            subtitle="Nos Spécialisations"
            title="Une expertise sectorielle reconnue"
            description="Nous maîtrisons les spécificités comptables, fiscales et réglementaires de votre secteur d'activité pour vous offrir un accompagnement sur-mesure et pertinent."
            light
            noMargin
          />
        </Container>
      </Box>

      {/* Introduction */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: 'background.paper',
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(199, 179, 118, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(4, 48, 51, 0.03) 0%, transparent 50%)
          `,
        }}
      >
        <Container maxWidth="lg">
          <FadeInSection delay={0} direction="up">
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                fontSize: '1.15rem',
                color: 'text.secondary',
                lineHeight: 1.8,
              }}
            >
              Chaque secteur d'activité a ses particularités. Chez ECIFEC, nous avons
              développé une expertise approfondie dans trois domaines clés pour mieux
              répondre à vos enjeux spécifiques.
            </Typography>
          </FadeInSection>
        </Container>
      </Box>

      {/* Sectors Details */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {SECTORS.map((sector, index) => {
              const isEven = index % 2 === 0;

              return (
                <Grid item xs={12} key={sector.id}>
                  <FadeInSection delay={index * 150} direction={isEven ? 'left' : 'right'}>
                    <Card
                    sx={{
                      overflow: 'hidden',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Grid container>
                      {/* Icon Section */}
                      <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                          background: sectorImages[sector.slug]
                            ? 'none'
                            : 'linear-gradient(135deg, #043033 0%, #0a5a5f 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          py: { xs: 6, md: 0 },
                          order: { xs: 1, md: isEven ? 1 : 2 },
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        {sectorImages[sector.slug] ? (
                          <Image
                            src={sectorImages[sector.slug]}
                            alt={sector.title}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        ) : (
                          <Box
                            sx={{
                              textAlign: 'center',
                              color: 'white',
                            }}
                          >
                            <Box
                              sx={{
                                width: 120,
                                height: 120,
                                borderRadius: '50%',
                                backgroundColor: 'secondary.main',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mx: 'auto',
                                mb: 3,
                              }}
                            >
                              <SectorIcon iconName={sector.icon} sx={{ fontSize: 64, color: 'primary.main' }} />
                            </Box>
                            <Typography variant="h5" sx={{ fontWeight: 700 }}>
                              {sector.title}
                            </Typography>
                          </Box>
                        )}
                      </Grid>

                      {/* Content Section */}
                      <Grid
                        item
                        xs={12}
                        md={8}
                        sx={{
                          order: { xs: 2, md: isEven ? 2 : 1 },
                        }}
                      >
                        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                          {sectorImages[sector.slug] && (
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                mb: 3,
                              }}
                            >
                              <SectorIcon
                                iconName={sector.icon}
                                sx={{ fontSize: 40, color: 'primary.main' }}
                              />
                              <Typography
                                variant="h4"
                                sx={{
                                  fontWeight: 700,
                                  color: 'primary.main',
                                  fontSize: { xs: '1.5rem', md: '2rem' },
                                }}
                              >
                                {sector.title}
                              </Typography>
                            </Box>
                          )}
                          <Typography
                            variant="body1"
                            sx={{
                              mb: 3,
                              color: 'text.secondary',
                              fontSize: '1.05rem',
                              lineHeight: 1.8,
                            }}
                          >
                            {sector.description}
                          </Typography>

                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              mb: 2,
                              color: 'primary.main',
                            }}
                          >
                            Notre expertise :
                          </Typography>

                          <List>
                            {sector.specialties.slice(0, 3).map((specialty, idx) => (
                              <ListItem key={idx} sx={{ py: 0.5, px: 0 }}>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                  <CheckCircleIcon sx={{ color: 'secondary.main' }} />
                                </ListItemIcon>
                                <ListItemText
                                  primary={specialty}
                                  sx={{
                                    '& .MuiListItemText-primary': {
                                      fontSize: '0.95rem',
                                      color: 'text.primary',
                                    },
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>

                          <Box sx={{ mt: 3 }}>
                            <Button
                              component={Link}
                              href={`/secteurs/${sector.slug}`}
                              variant="contained"
                              color="secondary"
                              endIcon={<ArrowForwardIcon />}
                              sx={{
                                borderRadius: 50,
                                px: 4,
                                py: 1.5,
                              }}
                            >
                              En savoir plus
                            </Button>
                          </Box>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Card>
                  </FadeInSection>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Additional Info */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <SectionTitle
            title="Votre secteur n'apparaît pas ici ?"
            description="Bien que nous ayons une expertise reconnue dans ces secteurs clés, nous accompagnons également des entreprises dans de nombreux autres domaines d'activité."
          />

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', fontSize: '1.1rem', mb: 3 }}
            >
              Agriculture, associations, restauration, immobilier... Nous savons
              nous adapter aux spécificités de chaque secteur pour vous offrir un accompagnement
              sur-mesure.
            </Typography>

            <Button
              component={Link}
              href="/secteurs/autres"
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
              En savoir plus
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <CTASection
        title="Votre secteur nécessite une expertise spécifique ?"
        subtitle="Parlons-en ensemble et découvrez comment nous pouvons vous accompagner."
      />
    </>
  );
}
