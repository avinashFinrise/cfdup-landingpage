
import AboutHero from '@/components/propTrading/AboutHero';
import FaqSection from '@/components/propTrading/FAQSection';
import HowToGetFundex from '@/components/propTrading/HowToGetFundex';
import Pricing from '@/components/propTrading/Pricing';
import TradingGuidelines from '@/components/propTrading/TradingGuidelines';
import TradingIntroSection from '@/components/propTrading/TradingIntroSection';

function page() {
  return (
    <>
        <AboutHero />
        <TradingIntroSection/>
        <Pricing/>
        <TradingGuidelines/>
        <HowToGetFundex/>
        <FaqSection/>
        {/* <HowItWorks/>
        <WhyChooseUs/> */}
    </>
  )
}

export default page