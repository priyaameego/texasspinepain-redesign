import { useState } from 'react';
import { 
  Activity, Crosshair, Shield, Zap, Users, Brain, Stethoscope, ChevronRight, 
  Clock, PhoneCall, Calendar, CheckCircle2, UserCheck, Heart, Sparkles
} from 'lucide-react';

export function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const topBanners = [
    {
      title: "Back Pain Management",
      subtitle: "Expert Back Pain Treatment in Dallas | Spine & Pain Institute of Texas",
      image: "https://texasspinepain.com/wp-content/uploads/2024/11/Back-Pain-Management-780x480.jpeg"
    },
    {
      title: "Neck Pain Treatment",
      subtitle: "Advanced Neck Pain Solutions | Dallas Pain Specialists",
      image: "https://texasspinepain.com/wp-content/uploads/2024/11/Neck-Pain-Treatment-780x480.jpeg"
    },
    {
      title: "Sciatica Pain Relief",
      subtitle: "Sciatica Treatment Dallas | Leg Pain Management Experts",
      image: "https://texasspinepain.com/wp-content/uploads/2024/11/Sciatica-Pain-Relief-780x480.jpeg"
    }
  ];

  const serviceSections = [
    {
      tabTitle: "Regenerative Medicine",
      title: "Cutting-Edge Regenerative Therapies | Pain Management Dallas Tx",
      icon: <Activity className="w-6 h-6 text-[#17a2b8]" />,
      badge: "Innovative Therapies",
      content: `Harnessing the latest in regenerative medicine, the Spine & Pain Institute of Texas offers Dallas patients innovative therapies to manage pain and promote healing. Through treatments such as PRP (Platelet-Rich Plasma) and stem cell therapy, our specialists provide advanced care options for joint pain, sports injuries, and degenerative conditions. These regenerative therapies aim to stimulate the body’s natural healing processes, offering an effective, less invasive alternative to surgery. Our Dallas clinic is dedicated to advancing pain relief through cutting-edge regenerative medicine, helping patients experience better mobility and a higher quality of life.`
    },
    {
      tabTitle: "Interventional Procedures",
      title: "Minimally Invasive Pain Treatments | Dallas Interventional Specialists",
      icon: <Crosshair className="w-6 h-6 text-[#17a2b8]" />,
      badge: "Targeted Relief",
      content: `Specializing in minimally invasive interventional pain procedures, the Spine & Pain Institute of Texas offers Dallas patients targeted treatment options for lasting pain relief. By using image-guided techniques, such as nerve blocks, radiofrequency ablation, and spinal injections, our pain specialists can pinpoint pain sources and provide effective, localized relief. Our advanced pain management procedures are designed to reduce recovery time and improve patient outcomes, offering a convenient, minimally disruptive option for managing acute and chronic pain. Our dedication to precision and patient safety has made us a leading provider of interventional pain treatments in Dallas.`
    },
    {
      tabTitle: "Chronic Pain Management",
      title: "Long-Term Pain Relief in Dallas | Chronic Pain Specialists",
      icon: <Shield className="w-6 h-6 text-[#17a2b8]" />,
      badge: "Multidisciplinary Care",
      content: `The Spine & Pain Institute of Texas provides comprehensive care for chronic pain, offering long-term relief solutions for Dallas patients. Chronic pain can result from conditions like arthritis, fibromyalgia, or other degenerative diseases, and our team of specialists combines various treatment options to help manage it effectively. Through a multidisciplinary approach, we create individualized treatment plans that may include physical therapy, medication management, and minimally invasive procedures. Our Dallas clinic focuses on improving patient quality of life by helping them regain function and independence through expert pain management service.`
    },
    {
      tabTitle: "Neuropathy Treatment",
      title: "Comprehensive Neuropathy Care | Dallas Nerve Pain Experts",
      icon: <Zap className="w-6 h-6 text-[#17a2b8]" />,
      badge: "Nerve Pain Experts",
      content: `Our Dallas clinic at the Spine & Pain Institute of Texas offers advanced treatments for neuropathy, providing relief from nerve pain through innovative and integrated medical solutions. Our specialists use leading-edge technology and personalized care plans to manage and alleviate the discomfort of neuropathic pain, which can result from conditions such as diabetes, nerve injury, or other underlying health issues. By offering options like nerve stimulation, regenerative medicine, and medication management, we help patients regain function and reduce pain effectively. Our expertise in nerve pain treatment ensures comprehensive pain management care for neuropathy patients in Dallas.`
    },
    {
      tabTitle: "Sports Injury Rehab",
      title: "Sports Injury Rehab in Dallas | Athletic Recovery Specialists",
      icon: <Users className="w-6 h-6 text-[#17a2b8]" />,
      badge: "Athletic Recovery",
      content: `At the Spine & Pain Institute of Texas, our Dallas clinic offers specialized sports injury rehabilitation to help athletes recover quickly and prevent future injuries. Our team creates tailored rehabilitation programs that blend physical therapy, advanced recovery techniques, and a focus on injury prevention. Whether recovering from a sprain, muscle strain, or joint injury, athletes benefit from our high-tech sports clinic, where they receive personalized care in a supportive environment. Our athletic recovery specialists are dedicated to helping each patient regain peak performance safely and efficiently.`
    },
    {
      tabTitle: "Headache & Migraine",
      title: "Dallas Headache & Migraine Specialists | Innovative Pain Relief",
      icon: <Brain className="w-6 h-6 text-[#17a2b8]" />,
      badge: "Headache Specialists",
      content: `The Spine & Pain Institute of Texas offers advanced headache and migraine management for Dallas patients seeking relief from persistent head pain. With our innovative approaches, we provide effective treatment to reduce both the frequency and intensity of migraines and headaches. Our comprehensive diagnostic process allows us to identify triggers and underlying causes, paving the way for individualized care plans that may include nerve blocks, Botox injections, and preventive strategies. Our minimally invasive treatment options aim to provide long-lasting relief and are tailored to meet each patient’s specific needs. As Dallas’s leading specialists in headache and migraine care, we focus on improving our patients’ overall well-being and quality of life.`
    },
    {
      tabTitle: "Sciatica Relief",
      title: "Sciatica Treatment Dallas | Leg Pain Management Experts",
      icon: <Stethoscope className="w-6 h-6 text-[#17a2b8]" />,
      badge: "Leg & Back Relief",
      content: `For those struggling with sciatica, the Spine & Pain Institute of Texas provides targeted, specialized care to alleviate leg and lower back pain. Our Dallas team understands the complexities of sciatica, often caused by conditions like herniated discs or nerve compression, and focuses on precise diagnosis and customized treatment plans. By offering minimally invasive techniques such as nerve blocks, physical therapy, and interventional pain management procedures, our goal is to reduce sciatic nerve inflammation and relieve pressure, allowing patients to achieve greater comfort and mobility. Our commitment to addressing sciatica’s unique challenges makes us a trusted choice for leg pain management in Dallas, TX, helping patients regain their quality of life without invasive surgery.`
    },
    {
      tabTitle: "Neck Pain Treatment",
      title: "Advanced Neck Pain Solutions | Dallas Pain Specialists",
      icon: <Activity className="w-6 h-6 text-[#17a2b8]" />,
      badge: "Cervical Spine Care",
      content: `The Spine & Pain Institute of Texas specializes in treating neck pain with advanced, effective solutions that target the root cause of discomfort. Our Dallas neck pain specialists combine in-depth diagnostics, physical therapy, and minimally invasive techniques to address each patient’s unique symptoms and provide lasting relief. Neck pain often stems from conditions like cervical disc issues, poor posture, or strain, and our team tailors treatments to manage pain effectively and restore function. We emphasize a patient-centered approach, providing guidance on posture, therapeutic exercises, and preventive care to minimize future discomfort. With our Dallas clinic’s focus on cervical pain treatment and personalized plans, patients can count on improved mobility and reduced pain.`
    }
  ];

  const drPatelPoints = [
    {
      step: "1",
      title: "Personalized Treatment Plan:",
      text: "At his pain clinic in dallas, Dr. Patel recognizes that each patient's pain is unique. He conducts a thorough evaluation to understand the underlying causes and contributing factors of your pain. This allows him to create a customized pain treatment plan that is tailored to your condition and needs."
    },
    {
      step: "2",
      title: "Medication Management:",
      text: "While medications may be a part of the pain treatment plan, Dr. Patel is careful and judicious in their use. He focuses on optimizing pain relief while minimizing potential side effects or risks of dependency."
    },
    {
      step: "3",
      title: "Physical Therapies:",
      text: "Physical therapy plays a crucial role in managing chronic pain. At his pain management clinic, Dr. Patel may recommend specific exercises and techniques to improve mobility, strengthen muscles, and alleviate pain."
    },
    {
      step: "4",
      title: "Psychotherapy:",
      text: "Chronic pain often takes a toll on a person's mental and emotional well-being. Dr. Patel may incorporate psychotherapy or counseling to address the emotional aspects of pain, such as anxiety, depression, and stress."
    },
    {
      step: "5",
      title: "Interventions:",
      text: "Depending on your condition, Dr. Patel may recommend interventional pain management procedures. These minimally invasive techniques can include injections, nerve blocks, or other targeted approaches to provide relief from pain."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-32">
      {/* ─── Hero Section ─── */}
      <section className="bg-gradient-to-br from-[#1e4682] via-[#163566] to-[#0f2447] py-16 lg:py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[#163566]/80 z-10 mix-blend-multiply"></div>
        <img 
          src="http://texasspinepain.com/wp-content/uploads/revslider/slider3.jpg" 
          alt="Our Services - Spine and Pain Institute" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30 z-0"
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-20 max-w-5xl text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-blue-100 font-semibold mb-6 border border-white/20 text-xs sm:text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4 mr-2 text-[#17a2b8]" /> Comprehensive Pain Management
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Our <span className="text-[#17a2b8]">Services | Dallas Pain Clinic</span>
          </h1>

          <p className="text-xl sm:text-2xl text-blue-100 font-light max-w-3xl mx-auto leading-relaxed">
            Best clinic with over 25 years of experience
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#appointment-section" className="bg-[#17a2b8] hover:bg-[#138496] text-white px-8 py-4 rounded-xl font-bold text-base transition-colors shadow-lg hover:shadow-xl">
              Make an Appointment
            </a>
            <a href="tel:4693130040" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-base transition-colors flex items-center">
              <PhoneCall className="w-5 h-5 mr-2" /> (469) 313-0040
            </a>
          </div>
        </div>
      </section>

      {/* ─── Top 3 Service Banners (Original Texas Spine Pain Assets) ─── */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topBanners.map((banner, idx) => (
              <div 
                key={idx} 
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200/80 flex flex-col justify-between"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img 
                    src={banner.image} 
                    alt={banner.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e4682]/90 via-[#1e4682]/40 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{banner.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 bg-white flex-grow flex flex-col justify-between">
                  <p className="text-gray-700 text-base font-semibold leading-snug mb-6">
                    {banner.subtitle}
                  </p>
                  
                  <a href="#appointment-section" className="inline-flex items-center text-[#1e4682] font-bold hover:text-[#17a2b8] transition-colors text-sm group-hover:translate-x-1 transition-transform">
                    Schedule Evaluation <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Service Content Tabs / Detailed Cards ─── */}
      <section className="py-20 bg-white border-b border-gray-100" id="services-details">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#17a2b8] font-bold text-xs uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100 mb-3 inline-block">
              Expert Treatments
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
              Specialized <span className="text-[#1e4682]">Pain Management Services</span>
            </h2>
          </div>

          {/* Desktop & Tablet Tab Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-gray-50 p-2 rounded-2xl border border-gray-200">
            {serviceSections.map((sec, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center gap-2 ${
                  activeTab === idx 
                    ? 'bg-[#1e4682] text-white shadow-md' 
                    : 'text-gray-600 hover:text-[#1e4682] hover:bg-white'
                }`}
              >
                {sec.icon}
                <span>{sec.tabTitle}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#17a2b8]/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-[#17a2b8]/10 text-[#17a2b8] font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#17a2b8]/20">
                {serviceSections[activeTab].badge}
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e4682] mb-6 leading-tight">
                {serviceSections[activeTab].title}
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed font-normal mb-8 whitespace-pre-line">
                {serviceSections[activeTab].content}
              </p>

              <div className="pt-6 border-t border-gray-200/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center text-sm font-semibold text-gray-500">
                  <CheckCircle2 className="w-5 h-5 text-[#17a2b8] mr-2" />
                  Spine &amp; Pain Institute of Texas – Dallas Clinic
                </div>
                <a 
                  href="#appointment-section" 
                  className="bg-[#1e4682] hover:bg-[#163566] text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors shadow-md inline-flex items-center"
                >
                  Book Appointment Online <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Grid View of All 8 Services for Accessibility & Printability */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceSections.map((sec, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white p-3 rounded-xl shadow-xs border border-gray-100">{sec.icon}</div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#17a2b8] bg-teal-50 px-2.5 py-1 rounded-full">{sec.badge}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{sec.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{sec.content}</p>
                </div>
                <a href="#appointment-section" className="text-sm font-bold text-[#1e4682] hover:text-[#17a2b8] inline-flex items-center">
                  Consult Specialist <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Back Pain Management / Dr. Patel Section ─── */}
      <section className="py-20 bg-[#1e4682] text-white" id="dr-patel-approach">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <span className="text-teal-300 font-bold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 mb-4 inline-block">
              Dedicated Pain Care
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-white tracking-tight">
              Dallas Pain Clinic | Spine &amp; Pain Institute of Texas
            </h2>

            <div className="space-y-6 text-blue-100 text-base sm:text-lg leading-relaxed font-light mb-12">
              <p>
                Pain can be an incredibly debilitating and challenging experience, especially when it becomes a chronic and persistent issue. However, there is hope for individuals who are grappling with even the most stubborn and severe chronic pain conditions. If you're searching for "pain management doctors near me" or "Dallas pain clinic", you're not alone in your journey.
              </p>
              <p>
                Dr. Patel runs a dedicated pain management clinic at the Spine &amp; Pain Institute of Texas in DeSoto, Texas, is here to provide assistance and support.
              </p>
              <p>
                At Dr. Patel's pain clinic we understand the unique and complex nature of chronic pain, and he is committed to tailoring a treatment plan that is specifically designed to address your individual needs and circumstances. Dr. Patel, who is a pain specialist, has an approach that goes beyond merely prescribing medications; it encompasses a comprehensive range of strategies and therapies to help you regain control over your life despite the challenges of chronic pain.
              </p>
              <p className="font-semibold text-white text-lg sm:text-xl pt-2">
                Here are some key elements of Dr. Patel's pain management approach:
              </p>
            </div>

            {/* 5 Numbered Key Points */}
            <div className="space-y-6 mb-12">
              {drPatelPoints.map((pt, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/15 shadow-md flex items-start gap-4 sm:gap-6">
                  <div className="bg-[#17a2b8] text-white text-xl font-extrabold w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    {pt.step}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{pt.title}</h3>
                    <p className="text-blue-50 text-sm sm:text-base leading-relaxed font-normal">{pt.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Outro Paragraphs */}
            <div className="space-y-6 text-blue-100 text-base sm:text-lg leading-relaxed font-light">
              <p>
                By combining these various elements into a holistic treatment plan, Dr. Patel aims to empower you to manage your pain more effectively and improve your overall quality of life.
              </p>
              <p>
                If you're searching online for 'pain specialist in dallas" or a pain clinic nearby, know that many others are on a similar path to relief. If you are seeking relief from chronic pain and are interested in exploring Dr. Patel's approach to pain management, you can take the first step by <a href="/contact-us" className="text-teal-300 font-bold underline hover:text-white">contacting "Dallas pain center",</a> the Spine &amp; Pain Institute of Texas. They offer the convenience of both phone and online booking to make the process easy and accessible.
              </p>
              <p className="text-white font-medium">
                Don't let chronic pain hold you back from enjoying life to the fullest. Reach out to Dr. Patel and his team today to learn more about how they can help you on your journey to pain relief and improved well-being. Your path to a more comfortable and fulfilling life begins with a simple phone call or online appointment request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Doctor Image & Appointment Section ─── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100" id="appointment-section">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Doctor Image Container (Original Asset) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#1e4682] to-[#163566] relative min-h-[400px] lg:min-h-[600px] flex items-center justify-center p-8 overflow-hidden">
                <img 
                  src="https://texasspinepain.com/wp-content/uploads/2019/09/doctor-2.jpg" 
                  alt="Dr. Pritesh Patel - Spine and Pain Institute" 
                  className="w-full h-full object-cover object-top rounded-2xl shadow-2xl relative z-10 border border-white/20 max-w-sm lg:max-w-none"
                />
                
                <div className="absolute top-6 left-6 z-20 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-teal-300" /> Dr. Pritesh Patel, DO
                </div>

                <div className="absolute bottom-6 right-6 z-20 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-medium">
                  Spine &amp; Pain Specialist
                </div>
              </div>

              {/* Form Container */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1e4682] mb-2 tracking-tight">
                    Make an Appointment | Pain Clinic Dallas
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg font-light">
                    Primary care appointments and some specialties
                  </p>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        name="your-name" 
                        required
                        placeholder="John Doe"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent transition-all bg-gray-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Mobile Number</label>
                      <input 
                        type="tel" 
                        name="mobile" 
                        required
                        placeholder="(469) 313-0040"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent transition-all bg-gray-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Email ID</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        placeholder="john@example.com"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent transition-all bg-gray-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Subject</label>
                      <input 
                        type="text" 
                        name="subject" 
                        required
                        placeholder="Pain Evaluation Request"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent transition-all bg-gray-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Message</label>
                    <textarea 
                      name="message" 
                      rows={4}
                      placeholder="Describe your symptoms or appointment request..."
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent transition-all bg-gray-50/50 resize-y"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#1e4682] hover:bg-[#163566] text-white py-4 rounded-xl font-bold text-base transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" /> Send Message
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
