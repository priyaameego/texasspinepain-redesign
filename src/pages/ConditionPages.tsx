import { Link } from '@tanstack/react-router';
import { CheckCircle, Phone, ChevronRight, Calendar } from 'lucide-react';

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
    <div className="flex flex-col min-h-screen pt-32">

      {/* Hero */}
      <section className="bg-[#1e4682] py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#163566]/75 z-10 mix-blend-multiply"></div>
        <img src={heroImage} alt={title} className="absolute inset-0 w-full h-full object-cover object-center opacity-35 z-0" />
        <div className="container mx-auto px-4 lg:px-8 text-center text-white relative z-20">
          <p className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-blue-100 font-semibold mb-6 border border-white/20 text-sm">
            Spine &amp; Pain Institute of Texas
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed mb-10">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#appointment" className="bg-[#17a2b8] hover:bg-[#138496] text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg w-full sm:w-auto">
              Book Appointment
            </a>
            <a href="tel:4693130040" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" /> 469-313-0040
            </a>
          </div>
        </div>
      </section>

      {/* Intro + Symptoms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About {title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{intro}</p>
              <p className="text-gray-600 leading-relaxed">{description}</p>
              {causes && (
                <div className="mt-8">
                  <h3 className="font-bold text-[#1e4682] text-lg mb-4">Common Causes</h3>
                  <ul className="space-y-2">
                    {causes.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#17a2b8] mt-2 shrink-0"></div>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-[#f4f8ff] rounded-xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-[#1e4682] mb-6">Common Symptoms</h3>
                <ul className="space-y-3">
                  {symptoms.map((s, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#17a2b8] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1e4682] text-white rounded-xl p-8 shadow-xl">
                <Calendar className="w-8 h-8 text-blue-300 mb-4" />
                <h3 className="text-xl font-bold mb-3">Same-Day Appointments</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-5">
                  Don't let {title.toLowerCase()} hold you back. Contact our Dallas clinic today for expert evaluation and personalized treatment.
                </p>
                <a href="tel:4693130040" className="bg-[#17a2b8] hover:bg-[#138496] block text-center px-6 py-3 rounded font-bold transition-colors">
                  Call (469) 313-0040
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Treatment Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Spine &amp; Pain Institute of Texas, we offer comprehensive, evidence-based treatments tailored to your specific condition and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#17a2b8] transition-all">
                <div className="bg-[#1e4682] w-9 h-9 rounded-full flex items-center justify-center mb-4 shadow">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="font-semibold text-gray-800">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1e4682] text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Relief?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Our board-certified pain management specialists are here to help you find lasting relief from {title.toLowerCase()}. Schedule your consultation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#appointment" className="bg-[#17a2b8] hover:bg-[#138496] text-white px-10 py-4 rounded-md font-bold text-lg transition-colors shadow-lg w-full sm:w-auto">
              Schedule Consultation
            </a>
            <Link to="/services" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-10 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center w-full sm:w-auto">
              All Services <ChevronRight className="w-5 h-5 ml-1" />
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
    subtitle="Advanced knee pain management in Dallas. Restore mobility, reduce pain, and avoid unnecessary surgery."
    heroImage="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2000&auto=format&fit=crop"
    intro="Knee pain is among the most common complaints we treat. Whether caused by arthritis, injury, or overuse, our interventional approach can provide significant pain relief and help you regain function without surgery."
    description="Our knee pain specialists use advanced imaging and diagnostic techniques to precisely identify the source of your knee pain. From targeted injections to regenerative medicine, we offer a full spectrum of non-surgical treatments designed to restore comfort and mobility."
    symptoms={['Persistent aching or stiffness in the knee', 'Swelling or inflammation', 'Sharp pain with activity', 'Popping or crunching sounds', 'Inability to fully extend the knee', 'Weakness or instability']}
    treatments={['Corticosteroid Injections', 'Hyaluronic Acid (Viscosupplementation)', 'Platelet-Rich Plasma (PRP)', 'Genicular Nerve Blocks', 'Radiofrequency Ablation', 'Physical Therapy', 'Medication Management', 'Stem Cell Therapy', 'Regenerative Medicine']}
    causes={['Osteoarthritis', 'Tendinitis', 'Bursitis', 'Meniscus tears', 'Ligament injuries (ACL, MCL)', 'Patellofemoral syndrome']}
  />;
}
