
import React, { useState } from 'react';
import { ManiFantasy } from '../types';
import { generateNailArtImage } from '../services/gemini';
import { Sparkles, Loader2, Heart, Camera } from 'lucide-react';

const Generator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [activeFantasy, setActiveFantasy] = useState<ManiFantasy | null>(null);

  const handleGenerate = async (fantasy: ManiFantasy) => {
    setLoading(true);
    setActiveFantasy(fantasy);
    const result = await generateNailArtImage(fantasy);
    setGeneratedImage(result);
    setLoading(false);
  };

  return (
    <section id="generator" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-pink-600 mb-4 drop-shadow-sm flex items-center justify-center gap-3">
          <Heart className="fill-pink-500 text-pink-500" />
          Mani Fantasy Generator
          <Heart className="fill-pink-500 text-pink-500" />
        </h2>
        <p className="text-lg text-pink-700 italic">Tell us, what's your ultimate throwback mani fantasy?</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {(Object.values(ManiFantasy) as ManiFantasy[]).map((fantasy) => (
          <button
            key={fantasy}
            onClick={() => handleGenerate(fantasy)}
            disabled={loading}
            className={`p-6 rounded-3xl border-4 transition-all transform hover:scale-105 active:scale-95 flex flex-col items-center gap-4 ${
              activeFantasy === fantasy
                ? 'bg-pink-500 text-white border-pink-300 shadow-xl'
                : 'bg-white text-pink-500 border-pink-200 hover:border-pink-400 hover:bg-pink-50 shadow-md'
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
              {fantasy === ManiFantasy.GIMME_GLITZ && <Sparkles size={32} className="text-pink-500" />}
              {fantasy === ManiFantasy.POP_PRINCESS && <Camera size={32} className="text-pink-500" />}
              {fantasy === ManiFantasy.HOT_FIRE && <span className="text-3xl">🔥</span>}
            </div>
            <span className="font-bold text-xl uppercase tracking-wider">{fantasy}</span>
          </button>
        ))}
      </div>

      <div className="relative min-h-[400px] bg-white rounded-[40px] border-8 border-pink-200 p-8 flex items-center justify-center overflow-hidden shadow-2xl">
        {loading ? (
          <div className="flex flex-col items-center gap-6 text-pink-500">
            <Loader2 className="animate-spin" size={64} />
            <p className="text-2xl font-black italic animate-pulse">Serving up Y2K realness...</p>
            <p className="text-sm opacity-70">Adding rhinestones one by one...</p>
          </div>
        ) : generatedImage ? (
          <div className="w-full h-full flex flex-col items-center">
            <div className="relative group cursor-zoom-in">
                <img 
                    src={generatedImage} 
                    alt="Your Y2K Nail Art" 
                    className="max-w-full h-auto rounded-2xl border-4 border-pink-100 shadow-lg group-hover:rotate-1 transition-transform" 
                />
                <div className="absolute top-4 right-4 bg-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                    Freshly Slayed
                </div>
            </div>
            <div className="mt-8 flex gap-4">
                <button 
                  onClick={() => window.open(generatedImage)}
                  className="bg-fuchsia-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-fuchsia-600 transition-colors"
                >
                  Save This Look
                </button>
                <button 
                  onClick={() => handleGenerate(activeFantasy!)}
                  className="bg-white text-pink-500 border-2 border-pink-500 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-pink-50 transition-colors"
                >
                  Try Again
                </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-pink-300 max-w-md">
            <div className="mb-4 flex justify-center">
                <div className="w-24 h-24 rounded-full border-4 border-dashed border-pink-200 flex items-center justify-center">
                   <Sparkles size={40} className="opacity-50" />
                </div>
            </div>
            <p className="text-xl font-bold italic">Pick a fantasy above to manifest your dream manicure!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Generator;
