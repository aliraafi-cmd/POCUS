import React, { useState } from 'react';
import { 
  Activity, 
  Anchor, 
  AlertTriangle, 
  CheckCircle, 
  Maximize, 
  User, 
  Menu,
  Zap,
  Eye,
  Image as ImageIcon,
  ExternalLink,
  Thermometer,
  Scan,
  HelpCircle,
  ArrowLeft,
  Info,
  ChevronRight,
  X,
  Code2,
  Stethoscope,
  Lightbulb
} from 'lucide-react';

// --- CUSTOM ICONS ---
const KidneyIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 21a8.6 8.6 0 0 0 6.3-3.2A8.6 8.6 0 0 0 19 6.7a6 6 0 0 0-10.7 4.8A7.5 7.5 0 0 0 5 19c2 2 4.5 2.5 7 2Z" />
    <path d="M9 12c2 0 4 2 4 4" opacity="0.5"/>
  </svg>
);

const LungsIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 19c0-5-3-9-6-9-2 0-4 2-4 5 0-3 2-5 4-5 3 0 6 4 6 9 0 4-2 7-5 7-2 0-4-2-5-5" />
    <path d="M6 19c0-5 3-9 6-9 2 0 4 2 4 5 0-3-2-5-4-5-3 0-6 4-6 9 0 4 2 7 5 7 2 0 4-2 5-5" />
  </svg>
);

