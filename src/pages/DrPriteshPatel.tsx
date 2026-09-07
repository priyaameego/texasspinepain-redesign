import { Check, ShieldCheck, Home } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function DrPriteshPatel() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white">
      
      {/* Editorial Subpage Hero Banner */}
      <div className="bg-[#0b192b] text-white py-16 lg:py-24 px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b192b] via-[#0b192b]/90 to-teal-950/40" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-200">Dr. Pritesh Patel</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight mb-3">
            Dr. Pritesh Patel, DO
          </h1>
          <p className="text-teal-200 text-base sm:text-lg font-medium flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-300" />
            Double Board-Certified Pain Management Specialist &amp; Anesthesiologist
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
            
            {/* Left Content */}
            <div className="lg:w-2/3">
              <span className="text-teal-600 font-bold uppercase tracking-widest text-xs block mb-2">Dallas Pain Specialist</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-6">
                Dr. Pritesh Patel, DO – Pain Management Doctor Dallas
              </h2>
               
              <p className="text-slate-600 mb-10 text-base sm:text-lg leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
                Dr. Pritesh Patel is a highly skilled and compassionate pain management doctor and anesthesiologist with over 11 years of experience. He is dedicated to providing personalized and comprehensive pain management solutions to help patients lead healthier, more comfortable lives.
              </p>

              <div className="space-y-10">
                {/* Education */}
                <div className="border-t border-slate-100 pt-8">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Education and Expertise</h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    Dr. Patel completed his medical education at the <strong>University of New England College of Osteopathic Medicine</strong>, graduating in 2012. His extensive training and experience enable him to address a wide range of pain conditions and offer cutting-edge treatments.
                  </p>
                </div>

                {/* Board Certifications */}
                <div className="border-t border-slate-100 pt-8">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Board Certifications</h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-4">
                    Dr. Pritesh Patel is <strong>double board-certified</strong>, demonstrating his commitment to excellence in:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Anesthesiology', 'Pain Medicine'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 bg-teal-50/80 px-4 py-3 rounded-xl border border-teal-100 text-slate-800 font-semibold text-sm">
                        <Check className="w-4 h-4 text-teal-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Areas of Specialization */}
                <div className="border-t border-slate-100 pt-8">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Areas of Specialization</h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-4">
                    At the Spine &amp; Pain Institute of Texas, Dr. Patel provides comprehensive care for various pain conditions, including:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'Back pain and lower back pain',
                      'Neck pain',
                      'Headaches and migraines',
                      'Leg pain and sciatica',
                      'Neuropathy',
                      'Joint pain',
                      'Sports injuries'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-slate-700 text-sm bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Treatment Approach */}
                <div className="border-t border-slate-100 pt-8">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Treatment Approach</h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    Dr. Patel believes in a <strong>patient-centered approach</strong> to pain management. He takes the time to listen to each patient, thoroughly evaluate their condition, and develop personalized treatment plans. His goal is to not only alleviate pain but also enhance his patients' overall quality of life.
                  </p>
                </div>

                {/* Advanced Techniques */}
                <div className="border-t border-slate-100 pt-8">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Advanced Pain Management Techniques</h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-4">
                    Dr. Patel utilizes a range of advanced techniques, including:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'Minimally invasive procedures',
                      'Interventional pain management',
                      'Regenerative medicine',
                      'Spinal cord stimulation',
                      'Nerve blocks and injections'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-slate-700 text-sm bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Sidebar Doctor Card */}
            <div className="lg:w-1/3 flex flex-col items-center lg:sticky lg:top-32 w-full">
              <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100 shadow-2xl mb-8 w-full">
                <img 
                  src="/Dr-Pritesh-Patel.png" 
                  alt="Dr. Pritesh Patel" 
                  className="w-full h-auto rounded-2xl object-cover bg-white" 
                />
              </div>
              
              {/* Profile Card */}
              <div className="w-full bg-[#0b192b] text-white p-8 rounded-3xl shadow-xl border border-white/10">
                <h4 className="font-serif font-bold text-white text-lg mb-6 text-center">Dr. Pritesh Patel's Profile</h4>
                
                {/* SVG Semi-Circle Gauge */}
                <div className="flex justify-center mb-6">
                  <svg viewBox="0 0 200 120" className="w-52 h-28">
                    <path d="M 20 110 A 80 80 0 0 1 180 110" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="16" strokeLinecap="round" />
                    <path d="M 20 110 A 80 80 0 0 1 180 110" fill="none" stroke="#14b8a6" strokeWidth="16" strokeLinecap="round" strokeDasharray="251" strokeDashoffset="25">
                      <animate attributeName="stroke-dashoffset" from="251" to="25" dur="1.5s" fill="freeze" />
                    </path>
                    <path d="M 34 110 A 66 66 0 0 1 166 110" fill="none" stroke="#38bdf8" strokeWidth="12" strokeLinecap="round" strokeDasharray="207" strokeDashoffset="30">
                      <animate attributeName="stroke-dashoffset" from="207" to="30" dur="1.3s" fill="freeze" />
                    </path>
                  </svg>
                </div>

                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5 bg-white/5 p-2.5 rounded-xl">
                    <div className="w-3 h-3 rounded-full bg-teal-400 shrink-0" />
                    <span className="font-semibold text-white">Double Board-Certified Specialist</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/5 p-2.5 rounded-xl">
                    <div className="w-3 h-3 rounded-full bg-sky-400 shrink-0" />
                    <span className="font-semibold text-white">11+ Years Clinical Experience</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Remaining Sections */}
          <div className="space-y-10 max-w-4xl">
            {/* Patient Experience */}
            <div className="border-t border-slate-100 pt-8">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Patient Experience</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Patients consistently praise Dr. Patel for his exceptional care and attention to detail. His friendly demeanor and willingness to explain treatment options help patients feel at ease and well-informed about their care.
              </p>
            </div>

            {/* Convenient Location */}
            <div className="border-t border-slate-100 pt-8">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Convenient Location and Telehealth Options</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Dr. Patel practices at the Spine &amp; Pain Institute of Texas, conveniently located at:
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-900 font-semibold mb-4 inline-block">
                3503 W Wheatland Rd, Suite #100<br/>Dallas, TX 75237
              </div>
              <p className="text-slate-600 text-base leading-relaxed">
                For added convenience, Dr. Patel also offers telehealth appointments, allowing patients to receive expert care from the comfort of their homes.
              </p>
            </div>

            {/* Meet your Doctor */}
            <div className="border-t border-slate-100 pt-8">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Meet Your Pain Management Doctor in Dallas</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Don't let pain control your life. Take the first step towards relief by <Link to="/contact-us" className="text-teal-600 hover:underline font-semibold">scheduling an appointment</Link> with Dr. Pritesh Patel. His expertise and commitment to patient care make him an excellent choice for those seeking effective pain management services in Dallas.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                To schedule your consultation, call <a href="tel:4693130040" className="text-teal-600 hover:underline font-semibold">469-313-0040</a> or use our online appointment request form.
              </p>
            </div>

            {/* Why Choose */}
            <div className="border-t border-slate-100 pt-8">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Why Choose Dr. Pritesh Patel?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {[
                  'Over 11 years of experience in pain management and anesthesiology',
                  'Double board-certified specialist',
                  'Personalized treatment plans',
                  'Advanced pain management techniques',
                  'Compassionate and attentive care',
                  'Convenient location and telehealth options'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="w-5 h-5 rounded-md bg-teal-600 text-white flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span className="text-slate-800 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-700 text-base leading-relaxed bg-teal-50/60 p-6 rounded-2xl border-l-4 border-teal-600">
                Experience the difference that an expert pain management doctor in Dallas can make in your life. Contact Dr. Pritesh Patel and the team at the Spine &amp; Pain Institute of Texas today to start your journey toward a pain-free future.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
