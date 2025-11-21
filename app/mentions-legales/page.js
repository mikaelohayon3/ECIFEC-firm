'use client';
import { Box, Container, Typography, Divider } from '@mui/material';
import SectionTitle from '@/components/shared/SectionTitle';
import PageHead from '@/components/shared/PageHead';
import { CABINET_INFO } from '@/lib/data/navigation';

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHead
        title="Mentions Légales - Cabinet ECIFEC"
        description="Mentions légales du Cabinet ECIFEC, expert-comptable à Sarcelles. Informations légales, éditeur du site, hébergement."
      />
      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 10 },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle
            subtitle="Informations légales"
            title="Mentions légales"
            description="Informations légales relatives au site internet du Cabinet ECIFEC."
            light
          />
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
        <Container maxWidth="md">
          <Box sx={{ '& > *:not(:last-child)': { mb: 4 } }}>
            {/* Identification */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                1. Identification de l'éditeur
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Le site internet ecifec.fr est édité par :
              </Typography>
              <Box component="ul" sx={{ pl: 3, mt: 2 }}>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  <strong>Raison sociale :</strong> {CABINET_INFO.name}
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  <strong>Adresse :</strong> {CABINET_INFO.address.street}, {CABINET_INFO.address.postal} {CABINET_INFO.address.city}
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  <strong>Email :</strong> {CABINET_INFO.contact.email}
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  <strong>Téléphone :</strong> {CABINET_INFO.contact.phone}
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  <strong>Téléphone secondaire :</strong> {CABINET_INFO.contact.phone2}
                </Typography>
              </Box>
            </Box>

            <Divider />

            {/* Inscription Ordre */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                2. Inscription à l'Ordre des Experts-Comptables
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Cabinet d'expertise comptable inscrit au tableau de l'ordre du conseil régional de Paris Île-de-France.
              </Typography>
            </Box>

            <Divider />

            {/* Hébergement */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                3. Hébergement du site
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Le site ecifec.fr est hébergé par :
              </Typography>
              <Box component="ul" sx={{ pl: 3, mt: 2 }}>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  <strong>Hébergeur :</strong> Vercel Inc.
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
                </Typography>
                <Typography component="li" variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  <strong>Site web :</strong> https://vercel.com
                </Typography>
              </Box>
            </Box>

            <Divider />

            {/* Propriété intellectuelle */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                4. Propriété intellectuelle
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété
                exclusive du Cabinet ECIFEC ou de ses partenaires. Toute reproduction, représentation,
                modification, publication, adaptation de tout ou partie des éléments du site, quel que
                soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Toute exploitation non autorisée du site ou de l'un des éléments qu'il contient sera
                considérée comme constitutive d'une contrefaçon et poursuivie conformément aux
                dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </Typography>
            </Box>

            <Divider />

            {/* Responsabilité */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                5. Limitation de responsabilité
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
                Le Cabinet ECIFEC s'efforce d'assurer l'exactitude et la mise à jour des informations
                diffusées sur ce site. Toutefois, il ne peut garantir l'exactitude, la précision ou
                l'exhaustivité des informations mises à disposition sur ce site.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Le Cabinet ECIFEC ne pourra être tenu responsable des dommages directs ou indirects
                résultant de l'utilisation de ce site ou des informations qu'il contient.
              </Typography>
            </Box>

            <Divider />

            {/* Liens hypertextes */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                6. Liens hypertextes
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Le site ecifec.fr peut contenir des liens hypertextes vers d'autres sites. Le Cabinet
                ECIFEC n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à
                leur contenu.
              </Typography>
            </Box>

            <Divider />

            {/* Droit applicable */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                7. Droit applicable
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Les présentes mentions légales sont régies par le droit français. En cas de litige et
                à défaut d'accord amiable, le litige sera porté devant les tribunaux français
                conformément aux règles de compétence en vigueur.
              </Typography>
            </Box>
          </Box>

          {/* Last Update */}
          <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid', borderColor: 'divider' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
