import { ChevronRight, Check, Play, Heart, Home } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function About() {
  return (
    <div className="flex flex-col min-h-screen pt-28 bg-white">
      
      {/* Breadcrumb Header */}
      <div className="bg-[#f8fbff] py-16 px-4 lg:px-8 border-b border-gray-100">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">About Us | Pain Specialist Dallas</h1>
          <div className="flex items-center text-sm text-[#1e4682] bg-white w-max px-4 py-2 rounded shadow-sm">
            <Link to="/" className="hover:text-blue-500"><Home className="w-4 h-4" /></Link>
            <span className="mx-2 text-gray-400">»</span>
            <span className="font-medium">About Us | Pain Specialist...</span>
          </div>
        </div>
      </div>

      {/* Title & Image Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <div className="relative inline-block mb-10">
            <Heart className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-gray-100 opacity-60 -z-10" strokeWidth={1} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
              Expert <span className="text-[#1e4682]">Pain Specialist Dallas</span>
            </h2>
            <p className="text-xl text-gray-500 font-light">With over 25 years of experience</p>
          </div>
          
          <div className="max-w-5xl mx-auto rounded-md overflow-hidden shadow-2xl relative">
            <img 
               src="/Spine-Pain-Institute-of-Texas-2048x899.jpg" 
               alt="Spine and Pain Institute of Texas Building" 
               className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Blue Content Section */}
      <section className="bg-[#1e4682] py-24 text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Health, Our Expertise</h2>
            <p className="text-blue-200 text-xl font-light">Caring for the growing needs of our society.</p>
          </div>

          <div className="space-y-10 text-[17px] text-blue-50 leading-relaxed font-light">
            <p>
              At Spine & Pain Institute of Texas, we specialize in <span className="underline underline-offset-4 decoration-blue-300">comprehensive pain management services</span> for the Dallas, TX, community and beyond. Under the expert guidance of Dr. Pritesh Patel, DO, a double board-certified pain management specialist in Dallas, our team is dedicated to helping patients achieve a pain-free, healthier life.
            </p>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Approach to Pain Management Dallas Texas</h3>
              <p>
                We understand that every patient's pain is unique. Our pain management physicians believe in a personalized, patient-centered approach to care, ensuring that you receive the time and attention necessary for effective relief. Our mission is to set the standard for pain management service in Dallas, and throughout Texas by offering compassionate and thorough patient care.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Conditions Treated by Our Pain Specialist Dallas</h3>
              <p className="mb-4">Our expertise spans a broad range of pain conditions, including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 font-medium text-white">
                <li>Back and Lower Back Pain</li>
                <li>Neck Pain</li>
                <li>Shoulder Pain</li>
                <li>Knee Pain</li>
                <li>Headaches and Migraines</li>
                <li>Leg Pain and Sciatica</li>
                <li>Neuropathy</li>
              </ul>
              <p>
                Our team of board-certified pain management doctors in Dallas, Texas, is well-equipped to help you with any of these conditions, tailoring our care to address the root cause of your pain.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Advanced Diagnostics and Pain Management Treatment</h3>
              <p>
                Utilizing the latest advancements in diagnostic testing, we identify the root of your pain to deliver <span className="underline underline-offset-4 decoration-blue-300 font-medium text-white">accurate and effective treatments</span>. Our techniques include interventional procedures, comprehensive care plans, and behavioral health support. As leading Dallas Pain Clinic, we strive to provide cutting-edge options designed to improve your quality of life.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Compassionate, Qualified Pain Management Team</h3>
              <p>
                Led by Dr. Pritesh Patel, our team at Spine & Pain Institute of Texas combines clinical excellence with empathy. Known for his attentive listening and personable approach, Dr. Patel and our carefully selected staff ensure a warm, welcoming experience, reinforcing why we are among the top pain management specialist in Dallas.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Patient-Centered Pain Care in Dallas, TX</h3>
              <p>
                At Spine & Pain Institute of Texas, we view our patients as family. Our goal is to create a supportive environment where you feel respected and valued. We aim to make every step, <span className="underline underline-offset-4 decoration-blue-300 font-medium text-white">from scheduling to treatment</span>, stress-free and convenient.
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
              <div className="relative mb-8">
                <Heart className="absolute -left-8 -top-12 w-32 h-32 text-gray-100 opacity-60 -z-10" strokeWidth={1} />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-700 leading-tight">
                  Combining Vast Experience with <span className="text-[#1e4682]">Advanced Medical Knowledge</span>
                </h2>
              </div>
              
              <div className="text-gray-500 text-lg leading-relaxed font-light space-y-6 mb-12">
                <p>
                  At Texas Spine Pain, we are dedicated to helping patients in the Dallas area find relief from chronic back, neck, and nerve pain. Our team of board-certified interventional pain management specialist combines advanced medical expertise with compassionate, personalized care.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Dallas Pain Experts',
                  'Advanced Pain Relief',
                  'Dallas Pain Specialists',
                  'Dallas Pain Relief',
                  'Dallas Pain Clinic',
                  'Expert Pain Management in Dallas'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center group cursor-pointer hover:-translate-y-1 transition-all duration-300 p-2 -ml-2 rounded-lg hover:bg-gray-50 hover:shadow-md">
                    <div className="bg-[#17a2b8] group-hover:bg-[#1e4682] w-7 h-7 rounded-sm flex items-center justify-center mr-4 shrink-0 shadow-sm transition-colors duration-300">
                      <Check className="h-4 w-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-gray-700 font-semibold group-hover:text-[#1e4682] transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Video / Image */}
            <div className="lg:w-1/2 relative">
               <div className="aspect-[4/3] rounded-md overflow-hidden shadow-2xl relative group cursor-pointer">
                 <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" alt="Doctor examining spine model" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                   <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                     <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Second Feature Block (Image Left, Checkboxes Right) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Image */}
            <div className="lg:w-1/2">
              <div className="rounded-md overflow-hidden shadow-xl aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" alt="Doctor consulting patient with spine model" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Checkboxes */}
            <div className="lg:w-1/2">
              <div className="flex flex-col space-y-6">
                {[
                  'Expert Pain Treatment, Lasting Relief',
                  'Trusted Results, Proven Outcomes',
                  'Specialized Pain Management, Dallas',
                  'Advanced Spine Care, Dallas Experts',
                  'Comprehensive Pain Management, Dallas'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center group cursor-pointer hover:translate-x-2 transition-all duration-300 p-2 -ml-2 rounded-lg hover:bg-gray-50">
                    <div className="bg-[#17a2b8] group-hover:bg-[#1e4682] w-8 h-8 rounded-sm flex items-center justify-center mr-5 shrink-0 shadow-sm transition-colors duration-300">
                      <Check className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-gray-700 font-medium text-[17px] group-hover:text-[#1e4682] transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Blue CTA Banner */}
      <section className="relative mt-12 mb-32">
        {/* Dark Blue Background with Particles */}
        <div className="bg-[#1e4682] py-24 pb-40 px-4 lg:px-8 relative overflow-hidden">
          {/* Simple particle effect using absolute divs */}
          <div className="absolute top-10 left-[15%] w-3 h-3 bg-white/20 rounded-full"></div>
          <div className="absolute top-20 left-[20%] w-2 h-2 bg-white/10 rounded-full"></div>
          <div className="absolute top-12 left-[55%] w-4 h-4 bg-white/20 rounded-full"></div>
          <div className="absolute top-16 left-[60%] w-3 h-3 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-20 left-[10%] w-3 h-3 bg-white/20 rounded-full"></div>
          <div className="absolute bottom-16 left-[18%] w-4 h-4 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-12 right-[30%] w-2 h-2 bg-white/20 rounded-full"></div>
          <div className="absolute top-24 right-[10%] w-2 h-2 bg-white/10 rounded-full"></div>

          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Experienced Pain Specialist in <span className="underline decoration-blue-300 underline-offset-8">Dallas</span>
            </h2>
            <p className="text-blue-100 text-lg md:text-xl font-light max-w-4xl mx-auto">
              Our doctors at the Spine & Pain Institute of Texas cover a comprehensive range of specialties in pain management and spine care.
            </p>
          </div>
        </div>
        
        {/* Overlapping Contact Card */}
        <div className="container mx-auto px-4 lg:px-8 relative -mt-24 z-20">
          <div className="bg-[#1a458a] rounded-md shadow-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8 justify-between">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="bg-[#24529e] p-6 rounded-md shrink-0">
                <div className="w-10 h-10 relative flex items-center justify-center">
                  <div className="absolute w-2 h-10 bg-white rounded-full"></div>
                  <div className="absolute w-10 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Our expert doctors specialize in<br className="hidden md:block" /> pain management</h3>
                <p className="text-blue-100 font-light text-[15px]">
                  Our team is dedicated to supporting you with expert care when you need it most.
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <Link to="/contact-us" className="inline-flex items-center bg-white text-[#1a458a] font-bold px-8 py-3.5 rounded-sm hover:bg-gray-50 transition-colors shadow-lg">
                <ChevronRight className="w-5 h-5 mr-1" /> Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
