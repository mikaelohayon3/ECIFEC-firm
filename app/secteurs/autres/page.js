import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BusinessIcon from '@mui/icons-material/Business';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import SectionTitle from '@/components/shared/SectionTitle';
import CTASection from '@/components/shared/CTASection';
import FadeInSection from '@/components/shared/FadeInSection';

export const metadata = {
  title: 'Autres Secteurs d\'Activité | Cabinet ECIFEC',
  description:
    'Expertise comptable pour l\'Immobilier, l\'Industrie & Production, l\'Agriculture et la Culture. Accompagnement personnalisé adapté aux spécificités de votre secteur.',
};

export default function AutresSecteurs() {
  const otherSectors = [
    {
      icon: <BusinessIcon sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: 'Immobilier & Promotion',
      description:
        'Le secteur immobilier présente des particularités comptables et fiscales complexes. Nous maîtrisons les règles spécifiques de TVA immobilière, les régimes d\'amortissement adaptés, les dispositifs de défiscalisation (Pinel, Malraux, Monuments Historiques), ainsi que la comptabilité des marchands de biens et promoteurs.',
      specialties: [
        'TVA immobilière et régimes spécifiques',
        'Comptabilité des SCI et SCPI',
        'Dispositifs de défiscalisation',
        'Marchands de biens et promoteurs',
        'Location meublée (LMNP/LMP)',
        'Gestion des programmes immobiliers',
      ],
    },
    {
      icon: <PrecisionManufacturingIcon sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: 'Industrie & Production',
      description:
        'Le secteur industriel présente des enjeux comptables et fiscaux complexes. Nous maîtrisons la comptabilité industrielle, la gestion de production, les stocks, les immobilisations, les amortissements et l\'optimisation des coûts de revient. Nous accompagnons les entreprises manufacturières dans leur gestion comptable et fiscale.',
      specialties: [
        'Comptabilité industrielle et analytique',
        'Gestion des immobilisations et amortissements',
        'Calcul des coûts de revient',
        'Optimisation fiscale (crédits d\'impôt R&D)',
        'Suivi de la production et des stocks',
        'Valorisation des stocks (FIFO, LIFO, CUMP)',
      ],
    },
    {
      icon: <AgricultureIcon sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: 'Agriculture & Agroalimentaire',
      description:
        'L\'agriculture et l\'agroalimentaire présentent des règles comptables et fiscales très spécifiques. Nous maîtrisons la comptabilité agricole, les régimes de TVA agricole, les relations avec la MSA, les aides PAC, ainsi que l\'évaluation des stocks biologiques et des productions en cours.',
      specialties: [
        'Comptabilité agricole et règles spécifiques',
        'TVA agricole et remboursements forfaitaires',
        'Gestion MSA et protection sociale agricole',
        'Aides PAC et subventions agricoles',
        'Évaluation des stocks biologiques',
        'Transformation et commercialisation',
      ],
    },
    {
      icon: <TheaterComedyIcon sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: 'Culture & Médias',
      description:
        'Les industries culturelles et médiatiques bénéficient de dispositifs fiscaux particuliers et font face à des enjeux spécifiques. Nous accompagnons les professionnels dans la gestion des droits d\'auteur, les crédits d\'impôt création, le statut des intermittents et les spécificités fiscales de la création artistique.',
      specialties: [
        'Droits d\'auteur et propriété intellectuelle',
        'Crédits d\'impôt pour la création',
        'Gestion des intermittents du spectacle',
        'Dispositifs de soutien à la création',
        'Production audiovisuelle et cinéma',
        'Édition et industries musicales',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #043033 0%, #065a5e 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background:
              'radial-gradient(circle at top right, rgba(199, 179, 118, 0.2) 0%, transparent 60%)',
          },
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <FadeInSection delay={0} direction="right">
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textAlign: 'center',
              }}
            >
              Autres Secteurs d'Activité
            </Typography>
          </FadeInSection>
          <FadeInSection delay={100} direction="right">
            <Typography
              variant="h5"
              sx={{
                opacity: 0.95,
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                textAlign: 'center',
                maxWidth: '900px',
                mx: 'auto',
              }}
            >
              Une expertise diversifiée pour accompagner votre activité dans l'Immobilier,
              l'Industrie & Production, l'Agriculture et la Culture
            </Typography>
          </FadeInSection>
        </Container>
      </Box>

      {/* Introduction */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <FadeInSection delay={0} direction="up">
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.2rem' },
              lineHeight: 1.8,
              color: 'text.secondary',
              textAlign: 'center',
              maxWidth: '1000px',
              mx: 'auto',
              mb: 6,
            }}
          >
            Au-delà de nos secteurs d'expertise principaux, nous avons développé au fil des années
            des compétences solides dans d'autres domaines d'activité. Notre expérience diversifiée
            et notre capacité d'adaptation nous permettent de vous accompagner efficacement,
            quelle que soit la complexité de votre secteur.
          </Typography>
        </FadeInSection>
      </Container>

      {/* Secteurs détaillés */}
      {otherSectors.map((sector, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: index % 2 === 0 ? 'background.default' : '#EDF5F2',
            py: { xs: 6, md: 10 },
          }}
        >
          <Container maxWidth="xl">
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={5}>
                <FadeInSection delay={0} direction={index % 2 === 0 ? 'right' : 'left'}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    {sector.icon}
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 3,
                      textAlign: 'center',
                      fontSize: { xs: '1.8rem', md: '2.2rem' },
                    }}
                  >
                    {sector.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 1.8,
                      color: 'text.secondary',
                      textAlign: 'center',
                    }}
                  >
                    {sector.description}
                  </Typography>
                </FadeInSection>
              </Grid>
              <Grid item xs={12} md={7}>
                <FadeInSection delay={100} direction={index % 2 === 0 ? 'left' : 'right'}>
                  <Card
                    elevation={3}
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'primary.main',
                          mb: 3,
                        }}
                      >
                        Nos expertises
                      </Typography>
                      <Grid container spacing={2}>
                        {sector.specialties.map((specialty, idx) => (
                          <Grid item xs={12} sm={6} key={idx}>
                            <Box sx={{ display: 'flex', alignItems: 'start', gap: 1.5 }}>
                              <CheckCircleIcon
                                sx={{
                                  color: 'secondary.main',
                                  fontSize: 24,
                                  mt: 0.5,
                                  flexShrink: 0,
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  fontSize: '0.95rem',
                                  lineHeight: 1.6,
                                  color: 'text.secondary',
                                }}
                              >
                                {specialty}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </Card>
                </FadeInSection>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ))}

      {/* Conclusion */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <FadeInSection delay={0} direction="up">
          <Card
            elevation={0}
            sx={{
              background: 'linear-gradient(135deg, rgba(4, 48, 51, 0.05) 0%, rgba(199, 179, 118, 0.1) 100%)',
              borderRadius: 3,
              p: { xs: 4, md: 6 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 3,
                textAlign: 'center',
              }}
            >
              Un accompagnement sur mesure
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                lineHeight: 1.8,
                color: 'text.secondary',
                textAlign: 'center',
                maxWidth: '900px',
                mx: 'auto',
              }}
            >
              Quel que soit votre secteur d'activité, notre équipe d'experts-comptables s'engage
              à comprendre les spécificités de votre métier pour vous offrir un accompagnement
              personnalisé. Nous prenons le temps d'étudier les règles comptables, fiscales et
              sociales propres à votre domaine afin de vous garantir une gestion optimale et
              conforme à la réglementation.
            </Typography>
          </Card>
        </FadeInSection>
      </Container>

      {/* CTA */}
      <CTASection />
    </>
  );
}
