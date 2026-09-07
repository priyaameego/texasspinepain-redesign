import { Link } from '@tanstack/react-router';
import { CheckCircle, Phone, ChevronRight, Calendar, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface ConditionPageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  symptoms: string[];
  treatments: string[];
  description: string;
  causes?: string[];
}

function ConditionPage({
  title, subtitle, heroImage, intro, symptoms, treatments, description, causes,
}: ConditionPageProps) {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white">
      <Helmet>
        <title>{title} Treatment Dallas | Spine & Pain Institute of Texas</title>
        <meta name="description" content={description.length > 155 ? description.substring(0, 155) + '...' : description} />
      </Helmet>

      {/* Editorial Subpage Hero Header */}
      <div className="bg-[#0b192b] text-white py-16 lg:py-24 px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b192b] via-[#0b192b]/90 to-teal-950/40" />
        <img 
          src={heroImage.replace('q=80&w=2000', 'q=30&w=600&blur=10&fm=webp')} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" 
          fetchPriority="high"
          loading="eager"
        />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-200">{title}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight mb-3">
            {title} Treatment in Dallas
          </h1>
          <p className="text-teal-200 text-base sm:text-lg font-medium max-w-2xl">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#appointment" className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
              Book Appointment
            </a>
            <a href="tel:4693130040" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal-300" /> (469) 313-0040
            </a>
          </div>
        </div>
      </div>

      {/* Intro + Symptoms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-7 space-y-6">
              <span className="text-teal-600 font-bold uppercase tracking-widest text-xs block mb-1">Condition Overview</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">About {title}</h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100 font-medium">{intro}</p>
              <p className="text-slate-600 leading-relaxed text-base">{description}</p>
              
              {causes && (
                <div className="pt-6 border-t border-slate-100">
                  <h3 className="font-serif font-bold text-slate-900 text-xl mb-4">Common Causes</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {causes.map((c, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-slate-700 text-sm bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-6">Common Symptoms</h3>
                <ul className="space-y-3">
                  {symptoms.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0b192b] text-white rounded-3xl p-8 shadow-xl border border-white/10">
                <Calendar className="w-8 h-8 text-teal-300 mb-4" />
                <h3 className="text-xl font-serif font-bold mb-2">Same-Day Appointments</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Don't let {title.toLowerCase()} hold you back. Contact our Dallas clinic today for expert evaluation and personalized treatment.
                </p>
                <a href="tel:4693130040" className="bg-teal-500 hover:bg-teal-400 block text-center px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md">
                  Call (469) 313-0040
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs block mb-2">Interventional Procedures</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">Treatment Options</h2>
            <p className="text-slate-500 text-base sm:text-lg">
              At Spine &amp; Pain Institute of Texas, we offer comprehensive, evidence-based treatments tailored to your specific condition and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-teal-500 transition-all flex items-center gap-3.5">
                <div className="bg-[#0b192b] text-teal-300 w-9 h-9 rounded-xl flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <p className="font-serif font-bold text-slate-900 text-sm sm:text-base">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0b192b] text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">Ready to Get Relief?</h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Our board-certified pain management specialists are here to help you find lasting relief from {title.toLowerCase()}. Schedule your consultation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#appointment" className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md w-full sm:w-auto">
              Schedule Consultation
            </a>
            <Link to="/services" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center w-full sm:w-auto gap-2">
              <span>All Services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

// ─── Individual condition pages ───────────────────────────────────────────────

export function PainManagement() {
  return <ConditionPage
    title="Pain Management"
    subtitle="Comprehensive, personalized pain management care in Dallas. Board-certified specialists dedicated to restoring your quality of life."
    heroImage="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop"
    intro="At Spine & Pain Institute of Texas, pain management is our core specialty. We take a comprehensive, multidisciplinary approach to evaluate and treat all types of acute and chronic pain conditions."
    description="Our board-certified pain management physicians use the latest evidence-based techniques to provide targeted, effective relief. We believe every patient deserves a personalized treatment plan that addresses the root cause of their pain."
    symptoms={['Persistent or recurring pain', 'Pain that limits daily activities', "Pain that doesn't respond to over-the-counter treatments", 'Pain following an injury or surgery', 'Chronic pain lasting more than 3 months', 'Pain affecting sleep and quality of life']}
    treatments={['Medication Management', 'Epidural Steroid Injections', 'Nerve Blocks', 'Radiofrequency Ablation', 'Spinal Cord Stimulation', 'Trigger Point Injections', 'Physical Therapy', 'Regenerative Medicine', 'Minimally Invasive Procedures']}
    causes={['Injury or trauma', 'Degenerative conditions', 'Inflammatory diseases', 'Nerve damage', 'Post-surgical pain', 'Musculoskeletal disorders']}
  />;
}

export function BackPain() {
  return <ConditionPage
    title="Back Pain"
    subtitle="Expert back pain diagnosis and treatment at our Dallas clinic. Don't let back pain control your life."
    heroImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2000&auto=format&fit=crop"
    intro="Back pain is one of the most common reasons people visit a doctor. Whether your pain is acute or chronic, our specialists provide targeted treatments to relieve pain and restore function."
    description="We treat all forms of back pain, from muscle strains to complex spinal conditions. Our comprehensive evaluation process identifies the exact source of your pain, allowing us to develop a treatment plan that works for you."
    symptoms={['Aching or stiffness along the spine', 'Sharp, localized pain after lifting', 'Chronic aching in the lower or mid-back', 'Pain radiating to the buttocks or legs', 'Muscle spasms or tightness', 'Difficulty standing straight or walking']}
    treatments={['Physical Therapy', 'Epidural Steroid Injections', 'Facet Joint Injections', 'Medial Branch Blocks', 'Radiofrequency Ablation', 'Spinal Cord Stimulation', 'Trigger Point Injections', 'Medication Management', 'Regenerative Medicine']}
    causes={['Muscle or ligament strain', 'Bulging or ruptured discs', 'Arthritis and osteoporosis', 'Skeletal irregularities', 'Poor posture over time', 'Injury or accident']}
  />;
}

export function LowerBackPain() {
  return <ConditionPage
    title="Lower Back Pain"
    subtitle="Specialized lower back pain treatment in Dallas. Our experts identify the source and provide targeted relief."
    heroImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2000&auto=format&fit=crop"
    intro="Lower back pain affects millions of Americans and is a leading cause of disability. Our specialists have extensive experience treating all types of lower back conditions, from simple strains to complex structural problems."
    description="The lumbar region of the spine bears much of your body's weight and is particularly vulnerable to injury. We use advanced diagnostic imaging and techniques to precisely identify the cause of your lower back pain and craft the most effective treatment strategy."
    symptoms={['Dull, aching pain in the lower back', 'Muscle spasms or cramping', 'Pain that worsens with sitting or standing', 'Stiffness after resting', 'Pain radiating to the hips or buttocks', 'Difficulty with everyday movements']}
    treatments={['Lumbar Epidural Steroid Injections', 'Facet Joint Blocks', 'Radiofrequency Ablation', 'Sacroiliac Joint Injections', 'Physical Therapy', 'Spinal Cord Stimulation', 'Trigger Point Injections', 'Regenerative Medicine (PRP)', 'Medication Management']}
    causes={['Herniated or bulging disc', 'Degenerative disc disease', 'Spinal stenosis', 'Spondylolisthesis', 'Muscle strain', 'Sacroiliac joint dysfunction']}
  />;
}

export function NeckPain() {
  return <ConditionPage
    title="Neck Pain"
    subtitle="Effective neck pain treatment in Dallas. Restore mobility and eliminate pain with our specialized cervical care."
    heroImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop"
    intro="Neck pain can stem from a wide variety of causes, from poor posture and muscle strain to structural cervical spine problems. Our specialists diagnose and treat the full spectrum of neck conditions."
    description="The cervical spine is complex and delicate. Our expert team uses advanced diagnostics to identify the precise cause of your neck pain — whether it's a muscle issue, disc problem, nerve compression, or joint dysfunction — and then creates a personalized treatment plan."
    symptoms={['Persistent or recurring neck pain', 'Stiffness and reduced range of motion', 'Headaches originating at the base of the skull', 'Pain radiating into the shoulders or arms', 'Numbness or tingling in the hands', 'Muscle weakness in arms or shoulders']}
    treatments={['Cervical Epidural Steroid Injections', 'Cervical Facet Joint Blocks', 'Medial Branch Blocks', 'Radiofrequency Ablation', 'Trigger Point Injections', 'Physical Therapy', 'Medication Management', 'Regenerative Medicine', 'Spinal Cord Stimulation']}
    causes={['Cervical disc herniation', 'Cervical spondylosis (arthritis)', 'Whiplash from auto accidents', 'Poor posture ("text neck")', 'Nerve compression', 'Muscle strain and tension']}
  />;
}

export function Headaches() {
  return <ConditionPage
    title="Headaches"
    subtitle="Chronic headache and migraine relief in Dallas. Find the root cause and get lasting treatment."
    heroImage="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2000&auto=format&fit=crop"
    intro="Chronic headaches and migraines significantly impact quality of life. Our pain specialists are trained to identify and treat the underlying causes of headache disorders, not just manage symptoms."
    description="We treat all headache types including migraines, tension headaches, cluster headaches, and cervicogenic headaches. Many headaches have treatable underlying causes — our comprehensive approach addresses these root causes for lasting relief."
    symptoms={['Frequent or chronic headaches', 'Throbbing or pulsating pain', 'Sensitivity to light and sound', 'Nausea with headache', 'Headaches lasting hours to days', 'Aura before headache onset']}
    treatments={['Nerve Blocks (Occipital, Trigeminal)', 'Trigger Point Injections', 'Botox for Chronic Migraine', 'Medication Management', 'Sphenopalatine Ganglion Block', 'Physical Therapy', 'Cervical Facet Injections', 'Lifestyle Management Counseling', 'Interventional Procedures']}
    causes={['Cervical spine dysfunction', 'Muscle tension and trigger points', 'Hormonal changes', 'Nerve sensitization', 'Sleep disorders', 'Stress and anxiety']}
  />;
}

export function Sciatica() {
  return <ConditionPage
    title="Sciatica"
    subtitle="Targeted sciatica relief in Dallas. End the pain, tingling, and weakness caused by sciatic nerve compression."
    heroImage="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2000&auto=format&fit=crop"
    intro="Sciatica describes pain that radiates along the path of the sciatic nerve — from your lower back through your hips, buttocks, and down each leg. Our specialists target the source of nerve compression for fast, effective relief."
    description="Sciatica is typically caused by a herniated disk, bone spur, or spinal stenosis that compresses part of the nerve. This causes inflammation, pain, and often numbness along the nerve path. Our minimally invasive treatments can provide rapid and lasting relief."
    symptoms={['Pain radiating from lower back down one leg', 'Sharp, burning, or shooting pain', 'Numbness or tingling in the leg', 'Muscle weakness in the affected leg', 'Pain worsened by sitting', 'Constant pain on one side of the buttocks']}
    treatments={['Lumbar Epidural Steroid Injections', 'Transforaminal Epidural Injections', 'Selective Nerve Root Blocks', 'Physical Therapy', 'Piriformis Injections', 'Spinal Cord Stimulation', 'Medication Management', 'Radiofrequency Ablation', 'Regenerative Medicine']}
    causes={['Herniated or slipped disc', 'Lumbar spinal stenosis', 'Degenerative disc disease', 'Spondylolisthesis', 'Piriformis syndrome', 'Pregnancy']}
  />;
}

export function Neuropathy() {
  return <ConditionPage
    title="Neuropathy"
    subtitle="Expert neuropathic pain treatment in Dallas. Restore sensation and relieve nerve pain with advanced therapies."
    heroImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2000&auto=format&fit=crop"
    intro="Peripheral neuropathy is a condition that results from damage to the peripheral nerves, causing weakness, numbness, and pain — usually in your hands and feet. Our specialists provide comprehensive diagnosis and treatment for all forms of neuropathy."
    description="Neuropathy can arise from many causes including diabetes, infections, inflammatory conditions, and trauma. Our individualized treatment approach targets both pain relief and addressing the underlying cause to slow or stop progression."
    symptoms={['Burning or shooting pain in extremities', 'Numbness or reduced sensation', 'Tingling or "pins and needles"', 'Muscle weakness', 'Sensitivity to touch', 'Balance and coordination problems']}
    treatments={['Spinal Cord Stimulation', 'Peripheral Nerve Stimulation', 'Nerve Blocks', 'Medication Management', 'Ketamine Infusions', 'Physical Therapy', 'TENS Therapy', 'Regenerative Medicine', 'Lifestyle and Dietary Counseling']}
    causes={['Diabetic neuropathy', 'Chemotherapy-induced neuropathy', 'Autoimmune diseases', 'Trauma or injury', 'Vitamin deficiencies', 'Alcoholism']}
  />;
}

export function LegPain() {
  return <ConditionPage
    title="Leg Pain"
    subtitle="Comprehensive leg pain diagnosis and treatment in Dallas. Walk, run, and live pain-free again."
    heroImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2000&auto=format&fit=crop"
    intro="Leg pain can result from conditions originating in the spine, joints, nerves, or blood vessels. Our specialists conduct thorough evaluations to identify the true source of your leg pain and provide targeted, effective treatments."
    description="Whether your leg pain is caused by sciatica, peripheral artery disease, joint problems, or nerve damage, we have the expertise and advanced treatment options to help you find lasting relief and restore your mobility."
    symptoms={['Aching or throbbing pain in the leg', 'Sharp pain with movement', 'Cramping or muscle spasms', 'Numbness or weakness', 'Pain radiating from the back into the leg', 'Swelling or inflammation']}
    treatments={['Epidural Steroid Injections', 'Nerve Blocks', 'Spinal Cord Stimulation', 'Peripheral Nerve Stimulation', 'Physical Therapy', 'Trigger Point Injections', 'Medication Management', 'Regenerative Medicine', 'Vascular Consultation Referral']}
    causes={['Sciatica and lumbar disc herniation', 'Peripheral neuropathy', 'Muscle strain or injury', 'Deep vein thrombosis', 'Arthritis', 'Peripheral artery disease']}
  />;
}

export function FacePain() {
  return <ConditionPage
    title="Face Pain"
    subtitle="Specialized facial pain treatment in Dallas. Relief from trigeminal neuralgia, TMJ, and chronic facial pain conditions."
    heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop"
    intro="Facial pain disorders can be debilitating and are often misdiagnosed. Our specialists are experienced in treating complex facial pain conditions including trigeminal neuralgia, atypical facial pain, and temporomandibular disorders."
    description="Facial pain can have many sources — nerves, joints, muscles, or referred pain from the cervical spine. Our diagnostic expertise allows us to identify the exact source and target treatment for maximum relief with minimal side effects."
    symptoms={['Sharp, electric shock-like pain in the face', 'Constant aching or burning facial pain', 'Pain triggered by touch, chewing, or speaking', 'Jaw pain and difficulty opening the mouth', 'Pain around the eye or forehead', 'Facial muscle spasms']}
    treatments={['Trigeminal Nerve Blocks', 'Sphenopalatine Ganglion Block', 'Botox Injections', 'Radiofrequency Ablation', 'Medication Management', 'Percutaneous Procedures', 'Physical Therapy', 'Trigger Point Injections', 'Spinal Cord Stimulation']}
    causes={['Trigeminal neuralgia', 'Temporomandibular joint (TMJ) disorder', 'Postherpetic neuralgia (shingles)', 'Atypical facial pain', 'Dental problems', 'Cervicogenic referred pain']}
  />;
}

export function KneePain() {
  return <ConditionPage
    title="Knee Pain"
    subtitle="Advanced knee pain management in Dallas. Restore your mobility, reduce pain, and explore alternatives to unnecessary surgery."
    heroImage="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2000&auto=format&fit=crop"
    intro="Struggling with knee pain can make simple daily activities like walking, climbing stairs, or playing with your kids feel impossible. We understand how frustrating it is when your body holds you back. At the Spine & Pain Institute of Texas, our goal is to help you find real, lasting relief."
    description="You don't always have to jump straight into invasive surgery for knee issues. Our specialists take the time to accurately diagnose the root cause of your pain. From cutting-edge regenerative medicine to targeted, minimally invasive treatments, we create personalized care plans designed to help you regain your active lifestyle."
    symptoms={['Persistent aching or stiffness in the knee', 'Swelling or inflammation that limits movement', 'Sharp pain during normal daily activities', 'Popping or crunching sounds', 'Inability to fully extend the knee', 'Weakness or a feeling of instability']}
    treatments={['Corticosteroid Injections', 'Hyaluronic Acid (Viscosupplementation)', 'Platelet-Rich Plasma (PRP)', 'Genicular Nerve Blocks', 'Radiofrequency Ablation', 'Physical Therapy', 'Medication Management', 'Stem Cell Therapy', 'Regenerative Medicine']}
    causes={['Osteoarthritis', 'Tendinitis', 'Bursitis', 'Meniscus tears', 'Ligament injuries (ACL, MCL)', 'Patellofemoral syndrome']}
  />;
}
