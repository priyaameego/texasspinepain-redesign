import { Phone, Mail, MapPin, Clock, MessageSquare, ChevronRight, Home, ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[#f8fafc] font-sans">
      
      {/* ─── PREMIUM HERO SECTION ─── */}
      <div className="relative bg-[#0b192b] text-white py-20 lg:py-32 px-4 lg:px-8 overflow-hidden">
        {/* Subtle animated background image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b192b] via-[#0b192b]/95 to-teal-900/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=60&w=1200&auto=format&fit=crop" 
            alt="Medical Facility" 
            className="w-full h-full object-cover opacity-20 object-top mix-blend-luminosity animate-[scaleIn_20s_ease-out_forwards]"
          />
        </div>

        {/* Decorative Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 z-0" />

        <div className="container mx-auto max-w-7xl relative z-20">
          <div className="animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-widest mb-6">
              <Link to="/" className="hover:text-white flex items-center gap-1 transition-colors">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-200">Contact Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight mb-6 leading-tight drop-shadow-sm">
              Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-100">Appointment</span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-2xl leading-relaxed mb-10">
              Experience compassionate, double board-certified pain management. Reach out to the Spine &amp; Pain Institute of Texas to schedule your consultation.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#appointment-form" className="group bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-400 hover:to-teal-300 text-[#0b192b] px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] hover:-translate-y-1 flex items-center gap-2">
                Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:4693130040" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 backdrop-blur-md flex items-center gap-2 hover:-translate-y-1">
                <Phone className="w-4 h-4 text-teal-300" /> (469) 313-0040
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── PREMIUM MAIN CONTENT ─── */}
      <section className="py-20 lg:py-32 relative z-10" id="appointment-form">
        <style>
          {`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes scaleIn {
              from { transform: scale(1.1); }
              to { transform: scale(1); }
            }
          `}
        </style>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ─── LEFT COLUMN: SUPPORTING INFO (Cards) ─── */}
            <div className="lg:col-span-5 space-y-6 animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.2s' }}>
              
              <div>
                <span className="text-teal-600 font-bold uppercase tracking-widest text-xs block mb-2">Dallas Pain Center</span>
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 tracking-tight">We're Here to Help.</h2>
              </div>

              {/* 1. Phone & Support Card */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-50 to-transparent rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
                <h3 className="font-serif font-bold text-slate-900 text-xl mb-6">Direct Contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Phone / Fax</p>
                      <a href="tel:4693130040" className="text-slate-900 hover:text-teal-600 font-bold text-lg transition-colors block">469-313-0040</a>
                      <p className="text-slate-500 text-sm mt-0.5">Fax: 469-313-0041</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Email</p>
                      <a href="mailto:info@texasspinepain.com" className="text-slate-900 hover:text-teal-600 font-bold text-base transition-colors break-all">info@texasspinepain.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Address & Hours Card */}
              <div className="bg-[#0b192b] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-teal-500/20 to-transparent rounded-bl-full pointer-events-none"></div>
                <h3 className="font-serif font-bold text-white text-xl mb-6 relative z-10">Clinic Information</h3>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 text-teal-300 flex items-center justify-center shrink-0 border border-white/5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Location</p>
                      <p className="text-slate-100 font-medium text-base leading-snug">
                        3503 W Wheatland Rd, Suite #100<br />
                        Dallas, TX 75237
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 text-teal-300 flex items-center justify-center shrink-0 border border-white/5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="w-full">
                      <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Office Hours</p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                          <span className="text-slate-300 text-sm">Mon – Fri</span>
                          <span className="font-bold text-teal-300 text-sm">8:00 AM – 5:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 text-sm">Sat – Sun</span>
                          <span className="font-medium text-slate-500 text-sm">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ─── RIGHT COLUMN: THE APPOINTMENT FORM ─── */}
            <div className="lg:col-span-7 relative animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.4s' }}>
              
              {/* Premium 3D Depth Elements */}
              <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent rounded-[2.5rem] transform translate-y-4 translate-x-4 -z-20 blur-xl"></div>
              <div className="absolute inset-0 bg-slate-200/50 rounded-[2.5rem] transform translate-y-2 translate-x-2 -z-10"></div>
              
              {/* Main Form Card */}
              <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_50px_rgba(11,25,43,0.07)] border border-slate-100 relative z-0 transition-transform duration-500 hover:-translate-y-1">
                
                <div className="mb-10 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 mb-6 shadow-sm border border-teal-100/50">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight mb-2">
                    Request an Appointment
                  </h3>
                  <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto">
                    Fill out the form below and our clinical team will get back to you promptly to confirm your visit.
                  </p>
                </div>

                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you! Your message has been sent successfully. Our team will contact you shortly.");
                    e.currentTarget.reset();
                  }} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-slate-700 font-bold text-[11px] mb-2 uppercase tracking-widest transition-colors group-focus-within:text-teal-600">
                        Full Name *
                      </label>
                      <input 
                        required 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-5 py-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all hover:bg-white shadow-sm" 
                      />
                    </div>

                    <div className="group">
                      <label className="block text-slate-700 font-bold text-[11px] mb-2 uppercase tracking-widest transition-colors group-focus-within:text-teal-600">
                        Mobile Number *
                      </label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="(469) 000-0000" 
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-5 py-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all hover:bg-white shadow-sm" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-slate-700 font-bold text-[11px] mb-2 uppercase tracking-widest transition-colors group-focus-within:text-teal-600">
                        Email Address *
                      </label>
                      <input 
                        required 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-5 py-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all hover:bg-white shadow-sm" 
                      />
                    </div>

                    <div className="group">
                      <label className="block text-slate-700 font-bold text-[11px] mb-2 uppercase tracking-widest transition-colors group-focus-within:text-teal-600">
                        Subject
                      </label>
                      <input 
                        type="text" 
                        placeholder="Back Pain / Consultation" 
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-5 py-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all hover:bg-white shadow-sm" 
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-slate-700 font-bold text-[11px] mb-2 uppercase tracking-widest transition-colors group-focus-within:text-teal-600">
                      Message *
                    </label>
                    <textarea 
                      required 
                      rows={5} 
                      placeholder="Tell us about your symptoms or medical inquiry..." 
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-5 py-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all hover:bg-white shadow-sm resize-y"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      className="relative overflow-hidden group w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white py-5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-[0_8px_20px_rgba(20,184,166,0.3)] hover:shadow-[0_12px_25px_rgba(20,184,166,0.4)] active:translate-y-0.5"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Submit Appointment Request
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      {/* Subtle button glare effect */}
                      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[glare_1.5s_ease-in-out_forwards] z-0"></div>
                    </button>
                    <style>
                      {`
                        @keyframes glare {
                          100% { transform: translateX(100%); }
                        }
                      `}
                    </style>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── LOCATION MAP ─── */}
      <section className="pb-20 lg:pb-32 relative z-10 animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.6s' }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(11,25,43,0.05)] border border-slate-100">
            <div className="p-8 lg:p-10 bg-[#0b192b] text-white flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 border border-teal-500/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-2xl mb-1">Our Clinic Location</h3>
                  <p className="text-slate-300 text-sm">Spine & Pain Institute of Texas</p>
                </div>
              </div>
              
              <a 
                href="https://maps.google.com/?q=3503+W+Wheatland+Rd+Suite+100+Dallas+TX+75237"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-md flex items-center gap-2 self-start md:self-auto relative z-10 hover:-translate-y-0.5"
              >
                Open in Google Maps <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="w-full h-96 md:h-[500px] relative">
              <iframe
                title="Spine & Pain Institute of Texas Location Map"
                className="w-full h-full border-0 grayscale-[20%] contrast-125"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.34!2d-96.876725!3d32.648026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e91e0555244fd%3A0x6f1d0ba1685967c8!2sSpine%20%26%20Pain%20Institute%20of%20Texas!5e0!3m2!1sen!2sus!4v1690000000000"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
