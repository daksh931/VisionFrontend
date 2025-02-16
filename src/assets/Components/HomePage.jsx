import MarqueeCourses from "./MarqueeCourses";
import SimpleSlider from "./SimpleSlider";
import TestimonialSection from "./TestimonialSection";
import WeOffer from "./WeOffer";
import InquirySection from "./InquirySection";
import MarqueeDemo from "./MagicUI/marqueeDemo";
import ScrollingTestimonials from "./ScrollTransition";

export default function HomePage() {
  return (
    <div>

      <SimpleSlider/>
      {/* <MarqueeCourses/> */}
      <ScrollingTestimonials />
      <WeOffer/>
      <InquirySection/>
      <TestimonialSection/>
      <MarqueeDemo />
    </div>
  );
}
