import { Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Taikai from './pages/Taikai';
import Social from './pages/Social';
import Merch from './pages/Merch';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Navigate to="/events/taikai" replace />} />
          <Route path="/events/taikai" element={<Taikai />} />
          <Route path="/events/social" element={<Social />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
