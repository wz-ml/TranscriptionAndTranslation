(this.webpackJsonptranscriptionandtranslation=this.webpackJsonptranscriptionandtranslation||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(10),c=a.n(r),o=(a(22),a(1)),u=a(11),m=a(12),i=a(16),d=a(15),p=(a(23),a(13)),s=a(14),A=a(8),y=a(7),v=a.p+"static/media/page1.a60f84fa.jpg",h=a.p+"static/media/page2.0fe7db9f.jpg",b=a.p+"static/media/page3.b499fc7d.jpg",g=a.p+"static/media/central_dogma.56f793dd.jpg",S=(a(24),a(25).spawn,function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var l;return Object(u.a)(this,a),(l=t.call(this,e)).winpercentagestate={value:""},l}return Object(m.a)(a,[{key:"render",value:function(){var e=this;function t(e){var t={U:"A",A:"T",G:"C",C:"G"};return e.split("").map((function(e){return t[e.toUpperCase()]})).join("")}function a(e){var t={A:"A",U:"T",C:"C",G:"G"};return e.split("").map((function(e){return t[e.toUpperCase()]})).join("")}function l(e){var t={A:"U",U:"A",C:"G",G:"C"};return e.split("").map((function(e){return t[e.toUpperCase()]})).join("")}function r(e){var t,a=(t={UUU:"Phe-",UUC:"Phe-",UUA:"Leu-",UUG:"Leu-",UCU:"Ser-",UCC:"Ser-",UCA:"Ser-",UCG:"Ser-",UAU:"Tyr-",UAC:"Tyr-",UAA:"STOP-",UAG:"STOP-",UGU:"Cys-",UGC:"Cys-",UGA:"STOP-",UGG:"Trp-",CUU:"Leu-",CUC:"Leu-",CUA:"Leu-",CUG:"Leu-",CCU:"Pro-",CCG:"Pro-",CCA:"Pro-"},Object(o.a)(t,"CCG","Pro-"),Object(o.a)(t,"CAU","His-"),Object(o.a)(t,"CAC","His-"),Object(o.a)(t,"CAA","Gln-"),Object(o.a)(t,"CAG","Gln-"),Object(o.a)(t,"CGU","Arg-"),Object(o.a)(t,"CGC","Arg-"),Object(o.a)(t,"CGA","Arg-"),Object(o.a)(t,"CGG","Arg-"),Object(o.a)(t,"AUU","Ile-"),Object(o.a)(t,"AUC","Ile-"),Object(o.a)(t,"AUA","Ile-"),Object(o.a)(t,"AUG","Met(START)-"),Object(o.a)(t,"ACU","Thr-"),Object(o.a)(t,"ACC","Thr-"),Object(o.a)(t,"ACA","Thr-"),Object(o.a)(t,"ACG","Thr-"),Object(o.a)(t,"AAU","Asn-"),Object(o.a)(t,"AAC","Asn-"),Object(o.a)(t,"AAA","Lys-"),Object(o.a)(t,"AAG","Lys-"),Object(o.a)(t,"AGU","Ser-"),Object(o.a)(t,"AGC","Ser-"),Object(o.a)(t,"AGA","Arg-"),Object(o.a)(t,"AGG","Arg-"),Object(o.a)(t,"GUU","Val-"),Object(o.a)(t,"GUC","Val-"),Object(o.a)(t,"GUA","Val-"),Object(o.a)(t,"GUG","Val-"),Object(o.a)(t,"GCU","Ala-"),Object(o.a)(t,"GCC","Ala-"),Object(o.a)(t,"GCA","Ala-"),Object(o.a)(t,"GCG","Ala-"),Object(o.a)(t,"GAU","Asp-"),Object(o.a)(t,"GAC","Asp-"),Object(o.a)(t,"GAA","Glu-"),Object(o.a)(t,"GAG","Glu-"),Object(o.a)(t,"GGU","Gly-"),Object(o.a)(t,"GGC","Gly-"),Object(o.a)(t,"GGA","Gly-"),Object(o.a)(t,"GGG","Gly-"),t);try{return e.match(/.{1,3}/g).map((function(e){return a[e.toUpperCase()]})).join("")}catch(l){return[""].join("")}}return n.a.createElement("div",{className:"App"},n.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap",rel:"stylesheet"}),n.a.createElement("div",{className:"container p-3 bg-primary text-white border"},n.a.createElement("h1",null,"DNA \u2192 RNA \u2192 Protein"),n.a.createElement("h5",null,"Bio 30/AP")),n.a.createElement("div",{className:"container p-3 w-50 text-black"},n.a.createElement("h5",null,"The Central Dogma of Biology:"),n.a.createElement(y.a,{src:g,fluid:!0}),n.a.createElement("p",null,"Image source: ",n.a.createElement("a",{href:"https://www.khanacademy.org"},"Khan Academy.")),n.a.createElement("p",null,"Note: All Khan Academy content is available for free at (www.khanacademy.org).")),n.a.createElement("div",{className:"container p-3 border"},n.a.createElement("h5",null,"Conversion Tool:"),n.a.createElement("form",null,n.a.createElement("div",{class:"col-*-* p-1"},n.a.createElement("label",null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0DNA (Template Strand)"),n.a.createElement("br",null),n.a.createElement("label",null,"3'- \xa0"),n.a.createElement("input",{className:"monospaced",style:{width:"870px"},type:"text",id:"DNAtemplate",placeholder:"",onChange:function(e){e.preventDefault();var t=document.querySelector("#DNAtemplate").value;if(0==String(t).length)document.querySelector("#DNAtemplate").value="",document.querySelector("#DNAcoding").value="",document.querySelector("#mRNA").value="",document.querySelector("#tRNA").value="",document.querySelector("#Polypeptide").value="";else{var n=function(e){var t={A:"U",T:"A",C:"G",G:"C"};return e.split("").map((function(e){return t[e.toUpperCase()]})).join("")}(t);document.querySelector("#DNAcoding").value=a(n),document.querySelector("#mRNA").value=n,document.querySelector("#tRNA").value=l(n),document.querySelector("#Polypeptide").value=r(n),document.querySelector("#codon_length").value=String(n.length),document.querySelector("#polypeptide_length").value=String(Math.floor(n.length/3))}},ref:function(t){return e.myinput=t}}),n.a.createElement("label",null,"\xa0 -5'")),n.a.createElement("div",{class:"col-*-* p-1"},n.a.createElement("label",null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0DNA (Coding Strand)"),n.a.createElement("br",null),n.a.createElement("label",null,"5'- \xa0"),n.a.createElement("input",{className:"monospaced",style:{width:"870px"},type:"text",id:"DNAcoding",placeholder:"",onChange:function(e){e.preventDefault();var a=document.querySelector("#DNAcoding").value;if(0==String(a).length)document.querySelector("#DNAtemplate").value="",document.querySelector("#DNAcoding").value="",document.querySelector("#mRNA").value="",document.querySelector("#tRNA").value="",document.querySelector("#Polypeptide").value="";else{var n=function(e){var t={A:"A",T:"U",C:"C",G:"G"};return e.split("").map((function(e){return t[e.toUpperCase()]})).join("")}(a);document.querySelector("#DNAtemplate").value=t(n),document.querySelector("#mRNA").value=n,document.querySelector("#tRNA").value=l(n),document.querySelector("#Polypeptide").value=r(n),document.querySelector("#codon_length").value=String(n.length),document.querySelector("#polypeptide_length").value=String(Math.floor(n.length/3))}},ref:function(t){return e.myinput=t}}),n.a.createElement("label",null,"\xa0 -3'")),n.a.createElement("div",{class:"col-*-* p-1"},n.a.createElement("label",null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0mRNA"),n.a.createElement("br",null),n.a.createElement("label",null,"5'- \xa0"),n.a.createElement("input",{className:"monospaced",style:{width:"870px"},type:"text",id:"mRNA",placeholder:"",onChange:function(e){e.preventDefault();var n=document.querySelector("#mRNA").value;if(0==String(n).length)document.querySelector("#DNAtemplate").value="",document.querySelector("#DNAcoding").value="",document.querySelector("#mRNA").value="",document.querySelector("#tRNA").value="",document.querySelector("#Polypeptide").value="";else{var c=n;document.querySelector("#DNAtemplate").value=t(c),document.querySelector("#DNAcoding").value=a(c),document.querySelector("#tRNA").value=l(c),document.querySelector("#Polypeptide").value=r(c),document.querySelector("#codon_length").value=String(c.length),document.querySelector("#polypeptide_length").value=String(Math.floor(c.length/3))}},ref:function(t){return e.myinput=t}}),n.a.createElement("label",null,"\xa0 -3'")),n.a.createElement("div",{class:"col-*-* p-1"},n.a.createElement("label",null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0tRNA anticodon"),n.a.createElement("br",null),n.a.createElement("label",null,"3'- \xa0"),n.a.createElement("input",{className:"monospaced",style:{width:"870px"},type:"text",id:"tRNA",placeholder:"",onChange:function(e){e.preventDefault();var l=document.querySelector("#tRNA").value;if(0==String(l).length)document.querySelector("#DNAtemplate").value="",document.querySelector("#DNAcoding").value="",document.querySelector("#mRNA").value="",document.querySelector("#tRNA").value="",document.querySelector("#Polypeptide").value="";else{var n=function(e){var t={A:"U",U:"A",C:"G",G:"C"};return e.split("").map((function(e){return t[e.toUpperCase()]})).join("")}(l);document.querySelector("#DNAtemplate").value=t(n),document.querySelector("#DNAcoding").value=a(n),document.querySelector("#mRNA").value=n,document.querySelector("#Polypeptide").value=r(n),document.querySelector("#codon_length").value=String(n.length),document.querySelector("#polypeptide_length").value=String(Math.floor(n.length/3))}},ref:function(t){return e.myinput=t}}),n.a.createElement("label",null,"\xa0 -5'")),n.a.createElement("div",{class:"col-*-* p-1"},n.a.createElement("label",null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0Polypeptide Chain"),n.a.createElement("br",null),n.a.createElement("label",null,"\xa0\xa0\xa0\xa0\xa0\xa0"),n.a.createElement("input",{style:{width:"870px"},className:"monospaced",type:"text",id:"Polypeptide",onChange:function(e){e.preventDefault();var t=document.querySelector("#Polypeptide").value;0==String(t).length&&(document.querySelector("#DNAtemplate").value="",document.querySelector("#DNAcoding").value="",document.querySelector("#mRNA").value="",document.querySelector("#tRNA").value="",document.querySelector("#Polypeptide").value="")},ref:function(t){return e.myinput=t},placeholder:""}),n.a.createElement("label",null,"\xa0\xa0\xa0\xa0\xa0\xa0")),n.a.createElement("br",null),n.a.createElement("div",{class:"col-*-* p-1 border"},n.a.createElement("label",null,"Codon length:\xa0"),n.a.createElement("input",{className:"monospaced",style:{width:"110px"},type:"text",disabled:!0,id:"codon_length",placeholder:""}),n.a.createElement("br",null),n.a.createElement("label",null,"Polypeptide length:\xa0"),n.a.createElement("input",{className:"monospaced",style:{width:"70px"},type:"text",disabled:!0,id:"polypeptide_length",placeholder:""})))),n.a.createElement("div",{className:"container pt-4 pl-5 pr-5 bg-dark text-white border"},n.a.createElement("h5",null,"\xa0\xa0\xa0Formula Sheets:"),n.a.createElement("p",null,"\xa0\xa0\xa0\xa0Source: ",n.a.createElement("a",{href:"https://education.alberta.ca/media/160189/b30_databooklet_ft_web.pdf"},"Alberta Education Bio 30 Data Booklet")),n.a.createElement(p.a,null,n.a.createElement(s.a,null,n.a.createElement(A.a,{xs:16,md:0}," ",n.a.createElement(y.a,{src:v,fluid:!0})," "),n.a.createElement(A.a,{xs:16,md:0}," ",n.a.createElement(y.a,{src:h,fluid:!0})," "),n.a.createElement(A.a,{xs:16,md:0}," ",n.a.createElement(y.a,{src:b,fluid:!0})," ")))),n.a.createElement("div",{className:"container p-3 border bg-dark text-white"},n.a.createElement("p",null,"Made by William Z. Check out this project on ",n.a.createElement("a",{href:"https://github.com/wz-ml"},"Github"),".")))}}]),a}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.faefa719.chunk.js.map