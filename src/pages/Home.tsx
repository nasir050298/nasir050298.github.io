import { Github, Mail, FileDown, Sparkles, GraduationCap, Code2, ArrowUpRight, UserRound } from 'lucide-react';
import { Layout, IconLink } from '../components/Layout';
import { ResearchCards, ProjectCards, SectionIntro } from '../components/Cards';
import { email, repo, archive } from '../data/content';
import { useState } from 'react';
export default function Home(){const [archiveCategory,setArchiveCategory]=useState('All'); const categories=['All','AI Applications','Full Stack','Frontend','Research Software']; return <Layout>
 <section id="home" className="hero wide-container">
   <div className="hero-main"><span className="eyebrow">AI RESEARCHER · MACHINE LEARNING ENGINEER</span>
    <h1>Nasir Uddin Khan<span className="hero-dot">.</span></h1><p className="hero-role">Researching trustworthy AI.<br/><span>Engineering intelligent systems.</span></p>
    <p className="hero-lead">I am a computer vision researcher and machine learning engineer working at the intersection of fairness, efficient recognition, medical AI, and practical software development.</p>
    <div className="hero-actions"><IconLink href="#research" style="primary">Explore research</IconLink><IconLink href="#engineering">Explore engineering</IconLink></div>
    <div className="social-row"><a href={repo} target="_blank" rel="noopener noreferrer"><Github size={17} aria-hidden="true"/> GitHub</a><a href={'mailto:'+email}><Mail size={17} aria-hidden="true"/> Email</a><a href="/cv.pdf"><FileDown size={17} aria-hidden="true"/> Download CV</a></div>
   </div>
   <aside className="portrait-panel" aria-label="Portrait area">
     <div className="portrait-media">
       <img src="/images/nasir-portrait.jpg" alt="Portrait of Nasir Uddin Khan" className="portrait-photo" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.parentElement?.classList.add('portrait-unavailable'); }} />
       <div className="portrait-placeholder"><UserRound size={68} strokeWidth={1.1} aria-hidden="true" /><strong>Portrait coming soon</strong><span>Replace with your own natural, smart-casual photograph</span></div>
     </div>
     <div className="portrait-caption"><span className="eyebrow">RESEARCH × ENGINEERING</span><strong>Nasir Uddin Khan</strong><span>Computer Vision · Trustworthy AI · Software Engineering</span></div>
   </aside>
 </section>
 <section className="section-block" id="research"><div className="wide-container"><SectionIntro eyebrow="RESEARCH PATHWAY" title="Research and manuscripts." description="Exploring machine learning evaluation, robust face recognition, and demographic fairness in computer vision and medical imaging."/><div className="research-vision"><span className="eyebrow">RESEARCH VISION</span><h3>Towards trustworthy, efficient, and reliable computer vision.</h3><p>My interests connect resource-aware visual recognition with fairness and reliable evaluation of medical AI. I am interested in PhD research on the methodology, robustness, and responsible application of intelligent visual systems.</p><p className="disclosure-note">Manuscripts are submitted or under review. Descriptions here are high-level; unpublished diagrams, results, and full texts are not published on this site.</p></div><ResearchCards/></div></section>
 <section className="section-block tinted" id="engineering"><div className="wide-container"><SectionIntro eyebrow="ENGINEERING PATHWAY" title="Selected engineering projects." description="Five projects selected to demonstrate AI integration, full-stack workflows, real-time communication, Vue development, and component engineering. Each includes actual screenshots, implementation context, and source links."/><ProjectCards/><div className="archive-section"><div className="archive-header"><div><span className="eyebrow">MORE WORK</span><h3>Additional projects</h3><p>Selected repositories from my broader GitHub archive. These are links to source code, not claims of production deployment.</p></div><a className="inline-link" href={repo+'?tab=repositories'} target="_blank" rel="noopener noreferrer">Browse all repositories <ArrowUpRight size={16}/></a></div>
 <div className="archive-filters" aria-label="Filter projects">{categories.map(category=><button key={category} aria-pressed={archiveCategory===category} onClick={()=>setArchiveCategory(category)} className={archiveCategory===category?'chosen':''}>{category}</button>)}</div>
 <div className="archive-grid">{archive.filter(item=>archiveCategory==='All'||item.category===archiveCategory).map(item=><a className="archive-item" key={item.repo} href={repo+'/'+item.repo} target="_blank" rel="noopener noreferrer"><span className="archive-category">{item.category}</span><strong>{item.name} <ArrowUpRight size={15}/></strong><p>{item.info}</p></a>)}</div></div></div></section>
 <section className="section-block" id="about"><div className="wide-container about-grid"><div><span className="eyebrow">ABOUT · EDUCATION · EXPERIENCE</span><h2 className="display-heading">A researcher’s curiosity.<br/>An engineer’s mindset.</h2><p>I completed a Master’s degree in Information and Communication Engineering from Changchun University of Science and Technology and a Bachelor’s degree in Software Engineering from Yangzhou University.</p><p>My background combines computer vision research with practical frontend development. I am interested in PhD research opportunities, collaborations, and engineering roles where careful experimentation meets reliable software.</p><a className="inline-link" href="/cv.pdf">Download my CV <FileDown size={17} aria-hidden="true"/></a></div><div className="timeline">
  <div><span>2024 — 2026</span><strong>Master’s · Information & Communication Engineering</strong><p>Changchun University of Science and Technology</p></div>
  <div><span>2018 — 2022</span><strong>Bachelor’s · Software Engineering</strong><p>Yangzhou University</p></div>
  <div><span>2022 — 2024</span><strong>Frontend Web Developer</strong><p>Mujib Enterprise</p></div>
  <div><span>2024 · 2018</span><strong>Fully funded academic scholarships</strong><p>Jilin Provincial Government & Yangzhou University</p></div></div></div></section>

 <section className="section-block skills-section tinted" id="skills"><div className="wide-container">
  <SectionIntro eyebrow="TECHNICAL EXPERTISE" title="Skills & technologies." description="Technologies drawn from my research, experience, and public project repositories."/>
  <div className="skills-grid">
    {[
      {heading:'AI & Machine Learning',items:['Deep Learning','Computer Vision','Fairness in AI','Facial Recognition','Medical Image Analysis','Model Evaluation']},
      {heading:'Frameworks & Libraries',items:['PyTorch','TensorFlow','Keras','OpenCV','Scikit-learn']},
      {heading:'Programming & Web',items:['Python','JavaScript','TypeScript','C / C++','React','Vue']},
      {heading:'Development & Tools',items:['Git','GitHub','FastAPI','Node.js','Data Visualization','VS Code']}
    ].map(group=><article className="skill-group" key={group.heading}><h3>{group.heading}</h3><div className="skill-tags">{group.items.map(item=><span className="skill-tag" key={item}>{item}</span>)}</div></article>)}
  </div>
 </div></section>
 <section className="contact-wrap wide-container" id="contact"><div className="contact-panel"><div><span className="eyebrow">LET'S CONNECT</span><h2>Research collaboration or an engineering challenge?</h2><p>Open to discussing PhD research, collaborative projects, and AI or software engineering opportunities.</p></div><a className="btn btn-white" href={'mailto:'+email}>Email me <ArrowUpRight size={18} aria-hidden="true"/></a></div></section>
 </Layout>}
