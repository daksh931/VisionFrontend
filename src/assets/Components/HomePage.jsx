import MarqueeCourses from "./MarqueeCourses";
import SimpleSlider from "./SimpleSlider";
import TestimonialSection from "./TestimonialSection";
import WeOffer from "./WeOffer";
import InquirySection from "./InquirySection";
import MarqueeDemo from "./MagicUI/marqueeDemo";
import ScrollingTestimonials from "./ScrollTransition";
import { GridPattern } from "../../../components/ui/grid-pattern";
import { cn } from "../../../lib/utils";

export default function HomePage() {
  return (
   <div>

      {/* <SimpleSlider/> */}
      <WeOffer/>
      {/* <MarqueeCourses/> */}
      <ScrollingTestimonials />
      <InquirySection/>
      <TestimonialSection/>
      <MarqueeDemo />
    </div>
  );
}
