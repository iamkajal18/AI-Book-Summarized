"use client";

import { useRouter } from "next/navigation";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import AnimatedBookSummaries from "@/components/NavAnimatedBookSummaries";
import HeroSection from "@/components/HeroSection";
import Books from "@/components/Books"
import DiscussionPanel from "@/components/DiscussionPanel";



export default function Page() {
  const router = useRouter();


  return (
    <>
  
    <HeroSection />
   <DiscussionPanel/>
      <AnimatedBookSummaries/>
      <Books/>
     <Testimonial />
     <Faq />
   
     
   </>
  );
}
