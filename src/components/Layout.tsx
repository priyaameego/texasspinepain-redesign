import { useState, useEffect, type ReactNode } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { 
  Phone, Printer, Mail, 
  ChevronDown, Star, Menu, X, ArrowUp,
  Clock, MapPin, ChevronRight, Sparkles, ShieldCheck
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function Layout({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          setShowScrollTop(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) setActiveDropdown(null);
    else setActiveDropdown(name);
  };

  const isTransparent = !scrolled && isHome;

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-slate-50/50">
      
      {/* ─── Fixed Header Wrapper ─── */}
      <div className="fixed top-0 w-full z-50 flex flex-col transition-all duration-300">

        {/* Slim Editorial Announcement Bar */}
        {showAlert && (
          <div className="bg-[#0b192b] text-white pl-3 pr-9 py-2 text-xs flex justify-center items-center relative border-b border-white/10">
            <div className="container mx-auto flex items-center justify-center gap-2 text-center">
              <span className="hidden sm:inline-flex bg-teal-500/20 text-teal-300 font-bold px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wider items-center gap-1 shrink-0">
                <Sparkles className="w-3 h-3 text-teal-300" /> Board-Certified Care
              </span>
              <span className="font-medium tracking-wide text-slate-200 text-[11px] sm:text-xs md:text-sm text-center leading-snug">
                <span className="sm:hidden">Specialized Spine &amp; Pain Care in Dallas &bull; LOP Accepted</span>
                <span className="hidden sm:inline">Specialized Spine &amp; Pain Care in Dallas &bull; Same-Day Appointments &amp; Letter of Protection (LOP) Accepted</span>
              </span>
              <a href="tel:4693130040" className="hidden lg:inline-flex items-center text-teal-300 hover:text-white font-bold ml-2 underline text-xs shrink-0">
                Call: (469) 313-0040
              </a>
            </div>
            <button 
              onClick={() => setShowAlert(false)} 
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-all shrink-0"
              aria-label="Close alert"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Main Sticky Header */}
        <header 
          className={`w-full transition-all duration-300 ${
            isTransparent 
              ? 'bg-gradient-to-b from-[#0b192b]/80 via-[#0b192b]/40 to-transparent py-5 backdrop-blur-[2px]' 
              : 'bg-white/95 backdrop-blur-md py-3.5 shadow-[0_4px_25px_rgba(0,0,0,0.06)] border-b border-gray-100'
          }`}
        >
          <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group z-50">
              <div className="relative">
                <img 
                  src="https://texasspinepain.com/wp-content/uploads/2024/11/logo.webp" 
                  alt="Spine & Pain Institute of Texas" 
                  fetchPriority="high"
                  loading="eager"
                  width="200"
                  height="64"
                  className={`transition-all duration-300 object-contain ${
                    scrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16'
                  } ${isTransparent ? 'brightness-0 invert drop-shadow-md' : ''}`}
                />
              </div>
            </Link>

            {/* ─── Desktop Navigation ─── */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">

              <Link 
                to="/" 
                className={`font-semibold transition-colors text-[14px] uppercase tracking-wider relative py-1 ${
                  isTransparent 
                    ? 'text-white hover:text-teal-300' 
                    : 'text-slate-800 hover:text-teal-600'
                } ${location.pathname === '/' ? (isTransparent ? 'text-teal-300 font-bold' : 'text-teal-600 font-bold') : ''}`}
              >
                Home
              </Link>

              <Link 
                to="/about-us" 
                className={`font-semibold transition-colors text-[14px] uppercase tracking-wider relative py-1 ${
                  isTransparent 
                    ? 'text-white hover:text-teal-300' 
                    : 'text-slate-800 hover:text-teal-600'
                } ${location.pathname === '/about-us' ? (isTransparent ? 'text-teal-300 font-bold' : 'text-teal-600 font-bold') : ''}`}
              >
                About
              </Link>

              {/* Dropdown: Meet Doctors */}
              <div className="relative group">
                <span 
                  className={`font-semibold transition-colors text-[14px] uppercase tracking-wider flex items-center gap-1.5 py-2 cursor-pointer select-none ${
                    isTransparent ? 'text-white group-hover:text-teal-300' : 'text-slate-800 group-hover:text-teal-600'
                  }`}
                >
                  Meet Doctors 
                  <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                </span>
                <div className="absolute left-0 top-full pt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 text-slate-800 py-2.5 flex flex-col overflow-hidden">
                    <Link 
                      to="/dr-pritesh-patel" 
                      className="px-5 py-3 hover:bg-teal-50/80 hover:text-teal-700 transition-colors font-medium text-sm flex items-center justify-between"
                    >
                      <span>Dr. Pritesh Patel, DO</span>
                      <ChevronRight className="w-3.5 h-3.5 text-teal-600" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Dropdown: Services */}
              <div className="relative group">
                <Link 
                  to="/services" 
                  className={`font-semibold transition-colors text-[14px] uppercase tracking-wider flex items-center gap-1.5 py-2 ${
                    isTransparent ? 'text-white group-hover:text-teal-300' : 'text-slate-800 group-hover:text-teal-600'
                  }`}
                >
                  Services 
                  <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                </Link>
                <div className="absolute left-0 top-full pt-2 w-[540px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 z-50">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 text-slate-800 p-4 grid grid-cols-2 gap-4 overflow-hidden">
                    
                    {/* Col 1: Primary Programs & Claims */}
                    <div className="space-y-1">
                      <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-teal-600 bg-teal-50 rounded-lg mb-2">
                        Specialized Programs &amp; Claims
                      </div>
                      <Link to="/services" className="px-3 py-2 hover:bg-teal-50/80 hover:text-teal-700 font-bold text-xs rounded-lg flex items-center justify-between transition-colors">
                        <span>All Services Overview</span>
                        <ChevronRight className="w-3.5 h-3.5 text-teal-600" />
                      </Link>
                      <Link to="/workers-compensation" className="px-3 py-2 hover:bg-slate-50 hover:text-teal-700 font-semibold text-xs text-slate-700 rounded-lg flex items-center justify-between transition-colors">
                        <span>Workers' Compensation Care</span>
                        <ChevronRight className="w-3 h-3 text-slate-400" />
                      </Link>
                      <Link to="/motor-vehicle-accidents" className="px-3 py-2 hover:bg-slate-50 hover:text-teal-700 font-medium text-xs text-slate-600 rounded-lg block transition-colors">
                        Motor Vehicle Accidents
                      </Link>
                      <Link to="/letter-of-protection" className="px-3 py-2 hover:bg-slate-50 hover:text-teal-700 font-medium text-xs text-slate-600 rounded-lg block transition-colors">
                        Letter of Protection (LOP)
                      </Link>
                      <Link to="/truck-accidents" className="px-3 py-2 hover:bg-slate-50 hover:text-teal-700 font-medium text-xs text-slate-600 rounded-lg block transition-colors">
                        Truck &amp; 18-Wheeler Accidents
                      </Link>
                      <Link to="/insurance-benefits" className="px-3 py-2 hover:bg-slate-50 hover:text-teal-700 font-medium text-xs text-slate-600 rounded-lg block transition-colors">
                        Insurance &amp; Benefits
                      </Link>
                    </div>

                    {/* Col 2: Interventional Treatments & Conditions */}
                    <div className="space-y-1">
                      <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-teal-600 bg-teal-50 rounded-lg mb-2">
                        Condition Treatments
                      </div>
                      <Link to="/pain-management" className="px-3 py-2 hover:bg-slate-50 hover:text-teal-700 font-medium text-xs text-slate-600 rounded-lg block transition-colors">
                        Chronic Pain Management
                      </Link>
                      <Link to="/back-pain" className="px-3 py-2 hover:bg-slate-50 hover:text-teal-700 font-medium text-xs text-slate-600 rounded-lg block transition-colors">
                        Back &amp; Lower Back Pain
                      </Link>
                      <Link to="/neck-pain" className="px-3 py-2 hover:bg-slate-50 hover:text-teal-700 font-medium text-xs text-slate-600 rounded-lg block transition-colors">
                        Neck Pain Treatment
                      </Link>
                      <Link to="/sciatica" className="px-3 py-2 hover:bg-slate-50 hover:text-teal-700 font-medium text-xs text-slate-600 rounded-lg block transition-colors">
                        Sciatica &amp; Leg Relief
                      </Link>
                      <Link to="/neuropathy" className="px-3 py-2 hover:bg-slate-50 hover:text-teal-700 font-medium text-xs text-slate-600 rounded-lg block transition-colors">
                        Neuropathy &amp; Nerve Pain
                      </Link>
                      <Link to="/headaches" className="px-3 py-2 hover:bg-slate-50 hover:text-teal-700 font-medium text-xs text-slate-600 rounded-lg block transition-colors">
                        Headaches &amp; Migraines
                      </Link>
                      <Link to="/knee-pain" className="px-3 py-2 hover:bg-slate-50 hover:text-teal-700 font-medium text-xs text-slate-600 rounded-lg block transition-colors">
                        Knee &amp; Joint Pain
                      </Link>
                    </div>

                  </div>
                </div>
              </div>

              {/* Direct Link: Insurance */}
              <Link 
                to="/insurance-benefits" 
                className={`font-semibold transition-colors text-[13px] xl:text-[14px] uppercase tracking-wider relative py-1 whitespace-nowrap ${
                  isTransparent 
                    ? 'text-white hover:text-teal-300' 
                    : 'text-slate-800 hover:text-teal-600'
                } ${location.pathname === '/insurance-benefits' ? (isTransparent ? 'text-teal-300 font-bold' : 'text-teal-600 font-bold') : ''}`}
              >
                Insurance
              </Link>

              {/* Direct Link: FAQ's */}
              <Link 
                to="/frequently-asked-questions" 
                className={`font-semibold transition-colors text-[13px] xl:text-[14px] uppercase tracking-wider relative py-1 whitespace-nowrap ${
                  isTransparent 
                    ? 'text-white hover:text-teal-300' 
                    : 'text-slate-800 hover:text-teal-600'
                } ${location.pathname === '/frequently-asked-questions' ? (isTransparent ? 'text-teal-300 font-bold' : 'text-teal-600 font-bold') : ''}`}
              >
                FAQ's
              </Link>

              {/* Direct Link: Contact Us */}
              <Link 
                to="/contact-us" 
                className={`font-semibold transition-colors text-[13px] xl:text-[14px] uppercase tracking-wider relative py-1 whitespace-nowrap ${
                  isTransparent 
                    ? 'text-white hover:text-teal-300' 
                    : 'text-slate-800 hover:text-teal-600'
                } ${location.pathname === '/contact-us' ? (isTransparent ? 'text-teal-300 font-bold' : 'text-teal-600 font-bold') : ''}`}
              >
                Contact Us
              </Link>

              {/* Appointment CTA */}
              <a
                href="#appointment"
                className={`px-6 py-2.5 rounded-full font-bold transition-all uppercase tracking-wider text-xs shadow-sm flex items-center justify-center gap-2 ${
                  isTransparent 
                    ? 'bg-teal-500 hover:bg-teal-400 text-white shadow-teal-500/20 shadow-lg border border-teal-400/40' 
                    : 'bg-teal-600 hover:bg-teal-700 text-white shadow-teal-600/20 shadow-md'
                }`}
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors focus:outline-none z-[60] ${
                isTransparent && !mobileMenuOpen ? 'text-white hover:bg-white/10' : 'text-slate-800 hover:bg-slate-100'
              }`}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </header>
      </div>

      {/* ─── Mobile Drawer Backdrop ─── */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`lg:hidden fixed inset-0 z-[55] bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* ─── Mobile Drawer Panel ─── */}
      <nav
        className={`lg:hidden fixed top-0 right-0 h-full w-[85vw] max-w-sm z-[60] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#0b192b] text-white shrink-0">
          <img
            src="https://texasspinepain.com/wp-content/uploads/2024/11/logo.webp"
            alt="Spine & Pain Institute of Texas"
            className="h-9 brightness-0 invert object-contain"
            width="150"
            height="36"
            loading="lazy"
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto py-3">
          <ul className="flex flex-col">
            <li>
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-6 py-3.5 font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-700 border-b border-slate-100 transition-colors uppercase tracking-wide text-xs"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-6 py-3.5 font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-700 border-b border-slate-100 transition-colors uppercase tracking-wide text-xs"
              >
                About Us
              </Link>
            </li>

            {/* Accordion: Meet Doctors */}
            <li className="border-b border-slate-100">
              <button
                onClick={() => toggleDropdown('doctors')}
                className="w-full flex items-center justify-between px-6 py-3.5 font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-700 transition-colors uppercase tracking-wide text-xs"
              >
                Meet Doctors
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'doctors' ? 'rotate-180 text-teal-600' : 'text-slate-400'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 bg-slate-50 ${activeDropdown === 'doctors' ? 'max-h-[300px]' : 'max-h-0'}`}>
                <Link
                  to="/dr-pritesh-patel"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center pl-10 pr-6 py-3 text-slate-700 hover:text-teal-600 font-medium text-xs border-b border-slate-100"
                >
                  Dr. Pritesh Patel, DO
                </Link>
              </div>
            </li>

            {/* Accordion: Services */}
            <li className="border-b border-slate-100">
              <button
                onClick={() => toggleDropdown('services')}
                className="w-full flex items-center justify-between px-6 py-3.5 font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-700 transition-colors uppercase tracking-wide text-xs"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-teal-600' : 'text-slate-400'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 bg-slate-50 ${activeDropdown === 'services' ? 'max-h-[500px]' : 'max-h-0'}`}>
                {[
                  { to: '/services', label: 'All Services Overview', bold: true },
                  { to: '/motor-vehicle-accidents', label: 'Motor Vehicle Accidents', bold: false },
                  { to: '/workers-compensation', label: 'Workers Compensation', bold: false },
                  { to: '/letter-of-protection', label: 'Letter of Protection (LOP)', bold: false },
                  { to: '/truck-accidents', label: 'Truck Accidents', bold: false },
                ].map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center pl-10 pr-6 py-3 hover:text-teal-600 text-xs border-b border-slate-100 transition-colors ${item.bold ? 'font-bold text-teal-700' : 'font-medium text-slate-600'}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>

            {/* Accordion: More */}
            <li className="border-b border-slate-100">
              <button
                onClick={() => toggleDropdown('more')}
                className="w-full flex items-center justify-between px-6 py-3.5 font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-700 transition-colors uppercase tracking-wide text-xs"
              >
                More Information
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'more' ? 'rotate-180 text-teal-600' : 'text-slate-400'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 bg-slate-50 ${activeDropdown === 'more' ? 'max-h-[400px]' : 'max-h-0'}`}>
                {[
                  { to: '/insurance-benefits', label: 'Insurance & Benefits' },
                  { to: '/frequently-asked-questions', label: "FAQ's" },
                  { to: '/contact-us', label: 'Contact Us' },
                ].map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center pl-10 pr-6 py-3 font-medium text-slate-600 hover:text-teal-600 text-xs border-b border-slate-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>

        {/* Drawer Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3 shrink-0">
          <a
            href="#appointment"
            onClick={() => setMobileMenuOpen(false)}
            className="block bg-teal-600 hover:bg-teal-700 text-white text-center px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs transition-colors shadow-md"
          >
            Book Appointment
          </a>
          <a
            href="tel:4693130040"
            className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-800 hover:bg-slate-100 px-6 py-3 rounded-xl font-bold text-xs transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-teal-600" />
            (469) 313-0040
          </a>
        </div>
      </nav>

      {/* ─── Main Content Container ─── */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* ─── Modern Editorial Footer ─── */}
      <footer className="bg-gradient-to-b from-[#0b192b] via-[#081424] to-[#040b14] text-white pt-16 pb-10 border-t border-teal-500/20 relative overflow-hidden">
        {/* Ambient Glow Elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          {/* Pre-Footer Action Banner */}
          <ScrollReveal direction="up" className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-14 border border-white/15 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-300 mb-1">
                <Clock className="w-3.5 h-3.5" /> Immediate Pain Care &amp; Accident Consultations
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-white tracking-tight">
                Need Prompt Spine Care or Auto Injury Evaluation?
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm mt-1">
                Same-Day Emergency Appointments &bull; Letter of Protection (LOP) Accepted &bull; Comprehensive Diagnostics
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="tel:4693130040"
                className="inline-flex items-center bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 mr-2 text-teal-600" />
                (469) 313-0040
              </a>
              <a
                href="#appointment"
                className="inline-flex items-center bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-transform hover:-translate-y-0.5 border border-teal-400/30"
              >
                Book Appointment
              </a>
            </div>
          </ScrollReveal>

          {/* Main 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
            
            {/* Col 1: Brand & Trust */}
            <ScrollReveal direction="up" delay={100} className="lg:col-span-4 space-y-5">
              <Link to="/" className="inline-block">
                <img 
                  src="https://texasspinepain.com/wp-content/uploads/2024/11/logo.webp" 
                  alt="Spine & Pain Institute of Texas" 
                  className="h-14 sm:h-16 brightness-0 invert opacity-95"
                />
              </Link>
              
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-sm">
                Discover personalized, expert pain relief. Located in Dallas, the Spine &amp; Pain Institute of Texas offers exceptional care for a wide range of acute and chronic pain conditions.
              </p>

              {/* Rating Badge */}
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <div className="text-xs text-gray-200">
                  <span className="font-bold text-white">4.7 / 5.0</span> Rating &bull; Patient Trusted
                </div>
              </div>

              <p className="text-xs text-teal-300/90 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-300" />
                Directed by <strong className="text-white font-semibold">Dr. Pritesh Patel, DO</strong>
              </p>
            </ScrollReveal>

            {/* Col 2: Quick Links */}
            <ScrollReveal direction="up" delay={200} className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                {[
                  { name: "Home", to: "/" },
                  { name: "About Us", to: "/about-us" },
                  { name: "Dr. Pritesh Patel", to: "/dr-pritesh-patel" },
                  { name: "Our Services", to: "/services" },
                  { name: "Insurance Benefits", to: "/insurance-benefits" },
                  { name: "FAQs", to: "/frequently-asked-questions" },
                  { name: "Contact Us", to: "/contact-us" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      to={link.to} 
                      className="group flex items-center hover:text-teal-300 transition-colors"
                    >
                      <ChevronRight className="w-3 h-3 text-gray-500 mr-1.5 group-hover:text-teal-300 group-hover:translate-x-1 transition-all" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Col 3: Specialized Care */}
            <ScrollReveal direction="up" delay={300} className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                Specialized Care
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                {[
                  { name: "Motor Vehicle Accidents", to: "/motor-vehicle-accidents" },
                  { name: "Workers' Compensation", to: "/workers-compensation" },
                  { name: "Letter of Protection (LOP)", to: "/letter-of-protection" },
                  { name: "Truck & 18-Wheeler Crashes", to: "/truck-accidents" },
                  { name: "Back & Spine Injury Care", to: "/back-pain" },
                  { name: "Neck Pain & Whiplash", to: "/neck-pain" },
                  { name: "Sciatica & Neuropathy", to: "/sciatica" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      to={item.to} 
                      className="group flex items-center hover:text-teal-300 transition-colors"
                    >
                      <ChevronRight className="w-3 h-3 text-gray-500 mr-1.5 group-hover:text-teal-300 group-hover:translate-x-1 transition-all" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Col 4: Dallas Clinic Contact */}
            <ScrollReveal direction="up" delay={400} className="lg:col-span-3 space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                Dallas Clinic
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-gray-300">
                {/* Phone */}
                <a 
                  href="tel:4693130040" 
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                >
                  <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Phone (Appointments)</div>
                    <div className="font-bold text-white text-sm sm:text-base">469-313-0040</div>
                  </div>
                </a>

                {/* Fax */}
                <div className="flex items-center gap-3 px-2 py-1 text-gray-400 text-xs">
                  <Printer className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>Fax: <strong className="text-gray-200 font-medium">469-313-0041</strong></span>
                </div>

                {/* Email */}
                <a 
                  href="mailto:info@texasspinepain.com" 
                  className="flex items-center gap-3 px-2 py-1 text-gray-300 hover:text-teal-300 transition-colors text-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-teal-300 shrink-0" />
                  <span>info@texasspinepain.com</span>
                </a>

                {/* Address */}
                <div className="flex items-start gap-3 px-2 py-1 text-gray-300 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-teal-300 shrink-0 mt-0.5" />
                  <span>3503 W Wheatland Rd Suite 100,<br />Dallas, TX 75237</span>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-3 px-2 py-1 text-gray-400 text-xs">
                  <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>Mon – Fri: 8:00 AM – 5:00 PM</span>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Bottom Legal Bar */}
          <div className="border-t border-white/10 pt-6 text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left">
              &copy; 2026 Spine &amp; Pain Institute of Texas. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400">
              <a href="#" className="hover:text-teal-300 transition-colors">Privacy Policy</a>
              <span className="text-gray-600">&bull;</span>
              <a href="#" className="hover:text-teal-300 transition-colors">Terms &amp; Conditions</a>
              <span className="text-gray-600">&bull;</span>
              <a href="#" className="hover:text-teal-300 transition-colors">HIPAA Compliance</a>
            </div>
          </div>

        </div>
      </footer>

      {/* ─── Appointment Form Modal ─── */}
      <div id="appointment" className="fixed inset-0 z-[100] hidden target:flex items-center justify-center bg-[#0b192b]/80 backdrop-blur-md p-4 sm:p-6 transition-all duration-500">
        <a href="#" className="absolute inset-0 z-0 cursor-default" aria-label="Close modal background"></a>
        
        {/* Premium Modal Container */}
        <div className="w-full max-w-2xl relative z-10 transform scale-100 animate-[scaleIn_0.3s_ease-out_forwards]">
          {/* Subtle 3D background shadow layer */}
          <div className="absolute inset-0 bg-teal-500/10 rounded-[2rem] transform translate-y-3 translate-x-3 -z-10 blur-lg"></div>
          
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100/80 max-h-[90vh] flex flex-col relative">
            
            {/* Modal Header */}
            <div className="px-8 pt-10 pb-6 relative overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
              <a href="#" className="absolute top-6 right-6 text-slate-400 hover:text-teal-600 transition-all bg-slate-50 hover:bg-teal-50 rounded-full p-2 z-10 hover:-rotate-90 duration-300">
                <X className="w-5 h-5" />
              </a>
              <div className="relative z-10">
                <span className="text-teal-600 font-bold uppercase tracking-widest text-xs flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> Online Booking
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">Request Appointment</h3>
                <p className="text-slate-500 text-sm mt-2 max-w-md">Our clinical team will reach out promptly to confirm your preferred date and time.</p>
              </div>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="px-8 pb-8 overflow-y-auto overflow-x-hidden relative">
              <form onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                if (btn) {
                  const originalText = btn.innerHTML;
                  btn.innerHTML = 'Sending Request...';
                  btn.disabled = true;
                  btn.classList.add('opacity-80');
                  setTimeout(() => {
                    btn.innerHTML = 'Appointment Request Sent!';
                    btn.classList.remove('opacity-80');
                    btn.classList.remove('from-teal-600', 'to-teal-500');
                    btn.classList.add('bg-teal-700', 'from-teal-700', 'to-teal-700');
                    setTimeout(() => {
                      window.location.hash = '';
                      setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                        btn.classList.add('from-teal-600', 'to-teal-500');
                        btn.classList.remove('bg-teal-700', 'from-teal-700', 'to-teal-700');
                        form.reset();
                      }, 500);
                    }, 1500);
                  }, 1000);
                }
              }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  
                  <div className="group">
                    <label className="block text-slate-700 font-bold text-[11px] mb-2 uppercase tracking-widest transition-colors group-focus-within:text-teal-600">
                      Full Name *
                    </label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all hover:bg-white shadow-sm" />
                  </div>
                  
                  <div className="group">
                    <label className="block text-slate-700 font-bold text-[11px] mb-2 uppercase tracking-widest transition-colors group-focus-within:text-teal-600">
                      Mobile Number *
                    </label>
                    <input required type="tel" placeholder="(469) 000-0000" className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all hover:bg-white shadow-sm" />
                  </div>
                  
                  <div className="group">
                    <label className="block text-slate-700 font-bold text-[11px] mb-2 uppercase tracking-widest transition-colors group-focus-within:text-teal-600">
                      Email Address *
                    </label>
                    <input required type="email" placeholder="john@example.com" className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all hover:bg-white shadow-sm" />
                  </div>
                  
                  <div className="group">
                    <label className="block text-slate-700 font-bold text-[11px] mb-2 uppercase tracking-widest transition-colors group-focus-within:text-teal-600">
                      Subject
                    </label>
                    <input required type="text" placeholder="Back Pain / Consultation" className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all hover:bg-white shadow-sm" />
                  </div>
                  
                  <div className="sm:col-span-2 group">
                    <label className="block text-slate-700 font-bold text-[11px] mb-2 uppercase tracking-widest transition-colors group-focus-within:text-teal-600">
                      Message / Details
                    </label>
                    <textarea rows={4} placeholder="Please describe your condition or preferred appointment time..." className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all hover:bg-white shadow-sm resize-y"></textarea>
                  </div>
                  
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 uppercase tracking-widest font-semibold">
                    <ShieldCheck className="w-4 h-4 text-teal-500" /> HIPAA Secure
                  </div>
                  
                  <button type="submit" className="relative overflow-hidden group w-full sm:w-auto bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-[0_8px_20px_rgba(20,184,166,0.3)] hover:shadow-[0_12px_25px_rgba(20,184,166,0.4)] active:translate-y-0.5 whitespace-nowrap">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Submit Request <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[glare_1.5s_ease-in-out_forwards] z-0"></div>
                  </button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-500 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <a
          href="mailto:info@texasspinepain.com"
          className="w-11 h-11 bg-[#0b192b] hover:bg-teal-600 text-white rounded-xl shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 border border-white/10"
          aria-label="Email Us"
        >
          <Mail className="w-4 h-4" />
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-11 h-11 bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
