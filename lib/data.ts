import type { IconKey } from "@/lib/icons";
import type {
  NavLink,
  Service,
  Feature,
  Industry,
  ResearchArea,
  PortfolioProject,
  BlogPost,
  JobOpening,
  TrainingProgram,
  ServiceDetail,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Research", href: "/research/" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Training", href: "/training/" },
  { label: "Careers", href: "/careers/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

export const services: Service[] = [
  {
    title: "Artificial Intelligence",
    description:
      "Custom AI algorithms, deep learning models, and intelligent systems for real-world deployment.",
    icon: "Brain",
    slug: "ai",
  },
  {
    title: "FPGA Design",
    description:
      "High-performance FPGA architectures, prototyping, and acceleration for compute-intensive workloads.",
    icon: "Cpu",
    slug: "fpga",
  },
  {
    title: "ASIC Design",
    description:
      "Full-cycle ASIC development from RTL design to tape-out and silicon validation.",
    icon: "Microchip",
    slug: "asic",
  },
  {
    title: "Embedded Systems",
    description:
      "Robust firmware, RTOS integration, and hardware-software co-design for embedded platforms.",
    icon: "CircuitBoard",
    slug: "embedded",
  },
  {
    title: "Medical Imaging",
    description:
      "Advanced imaging pipelines, diagnostic algorithms, and FDA-ready medical device software.",
    icon: "HeartPulse",
    slug: "medical-imaging",
  },
  {
    title: "PCB Design",
    description:
      "Multi-layer PCB layout, signal integrity analysis, and manufacturing-ready design files.",
    icon: "Layers",
    slug: "pcb",
  },
  {
    title: "Industry Training",
    description:
      "Hands-on programs in VLSI, FPGA, embedded systems, AI, and semiconductor engineering.",
    icon: "GraduationCap",
    slug: "training",
  },
];

export const whyChooseUs: Feature[] = [
  {
    title: "15+ Years Experience",
    description:
      "Deep expertise across semiconductor design, AI, and embedded engineering domains.",
    icon: "Award",
  },
  {
    title: "Research Driven",
    description:
      "Cutting-edge R&D in AI accelerators, medical imaging, and edge computing technologies.",
    icon: "FlaskConical",
  },
  {
    title: "Industry Experts",
    description:
      "Team of seasoned engineers with proven track records in leading technology companies.",
    icon: "Users",
  },
  {
    title: "End-to-End Engineering",
    description:
      "Complete solutions from concept and algorithm design to silicon and deployment.",
    icon: "Workflow",
  },
  {
    title: "AI to Silicon",
    description:
      "Unique capability bridging AI software with hardware acceleration and ASIC implementation.",
    icon: "Sparkles",
  },
  {
    title: "Hands-on Training",
    description:
      "Industry-aligned training programs with real projects, labs, and certification pathways.",
    icon: "BookOpen",
  },
];

export const industries: Industry[] = [
  {
    title: "Healthcare",
    description: "Medical imaging, diagnostic AI, and FDA-compliant device development.",
    icon: "Stethoscope",
  },
  {
    title: "Industrial Automation",
    description: "Smart factory systems, predictive maintenance, and edge AI controllers.",
    icon: "Factory",
  },
  {
    title: "Robotics",
    description: "Vision-guided robotics, real-time control, and sensor fusion platforms.",
    icon: "Bot",
  },
  {
    title: "Automotive",
    description: "ADAS systems, in-vehicle computing, and functional safety engineering.",
    icon: "Car",
  },
  {
    title: "Consumer Electronics",
    description: "IoT devices, wearables, and power-efficient embedded product design.",
    icon: "Smartphone",
  },
  {
    title: "Aerospace",
    description: "Radiation-tolerant designs, avionics systems, and mission-critical firmware.",
    icon: "Plane",
  },
  {
    title: "Education",
    description: "University partnerships, research collaborations, and STEM training programs.",
    icon: "School",
  },
];

export const researchHighlights: ResearchArea[] = [
  {
    title: "AI Accelerators",
    description: "Custom neural network accelerators optimized for inference and training workloads.",
    icon: "Zap",
  },
  {
    title: "CNN Hardware",
    description: "Dedicated CNN processing units with optimized memory hierarchies and parallelism.",
    icon: "Network",
  },
  {
    title: "Medical Imaging",
    description: "Deep learning for MRI, CT, ultrasound reconstruction and diagnostic assistance.",
    icon: "HeartPulse",
  },
  {
    title: "Edge AI",
    description: "Ultra-low-power AI inference on embedded and FPGA platforms at the edge.",
    icon: "Radio",
  },
  {
    title: "YOLO",
    description: "Real-time object detection optimized for hardware acceleration and deployment.",
    icon: "Target",
  },
  {
    title: "U-Net",
    description: "Semantic segmentation architectures for biomedical and industrial imaging.",
    icon: "Activity",
  },
  {
    title: "ASIC Prototyping",
    description: "Rapid ASIC prototyping flows from FPGA validation to silicon tape-out.",
    icon: "Microchip",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Neural Edge Accelerator",
    description:
      "Custom FPGA-based CNN accelerator achieving 10x inference speedup for edge deployment.",
    technology: "FPGA · Verilog · TensorFlow",
    image: "/images/portfolio-1.svg",
  },
  {
    title: "Medical CT Reconstruction",
    description:
      "GPU-accelerated CT reconstruction pipeline with AI-based artifact reduction.",
    technology: "CUDA · Python · Medical Imaging",
    image: "/images/portfolio-2.svg",
  },
  {
    title: "Industrial Vision System",
    description:
      "Real-time defect detection system using YOLO on embedded ARM + FPGA platform.",
    technology: "YOLO · Embedded Linux · OpenCV",
    image: "/images/portfolio-3.svg",
  },
  {
    title: "ASIC Memory Controller",
    description:
      "High-bandwidth DDR4 memory controller IP block for 28nm ASIC tape-out.",
    technology: "SystemVerilog · UVM · ASIC",
    image: "/images/portfolio-4.svg",
  },
  {
    title: "TinyML Sensor Hub",
    description:
      "Ultra-low-power anomaly detection on ARM Cortex-M with on-device learning.",
    technology: "TinyML · C · TensorFlow Lite",
    image: "/images/portfolio-5.svg",
  },
  {
    title: "Multi-layer RF PCB",
    description:
      "8-layer high-speed PCB design for 5G baseband processor with SI/PI validation.",
    technology: "Altium · RF Design · SI/PI",
    image: "/images/portfolio-6.svg",
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    title: "Artificial Intelligence",
    slug: "ai",
    description:
      "We design and deploy custom AI solutions spanning computer vision, natural language processing, predictive analytics, and deep learning. Our team builds production-grade models optimized for both cloud and edge deployment, with expertise in TensorFlow, PyTorch, and ONNX runtimes.",
    benefits: [
      "Custom model architecture design",
      "Transfer learning and fine-tuning",
      "Model optimization and quantization",
      "MLOps pipeline integration",
      "Edge AI deployment strategies",
    ],
    image: "/images/service-ai.svg",
  },
  {
    title: "FPGA Design",
    slug: "fpga",
    description:
      "From algorithm prototyping to production FPGA implementations, we deliver high-performance digital designs using Xilinx, Intel, and Lattice platforms. Our expertise covers RTL design, high-level synthesis, IP integration, and timing closure.",
    benefits: [
      "RTL design in Verilog/VHDL/SystemVerilog",
      "High-Level Synthesis (HLS)",
      "PCIe, DDR, Ethernet IP integration",
      "Timing closure and power optimization",
      "FPGA-based AI acceleration",
    ],
    image: "/images/service-fpga.svg",
  },
  {
    title: "ASIC Design",
    slug: "asic",
    description:
      "Full-cycle ASIC development services from specification through GDSII tape-out. We specialize in digital ASIC design, verification with UVM, DFT insertion, and post-silicon validation for fabless and IDM customers.",
    benefits: [
      "RTL-to-GDSII design flow",
      "UVM-based verification environments",
      "DFT and scan insertion",
      "Physical design collaboration",
      "Post-silicon bring-up and validation",
    ],
    image: "/images/service-asic.svg",
  },
  {
    title: "Embedded Systems",
    slug: "embedded",
    description:
      "Complete embedded product development including hardware selection, firmware development, RTOS integration, driver development, and wireless connectivity. We build reliable systems for industrial, medical, and consumer applications.",
    benefits: [
      "Bare-metal and RTOS firmware",
      "ARM Cortex-M/A platform expertise",
      "Device driver development",
      "Wireless protocol integration",
      "Hardware-software co-design",
    ],
    image: "/images/service-embedded.svg",
  },
  {
    title: "Medical Imaging",
    slug: "medical-imaging",
    description:
      "Specialized medical imaging solutions including image reconstruction algorithms, AI-assisted diagnosis, DICOM integration, and regulatory-compliant software development for diagnostic and therapeutic devices.",
    benefits: [
      "CT, MRI, ultrasound reconstruction",
      "AI-based diagnostic assistance",
      "DICOM and HL7 integration",
      "FDA/IEC 62304 compliant development",
      "Real-time imaging pipelines",
    ],
    image: "/images/service-medical.svg",
  },
  {
    title: "PCB Design",
    slug: "pcb",
    description:
      "Professional PCB design services from schematic capture to manufacturing-ready Gerber files. We handle multi-layer boards, high-speed digital, RF/microwave, and power electronics with comprehensive SI/PI analysis.",
    benefits: [
      "Multi-layer PCB layout (up to 16 layers)",
      "High-speed signal integrity analysis",
      "RF and microwave PCB design",
      "DFM/DFA review and optimization",
      "Complete manufacturing documentation",
    ],
    image: "/images/service-pcb.svg",
  },
  {
    title: "Industry Training",
    slug: "training",
    description:
      "Comprehensive training programs designed by industry practitioners. Our courses cover FPGA design, VLSI/ASIC flows, embedded systems, AI/ML, MATLAB, and Python with hands-on labs and real project experience.",
    benefits: [
      "Industry-aligned curriculum",
      "Hands-on lab sessions",
      "Real-world project assignments",
      "Certification upon completion",
      "Placement assistance",
    ],
    image: "/images/service-training.svg",
  },
];

export const researchAreas: ResearchArea[] = [
  {
    title: "Medical Imaging",
    description:
      "Advanced reconstruction algorithms, AI-enhanced diagnostics, and multimodal imaging fusion for next-generation medical devices.",
    icon: "HeartPulse",
  },
  {
    title: "Computer Vision",
    description:
      "Object detection, semantic segmentation, 3D vision, and multi-camera systems for industrial and autonomous applications.",
    icon: "Eye",
  },
  {
    title: "AI Hardware",
    description:
      "Novel accelerator architectures, in-memory computing, and neuromorphic design for efficient AI inference.",
    icon: "Cpu",
  },
  {
    title: "CNN Accelerator",
    description:
      "Dedicated hardware for convolutional neural networks with optimized dataflow and memory access patterns.",
    icon: "Network",
  },
  {
    title: "TinyML",
    description:
      "Machine learning on microcontrollers with sub-milliwatt power budgets for IoT and wearable applications.",
    icon: "Binary",
  },
  {
    title: "Edge AI",
    description:
      "Distributed intelligence at the network edge with real-time inference on constrained hardware platforms.",
    icon: "Radio",
  },
  {
    title: "Future Semiconductor Research",
    description:
      "Exploring next-generation process nodes, 3D integration, chiplets, and quantum-resistant cryptography hardware.",
    icon: "Rocket",
  },
];

export const trainingPrograms: TrainingProgram[] = [
  {
    title: "FPGA Design",
    description: "Verilog, VHDL, timing analysis, and Xilinx/Intel tool flows with hands-on labs.",
    duration: "8 Weeks",
    icon: "Cpu",
  },
  {
    title: "VLSI Design",
    description: "Digital design, verification with UVM, synthesis, and physical design fundamentals.",
    duration: "12 Weeks",
    icon: "Microchip",
  },
  {
    title: "Embedded Systems",
    description: "ARM programming, RTOS, device drivers, and IoT protocol implementation.",
    duration: "10 Weeks",
    icon: "CircuitBoard",
  },
  {
    title: "Artificial Intelligence",
    description: "Deep learning, computer vision, NLP, and model deployment on edge devices.",
    duration: "10 Weeks",
    icon: "Brain",
  },
  {
    title: "MATLAB",
    description: "Signal processing, control systems, Simulink modeling, and code generation.",
    duration: "6 Weeks",
    icon: "Activity",
  },
  {
    title: "Python Programming",
    description: "Python for engineering, data science, automation, and AI/ML development.",
    duration: "6 Weeks",
    icon: "Code2",
  },
];

export const trainingExtras: { title: string; description: string; icon: IconKey }[] = [
  {
    title: "Certification",
    description:
      "Industry-recognized certificates upon successful completion of training programs and project assessments.",
    icon: "Shield",
  },
  {
    title: "Internships",
    description:
      "Structured internship programs with real project assignments and mentorship from senior engineers.",
    icon: "Handshake",
  },
  {
    title: "Workshops",
    description:
      "Intensive weekend and corporate workshops on emerging technologies and tool-specific training.",
    icon: "Lightbulb",
  },
];

export const jobOpenings: JobOpening[] = [
  {
    title: "Senior FPGA Design Engineer",
    department: "Hardware Engineering",
    location: "Bangalore, India",
    type: "Full-time",
  },
  {
    title: "AI/ML Engineer",
    department: "Artificial Intelligence",
    location: "Bangalore, India",
    type: "Full-time",
  },
  {
    title: "ASIC Verification Engineer",
    department: "VLSI Design",
    location: "Hyderabad, India",
    type: "Full-time",
  },
  {
    title: "Embedded Systems Engineer",
    department: "Embedded Engineering",
    location: "Bangalore, India",
    type: "Full-time",
  },
  {
    title: "FPGA Design Intern",
    department: "Hardware Engineering",
    location: "Bangalore, India",
    type: "Internship",
  },
  {
    title: "AI Research Intern",
    department: "Research & Development",
    location: "Remote",
    type: "Internship",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Building Efficient CNN Accelerators on FPGA",
    excerpt:
      "Explore design strategies for mapping convolutional neural networks to FPGA fabric with optimized memory hierarchies and parallelism.",
    category: "FPGA",
    date: "March 15, 2026",
    image: "/images/blog-1.svg",
    slug: "cnn-accelerators-fpga",
  },
  {
    title: "Edge AI: Deploying YOLO on Embedded Platforms",
    excerpt:
      "A practical guide to optimizing YOLO object detection models for real-time inference on resource-constrained edge devices.",
    category: "Edge AI",
    date: "March 8, 2026",
    image: "/images/blog-2.svg",
    slug: "edge-ai-yolo",
  },
  {
    title: "Medical Imaging with Deep Learning",
    excerpt:
      "How U-Net architectures are revolutionizing semantic segmentation in diagnostic radiology and pathology imaging.",
    category: "Medical Imaging",
    date: "February 28, 2026",
    image: "/images/blog-3.svg",
    slug: "medical-imaging-deep-learning",
  },
  {
    title: "From RTL to Silicon: ASIC Design Flow Explained",
    excerpt:
      "A comprehensive overview of the modern ASIC design flow from specification through tape-out and post-silicon validation.",
    category: "ASIC",
    date: "February 20, 2026",
    image: "/images/blog-4.svg",
    slug: "asic-design-flow",
  },
  {
    title: "TinyML: AI on Microcontrollers",
    excerpt:
      "Running machine learning inference on sub-dollar microcontrollers with milliwatt power budgets for IoT applications.",
    category: "TinyML",
    date: "February 12, 2026",
    image: "/images/blog-5.svg",
    slug: "tinyml-microcontrollers",
  },
  {
    title: "VLSI Career Path: Skills Every Engineer Needs",
    excerpt:
      "Essential skills and certifications for aspiring VLSI and semiconductor engineers in today's competitive market.",
    category: "Careers",
    date: "February 5, 2026",
    image: "/images/blog-6.svg",
    slug: "vlsi-career-path",
  },
];

export const coreValues: Feature[] = [
  {
    title: "Innovation",
    description: "Pushing boundaries in AI, silicon, and embedded technologies.",
    icon: "Lightbulb",
  },
  {
    title: "Excellence",
    description: "Delivering engineering solutions of the highest quality and reliability.",
    icon: "Award",
  },
  {
    title: "Integrity",
    description: "Transparent partnerships built on trust and ethical engineering practices.",
    icon: "Shield",
  },
  {
    title: "Collaboration",
    description: "Working closely with clients, academia, and industry partners worldwide.",
    icon: "Globe",
  },
];

export const developmentProcess = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding requirements, constraints, and success criteria.",
  },
  {
    step: "02",
    title: "Architecture",
    description: "System-level design, technology selection, and feasibility analysis.",
  },
  {
    step: "03",
    title: "Development",
    description: "Iterative engineering with continuous validation and testing.",
  },
  {
    step: "04",
    title: "Validation",
    description: "Rigorous verification, performance benchmarking, and QA.",
  },
  {
    step: "05",
    title: "Deployment",
    description: "Production rollout, documentation, and ongoing support.",
  },
];

export const companyInfo = {
  name: "GoldLighT Technologies Pvt. Ltd.",
  tagline: "Accelerating Intelligence: AI to Silicon",
  email: "info@goldlight.co.in",
  phone: "+91 74060 58163",
  whatsapp: "+91 74060 58163",
  whatsappLink: "https://wa.me/917406058163",
  address: "No 40/3, 1st Floor, JC Industrial Estate, Yelachenahalli, Bengaluru, Karnataka 560062",
  social: {
    linkedin: "https://in.linkedin.com/company/goldlight-technologies-pvt-ltd",
    instagram: "https://www.instagram.com/goldlight_technologies_pvt_ltd/",
    youtube: "https://www.youtube.com/channel/UC98_AfZ7QnLosKlTiyFXkgg",
    facebook: "https://www.facebook.com/GoldlightTechnologies/",
  },
};
