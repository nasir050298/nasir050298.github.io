import { ArrowUpRight, ArrowRight, BrainCircuit, Code2, Expand, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { projects, research, projectGallery } from '../data/content';
export function SectionIntro({eyebrow,title,description,action}:{eyebrow:string;title:string;description?:string;action?:ReactNode}){
 return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description&&<p>{description}</p>}</div>{action&&<div>{action}</div>}</div>
}
export function ResearchCards({limit=3}:{limit?:number}){
 return <div className="research-grid">{research.slice(0,limit).map(item=><article className="research-card" key={item.id}>
  <span className="card-eyebrow">RESEARCH / {item.id}</span><p className="research-topic">{item.topic}</p>
  <h3>{item.title}</h3><p className="official-title">{item.official}</p><p className="research-authors">{item.authors}</p>
  <p>{item.description}</p><div className="tag-wrap">{item.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div>
  <span className="status-tag">{item.status}</span>
  <p className="research-private-note">Full unpublished manuscript and detailed experimental materials are not hosted on this site.</p>
 </article>)}</div>
}
export function ProjectCards({limit=5}:{limit?:number}){
 return <div className="project-grid">{projects.slice(0,limit).map((item)=>
 <ProjectGalleryCard key={item.id} item={item}/>)}</div>
}
function ProjectGalleryCard({item}:{item:(typeof projects)[number]}){
 const images=projectGallery[item.id] ?? [];
 const [selected,setSelected]=useState(0);
 const [expanded,setExpanded]=useState(false);
 const current=images[selected];
 useEffect(()=>{
   if(!expanded)return;
   const onKey=(e:KeyboardEvent)=>{
     if(e.key==='Escape')setExpanded(false);
     if(e.key==='ArrowRight')setSelected(n=>(n+1)%images.length);
     if(e.key==='ArrowLeft')setSelected(n=>(n+images.length-1)%images.length);
   };
   window.addEventListener('keydown',onKey);
   return ()=>window.removeEventListener('keydown',onKey);
 },[expanded,images.length]);
 return <article className="project-card project-gallery" >
    <div className="gallery-media">
      <button className="gallery-cover" onClick={()=>setExpanded(true)} aria-label={'Enlarge '+item.title+' '+current.label}>
       <img src={current.src} alt={item.title+': '+current.label} loading="lazy"/>
       <span className="enlarge-cue"><Expand size={16} aria-hidden="true"/> Enlarge screenshot</span>
      </button>
      <div className="gallery-thumbs" role="group" aria-label={item.title+' screenshots'}>
       {images.map((im,i)=><button key={im.src} aria-label={'Show '+im.label} aria-pressed={selected===i} className={'gallery-thumb '+(selected===i?'selected':'')} onClick={()=>setSelected(i)}>
       <img src={im.src} alt="" loading="lazy"/><span>{im.label}</span></button>)}
      </div>
    </div>
    <div className="project-body">
      <span className="card-eyebrow">PROJECT / {item.id}</span>
      <h3>{item.title}</h3><p>{item.desc}</p>
      <div className="case-study"><div><b>Problem</b><p>{item.problem}</p></div>
      <div><b>Solution</b><p>{item.solution}</p></div>
      <div><b>Technical implementation</b><p>{item.engineering}</p></div>
      <div><b>Evidence & contribution</b><p>{item.contribution}</p></div>
      <div><b>Current limitations</b><p>{item.limitations}</p></div></div>
      <div className="tag-wrap">{item.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div>
      <a className="project-link" href={item.url} target="_blank" rel="noopener noreferrer">View source <ArrowUpRight size={17} aria-hidden="true"/></a>
    </div>
    {expanded&&<div className="gallery-backdrop" role="presentation" onMouseDown={(e)=>{if(e.target===e.currentTarget)setExpanded(false)}}>
     <div className="gallery-dialog" role="dialog" aria-modal="true" aria-label={item.title+' screenshot viewer'}>
       <div className="gallery-dialog-toolbar"><strong>{item.title} · {current.label}</strong><button onClick={()=>setExpanded(false)} aria-label="Close image viewer"><X size={23}/></button></div>
       <img src={current.src} alt={item.title+': '+current.label}/>
       <div className="gallery-controls"><button onClick={()=>setSelected(n=>(n+images.length-1)%images.length)}><ChevronLeft size={18}/> Previous</button><span>{selected+1} / {images.length}</span><button onClick={()=>setSelected(n=>(n+1)%images.length)}>Next <ChevronRight size={18}/></button></div>
     </div>
    </div>}
   </article>
}
export function PathCards(){return <div className="path-grid">
 <a href="/research/" className="path-card path-research"><div className="path-icon"><BrainCircuit aria-hidden="true" size={24}/></div><div><span className="eyebrow">01 / ACADEMIC RESEARCH</span><h3>Explore Research</h3><p>Trustworthy AI, facial recognition, demographic fairness, and medical image analysis.</p></div><span className="path-action">Research pathway <ArrowRight size={17} aria-hidden="true"/></span></a>
 <a href="/engineering/" className="path-card path-engineering"><div className="path-icon"><Code2 aria-hidden="true" size={24}/></div><div><span className="eyebrow">02 / APPLIED ENGINEERING</span><h3>Explore Engineering</h3><p>AI-enabled applications, full-stack web projects, dashboards, and interface systems.</p></div><span className="path-action">Engineering pathway <ArrowRight size={17} aria-hidden="true"/></span></a>
 </div>}
