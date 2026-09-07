import { Link } from '@tanstack/react-router';
import { ChevronRight, ChevronLeft, Check, Heart, Shield, Award, Calendar, Phone, ArrowUpRight, Clock, Star, Sparkles } from 'lucide-react';
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

// Custom counter with intersection observer
function AnimatedCounter({ end, duration = 2200 }: { end: number, duration?: number }) {
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

const heroSlides = [
  {
    url: '/hero-slide-1.jpg',
    tag: 'Double Board-Certified Care',
    title: 'Advanced Spine & Pain Institute of Texas',
    desc: 'Providing personalized, state-of-the-art pain management treatments in Dallas under Dr. Pritesh Patel, DO.'
  },
  {
    url: '/hero-slide-2.jpg',
    tag: 'Precision Interventional Suite',
    title: 'State-of-the-Art Image Guided Relief',
    desc: 'Targeted spine and joint procedures designed for rapid, long-lasting pain reduction without major surgery.'
  },
  {
    url: '/hero-slide-3.jpg',
    tag: 'Expert Anatomical Consultation',
    title: 'Personalized Diagnostic Evaluation',
    desc: 'Dr. Pritesh Patel, DO takes the time to thoroughly explain your spinal condition and custom treatment plan.'
  },
  {
    url: '/hero-slide-4.jpg',
    tag: 'Active Lifestyle & Restored Vitality',
    title: 'Regain Comfort & Mobility',
    desc: 'Dedicated to helping Dallas patients overcome chronic back, neck, and nerve pain to live full, active lives.'
  }
];

const conditions = [
  { name: 'Pain Management', icon: PainManagementIcon, route: '/pain-management', desc: 'Comprehensive interventional treatments tailored to your pain.' },
  { name: 'Back Pain', icon: BackPainIcon, route: '/back-pain', desc: 'Targeted relief for upper and mid-spine discomfort.' },
  { name: 'Lower Back Pain', icon: LowerBackPainIcon, route: '/lower-back-pain', desc: 'Specialized care for lumbar disc & muscle pain.' },
  { name: 'Neck Pain', icon: NeckPainIcon, route: '/neck-pain', desc: 'Expert diagnosis and therapy for cervical spine issues.' },
  { name: 'Headaches', icon: HeadachesIcon, route: '/headaches', desc: 'Interventional therapies for chronic migraines & tension.' },
  { name: 'Sciatica', icon: SciaticaIcon, route: '/sciatica', desc: 'Relief for radiating sciatic nerve pressure & leg pain.' },
  { name: 'Neuropathy', icon: NeuropathyIcon, route: '/neuropathy', desc: 'Advanced care for nerve tingling, numbness & burning.' },
  { name: 'Leg Pain', icon: LegPainIcon, route: '/leg-pain', desc: 'Comprehensive lower extremity nerve and vascular care.' },
  { name: 'Face Pain', icon: FacePainIcon, route: '/face-pain', desc: 'Specialized treatment for trigeminal neuralgia & facial pain.' },
  { name: 'Knee Pain', icon: KneePainIcon, route: '/knee-pain', desc: 'Non-surgical joint procedures & pain restoration.' },
];

export function Home() {
  const [hoveredCondition, setHoveredCondition] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Auto-advance slider every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Real-time 3D parallax scroll listener
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ─── 1. EDITORIAL 3D ANIMATED HERO SECTION ─── */}
      <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-[#0b192b] text-white">
        
        {/* 3D Scroll Parallax Background Container */}
        <div 
          className="absolute inset-0 z-0 overflow-hidden transition-transform duration-150 ease-out will-change-transform"
          style={{
            transform: `translate3d(0, ${scrollY * 0.2}px, 0)`,
          }}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={slide.url}
              className={`absolute inset-0 transition-all duration-1000 ease-out transform ${
                index === activeSlide 
                  ? 'opacity-70 scale-100 z-10' 
                  : 'opacity-0 scale-[1.03] z-0 pointer-events-none'
              }`}
            >
              <img 
                src={slide.url} 
                alt={slide.title} 
                loading={index === 0 ? "eager" : "lazy"}
                decoding={index === 0 ? "sync" : "async"}
                {...(index === 0 ? { fetchpriority: "high" } : {})}
                width="1920"
                height="1080"
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}

          {/* Premium Medical Gradient Overlay & Ambient Lighting */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b192b] via-[#0b192b]/85 to-[#0b192b]/35 z-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b192b] via-transparent to-[#0b192b]/50 z-20 pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 lg:px-12 relative z-20 mt-2 sm:mt-6">
          <div className="max-w-3xl">
            
            {/* Dynamic Active Tag / Eyebrow */}
            <div className="animate-stagger-1 mb-3 sm:mb-4 inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/35 px-3.5 py-1.5 rounded-full text-teal-300 text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-500 shadow-xs">
              <Shield className="w-3.5 h-3.5 text-teal-300 shrink-0" />
              <span>{heroSlides[activeSlide].tag}</span>
            </div>
            
            {/* Main Editorial Heading */}
            <h1 className="animate-stagger-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-serif leading-[1.12] text-white mb-4 sm:mb-6 tracking-tight">
              <span>
                Advanced Spine &amp; <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-teal-300 to-sky-200">
                  Pain Institute of Texas
                </span>
              </span>
            </h1>
            
            {/* Lead Supporting Content */}
            <p className="animate-stagger-3 text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              {heroSlides[activeSlide].desc}
            </p>
            
            {/* CTAs */}
            <div className="animate-stagger-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <a 
                href="#appointment" 
                className="group bg-teal-500 hover:bg-teal-400 text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 text-center uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <span>Book Appointment</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a 
                href="tel:4693130040" 
                className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 backdrop-blur-md text-center uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-teal-300" />
                <span>Call (469) 313-0040</span>
              </a>
            </div>

            {/* Micro Highlights Feature Row (Responsive Stacking for Mobile) */}
            <div className="animate-stagger-5 pt-6 sm:pt-8 border-t border-white/15 flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-4 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Same-Day Consultations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-teal-400 shrink-0" />
                <span>LOP &amp; Auto Accidents Accepted</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Non-Surgical Interventions</span>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Hero Slider Controls Bar */}
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-6 lg:right-12 z-30 flex items-center gap-3 sm:gap-4 bg-slate-900/85 backdrop-blur-md border border-white/15 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-2xl shadow-2xl">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Hero Slide"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 hover:bg-teal-500 text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Dots & Progress */}
          <div className="flex items-center gap-1.5 sm:gap-2 px-1">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === activeSlide 
                    ? 'w-6 sm:w-7 h-2 sm:h-2.5 bg-teal-400 shadow-md shadow-teal-400/50' 
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Hero Slide"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 hover:bg-teal-500 text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Counter Display */}
          <div className="text-xs font-bold text-slate-300 ml-1 tracking-wider border-l border-white/15 pl-3 sm:pl-4 hidden sm:block">
            0{activeSlide + 1} <span className="text-slate-500 font-normal">/ 0{heroSlides.length}</span>
          </div>
        </div>
      </section>

      {/* ─── 2. ASYMMETRIC 3D INTRO SECTION ─── */}
      <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Image Column with 3-Layer 3D Scroll Depth Composition */}
            <div className="lg:w-1/2 relative w-full group">
              
              {/* Back Layer: Soft Background Glow & Decorative Border Frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-teal-500/20 rounded-3xl -z-10 hidden sm:block transition-transform duration-700 group-hover:scale-102" />
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl -z-20 pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl -z-20 pointer-events-none" />

              {/* Middle Layer: Main 3D Medical Holographic Image with Subtle Parallax Tilt */}
              <div 
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/60 border border-slate-200/90 aspect-[4/3] sm:aspect-[16/11] transition-all duration-700 ease-out will-change-transform"
                style={{
                  transform: `perspective(1000px) translate3d(0, ${Math.sin(scrollY * 0.002) * 4}px, 0) scale(${1 + Math.min(scrollY * 0.00008, 0.03)})`,
                }}
              >
                <img 
                  src="/pain-management-dallas-consult.jpg" 
                  alt="Pain Management Dallas - Expert Spine Consultation" 
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="550"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>

              {/* Front Layer: Overlapping Glassmorphism Floating Badge with Independent Motion */}
              <div 
                className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 z-20 bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-xs animate-float hidden sm:block transition-transform duration-500"
                style={{
                  transform: `translate3d(0, ${-Math.sin(scrollY * 0.003) * 6}px, 0)`,
                }}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 border border-teal-500/20 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm tracking-tight">Top Rated Clinic</h4>
                    <p className="text-slate-500 text-xs mt-0.5 font-medium">Under Dr. Pritesh Patel, DO</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Content Column */}
            <div className="lg:w-1/2 relative z-10">
              <span className="text-teal-600 font-bold uppercase tracking-widest text-xs sm:text-sm block mb-3">
                Dallas Pain Management Center
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 leading-tight mb-6">
                Pain Management Dallas <br />
                <span className="text-teal-600">– Spine &amp; Pain Institute of Texas</span>
              </h2>

              <p className="text-slate-600 text-lg font-medium mb-6">
                Discover personalized, expert pain relief.
              </p>

              <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  At Spine &amp; Pain Institute of Texas, we specialize in comprehensive pain management services for the Dallas, TX, community and beyond.
                </p>
                <p>
                  Under the expert guidance of Dr. Pritesh Patel, DO, a double board-certified pain management specialist in Dallas, our team is dedicated to helping patients achieve a pain-free, healthier life. We believe in a personalized, patient-centered approach to care.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  to="/about-us" 
                  className="inline-flex items-center bg-[#0b192b] hover:bg-teal-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 gap-2"
                >
                  <span>Read More Details</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                
                <a 
                  href="tel:4693130040" 
                  className="inline-flex items-center text-slate-700 hover:text-teal-600 font-bold text-xs uppercase tracking-wider px-4 py-3 gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-600" />
                  <span>(469) 313-0040</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3. CONDITIONS / PAIN AREAS GRID ─── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-400 font-bold uppercase tracking-widest text-xs block mb-2">
              Specialized Care Areas
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight mb-4">
              Conditions We Treat
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Explore advanced non-surgical and interventional treatments for acute and chronic pain.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {conditions.map((condition, index) => {
              const Icon = condition.icon;
              const isHovered = hoveredCondition === index;

              return (
                <Link
                  key={index}
                  to={condition.route}
                  onMouseEnter={() => setHoveredCondition(index)}
                  onMouseLeave={() => setHoveredCondition(null)}
                  className={`group relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                    isHovered 
                      ? 'bg-gradient-to-b from-teal-600 to-teal-700 border-teal-400 shadow-xl shadow-teal-500/20 -translate-y-1.5' 
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div>
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                      isHovered ? 'bg-white/20 text-white scale-110 shadow-lg shadow-teal-500/30' : 'bg-teal-500/15 border border-teal-400/20 text-teal-300'
                    }`}>
                      <Icon className="w-14 h-14 transition-transform duration-300" active={isHovered} />
                    </div>

                    {/* Title */}
                    <h3 className={`font-serif text-lg font-bold mb-2 transition-colors ${
                      isHovered ? 'text-white' : 'text-slate-100'
                    }`}>
                      {condition.name}
                    </h3>

                    <p className={`text-xs leading-relaxed mb-6 transition-colors ${
                      isHovered ? 'text-teal-50' : 'text-slate-400'
                    }`}>
                      {condition.desc}
                    </p>
                  </div>

                  {/* CTA Link Arrow */}
                  <div className={`flex items-center justify-between text-xs font-bold uppercase tracking-wider transition-colors pt-4 border-t ${
                    isHovered ? 'border-white/20 text-white' : 'border-white/10 text-teal-400'
                  }`}>
                    <span>More Details</span>
                    <ArrowUpRight className={`w-4 h-4 transition-transform duration-200 ${isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''}`} />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── 4. WHY CHOOSE US — 3D ANIMATED MEDICAL PRESENTATION ─── */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-100 overflow-hidden relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Side: 3D Depth Layered Medical Image & Floating Card */}
            <div className="lg:w-1/2 relative w-full group">
              {/* Back Decorative Frame & Glow */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-teal-500/25 rounded-3xl -z-10 hidden sm:block transition-transform duration-700 group-hover:scale-102 group-hover:-rotate-1" />
              <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl -z-20 pointer-events-none" />

              {/* Middle Layer: Image Container with 3D Parallax Tilt */}
              <div 
                className="bg-white p-3.5 sm:p-4 rounded-3xl border border-slate-200/80 shadow-2xl relative z-10 overflow-hidden transition-all duration-700 ease-out"
                style={{
                  transform: `perspective(1000px) translate3d(0, ${Math.sin(scrollY * 0.002) * 5}px, 0)`,
                }}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/11]">
                  <img 
                    src="/pain-management-dallas-3d-new.jpg" 
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="550"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    alt="Pain Management Dallas 3D Medical Suite" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b192b]/85 via-transparent to-transparent" />
                </div>
              </div>

              {/* Front Layer: Floating Glassmorphism Quote & Badge Card */}
              <div 
                className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-30 transition-transform duration-500 group-hover:-translate-y-1"
              >
                <div className="bg-[#0b192b]/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/15 text-white shadow-2xl">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-teal-300 font-bold uppercase tracking-wider text-[11px] sm:text-xs block">
                      Dallas Medical Excellence
                    </span>
                    <div className="flex items-center gap-1 bg-teal-500/20 px-2.5 py-0.5 rounded-full border border-teal-400/30">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="text-[10px] font-bold text-amber-300">4.7 / 5.0</span>
                    </div>
                  </div>
                  <p className="font-serif text-lg sm:text-xl font-bold leading-snug text-white">
                    "Restoring function and quality of life through individualized spine care."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Content & Interactive 3D Hover Checklist */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <span className="text-teal-600 font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
                Why Choose Spine &amp; Pain Institute of Texas
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-4 tracking-tight leading-tight">
                Pain Management Dallas
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-medium mb-8">
                Why Choose Spine and Pain Institute of Texas?
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                  <div key={idx} className="group/item flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-teal-500/40 hover:-translate-y-0.5 transition-all duration-200">
                    <div className="w-7 h-7 rounded-xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center shrink-0 group-hover/item:bg-teal-500 group-hover/item:text-white transition-all duration-200">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="text-slate-800 font-semibold text-xs sm:text-sm leading-snug group-hover/item:text-teal-700 transition-colors">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 5. STATISTICS BAND ─── */}
      <section className="bg-slate-50 py-20 border-b border-slate-200/60">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-slate-900 mb-2">
              We Take <span className="text-teal-600">the Time</span> You Need
            </h2>
            <p className="text-slate-500 text-base">
              Dedicated pain clinic with over 11 years of clinical excellence in Texas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Satisfied Patients', end: 5000, suffix: '+' },
              { label: 'Years of Experience', end: 11, suffix: '+' },
              { label: 'Award-Winning Providers', end: 5, suffix: '+' },
              { label: 'Insurance Company Tie-Ups', end: 50, suffix: '+' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 text-center shadow-md border border-slate-100 flex flex-col items-center justify-center">
                <div className="text-4xl lg:text-5xl font-serif font-bold text-teal-600 mb-2 tracking-tight">
                  <AnimatedCounter end={stat.end} />{stat.suffix}
                </div>
                <div className="text-slate-600 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 6. DOCTORS / TEAM SECTION (3D ANIMATED MEDICAL LEADERSHIP PRESENTATION) ─── */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 relative overflow-hidden">
        {/* Subtle Background 3D Grid & Ambient Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Content Column */}
            <div className="lg:w-7/12">
              <span className="text-teal-600 font-bold uppercase tracking-widest text-xs sm:text-sm block mb-3">
                Medical Leadership &amp; Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 leading-tight mb-6">
                Experienced Pain Management <br />
                <span className="text-teal-600">Doctors Dallas</span>
              </h2>

              <p className="text-slate-700 text-lg font-medium mb-6 leading-relaxed">
                Your trusted partner for personalized, pain-free living in Texas
              </p>

              <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  At Spine &amp; Pain Institute of Texas, we prioritize the well-being of our patients. We understand that searching for pain specialists or pain clinics in Dallas can be a daunting task.
                </p>
                <p>
                  Dr. Pritesh Patel, DO, takes a compassionate, listener-first approach to diagnosing the root cause of discomfort, creating customized treatment plans that prioritize non-surgical interventional options.
                </p>
              </div>

              {/* 3D Highlight Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-teal-500/40 hover:shadow-md transition-all duration-300">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-2 font-bold">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">Listener-First</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5 font-medium">Compassionate Care</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-teal-500/40 hover:shadow-md transition-all duration-300">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-2 font-bold">
                    <Shield className="w-4 h-4" />
                  </div>
                  <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">Non-Surgical</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5 font-medium">Interventional Focus</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-teal-500/40 hover:shadow-md transition-all duration-300">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-2 font-bold">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">Tailored Plans</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5 font-medium">Root Cause Relief</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/dr-pritesh-patel" 
                  className="inline-flex items-center bg-[#0b192b] hover:bg-teal-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 gap-2"
                >
                  <span>Meet Dr. Pritesh Patel</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <a 
                  href="#appointment" 
                  className="inline-flex items-center bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 gap-2"
                >
                  <span>Schedule Consultation</span>
                  <Calendar className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Doctor Photo Column with 3D Depth Studio Card */}
            <div className="lg:w-5/12 relative w-full group">
              
              {/* Back Layer: Decorative 3D Frame & Glow */}
              <div className="absolute -top-5 -right-5 w-full h-full border-2 border-teal-500/25 rounded-[2.5rem] -z-10 hidden sm:block transition-transform duration-700 group-hover:scale-102 group-hover:rotate-1" />
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl -z-20 pointer-events-none" />

              {/* Middle Layer: 3D Animated Studio Lighting Card */}
              <div 
                className="bg-gradient-to-br from-[#0b192b] via-[#0f243b] to-[#071322] p-4 sm:p-5 rounded-[2.5rem] border border-teal-500/30 shadow-2xl shadow-slate-900/40 relative z-10 overflow-hidden transition-all duration-700 ease-out"
                style={{
                  transform: `perspective(1000px) translate3d(0, ${Math.sin(scrollY * 0.002) * 5}px, 0)`,
                }}
              >
                {/* Internal Studio Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                
                {/* Top Badge */}
                <div className="absolute top-6 right-6 z-20 bg-teal-500/20 backdrop-blur-md border border-teal-400/30 text-teal-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3 h-3 text-teal-300" />
                  <span>Lead Specialist</span>
                </div>

                <div className="relative z-10 pt-2 overflow-hidden rounded-2xl">
                  <img 
                    src="https://texasspinepain.com/wp-content/uploads/2024/11/Dr-Pritesh-Patel.png" 
                    alt="Dr. Pritesh Patel" 
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="750"
                    className="w-full h-auto rounded-2xl object-cover group-hover:scale-103 transition-transform duration-700 drop-shadow-2xl" 
                  />
                </div>

                {/* Dark Glassmorphism Doctor Name Badge */}
                <div className="mt-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center shadow-xl relative z-10">
                  <h3 className="font-serif text-2xl font-bold text-white tracking-tight">Dr. Pritesh Patel, DO</h3>
                  <p className="text-teal-300 font-semibold text-xs uppercase tracking-widest mt-1">Interventional Pain Management Specialist</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ─── 7. APPOINTMENT CTA BANNER & FORM ─── */}
      <section className="bg-[#0b192b] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-teal-400 font-bold uppercase tracking-widest text-xs block">
                Direct Appointment Booking
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight">
                Make an Appointment
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Primary care appointments and specialized spine interventions. Fill out the form or reach out directly to our Dallas office.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Direct Phone Line</div>
                    <a href="tel:4693130040" className="text-lg font-bold text-white hover:text-teal-300 transition-colors">(469) 313-0040</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Clinic Hours</div>
                    <div className="text-sm font-medium text-slate-200">Monday – Friday: 8:00 AM – 5:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 bg-white/5 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
              <form onSubmit={(e) => {
                e.preventDefault();
                const btn = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
                if (btn) {
                  btn.innerText = 'Submitting...';
                  btn.disabled = true;
                  setTimeout(() => {
                    btn.innerText = 'Appointment Request Sent!';
                    btn.classList.add('bg-teal-500');
                    e.currentTarget.reset();
                    setTimeout(() => {
                      btn.innerText = 'Send Message';
                      btn.disabled = false;
                      btn.classList.remove('bg-teal-500');
                    }, 3000);
                  }, 1000);
                }
              }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-slate-300 text-xs font-semibold mb-1.5 uppercase tracking-wider">Full Name *</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-white/10 border border-white/15 rounded-xl p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all" />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs font-semibold mb-1.5 uppercase tracking-wider">Mobile Number *</label>
                    <input required type="tel" placeholder="(469) 000-0000" className="w-full bg-white/10 border border-white/15 rounded-xl p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all" />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-slate-300 text-xs font-semibold mb-1.5 uppercase tracking-wider">Email Address *</label>
                    <input required type="email" placeholder="john@example.com" className="w-full bg-white/10 border border-white/15 rounded-xl p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all" />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-slate-300 text-xs font-semibold mb-1.5 uppercase tracking-wider">Subject / Reason *</label>
                    <input required type="text" placeholder="Back Pain / Auto Accident Consultation" className="w-full bg-white/10 border border-white/15 rounded-xl p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all" />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-slate-300 text-xs font-semibold mb-1.5 uppercase tracking-wider">Message Details</label>
                    <textarea rows={3} placeholder="Tell us briefly about your symptoms..." className="w-full bg-white/10 border border-white/15 rounded-xl p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all resize-none"></textarea>
                  </div>
                </div>

                <div className="mt-6">
                  <button type="submit" className="w-full bg-teal-500 hover:bg-teal-400 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-lg shadow-teal-500/25">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* ─── 8. TESTIMONIALS SLIDER ─── */}
      <TestimonialSlider />
      
      {/* ─── 9. INSURANCE LOGOS MARQUEE ─── */}
      <section className="py-20 bg-white overflow-hidden border-t border-slate-100">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 22s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="container mx-auto px-4 lg:px-8 text-center mb-12">
          <span className="text-teal-600 font-bold uppercase tracking-widest text-xs block mb-2">
            Coverage &amp; Partnerships
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-900">
            Accepted Insurance Plans
          </h2>
        </div>

        <div className="relative flex overflow-x-hidden w-full group mb-10">
          <div className="flex animate-marquee items-center gap-12 md:gap-20 whitespace-nowrap min-w-max px-6">
            <img src="/insurance1.jpg" alt="Insurance Partner 1" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance2.jpg" alt="Insurance Partner 2" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance3.jpg" alt="Insurance Partner 3" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance5.jpg" alt="Insurance Partner 4" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance6.jpg" alt="Insurance Partner 5" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance9.jpg" alt="Galaxy Health Insurance" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance14.jpg" alt="First Health Network" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance16.jpg" alt="Coventry Health Care" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance18.jpg" alt="Insurance Partner 18" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance20.jpg" alt="Insurance Partner 20" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance21.jpg" alt="Insurance Partner 21" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            
            {/* Duplicates for infinite scrolling */}
            <img src="/insurance1.jpg" alt="Insurance Partner 1" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance2.jpg" alt="Insurance Partner 2" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance3.jpg" alt="Insurance Partner 3" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance5.jpg" alt="Insurance Partner 4" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance6.jpg" alt="Insurance Partner 5" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance9.jpg" alt="Galaxy Health Insurance" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance14.jpg" alt="First Health Network" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance16.jpg" alt="Coventry Health Care" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance18.jpg" alt="Insurance Partner 18" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance20.jpg" alt="Insurance Partner 20" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/insurance21.jpg" alt="Insurance Partner 21" className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/insurance-benefits" 
            className="inline-flex items-center text-teal-600 hover:text-teal-700 border border-teal-600/30 hover:bg-teal-50 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors gap-2"
          >
            <span>See All Insurance Benefits</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
