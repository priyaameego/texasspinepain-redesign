import { ChevronRight, Check, Play, Home } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function About() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white">
      
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs block mb-2">Clinical Excellence</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-3">
              Expert <span className="text-teal-600">Pain Specialist Dallas</span>
            </h2>
            <p className="text-slate-500 text-lg sm:text-xl font-normal">With over 25 years of experience</p>
          </div>
          
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative">
            <img 
              src="/Spine-Pain-Institute-of-Texas-2048x899.jpg" 
              alt="Spine and Pain Institute of Texas Building" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#0b192b] py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-teal-400 font-bold uppercase tracking-widest text-xs block mb-2">Our Mission</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">Your Health, Our Expertise</h2>
            <p className="text-slate-300 text-lg font-normal">Caring for the growing needs of our society.</p>
          </div>

          <div className="space-y-10 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            <p className="bg-white/5 p-6 rounded-2xl border border-white/10">
              At Spine &amp; Pain Institute of Texas, we specialize in <span className="text-teal-300 font-semibold underline underline-offset-4 decoration-teal-400">comprehensive pain management services</span> for the Dallas, TX, community and beyond. Under the expert guidance of Dr. Pritesh Patel, DO, a double board-certified pain management specialist in Dallas, our team is dedicated to helping patients achieve a pain-free, healthier life.
            </p>

            <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Approach to Pain Management Dallas Texas</h3>
              <p>
                We understand that every patient's pain is unique. Our pain management physicians believe in a personalized, patient-centered approach to care, ensuring that you receive the time and attention necessary for effective relief. Our mission is to set the standard for pain management service in Dallas, and throughout Texas by offering compassionate and thorough patient care.
              </p>
            </div>

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

            <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Advanced Diagnostics and Pain Management Treatment</h3>
              <p>
                Utilizing the latest advancements in diagnostic testing, we identify the root of your pain to deliver <span className="text-teal-300 font-semibold underline underline-offset-4 decoration-teal-400">accurate and effective treatments</span>. Our techniques include interventional procedures, comprehensive care plans, and behavioral health support. As leading Dallas Pain Clinic, we strive to provide cutting-edge options designed to improve your quality of life.
              </p>
            </div>

            <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Compassionate, Qualified Pain Management Team</h3>
              <p>
                Led by Dr. Pritesh Patel, our team at Spine &amp; Pain Institute of Texas combines clinical excellence with empathy. Known for his attentive listening and personable approach, Dr. Patel and our carefully selected staff ensure a warm, welcoming experience, reinforcing why we are among the top pain management specialist in Dallas.
              </p>
            </div>

            <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Patient-Centered Pain Care in Dallas, TX</h3>
              <p>
                At Spine &amp; Pain Institute of Texas, we view our patients as family. Our goal is to create a supportive environment where you feel respected and valued. We aim to make every step, <span className="text-teal-300 font-semibold underline underline-offset-4 decoration-teal-400">from scheduling to treatment</span>, stress-free and convenient.
              </p>
              <p className="mt-4">
                Take the first step toward a pain-free life by scheduling an appointment with a trusted pain specialist in Dallas, TX, today. Join countless others in the Dallas community who have found relief and restored quality of life through our expert care.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Combining Vast Experience Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:w-1/2 relative z-10">
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
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-6 h-6 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <span className="text-slate-800 font-semibold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Video / Image */}
            <div className="lg:w-1/2 relative w-full">
               <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer border border-slate-100">
                 <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" alt="Doctor examining spine model" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                   <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                     <Play className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 ml-1" fill="currentColor" />
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Second Feature Block */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Image */}
            <div className="lg:w-1/2 w-full">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[4/3] border border-slate-200">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" alt="Doctor consulting patient with spine model" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Checkboxes */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Key Patient Commitments</h3>
              <div className="flex flex-col space-y-4">
                {[
                  'Expert Pain Treatment, Lasting Relief',
                  'Trusted Results, Proven Outcomes',
                  'Specialized Pain Management, Dallas',
                  'Advanced Spine Care, Dallas Experts',
                  'Comprehensive Pain Management, Dallas'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3.5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-7 h-7 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <span className="text-slate-800 font-semibold text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#0b192b] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6">
            Experienced Pain Specialist in <span className="text-teal-300">Dallas</span>
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Our doctors at the Spine &amp; Pain Institute of Texas cover a comprehensive range of specialties in pain management and spine care.
          </p>
          <Link 
            to="/contact-us" 
            className="inline-flex items-center bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-xs uppercase tracking-wider gap-2"
          >
            <span>Contact Us Now</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
