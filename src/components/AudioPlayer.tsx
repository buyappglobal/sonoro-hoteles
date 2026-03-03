import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, SkipBack, SkipForward } from 'lucide-react';
import { motion } from 'framer-motion';

const tracks = [
  {
    title: "Sierra Mist",
    description: "Frescura matinal en la sierra de Aracena.",
    duration: "3:45",
    // Placeholder audio URL - using a nature sound example
    url: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=forest-lullaby-110624.mp3" 
  },
  {
    title: "Atlantic Chill",
    description: "Atardecer en las playas de Doñana.",
    duration: "4:20",
    url: "https://cdn.pixabay.com/download/audio/2022/02/07/audio_1821030e36.mp3?filename=ocean-waves-112906.mp3"
  },
  {
    title: "Mining Echoes",
    description: "La profundidad histórica de Riotinto.",
    duration: "3:15",
    url: "https://cdn.pixabay.com/download/audio/2021/09/06/audio_9c05c0a06c.mp3?filename=ambient-piano-11673.mp3"
  },
  {
    title: "Luz Salada",
    description: "La brisa infinita de la Costa.",
    duration: "3:55",
    url: "https://cdn.pixabay.com/download/audio/2022/03/09/audio_c8c8a73467.mp3?filename=waves-hitting-the-rocks-11993.mp3"
  }
];

export default function AudioPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Audio play failed", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTrackChange = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(true);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Cover Art / Visualizer Placeholder */}
        <div className="w-full md:w-64 h-64 bg-neutral-900 rounded-xl overflow-hidden relative group shadow-2xl shrink-0">
           <img 
            src={`https://picsum.photos/seed/${tracks[currentTrack].title}/500/500`} 
            alt="Album Art" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md">
              <Volume2 className="w-5 h-5 text-white/70" />
            </div>
          </div>
        </div>

        {/* Controls & Info */}
        <div className="flex-1 w-full space-y-6">
          <div className="space-y-2">
            <motion.h3 
              key={tracks[currentTrack].title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-serif font-light text-white"
            >
              {tracks[currentTrack].title}
            </motion.h3>
            <motion.p 
              key={tracks[currentTrack].description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-neutral-400 font-light text-sm tracking-wide"
            >
              {tracks[currentTrack].description}
            </motion.p>
          </div>

          {/* Progress Bar (Visual only for demo) */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gold-500"
              initial={{ width: "0%" }}
              animate={{ width: isPlaying ? "100%" : "0%" }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => handleTrackChange((currentTrack - 1 + tracks.length) % tracks.length)}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <SkipBack className="w-6 h-6" />
              </button>
              
              <button 
                onClick={handlePlayPause}
                className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-white/10"
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
              </button>

              <button 
                onClick={() => handleTrackChange((currentTrack + 1) % tracks.length)}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <SkipForward className="w-6 h-6" />
              </button>
            </div>
            
            <div className="text-xs font-mono text-neutral-500 tracking-widest">
              {tracks[currentTrack].duration}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tracks.map((track, index) => (
          <button
            key={index}
            onClick={() => handleTrackChange(index)}
            className={`text-left p-4 rounded-lg transition-all duration-300 border ${
              currentTrack === index 
                ? 'bg-white/10 border-gold-500/50' 
                : 'bg-transparent border-transparent hover:bg-white/5'
            }`}
          >
            <div className={`font-serif text-lg ${currentTrack === index ? 'text-gold-400' : 'text-neutral-300'}`}>
              {track.title}
            </div>
          </button>
        ))}
      </div>

      <audio 
        ref={audioRef}
        src={tracks[currentTrack].url}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}
