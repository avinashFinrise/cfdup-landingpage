
import About from '@/components/about';
import AboutHero from '@/components/AboutHero';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';

function page() {
  return (
    <>
        <AboutHero />
        <About/>
        <HowItWorks/>
        <WhyChooseUs/>
    </>
  )
}

export default page