import { ArrowUpRight, ArrowRight, BrainCircuit, Code2 } from 'lucide-react';
import type { ReactNode } from 'react';
import { projects, research } from '../data/content';
export function SectionIntro({eyebrow,title,description,action}:{eyebrow:string;title:string;description?:string;action?:ReactNode}){
 return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description&&<p>{description}</p>}</div>{action&&<div>{action}</div>}</div>
}
export function ResearchCards({limit=3}:{limit?:number}){
 return <div className="research-grid">{research.slice(0,limit).map(item=><article className="research-card" key={item.id}>
  <div className="research-figure"><img src={'/images/research-'+item.id+'.webp'} alt={'Research figure for '+item.title} loading="lazy" onError={e=>{e.currentTarget.style.display='none';e.currentTarget.parentElement?.classList.add('figure-unavailable')}} /><div className="figure-placeholder"><BrainCircuit size={23} aria-hidden="true"/><span>Verified research figure to be added</span></div></div><span className="card-eyebrow">RESEARCH / {item.id}</span><p className="research-topic">{item.topic}</p><h3>{item.title}</h3><p>{item.description}</p>
  <div className="tag-wrap">{item.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div>
  <span className="status-tag">{item.status}</span>
 </article>)}</div>
}
const icons=[BrainCircuit,Code2,Code2,Code2];
export function ProjectCards({limit=4}:{limit?:number}){
 return <div className="project-grid">{projects.slice(0,limit).map((item,i)=>{
 const Icon=icons[i]; return <article className="project-card" key={item.id}>
   <div className={'project-visual '+item.tone}><img className="project-screenshot" src={'/images/project-'+item.id+'.webp'} alt={'Screenshot of '+item.title} loading="lazy" onError={e=>{e.currentTarget.style.display='none';e.currentTarget.parentElement?.classList.add('screenshot-unavailable')}}/><div className="project-placeholder"><Icon size={40} strokeWidth={1.5} aria-hidden="true"/><span>{item.kicker}</span><small>Project screenshot to be added</small></div></div>
   <div className="project-body"><span className="card-eyebrow">PROJECT / {item.id}</span><h3>{item.title}</h3><p>{item.desc}</p>
    <div className="tag-wrap">{item.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div>
    <a className="project-link" href={item.url} target="_blank" rel="noopener noreferrer">View source <ArrowUpRight size={17} aria-hidden="true"/></a>
   </div></article>
 })}</div>
}
export function PathCards(){return <div className="path-grid">
 <a href="/research/" className="path-card path-research"><div className="path-icon"><BrainCircuit aria-hidden="true" size={24}/></div><div><span className="eyebrow">01 / ACADEMIC RESEARCH</span><h3>Explore Research</h3><p>Trustworthy AI, facial recognition, demographic fairness, and medical image analysis.</p></div><span className="path-action">Research pathway <ArrowRight size={17} aria-hidden="true"/></span></a>
 <a href="/engineering/" className="path-card path-engineering"><div className="path-icon"><Code2 aria-hidden="true" size={24}/></div><div><span className="eyebrow">02 / APPLIED ENGINEERING</span><h3>Explore Engineering</h3><p>AI-enabled applications, full-stack web projects, dashboards, and interface systems.</p></div><span className="path-action">Engineering pathway <ArrowRight size={17} aria-hidden="true"/></span></a>
 </div>}
