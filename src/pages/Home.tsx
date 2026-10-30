import { Github, Mail, FileDown, Sparkles, GraduationCap, Code2, ArrowUpRight } from 'lucide-react';
import { Layout, IconLink } from '../components/Layout';
import { PathCards, ResearchCards, ProjectCards, SectionIntro } from '../components/Cards';
import { email, repo } from '../data/content';
export default function Home(){return <Layout>
 <section className="hero wide-container">
   <div className="hero-main"><span className="eyebrow">AI RESEARCHER · MACHINE LEARNING ENGINEER</span>
    <h1>Advancing <span>trustworthy AI.</span><br/>Building intelligent systems.</h1>
    <p className="hero-lead">I'm Nasir Uddin Khan, a computer vision researcher with a software engineering background. I explore fairness, face recognition, and medical AI—and build applications that bring technical ideas into practice.</p>
    <div className="hero-actions"><IconLink href="/research/" style="primary">Explore research</IconLink><IconLink href="/engineering/">Explore engineering</IconLink></div>
    <div className="social-row"><a href={repo} target="_blank" rel="noopener noreferrer"><Github size={17} aria-hidden="true"/> GitHub</a><a href={'mailto:'+email}><Mail size={17} aria-hidden="true"/> Email</a><a href="/cv.pdf"><FileDown size={17} aria-hidden="true"/> Download CV</a></div>
   </div>
   <aside className="hero-aside" aria-label="Professional highlights">
    <div className="aside-top"><span className="eyebrow">AT A GLANCE</span><Sparkles aria-hidden="true" size={24}/></div>
    <h2>Research backed by practical engineering.</h2>
    <p>Computer Vision · Trustworthy AI · Medical Image Analysis · Full-Stack Development</p>
    <div className="aside-rule"/>
    <div className="aside-stat"><GraduationCap size={20} aria-hidden="true"/><span>Master’s in Information & Communication Engineering</span></div>
    <div className="aside-stat"><Code2 size={20} aria-hidden="true"/><span>Software engineering & AI application development</span></div>
    <div className="aside-bottom"><a href="/research/">Research <ArrowUpRight size={15} aria-hidden="true"/></a><a href="/engineering/">Engineering <ArrowUpRight size={15} aria-hidden="true"/></a></div>
   </aside>
 </section>
 <section className="paths-section wide-container" aria-label="Explore my work"><PathCards/></section>
 <section className="section-block" id="research"><div className="wide-container"><SectionIntro eyebrow="RESEARCH PATHWAY" title="Making AI more efficient, fair, and reliable." description="Exploring machine learning evaluation, robust face recognition, and demographic fairness in computer vision and medical imaging." action={<IconLink href="/research/">All research</IconLink>}/><ResearchCards/></div></section>
 <section className="section-block tinted" id="engineering"><div className="wide-container"><SectionIntro eyebrow="ENGINEERING PATHWAY" title="From research ideas to practical software." description="Selected applications exploring AI integrations, contemporary web frameworks, interactive dashboards, and reusable interfaces." action={<IconLink href="/engineering/">All projects</IconLink>}/><ProjectCards/></div></section>
 <section className="section-block" id="about"><div className="wide-container about-grid"><div><span className="eyebrow">ABOUT ME</span><h2 className="display-heading">Curious about research.<br/>Focused on building.</h2><p>I hold a Master’s degree in Information and Communication Engineering from Changchun University of Science and Technology and a Bachelor’s degree in Software Engineering from Yangzhou University.</p><p>My background combines computer vision research with practical frontend development. I am interested in PhD research opportunities, collaborations, and engineering roles where careful experimentation meets reliable software.</p><a className="inline-link" href="/cv.pdf">Download my CV <FileDown size={17} aria-hidden="true"/></a></div><div className="timeline">
  <div><span>2024 — 2026</span><strong>Master’s · Information & Communication Engineering</strong><p>Changchun University of Science and Technology</p></div>
  <div><span>2018 — 2022</span><strong>Bachelor’s · Software Engineering</strong><p>Yangzhou University</p></div>
  <div><span>2022 — 2024</span><strong>Frontend Web Developer</strong><p>Mujib Enterprise</p></div>
  <div><span>Academic recognition</span><strong>Merit-based scholarships</strong><p>Jilin Provincial Government & Yangzhou University</p></div></div></div></section>
 <section className="contact-wrap wide-container" id="contact"><div className="contact-panel"><div><span className="eyebrow">LET'S CONNECT</span><h2>Research collaboration or an engineering challenge?</h2><p>Open to discussing PhD research, collaborative projects, and AI or software engineering opportunities.</p></div><a className="btn btn-white" href={'mailto:'+email}>Email me <ArrowUpRight size={18} aria-hidden="true"/></a></div></section>
 </Layout>}
