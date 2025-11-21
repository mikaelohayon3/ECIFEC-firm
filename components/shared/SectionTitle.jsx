'use client';
import { Box, Typography } from '@mui/material';

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
  noMargin = false,
  showAccent = true,
}) {
  return (
    <Box
      sx={{
        textAlign: align,
        mb: noMargin ? 0 : 6,
        maxWidth: align === 'center' ? '800px' : '100%',
        mx: align === 'center' ? 'auto' : 0,
        position: 'relative',
      }}
    >
      {showAccent && (
        <Box
          sx={{
            width: 60,
            height: 4,
            backgroundColor: light ? 'secondary.light' : 'secondary.main',
            borderRadius: 2,
            mb: 2,
            mx: align === 'center' ? 'auto' : 0,
          }}
        />
      )}
      {subtitle && (
        <Typography
          variant="overline"
          sx={{
            color: light ? 'secondary.light' : 'primary.main',
            fontWeight: 700,
            fontSize: '0.9rem',
            letterSpacing: 1.5,
            textTransform: 'uppercase',
            display: 'block',
            mb: 1,
          }}
        >
          {subtitle}
        </Typography>
      )}
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: light ? 'white' : 'text.primary',
        }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          variant="body1"
          sx={{
            color: light ? 'rgba(255,255,255,0.9)' : 'text.secondary',
            fontSize: '1.1rem',
            lineHeight: 1.8,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}
