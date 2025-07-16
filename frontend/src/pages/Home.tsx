import { FC } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedEvents from '../components/FeaturedEvents';
import ShopAndTips from '../components/ShopAndTips';
import AceBanner from '../components/AceBanner';
import Footer from '../components/Footer';
import NewsletterCard from '../components/NewsletterCard';

const Home: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-letx-white dark:bg-letx-green-dark transition-colors duration-300">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedEvents />
        <div className="py-16 bg-letx-neon dark:bg-letx-green-dark transition-colors duration-300">
          <div className="container mx-auto px-4">
            <ShopAndTips />
          </div>
        </div>
        {/* ACE Banner e Newsletter lado a lado */}
        <div className="bg-white dark:bg-letx-green-dark transition-colors duration-300">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1">
              <AceBanner />
            </div>
            <div className="flex-1">
              <NewsletterCard />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
