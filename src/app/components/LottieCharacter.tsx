"use client";
import Lottie from "lottie-react";
import animationData from "../../../public/animations/Character Singing _ Speak _ Talking Man.json";

export default function LottieCharacter() {
  return (
    <div className="w-48 h-48 mx-auto">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}
