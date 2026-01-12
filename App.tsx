
import React, { useState, useEffect } from 'react';
import { Heart, Stars, Zap, Instagram, Phone, Calendar, User, Mail, FileText, ChevronRight, CheckCircle } from 'lucide-react';
import SparkleEffect from './components/SparkleEffect';
import Generator from './components/Generator';
import { BookingState } from './types';

const App: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [booking, setBooking] = useState<BookingState>({
    step: 'form',
    customerName: '',
    email: '',
    date: '',
    description: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const confirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!booking.customerName || !booking.email || !booking.date) return;
    setBooking(prev => ({ ...prev, step: 'confirmed' }));
  };

  const resetBooking = () => {
    setBooking({
      step: 'form',
      customerName: '',
      email: '',
      date: '',
      description: ''
    });
  };

  return (
    <div className="min-h-screen selection:bg-pink-300 selection:text-white">
      <SparkleEffect />

      {/* Marquee Header */}
      <div className="bg-fuchsia-600 text-white py-2 overflow-hidden sticky top-0 z-50 shadow-md">
        <div className="marquee font-bold uppercase tracking-widest text-xs">
          💖✨ Welcome to NailsDone Las Vegas – where your manicure gets a major glow-up! ✨💖 &nbsp;&nbsp;&nbsp; 💅 serving baby pink realness in the 702 💅 &nbsp;&nbsp;&nbsp; 🦋 that's hot! 🦋 &nbsp;&nbsp;&nbsp; 💖✨ Welcome to NailsDone Las Vegas – where your manicure gets a major glow-up! ✨💖 &nbsp;&nbsp;&nbsp; 💅 serving baby pink realness in the 702 💅 &nbsp;&nbsp;&nbsp; 🦋 that's hot! 🦋
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative py-20 px-4 overflow-hidden bg-white text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="grid grid-cols-10 h-full">
              {Array.from({length: 50}).map((_, i) => (
                <div key={i} className="flex justify-center items-center">
                  <Heart size={20} className="text-pink-500" />
                </div>
              ))}
           </div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text y2k-gradient mb-4 drop-shadow-xl tracking-tighter italic">
            NailsDone
          </h1>
          <h2 className="text-2xl md:text-3xl font-black text-pink-500 uppercase tracking-widest mb-4">Las Vegas Edition</h2>
          <p className="text-xl md:text-2xl text-pink-700 font-bold mb-8 max-w-2xl mx-auto">
            Hey, boo! You just landed in the glitziest Y2K dream in Las Vegas! ✨💖
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#generator" className="y2k-gradient text-white px-10 py-5 rounded-full font-black text-lg shadow-xl hover:scale-105 transition-transform uppercase tracking-widest flex items-center gap-2">
              <Stars /> Start Slaying
            </a>
            <a href="#booking" className="bg-white text-pink-500 border-4 border-pink-500 px-10 py-5 rounded-full font-black text-lg shadow-xl hover:bg-pink-50 transition-colors uppercase tracking-widest">
              Book a Slot
            </a>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-pink-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-pink-600 mb-12 text-center uppercase tracking-tighter italic">💅 What's the Hype? 💅</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="text-fuchsia-500" />}
              title="Vegas Glitz"
              description="Frosted tips, French manis with neon twists, and airbrushed masterpieces that make the Strip shine."
            />
            <FeatureCard 
              icon={<Heart className="text-pink-500 fill-pink-500" />}
              title="702 Style"
              description="If it's pink and sparkly, we're doing it! Bubblegum, hot pink, and showgirl glitters are our middle name."
            />
            <FeatureCard 
              icon={<Stars className="text-yellow-400" />}
              title="Total Y2K"
              description="Think flip phones, low-rise jeans, and absolute nail extravagance with chunky glitter right in Nevada."
            />
          </div>
        </div>
      </section>

      {/* Main AI Component */}
      <Generator />

      {/* Booking Section */}
      <section id="booking" className="py-20 px-4 bg-white border-t-8 border-dashed border-pink-200">
        <div className="max-w-4xl mx-auto bg-pink-50 p-8 md:p-16 rounded-[60px] border-4 border-pink-300 shadow-inner relative">
          <div className="absolute -top-10 -right-5 transform rotate-12 bg-yellow-300 text-pink-700 font-black px-6 py-2 rounded-xl shadow-lg border-2 border-pink-500 text-sm">
            VEGAS SLAY
          </div>
          
          <div className="text-center mb-10">
            <h3 className="text-4xl font-black text-pink-600 mb-2 uppercase tracking-tighter italic">Schedule Your Glow-Up</h3>
            <p className="text-lg text-pink-700 font-bold italic">Tell us your mani fantasy and we'll handle the rest! ✨</p>
          </div>

          <div className="min-h-[300px]">
            {booking.step === 'form' ? (
              <form onSubmit={confirmBooking} className="animate-in fade-in slide-in-from-bottom duration-500">
                <div className="bg-white p-8 md:p-12 rounded-[40px] border-4 border-pink-200 shadow-xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-pink-600 font-black uppercase text-xs mb-2 flex items-center gap-2">
                        <User size={14} /> Bestie's Name
                      </label>
                      <input 
                        required
                        type="text" 
                        value={booking.customerName}
                        onChange={e => setBooking(prev => ({...prev, customerName: e.target.value}))}
                        placeholder="Who's getting slayed?" 
                        className="w-full bg-pink-50 border-2 border-pink-100 p-4 rounded-2xl outline-none focus:border-pink-300 font-bold text-pink-600 placeholder:text-pink-300"
                      />
                    </div>
                    <div>
                      <label className="block text-pink-600 font-black uppercase text-xs mb-2 flex items-center gap-2">
                        <Mail size={14} /> Email
                      </label>
                      <input 
                        required
                        type="email" 
                        value={booking.email}
                        onChange={e => setBooking(prev => ({...prev, email: e.target.value}))}
                        placeholder="For your glitzy confirmation" 
                        className="w-full bg-pink-50 border-2 border-pink-100 p-4 rounded-2xl outline-none focus:border-pink-300 font-bold text-pink-600 placeholder:text-pink-300"
                      />
                    </div>
                    <div>
                      <label className="block text-pink-600 font-black uppercase text-xs mb-2 flex items-center gap-2">
                        <Calendar size={14} /> Slay Day
                      </label>
                      <input 
                        required
                        type="date" 
                        value={booking.date}
                        onChange={e => setBooking(prev => ({...prev, date: e.target.value}))}
                        className="w-full bg-pink-50 border-2 border-pink-100 p-4 rounded-2xl outline-none focus:border-pink-300 font-bold text-pink-600"
                      />
                    </div>
                    <div>
                      <label className="block text-pink-600 font-black uppercase text-xs mb-2 flex items-center gap-2">
                        <FileText size={14} /> Description
                      </label>
                      <input 
                        type="text" 
                        value={booking.description}
                        onChange={e => setBooking(prev => ({...prev, description: e.target.value}))}
                        placeholder="Short & sweet (e.g. pink glitter flames)" 
                        className="w-full bg-pink-50 border-2 border-pink-100 p-4 rounded-2xl outline-none focus:border-pink-300 font-bold text-pink-600 placeholder:text-pink-300"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full mt-8 y2k-gradient text-white py-5 rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                  >
                    Confirm My Slot <ChevronRight />
                  </button>
                </div>
              </form>
            ) : (
              <div className="animate-in zoom-in fade-in duration-500 text-center py-10">
                <div className="bg-white p-10 rounded-[60px] border-8 border-pink-300 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none y2k-gradient"></div>
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center border-4 border-green-200">
                            <CheckCircle size={48} />
                        </div>
                    </div>
                    <h4 className="text-4xl font-black text-pink-600 uppercase tracking-tighter mb-4 italic">Totally Booked!</h4>
                    <p className="text-pink-700 font-bold text-lg mb-6 leading-relaxed">
                        OMG {booking.customerName}, your request for <br/>
                        <span className="text-fuchsia-600 text-2xl underline decoration-wavy decoration-pink-300">
                          {booking.description || "The Ultimate Mani"}
                        </span> is locked in!
                    </p>
                    <div className="bg-pink-50 p-4 rounded-2xl border-2 border-dashed border-pink-200 inline-block mb-8">
                        <p className="text-pink-400 uppercase font-black text-xs">Your Slay Day:</p>
                        <p className="text-pink-600 font-black text-xl">
                          {new Date(booking.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                    <div>
                        <button 
                            onClick={resetBooking}
                            className="bg-white border-4 border-pink-500 text-pink-500 px-8 py-3 rounded-full font-black uppercase tracking-widest text-sm hover:bg-pink-50 transition-colors"
                        >
                            Book Another Bestie
                        </button>
                    </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
             <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=100&h=100&fit=crop" className="w-12 h-12 rounded-full border-2 border-pink-300 object-cover shadow-sm" />
             <img src="https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?w=100&h=100&fit=crop" className="w-12 h-12 rounded-full border-2 border-pink-300 object-cover shadow-sm" />
             <img src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=100&h=100&fit=crop" className="w-12 h-12 rounded-full border-2 border-pink-300 object-cover shadow-sm" />
             <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=100&h=100&fit=crop" className="w-12 h-12 rounded-full border-2 border-pink-300 object-cover shadow-sm" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-fuchsia-600 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="hover:scale-125 transition-transform"><Instagram /></a>
            <a href="#" className="hover:scale-125 transition-transform"><Phone /></a>
            <a href="#" className="hover:scale-125 transition-transform"><Stars /></a>
          </div>
          <p className="text-2xl font-black italic mb-4 uppercase tracking-widest">NailsDone LV</p>
          <p className="opacity-70 text-sm uppercase tracking-widest">&copy; 2026 NailsDone Las Vegas — Be Cool, Be Pink, Be Phat.</p>
          <div className="mt-6 flex justify-center gap-4 text-[10px] uppercase opacity-50 tracking-tighter">
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Terms of Slay</span>
            <span>|</span>
            <span>Cookie Settings</span>
          </div>
        </div>
      </footer>

      {/* Floating Notification */}
      {showNotification && (
        <div className="fixed bottom-8 right-8 z-[100] bg-white border-4 border-pink-500 p-6 rounded-3xl shadow-2xl max-w-xs animate-in slide-in-from-right duration-500">
           <button onClick={() => setShowNotification(false)} className="absolute top-2 right-2 text-pink-300 hover:text-pink-500">&times;</button>
           <div className="flex gap-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex-shrink-0 flex items-center justify-center">
                <Heart className="text-pink-500 fill-pink-500" size={20} />
              </div>
              <div>
                <p className="font-black text-pink-600 uppercase text-xs mb-1">Incoming Message</p>
                <p className="text-sm text-pink-800 leading-tight">"Omg, Vegas looks so good on you! Don't forget to tag us!"</p>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-[40px] border-4 border-pink-200 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-pink-400 group">
    <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-black text-pink-600 mb-4 italic uppercase tracking-tighter">{title}</h3>
    <p className="text-pink-700 leading-relaxed font-medium">{description}</p>
  </div>
);

export default App;
