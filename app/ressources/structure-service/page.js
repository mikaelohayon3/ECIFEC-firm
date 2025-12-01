'use client';
import { Box, Container, Typography, Grid, Card, CardContent, Paper } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FolderIcon from '@mui/icons-material/Folder';
import SectionTitle from '@/components/shared/SectionTitle';
import FadeInSection from '@/components/shared/FadeInSection';


export default function StructureServicePage() {
  const departments = [
    {
      name: 'Juridique',
      items: ['Statuts', 'KBIS', 'Bail', 'AGO/AGE', 'Modification statutaire', 'Cession'],
    },
    {
      name: 'Fiscal',
      items: ['TVA', 'IS', 'CVAE', 'TA', 'FC', 'CICE', 'RCM'],
    },
    {
      name: 'Social',
      items: ['URSSAF', 'Retraite', 'Mutuelle', 'Prévoyance'],
    },
    {
      name: 'Comptabilité',
      items: ['Achats', 'Ventes', 'Banques', 'Frais généraux', 'Caisse'],
    },
    {
      name: 'Personnel',
      items: [
        'DPAE',
        'Fiches de paie',
        'Contrat de travail',
        'DUE',
        'Licenciement',
        'Démission',
        'Rupture conventionnelle',
        'Solde de tout compte',
      ],
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #043033 0%, #0a5a5f 100%)',
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
          <FadeInSection delay={0} direction="up">
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                  mb: 3,
                }}
              >
                Structure de Service
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  opacity: 0.95,
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                Découvrez l'organisation complète et structurée de votre dossier au sein de notre cabinet
              </Typography>
            </Box>
          </FadeInSection>
        </Container>
      </Box>

      {/* Main Box: VOTRE DOSSIER */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <FadeInSection delay={100} direction="up">
          <Paper
            elevation={8}
            sx={{
              background: 'linear-gradient(135deg, #043033 0%, #065a5e 100%)',
              color: 'white',
              py: { xs: 4, md: 6 },
              px: { xs: 4, md: 8 },
              borderRadius: 4,
              textAlign: 'center',
              mb: { xs: 6, md: 10 },
              border: '4px solid',
              borderColor: 'secondary.main',
              position: 'relative',
              '&::after': {
                content: '"↓"',
                position: 'absolute',
                bottom: { xs: '-40px', md: '-50px' },
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: { xs: '3rem', md: '4rem' },
                color: 'secondary.main',
                fontWeight: 'bold',
              },
            }}
          >
            <FolderIcon sx={{ fontSize: { xs: 60, md: 80 }, mb: 2, color: 'secondary.main' }} />
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: { xs: 1, md: 3 },
                fontSize: { xs: '1.8rem', md: '2.5rem' },
              }}
            >
              Votre Dossier
            </Typography>
          </Paper>
        </FadeInSection>

        {/* 5 Départements */}
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {departments.map((dept, index) => (
            <Grid item xs={12} key={dept.name}>
              <FadeInSection delay={index * 100 + 200} direction="up">
                <Card
                  elevation={4}
                  sx={{
                    overflow: 'visible',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    border: '2px solid transparent',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      boxShadow: '0 12px 40px rgba(199, 179, 118, 0.3)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
                      {/* Department Name */}
                      <Grid item xs={12} md={3}>
                        <Paper
                          elevation={3}
                          sx={{
                            background: 'linear-gradient(135deg, #043033 0%, #0a5a5f 100%)',
                            color: 'white',
                            py: { xs: 2.5, md: 3 },
                            px: { xs: 3, md: 4 },
                            borderRadius: 2,
                            textAlign: 'center',
                            border: '3px solid',
                            borderColor: 'secondary.main',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #065a5e 0%, #0a6d72 100%)',
                              transform: 'scale(1.05)',
                            },
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              fontSize: { xs: '1.1rem', md: '1.3rem' },
                            }}
                          >
                            {dept.name}
                          </Typography>
                        </Paper>
                      </Grid>

                      {/* Arrow */}
                      <Grid
                        item
                        xs={12}
                        md={1}
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <ArrowForwardIcon
                          sx={{
                            fontSize: { xs: 40, md: 60 },
                            color: 'secondary.main',
                            transform: { xs: 'rotate(90deg)', md: 'rotate(0deg)' },
                          }}
                        />
                      </Grid>

                      {/* Sub-items */}
                      <Grid item xs={12} md={8}>
                        <Grid container spacing={2}>
                          {dept.items.map((item, idx) => (
                            <Grid item xs={12} sm={6} md={4} key={idx}>
                              <Paper
                                elevation={2}
                                sx={{
                                  py: 1.5,
                                  px: 2.5,
                                  borderRadius: 2,
                                  border: '2px solid',
                                  borderColor: 'secondary.main',
                                  textAlign: 'center',
                                  backgroundColor: 'white',
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    backgroundColor: 'primary.main',
                                    color: 'white',
                                    transform: 'translateX(8px)',
                                    boxShadow: '0 4px 12px rgba(199, 179, 118, 0.4)',
                                  },
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '0.85rem', md: '0.95rem' },
                                  }}
                                >
                                  {item}
                                </Typography>
                              </Paper>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </FadeInSection>
            </Grid>
          ))}
        </Grid>

        {/* Information complémentaire */}
        <Box sx={{ mt: { xs: 6, md: 10 } }}>
          <FadeInSection delay={800} direction="up">
            <Paper
              elevation={3}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(4, 48, 51, 0.02) 0%, rgba(199, 179, 118, 0.05) 100%)',
                border: '2px solid',
                borderColor: 'divider',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 2,
                  textAlign: 'center',
                }}
              >
                Organisation optimale de votre dossier
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  textAlign: 'center',
                  maxWidth: '900px',
                  mx: 'auto',
                }}
              >
                Chaque dossier client est structuré selon ces 5 pôles d'expertise pour garantir une gestion
                complète et rigoureuse. Cette organisation vous assure un suivi optimal de tous les aspects
                juridiques, fiscaux, sociaux, comptables et RH de votre entreprise.
              </Typography>
            </Paper>
          </FadeInSection>
        </Box>
      </Container>
    </Box>
  );
}
