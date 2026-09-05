import { Activity, Shield, Users, Crosshair, ArrowRight, Brain, Zap, Stethoscope } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function Services() {
  const services = [
    {
      title: "Regenerative Medicine for Pain",
      subtitle: "Cutting-Edge Regenerative Therapies",
      desc: "Harnessing the latest in regenerative medicine, the Spine & Pain Institute of Texas offers Dallas patients innovative therapies to manage pain and promote healing. Through treatments such as PRP and stem cell therapy, our specialists provide advanced care options for joint pain, sports injuries, and degenerative conditions.",
      icon: <Activity className="w-8 h-8 text-[#17a2b8]" />
    },
    {
      title: "Interventional Pain Procedures",
      subtitle: "Minimally Invasive Pain Treatments",
      desc: "Specializing in minimally invasive interventional pain procedures, the Spine & Pain Institute of Texas offers Dallas patients targeted treatment options for lasting pain relief. By using image-guided techniques, such as nerve blocks, radiofrequency ablation, and spinal injections, our pain specialists can pinpoint pain sources and provide effective, localized relief.",
      icon: <Crosshair className="w-8 h-8 text-[#17a2b8]" />
    },
    {
      title: "Chronic Pain Management",
      subtitle: "Long-Term Pain Relief in Dallas",
      desc: "The Spine & Pain Institute of Texas provides comprehensive care for chronic pain, offering long-term relief solutions for Dallas patients. Chronic pain can result from conditions like arthritis, fibromyalgia, or other degenerative diseases, and our team of specialists combines various treatment options to help manage it effectively.",
      icon: <Shield className="w-8 h-8 text-[#17a2b8]" />
    },
    {
      title: "Neuropathy Treatment",
      subtitle: "Comprehensive Neuropathy Care",
      desc: "Our Dallas clinic offers advanced treatments for neuropathy, providing relief from nerve pain through innovative and integrated medical solutions. Our specialists use leading-edge technology and personalized care plans to manage and alleviate the discomfort of neuropathic pain.",
      icon: <Zap className="w-8 h-8 text-[#17a2b8]" />
    },
    {
      title: "Sports Injury Rehabilitation",
      subtitle: "Sports Injury Rehab in Dallas",
      desc: "At the Spine & Pain Institute of Texas, our Dallas clinic offers specialized sports injury rehabilitation to help athletes recover quickly and prevent future injuries. Our team creates tailored rehabilitation programs that blend physical therapy, advanced recovery techniques, and a focus on injury prevention.",
      icon: <Users className="w-8 h-8 text-[#17a2b8]" />
    },
    {
      title: "Headache and Migraine Management",
      subtitle: "Dallas Headache & Migraine Specialists",
      desc: "The Spine & Pain Institute of Texas offers advanced headache and migraine management for Dallas patients seeking relief from persistent head pain. With our innovative approaches, we provide effective treatment to reduce both the frequency and intensity of migraines and headaches.",
      icon: <Brain className="w-8 h-8 text-[#17a2b8]" />
    },
    {
      title: "Sciatica Pain Relief",
      subtitle: "Sciatica Treatment Dallas",
      desc: "For those struggling with sciatica, the Spine & Pain Institute of Texas provides targeted, specialized care to alleviate leg and lower back pain. Our Dallas team understands the complexities of sciatica, often caused by conditions like herniated discs or nerve compression, and focuses on precise diagnosis.",
      icon: <Stethoscope className="w-8 h-8 text-[#17a2b8]" />
    },
    {
      title: "Back & Neck Pain Treatment",
      subtitle: "Expert Back & Neck Pain Treatment in Dallas",
      desc: "Comprehensive care and advanced solutions for severe back and neck pain. We utilize cutting edge diagnostics and minimally invasive procedures to restore function, alleviate pain, and improve your daily quality of life.",
      icon: <Activity className="w-8 h-8 text-[#17a2b8]" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-32">
      {/* Banner */}
      <section className="bg-[#1e4682] py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img 
           src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop" 
           alt="Medical Services" 
           className="absolute inset-0 w-full h-full object-cover object-center opacity-40 z-0 mix-blend-overlay"
        />
        <div className="container mx-auto px-4 lg:px-8 text-center text-white relative z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services | Dallas Pain Clinic</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">Best clinic with over 25 years of experience</p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-md shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
                <div className="bg-[#f0f8ff] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <h4 className="text-[#17a2b8] font-semibold text-sm mb-4 uppercase tracking-wide">{service.subtitle}</h4>
                <p className="text-gray-600 text-[16px] leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                <div className="mt-auto">
                  <Link to="/contact-us" className="inline-flex items-center font-bold text-[#1e4682] group-hover:text-[#17a2b8] transition-colors">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Specialty Areas (Motor Vehicle, Workers Comp, etc.) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
           <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Specialty Services</h2>
           <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
             In addition to general pain management, we specialize in treating patients involved in specific types of accidents or requiring specialized documentation.
           </p>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/motor-vehicle-accidents" className="bg-[#f8f9fa] p-8 rounded-md border border-gray-200 hover:border-[#17a2b8] hover:shadow-xl transition-all group">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#1e4682] transition-colors">Motor Vehicle Accidents</h3>
              </Link>
              <Link to="/workers-compensation" className="bg-[#f8f9fa] p-8 rounded-md border border-gray-200 hover:border-[#17a2b8] hover:shadow-xl transition-all group">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#1e4682] transition-colors">Workers Compensation</h3>
              </Link>
              <Link to="/letter-of-protection" className="bg-[#f8f9fa] p-8 rounded-md border border-gray-200 hover:border-[#17a2b8] hover:shadow-xl transition-all group">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#1e4682] transition-colors">Letter of Protection</h3>
              </Link>
              <Link to="/truck-accidents" className="bg-[#f8f9fa] p-8 rounded-md border border-gray-200 hover:border-[#17a2b8] hover:shadow-xl transition-all group">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#1e4682] transition-colors">Truck Accidents</h3>
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
