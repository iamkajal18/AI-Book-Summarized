"use client";

import { motion } from 'framer-motion';

interface CharacterProps {
  name: string;
  emotion: string;
  text: string;
  isSpeaking: boolean;
  audioUrl?: string;
  videoId?: string;
}

export default function Character({ name, emotion, text, isSpeaking, audioUrl, videoId }: CharacterProps) {
  const characterImages = {
    happy: '/character-happy.png',
    sad: '/character-sad.png',
    excited: '/character-excited.png',
    // Add more emotions as needed
  };

  return (
    <motion.div
      className={`character ${isSpeaking ? 'speaking' : ''}`}
      animate={{
        scale: isSpeaking ? 1.05 : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="character-image">
        {videoId ? (
          <video src={`https://cdn.d-id.com/videos/${videoId}/video.mp4`} autoPlay loop />
        ) : (
          <img src={characterImages[emotion as keyof typeof characterImages] || '/character-default.png'} alt={name} />
        )}
      </div>
      <div className="character-info">
        <h3>{name}</h3>
        <p className="character-text">{text}</p>
        {audioUrl && (
          <audio controls src={`data:audio/mp3;base64,${audioUrl}`}>
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </motion.div>
  );
}