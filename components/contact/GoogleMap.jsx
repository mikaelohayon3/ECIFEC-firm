'use client';
import { Box } from '@mui/material';

export default function GoogleMap() {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 300, md: 450 },
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.668708430373!2d2.368790875969056!3d48.97883049222385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6698226638677%3A0xa8d32b852502a83b!2s3%20Bd%20Albert%20Camus%2C%2095200%20Sarcelles%2C%20France!5e0!3m2!1sen!2sil!4v1762985396365!5m2!1sen!2sil"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation Cabinet ECIFEC - 3 Bd Albert Camus, Sarcelles"
      />
    </Box>
  );
}
