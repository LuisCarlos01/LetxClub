import { FC } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedEvents from '../components/FeaturedEvents';
import ShopAndTips from '../components/ShopAndTips';
import AceBanner from '../components/AceBanner';
import Footer from '../components/Footer';

const Home: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-letx-white dark:bg-letx-green-dark transition-colors duration-300">
      <Header />
      <main>
        <HeroSection />
        <FeaturedEvents />
        <ShopAndTips />
        <AceBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
