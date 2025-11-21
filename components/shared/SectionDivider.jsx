'use client';
import { Box } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

export default function SectionDivider({ variant = 'default', spacing = 'medium' }) {
  const spacingMap = {
    small: { py: { xs: 2, md: 3 } },
    medium: { py: { xs: 3, md: 4 } },
    large: { py: { xs: 4, md: 6 } },
  };

  if (variant === 'dots') {
    return (
      <Box sx={{ ...spacingMap[spacing], display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            gap: 1.5,
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 1,
              background: 'linear-gradient(to right, transparent, rgba(4, 48, 51, 0.3), transparent)',
            }}
          />
          <CircleIcon sx={{ fontSize: 8, color: 'rgba(4, 48, 51, 0.4)' }} />
          <CircleIcon sx={{ fontSize: 10, color: 'rgba(4, 48, 51, 0.5)' }} />
          <CircleIcon sx={{ fontSize: 12, color: 'rgba(4, 48, 51, 0.6)' }} />
          <CircleIcon sx={{ fontSize: 10, color: 'rgba(4, 48, 51, 0.5)' }} />
          <CircleIcon sx={{ fontSize: 8, color: 'rgba(4, 48, 51, 0.4)' }} />
          <Box
            sx={{
              width: 60,
              height: 1,
              background: 'linear-gradient(to left, transparent, rgba(4, 48, 51, 0.3), transparent)',
            }}
          />
        </Box>
      </Box>
    );
  }

  if (variant === 'diamond') {
    return (
      <Box sx={{ ...spacingMap[spacing], display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 1,
              background: 'linear-gradient(to right, transparent, rgba(4, 48, 51, 0.3), rgba(4, 48, 51, 0.4))',
            }}
          />
          <Box
            sx={{
              width: 10,
              height: 10,
              backgroundColor: 'rgba(199, 179, 118, 0.3)',
              transform: 'rotate(45deg)',
              border: '1px solid rgba(4, 48, 51, 0.3)',
            }}
          />
          <Box
            sx={{
              width: 80,
              height: 1,
              background: 'linear-gradient(to left, transparent, rgba(4, 48, 51, 0.3), rgba(4, 48, 51, 0.4))',
            }}
          />
        </Box>
      </Box>
    );
  }

  // Variant 'default' - simple gradient line
  return (
    <Box sx={spacingMap[spacing]}>
      <Box
        sx={{
          maxWidth: '200px',
          mx: 'auto',
          height: 1,
          background: 'linear-gradient(to right, transparent, rgba(4, 48, 51, 0.3), transparent)',
        }}
      />
    </Box>
  );
}
