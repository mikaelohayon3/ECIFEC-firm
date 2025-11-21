'use client';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = scrollHeight > 0 ? (window.pageYOffset / scrollHeight) * 100 : 0;
      setProgress(scrolled);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '8px',
        height: '100vh',
        backgroundColor: 'rgba(4, 48, 51, 0.1)',
        zIndex: 9999,
        display: { xs: 'none', md: 'block' },
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: `${progress}%`,
          background: 'linear-gradient(180deg, #043033, #C7B376)',
          transition: 'height 0.15s ease-out',
          boxShadow: '0 0 10px rgba(199, 179, 118, 0.5)',
        }}
      />
    </Box>
  );
}
