import { lazy, Suspense, type ReactNode } from 'react';
import { HeroSection } from '../components/HeroSection';

const SafetySection = lazy(() => import('../components/SafetySection').then((m) => ({ default: m.SafetySection })));
const PageQualityContent = lazy(() =>
  import('../components/PageQualityContent').then((m) => ({ default: m.PageQualityContent }))
);
const ProductCopy = lazy(() => import('../components/ProductCopy').then((m) => ({ default: m.ProductCopy })));
const FeaturesGrid = lazy(() => import('../components/FeaturesGrid').then((m) => ({ default: m.FeaturesGrid })));
const HowItWorks = lazy(() => import('../components/HowItWorks').then((m) => ({ default: m.HowItWorks })));
const InternalLinks = lazy(() => import('../components/InternalLinks').then((m) => ({ default: m.InternalLinks })));
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
      <Deferred>
        <SafetySection />
      </Deferred>
      <Deferred>
        <PageQualityContent />
      </Deferred>
      <Deferred>
        <ProductCopy />
      </Deferred>
      <Deferred>
        <FeaturesGrid />
      </Deferred>
      <Deferred>
        <HowItWorks />
      </Deferred>
      <Deferred>
        <Integrations />
      </Deferred>
      <Deferred>
        <BlogPreview />
      </Deferred>
      <Deferred>
        <InternalLinks />
      </Deferred>
      <Deferred>
        <Testimonials />
      </Deferred>
      <Deferred>
        <SupportBanner />
      </Deferred>
    </>
  );
}
