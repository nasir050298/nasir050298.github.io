import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X, Github, Mail, FileDown, ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { email, repo } from '../data/content';
type NavLink={ label:string; href:string };
const links:NavLink[]=[
 {label:'Home',href:'#home'},{label:'Research',href:'#research'},{label:'Engineering',href:'#engineering'},
 {label:'About',href:'#about'},{label:'Skills',href:'#skills'},{label:'Contact',href:'#contact'}
];
export function IconLink({href,children,external=false,style='outline'}:{href:string;children:ReactNode;external?:boolean;style?:'outline'|'primary'|'text'}) {
 const cls = style==='primary'?'btn btn-primary':style==='text'?'inline-link':'btn btn-outline';
 return <a className={cls} href={href} {...(external?{target:'_blank',rel:'noopener noreferrer'}:{})}>{children}<ArrowUpRight aria-hidden="true" size={17} strokeWidth={2}/></a>
}
export function Header(){
 const [open,setOpen]=useState(false);
 useEffect(()=>{ const handle=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)}; window.addEventListener('keydown',handle);return()=>window.removeEventListener('keydown',handle)},[]);
return <header className="site-header"><div className="wide-container header-inner">
  <a className="logo" href="/" aria-label="Nasir Uddin Khan home">Nasir<span>.</span></a>
  <nav className="desktop-nav" aria-label="Main navigation">
   {links.slice(1).map(link=><a key={link.label} className={''} href={link.href}>{link.label}</a>)}
   <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV <ArrowUpRight aria-hidden="true" size={14}/></a>
  </nav>
  <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>{open?<X size={23}/>:<Menu size={23}/>}</button>
 </div>
 <nav id="mobile-navigation" className={'mobile-nav '+(open?'is-open':'')} aria-label="Mobile navigation" inert={!open}>
  {links.map(link=><a key={link.label} href={link.href} onClick={()=>setOpen(false)}>{link.label}<ArrowRight size={16} aria-hidden="true"/></a>)}
  <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)}>Download CV <FileDown size={16} aria-hidden="true"/></a>
 </nav></header>
}
export function Footer(){
 return <footer className="footer"><div className="wide-container footer-inner"><div><a href="/" className="logo">Nasir<span>.</span></a><p>Research-driven. Engineering-minded.</p></div><div className="footer-links"><a href={repo} target="_blank" rel="noopener noreferrer"><Github size={16} aria-hidden="true"/>GitHub</a><a href={'mailto:'+email}><Mail size={16} aria-hidden="true"/>Email</a><a href="/cv.pdf"><FileDown size={16} aria-hidden="true"/>CV</a></div><p className="copyright">© {new Date().getFullYear()} Nasir Uddin Khan</p></div></footer>
}
export function Layout({children}:{children:ReactNode}){return <><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></>}
