import { useState, useRef } from 'react';
import { ChevronRight, Check, Play, Home, Plus } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { ScrollReveal } from '../components/ScrollReveal';
import { SEO } from '../components/SEO';

export function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white">
      <SEO 
        title="About Us | Pain Specialist Dallas | Spine & Pain Institute"
        description="Providing compassionate, board-certified interventional pain care in Dallas, Texas. With over 25 years of experience, Dr. Pritesh Patel offers expert care."
        canonical="/about-us"
      />
      
      {/* Editorial Subpage Hero Header */}
      <div className="bg-[#0b192b] text-white py-16 lg:py-24 px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b192b] via-[#0b192b]/90 to-teal-950/40" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-200">About Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight mb-3">
            About Us | Pain Specialist Dallas
          </h1>
          <p className="text-teal-200 text-base sm:text-lg font-medium max-w-2xl">
            Providing compassionate, board-certified interventional pain care in Dallas, Texas.
          </p>
        </div>
      </div>

      {/* Main Title & Building Image Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs block mb-2">Clinical Excellence</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-3">
              Expert <span className="text-teal-600">Pain Specialist Dallas</span>
            </h2>
            <p className="text-slate-500 text-lg sm:text-xl font-normal">With over 25 years of experience</p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200} className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative">
            <img 
              src="/Spine-Pain-Institute-of-Texas-2048x899.webp" 
              alt="Spine and Pain Institute of Texas Building in Dallas" 
              loading="lazy"
              width="2048"
              height="899"
              className="w-full h-auto object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#0b192b] py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
          
          <ScrollReveal direction="up" className="text-center mb-16">
            <span className="text-teal-400 font-bold uppercase tracking-widest text-xs block mb-2">Our Mission</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">Your Health, Our Expertise</h2>
            <p className="text-slate-300 text-lg font-normal">Caring for the growing needs of our society.</p>
          </ScrollReveal>

          <div className="space-y-10 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            <ScrollReveal direction="up">
              <p className="bg-white/5 p-6 rounded-2xl border border-white/10">
                At Spine &amp; Pain Institute of Texas, we specialize in <span className="text-teal-300 font-semibold underline underline-offset-4 decoration-teal-400">comprehensive pain management services</span> for the Dallas, TX, community and beyond. Under the expert guidance of Dr. Pritesh Patel, DO, a double board-certified pain management specialist in Dallas, our team is dedicated to helping patients achieve a pain-free, healthier life.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up">
              <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Approach to Pain Management Dallas Texas</h3>
                <p>
                  We understand that every patient's pain is unique. Our pain management physicians believe in a personalized, patient-centered approach to care, ensuring that you receive the time and attention necessary for effective relief. Our mission is to set the standard for pain management service in Dallas, and throughout Texas by offering compassionate and thorough patient care.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up">
              <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Conditions Treated by Our Pain Specialist Dallas</h3>
                <p className="mb-4">Our expertise spans a broad range of pain conditions, including:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 font-medium text-white">
                  {[
                    'Back and Lower Back Pain',
                    'Neck Pain',
                    'Shoulder Pain',
                    'Knee Pain',
                    'Headaches and Migraines',
                    'Leg Pain and Sciatica',
                    'Neuropathy'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 bg-white/5 px-4 py-2.5 rounded-xl border border-white/10 text-sm">
                      <Check className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Our team of board-certified pain management doctors in Dallas, Texas, is well-equipped to help you with any of these conditions, tailoring our care to address the root cause of your pain.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up">
              <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Advanced Diagnostics and Pain Management Treatment</h3>
                <p>
                  Utilizing the latest advancements in diagnostic testing, we identify the root of your pain to deliver <span className="text-teal-300 font-semibold underline underline-offset-4 decoration-teal-400">accurate and effective treatments</span>. Our techniques include interventional procedures, comprehensive care plans, and behavioral health support. As leading Dallas Pain Clinic, we strive to provide cutting-edge options designed to improve your quality of life.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up">
              <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Compassionate, Qualified Pain Management Team</h3>
                <p>
                  Led by Dr. Pritesh Patel, our team at Spine &amp; Pain Institute of Texas combines clinical excellence with empathy. Known for his attentive listening and personable approach, Dr. Patel and our carefully selected staff ensure a warm, welcoming experience, reinforcing why we are among the top pain management specialist in Dallas.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up">
              <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Patient-Centered Pain Care in Dallas, TX</h3>
                <p>
                  At Spine &amp; Pain Institute of Texas, we view our patients as family. Our goal is to create a supportive environment where you feel respected and valued. We aim to make every step, <span className="text-teal-300 font-semibold underline underline-offset-4 decoration-teal-400">from scheduling to treatment</span>, stress-free and convenient.
                </p>
                <p className="mt-4">
                  Take the first step toward a pain-free life by scheduling an appointment with a trusted pain specialist in Dallas, TX, today. Join countless others in the Dallas community who have found relief and restored quality of life through our expert care.
                </p>
              </div>
            </ScrollReveal>
            
          </div>
        </div>
      </section>

      {/* Combining Vast Experience Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <ScrollReveal direction="right" className="lg:w-1/2 relative z-10">
              <span className="text-teal-600 font-bold uppercase tracking-widest text-xs block mb-2">Interventional Spine Care</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 leading-tight mb-6">
                Combining Vast Experience with <span className="text-teal-600">Advanced Medical Knowledge</span>
              </h2>
              
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                At Texas Spine Pain, we are dedicated to helping patients in the Dallas area find relief from chronic back, neck, and nerve pain. Our team of board-certified interventional pain management specialist combines advanced medical expertise with compassionate, personalized care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Dallas Pain Experts',
                  'Advanced Pain Relief',
                  'Dallas Pain Specialists',
                  'Dallas Pain Relief',
                  'Dallas Pain Clinic',
                  'Expert Pain Management in Dallas'
                ].map((item, idx) => (
                  <ScrollReveal key={idx} direction="up" delay={idx * 50} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-6 h-6 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <span className="text-slate-800 font-semibold text-sm">{item}</span>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>

            {/* Right Video */}
            <ScrollReveal direction="left" delay={200} className="lg:w-1/2 relative w-full">
               <div 
                 className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group border border-slate-100 cursor-pointer"
                 onClick={handlePlayPause}
               >
                 <video 
                   ref={videoRef}
                   src="/2.mp4" 
                   playsInline
                   loop
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 {!isPlaying && (
                   <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                     <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                       <Play className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 ml-1" fill="currentColor" />
                     </div>
                   </div>
                 )}
               </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Second Feature Block */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Image */}
            <ScrollReveal direction="right" className="lg:w-1/2 w-full">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[4/3] border border-slate-200">
                <img src="/pain-management-dallas-3d-new.jpg" alt="Advanced 3D Spine and Pain Management" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>

            {/* Right Checkboxes */}
            <ScrollReveal direction="left" delay={200} className="lg:w-1/2">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Key Patient Commitments</h3>
              <div className="flex flex-col space-y-4">
                {[
                  'Expert Pain Treatment, Lasting Relief',
                  'Trusted Results, Proven Outcomes',
                  'Specialized Pain Management, Dallas',
                  'Advanced Spine Care, Dallas Experts',
                  'Comprehensive Pain Management, Dallas'
                ].map((item, idx) => (
                  <ScrollReveal key={idx} direction="up" delay={idx * 50} className="flex items-center gap-4 p-3.5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-7 h-7 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <span className="text-slate-800 font-semibold text-base">{item}</span>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
            
          </div>
        </div>
      </section>

      {/* Premium 3D Animated CTA Banner */}
      <section className="py-24 relative overflow-hidden bg-[#0d1e36]">
        {/* Animated Gradient Background Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-[#1a4b82] rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-[#0c6b7a] rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite_reverse]" />
        </div>

        {/* Constellation Particle Layer */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="constellation" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
                  {/* Nodes */}
                  <circle cx="40" cy="40" r="2" fill="#7dd3fc" className="animate-[pulse_3s_ease-in-out_infinite]" />
                  <circle cx="220" cy="80" r="3" fill="#bae6fd" className="animate-[pulse_4s_ease-in-out_infinite]" />
                  <circle cx="120" cy="200" r="1.5" fill="#38bdf8" />
                  <circle cx="260" cy="240" r="2.5" fill="#7dd3fc" className="animate-[pulse_5s_ease-in-out_infinite]" />
                  <circle cx="160" cy="140" r="1" fill="#e0f2fe" />
                  
                  {/* Connecting Lines */}
                  <line x1="40" y1="40" x2="160" y2="140" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.4" />
                  <line x1="220" y1="80" x2="160" y2="140" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.4" />
                  <line x1="120" y1="200" x2="160" y2="140" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.4" />
                  <line x1="260" y1="240" x2="220" y2="80" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#constellation)" />
            </svg>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal direction="up">
            <div className="bg-[#15345a]/90 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto transform hover:-translate-y-1 transition-transform duration-500 relative overflow-hidden">
              
              {/* Internal subtle glow for the card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left relative z-10">
                {/* Medical Cross Icon block */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
                  <Plus className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={3} />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-white mb-3 tracking-tight">
                    Experienced Pain Specialist in Dallas
                  </h2>
                  <p className="text-blue-50 text-sm sm:text-base md:text-lg max-w-2xl font-light">
                    Our doctors at the Spine & Pain Institute of Texas cover a comprehensive range of specialties in pain management and spine care.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0 w-full lg:w-auto relative z-10">
                <Link 
                  to="/contact-us" 
                  className="group relative flex items-center justify-center overflow-hidden rounded bg-white px-8 py-4 font-bold text-[#15345a] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)] w-full sm:w-auto"
                >
                  <span className="flex items-center gap-2 relative z-10 text-[15px]">
                    <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                    Contact Us Now
                  </span>
                  {/* Subtle shine effect on button */}
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-15deg)_translateX(-150%)] group-hover:duration-700 group-hover:[transform:skew(-15deg)_translateX(150%)] z-0">
                    <div className="relative h-full w-10 bg-[#15345a]/10" />
                  </div>
                </Link>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
