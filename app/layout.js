'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/shared/ScrollProgress';
import theme from '@/lib/theme';
import '@/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>Cabinet ECIFEC - Expert-Comptable</title>
        <meta
          name="description"
          content="Cabinet d'expertise comptable ECIFEC à Sarcelles. Accompagnement personnalisé pour les entreprises du BTP, professions libérales et restauration."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ScrollProgress />
            <Header />
            <main style={{ minHeight: 'calc(100vh - 400px)' }}>
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
