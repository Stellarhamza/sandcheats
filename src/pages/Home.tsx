import { lazy, Suspense, type ReactNode } from 'react';
import { HeroSection } from '../components/HeroSection';
import { SafetySection } from '../components/SafetySection';
import { ProductCopy } from '../components/ProductCopy';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { HowItWorks } from '../components/HowItWorks';

const Integrations = lazy(() => import('../components/Integrations').then((m) => ({ default: m.Integrations })));
const BlogPreview = lazy(() => import('../components/BlogPreview').then((m) => ({ default: m.BlogPreview })));
const Testimonials = lazy(() => import('../components/Testimonials').then((m) => ({ default: m.Testimonials })));
const SupportBanner = lazy(() => import('../components/SupportBanner').then((m) => ({ default: m.SupportBanner })));

function Deferred({ children }: { children: ReactNode }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SafetySection />
      <div className="cv-auto">
        <ProductCopy />
      </div>
      <div className="cv-auto">
        <FeaturesGrid />
      </div>
      <div className="cv-auto">
        <HowItWorks />
      </div>
      <Deferred>
        <div className="cv-auto">
          <Integrations />
        </div>
      </Deferred>
      <Deferred>
        <div className="cv-auto">
          <BlogPreview />
        </div>
      </Deferred>
      <Deferred>
        <div className="cv-auto">
          <Testimonials />
        </div>
      </Deferred>
      <Deferred>
        <SupportBanner />
      </Deferred>
    </>
  );
}
