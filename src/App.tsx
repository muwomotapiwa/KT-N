import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { AISolutioning } from './pages/AISolutioning';
import { WebsiteDevelopment } from './pages/services/WebsiteDevelopment';
import { MobileAppDevelopment } from './pages/services/MobileAppDevelopment';
import { CloudServices } from './pages/services/CloudServices';
import { CloudCRM } from './pages/services/CloudCRM';
import { Cybersecurity } from './pages/services/Cybersecurity';
import { ITConsulting } from './pages/services/ITConsulting';
import { DataAnalytics } from './pages/services/DataAnalytics';
import { GenericService } from './pages/services/GenericService';
import { Consultation } from './pages/Consultation';
import { Contact } from './pages/Contact';
import { Portfolio } from './pages/Portfolio';
import { About } from './pages/About';
import { QuoteCalculator } from './pages/QuoteCalculator';
import { ProjectStart } from './pages/ProjectStart';
import { Assessment } from './pages/Assessment';
import { ThankYou } from './pages/ThankYou';
import SupportPortal from './pages/SupportPortal';
import AdminPortal from './pages/AdminPortal';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

// Scroll to hash on navigation
function ScrollToHash() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

export function App() {
  const detectedBase =
    typeof window !== 'undefined' && window.location.pathname.startsWith('/KT-N')
      ? '/KT-N'
      : '/';

  return (
    <BrowserRouter basename={detectedBase}>
      <ScrollToHash />
      <Routes>
        {/* Support Portal - outside Layout */}
        <Route path="/support" element={<SupportPortal />} />
        {/* Admin Portal - outside Layout for full-width workspace */}
        <Route path="/admin" element={<AdminPortal />} />
        
        {/* All other routes with Layout */}
        <Route path="/*" element={
          <Layout>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/ai-solutioning" element={<AISolutioning />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              
              {/* Lead Gen Pages */}
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/project-start" element={<ProjectStart />} />
              <Route path="/assessment" element={<Assessment />} />
              
              {/* Service Pages */}
              <Route path="/services/website-development" element={<WebsiteDevelopment />} />
              <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
              <Route path="/services/cloud-services" element={<CloudServices />} />
              <Route path="/services/cloud-services/crm" element={<CloudCRM />} />
              <Route path="/services/cloud-services/:subpage" element={<CloudSubpage />} />
              <Route path="/services/cybersecurity" element={<Cybersecurity />} />
              <Route path="/services/it-consulting" element={<ITConsulting />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/:serviceId" element={<GenericService />} />
              
              {/* Quote Calculator */}
              <Route path="/quote/:country" element={<QuoteCalculator />} />
              
              {/* Catch all - 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

// Cloud Subpage Component
function CloudSubpage() {
  const location = useLocation();
  const subpage = location.pathname.split('/').pop();
  
  const subpageData: Record<string, { title: string; description: string }> = {
    migration: { title: 'Cloud Migration', description: 'Seamlessly migrate your infrastructure to the cloud with minimal disruption.' },
    security: { title: 'Cloud Security', description: 'Protect your cloud environment with comprehensive security measures.' },
    optimization: { title: 'Cloud Optimization', description: 'Maximize efficiency and reduce costs with intelligent resource management.' },
    hybrid: { title: 'Hybrid Cloud', description: 'Bridge on-premises and cloud infrastructure for ultimate flexibility.' },
    storage: { title: 'Cloud Storage', description: 'Scalable, secure storage solutions for all your data needs.' },
    crm: { title: 'Cloud CRM', description: 'Transform customer relationships with cloud-based CRM solutions.' },
  };

  const data = subpageData[subpage || ''];

  if (!data) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mb-6">{data.title}</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">{data.description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/consultation" className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all">
              Get Consultation
            </Link>
            <Link to="/services/cloud-services" className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all">
              Back to Cloud Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// 404 Page
function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-navy via-navy-light to-navy">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-white mb-8">Page not found</p>
        <Link
          to="/"
          className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-navy font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
