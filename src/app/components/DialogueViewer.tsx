// app/components/DialogueViewer.tsx
"use client";

import { useState, useEffect } from "react";
import { Play, Pause, Volume2, User, Loader2 } from "lucide-react";

interface DialogueLine {
  character: string;
  text: string;
  emotion: string;
  videoId?: string;
  avatarUrl?: string;
}

interface DialogueViewerProps {
  dialogue: DialogueLine[];
  characters: Record<string, { traits: string; avatarUrl: string }>;
}

interface VideoStatus {
  [key: string]: 'created' | 'processing' | 'done' | 'error';
}

export default function DialogueViewer({ dialogue, characters }: DialogueViewerProps) {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  const [videoStatuses, setVideoStatuses] = useState<VideoStatus>({});
  const [videoUrls, setVideoUrls] = useState<Record<string, string>>({});

  const getCharacterColor = (character: string) => {
    const colors = {
      "Professor Wise": "from-blue-500 to-indigo-600",
      "Curious Charlie": "from-green-500 to-emerald-600", 
      "Emotional Emma": "from-pink-500 to-rose-600"
    };
    return colors[character as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  // Poll video status for D-ID videos
  useEffect(() => {
    const pollVideoStatus = async (videoId: string) => {
      try {
        const response = await fetch(`/api/video-status/${videoId}`);
        if (response.ok) {
          const data = await response.json();
          setVideoStatuses(prev => ({
            ...prev,
            [videoId]: data.status
          }));

          if (data.status === 'done' && data.result_url) {
            setVideoUrls(prev => ({
              ...prev,
              [videoId]: data.result_url
            }));
          } else if (data.status === 'processing') {
            // Continue polling after 3 seconds
            setTimeout(() => pollVideoStatus(videoId), 3000);
          }
        }
      } catch (error) {
        console.error('Error polling video status:', error);
        setVideoStatuses(prev => ({
          ...prev,
          [videoId]: 'error'
        }));
      }
    };

    // Start polling for all video IDs
    dialogue.forEach(line => {
      if (line.videoId && !line.videoId.startsWith('placeholder_')) {
        setVideoStatuses(prev => ({
          ...prev,
          [line.videoId!]: 'processing'
        }));
        pollVideoStatus(line.videoId);
      }
    });
  }, [dialogue]);

  const handleVideoPlay = (index: number) => {
    if (currentPlaying === index) {
      setCurrentPlaying(null);
    } else {
      setCurrentPlaying(index);
    }
  };

  const getVideoStatus = (videoId?: string) => {
    if (!videoId || videoId.startsWith('placeholder_')) return 'error';
    return videoStatuses[videoId] || 'processing';
  };

  const renderVideoPlayer = (line: DialogueLine, index: number) => {
    const status = getVideoStatus(line.videoId);
    const videoUrl = line.videoId ? videoUrls[line.videoId] : null;

    if (status === 'done' && videoUrl) {
      return (
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <video
              src={videoUrl}
              controls
              className="w-full h-full object-cover"
              autoPlay
              onEnded={() => setCurrentPlaying(null)}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );
    } else if (status === 'processing') {
      return (
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Loader2 className="w-8 h-8 text-indigo-600 mx-auto mb-2 animate-spin" />
              <p className="text-sm text-gray-600 font-medium">Generating Video...</p>
              <p className="text-xs text-gray-400 mt-1">
                This may take a few minutes
              </p>
            </div>
          </div>
        </div>
      );
    } else if (status === 'error') {
      return (
        <div className="bg-red-50 rounded-xl p-4 border border-red-200">
          <div className="aspect-video bg-red-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Volume2 className="w-8 h-8 text-red-400 mx-auto mb-2" />
              <p className="text-sm text-red-600 font-medium">Video Generation Failed</p>
              <p className="text-xs text-red-400 mt-1">
                Please try again later
              </p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-8 h-8 text-gray-400 mx-auto mb-2 animate-spin" />
            <p className="text-sm text-gray-500">Preparing Video...</p>
          </div>
        </div>
      </div>
    );
  };

  if (!dialogue || dialogue.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-gray-500 text-lg">No dialogue available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <p className="text-gray-600">
          Watch as our AI characters discuss the key themes and insights from the book
        </p>
      </div>

      <div className="space-y-6">
        {dialogue.map((line, index) => (
          <div key={index} className="flex gap-4 items-start">
            {/* Character Avatar */}
            <div className="flex-shrink-0">
              <div className={`w-12 h-12 bg-gradient-to-br ${getCharacterColor(line.character)} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                {line.character.charAt(0)}
              </div>
            </div>

            {/* Message Content */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-gray-800">{line.character}</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {line.emotion}
                    </span>
                    {line.videoId && (
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        getVideoStatus(line.videoId) === 'done' ? 'bg-green-100 text-green-700' :
                        getVideoStatus(line.videoId) === 'processing' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {getVideoStatus(line.videoId) === 'done' ? 'Ready' :
                         getVideoStatus(line.videoId) === 'processing' ? 'Processing' :
                         'Failed'}
                      </span>
                    )}
                  </div>
                  
                  {line.videoId && getVideoStatus(line.videoId) === 'done' && (
                    <button
                      onClick={() => handleVideoPlay(index)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors text-sm font-medium"
                    >
                      {currentPlaying === index ? (
                        <>
                          <Pause className="w-4 h-4" />
                          Hide
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          Play Video
                        </>
                      )}
                    </button>
                  )}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  {line.text}
                </p>

                {/* Video Player */}
                {line.videoId && currentPlaying === index && (
                  renderVideoPlayer(line, index)
                )}

                {/* Character Info */}
                <div className="mt-3 text-xs text-gray-500">
                  <span className="font-medium">{line.character}:</span> {characters[line.character]?.traits}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
        <p className="text-sm text-indigo-700">
          <strong>{dialogue.length}</strong> character interactions generated • 
          <strong> {Object.values(videoStatuses).filter(status => status === 'done').length}</strong> videos ready • 
          <strong> {Object.values(videoStatuses).filter(status => status === 'processing').length}</strong> videos processing
        </p>
      </div>
    </div>
  );
}