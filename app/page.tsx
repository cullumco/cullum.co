import { Home } from './components/Home';
import { HowIHelp } from './components/HowIHelp';
import { Work } from './components/Work';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navigation />
      <main id="main-content">
        <Home />
        <HowIHelp />
        <Work />
      </main>
      <Footer />
    </div>
  );
}

