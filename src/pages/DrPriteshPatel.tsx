import { Check, ChevronRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function DrPriteshPatel() {
  return (
    <div className="flex flex-col min-h-screen pt-32">
      {/* Banner */}
      <section className="bg-[#f9fafc] py-12 lg:py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Dr. Pritesh Patel | Pain Management Doctor Dallas</h1>
          
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm font-semibold text-gray-500 bg-white inline-flex px-4 py-2 rounded-sm shadow-sm">
             <Link to="/" className="text-[#1e4682] hover:text-[#17a2b8] transition-colors">Home</Link>
             <span className="mx-2">»</span>
             <span className="text-[#17a2b8]">Dr. Pritesh Patel | Pain Management Doctor Dallas</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          
          <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
            {/* Left Content */}
            <div className="lg:w-2/3">
               <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Dr. Pritesh Patel, DO – Pain Management Doctor Dallas</h2>
               
               <p className="text-gray-600 mb-10 text-[17px] leading-relaxed">
                 Dr. Pritesh Patel is a highly skilled and compassionate pain management doctor and anesthesiologist with over 11 years of experience. He is dedicated to providing personalized and comprehensive pain management solutions to help patients lead healthier, more comfortable lives.
               </p>

               <div className="space-y-12">
                 {/* Education */}
                 <div className="border-t border-gray-100 pt-8">
                   <h3 className="text-2xl font-bold text-gray-800 mb-4">Education and Expertise</h3>
                   <p className="text-gray-600 text-[17px] leading-relaxed">
                     Dr. Patel completed his medical education at the <strong>University of New England College of Osteopathic Medicine</strong>, graduating in 2012. His extensive training and experience enable him to address a wide range of pain conditions and offer cutting-edge treatments.
                   </p>
                 </div>

                 {/* Board Certifications */}
                 <div className="border-t border-gray-100 pt-8">
                   <h3 className="text-2xl font-bold text-gray-800 mb-4">Board Certifications</h3>
                   <p className="text-gray-600 text-[17px] leading-relaxed mb-4">
                     Dr. Pritesh Patel is <strong>double board-certified</strong>, demonstrating his commitment to excellence in:
                   </p>
                   <ul className="space-y-2 ml-4">
                     <li className="flex items-center text-gray-600 text-[17px]">
                       <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3 shrink-0"></div>
                       Anesthesiology
                     </li>
                     <li className="flex items-center text-gray-600 text-[17px]">
                       <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3 shrink-0"></div>
                       Pain Medicine
                     </li>
                   </ul>
                 </div>

                 {/* Areas of Specialization */}
                 <div className="border-t border-gray-100 pt-8">
                   <h3 className="text-2xl font-bold text-gray-800 mb-4">Areas of Specialization</h3>
                   <p className="text-gray-600 text-[17px] leading-relaxed mb-4">
                     At the Spine & Pain Institute of Texas, Dr. Patel provides comprehensive care for various pain conditions, including:
                   </p>
                   <ul className="space-y-2 ml-4">
                     {[
                       'Back pain and lower back pain',
                       'Neck pain',
                       'Headaches and migraines',
                       'Leg pain and sciatica',
                       'Neuropathy',
                       'Joint pain',
                       'Sports injuries'
                     ].map((item, idx) => (
                       <li key={idx} className="flex items-center text-gray-600 text-[17px]">
                         <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3 shrink-0"></div>
                         {item}
                       </li>
                     ))}
                   </ul>
                 </div>
                 
                 {/* Treatment Approach */}
                 <div className="border-t border-gray-100 pt-8">
                   <h3 className="text-2xl font-bold text-gray-800 mb-4">Treatment Approach</h3>
                   <p className="text-gray-600 text-[17px] leading-relaxed">
                     Dr. Patel believes in a <strong>patient-centered approach</strong> to pain management. He takes the time to listen to each patient, thoroughly evaluate their condition, and develop personalized treatment plans. His goal is to not only alleviate pain but also enhance his patients' overall quality of life.
                   </p>
                 </div>

                 {/* Advanced Techniques */}
                 <div className="border-t border-gray-100 pt-8">
                   <h3 className="text-2xl font-bold text-gray-800 mb-4">Advanced Pain Management Techniques</h3>
                   <p className="text-gray-600 text-[17px] leading-relaxed mb-4">
                     Dr. Patel utilizes a range of advanced techniques, including:
                   </p>
                   <ul className="space-y-2 ml-4">
                     {[
                       'Minimally invasive procedures',
                       'Interventional pain management',
                       'Regenerative medicine',
                       'Spinal cord stimulation',
                       'Nerve blocks and injections'
                     ].map((item, idx) => (
                       <li key={idx} className="flex items-center text-gray-600 text-[17px]">
                         <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3 shrink-0"></div>
                         {item}
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:w-1/3 flex flex-col items-center lg:sticky lg:top-36">
               <img src="/Dr-Pritesh-Patel.png" alt="Dr. Pritesh Patel" className="w-full max-w-sm rounded-xl shadow-2xl mb-10 bg-gray-50 ring-4 ring-white hover:shadow-3xl transition-shadow duration-500" />
               
               {/* Premium Profile Card with Gauge */}
               <div className="w-full bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl border border-gray-100 shadow-lg">
                 <h4 className="font-bold text-gray-800 text-lg mb-8 text-center">Dr. Pritesh Patel's Professional Profile</h4>
                 
                 {/* Semi-circle Gauge Chart */}
                 <div className="flex justify-center mb-8">
                   <svg viewBox="0 0 200 120" className="w-56 h-32">
                     {/* Background arc */}
                     <path d="M 20 110 A 80 80 0 0 1 180 110" fill="none" stroke="#e5e7eb" strokeWidth="18" strokeLinecap="round" />
                     {/* Pain Management Specialist - outermost */}
                     <path d="M 20 110 A 80 80 0 0 1 180 110" fill="none" stroke="#1e4682" strokeWidth="18" strokeLinecap="round" strokeDasharray="251" strokeDashoffset="25">
                       <animate attributeName="stroke-dashoffset" from="251" to="25" dur="1.5s" fill="freeze" />
                     </path>
                     {/* Education */}
                     <path d="M 32 110 A 68 68 0 0 1 168 110" fill="none" stroke="#2563eb" strokeWidth="14" strokeLinecap="round" strokeDasharray="213" strokeDashoffset="32">
                       <animate attributeName="stroke-dashoffset" from="213" to="32" dur="1.3s" fill="freeze" />
                     </path>
                     {/* Expertise */}
                     <path d="M 42 110 A 58 58 0 0 1 158 110" fill="none" stroke="#3b82f6" strokeWidth="12" strokeLinecap="round" strokeDasharray="182" strokeDashoffset="27">
                       <animate attributeName="stroke-dashoffset" from="182" to="27" dur="1.1s" fill="freeze" />
                     </path>
                     {/* Board Certifications */}
                     <path d="M 50 110 A 50 50 0 0 1 150 110" fill="none" stroke="#93c5fd" strokeWidth="10" strokeLinecap="round" strokeDasharray="157" strokeDashoffset="24">
                       <animate attributeName="stroke-dashoffset" from="157" to="24" dur="0.9s" fill="freeze" />
                     </path>
                   </svg>
                 </div>

                 {/* Legend */}
                 <div className="flex flex-col space-y-3">
                   {[
                     { label: 'Board Certifications', color: 'bg-blue-300' },
                     { label: 'Expertise', color: 'bg-blue-500' },
                     { label: 'Education', color: 'bg-blue-600' },
                     { label: 'Pain Management Specialist', color: 'bg-[#1e4682]' }
                   ].map((item, idx) => (
                     <div key={idx} className="flex items-center group cursor-default hover:bg-blue-50 px-4 py-2.5 rounded-lg transition-all duration-300">
                       <div className={`${item.color} w-3 h-3 rounded-full mr-4 shrink-0 group-hover:scale-125 transition-transform duration-300 shadow-sm`}></div>
                       <span className="text-gray-600 text-sm font-semibold group-hover:text-[#1e4682] transition-colors duration-300">{item.label}</span>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </div>

          <div className="space-y-12 max-w-4xl">
             {/* Patient Experience */}
             <div className="border-t border-gray-100 pt-8">
               <h3 className="text-2xl font-bold text-gray-800 mb-4">Patient Experience</h3>
               <p className="text-gray-600 text-[17px] leading-relaxed">
                 Patients consistently praise Dr. Patel for his exceptional care and attention to detail. His friendly demeanor and willingness to explain treatment options help patients feel at ease and well-informed about their care.
               </p>
             </div>

             {/* Convenient Location */}
             <div className="border-t border-gray-100 pt-8">
               <h3 className="text-2xl font-bold text-gray-800 mb-4">Convenient Location and Telehealth Options</h3>
               <p className="text-gray-600 text-[17px] leading-relaxed mb-4">
                 Dr. Patel practices at the Spine & Pain Institute of Texas, conveniently located at:
               </p>
               <p className="text-gray-700 font-semibold mb-6">
                 3503 W Wheatland Rd, Suite #100<br/>Dallas, TX 75237
               </p>
               <p className="text-gray-600 text-[17px] leading-relaxed">
                 For added convenience, Dr. Patel also offers telehealth appointments, allowing patients to receive expert care from the comfort of their homes.
               </p>
             </div>

             {/* Meet your Doctor */}
             <div className="border-t border-gray-100 pt-8">
               <h3 className="text-2xl font-bold text-gray-800 mb-4">Meet your Pain Management Doctor in Dallas</h3>
               <p className="text-gray-600 text-[17px] leading-relaxed mb-4">
                 Don't let pain control your life. Take the first step towards relief by <Link to="/contact-us" className="text-[#17a2b8] hover:underline font-semibold">scheduling an appointment</Link> with Dr. Pritesh Patel. His expertise and commitment to patient care make him an excellent choice for those seeking effective pain management services in Dallas.
               </p>
               <p className="text-gray-600 text-[17px] leading-relaxed">
                 To schedule your consultation, call <a href="tel:4693130040" className="text-[#17a2b8] hover:underline font-semibold">469-313-0040</a> or use our online appointment request form.
               </p>
             </div>

             {/* Why Choose */}
             <div className="border-t border-gray-100 pt-8">
               <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Dr. Pritesh Patel?</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                 {[
                   'Over 11 years of experience in pain management and anesthesiology',
                   'Double board-certified specialist',
                   'Personalized treatment plans',
                   'Advanced pain management techniques',
                   'Compassionate and attentive care',
                   'Convenient location and telehealth options'
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-start">
                     <div className="bg-[#17a2b8] w-5 h-5 rounded-sm flex items-center justify-center mr-3 shrink-0 mt-0.5">
                       <Check className="h-3 w-3 text-white" />
                     </div>
                     <span className="text-gray-700 font-medium">{item}</span>
                   </div>
                 ))}
               </div>
               <p className="text-gray-600 text-[17px] leading-relaxed bg-gray-50 p-6 rounded-md border-l-4 border-[#1e4682]">
                 Experience the difference that an expert pain management doctor in Dallas can make in your life. Contact Dr. Pritesh Patel and the team at the Spine & Pain Institute of Texas today to start your journey toward a pain-free future.
               </p>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
}
