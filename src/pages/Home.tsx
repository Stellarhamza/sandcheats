import { lazy, Suspense, type ReactNode } from 'react';
import { HeroSection } from '../components/HeroSection';
import { SafetySection } from '../components/SafetySection';
import { PageQualityContent } from '../components/PageQualityContent';
import { ProductCopy } from '../components/ProductCopy';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { HowItWorks } from '../components/HowItWorks';
import { InternalLinks } from '../components/InternalLinks';

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
      <PageQualityContent />
      <ProductCopy />
      <FeaturesGrid />
      <HowItWorks />
      <Deferred>
        <Integrations />
      </Deferred>
      <Deferred>
        <BlogPreview />
      </Deferred>
      <InternalLinks />
      <Deferred>
        <Testimonials />
      </Deferred>
      <Deferred>
        <SupportBanner />
      </Deferred>
    </>
  );
}
