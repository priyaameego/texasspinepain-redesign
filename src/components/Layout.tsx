import { useState, useEffect, type ReactNode } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { 
  Phone, Printer, Mail, 
  ChevronDown, Star, Menu, X, ArrowUp,
  Clock, MapPin, ChevronRight
} from 'lucide-react';

export function Layout({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
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
  const textColorClass = isTransparent ? 'text-white drop-shadow-md' : 'text-primary-700';
  const logoClass = `transition-all duration-300 object-contain ${scrolled ? 'h-16 md:h-18' : 'h-20 md:h-24'} ${isTransparent ? 'brightness-0 invert' : ''}`;

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      
      {/* ─── Fixed Header ─── */}
      <div className="fixed top-0 w-full z-50 flex flex-col">

        {/* Alert Bar */}
        {showAlert && (
          <div className="bg-primary-800 text-white px-4 py-2.5 text-sm flex justify-center items-center relative shadow-md">
            <div className="container mx-auto flex items-center justify-center gap-2">
              <span className="font-semibold tracking-wide text-[11px] md:text-xs uppercase">Welcome to the newly redesigned Spine &amp; Pain Institute of Texas website.</span>
            </div>
            <button 
              onClick={() => setShowAlert(false)} 
              className="absolute right-4 hover:bg-white/20 p-1 rounded-full transition-colors"
              aria-label="Close alert"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Main Header */}
        <header className={`w-full transition-all duration-300 ease-in-out ${isTransparent ? 'bg-transparent py-6' : 'bg-white py-4 shadow-md'}`}>
          <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center z-50">
              <img 
                src="http://texasspinepain.com/wp-content/uploads/2024/11/logo.webp" 
                alt="Spine & Pain Institute of Texas" 
                className={logoClass}
              />
            </Link>

            {/* ─── Desktop Navigation ─── */}
            <div className={`hidden lg:flex items-center gap-6 xl:gap-8 ${textColorClass}`}>

              <Link to="/" className="font-bold hover:text-primary-400 transition-colors capitalize text-[15px]">Home</Link>
              <Link to="/about-us" className="font-bold hover:text-primary-400 transition-colors capitalize text-[15px]">About</Link>

              {/* Dropdown: Meet Doctors */}
              <div className="relative group">
                <span className="font-bold hover:text-primary-400 transition-colors capitalize text-[15px] flex items-center gap-1 py-2 cursor-pointer select-none">
                  Meet Doctors <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                </span>
                <div className="absolute left-0 mt-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 text-gray-800 py-2 flex flex-col overflow-hidden">
                    <Link to="/dr-pritesh-patel" className="px-5 py-3 hover:bg-primary-50 hover:text-primary-600 transition-colors font-semibold text-sm">Dr. Pritesh Patel</Link>
                  </div>
                </div>
              </div>

              {/* Dropdown: Services */}
              <div className="relative group">
                <Link to="/services" className="font-bold hover:text-primary-400 transition-colors capitalize text-[15px] flex items-center gap-1 py-2">
                  Services <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                </Link>
                <div className="absolute left-0 mt-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 text-gray-800 py-2 flex flex-col overflow-hidden">
                    <Link to="/services" className="px-5 py-3 hover:bg-primary-50 hover:text-primary-600 transition-colors font-bold text-sm border-b border-gray-100">All Services</Link>
                    <Link to="/motor-vehicle-accidents" className="px-5 py-3 hover:bg-primary-50 hover:text-primary-600 transition-colors font-medium text-sm">Motor Vehicle Accidents</Link>
                    <Link to="/workers-compensation" className="px-5 py-3 hover:bg-primary-50 hover:text-primary-600 transition-colors font-medium text-sm">Workers Compensation</Link>
                    <Link to="/letter-of-protection" className="px-5 py-3 hover:bg-primary-50 hover:text-primary-600 transition-colors font-medium text-sm">Letter of Protection</Link>
                    <Link to="/truck-accidents" className="px-5 py-3 hover:bg-primary-50 hover:text-primary-600 transition-colors font-medium text-sm">Truck Accidents</Link>
                  </div>
                </div>
              </div>

              {/* Dropdown: More (...) */}
              <div className="relative group">
                <span className={`font-bold hover:text-primary-400 transition-colors text-[18px] flex items-center gap-0.5 py-2 cursor-pointer select-none leading-none tracking-widest`}>
                  &bull;&bull;&bull;
                </span>
                <div className="absolute right-0 mt-0 pt-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 text-gray-800 py-2 flex flex-col overflow-hidden">
                    <Link to="/insurance-benefits" className="px-5 py-3 hover:bg-primary-50 hover:text-primary-600 transition-colors font-semibold text-sm">Insurance</Link>
                    <Link to="/frequently-asked-questions" className="px-5 py-3 hover:bg-primary-50 hover:text-primary-600 transition-colors font-semibold text-sm">FAQ's</Link>
                    <Link to="/contact-us" className="px-5 py-3 hover:bg-primary-50 hover:text-primary-600 transition-colors font-semibold text-sm">Contact Us</Link>
                  </div>
                </div>
              </div>

              <a
                href="#appointment"
                className={`px-6 py-2.5 rounded-full font-bold transition-all uppercase tracking-widest text-[11px] shadow-sm flex items-center justify-center border-2 whitespace-nowrap ${isTransparent ? 'bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-white/80' : 'bg-primary-600 hover:bg-primary-700 text-white border-primary-600'}`}
              >
                Book Appointment
              </a>
            </div>

            {/* ─── Mobile Hamburger ─── */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors focus:outline-none z-[60] ${isTransparent && !mobileMenuOpen ? 'text-white' : 'text-gray-800'}`}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>

          </div>
        </header>
      </div>

      {/* ─── Mobile Full-Screen Drawer ─── */}
      {/* Backdrop */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`lg:hidden fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <nav
        className={`lg:hidden fixed top-0 right-0 h-full w-[85vw] max-w-sm z-[60] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Mobile navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#1e4682] shrink-0">
          <img
            src="http://texasspinepain.com/wp-content/uploads/2024/11/logo.webp"
            alt="Spine & Pain Institute of Texas"
            className="h-10 brightness-0 invert object-contain"
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Links — scrollable */}
        <div className="flex-1 overflow-y-auto overscroll-contain py-2">
          <ul className="flex flex-col">

            <li>
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-6 py-4 font-bold text-gray-800 hover:bg-primary-50 hover:text-primary-700 border-b border-gray-50 transition-colors uppercase tracking-wide text-sm"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-6 py-4 font-bold text-gray-800 hover:bg-primary-50 hover:text-primary-700 border-b border-gray-50 transition-colors uppercase tracking-wide text-sm"
              >
                About
              </Link>
            </li>

            {/* Accordion: Meet Doctors */}
            <li className="border-b border-gray-50">
              <button
                onClick={() => toggleDropdown('doctors')}
                className="w-full flex items-center justify-between px-6 py-4 font-bold text-gray-800 hover:bg-primary-50 hover:text-primary-700 transition-colors uppercase tracking-wide text-sm"
              >
                Meet Doctors
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === 'doctors' ? 'rotate-180 text-primary-600' : 'text-gray-400'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 bg-gray-50 ${activeDropdown === 'doctors' ? 'max-h-40' : 'max-h-0'}`}>
                <Link
                  to="/dr-pritesh-patel"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center pl-10 pr-6 py-3.5 text-gray-600 hover:text-primary-600 font-medium text-sm border-b border-gray-100 last:border-0"
                >
                  Dr. Pritesh Patel
                </Link>
              </div>
            </li>

            {/* Accordion: Services */}
            <li className="border-b border-gray-50">
              <button
                onClick={() => toggleDropdown('services')}
                className="w-full flex items-center justify-between px-6 py-4 font-bold text-gray-800 hover:bg-primary-50 hover:text-primary-700 transition-colors uppercase tracking-wide text-sm"
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-primary-600' : 'text-gray-400'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 bg-gray-50 ${activeDropdown === 'services' ? 'max-h-80' : 'max-h-0'}`}>
                {[
                  { to: '/services', label: 'All Services', bold: true },
                  { to: '/motor-vehicle-accidents', label: 'Motor Vehicle Accidents', bold: false },
                  { to: '/workers-compensation', label: 'Workers Compensation', bold: false },
                  { to: '/letter-of-protection', label: 'Letter of Protection', bold: false },
                  { to: '/truck-accidents', label: 'Truck Accidents', bold: false },
                ].map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center pl-10 pr-6 py-3.5 hover:text-primary-600 text-sm border-b border-gray-100 last:border-0 transition-colors ${item.bold ? 'font-bold text-primary-700' : 'font-medium text-gray-600'}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>

            {/* Accordion: More (...) */}
            <li className="border-b border-gray-50">
              <button
                onClick={() => toggleDropdown('more')}
                className="w-full flex items-center justify-between px-6 py-4 font-bold text-gray-800 hover:bg-primary-50 hover:text-primary-700 transition-colors uppercase tracking-wide text-sm"
              >
                More
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === 'more' ? 'rotate-180 text-primary-600' : 'text-gray-400'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 bg-gray-50 ${activeDropdown === 'more' ? 'max-h-56' : 'max-h-0'}`}>
                {[
                  { to: '/insurance-benefits', label: 'Insurance' },
                  { to: '/frequently-asked-questions', label: "FAQ's" },
                  { to: '/contact-us', label: 'Contact Us' },
                ].map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center pl-10 pr-6 py-3.5 font-medium text-gray-600 hover:text-primary-600 text-sm border-b border-gray-100 last:border-0 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>

          </ul>
        </div>

        {/* Drawer Footer CTAs */}
        <div className="p-5 border-t border-gray-100 bg-gray-50 space-y-3 shrink-0">
          <a
            href="#appointment"
            onClick={() => setMobileMenuOpen(false)}
            className="block bg-[#1e4682] hover:bg-[#163565] text-white text-center px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors shadow-md"
          >
            Book Appointment
          </a>
          <a
            href="tel:4693130040"
            className="flex items-center justify-center gap-2 bg-white border-2 border-[#1e4682] text-[#1e4682] hover:bg-primary-50 px-6 py-3.5 rounded-xl font-bold text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            469-313-0040
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Premium Footer */}
      <footer className="bg-gradient-to-b from-[#0e2448] via-[#091a35] to-[#051124] text-white pt-14 pb-8 mt-auto border-t border-[#17a2b8]/30 shadow-[0_-12px_35px_rgba(0,0,0,0.25)] relative overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#17a2b8]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          {/* Pre-Footer Action Banner */}
          <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-14 border border-white/15 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-300 mb-1.5">
                <Clock className="w-3.5 h-3.5" /> Urgent &amp; Routine Care Available
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Need Immediate Pain Relief or Auto Accident Care?
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Same-Day Emergency Appointments &bull; Letter of Protection (LOP) Accepted &bull; No Upfront Costs
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="tel:4693130040"
                className="inline-flex items-center bg-white hover:bg-gray-100 text-[#0e2448] font-bold text-sm px-5 py-3 rounded-lg shadow-md transition-transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 mr-2 text-[#17a2b8]" />
                (469) 313-0040
              </a>
              <a
                href="#appointment"
                className="inline-flex items-center bg-[#17a2b8] hover:bg-[#138496] text-white font-bold text-sm px-5 py-3 rounded-lg shadow-md transition-transform hover:-translate-y-0.5 border border-teal-300/30"
              >
                Book Appointment
              </a>
            </div>
          </div>

          {/* Main 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
            
            {/* Col 1: Brand & Trust (lg:col-span-4) */}
            <div className="lg:col-span-4 space-y-5">
              <Link to="/" className="inline-block">
                <img 
                  src="http://texasspinepain.com/wp-content/uploads/2024/11/logo.webp" 
                  alt="Spine & Pain Institute of Texas" 
                  className="h-14 sm:h-16 brightness-0 invert drop-shadow"
                />
              </Link>
              
              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                Discover personalized, expert pain relief. Located in Dallas, the Spine &amp; Pain Institute of Texas offers exceptional care for a wide range of acute and chronic pain conditions.
              </p>

              {/* Patient Rating Trust Badge */}
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <div className="text-xs text-gray-200">
                  <span className="font-bold text-white">4.7 / 5.0</span> Rating &bull; Trusted by Patients
                </div>
              </div>

              <p className="text-xs text-teal-200/80 font-medium">
                Under the direction of <strong className="text-white font-semibold">Dr. Pritesh Patel, DO</strong>
              </p>
            </div>

            {/* Col 2: Quick Links (lg:col-span-2) */}
            <div className="lg:col-span-2">
              <h4 className="text-base font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#17a2b8]"></span>
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-300">
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
                      <ChevronRight className="w-3.5 h-3.5 text-gray-500 mr-1.5 group-hover:text-teal-300 group-hover:translate-x-1 transition-all" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Specialized Care (lg:col-span-3) */}
            <div className="lg:col-span-3">
              <h4 className="text-base font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#17a2b8]"></span>
                Specialized Care
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-300">
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
                      <ChevronRight className="w-3.5 h-3.5 text-gray-500 mr-1.5 group-hover:text-teal-300 group-hover:translate-x-1 transition-all" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Dallas Clinic Contact (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-base font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#17a2b8]"></span>
                Dallas Clinic
              </h4>

              <div className="space-y-3.5 text-sm text-gray-300">
                {/* Phone */}
                <a 
                  href="tel:4693130040" 
                  className="flex items-start gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Phone (Appointments)</div>
                    <div className="font-bold text-white text-base">469-313-0040</div>
                  </div>
                </a>

                {/* Fax */}
                <div className="flex items-center gap-3 px-2.5 py-1 text-gray-400 text-xs">
                  <Printer className="w-4 h-4 text-gray-400 shrink-0" />
                  <span>Fax: <strong className="text-gray-300 font-medium">469-313-0041</strong></span>
                </div>

                {/* Email */}
                <a 
                  href="mailto:info@texasspinepain.com" 
                  className="flex items-center gap-3 px-2.5 py-1.5 text-gray-300 hover:text-teal-300 transition-colors text-xs sm:text-sm"
                >
                  <Mail className="w-4 h-4 text-teal-300 shrink-0" />
                  <span>info@texasspinepain.com</span>
                </a>

                {/* Address */}
                <div className="flex items-start gap-3 px-2.5 py-1.5 text-gray-300 text-xs sm:text-sm">
                  <MapPin className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                  <span>3503 W Wheatland Rd Suite 100,<br />Dallas, TX 75237</span>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-3 px-2.5 py-1 text-gray-400 text-xs">
                  <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                  <span>Mon – Fri: 8:00 AM – 5:00 PM</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Compliance */}
          <div className="border-t border-white/10 pt-6 mt-6 text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
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

      {/* Appointment Form Modal */}
      <div id="appointment" className="fixed inset-0 z-[100] hidden target:flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-6">
        <a href="#" className="absolute inset-0 z-0 cursor-default"></a>
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative z-10 animate-in zoom-in-95 duration-300 custom-scrollbar">
          <div className="p-6 sm:p-8 md:p-12 relative">
            <a href="#" className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-gray-800 transition-colors bg-gray-100 md:bg-transparent rounded-full p-1 md:p-0">
              <X className="w-6 h-6 md:w-8 md:h-8 font-light" />
            </a>
            <h3 className="text-2xl font-serif text-gray-800 mb-6">Schedule Appointment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-2 md:mt-4">
              <div>
                <label className="block text-gray-600 font-medium text-xs md:text-sm mb-1.5 md:mb-2">Full Name</label>
                <input type="text" className="w-full border border-gray-200 rounded-md p-2.5 md:p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
              </div>
              <div>
                <label className="block text-gray-600 font-medium text-xs md:text-sm mb-1.5 md:mb-2">Mobile Number</label>
                <input type="tel" className="w-full border border-gray-200 rounded-md p-2.5 md:p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
              </div>
              <div>
                <label className="block text-gray-600 font-medium text-xs md:text-sm mb-1.5 md:mb-2">Email ID</label>
                <input type="email" className="w-full border border-gray-200 rounded-md p-2.5 md:p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
              </div>
              <div>
                <label className="block text-gray-600 font-medium text-xs md:text-sm mb-1.5 md:mb-2">Subject</label>
                <input type="text" className="w-full border border-gray-200 rounded-md p-2.5 md:p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-600 font-medium text-xs md:text-sm mb-1.5 md:mb-2">Message</label>
                <textarea rows={4} className="w-full border border-gray-200 rounded-md p-2.5 md:p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-y"></textarea>
              </div>
            </div>
            <div className="mt-6 md:mt-8 flex justify-center">
              <button className="bg-[#1e4682] hover:bg-[#163566] text-white w-full md:w-auto px-10 py-3.5 md:py-4 rounded-md font-bold text-base md:text-lg transition-colors shadow-md">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons — Scroll to Top + Contact */}
      <div className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-500 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <a
          href="mailto:info@texasspinepain.com"
          className="w-12 h-12 bg-[#1e4682] hover:bg-[#163566] text-white rounded-md shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          aria-label="Email Us"
        >
          <Mail className="w-5 h-5" />
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-[#1e4682] hover:bg-[#163566] text-white rounded-md shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
