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
  Paper,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { notFound } from 'next/navigation';
import SectionTitle from '@/components/shared/SectionTitle';
import CTASection from '@/components/shared/CTASection';
import FadeInSection from '@/components/shared/FadeInSection';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import { SERVICES } from '@/lib/data/services';
import ServiceIcon from '@/components/services/ServiceIcon';
import { generateServiceMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) {
    return {
      title: 'Service non trouvé - Cabinet ECIFEC',
      description: 'Le service demandé n\'existe pas.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return generateServiceMetadata(service);
}

export default async function ServicePage({ params }) {
  const { slug } = await params;

  // Find the service based on id (using id as slug)
  const service = SERVICES.find((s) => s.id === slug);

  // If service doesn't exist, show 404
  if (!service) {
    notFound();
  }

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
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <FadeInSection delay={0} direction="right">
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <ServiceIcon
                    iconName={service.icon}
                    sx={{
                      fontSize: { xs: 50, md: 70 },
                      mr: 2,
                      color: 'secondary.main',
                    }}
                  />
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '2rem', md: '3rem' },
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>
              </FadeInSection>
              <FadeInSection delay={100} direction="right">
                <Typography
                  variant="h5"
                  sx={{
                    opacity: 0.95,
                    lineHeight: 1.6,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                  }}
                >
                  {service.description}
                </Typography>
              </FadeInSection>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Details Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <SectionTitle
          title="Nos prestations"
          subtitle={`Découvrez notre offre complète en ${service.title}`}
        />

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {service.details.map((detail, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FadeInSection delay={index * 100} direction="up">
                <Card
                  elevation={2}
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'start', gap: 1.5 }}>
                      <CheckCircleIcon
                        sx={{
                          color: 'secondary.main',
                          fontSize: 28,
                          mt: 0.5,
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'primary.main',
                          lineHeight: 1.4,
                        }}
                      >
                        {detail}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </FadeInSection>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Statuts Section - Only for création d'entreprise */}
      {service.id === 'creation' && (
        <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f8f9fa' }}>
          <Container maxWidth="xl">
            <SectionTitle
              title="Quel statut juridique choisir ?"
              subtitle="Trouvez la forme juridique adaptée à votre projet"
            />

            {/* 3-Column Comparison Table */}
            <FadeInSection delay={0} direction="up">
              <Grid container spacing={3} sx={{ mt: 2 }}>
                {/* Auto-entrepreneur Column */}
                <Grid item xs={12} md={4}>
                  <Card
                    elevation={3}
                    sx={{
                      height: '100%',
                      borderTop: '6px solid',
                      borderColor: 'secondary.main',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: 'primary.main',
                          mb: 3,
                          fontSize: { xs: '1.4rem', md: '1.8rem' },
                          textAlign: 'center',
                        }}
                      >
                        Auto-entrepreneur
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'success.main',
                          mb: 2,
                          fontSize: '1rem',
                        }}
                      >
                        Avantages
                      </Typography>
                      <List dense>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Simplicité administrative"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Pas de capital requis"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Charges sur CA uniquement"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Franchise de TVA"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                      </List>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'error.main',
                          mb: 2,
                          mt: 3,
                          fontSize: '1rem',
                        }}
                      >
                        Limites
                      </Typography>
                      <List dense>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'error.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Plafonds de CA restrictifs"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'error.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Protection sociale réduite"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'error.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Pas de déduction des charges"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'error.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Responsabilité personnelle"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </Grid>

                {/* EURL/SARL Column */}
                <Grid item xs={12} md={4}>
                  <Card
                    elevation={3}
                    sx={{
                      height: '100%',
                      borderTop: '6px solid',
                      borderColor: 'secondary.main',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: 'primary.main',
                          mb: 3,
                          fontSize: { xs: '1.4rem', md: '1.8rem' },
                          textAlign: 'center',
                        }}
                      >
                        EURL / SARL
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'success.main',
                          mb: 2,
                          fontSize: '1rem',
                        }}
                      >
                        Avantages
                      </Typography>
                      <List dense>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Responsabilité limitée"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Protection sociale complète"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Déduction des charges réelles"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Crédibilité auprès des tiers"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                      </List>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'error.main',
                          mb: 2,
                          mt: 3,
                          fontSize: '1rem',
                        }}
                      >
                        Limites
                      </Typography>
                      <List dense>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'error.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Formalisme de gestion"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'error.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Obligations comptables lourdes"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'error.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Cotisations minimales"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'error.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Frais de constitution"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </Grid>

                {/* SASU/SAS Column */}
                <Grid item xs={12} md={4}>
                  <Card
                    elevation={3}
                    sx={{
                      height: '100%',
                      borderTop: '6px solid',
                      borderColor: 'secondary.main',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: 'primary.main',
                          mb: 3,
                          fontSize: { xs: '1.4rem', md: '1.8rem' },
                          textAlign: 'center',
                        }}
                      >
                        SASU / SAS
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'success.main',
                          mb: 2,
                          fontSize: '1rem',
                        }}
                      >
                        Avantages
                      </Typography>
                      <List dense>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Flexibilité statutaire"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Régime général (assimilé salarié)"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Facilite levée de fonds"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Image moderne"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                      </List>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'error.main',
                          mb: 2,
                          mt: 3,
                          fontSize: '1rem',
                        }}
                      >
                        Limites
                      </Typography>
                      <List dense>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'error.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Charges sociales élevées (~80%)"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'error.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Complexité juridique"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'error.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Frais de gestion plus importants"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                        <ListItem sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: 'error.main', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Accompagnement professionnel requis"
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </FadeInSection>

            {/* Conclusion */}
            <FadeInSection delay={100} direction="up">
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  mt: 4,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(4, 48, 51, 0.05) 0%, rgba(199, 179, 118, 0.1) 100%)',
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
                  Notre accompagnement sur-mesure
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.8,
                    color: 'text.secondary',
                    textAlign: 'center',
                    maxWidth: '900px',
                    mx: 'auto',
                  }}
                >
                  Le choix du statut juridique dépend de nombreux critères : activité, perspectives de développement,
                  situation personnelle, objectifs fiscaux et sociaux. Nos experts analysent votre projet pour vous
                  recommander la forme juridique la plus adaptée.
                </Typography>
              </Paper>
            </FadeInSection>
          </Container>
        </Box>
      )}

      {/* Benefits Section */}
      <Box sx={{ backgroundColor: '#EDF5F2', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <SectionTitle
            title="Pourquoi choisir ECIFEC ?"
            subtitle="Les avantages de notre accompagnement"
          />

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <FadeInSection delay={0} direction="up">
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: 'white',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 2,
                    }}
                  >
                    Expertise reconnue
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.8,
                    }}
                  >
                    Notre équipe d'experts-comptables diplômés vous apporte une expertise de haut niveau dans tous les domaines de la gestion d'entreprise.
                  </Typography>
                </Paper>
              </FadeInSection>
            </Grid>

            <Grid item xs={12} md={4}>
              <FadeInSection delay={100} direction="up">
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: 'white',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 2,
                    }}
                  >
                    Accompagnement personnalisé
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.8,
                    }}
                  >
                    Chaque entreprise est unique. Nous adaptons nos services à vos besoins spécifiques pour un accompagnement sur-mesure.
                  </Typography>
                </Paper>
              </FadeInSection>
            </Grid>

            <Grid item xs={12} md={4}>
              <FadeInSection delay={200} direction="up">
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: 'white',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 2,
                    }}
                  >
                    Réactivité et proximité
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.8,
                    }}
                  >
                    Basés à Sarcelles, nous sommes à votre écoute et disponibles pour répondre rapidement à vos questions et besoins.
                  </Typography>
                </Paper>
              </FadeInSection>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Service Process */}
      <ServiceProcess process={service.process} serviceTitle={service.title} />

      {/* Service FAQ */}
      <ServiceFAQ faq={service.faq} serviceTitle={service.title} />

      {/* CTA */}
      <CTASection />
    </>
  );
}

// Generate static params for all services
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }));
}
