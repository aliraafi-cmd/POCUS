import React, { useState } from 'react';
import { 
  BookOpen, 
  Menu, 
  X, 
  Stethoscope, 
  GraduationCap, 
  Info,
  ArrowRight,
  ArrowLeft,
  Scan,
  Move,
  FileText,
  Layers,
  Settings,
  Activity,
  Anchor,
  User,
  Maximize,
  AlertTriangle,
  CheckCircle,
  Droplet,
  PlayCircle,
  Sliders,   
  Wrench,    
  Microscope,
  Lightbulb // Replaced ClamIcon with Lightbulb
} from 'lucide-react';

// --- CUSTOM ICONS ---
function HeartIcon({ size = 24, className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function LungsIcon({ size = 24, className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 21c-3.3 0-6-3-6-7c0-4.5 4-9 6-9c2 0 2 1.5 2 3c0 1.5 0 5-2 13Z" />
      <path d="M16 21c3.3 0 6-3 6-7c0-4.5-4-9-6-9c-2 0-2 1.5-2 3c0 1.5 0 5 2 13Z" />
      <path d="M12 5v10" strokeLinecap="round" strokeDasharray="3 3" opacity="0.4" />
    </svg>
  );
}

// --- DATA: CURRICULUM ---
const modules = [
  {
    id: 'basics',
    title: 'POCUS Basics',
    description: 'Definitions, Probes, Movements, and Conventions.',
    icon: BookOpen,
    color: 'emerald',
    sections: [
      {
        title: "The Basics",
        icon: Info,
        color: 'blue', 
        content: [
          { type: 'bold', text: "POCUS = Point-of-Care Ultrasound" },
          { type: 'text', text: "Defined as the acquisition, interpretation, and clinical integration of ultrasonographic imaging performed by a treating clinician at the patient’s bedside rather than by another healthcare provider." },
          { type: 'text', text: "POCUS is an inclusive term; it is not limited to any specialty, protocol, or organ system." }
        ]
      },
      {
        title: "Probes & Physics",
        icon: Scan,
        color: 'violet',
        content: [
          { type: 'text', text: "Sound travels from the probe into the body. Some sound is lost as heat or scattered away. Some sound reflects back to our probe. The sound that reflects back to the probe is interpreted by our machine and an image is displayed on our screen." },
          { type: 'info', text: "Low frequency probes have high penetration but poor resolution (you can see far but not very well)." },
          { type: 'info', text: "High frequency probes have low penetration but high resolution (you can see well but not very far)." },
          { type: 'subheader', text: "Curvilinear (Abdominal)" },
          { type: 'list', items: ["Low frequency probe", "Used for: free fluid in abdomen and pelvis, bladder, kidneys, lung ultrasound, AAA"] },
          { type: 'subheader', text: "Phased Array (Cardiac)" },
          { type: 'list', items: ["Low frequency probe that specializes in cardiac movement", "Used for: cardiac scans, lung ultrasound"] },
          { type: 'subheader', text: "Linear (Vascular)" },
          { type: 'list', items: ["High frequency probe", "Best for seeing things close to the surface (lung sliding, vessels, skin, superficial joints)"] }
        ]
      },
      {
        title: "Body Planes",
        icon: Layers,
        color: 'indigo',
        content: [
          { type: 'bold', text: "Coronal (Long axis / Longitudinal)" },
          { type: 'text', text: "Separates body anterior-posterior" },
          { type: 'bold', text: "Sagittal (Long axis / Longitudinal)" },
          { type: 'text', text: "Separates body left-right" },
          { type: 'bold', text: "Transverse (Short Axis)" },
          { type: 'text', text: "Separates body superior-inferior" },
          { type: 'divider' },
          { type: 'text', text: "Long Axis: Plane parallel to the maximum length of a structure" },
          { type: 'text', text: "Short Axis: Plane perpendicular to the maximum length of a structure" }
        ]
      },
      {
        title: "Probe Movements",
        icon: Move,
        color: 'rose',
        content: [
          { type: 'text', text: "There are 5 standard ways an ultrasound probe can be moved:" },
          { type: 'list', items: [
            "Sliding: Moving the probe about its long or short axis while keeping the angle between your probe and your structure (angle of insonation) constant (AKA translating)",
            "Fanning: Keeping the probe on a fixed point while changing the angle of insonation along the short axis of the probe (AKA sweeping / tilting)",
            "Rocking: Keeping the probe on a fixed point while changing the angle of insonation along the long axis of the probe (AKA angling)",
            "Rotating: Keeping the probe on a fixed point while moving clockwise or counter clockwise",
            "Compression: Applying pressure to the body on a fixed point with the probe"
          ]}
        ]
      },
      {
        title: "Conventions",
        icon: Settings,
        color: 'amber',
        content: [
          { type: 'text', text: "Convention = the agreed upon way we do something (reading left to right, driving on the right side of the road)." },
          { type: 'text', text: "Different people have different conventions. There are two POCUS imaging conventions:" },
          { type: 'subheader', text: "Radiology Convention" },
          { type: 'list', items: ["Screen marker appears on screen LEFT", "Used for all POCUS applications except cardiac"] },
          { type: 'subheader', text: "Cardiology Convention" },
          { type: 'list', items: ["Screen marker appears on screen RIGHT", "Used for Cardiac POCUS"] }
        ]
      },
      {
        title: "Documentation",
        icon: FileText,
        color: 'slate',
        content: [
          { type: 'text', text: "If you did not document it in the patient’s chart, it did not happen." },
          { type: 'list', items: [
            "Save your images on the machines.",
            "Document that a scan was performed for educational purposes in the patient’s chart.",
            "Document any findings as preliminary until reviewed with a supervisor."
          ]}
        ]
      }
    ]
  },
  {
    id: 'lung-pleural',
    title: 'Lung: Pleural Effusion',
    description: 'Scanning for fluid, Spine Sign, and landmarks.',
    icon: LungsIcon,
    color: 'violet', 
    sections: [
      {
        title: "Scan Basics",
        icon: BookOpen, 
        color: 'blue',
        content: [
          { type: 'subheader', text: "Indication" },
          { type: 'list', items: [
             "Dyspnea, Cough, Chest Pain", 
             "Trauma (FAST Scan), Respiratory Failure, Sepsis, Shock",
             "Procedural (Thoracentesis, Chest Tube)"
          ]},
          { type: 'subheader', text: "Equipment" },
          { type: 'list', items: ["Transducer: Curvilinear or Phased Array", "Preset: Abdominal", "Convention: Radiology"] },
          { type: 'subheader', text: "Patient Positioning" },
          { type: 'list', items: ["Supine, Semi-Supine, or Sitting", "Arm above head or across body"] },
          { type: 'subheader', text: "Landmarks" },
          { type: 'text', text: "External: Mid-Posterior Axillary Line | Xiphoid Process" },
          { type: 'text', text: "Internal: Kidney | Diaphragm | Liver/Spleen | Spine | Lung" },
          { type: 'info', text: "Area of Interest: Area cranial to diaphragm" }
        ]
      },
      {
        title: "Scanning Technique",
        icon: Sliders,
        color: 'violet',
        content: [
          { type: 'list', items: [
            "Place probe in longitudinal at the intersection of the xiphoid process and the mid-posterior axillary line (Probe Marker toward head).",
            "Slide probe anterior-posterior until the kidney capsule or spine is seen best.",
            "Adjust depth to just past the spine.",
            "Slide probe cranial until diaphragm in view.",
            "Fan through medial diaphragm anteriorly to posteriorly until the diaphragm disappears."
          ]},
          { 
            type: 'video', 
            url: "/videos/lus-right-z4-fan.mp4", 
            caption: "Technique: Fanning through the costophrenic angle."
          }
        ]
      },
      {
        title: "Interpretation",
        icon: Microscope,
        color: 'rose',
        content: [
          { type: 'header', text: "Positive Scan" },
          { type: 'text', text: "Anechoic area seen cranial to the diaphragm AND ≥ 1 of the following:" },
          
          { 
            type: 'video', 
            url: "/videos/lus-right-z4-ple.mp4", 
            caption: "Positive Scan: Note the anechoic fluid above the diaphragm (Pleural Effusion)."
          },

          { type: 'list', items: [
            "Spine sign (Spine visible above diaphragm)",
            "Solid lung floating in effusion",
            "Lateral diaphragm visualized"
          ]},
          
          { type: 'divider' },
          
          { type: 'header', text: "Negative Scan" },
          { 
            type: 'video', 
            url: "/videos/lus-right-z4-curtain.mp4", 
            caption: "Negative Scan: The 'Curtain Sign' (Aerated lung obscuring abdominal contents)."
          },
          { type: 'list', items: [
            "No pleural effusion after fanning entire medial diaphragm anteriorly to posteriorly.",
            "The Curtain Sign can rule out a large pleural effusion."
          ]}
        ]
      },
      {
        title: "Troubleshooting",
        icon: Wrench, 
        color: 'amber',
        content: [
          { type: 'subheader', text: "Rib shadows in the way" },
          { type: 'list', items: ["Rotate probe toward bed into rib space", "Have patient take a breath in and hold to move structure out from under rib"] },
          { type: 'subheader', text: "Diaphragm not visualized well" },
          { type: 'list', items: [
            "Slide anteriorly then fan posteriorly",
            "Slide posteriorly then fan anteriorly",
            "Slide toward feet then rock toward head"
          ]}
        ]
      },
      {
        title: "Pearls & Pitfalls",
        icon: Lightbulb, // Swapped to Lightbulb
        color: 'sky',
        content: [
          { type: 'list', items: [
            "Loculated pleural effusions may be missed by standard pleural effusion scanning technique.",
            "The sensitivity for finding a pleural effusion will increase the more upright your patient is (free flowing fluid will be gravity dependent).",
            "The presence of a spine sign can also be seen in consolidated lung without pleural effusion.",
            "Mirror artifact can mimic lung pathology: a spine sign will NOT be present with mirror artifact but WILL be present with lung pathology."
          ]}
        ]
      }
    ]
  }
];

// --- COMPONENTS ---

const ContentBlock = ({ item, color }) => {
  switch (item.type) {
    case 'header':
      return <h4 className={`font-bold text-${color}-800 mt-4 mb-2 text-lg`}>{item.text}</h4>;
    
    // SUBHEADER (Small, Black, Bold - Consistent Style)
    case 'subheader':
      return <h4 className="font-bold text-slate-900 mt-3 mb-1 text-sm uppercase tracking-wide">{item.text}</h4>;

    case 'bold':
      return <p className="font-bold text-slate-800 mt-2">{item.text}</p>;
    case 'info':
      return (
        <div className={`bg-${color}-50 border-l-4 border-${color}-500 p-3 my-2 text-sm text-slate-700`}>
          {item.text}
        </div>
      );
    case 'list':
      return (
        <ul className="list-disc list-inside space-y-1 my-2 text-slate-600 text-sm">
          {item.items.map((li, idx) => <li key={idx} className="leading-relaxed pl-1">{li}</li>)}
        </ul>
      );
    case 'divider':
      return <hr className="my-6 border-slate-200" />;
    
    // VIDEO COMPONENT
    case 'video':
      return (
        <div className="my-4 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
          <div className="relative bg-black aspect-video flex items-center justify-center group">
             <video 
               src={item.url} 
               className="w-full h-full object-contain"
               controls       
               muted          
               playsInline    
               autoPlay       
               loop           
             />
          </div>
          {item.caption && (
            <div className="bg-slate-50 p-2 text-xs text-center text-slate-500 font-medium border-t border-slate-200">
              {item.caption}
            </div>
          )}
        </div>
      );

    default:
      return <p className="text-slate-600 leading-relaxed my-2 text-sm">{item.text}</p>;
  }
};

const SectionCard = ({ section }) => {
  const Icon = section.icon || Info;
  const color = section.color || 'emerald'; 

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
      <div className={`bg-${color}-50 px-5 py-4 border-b border-${color}-100 flex items-center`}>
        <div className={`p-2 bg-white rounded-lg shadow-sm mr-3 text-${color}-600`}>
          <Icon size={20} />
        </div>
        <h3 className="font-bold text-slate-800 text-lg">{section.title}</h3>
      </div>
      <div className="px-5 pb-5 pt-3">
        {section.content.map((block, idx) => (
          <ContentBlock key={idx} item={block} color={color} />
        ))}
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function USaskPocusApp() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const activeModule = modules.find(m => m.id === activeModuleId);

  const openModule = (id) => {
    setActiveModuleId(id);
    setCurrentView('module');
    setSidebarOpen(false);
  };

  const goHome = () => {
    setCurrentView('dashboard');
    setActiveModuleId(null);
    setSidebarOpen(false);
  };

  // 1. DASHBOARD VIEW
  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col w-full">
        {/* USask Header */}
        <header className="bg-emerald-900 text-white py-10 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <GraduationCap size={180} />
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
             <div className="flex items-center space-x-2 mb-4">
               <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wide border border-white/20 text-emerald-100">
                 College of Medicine
               </span>
             </div>
             <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">USask POCUS</h1>
             <p className="text-emerald-100 text-lg max-w-xl">
               Undergraduate Medical Education Point of Care Ultrasound Curriculum.
             </p>
          </div>
        </header>

        {/* Module Grid */}
        <main className="flex-1 px-6 py-10 w-full">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
              <BookOpen size={20} className="mr-2 text-emerald-700" />
              Learning Modules
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((mod) => (
                <button 
                  key={mod.id}
                  onClick={() => openModule(mod.id)}
                  className={`bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-${mod.color}-400 transition-all text-left group flex flex-col h-full relative overflow-hidden`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-${mod.color}-50 flex items-center justify-center text-${mod.color}-700 mb-4 group-hover:scale-110 transition-transform`}>
                    <mod.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{mod.title}</h3>
                  <p className="text-sm text-slate-500 mb-6 flex-grow">{mod.description}</p>
                  
                  <div className={`flex items-center text-${mod.color}-700 text-sm font-bold mt-auto`}>
                    Start Module <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </main>

        <footer className="bg-white border-t border-slate-200 py-8 text-center text-slate-500 text-xs">
          <p>© University of Saskatchewan • College of Medicine • v0.12</p>
        </footer>
      </div>
    );
  }

  // 2. MODULE VIEW (Dynamic Content)
  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden w-full">
      {/* Sidebar - FIXED EMERALD 900 */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-80 bg-emerald-900 text-white transform transition-transform duration-300 ease-in-out flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:static lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-emerald-800 flex justify-between items-center shrink-0">
          <span className="font-bold text-lg tracking-tight">USask POCUS</span>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-emerald-300"><X size={24} /></button>
        </div>
        <nav className="p-4 flex-1 overflow-y-auto">
          <button onClick={goHome} className="flex items-center text-emerald-100 hover:text-white mb-8 w-full">
            <ArrowLeft size={18} className="mr-2" /> Back to Home
          </button>
          
          <div className="mb-4 px-2">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Modules</h4>
            <div className="space-y-1">
              {modules.map(mod => (
                <button 
                  key={mod.id}
                  onClick={() => openModule(mod.id)}
                  // Active state uses module color, sidebar always Emerald
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeModuleId === mod.id ? `bg-${mod.color}-600 text-white shadow-md` : 'text-emerald-100 hover:bg-emerald-800/50'}`}
                >
                  {mod.title}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-slate-50/50">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 shadow-sm z-10">
          <div className="flex items-center">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden mr-4 text-slate-500 hover:text-emerald-700 transition-colors">
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-bold text-slate-800 truncate">{activeModule.title}</h2>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          <div className="max-w-3xl mx-auto space-y-6 pb-20">
            {activeModule.sections && activeModule.sections.length > 0 ? (
              activeModule.sections.map((section, idx) => (
                <SectionCard key={idx} section={section} color={section.color || activeModule.color} />
              ))
            ) : (
              <div className="text-center p-10 text-slate-400">Content loading...</div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}