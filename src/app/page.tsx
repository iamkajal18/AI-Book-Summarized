"use client";

import { useRouter } from "next/navigation";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import AnimatedBookSummaries from "@/components/NavAnimatedBookSummaries";
import HeroSection from "@/components/HeroSection";

import DiscussionPanel from "@/components/DiscussionPanel"
import AllBlogs from "@/components/AllBlogs";


export default function Page() {
  const router = useRouter();


  return (
    <>
  
    <HeroSection />
   <DiscussionPanel/>
      <AnimatedBookSummaries/>
      <AllBlogs/>
     <Testimonial />
     <Faq />
   
     
   </>
  );
}
