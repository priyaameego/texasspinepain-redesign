import { Briefcase, PhoneCall, CheckCircle, ShieldCheck, FileCheck, Stethoscope, Clock, Zap, FileText, ChevronRight, Activity, Crosshair, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function WorkersCompensation() {
  return (
    <div className="flex flex-col min-h-screen pt-32">
      {/* Premium Banner */}
      <section className="bg-[#1e4682] py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#163566]/80 z-10 mix-blend-multiply"></div>
        <img 
           src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop" 
           alt="Workers Compensation" 
           className="absolute inset-0 w-full h-full object-cover object-center opacity-40 z-0"
        />
        <div className="container mx-auto px-4 lg:px-8 text-center text-white relative z-20">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-blue-100 font-semibold mb-6 border border-white/20">
             <Briefcase className="w-5 h-5 mr-2" /> Specialized Workers' Compensation Care
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Expert Workers' Comp Care in Dallas</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Dedicated medical care, advanced pain management, and full claim support for injured workers. We specialize in FECA & DOL cases for federal employees.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <a href="#appointment" className="bg-[#17a2b8] hover:bg-[#138496] text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg w-full sm:w-auto">
                Schedule Evaluation
             </a>
             <a href="tel:4693130040" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center w-full sm:w-auto">
                <PhoneCall className="w-5 h-5 mr-2" /> 469-313-0040
             </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Why Choose Our Dallas Workers' Comp Clinic</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We provide comprehensive medical care and navigate the complex workers' compensation claims process so you can focus on healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-md shadow-lg border-t-4 border-[#17a2b8]">
                <Clock className="w-10 h-10 text-[#17a2b8] mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Same-Day Appointments</h3>
                <p className="text-gray-600 leading-relaxed">
                  We reserve slots for urgent workplace injury evaluations so you can be seen immediately after your injury.
                </p>
             </div>
             <div className="bg-white p-8 rounded-md shadow-lg border-t-4 border-[#1e4682]">
                <Stethoscope className="w-10 h-10 text-[#1e4682] mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Comprehensive Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  From initial evaluation to return-to-work planning, we provide complete workers' compensation medical services.
                </p>
             </div>
             <div className="bg-white p-8 rounded-md shadow-lg border-t-4 border-[#17a2b8]">
                <FileText className="w-10 h-10 text-[#17a2b8] mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Electronic Filing Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  We handle ECOMP system navigation, form completion, and electronic submission for federal employees.
                </p>
             </div>
             <div className="bg-white p-8 rounded-md shadow-lg border-t-4 border-[#1e4682]">
                <ShieldCheck className="w-10 h-10 text-[#1e4682] mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">No Upfront Costs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Workers' compensation coverage typically covers all approved medical treatment with no out-of-pocket expenses.
                </p>
             </div>
             <div className="bg-white p-8 rounded-md shadow-lg border-t-4 border-[#17a2b8]">
                <CheckCircle className="w-10 h-10 text-[#17a2b8] mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">North Texas Coverage</h3>
                <p className="text-gray-600 leading-relaxed">
                  Serving workers from Dallas, Plano, Richardson, Garland, Mesquite, Irving, Carrollton, and surrounding communities.
                </p>
             </div>
             <div className="bg-white p-8 rounded-md shadow-lg border-t-4 border-[#1e4682]">
                <Briefcase className="w-10 h-10 text-[#1e4682] mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">FECA & DOL Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Specialized care for federal workers under FECA, including USPS, VA, TSA, and DOD employees.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Types of Injuries & Federal Focus */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          
          <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
             <div className="lg:w-2/3">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Types of Workplace Injuries We Treat</h2>
                <p className="text-gray-600 text-[17px] leading-relaxed mb-10">
                  Whether you work in an office, warehouse, construction site, or federal facility, our team understands the unique injury patterns associated with different work environments.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div>
                     <h4 className="text-lg font-bold text-[#1e4682] border-b-2 border-gray-100 pb-2 mb-4">Acute Traumatic Injuries</h4>
                     <p className="text-gray-500 text-sm mb-3">Sudden workplace accidents that cause immediate injury:</p>
                     <ul className="space-y-2 text-gray-600">
                       <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Lifting injuries & back strains</li>
                       <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Slip-and-fall accidents</li>
                       <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Machinery & equipment accidents</li>
                       <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> On-the-job vehicle collisions</li>
                     </ul>
                   </div>
                   <div>
                     <h4 className="text-lg font-bold text-[#1e4682] border-b-2 border-gray-100 pb-2 mb-4">Repetitive Strain Injuries</h4>
                     <p className="text-gray-500 text-sm mb-3">Injuries that develop over time from repeated work activities:</p>
                     <ul className="space-y-2 text-gray-600">
                       <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Carpal tunnel syndrome</li>
                       <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Rotator cuff injuries</li>
                       <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Chronic neck/back pain</li>
                       <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[#17a2b8] mt-1 mr-2 shrink-0" /> Tendonitis and bursitis</li>
                     </ul>
                   </div>
                </div>
             </div>
             
             {/* Federal Focus Sidebar */}
             <div className="lg:w-1/3">
                <div className="bg-[#1e4682] rounded-md p-8 shadow-xl text-white">
                   <ShieldCheck className="w-12 h-12 text-blue-300 mb-6" />
                   <h3 className="text-2xl font-bold mb-4">Federal Employee Injuries (FECA)</h3>
                   <p className="text-blue-100 leading-relaxed mb-6">
                     We specialize in treating federal workers under the Federal Employees' Compensation Act (FECA).
                   </p>
                   <ul className="space-y-3 text-blue-50 mb-8">
                     <li className="flex items-center"><ChevronRight className="w-4 h-4 text-[#17a2b8] mr-2" /> U.S. Postal Service</li>
                     <li className="flex items-center"><ChevronRight className="w-4 h-4 text-[#17a2b8] mr-2" /> Dept. of Veterans Affairs</li>
                     <li className="flex items-center"><ChevronRight className="w-4 h-4 text-[#17a2b8] mr-2" /> TSA Agents</li>
                     <li className="flex items-center"><ChevronRight className="w-4 h-4 text-[#17a2b8] mr-2" /> Dept. of Defense Civilians</li>
                   </ul>
                   <a href="#appointment" className="bg-[#17a2b8] hover:bg-[#138496] block text-center px-6 py-3 rounded font-bold transition-colors shadow-md">
                     Request FECA Evaluation
                   </a>
                </div>
             </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             {/* Process Support */}
             <div className="bg-gray-50 p-10 rounded-md border border-gray-100">
                <h3 className="text-2xl font-bold text-[#1e4682] mb-6">Workers' Compensation Process Support</h3>
                
                <h4 className="font-bold text-gray-800 mb-3 mt-8">Form Completion & Filing</h4>
                <ul className="space-y-2 text-gray-600 list-disc ml-4 marker:text-[#17a2b8]">
                  <li><strong>CA-1</strong> (Traumatic injury)</li>
                  <li><strong>CA-2</strong> (Occupational disease)</li>
                  <li><strong>CA-7</strong> (Wage loss)</li>
                  <li><strong>CA-16</strong> (Treatment authorization)</li>
                  <li><strong>CA-17</strong> (Duty status reports)</li>
                </ul>

                <h4 className="font-bold text-gray-800 mb-3 mt-8">ECOMP System Assistance</h4>
                <ul className="space-y-2 text-gray-600 list-disc ml-4 marker:text-[#17a2b8]">
                  <li>Electronic claim setup & submission</li>
                  <li>Medical documentation upload</li>
                  <li>Claim status monitoring</li>
                </ul>
                
                <h4 className="font-bold text-gray-800 mb-3 mt-8">Comprehensive Reporting</h4>
                <ul className="space-y-2 text-gray-600 list-disc ml-4 marker:text-[#17a2b8]">
                  <li>Progress & treatment notes</li>
                  <li>Functional capacity evaluations (FCE)</li>
                  <li>Return-to-work recommendations</li>
                </ul>
             </div>

             {/* Diagnostics and Treatment */}
             <div>
                <h3 className="text-2xl font-bold text-[#1e4682] mb-6">Advanced Diagnostic & Treatment Services</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We customize your treatment plan based on your workplace injury, job requirements, and return-to-work goals.
                </p>

                <div className="space-y-8">
                  <div className="flex">
                    <div className="bg-[#17a2b8] w-12 h-12 rounded-sm flex items-center justify-center mr-4 shrink-0 shadow-sm mt-1">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Diagnostics</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Digital X-rays & CT scans, MRI referrals, EMG/NCV for nerve evaluation, and functional capacity evaluations.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-[#1e4682] w-12 h-12 rounded-sm flex items-center justify-center mr-4 shrink-0 shadow-sm mt-1">
                      <Crosshair className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Non-Invasive & Injection Treatments</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Physical therapy, chiropractic adjustments, pain management injections (epidurals, facet blocks), and regenerative medicine.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-[#17a2b8] w-12 h-12 rounded-sm flex items-center justify-center mr-4 shrink-0 shadow-sm mt-1">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Rehabilitation & Return-to-Work</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Work conditioning programs, job-specific training, light-duty planning, and ergonomic training.</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Why Early Treatment Matters */}
      <section className="py-20 bg-[#1e4682] text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Early Treatment After a Workplace Injury Matters</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="bg-white/10 backdrop-blur-md p-8 rounded-md border border-white/20">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                  <Activity className="w-6 h-6 text-[#17a2b8] mr-3" /> Medical Benefits
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-blue-300 mt-0.5 mr-3 shrink-0" /> <span>Prevent chronic pain & disability</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-blue-300 mt-0.5 mr-3 shrink-0" /> <span>Accelerate healing & reduce inflammation</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-blue-300 mt-0.5 mr-3 shrink-0" /> <span>Establish timely medical records</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-blue-300 mt-0.5 mr-3 shrink-0" /> <span>Optimize recovery outcomes</span></li>
                </ul>
             </div>
             
             <div className="bg-white/10 backdrop-blur-md p-8 rounded-md border border-white/20">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                  <ShieldCheck className="w-6 h-6 text-[#17a2b8] mr-3" /> Legal Benefits
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-blue-300 mt-0.5 mr-3 shrink-0" /> <span>Strengthen workers' comp claims</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-blue-300 mt-0.5 mr-3 shrink-0" /> <span>Document injury-to-treatment timeline</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-blue-300 mt-0.5 mr-3 shrink-0" /> <span>Provide expert medical testimony if needed</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-blue-300 mt-0.5 mr-3 shrink-0" /> <span>Protect your rights under workers' comp law</span></li>
                </ul>
             </div>
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
           </div>

           <div className="space-y-6">
              {[
                {
                  q: "How soon should I report my injury and seek treatment?",
                  a: "Report and seek care within 24 hours of injury to protect your claim and health. Delays in reporting or treatment can jeopardize your workers' compensation benefits."
                },
                {
                  q: "Do you handle both state and federal workers' comp cases?",
                  a: "Yes—we handle state funds, private carriers, and FECA claims for federal employees. Our team has specialized experience with both systems."
                },
                {
                  q: "What if my claim is denied?",
                  a: "We provide comprehensive documentation and expert opinions to support appeals and can refer you to experienced workers' compensation attorneys when needed."
                },
                {
                  q: "Can I choose my provider for workers' comp?",
                  a: "Often, yes. We'll help you understand your rights and options under your specific workers' compensation coverage."
                },
                {
                  q: "What is ECOMP and how do you help with it?",
                  a: "ECOMP is the electronic system for federal employee workers' compensation claims. We assist with account setup, form completion, and electronic submission of all required documentation."
                },
                {
                  q: "Do you provide return-to-work evaluations?",
                  a: "Yes. We conduct functional capacity evaluations, work conditioning programs, and provide detailed return-to-work recommendations including any necessary job accommodations."
                }
              ].map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-md border border-gray-200 overflow-hidden shadow-sm">
                  <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-gray-800 hover:text-[#1e4682] transition-colors">
                    <span className="flex items-center text-lg"><HelpCircle className="w-5 h-5 text-[#17a2b8] mr-3 shrink-0" /> {faq.q}</span>
                    <span className="transition group-open:rotate-180">
                      <ChevronRight className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-3 group-open:animate-fadeIn p-6 pt-0 leading-relaxed border-t border-gray-100">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
}