// --- DATA: MODULES ---
const modules = [
  {
    id: 'renal',
    title: 'Renal',
    description: 'Hydronephrosis & Obstruction',
    icon: KidneyIcon,
    color: 'blue',
    pearls: [
      "Hydronephrosis is dynamic. A dehydrated patient may show a false negative. Re-scan after fluid resuscitation if suspicion remains high.",
      "For the Left Kidney, use the 'Knuckles to the Bed' technique. It is much more posterior and superior than you think!",
      "Bonus: Look for the 'Twinkling Artifact' on Color Doppler behind calcifications to spot kidney stones."
    ],
    scan: {
      params: [
        { icon: Anchor, label: "Indication", value: "Renal colic, AKI, Urinary Retention." },
        { icon: Thermometer, label: "Transducer", value: "Curvilinear (2-5 MHz)." },
        { icon: User, label: "Position", value: "Supine or Lateral Decubitus." },
        { icon: Maximize, label: "Landmarks", value: "Costal margin, Mid/Posterior Axillary Line." },
        { icon: Stethoscope, label: "Optimization", value: "Deep Inspiration (moves kidney inferiorly)." }
      ],
      steps: [
        "Right Kidney: Place probe in the Mid-Axillary Line (8th-11th rib space). Use the liver as a window.",
        "Left Kidney: Place probe in the Posterior-Axillary Line (higher, 6th-9th rib space). 'Knuckles to the bed' is often required.",
        "Find the Window: Slide probe anterior-posterior until the kidney is visualized (look for the crisp white capsule).",
        "Axis Alignment: Rotate the probe slightly (15-30°) to align with the true longitudinal axis of the kidney (oblique lie).",
        "Optimize: Slide cephalad-caudad to center the kidney. Adjust depth to see the retroperitoneum (psoas muscle) behind it.",
        "Sweep: Fan completely through the kidney from anterior to posterior. If you do not fan, you will miss cysts or masses!",
        "Orthogonal View: Rotate 90 degrees to view in transverse (short axis) to confirm hydronephrosis."
      ],
      qualityCriteria: [
        "Entire renal capsule visualized (superior to inferior pole).",
        "Maximal renal length obtained (rotate to find the longest axis).",
        "Differentiation between cortex (hypoechoic) and sinus fat (hyperechoic).",
        "Clear distinction from liver/spleen interface."
      ],
      indeterminate: [
        "Obesity limiting depth of penetration (try lower frequency/Curvilinear).",
        "Intestinal gas shadowing obscuring the lower pole.",
        "Rib shadows blocking view (ask patient to hold deep breath)."
      ],
      pitfalls: [
        { title: "Renal Pyramids", problem: "Hypoechoic triangles in medulla mimicking cysts/hydro.", fix: "Normal finding in young/thin patients. Pyramids are uniformly spaced." },
        { title: "Renal Vessels", problem: "Prominent veins mimicking fluid.", fix: "Apply Color Doppler. Flow = Vessels. No Flow = Hydro." },
        { title: "Extrarenal Pelvis", problem: "Fluid collection seen outside the renal sinus.", fix: "Benign variant. No calyceal dilation present." }
      ]
    },
    resources: [
      { title: "POCUS Journal: Kidney & Bladder", url: "https://pocusjournal.com/article/2022-07-kidney-p94-104/" },
      { title: "ACEP SonoGuide", url: "https://www.acep.org/sonoguide/basic/renal-ultrasound" },
      { title: "Renal Fellow Gallery", url: "https://www.renalfellow.org/pocus-gallery/" }
    ],
    referenceData: {
      positive: {
        title: "Positive Scan (Hydronephrosis)",
        criteria: [
          "Mild: Dilation of Renal Pelvis & Major Calyces only.",
          "Moderate: Dilation of Minor Calyces ('Bear Claw' / Cauliflower).",
          "Severe: Cortical thinning/effacement with ballooning."
        ],
        image: "https://placehold.co/600x400/222/FFF?text=Positive:+Bear+Claw+Hydro"
      },
      negative: {
        title: "Negative Scan (Normal)",
        criteria: [
          "Renal Sinus is hyperechoic (bright white) and compact.",
          "Cortex is isoechoic or hypoechoic to Liver.",
          "No anechoic (black) fluid separating the sinus fat."
        ],
        image: "https://placehold.co/600x400/222/FFF?text=Negative:+Normal+Kidney"
      }
    }
  },
  {
    id: 'lung-effusion',
    title: 'Lungs: Pleural Effusion',
    description: 'Hemothorax & Fluid Assessment',
    icon: LungsIcon,
    color: 'indigo',
    pearls: [
      "The 'PLAPS Point' (Posterior Lateral Alveolar and/or Pleural Syndrome) is the most sensitive zone for fluid. It is lower and more posterior than you think!",
      "The 'Spine Sign' is pathognomonic. If the spine continues ABOVE the diaphragm, fluid is transmitting the sound. If it stops, air is blocking it (Normal).",
      "Is it Ascites or Effusion? Use the diaphragm as the border. Fluid 'outside' (closer to probe) is Ascites. Fluid 'inside' (deep to diaphragm) is Effusion."
    ],
    scan: {
      params: [
        { icon: Anchor, label: "Indication", value: "Trauma, Dyspnea, Infection, Procedural." },
        { icon: Thermometer, label: "Transducer", value: "Phased Array (fits between ribs) or Curvilinear." },
        { icon: User, label: "Position", value: "Semi-recumbent or Sitting (fluid is gravity dependent)." },
        { icon: Maximize, label: "Landmarks", value: "Posterior Axillary Line, Diaphragm Level (8th-10th rib)." },
        { icon: Eye, label: "Look For", value: "The 'Great Divider' (Diaphragm), Spine, Liver/Spleen." }
      ],
      steps: [
        "Start: Place probe at the Posterior Axillary Line at the level of the xiphoid. This is the PLAPS point.",
        "Identify Landmarks: Find the hyperechoic curved line of the Diaphragm and the solid organ (Liver/Spleen) below it.",
        "Optimize Depth: Increase depth until you can clearly see the vertebral bodies (Spine) in the far field.",
        "The Slide: Slide cranially to view the thoracic cavity above the diaphragm. In normal lung, this should be a 'white out' or 'curtain'.",
        "The Sweep: Fan the probe anteriorly and posteriorly. Fluid may be loculated or hidden in the costophrenic recess.",
        "M-Mode (Optional): Use M-mode to look for the 'Sinusoid Sign' (lung moving toward pleura during inspiration)."
      ],
      qualityCriteria: [
        "Diaphragm is clearly visualized as a distinct, curved hyperechoic line.",
        "Spine is visible in the far field (behind the liver/spleen).",
        "Clear interface between the chest wall, diaphragm, and abdominal organs.",
        "Image is deep enough to visualize potential fluid pockets behind the heart."
      ],
      indeterminate: [
        "Complex/Loculated Effusions: May mimic solid masses or consolidated lung (Hepatization).",
        "White-out Lung: If you see white but NO spine sign, it may be a massive consolidation without fluid.",
        "Subcutaneous Emphysema: Air in tissues blocking the window entirely."
      ],
      pitfalls: [
        { title: "Mirror Image Artifact", problem: "Liver appears 'reflected' above the diaphragm.", fix: "This is NORMAL. Air scatters sound. Fluid breaks the mirror (Spine Sign)." },
        { title: "Ascites vs Effusion", problem: "Fluid seen near diaphragm.", fix: "Trace the Diaphragm. Fluid superficial to it is Abdominal (Ascites). Fluid deep to it is Thoracic." },
        { title: "Left Side Confusion", problem: "Stomach gas blocking the view.", fix: "Move probe more posterior (Knuckles to bed) and superior to use the Spleen as a window." }
      ]
    },
    resources: [
      { title: "Annals ATS: Ultrasound for Pleural Disease", url: "https://www.atsjournals.org/doi/10.1513/AnnalsATS.202008-948CME" },
      { title: "Stanford Medicine 25: Lung US", url: "https://med.stanford.edu/stanfordmedicine25/the25/lung-ultrasound.html" },
      { title: "ASRA: POCUS Spotlight", url: "https://asra.com/news-publications/asra-newsletter/newsletter-item/asra-news/2022/02/07/point-of-care-ultrasound-spotlight-lung-ultrasound" },
      { title: "YouTube: Jellyfish Sign", url: "https://youtu.be/8V649L5Q368" }
    ],
    referenceData: {
      positive: {
        title: "Positive Scan (Effusion)",
        criteria: [
          "Anechoic (black) space cranial to the diaphragm.",
          "Positive Spine Sign: Vertebral bodies visible above diaphragm.",
          "Jellyfish Sign: Compressed lung floating/undulating in fluid.",
          "Quad Sign: Boundaries defined by ribs and parietal/visceral pleura.",
          "Plankton Sign: Swirling debris (indicates complex/exudative fluid)."
        ],
        image: "https://placehold.co/600x400/222/FFF?text=Positive:+Spine+Sign"
      },
      negative: {
        title: "Negative Scan (Normal)",
        criteria: [
          "Curtain Sign: Aerated lung moves down to obscure liver/spleen during inspiration.",
          "Mirror Image Artifact: Liver/Spleen texture 'reflected' above diaphragm.",
          "Spine Cut-off: Spine shadow ends abruptly at the diaphragm."
        ],
        image: "https://placehold.co/600x400/222/FFF?text=Negative:+Mirror+Image"
      }
    }
  }
];

