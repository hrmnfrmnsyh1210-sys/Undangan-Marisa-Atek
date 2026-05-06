import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Calendar, MapPin, Gift, Copy, Check, Clock } from 'lucide-react';

const HornbillCorner = ({ className = "", style = {} }: { className?: string, style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M 0 100 C 0 50 30 20 80 10 C 90 8 100 5 100 0 C 90 15 75 25 60 30 C 40 35 25 50 20 70 C 40 50 60 45 80 50 C 95 55 100 65 90 80 C 80 65 60 65 40 75 C 50 85 60 100 55 100 L 0 100 Z" fill="currentColor"/>
     <path d="M 15 100 C 15 70 35 50 60 45 C 50 60 45 75 45 100 Z" fill="rgba(255,255,255,0.2)"/>
     <circle cx="65" cy="20" r="3" fill="#fff" opacity="0.8"/>
     <path d="M 60 100 C 70 80 85 75 100 80 C 90 90 80 95 75 100 Z" fill="currentColor"/>
     <path d="M 80 40 C 90 30 100 30 100 30 C 95 35 90 45 85 55 C 80 50 75 45 80 40 Z" fill="currentColor"/>
  </svg>
);

const ChineseCloud = ({ className = "", style = {} }: { className?: string, style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 100 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M 25 50 C 15 50 10 40 15 30 C 15 20 25 15 35 20 C 45 5 65 5 75 20 C 85 15 95 20 95 30 C 100 40 90 50 80 50 L 25 50 Z" />
    <path d="M 30 55 C 20 55 15 45 20 35 C 20 25 30 20 40 25 C 50 10 70 10 80 25 C 90 20 100 25 100 35 C 105 45 95 55 85 55 L 30 55 Z" opacity="0.3" />
  </svg>
);

const ChineseLantern = ({ className = "", style = {} }: { className?: string, style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 100 140" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <line x1="50" y1="0" x2="50" y2="15" stroke="currentColor" strokeWidth="2" opacity="0.6" />
    <rect x="35" y="15" width="30" height="6" fill="#D4AF37" rx="2" />
    <ellipse cx="50" cy="65" rx="40" ry="45" fill="currentColor" opacity="0.9" />
    <path d="M 50 20 C 25 20 15 65 50 110" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.6" />
    <path d="M 50 20 C 75 20 85 65 50 110" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.6" />
    <line x1="50" y1="20" x2="50" y2="110" stroke="#D4AF37" strokeWidth="1.5" opacity="0.6" />
    <rect x="35" y="108" width="30" height="6" fill="#D4AF37" rx="2" />
    <line x1="50" y1="114" x2="50" y2="125" stroke="currentColor" strokeWidth="2" />
    <path d="M 45 125 L 55 125 L 52 140 L 48 140 Z" fill="currentColor" opacity="0.9" />
  </svg>
);

const DayakShield = ({ className = "", style = {} }: { className?: string, style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 100 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M 50 5 L 85 25 Q 75 100 70 175 L 50 195 L 30 175 Q 25 100 15 25 Z" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M 50 15 L 75 30 Q 65 100 60 165 L 50 180 L 40 165 Q 35 100 25 30 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    <line x1="50" y1="5" x2="50" y2="195" stroke="currentColor" strokeWidth="2" opacity="0.6" />
    <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.8" />
    <circle cx="50" cy="100" r="12" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.8" />
    <circle cx="50" cy="150" r="8" fill="currentColor" opacity="0.8" />
  </svg>
);

const DayakBorder = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="100%" height="40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <defs>
      <pattern id="dayak-border" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M20,5 L35,20 L20,35 L5,20 Z" fill="currentColor" />
        <circle cx="20" cy="20" r="3" fill="#29080A" />
        <circle cx="5" cy="20" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="35" cy="20" r="2" fill="currentColor" opacity="0.6"/>
        <path d="M0,20 Q10,5 20,5 Q30,5 40,20 Q30,35 20,35 Q10,35 0,20 Z" stroke="#fff" strokeWidth="1" fill="none" opacity="0.4"/>
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#dayak-border)" />
  </svg>
);

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedRekening, setCopiedRekening] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-07-06T08:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to top when opened
  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
    }
  }, [isOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText('1234567890');
    setCopiedRekening(true);
    setTimeout(() => setCopiedRekening(false), 2000);
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-cream overflow-x-hidden selection:bg-brand-gold/30 font-sans">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col justify-between items-center bg-brand-bg text-brand-cream overflow-y-auto"
          >
            {/* Top Border */}
            <DayakBorder className="w-full h-10 md:h-12 text-brand-gold shrink-0 mt-4" />
            
            <ChineseLantern className="absolute top-16 left-6 md:left-16 w-16 md:w-24 h-auto text-brand-red opacity-80 z-0 pointer-events-none" />
            <ChineseLantern className="absolute top-16 right-6 md:right-16 w-16 md:w-24 h-auto text-brand-red opacity-80 z-0 pointer-events-none" />

            <div className="flex-1 flex flex-col items-center justify-center relative w-full z-10 px-6">
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[300px] text-brand-red opacity-30 font-serif leading-none pointer-events-none select-none">
                囍
              </div>

              <motion.h4 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-lg md:text-xl text-brand-cream tracking-wider mb-6"
              >
                The Wedding Of
              </motion.h4>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-script text-6xl md:text-8xl text-brand-gold leading-tight"
              >
                Marisa
              </motion.h1>

              <motion.p 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="font-serif text-sm md:text-base text-brand-cream tracking-widest my-2"
              >
                DAN
              </motion.p>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="font-script text-6xl md:text-8xl text-brand-gold leading-tight mb-12"
              >
                Atek
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-center mt-4 mb-4"
              >
                <p className="font-serif text-sm text-brand-cream/80 mb-1">Kepada Yth:</p>
                <p className="font-serif text-sm text-brand-cream/80 mb-2">Bapak/Ibu/Saudara/i</p>
                <h3 className="font-sans font-semibold text-lg text-brand-gold">Nama Tamu</h3>
              </motion.div>
              
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                onClick={() => setIsOpen(true)}
                className="mt-6 px-8 py-3 bg-brand-red text-brand-gold border border-brand-gold font-semibold uppercase tracking-widest text-sm hover:bg-brand-gold hover:text-brand-bg transition-colors duration-300 rounded-sm shadow-lg shadow-black/20"
              >
                Buka Undangan
              </motion.button>
            </div>

            {/* Bottom section with corners and border */}
            <div className="w-full relative shrink-0">
               <ChineseCloud className="absolute -bottom-4 md:-bottom-8 left-4 md:left-10 w-24 h-24 md:w-48 md:h-48 text-brand-red/50 z-0" />
               <ChineseCloud className="absolute -bottom-4 md:-bottom-8 right-4 md:right-10 w-24 h-24 md:w-48 md:h-48 text-brand-red/50 z-0" style={{ transform: 'scaleX(-1)' }} />
               <HornbillCorner className="absolute bottom-6 left-0 w-24 h-24 md:w-48 md:h-48 text-brand-gold z-0" />
               <HornbillCorner className="absolute bottom-6 right-0 w-24 h-24 md:w-48 md:h-48 text-brand-gold z-0" style={{ transform: 'scaleX(-1)' }} />
               <DayakBorder className="w-full h-10 md:h-12 text-brand-gold absolute bottom-2 left-0" />
               <div className="h-16"></div> {/* Spacer */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area - Only visible when open */}
      <div className={`transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-6 bg-brand-bg overflow-hidden text-brand-cream border-t border-brand-gold/20">
          <HornbillCorner className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 text-brand-gold opacity-10 pointer-events-none rotate-180" />
          <HornbillCorner className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 text-brand-gold opacity-10 pointer-events-none" />
          <ChineseCloud className="absolute top-16 md:top-20 left-4 md:left-10 w-24 h-24 md:w-48 md:h-48 text-brand-red opacity-30 pointer-events-none" />
          <ChineseCloud className="absolute bottom-16 md:bottom-20 right-4 md:right-10 w-24 h-24 md:w-48 md:h-48 text-brand-red opacity-30 pointer-events-none" style={{ transform: 'scaleX(-1)' }} />
          <DayakBorder className="absolute top-0 left-0 w-full h-6 md:h-8 text-brand-gold opacity-20" />
          
          <ChineseLantern className="absolute top-6 md:top-8 left-10 md:left-24 w-12 md:w-20 h-auto text-brand-red opacity-60 pointer-events-none" />
          <ChineseLantern className="absolute top-6 md:top-8 right-10 md:right-24 w-12 md:w-20 h-auto text-brand-red opacity-60 pointer-events-none" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vh] md:text-[40vh] text-brand-red opacity-20 font-serif leading-none pointer-events-none select-none">
            囍
          </div>

          <div className="max-w-3xl w-full text-center relative z-10 p-4 md:p-12">
             <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
             >
                <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-brand-gold mb-6">We Are Getting Married</h4>
                <div className="my-10">
                  <h1 className="font-script text-6xl md:text-8xl text-brand-cream mb-4">Marisa</h1>
                  <p className="font-serif text-lg tracking-widest text-brand-gold my-4">DAN</p>
                  <h1 className="font-script text-6xl md:text-8xl text-brand-cream mt-4">Atek</h1>
                </div>
                <p className="font-sans text-lg tracking-widest uppercase mt-12 text-brand-cream/80 border-b border-brand-gold/40 inline-block pb-2 mb-8">Senin, 06 Juli 2026</p>
                
                <div className="flex justify-center gap-4 mt-8">
                  {[
                    { label: 'Hari', value: timeLeft.days },
                    { label: 'Jam', value: timeLeft.hours },
                    { label: 'Menit', value: timeLeft.minutes },
                    { label: 'Detik', value: timeLeft.seconds },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-brand-gold flex items-center justify-center bg-brand-red/10 text-brand-gold font-serif text-2xl md:text-3xl">
                        {item.value.toString().padStart(2, '0')}
                      </div>
                      <span className="text-xs md:text-sm uppercase tracking-widest mt-3 text-brand-cream/70 font-sans">{item.label}</span>
                    </div>
                  ))}
                </div>
             </motion.div>
          </div>
        </section>

        {/* QUOTE SECTION */}
        <section className="py-24 px-6 bg-brand-bg text-brand-cream text-center relative overflow-hidden border-y border-brand-gold/30">
           <HornbillCorner className="absolute top-0 right-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] text-brand-gold opacity-5 translate-x-1/4 md:translate-x-1/3 -translate-y-1/4 md:-translate-y-1/3 rotate-90" />
           <HornbillCorner className="absolute bottom-0 left-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] text-brand-gold opacity-5 -translate-x-1/4 md:-translate-x-1/3 translate-y-1/4 md:translate-y-1/3 -rotate-90" />
           <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="max-w-2xl mx-auto relative z-10"
           >
              <Heart className="w-8 h-8 mx-auto text-brand-gold mb-8 fill-brand-gold" />
              <p className="font-serif text-xl md:text-2xl leading-relaxed italic font-light text-brand-gold/90">
                "Two souls with but a single thought, two hearts that beat as one."
              </p>
           </motion.div>
        </section>

        {/* PROFILE SECTION */}
        <section className="py-24 px-6 bg-brand-bg relative overflow-hidden">
           <div className="hidden md:block absolute top-0 left-1/4 w-[1px] h-32 bg-brand-gold/40"></div>
           <div className="hidden md:flex absolute top-32 left-1/4 w-8 h-12 bg-brand-red border border-brand-gold/60 rounded-sm -translate-x-1/2 items-center justify-center">
             <div className="w-1 h-8 bg-brand-gold/30"></div>
           </div>
           
           <div className="hidden md:block absolute top-0 right-1/4 w-[1px] h-16 bg-brand-gold/40"></div>
           <div className="hidden md:flex absolute top-16 right-1/4 w-8 h-12 bg-brand-red border border-brand-gold/60 rounded-sm -translate-x-1/2 items-center justify-center">
             <div className="w-1 h-8 bg-brand-gold/30"></div>
           </div>

           <div className="max-w-5xl mx-auto text-center relative z-10 pt-10">
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                className="font-serif text-3xl md:text-5xl text-brand-gold mb-16 relative z-10"
              >
                Groom & Bride
              </motion.h2>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-auto text-brand-gold opacity-5 pointer-events-none select-none z-0">
                 <DayakShield />
              </div>

              <div className="grid md:grid-cols-2 gap-16 md:gap-8 items-center relative z-10">
                {/* Bride */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUpVariant}
                  className="flex flex-col items-center relative"
                >
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-brand-gold p-2 mb-6 overflow-hidden bg-brand-red/10 relative">
                     <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80" alt="Marisa" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="font-serif text-2xl text-brand-cream mb-2">Marisa Ekawati</h3>
                  <p className="font-script text-2xl text-brand-gold mb-4">"Marisa"</p>
                  <div className="w-12 h-[1px] bg-brand-gold mb-4"></div>
                  <p className="text-sm font-sans text-brand-cream/80 max-w-xs">
                    Anak kedua dari<br/>
                    <span className="font-semibold text-brand-gold">Bapak Stepanus Abol & Ibu Maria Satina</span>
                  </p>
                </motion.div>

                {/* Groom */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, delay: 0.2 }}
                  variants={fadeUpVariant}
                  className="flex flex-col items-center relative"
                >
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-brand-gold p-2 mb-6 overflow-hidden bg-brand-red/10 relative">
                     <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80" alt="Atek" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="font-serif text-2xl text-brand-cream mb-2">Suprianto, S.Kom</h3>
                  <p className="font-script text-2xl text-brand-gold mb-4">"Atek"</p>
                  <div className="w-12 h-[1px] bg-brand-gold mb-4"></div>
                  <p className="text-sm font-sans text-brand-cream/80 max-w-xs">
                    Anak kedua dari<br/>
                    <span className="font-semibold text-brand-gold">Bapak Lim Mou Tie & Ibu Yo Hui Khiam</span>
                  </p>
                </motion.div>
              </div>
           </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="py-24 px-6 bg-brand-bg relative overflow-hidden border-t border-brand-gold/20">
           <div className="max-w-5xl mx-auto text-center relative z-10 pt-10">
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                className="font-serif text-3xl md:text-5xl text-brand-gold mb-16 relative z-10"
              >
                Our Gallery
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pb-12">
                {[
                  "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
                  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
                  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
                  "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
                  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
                  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80"
                ].map((src, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }
                    }}
                    className={`relative overflow-hidden rounded-md border border-brand-gold/30 aspect-[3/4] ${index === 1 || index === 4 ? 'md:translate-y-8' : ''}`}
                  >
                    <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </motion.div>
                ))}
              </div>
           </div>
        </section>

        {/* EVENTS SECTION */}
        <section className="py-24 px-6 bg-brand-red relative border-y border-brand-gold/30 overflow-hidden">
           <DayakBorder className="absolute top-0 left-0 w-full h-8 text-brand-gold opacity-30" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] opacity-10 pointer-events-none select-none z-0 text-brand-gold">
             <DayakShield />
           </div>
           
           <ChineseLantern className="absolute top-8 left-6 md:left-16 w-16 md:w-20 h-auto text-brand-gold opacity-40 pointer-events-none" />
           <ChineseLantern className="absolute top-8 right-6 md:right-16 w-16 md:w-20 h-auto text-brand-gold opacity-40 pointer-events-none" />

           <div className="max-w-5xl mx-auto text-center relative z-10 pt-10">
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                className="font-serif text-3xl md:text-5xl text-brand-gold mb-16"
              >
                Wedding Events
              </motion.h2>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Tunangan */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariant}
                    className="bg-brand-bg p-8 shadow-xl border border-brand-gold/30 flex flex-col items-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 rounded-lg"
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-brand-gold"></div>
                  <Calendar className="w-8 h-8 text-brand-gold mb-6 mt-8" />
                  <h3 className="font-serif text-2xl mb-4 text-brand-cream">Tunangan</h3>
                  <div className="w-full h-[1px] bg-brand-gold/20 mb-6"></div>
                  <div className="space-y-4 text-sm font-sans text-brand-cream/80">
                    <p className="font-semibold text-brand-gold text-base">Jumat, 26 Juni 2026</p>
                  </div>
                </motion.div>

                {/* Akad Nikah */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, delay: 0.2 }}
                    variants={fadeUpVariant}
                    className="bg-brand-gold text-brand-bg p-8 shadow-2xl border border-brand-gold flex flex-col items-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 transform scale-105 z-10 rounded-lg"
                >
                    <div className="absolute top-1 left-1 border border-brand-bg w-[calc(100%-8px)] h-[calc(100%-8px)] pointer-events-none rounded-md opacity-20"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center text-8xl text-brand-bg opacity-5 font-serif select-none pointer-events-none">
                    囍
                  </div>

                  <Heart className="w-8 h-8 text-brand-bg mb-6 mt-2 relative z-10" />
                  <h3 className="font-serif text-2xl mb-4 text-brand-bg relative z-10">Akad Nikah</h3>
                  <div className="w-full h-[1px] bg-brand-bg/20 mb-6"></div>
                  <div className="space-y-4 text-sm font-sans text-brand-bg/90 flex flex-col items-center font-medium">
                    <p className="font-bold flex items-center gap-2"><Calendar className="w-4 h-4"/> Senin, 06 Juli 2026</p>
                    <p className="flex justify-center items-start gap-2 max-w-[200px] mx-auto text-center opacity-80">
                      <MapPin className="w-4 h-4 shrink-0 mt-1"/> Sepok Pangkalan
                    </p>
                  </div>
                </motion.div>

                {/* Resepsi */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, delay: 0.4 }}
                    variants={fadeUpVariant}
                    className="bg-brand-bg p-8 shadow-xl border border-brand-gold/30 flex flex-col items-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 rounded-lg"
                >
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-brand-gold"></div>
                  <Clock className="w-8 h-8 text-brand-gold mb-6 mt-8" />
                  <h3 className="font-serif text-2xl mb-4 text-brand-cream">Resepsi</h3>
                  <div className="w-full h-[1px] bg-brand-gold/20 mb-6"></div>
                  <div className="space-y-4 text-sm font-sans text-brand-cream/80 flex flex-col items-center mb-8">
                    <p className="font-semibold text-brand-gold text-base flex items-center gap-2"><Calendar className="w-4 h-4"/> Senin, 06 Juli 2026</p>
                    <p className="font-medium text-brand-cream flex items-center gap-2"><Clock className="w-4 h-4"/> 14.00 WIB - Selesai</p>
                    <p className="flex justify-center items-start gap-2 max-w-[200px] mx-auto text-center opacity-80">
                      <MapPin className="w-4 h-4 shrink-0 mt-1"/> Sepok Pangkalan
                    </p>
                  </div>
                </motion.div>
              </div>
           </div>
           <DayakBorder className="absolute bottom-0 left-0 w-full h-8 text-brand-gold opacity-30" />
        </section>

        {/* MAP LOCATION SECTION */}
        <section className="py-24 px-6 bg-brand-bg relative overflow-hidden">
           <ChineseCloud className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 text-brand-red opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4" />
           <ChineseCloud className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 text-brand-red opacity-10 pointer-events-none -translate-x-1/4 translate-y-1/4 rotate-180" />
           <HornbillCorner className="absolute top-1/2 right-4 md:right-10 w-24 h-24 md:w-48 md:h-48 text-brand-gold opacity-10 pointer-events-none -translate-y-1/2 md:scale-150 rotate-90 hidden sm:block" />
           <HornbillCorner className="absolute top-1/2 left-4 md:left-10 w-24 h-24 md:w-48 md:h-48 text-brand-gold opacity-10 pointer-events-none -translate-y-1/2 md:scale-150 -rotate-90 hidden sm:block" />
           
           <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
             <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                className="font-serif text-3xl md:text-5xl text-brand-gold mb-8"
              >
                Location Details
              </motion.h2>
              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                className="mb-12 font-sans text-brand-cream/70"
              >
                Scan or click to view the location on Google Maps.
              </motion.p>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                className="w-full aspect-video bg-brand-bg rounded overflow-hidden shadow-inner border border-brand-gold/30 flex items-center justify-center p-4 relative"
              >
                {/* Embed Map Placeholder - Users can replace this iframe src with the actual map link */}
                <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] mix-blend-overlay"></div>
                
                <div className="text-center p-8 relative z-10">
                   <MapPin className="w-12 h-12 text-brand-gold/80 mx-auto mb-4" />
                   <p className="text-brand-cream/80 italic font-serif text-xl">"Sepok Pangkalan" Map Area</p>
                   <p className="text-xs text-brand-cream/40 mt-2">(Klik tombol di bawah untuk melihat rute)</p>
                </div>
              </motion.div>

              <motion.a 
                href="https://maps.app.goo.gl/V24rrbgYzxudkk1b6"
                target="_blank"
                rel="noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                className="mt-8 px-6 py-3 border border-brand-gold text-brand-gold font-semibold uppercase tracking-widest text-xs hover:bg-brand-gold hover:text-brand-bg transition-colors duration-300 rounded flex items-center gap-2 relative z-10"
              >
                <MapPin className="w-4 h-4" /> Buka di Google Maps
              </motion.a>
           </div>
        </section>

        {/* VIRTUAL GIFT SECTION */}
        <section className="py-24 px-6 bg-brand-red text-brand-cream relative border-y border-brand-gold/30 overflow-hidden">
           <DayakBorder className="absolute top-0 left-0 w-full h-8 text-brand-gold opacity-10" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] opacity-10 pointer-events-none select-none z-0 text-brand-gold">
             <DayakShield />
           </div>
           <div className="max-w-3xl mx-auto text-center relative z-10 pt-8">
              <Gift className="w-12 h-12 text-brand-gold mx-auto mb-6" />
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                className="font-serif text-3xl md:text-5xl mb-6 text-brand-gold"
              >
                Virtual Gift
              </motion.h2>
              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                className="mb-12 font-sans text-brand-cream/80 max-w-xl mx-auto leading-relaxed"
              >
                Doa restu Anda merupakan karunia yang sangat berarti bagi kami. 
                Namun, jika Anda ingin memberikan hadiah, kami menyediakan Virtual Gift di bawah ini.
              </motion.p>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                className="bg-brand-bg text-brand-cream p-8 rounded shadow-2xl max-w-md mx-auto border border-brand-gold relative overflow-hidden"
              >
                 <HornbillCorner className="absolute -top-12 -right-12 w-32 h-32 text-brand-gold opacity-20 pointer-events-none" />
                 <h4 className="font-serif font-bold text-xl mb-4 text-brand-gold">Bank BCA</h4>
                 <p className="font-mono text-2xl tracking-widest text-brand-cream mb-2">123 456 7890</p>
                 <p className="font-sans text-sm text-brand-cream/70 mb-6 uppercase tracking-wider">A.N. Marisa Ekawati</p>
                 
                 <button 
                  onClick={handleCopy}
                  className="w-full py-3 bg-brand-gold text-brand-bg font-semibold uppercase tracking-widest text-xs hover:bg-brand-cream hover:text-brand-bg transition-colors duration-300 rounded flex items-center justify-center gap-2"
                 >
                   {copiedRekening ? <><Check className="w-4 h-4"/> Copied!</> : <><Copy className="w-4 h-4"/> Copy No. Rekening</>}
                 </button>
              </motion.div>
           </div>
           <DayakBorder className="absolute bottom-0 left-0 w-full h-8 text-brand-gold opacity-10" />
        </section>

        {/* CLOSING SECTION */}
        <section className="py-24 px-6 bg-brand-bg text-center relative overflow-hidden">
          <HornbillCorner className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] text-brand-gold opacity-10 md:opacity-5 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vh] md:text-[40vh] text-brand-red opacity-20 font-serif leading-none pointer-events-none select-none">
            囍
          </div>
          <ChineseLantern className="absolute top-0 left-6 md:left-20 w-16 md:w-24 h-auto text-brand-red opacity-40 z-0 pointer-events-none translate-y-1/4" />
          <ChineseLantern className="absolute top-0 right-6 md:right-20 w-16 md:w-24 h-auto text-brand-red opacity-40 z-0 pointer-events-none translate-y-1/4" />
          <div className="max-w-2xl mx-auto relative z-10 pb-8">
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-brand-gold mb-6">Terima Kasih</h4>
            <p className="font-serif text-lg text-brand-cream/80 leading-relaxed mb-10">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.
            </p>
            <h1 className="font-script text-5xl mb-4 text-brand-gold">Marisa &amp; Atek</h1>
            <p className="font-serif text-sm tracking-widest text-brand-cream/60 mb-12">THANK YOU</p>
            <p className="font-sans text-xs text-brand-cream/40">
              Undangan dibuat oleh <a href="https://www.instagram.com/uneeddeveloper/" target="_blank" rel="noreferrer" className="text-brand-gold hover:underline">@uneeddeveloper</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

