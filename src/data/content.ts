export const repo = 'https://github.com/nasir050298';
export const email = 'nasiruddin.yzu2018@gmail.com';
export const research = [
 { id:'01', title:'LightFace-SAM', topic:'Efficient Face Recognition',
   description:'An ultra-lightweight face recognition model exploring low-rank embeddings and sharpness-aware optimization.',
   tags:['Computer Vision','Face Recognition'], status:'Manuscript under review' },
 { id:'02', title:'Intersectional Fairness in Melanoma Classification', topic:'Trustworthy Medical AI',
   description:'Lesion-aware evaluation and mitigation of fairness disparities in melanoma classification using the ISIC 2019 dataset.',
   tags:['Medical AI','Fairness'], status:'Submitted · 3 Oct 2026' },
 { id:'03', title:'Underwater Fouling Analysis', topic:'Marine Computer Vision',
   description:'Co-authored work investigating deep learning-based underwater fouling classification and YOLOv8 instance segmentation.',
   tags:['Deep Learning','YOLOv8'], status:'Co-authored research' }
];
export const projects = [
 {id:'01',title:'TruthGuard AI',kicker:'AI FORENSICS',desc:'Multimodal forensics application with image authenticity analysis, audio/video review interfaces, and case workflows. Image analysis uses an integrated model; voice and video services currently include fallback behavior.',tags:['React','Python','FastAPI'],url:repo+'/truthguard-ai-multimodal-forensics',tone:'blue'},
 {id:'02',title:'BizFlow 360',kicker:'BUSINESS PLATFORM',desc:'Business management SaaS frontend showcasing dashboards, CRM, invoicing, inventory, and project workflows. Uses browser-local persistence.',tags:['React','TypeScript','Zustand'],url:repo+'/bizflow-360-business-management-saas',tone:'teal'},
 {id:'03',title:'StockPilot',kicker:'INVENTORY DASHBOARD',desc:'Vue-based inventory and sales dashboard with business-oriented views, reports, and reactive state management.',tags:['Vue 3','TypeScript','Pinia'],url:repo+'/stockpilot-vue-inventory-dashboard',tone:'violet'},
 {id:'04',title:'NovaUI',kicker:'DESIGN SYSTEM',desc:'Reusable React component design system exploring consistent UI patterns, documentation, and accessible interface components.',tags:['React','TypeScript','UI Components'],url:repo+'/novaui-react-design-system',tone:'slate'}
];
