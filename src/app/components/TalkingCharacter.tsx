// components/TalkingCharacter.tsx
"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "@/public/animations/Character Singing _ Speak _ Talking Man.json";

const TalkingCharacter = () => {
  return (
    <div className="w-64 h-64">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default TalkingCharacter;
