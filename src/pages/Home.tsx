import { Link } from '@tanstack/react-router';
import { ChevronRight, Check, Heart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { 
  PainManagementIcon, 
  BackPainIcon, 
  LowerBackPainIcon, 
  NeckPainIcon, 
  HeadachesIcon, 
  SciaticaIcon, 
  NeuropathyIcon, 
  LegPainIcon, 
  FacePainIcon, 
  KneePainIcon 
} from '../components/ConditionIcons';

// Custom lightweight counter to avoid module interop issues
function AnimatedCounter({ end, duration = 2500 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasStarted) {
        setHasStarted(true);
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const conditions = [
  { name: 'Pain Management', icon: PainManagementIcon, route: '/pain-management' },
  { name: 'Back Pain', icon: BackPainIcon, route: '/back-pain' },
  { name: 'Lower Back Pain', icon: LowerBackPainIcon, route: '/lower-back-pain' },
  { name: 'Neck Pain', icon: NeckPainIcon, route: '/neck-pain' },
  { name: 'Headaches', icon: HeadachesIcon, route: '/headaches' },
  { name: 'Sciatica', icon: SciaticaIcon, route: '/sciatica' },
  { name: 'Neuropathy', icon: NeuropathyIcon, route: '/neuropathy' },
  { name: 'Leg Pain', icon: LegPainIcon, route: '/leg-pain' },
  { name: 'Face Pain', icon: FacePainIcon, route: '/face-pain' },
  { name: 'Knee Pain', icon: KneePainIcon, route: '/knee-pain' },
];

export function Home() {
  const [hoveredCondition, setHoveredCondition] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-ken-burns {
          animation: kenburns 25s ease-out infinite alternate;
        }
      `}</style>

      {/* Cinematic Hero Section - Full Bleed */}
      <section className="relative w-full min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-secondary-900">
        
        {/* Background Image / Overlay with Ken Burns effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/60 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2000&auto=format&fit=crop" 
            alt="Spine and Pain Treatment" 
            className="w-full h-full object-cover object-center animate-ken-burns origin-center"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-12 relative z-20 flex flex-col md:flex-row items-center mt-12">
          <div className="md:w-3/4 lg:w-3/5 mb-12 md:mb-0 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-[1.15] text-white drop-shadow-md">
              Advanced Spine & <br />
              Pain Care
            </h1>
            
            <span className="text-white/80 font-semibold tracking-[0.2em] uppercase text-sm mb-12 block drop-shadow-sm">
              BOARD-CERTIFIED PAIN SPECIALISTS
            </span>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
              <a href="#appointment" className="bg-primary-600 hover:bg-primary-500 text-white w-full sm:w-auto px-6 sm:px-8 py-4 rounded-full font-bold transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(var(--color-primary-600),0.3)] hover:-translate-y-0.5 flex items-center justify-center tracking-widest uppercase text-[13px] sm:text-sm sm:min-w-[240px] border border-primary-500 text-center">
                Schedule Appointment
              </a>
              <a href="tel:4693130040" className="bg-white/5 backdrop-blur-sm border border-white/30 text-white w-full sm:w-auto px-6 sm:px-8 py-4 rounded-full font-bold hover:bg-white hover:text-secondary-900 hover:border-white transition-all flex items-center justify-center tracking-widest uppercase text-[13px] sm:text-sm sm:min-w-[240px] shadow-sm text-center">
                Call (469) 313-0040
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Grid Section matching screenshot */}
      <section className="bg-[#1b3e70] py-20 lg:py-28 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-16">
            {conditions.map((condition, index) => {
              const Icon = condition.icon;
              const isHovered = hoveredCondition === index;

              return (
                <div 
                  key={index} 
                  onMouseEnter={() => setHoveredCondition(index)}
                  onMouseLeave={() => setHoveredCondition(null)}
                  className={`rounded-md shadow-xl flex flex-col items-center justify-start pt-6 pb-12 px-4 relative transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-56 lg:h-64 cursor-pointer ${
                    isHovered ? 'bg-[#17a2b8]' : 'bg-white'
                  }`}
                >
                  <div className="mb-4 transition-transform duration-300 transform group-hover:scale-105">
                    <Icon className="w-18 h-18 lg:w-20 lg:h-20 transition-colors duration-300" active={isHovered} />
                  </div>
                  <h3 className={`text-center font-bold text-sm lg:text-base leading-tight transition-colors duration-300 ${
                    isHovered ? 'text-white' : 'text-gray-800'
                  }`}>
                    {condition.name}
                  </h3>
                  
                  {/* Overlapping Button */}
                  <Link 
                    to={condition.route} 
                    className={`absolute -bottom-5 px-6 py-2.5 rounded shadow-md font-semibold text-xs lg:text-sm transition-all duration-300 whitespace-nowrap border ${
                      isHovered 
                        ? 'bg-white text-[#17a2b8] border-white hover:bg-gray-100' 
                        : 'bg-[#17a2b8] text-white border-[#17a2b8] hover:bg-[#138496]'
                    }`}
                  >
                    More details
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Screenshot 6 Split Layout */}
      <section className="relative flex flex-col lg:flex-row min-h-[600px] z-20">
        {/* Left Image Full Height */}
        <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full bg-black">
           <img 
             src="https://texasspinepain.com/wp-content/uploads/2024/10/Pain-Management-in-Dallas-1-2048x2048.png" 
             className="absolute inset-0 w-full h-full object-cover opacity-90" 
             alt="Pain Management in Dallas" 
           />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex flex-col">
           {/* Top Blue Half */}
           <div className="bg-[#1e4682] p-12 lg:p-20 text-white relative overflow-hidden">
             <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
                <Heart className="w-64 h-64" strokeWidth={1} />
             </div>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative z-10 tracking-tight leading-tight text-white">
               Pain Management <br /> Dallas
             </h2>
             <h3 className="text-xl md:text-2xl font-bold relative z-10 mt-4 text-white">
               Why Choose Spine and Pain Institute of Texas?
             </h3>
           </div>
           
           {/* Bottom White Half */}
           <div className="bg-white p-12 lg:p-20 flex-grow shadow-2xl z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
                {[
                  'Leader in Patient Care',
                  'Wide Range of Services',
                  'Experienced and Caring Staff',
                  'Patient-Centric Environment',
                  'Convenience and Accessibility',
                  'Positive Patient Experiences',
                  'Electronic Medical Records',
                  'Pain Management Physicians',
                  'Advanced Pain Management Techniques',
                  'Comprehensive Pain Management Methods'
                ].map((reason, idx) => (
                  <div key={idx} className="flex items-center group">
                    <div className="bg-[#17a2b8] w-8 h-8 rounded flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <Check className="h-5 w-5 text-white" strokeWidth={4} />
                    </div>
                    <span className="text-gray-700 font-bold text-[17px] leading-snug group-hover:text-[#1e4682] transition-colors">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Stats/Trust Bar - Screenshot 1 Layout */}
      <section className="bg-white py-20 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
              <Heart className="w-64 h-64" strokeWidth={1} />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 relative z-10">
              We take <span className="text-[#1e4682]">the time</span> you need
            </h2>
            <p className="text-gray-500 text-xl font-light relative z-10">
              Best clinic with over 11 years of experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
             <div className="flex flex-col items-center">
               <div className="bg-[#355e96] w-full py-16 flex justify-center items-center rounded-sm shadow-md mb-6 hover:-translate-y-1 transition-transform duration-300">
                 <div className="text-5xl lg:text-6xl font-light text-white tracking-tight leading-none">
                   <AnimatedCounter end={5000} />+
                 </div>
               </div>
               <div className="text-[#355e96] font-medium text-lg text-center">Satisfied Patients</div>
             </div>
             
             <div className="flex flex-col items-center">
               <div className="bg-[#355e96] w-full py-16 flex justify-center items-center rounded-sm shadow-md mb-6 hover:-translate-y-1 transition-transform duration-300">
                 <div className="text-5xl lg:text-6xl font-light text-white tracking-tight leading-none">
                   <AnimatedCounter end={11} />+
                 </div>
               </div>
               <div className="text-[#355e96] font-medium text-lg text-center">Years of Experience</div>
             </div>
             
             <div className="flex flex-col items-center">
               <div className="bg-[#355e96] w-full py-16 flex justify-center items-center rounded-sm shadow-md mb-6 hover:-translate-y-1 transition-transform duration-300">
                 <div className="text-5xl lg:text-6xl font-light text-white tracking-tight leading-none">
                   <AnimatedCounter end={5} />+
                 </div>
               </div>
               <div className="text-[#355e96] font-medium text-lg text-center">Award-Winning Providers</div>
             </div>

             <div className="flex flex-col items-center">
               <div className="bg-[#355e96] w-full py-16 flex justify-center items-center rounded-sm shadow-md mb-6 hover:-translate-y-1 transition-transform duration-300">
                 <div className="text-5xl lg:text-6xl font-light text-white tracking-tight leading-none">
                   <AnimatedCounter end={50} />+
                 </div>
               </div>
               <div className="text-[#355e96] font-medium text-lg text-center">Insurance Company Tie-Ups</div>
             </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Screenshot 2 Layout */}
      <section className="py-20 lg:py-32 bg-[#f9fafc] relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Text */}
            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-700 leading-tight mb-4">
                Pain Management Dallas <br />
                <span className="text-[#1e4682]">– Spine & Pain Institute of Texas</span>
              </h2>
              <p className="text-gray-500 text-xl font-light mb-8">
                Discover personalized, expert pain relief.
              </p>
              <div className="text-gray-600 space-y-6 leading-relaxed mb-10 text-[17px]">
                <p>
                  At Spine & Pain Institute of Texas, we specialize in comprehensive pain management services for the Dallas, TX, community and beyond. 
                </p>
                <p>
                  Under the expert guidance of Dr. Pritesh Patel, DO, a double board-certified pain management specialist in Dallas, our team is dedicated to helping patients achieve a pain-free, healthier life. We believe in a personalized, patient-centered approach to care.
                </p>
              </div>
              <Link to="/about-us" className="inline-flex items-center bg-[#1e4682] hover:bg-[#163566] text-white px-8 py-3.5 rounded-sm font-semibold transition-colors shadow-md">
                Read more details <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            {/* Right Image */}
            <div className="lg:w-1/2 relative">
               <div className="aspect-square lg:aspect-[4/3] rounded-sm overflow-hidden shadow-2xl relative z-10">
                 <img src="https://texasspinepain.com/wp-content/uploads/2024/10/Pain-Management-in-Dallas-1024x1024.png" alt="Pain Management Dallas" className="w-full h-full object-cover" />
               </div>
               <div className="absolute -top-16 -right-16 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
               <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-50 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors / Team Section - Screenshot 3 & 4 Layout */}
      <section className="relative">
        {/* Blue Top Banner */}
        <div className="bg-[#1e4682] pt-24 pb-48 lg:pb-64 px-4 lg:px-8 relative overflow-hidden lg:overflow-visible">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center relative z-10">
            <div className="lg:w-3/5">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Experienced Pain Management <br /> Doctors Dallas
              </h2>
              <p className="text-blue-100 text-lg md:text-xl font-light">
                Your trusted partner for personalized, pain-free living in Texas
              </p>
            </div>
            
            {/* The Floating Appointment Box (Turquoise) */}
            <div className="lg:absolute lg:right-0 mt-12 lg:mt-0 w-full lg:w-[400px] bg-[#17a2b8] p-10 lg:p-12 shadow-2xl flex flex-col items-center justify-center text-center transform lg:translate-x-8 xl:translate-x-16 z-20 rounded-md lg:rounded-none">
              <h3 className="text-3xl font-bold text-white mb-3 tracking-wide leading-tight">Make an Appointment</h3>
              <p className="text-white text-lg mb-8 opacity-90 font-light tracking-wide">Apply now for free</p>
              <Link to="/contact-us" className="inline-block bg-white text-gray-800 hover:bg-gray-100 px-8 py-3 text-sm font-semibold tracking-wide transition-colors border border-gray-200 uppercase shadow-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* White Bottom Half with Overlapping Doctor Card */}
        <div className="bg-white py-20 px-4 lg:px-8 relative">
          <div className="container mx-auto relative flex flex-col-reverse lg:flex-row gap-12">
            
            {/* Left Team & Staff Text */}
            <div className="lg:w-1/2 lg:pr-12">
               <div className="relative mb-6">
                 <Heart className="absolute -left-6 -top-8 w-24 h-24 text-gray-100 opacity-60" strokeWidth={1} />
                 <h2 className="text-4xl font-bold text-gray-700 relative z-10">
                   Team <span className="text-[#1e4682]">&</span> Staff
                 </h2>
               </div>
               <p className="text-gray-500 text-lg font-light mb-10">
                 We prioritize the well-being of our patients
               </p>
               <div className="text-gray-600 space-y-6 leading-relaxed mb-10 text-[17px]">
                 <p>
                   At Spine & Pain Institute of Texas, we prioritize the well-being of our patients. We understand that searching for pain specialist or pain clinics in Dallas can be a daunting task.
                 </p>
               </div>
               <Link to="/about-us" className="inline-flex items-center bg-[#1e4682] hover:bg-[#163566] text-white px-8 py-3.5 rounded-sm font-semibold transition-colors shadow-md">
                 Read more details <ChevronRight className="ml-2 w-4 h-4" />
               </Link>
            </div>

            {/* The Overlapping Doctor Card */}
            <div className="lg:w-1/2 lg:absolute lg:right-0 lg:-top-64 z-20">
               <div className="bg-white rounded-md shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-4 max-w-md mx-auto lg:max-w-none lg:w-[70%] lg:ml-auto">
                 <img src="https://texasspinepain.com/wp-content/uploads/2024/11/Dr-Pritesh-Patel.png" alt="Dr. Pritesh Patel" className="w-full h-auto object-cover rounded-sm bg-[#f4f6f8]" />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Make an Appointment Section - Screenshot 5 Layout */}
      <section className="bg-[#1e4682] py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-1/4 right-20 opacity-5 pointer-events-none">
           <Heart className="w-96 h-96" strokeWidth={0.5} />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Left Image */}
            <div className="lg:w-5/12 relative z-10 w-full max-w-md mx-auto lg:max-w-none">
               <div className="aspect-[3/4] lg:h-[700px] w-full rounded-md overflow-hidden shadow-2xl relative">
                 <img src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1000&auto=format&fit=crop" alt="Doctor consulting" className="w-full h-full object-cover" />
               </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-7/12 relative z-10 w-full">
               <div className="relative">
                 <Heart className="absolute -right-12 -top-16 w-64 h-64 text-[#163566] opacity-30 -z-10" strokeWidth={1} />
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Make an Appointment</h2>
                 <p className="text-blue-100 text-xl font-light mb-12">
                   Primary care appointments and some specialties
                 </p>
               </div>

               <form onSubmit={(e) => {
                 e.preventDefault();
                 const btn = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
                 if (btn) {
                   const originalText = btn.innerText;
                   btn.innerText = 'Sending...';
                   btn.disabled = true;
                   setTimeout(() => {
                     btn.innerText = 'Message Sent!';
                     btn.classList.add('bg-green-500', 'text-white');
                     e.target.reset();
                     setTimeout(() => {
                       btn.innerText = originalText;
                       btn.disabled = false;
                       btn.classList.remove('bg-green-500', 'text-white');
                     }, 3000);
                   }, 1000);
                 }
               }}>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-blue-100 text-sm mb-2 font-medium">Full Name</label>
                     <input required type="text" className="w-full bg-white rounded p-3.5 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-800" />
                   </div>
                   <div>
                     <label className="block text-blue-100 text-sm mb-2 font-medium">Mobile Number</label>
                     <input required type="tel" className="w-full bg-white rounded p-3.5 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-800" />
                   </div>
                   <div className="sm:col-span-2">
                     <label className="block text-blue-100 text-sm mb-2 font-medium">Email ID</label>
                     <input required type="email" className="w-full bg-white rounded p-3.5 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-800" />
                   </div>
                   <div className="sm:col-span-2">
                     <label className="block text-blue-100 text-sm mb-2 font-medium">Subject</label>
                     <input required type="text" className="w-full bg-white rounded p-3.5 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-800" />
                   </div>
                   <div className="sm:col-span-2">
                     <label className="block text-blue-100 text-sm mb-2 font-medium">Message</label>
                     <textarea required rows={4} className="w-full bg-white rounded p-3.5 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none text-gray-800"></textarea>
                   </div>
                 </div>
                 
                 <div className="mt-8">
                   <button type="submit" className="bg-white hover:bg-gray-50 text-[#1e4682] px-10 py-4 rounded-sm font-bold text-lg transition-colors shadow-lg disabled:opacity-80 disabled:cursor-not-allowed">
                     Send Message
                   </button>
                 </div>
               </form>
            </div>

          </div>
        </div>
      </section>

      <TestimonialSlider />
      
      {/* Insurance Logos Section */}
      <section className="py-20 bg-white border-t border-gray-100 overflow-hidden">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="container mx-auto px-4 lg:px-8 text-center mb-16">
          <div className="relative flex overflow-x-hidden w-full group">
            <div className="flex animate-marquee items-center gap-12 md:gap-20 whitespace-nowrap min-w-max px-6">
              {/* Set 1 */}
              <img src="/insurance1.jpg" alt="Insurance Partner 1" className="h-10 md:h-16 object-contain" />
              <img src="/insurance2.jpg" alt="Insurance Partner 2" className="h-10 md:h-16 object-contain" />
              <img src="/insurance3.jpg" alt="Insurance Partner 3" className="h-10 md:h-16 object-contain" />
              <img src="/insurance5.jpg" alt="Insurance Partner 4" className="h-10 md:h-16 object-contain" />
              <img src="/insurance6.jpg" alt="Insurance Partner 5" className="h-10 md:h-16 object-contain" />
              
              {/* Set 2 (Duplicate for infinite effect) */}
              <img src="/insurance1.jpg" alt="Insurance Partner 1" className="h-10 md:h-16 object-contain" />
              <img src="/insurance2.jpg" alt="Insurance Partner 2" className="h-10 md:h-16 object-contain" />
              <img src="/insurance3.jpg" alt="Insurance Partner 3" className="h-10 md:h-16 object-contain" />
              <img src="/insurance5.jpg" alt="Insurance Partner 4" className="h-10 md:h-16 object-contain" />
              <img src="/insurance6.jpg" alt="Insurance Partner 5" className="h-10 md:h-16 object-contain" />
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/insurance-benefits" className="inline-flex items-center text-[#1e4682] border-2 border-[#1e4682] hover:bg-[#1e4682] hover:text-white px-8 py-3.5 font-bold text-[17px] transition-colors rounded-sm shadow-sm">
            See All Insurance Benefits <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
