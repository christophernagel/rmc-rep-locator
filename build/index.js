(()=>{"use strict";const e=window.React,a=window.wp.blocks,t=window.wp.blockEditor,n=({name:a,address:t,phone:n})=>(0,e.createElement)("div",{className:"rep-card"},(0,e.createElement)("div",{className:"rep-card-content"},(0,e.createElement)("h3",{className:"rep-card-title"},a),(0,e.createElement)("div",{className:"rep-card-details"},(0,e.createElement)("div",{className:"rep-contact-item"},(0,e.createElement)("svg",{viewBox:"0 0 24 24",className:"rep-contact-icon",fill:"none",stroke:"currentColor"},(0,e.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),(0,e.createElement)("polyline",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,points:"9 22 9 12 15 12 15 22"})),(0,e.createElement)("address",{className:"rep-contact-text"},t)),(0,e.createElement)("div",{className:"rep-contact-item"},(0,e.createElement)("svg",{viewBox:"0 0 24 24",className:"rep-contact-icon",fill:"none",stroke:"currentColor"},(0,e.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"})),(0,e.createElement)("a",{href:`tel:${n.replace(/\D/g,"")}`,className:"rep-phone-link"},n))))),r=()=>{const[a,t]=(0,e.useState)(""),r=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"].sort(),o=[{id:1,name:"John Smith Sales Group",address:"123 Business Ave, Suite 101, Phoenix, AZ 85001",phone:"(555) 123-4567",state:"Arizona"},{id:2,name:"Southwest Industrial Solutions",address:"456 Commerce St, Tucson, AZ 85701",phone:"(555) 234-5678",state:"Arizona"},{id:3,name:"Pacific Coast Representatives",address:"789 Industrial Way, Los Angeles, CA 90015",phone:"(555) 345-6789",state:"California"}],s=a?o.filter((e=>e.state===a)):o;return(0,e.createElement)("div",{className:"rep-locator-container"},(0,e.createElement)("div",{className:"rep-locator-layout"},(0,e.createElement)("div",{className:"rep-locator-content"},(0,e.createElement)("div",{className:"rep-state-select"},(0,e.createElement)("select",{value:a,onChange:e=>t(e.target.value),className:"rep-state-dropdown"},(0,e.createElement)("option",{value:""},"All States"),r.map((a=>(0,e.createElement)("option",{key:a,value:a},a))))),0===s.length?(0,e.createElement)("div",{className:"rep-grid-empty"},(0,e.createElement)("p",null,"No representatives found for the selected state.")):(0,e.createElement)("div",{className:"rep-cards-grid"},s.map((a=>(0,e.createElement)(n,{key:a.id,name:a.name,address:a.address,phone:a.phone})))))))};(0,a.registerBlockType)("rmc-rep-locator/rep-locator",{title:"Rep Locator",description:"RMC Rep Locator Block",category:"widgets",icon:"location",edit:function(){const a=(0,t.useBlockProps)();return(0,e.createElement)("div",{...a},(0,e.createElement)(r,{isEditor:!0}))},save:function(){return null}})})();