// --- MAIN APP COMPONENT ---

export default function PocusApp() {
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' or 'module'
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [activeTab, setActiveTab] = useState('scan');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const activeModule = modules.find(m => m.id === activeModuleId);

  // --- NAVIGATION HANDLERS ---
  
  const openModule = (id) => {
    setActiveModuleId(id);
    setCurrentView('module');
    setActiveTab('scan');
    setSidebarOpen(false);
  };

  const goHome = () => {
    setCurrentView('dashboard');
    setActiveModuleId(null);
    setSidebarOpen(false);
  };

  // --- VIEWS ---

  // 1. DASHBOARD VIEW (HOME)
  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
        {/* Tighter Utility Header */}
        <header className="bg-slate-900 text-white py-6 px-4 sm:px-6 border-b border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Activity size={120} />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
             <div>
               <div className="flex items-center space-x-3 mb-1">
                 <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">POCUS Quick Reference</h1>
                 <span className="px-2 py-0.5 bg-white/10 backdrop-blur-sm rounded text-[10px] font-bold uppercase tracking-wider border border-white/20 text-blue-100">
                   SASK IM
                 </span>
               </div>
               <p className="text-slate-400 text-sm max-w-lg">
                 Rapid bedside acquisition and interpretation guide.
               </p>
             </div>
          </div>
        </header>

        {/* Module Grid - Fluid Layout */}
        <main className="flex-1 px-4 sm:px-6 py-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((mod) => (
              <button 
                key={mod.id}
                onClick={() => openModule(mod.id)}
                className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-400 transition-all text-left group flex flex-col h-full relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-${mod.color}-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 opacity-50`}></div>
                
                <div className={`w-10 h-10 rounded-lg bg-${mod.color}-50 flex items-center justify-center text-${mod.color}-600 mb-3 group-hover:scale-110 transition-transform relative z-10`}>
                  <mod.icon size={20} />
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-1 relative z-10">{mod.title}</h3>
                <p className="text-xs text-slate-500 flex-grow relative z-10">{mod.description}</p>
                
                <div className="mt-4 flex items-center text-blue-600 text-xs font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity relative z-10">
                  Open Module <ChevronRight size={14} className="ml-1" />
                </div>
              </button>
            ))}
          </div>
        </main>

        {/* Footer / Credits */}
        <footer className="bg-white border-t border-slate-200 py-6 text-center">
           <div className="flex items-center justify-center space-x-2 text-slate-400 mb-1">
             <Code2 size={14} />
             <span className="text-[10px] font-bold uppercase tracking-widest">BETA RELEASE v0.9</span>
           </div>
           <p className="text-[10px] text-slate-500">
             Internal Medicine • University of Saskatchewan
           </p>
        </footer>
      </div>
    );
  }

  // 2. MODULE VIEW (The Tool - Desktop Optimized)
  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden relative">
      
      {/* SIDEBAR NAVIGATION */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30
        w-72 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-slate-700 flex items-center justify-between shrink-0">
          <div>
            <h1 className="text-lg font-bold text-blue-400 tracking-tight">SASK IM POCUS</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Quick Reference</p>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <nav className="p-4 flex-1 overflow-y-auto flex flex-col">
          <button 
             onClick={goHome}
             className="w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white mb-6 transition-colors shrink-0"
          >
             <ArrowLeft size={16} className="mr-3" />
             Back to Dashboard
          </button>

          <div className="mb-6 shrink-0">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2">Modules</h3>
            <ul className="space-y-1">
              {modules.map(mod => (
                <li key={mod.id}>
                   <button 
                     onClick={() => openModule(mod.id)}
                     className={`w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeModuleId === mod.id ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
                   >
                     <mod.icon size={16} className="mr-3" />
                     <span className="truncate">{mod.title}</span>
                   </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-auto shrink-0 space-y-3">
            {activeModule.pearls.map((pearl, idx) => (
              <div key={idx} className="px-4 py-4 bg-slate-800 rounded-xl border border-slate-700">
                <div className="flex items-center space-x-2 mb-2">
                  <Lightbulb size={16} className="text-yellow-400" />
                  <span className="text-xs font-bold text-slate-200">Clinical Pearl</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pearl}
                </p>
              </div>
            ))}
          </div>
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-full overflow-hidden w-full relative bg-slate-50">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 shadow-sm z-10 shrink-0">
          <div className="flex items-center flex-1 min-w-0 mr-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden mr-3 text-slate-500 hover:text-slate-700 transition-colors">
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-bold text-slate-800 truncate">{activeModule.title}</h2>
          </div>
          
          {/* Tab Switcher */}
          <div className="flex bg-slate-100 p-1 rounded-lg shrink-0">
             <button 
                onClick={() => setActiveTab('scan')}
                className={`flex items-center space-x-2 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-all ${activeTab === 'scan' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <Scan size={16} className="hidden sm:block" />
                <span>The Scan</span>
              </button>
              <button 
                onClick={() => setActiveTab('reference')}
                className={`flex items-center space-x-2 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-all ${activeTab === 'reference' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <ImageIcon size={16} className="hidden sm:block" />
                <span>Reference</span>
              </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8 pb-20">
          <div className="max-w-7xl mx-auto space-y-6">

            {/* --- TAB: THE SCAN --- */}
            {activeTab === 'scan' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                
                {/* 1. Parameters Card */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        {activeModule.scan.params.slice(0, 3).map((p, i) => (
                          <ParamItem key={i} icon={p.icon} label={p.label} value={p.value} />
                        ))}
                      </div>
                      <div className="space-y-4">
                        {activeModule.scan.params.slice(3).map((p, i) => (
                          <ParamItem key={i} icon={p.icon} label={p.label} value={p.value} />
                        ))}
                      </div>
                   </div>
                </div>

                {/* 2. Steps List */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className={`bg-${activeModule.color}-50/50 border-b border-${activeModule.color}-100 p-4 flex items-center`}>
                    <h3 className={`font-bold text-${activeModule.color}-900`}>Scanning Technique</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    {activeModule.scan.steps.map((step, i) => (
                       <Step key={i} text={step} />
                    ))}
                  </div>
                </div>

                {/* 3. Quality & Limitations */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                   <div className="bg-white rounded-xl border border-emerald-100 shadow-sm overflow-hidden h-full">
                      <div className="bg-emerald-50/50 border-b border-emerald-100 p-4 flex items-center">
                         <CheckCircle size={20} className="text-emerald-600 mr-2" />
                         <h3 className="font-bold text-emerald-900 text-sm">Reliable Scan Criteria</h3>
                      </div>
                      <div className="p-4">
                         <ul className="space-y-3">
                            {activeModule.scan.qualityCriteria.map((crit, i) => (
                               <li key={i} className="flex items-start">
                                  <div className="min-w-[6px] h-[6px] rounded-full bg-emerald-400 mt-1.5 mr-2"></div>
                                  <span className="text-sm text-slate-700 leading-snug">{crit}</span>
                               </li>
                            ))}
                         </ul>
                      </div>
                   </div>

                   <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-full">
                      <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center">
                         <HelpCircle size={20} className="text-slate-500 mr-2" />
                         <h3 className="font-bold text-slate-700 text-sm">Indeterminate / Negative</h3>
                      </div>
                      <div className="p-4">
                         <p className="text-xs text-slate-400 mb-3 uppercase tracking-wide font-bold">Limitations</p>
                         <ul className="space-y-3">
                            {activeModule.scan.indeterminate.map((limit, i) => (
                               <li key={i} className="flex items-start">
                                  <div className="min-w-[6px] h-[6px] rounded-full bg-slate-300 mt-1.5 mr-2"></div>
                                  <span className="text-sm text-slate-600 leading-snug">{limit}</span>
                               </li>
                            ))}
                         </ul>
                      </div>
                   </div>
                </div>

                {/* 4. Common Pitfalls */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                   <div className="flex items-center mb-4">
                      <AlertTriangle size={20} className="text-amber-500 mr-2" />
                      <h3 className="font-bold text-slate-800">Common Pitfalls</h3>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {activeModule.scan.pitfalls.map((t, i) => (
                         <div key={i}>
                            <p className="text-xs text-slate-400 font-bold uppercase mb-1">{t.title}</p>
                            <p className="text-sm text-slate-600 mb-2 font-medium">{t.problem}</p>
                            <p className="text-xs text-emerald-600 font-bold uppercase mb-1">Fix</p>
                            <p className="text-sm text-slate-800">{t.fix}</p>
                         </div>
                      ))}
                   </div>
                </div>

              </div>
            )}

            {/* --- TAB: REFERENCE --- */}
            {activeTab === 'reference' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                 
                 {/* Positive Scan Card */}
                 <ReferenceCard 
                   type="positive"
                   data={activeModule.referenceData.positive}
                 />

                 {/* Negative Scan Card */}
                 <ReferenceCard 
                   type="negative"
                   data={activeModule.referenceData.negative}
                 />

                 {/* External Resources */}
                 <div className="bg-white rounded-xl border border-slate-200 p-5">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                      <ExternalLink size={16} className="mr-2" /> 
                      External Resources
                    </h3>
                    <div className="space-y-2">
                      {activeModule.resources.map((res, idx) => (
                        <a 
                          key={idx} 
                          href={res.url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors group"
                        >
                          <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600">{res.title}</span>
                          <ExternalLink size={14} className="text-slate-400 group-hover:text-blue-500" />
                        </a>
                      ))}
                    </div>
                 </div>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}

// --- SUBCOMPONENTS ---

function ParamItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="p-1.5 bg-slate-100 rounded-md text-slate-500 mt-0.5">
        <Icon size={16} />
      </div>
      <div>
        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide">{label}</span>
        <span className="text-sm font-semibold text-slate-800 leading-snug">{value}</span>
      </div>
    </div>
  );
}

function Step({ text }) {
  return (
    <div className="flex items-start">
      <CheckCircle size={18} className="text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
      <p className="text-slate-700 text-sm leading-relaxed font-medium">{text}</p>
    </div>
  );
}

function ReferenceCard({ type, data }) {
  const isPositive = type === 'positive';
  const accentColor = isPositive ? 'text-blue-600' : 'text-slate-600';
  const bgColor = isPositive ? 'bg-blue-50' : 'bg-slate-50';
  const borderColor = isPositive ? 'border-blue-100' : 'border-slate-200';

  return (
    <div className={`bg-white rounded-xl border ${borderColor} shadow-sm overflow-hidden`}>
      <div className={`${bgColor} p-4 border-b ${borderColor} flex items-center`}>
        <div className={`font-bold ${accentColor} flex items-center`}>
          {isPositive ? <CheckCircle size={18} className="mr-2"/> : <Maximize size={18} className="mr-2"/>}
          {data.title}
        </div>
      </div>
      <div className="p-0 lg:flex">
         <div className="lg:w-1/2 relative bg-black min-h-[250px] lg:min-h-[300px]">
           <img 
              src={data.image} 
              alt={data.title} 
              className="w-full h-full object-cover absolute inset-0"
              onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=Image+Load+Error'; }}
            />
         </div>
         <div className="p-5 lg:w-1/2 flex flex-col justify-center">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Key Findings</h4>
            <ul className="space-y-3">
               {data.criteria.map((item, i) => (
                 <li key={i} className="flex items-start text-sm text-slate-700">
                    <span className={`mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isPositive ? 'bg-blue-400' : 'bg-slate-400'}`}></span>
                    {item}
                 </li>
               ))}
            </ul>
         </div>
      </div>
    </div>
  );
}