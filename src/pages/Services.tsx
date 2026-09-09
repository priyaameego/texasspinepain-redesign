import { useState } from 'react';
import { 
  Search, PhoneCall, ArrowRight, Activity, Crosshair, Sparkles, CheckCircle2,
  Syringe, Brain, ShieldCheck, Shield, FileCheck, Stethoscope, Briefcase, Pill, Target, Settings, ArrowUpRight, Zap, ChevronRight, Home, X, Star, Users, UserCheck, Calendar
} from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { ScrollReveal } from '../components/ScrollReveal';
import { TiltWrapper } from '../components/TiltWrapper';
import { SEO } from '../components/SEO';

export function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const topBanners = [
    {
      title: "Back Pain Management",
      subtitle: "Expert Back Pain Treatment in Dallas | Spine & Pain Institute of Texas",
      image: "/pain-management-dallas-3d-new.webp"
    },
    {
      title: "Neck Pain Treatment",
      subtitle: "Advanced Neck Pain Solutions | Dallas Pain Specialists",
      image: "/pain-management-dallas-consult.webp"
    },
    {
      title: "Sciatica Pain Relief",
      subtitle: "Sciatica Treatment Dallas | Leg Pain Management Experts",
      image: "/pain-management-dallas-3d.webp"
    }
  ];

  const serviceSections = [
    {
      tabTitle: "Regenerative Medicine",
      title: "Cutting-Edge Regenerative Therapies | Pain Management Dallas Tx",
      icon: <Activity className="w-5 h-5 text-teal-600" />,
      badge: "Innovative Therapies",
      keywords: ['prp', 'platelet', 'stem cell', 'regenerative', 'joint pain', 'knee', 'shoulder', 'cartilage', 'arthritis', 'natural healing'],
      content: `Harnessing the latest in regenerative medicine, the Spine & Pain Institute of Texas offers Dallas patients innovative therapies to manage pain and promote healing. Through treatments such as PRP (Platelet-Rich Plasma) and stem cell therapy, our specialists provide advanced care options for joint pain, sports injuries, and degenerative conditions. These regenerative therapies aim to stimulate the body’s natural healing processes, offering an effective, less invasive alternative to surgery. Our Dallas clinic is dedicated to advancing pain relief through cutting-edge regenerative medicine, helping patients experience better mobility and a higher quality of life.`
    },
    {
      tabTitle: "Interventional Procedures",
      title: "Minimally Invasive Pain Treatments | Dallas Interventional Specialists",
      icon: <Crosshair className="w-5 h-5 text-teal-600" />,
      badge: "Targeted Relief",
      keywords: ['nerve block', 'radiofrequency ablation', 'rfa', 'spinal injection', 'epidural', 'steroid', 'image guided', 'targeted', 'minimally invasive', 'facet joint', 'injection'],
      content: `Specializing in minimally invasive interventional pain procedures, the Spine & Pain Institute of Texas offers Dallas patients targeted treatment options for lasting pain relief. By using image-guided techniques, such as nerve blocks, radiofrequency ablation, and spinal injections, our pain specialists can pinpoint pain sources and provide effective, localized relief. Our advanced pain management procedures are designed to reduce recovery time and improve patient outcomes, offering a convenient, minimally disruptive option for managing acute and chronic pain. Our dedication to precision and patient safety has made us a leading provider of interventional pain treatments in Dallas.`
    },
    {
      tabTitle: "Chronic Pain Management",
      title: "Long-Term Pain Relief in Dallas | Chronic Pain Specialists",
      icon: <Shield className="w-5 h-5 text-teal-600" />,
      badge: "Multidisciplinary Care",
      keywords: ['arthritis', 'fibromyalgia', 'long term', 'chronic', 'multidisciplinary', 'medication management', 'back pain', 'joint stiffness', 'body pain', 'crps'],
      content: `The Spine & Pain Institute of Texas provides comprehensive care for chronic pain, offering long-term relief solutions for Dallas patients. Chronic pain can result from conditions like arthritis, fibromyalgia, or other degenerative diseases, and our team of specialists combines various treatment options to help manage it effectively. Through a multidisciplinary approach, we create individualized treatment plans that may include physical therapy, medication management, and minimally invasive procedures. Our Dallas clinic focuses on improving patient quality of life by helping them regain function and independence through expert pain management service.`
    },
    {
      tabTitle: "Neuropathy Treatment",
      title: "Comprehensive Neuropathy Care | Dallas Nerve Pain Experts",
      icon: <Zap className="w-5 h-5 text-teal-600" />,
      badge: "Nerve Pain Experts",
      keywords: ['neuropathy', 'nerve pain', 'numbness', 'tingling', 'burning', 'diabetic neuropathy', 'peripheral neuropathy', 'nerve stimulation', 'feet', 'hands'],
      content: `Our Dallas clinic at the Spine & Pain Institute of Texas offers advanced treatments for neuropathy, providing relief from nerve pain through innovative and integrated medical solutions. Our specialists use leading-edge technology and personalized care plans to manage and alleviate the discomfort of neuropathic pain, which can result from conditions such as diabetes, nerve injury, or other underlying health issues. By offering options like nerve stimulation, regenerative medicine, and medication management, we help patients regain function and reduce pain effectively. Our expertise in nerve pain treatment ensures comprehensive pain management care for neuropathy patients in Dallas.`
    },
    {
      tabTitle: "Sports Injury Rehab",
      title: "Sports Injury Rehab in Dallas | Athletic Recovery Specialists",
      icon: <Users className="w-5 h-5 text-teal-600" />,
      badge: "Athletic Recovery",
      keywords: ['sports', 'athlete', 'sprain', 'strain', 'muscle', 'ligament', 'tendonitis', 'rehab', 'recovery', 'athletic', 'knee', 'shoulder'],
      content: `At the Spine & Pain Institute of Texas, our Dallas clinic offers specialized sports injury rehabilitation to help athletes recover quickly and prevent future injuries. Our team creates tailored rehabilitation programs that blend physical therapy, advanced recovery techniques, and a focus on injury prevention. Whether recovering from a sprain, muscle strain, or joint injury, athletes benefit from our high-tech sports clinic, where they receive personalized care in a supportive environment. Our athletic recovery specialists are dedicated to helping each patient regain peak performance safely and efficiently.`
    },
    {
      tabTitle: "Headache & Migraine",
      title: "Dallas Headache & Migraine Specialists | Innovative Pain Relief",
      icon: <Brain className="w-5 h-5 text-teal-600" />,
      badge: "Headache Specialists",
      keywords: ['headache', 'migraine', 'head pain', 'botox', 'occipital nerve block', 'tension headache', 'cluster headache', 'temple', 'vertigo', 'neck headache'],
      content: `The Spine & Pain Institute of Texas offers advanced headache and migraine management for Dallas patients seeking relief from persistent head pain. With our innovative approaches, we provide effective treatment to reduce both the frequency and intensity of migraines and headaches. Our comprehensive diagnostic process allows us to identify triggers and underlying causes, paving the way for individualized care plans that may include nerve blocks, Botox injections, and preventive strategies. Our minimally invasive treatment options aim to provide long-lasting relief and are tailored to meet each patient’s specific needs. As Dallas’s leading specialists in headache and migraine care, we focus on improving our patients’ overall well-being and quality of life.`
    },
    {
      tabTitle: "Sciatica Relief",
      title: "Sciatica Treatment Dallas | Leg Pain Management Experts",
      icon: <Stethoscope className="w-5 h-5 text-teal-600" />,
      badge: "Leg & Back Relief",
      keywords: ['sciatica', 'leg pain', 'sciatic nerve', 'herniated disc', 'pinched nerve', 'buttock pain', 'radiculopathy', 'lower back pain', 'slipped disc', 'lumbar'],
      content: `For setups struggling with sciatica, the Spine & Pain Institute of Texas provides targeted, specialized care to alleviate leg and lower back pain. Our Dallas team understands the complexities of sciatica, often caused by conditions like herniated discs or nerve compression, and focuses on precise diagnosis and customized treatment plans. By offering minimally invasive techniques such as nerve blocks, physical therapy, and interventional pain management procedures, our goal is to reduce sciatic nerve inflammation and relieve pressure, allowing patients to achieve greater comfort and mobility. Our commitment to addressing sciatica’s unique challenges makes us a trusted choice for leg pain management in Dallas, TX, helping patients regain their quality of life without invasive surgery.`
    },
    {
      tabTitle: "Neck Pain Treatment",
      title: "Advanced Neck Pain Solutions | Dallas Pain Specialists",
      icon: <Activity className="w-5 h-5 text-teal-600" />,
      badge: "Cervical Spine Care",
      keywords: ['neck pain', 'cervical', 'stiff neck', 'whiplash', 'cervical disc', 'car accident', 'upper back', 'radiculopathy', 'neck strain'],
      content: `The Spine & Pain Institute of Texas specializes in treating neck pain with advanced, effective solutions that target the root cause of discomfort. Our Dallas neck pain specialists combine in-depth diagnostics, physical therapy, and minimally invasive techniques to address each patient’s unique symptoms and provide lasting relief. Neck pain often stems from conditions like cervical disc issues, poor posture, or strain, and our team tailors treatments to manage pain effectively and restore function. We emphasize a patient-centered approach, providing guidance on posture, therapeutic exercises, and preventive care to minimize future discomfort. With our Dallas clinic’s focus on cervical pain treatment and personalized plans, patients can count on improved mobility and reduced pain.`
    }
  ];

  const filteredServices = serviceSections.filter(sec => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    const inTitle = sec.title.toLowerCase().includes(q);
    const inTab = sec.tabTitle.toLowerCase().includes(q);
    const inBadge = sec.badge.toLowerCase().includes(q);
    const inContent = typeof sec.content === 'string' ? String(sec.content).toLowerCase().includes(q) : false;
    const inKeywords = sec.keywords?.some(k => k.toLowerCase().includes(q));
    return inTitle || inTab || inBadge || inContent || inKeywords;
  });

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
    <div className="flex flex-col min-h-screen pt-24 bg-white">
      <SEO 
        title="Pain Management Services Dallas | Texas Spine & Pain Institute"
        description="Comprehensive pain management services in Dallas. Specializing in minimally invasive interventional treatments for back pain, sciatica, neck pain, and joint conditions."
        canonical="/services"
      />

      {/* ─── Editorial Subpage Hero ─── */}
      <div className="bg-[#0b192b] text-white py-16 lg:py-24 px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b192b] via-[#0b192b]/90 to-teal-950/40" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-200">Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight mb-3">
            Our Services | Dallas Pain Clinic
          </h1>
          <p className="text-teal-200 text-base sm:text-lg font-medium max-w-2xl">
            Over 25 years of clinical excellence &amp; interventional spine care.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#appointment-section" className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
              Make an Appointment
            </a>
            <a href="tel:4693130040" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-teal-300" /> (469) 313-0040
            </a>
          </div>
        </div>
      </div>

      {/* ─── Top 3 Featured Banners (Premium 3D Layout) ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/60 relative overflow-hidden">
        {/* Luxury Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {topBanners.map((banner, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 150} className="h-full">
                <TiltWrapper className="group h-full">
                  <div className="relative h-full bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(13,148,136,0.15)] transition-all duration-500 overflow-hidden border border-slate-100 hover:border-teal-200 flex flex-col">
                    
                    {/* Animated Image Header */}
                    <div className="relative overflow-hidden aspect-[4/3] w-full">
                      <img 
                        src={banner.image} 
                        alt={banner.title} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                        style={{ imageRendering: 'auto', backfaceVisibility: 'hidden' }}
                      />
                      {/* Gradient Overlay for luxury feel */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b192b]/95 via-[#0b192b]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                      
                      {/* Title embedded over image */}
                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-10 h-1 bg-teal-500 mb-4 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                        <h3 className="text-2xl font-serif font-bold text-white tracking-tight leading-tight">
                          {banner.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 sm:p-8 bg-white flex-grow flex flex-col justify-between relative z-10">
                      <p className="text-slate-600 text-sm font-medium leading-relaxed mb-8 opacity-90 group-hover:opacity-100 transition-opacity">
                        {banner.subtitle}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-slate-100 group-hover:border-teal-100 transition-colors">
                        <a 
                          href="#appointment-section" 
                          className="inline-flex items-center text-teal-600 font-bold hover:text-teal-700 text-xs uppercase tracking-wider group-hover:translate-x-2 transition-all duration-300 gap-2"
                        >
                          <span className="relative">
                            Schedule Evaluation
                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                          </span>
                          <ChevronRight className="w-4 h-4 bg-teal-50 text-teal-600 rounded-full p-0.5 group-hover:bg-teal-100 transition-colors" />
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltWrapper>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Interactive Service Search & Filter Section ─── */}
      <section className="py-20 bg-white border-b border-slate-100" id="services-details">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest block mb-2">
              Expert Treatments
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 tracking-tight">
              Specialized <span className="text-teal-600">Pain Management Services</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Search any symptom, condition, or procedure below to find targeted relief options.
            </p>
          </ScrollReveal>

          {/* ─── Premium Keyword Search Bar (Matching Reference Image) ─── */}
          <div className="mb-14 bg-[#0b192b] text-white p-5 sm:p-7 rounded-3xl shadow-2xl border border-teal-500/20 max-w-4xl mx-auto relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-teal-300">
                <span className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </span>
                <span>Trusted by Patients: Rated 4.7/5</span>
              </div>
              <div className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                <Search className="w-4 h-4 text-teal-400" /> Instant Keyword Search
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-1.5 shadow-lg flex items-center border-2 border-teal-400 focus-within:border-teal-500 transition-all">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type a keyword ..."
                  className="w-full px-4 py-3 text-slate-900 text-base sm:text-lg bg-transparent focus:outline-none placeholder-slate-400 font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-2 text-slate-400 hover:text-slate-600 rounded-xl mr-1"
                    title="Clear Search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                <button 
                  onClick={() => {}}
                  className="bg-[#0b192b] hover:bg-teal-600 text-white p-3.5 rounded-xl transition-colors shrink-0 shadow-md"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Quick Search Pills */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-medium">Quick Filters:</span>
              {['Back Pain', 'Sciatica', 'Neck Pain', 'PRP / Stem Cell', 'Neuropathy', 'Injections', 'Migraine', 'Sports Injury'].map((tag) => {
                const cleanTag = tag.split('/')[0].trim();
                const isSelected = searchQuery.toLowerCase() === cleanTag.toLowerCase();
                return (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(isSelected ? '' : cleanTag)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                      isSelected
                        ? 'bg-teal-500 text-white border-teal-400 shadow-sm'
                        : 'bg-white/10 hover:bg-white/20 text-slate-200 border-white/15'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Result Feedback */}
          {searchQuery && (
            <div className="mb-8 flex items-center justify-between bg-teal-50 border border-teal-200 px-6 py-4 rounded-2xl max-w-4xl mx-auto">
              <span className="text-slate-800 text-sm font-medium">
                Found <strong>{filteredServices.length}</strong> matching service{filteredServices.length !== 1 ? 's' : ''} for "<strong>{searchQuery}</strong>"
              </span>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs font-bold uppercase tracking-wider text-teal-700 hover:text-teal-900 underline flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" /> Reset Search
              </button>
            </div>
          )}

          {/* Desktop Tabs (Only visible when not searching or when search returns all) */}
          {!searchQuery && (
            <>
              <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-slate-50 p-2 rounded-2xl border border-slate-200">
                {serviceSections.map((sec, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                      activeTab === idx 
                        ? 'bg-[#0b192b] text-white shadow-md' 
                        : 'text-slate-600 hover:text-teal-600 hover:bg-white'
                    }`}
                  >
                    {sec.icon}
                    <span>{sec.tabTitle}</span>
                  </button>
                ))}
              </div>

              {/* Active Tab Showcase Card */}
              <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden mb-20">
                <div className="max-w-4xl mx-auto">
                  <span className="inline-block bg-teal-100 text-teal-800 font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 border border-teal-200">
                    {serviceSections[activeTab].badge}
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                    {serviceSections[activeTab].title}
                  </h2>

                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal mb-8 whitespace-pre-line">
                    {serviceSections[activeTab].content}
                  </p>

                  <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center text-xs font-semibold text-slate-600 gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600" />
                      Spine &amp; Pain Institute of Texas – Dallas Clinic
                    </div>
                    <a 
                      href="#appointment-section" 
                      className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md inline-flex items-center gap-1"
                    >
                      <span>Book Appointment Online</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Grid Services Cards (Filtered Dynamically) */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredServices.map((sec, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 50}>
                  <TiltWrapper className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-white p-3 rounded-2xl shadow-xs border border-slate-100 icon-wrapper">{sec.icon}</div>
                        <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">{sec.badge}</span>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{sec.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">{sec.content}</p>
                    </div>
                    <a href="#appointment-section" className="text-xs font-bold uppercase tracking-wider text-teal-600 hover:text-teal-700 inline-flex items-center gap-1">
                      <span>Consult Specialist</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </TiltWrapper>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 max-w-2xl mx-auto p-8">
              <Search className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">No Matching Services Found</h3>
              <p className="text-slate-600 text-sm mb-6">
                We couldn't find exact matches for "<strong>{searchQuery}</strong>". Please contact our Dallas clinic specialists directly or try searching for keywords like <em>back pain, sciatica, nerve blocks, or PRP</em>.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setSearchQuery('')}
                  className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  View All Services
                </button>
                <a
                  href="tel:4693130040"
                  className="bg-[#0b192b] hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md inline-flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-teal-300" /> Call (469) 313-0040
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── Back Pain / Dr. Patel Approach Section ─── */}
      <section className="py-20 bg-[#0b192b] text-white" id="dr-patel-approach">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <span className="text-teal-300 font-bold text-xs uppercase tracking-widest block mb-2">
              Dedicated Pain Care
            </span>
            
            <ScrollReveal direction="up" className="mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-8 text-white tracking-tight">
                Dallas Pain Clinic | Spine &amp; Pain Institute of Texas
              </h2>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal relative z-10">
                  <p className="text-white font-medium text-lg sm:text-xl leading-relaxed">
                    Pain can be an incredibly debilitating and challenging experience, especially when it becomes a chronic and persistent issue. However, there is hope for individuals who are grappling with even the most stubborn and severe chronic pain conditions. If you're searching for "pain management doctors near me" or "Dallas pain clinic", you're not alone in your journey.
                  </p>
                  <p>
                    Dr. Patel runs a dedicated pain management clinic at the Spine &amp; Pain Institute of Texas in DeSoto, Texas, is here to provide assistance and support.
                  </p>
                  <p>
                    At Dr. Patel's pain clinic we understand the unique and complex nature of chronic pain, and he is committed to tailoring a treatment plan that is specifically designed to address your individual needs and circumstances. Dr. Patel, who is a pain specialist, has an approach that goes beyond merely prescribing medications; it encompasses a comprehensive range of strategies and therapies to help you regain control over your life despite the challenges of chronic pain.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" className="mb-8">
              <h3 className="font-serif font-bold text-white text-2xl sm:text-3xl border-l-4 border-teal-500 pl-4">
                Key Elements of Dr. Patel's Approach:
              </h3>
            </ScrollReveal>

            {/* 5 Points */}
            <div className="space-y-4 mb-16 relative">
              <div className="absolute left-5 top-8 bottom-8 w-px bg-teal-500/20 hidden sm:block"></div>
              {drPatelPoints.map((pt, i) => (
                <ScrollReveal key={i} direction="left" delay={i * 100}>
                  <div className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 hover:border-teal-500/30 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 transition-all duration-300">
                    <div className="bg-[#0b192b] border-2 border-teal-500 text-teal-400 group-hover:bg-teal-500 group-hover:text-white text-lg font-bold w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300 shadow-lg relative z-10">
                      {pt.step}
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-bold text-white mb-2">{pt.title}</h3>
                      <p className="text-slate-300 text-base leading-relaxed">{pt.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal bg-gradient-to-r from-teal-900/40 to-[#0b192b] p-8 sm:p-10 rounded-3xl border border-teal-500/20 shadow-2xl">
              <p>
                By combining these various elements into a holistic treatment plan, Dr. Patel aims to empower you to manage your pain more effectively and improve your overall quality of life.
              </p>
              <p>
                If you're searching online for 'pain specialist in dallas" or a pain clinic nearby, know that many others are on a similar path to relief. If you are seeking relief from chronic pain and are interested in exploring Dr. Patel's approach to pain management, you can take the first step by <Link to="/contact-us" className="text-teal-400 font-bold underline hover:text-white transition-colors">contacting "Dallas pain center"</Link>, the Spine &amp; Pain Institute of Texas. They offer the convenience of both phone and online booking to make the process easy and accessible.
              </p>
              <div className="bg-teal-500/10 border border-teal-500/30 p-6 rounded-2xl mt-6">
                <p className="text-white font-semibold text-lg">
                  Don't let chronic pain hold you back from enjoying life to the fullest. Reach out to Dr. Patel and his team today to learn more about how they can help you on your journey to pain relief and improved well-being. Your path to a more comfortable and fulfilling life begins with a simple phone call or online appointment request.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Appointment Form Section ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60" id="appointment-section">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              <ScrollReveal direction="right" className="lg:col-span-5 bg-[#0b192b] relative min-h-[380px] lg:min-h-[580px] flex items-center justify-center p-8 overflow-hidden">
                <img 
                  src="https://texasspinepain.com/wp-content/uploads/2019/09/doctor-2.jpg" 
                  alt="Dr. Pritesh Patel - Spine and Pain Institute" 
                  className="w-full h-full object-cover object-top rounded-2xl shadow-2xl relative z-10 border border-white/10 max-w-sm lg:max-w-none"
                />
                
                <div className="absolute top-6 left-6 z-20 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-teal-300" /> Dr. Pritesh Patel, DO
                </div>
              </ScrollReveal>

              {/* Form */}
              <ScrollReveal direction="left" delay={200} className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-2">
                    Make an Appointment | Pain Clinic Dallas
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Primary care appointments and specialized interventional spine care
                  </p>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        name="your-name" 
                        required
                        placeholder="John Doe"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Mobile Number</label>
                      <input 
                        type="tel" 
                        name="mobile" 
                        required
                        placeholder="(469) 313-0040"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Email ID</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        placeholder="john@example.com"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Subject</label>
                      <input 
                        type="text" 
                        name="subject" 
                        required
                        placeholder="Pain Evaluation Request"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Message</label>
                    <textarea 
                      name="message" 
                      rows={4}
                      placeholder="Describe your symptoms or appointment request..."
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-slate-50/50 resize-y"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-teal-600 hover:bg-teal-500 text-white py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" /> Send Message
                  </button>
                </form>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
