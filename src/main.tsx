import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

function Bootstrap() {
  useEffect(() => {
    // Remove static SEO shell after React mounts so the page has a single H1
    // (hero) and auditors that execute JS still see PageQualityContent + links.
    document.getElementById('seo-landmarks')?.remove();
    document.documentElement.classList.add('app-ready');
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Bootstrap />);
