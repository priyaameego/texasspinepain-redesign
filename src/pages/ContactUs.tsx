import { Phone, Mail, MapPin, Clock, MessageSquare, ChevronRight, Home, Printer } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white">

      {/* Editorial Hero Header */}
      <div className="bg-[#0b192b] text-white py-16 lg:py-24 px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b192b] via-[#0b192b]/95 to-teal-950/40" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-200">Contact Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-normal max-w-2xl leading-relaxed">
            We are dedicated to providing compassionate, double board-certified pain management. Reach out to Spine &amp; Pain Institute of Texas to schedule your consultation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="tel:4693130040" className="bg-teal-500 hover:bg-teal-400 text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-teal-500/25 flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call (469) 313-0040
            </a>
            <a href="#contact-form" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-md flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-teal-300" /> Send a Message
            </a>
          </div>
        </div>
      </div>

      {/* ─── 3 CONTACT INFO CARDS (MATCHING ORIGINAL DESIGN & DATA) ─── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/60">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

            {/* 1. Support Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-5 group">
              <div className="bg-[#0b192b] group-hover:bg-teal-600 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-md text-white">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-xl mb-1.5">Support</h3>
                <a 
                  href="mailto:info@texasspinepain.com" 
                  className="text-teal-600 hover:text-teal-700 font-semibold text-sm sm:text-base break-all transition-colors block"
                >
                  info@texasspinepain.com
                </a>
                <p className="text-slate-400 text-xs mt-1">Send us an email anytime</p>
              </div>
            </div>

            {/* 2. Phone Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-5 group">
              <div className="bg-[#0b192b] group-hover:bg-teal-600 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-md text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-xl mb-1.5">Phone</h3>
                <a 
                  href="tel:4693130040" 
                  className="text-teal-600 hover:text-teal-700 font-bold text-base sm:text-lg transition-colors block"
                >
                  469-313-0040
                </a>
                <p className="text-slate-400 text-xs mt-1">Fax: 469-313-0041</p>
              </div>
            </div>

            {/* 3. Address Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-5 group">
              <div className="bg-[#0b192b] group-hover:bg-teal-600 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-md text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-xl mb-1.5">Address</h3>
                <p className="text-slate-700 font-medium text-sm leading-snug">
                  3503 W Wheatland Rd, Suite #100,<br />
                  Dallas 75237
                </p>
                <a 
                  href="https://maps.google.com/?q=3503+W+Wheatland+Rd+Suite+100+Dallas+TX+75237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 font-bold text-xs inline-flex items-center gap-1 mt-2 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── DALLAS PAIN CENTER FORM & GOOGLE MAP SPLIT SECTION ─── */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Form Block (Dallas Pain Center) */}
            <div className="lg:col-span-7 bg-slate-50/70 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-lg">
              <div className="mb-8">
                <span className="text-teal-600 font-bold uppercase tracking-widest text-xs block mb-2">
                  Spine &amp; Pain Institute of Texas
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                  Dallas Pain Center
                </h2>
                <p className="text-slate-500 text-sm sm:text-base mt-2">
                  Fill out the form below and our clinical team will get back to you promptly.
                </p>
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your message has been sent successfully. Our team will contact you shortly.");
                }} 
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-700 font-semibold text-xs mb-1.5 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input 
                      required 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all shadow-sm" 
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold text-xs mb-1.5 uppercase tracking-wider">
                      Mobile Number *
                    </label>
                    <input 
                      required 
                      type="tel" 
                      placeholder="(469) 000-0000" 
                      className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all shadow-sm" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-700 font-semibold text-xs mb-1.5 uppercase tracking-wider">
                      Email ID *
                    </label>
                    <input 
                      required 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all shadow-sm" 
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold text-xs mb-1.5 uppercase tracking-wider">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      placeholder="Back Pain / LOP Consultation" 
                      className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all shadow-sm" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold text-xs mb-1.5 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea 
                    required 
                    rows={4} 
                    placeholder="Tell us about your symptoms or medical inquiry..." 
                    className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all shadow-sm resize-y"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="bg-[#0b192b] hover:bg-teal-600 text-white w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-slate-900/10"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Map & Hours Block */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Google Maps Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <div className="p-6 bg-[#0b192b] text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg">Our Clinic Location</h3>
                      <p className="text-slate-300 text-xs">3503 W Wheatland Rd, Suite #100, Dallas, TX 75237</p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-80 sm:h-96 relative">
                  <iframe
                    title="Spine & Pain Institute of Texas Location Map"
                    className="w-full h-full border-0"
                    loading="lazy"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.34!2d-96.876725!3d32.648026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e91e0555244fd%3A0x6f1d0ba1685967c8!2sSpine%20%26%20Pain%20Institute%20of%20Texas!5e0!3m2!1sen!2sus!4v1690000000000"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Hours Block */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-white">Office Hours</h3>
                    <p className="text-slate-400 text-xs">Same-Day &amp; LOP Appointments</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    ['Monday – Friday', '8:00 AM – 5:00 PM'],
                    ['Saturday', 'Closed'],
                    ['Sunday', 'Closed'],
                  ].map(([day, hours], i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <span className="text-slate-300 text-sm">{day}</span>
                      <span className={`font-bold text-sm ${hours === 'Closed' ? 'text-slate-400' : 'text-teal-300'}`}>{hours}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="tel:4693130040" 
                  className="mt-6 bg-teal-500 hover:bg-teal-400 text-white block text-center px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  Call (469) 313-0040
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
