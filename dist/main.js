(()=>{"use strict";const e=function(){const e=document.querySelector("center"),t=["../images/ice-gem-biscuit-resized.jpg","../images/jelly-resized.jpg","../images/oreo-resized.jpg","../images/white-rabbit-resized.jpg"],i=["Placeholder","Placeholder","Placeholder","Placeholder"],a=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."];let n=[],s=[],o=[],l=[],r=[],c=[];for(let u=0;u<4;u++)n[u]=document.createElement("div"),s[u]=document.createElement("img"),o[u]=document.createElement("div"),l[u]=document.createElement("div"),r[u]=document.createElement("label"),c[u]=document.createElement("label"),n[u].classList.add("menu-box"),s[u].classList.add("menu-image"),s[u].setAttribute("src",t[u]),o[u].classList.add("separator-vertical"),l[u].classList.add("menu-description-container"),r[u].classList.add("label-description"),r[u].classList.add("menu-title"),r[u].textContent=i[u],c[u].classList.add("label-description"),c[u].textContent=a[u],e.appendChild(n[u]),n[u].appendChild(s[u]),n[u].appendChild(o[u]),n[u].appendChild(l[u]),l[u].appendChild(r[u]),l[u].appendChild(c[u])},t=function(){const e=document.querySelector("center"),t=document.querySelectorAll(".menu-box");console.log(t);for(let i=0;i<t.length;i++)e.removeChild(t[i])},i=function(){const e=["Phone","Address"],t=["951-572-2602","Division 19 Calaveras, CA 95221"];let i=[],a=[];const n=document.querySelector("center"),s=document.createElement("div"),o=document.createElement("img"),l=document.createElement("div"),r=document.createElement("div");for(let e=0;e<2;e++)i[e]=document.createElement("label"),a[e]=document.createElement("label");s.classList.add("contact-box"),o.classList.add("menu-image"),o.setAttribute("src","../images/aerial-view-painting.resized.jpg"),l.classList.add("separator-vertical"),r.classList.add("menu-description-container");for(let n=0;n<2;n++)i[n].classList.add("label-description"),i[n].classList.add("menu-title"),i[n].textContent=e[n],a[n].classList.add("label-description"),a[n].textContent=t[n];n.appendChild(s),s.appendChild(o),s.appendChild(l),s.appendChild(r);for(let e=0;e<2;e++)r.appendChild(i[e]),r.appendChild(a[e])},a=function(){const e=document.querySelector("center"),t=document.querySelector(".contact-box");console.log(t),e.removeChild(t)},n=function(){const e=document.querySelector("#content"),t=document.createElement("center");return e.appendChild(t),{loadHeaderAndSelectionTab:function(){!function(){const e=document.createElement("header"),i=document.createElement("h1");i.textContent="Autumn Nostalgia",t.appendChild(e),e.appendChild(i)}(),function(){let e=[],i=[];const a=document.createElement("div");for(let t=0;t<3;t++)e[t]=document.createElement("div"),i[t]=document.createElement("label");a.setAttribute("id","tab-box");for(let t=0;t<3;t++)e[t].classList.add("tab-selection"),i[t].classList.add("tab-label"),i[t].setAttribute("id",`tab-label-${t}`);i[0].textContent="HOME",i[1].textContent="MENU",i[2].textContent="CONTACT",t.appendChild(a);for(let t=0;t<3;t++)a.appendChild(e[t]),e[t].appendChild(i[t])}()},loadHomePage:function(){!function(){const e=document.createElement("div"),i=document.createElement("h2"),a=document.createElement("label");e.classList.add("description-box"),e.setAttribute("id","about-box"),i.classList.add("container-header"),i.textContent="Who are we?",a.classList.add("label-description"),a.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at lectus viverra, tristique ex nec, vehicula dolor. Cras egestas, ligula et posuere efficitur, mauris sapien pharetra magna, ornare viverra eros lacus ac magna. Curabitur semper erat aliquam augue luctus finibus. Maecenas ac consequat diam. Proin in scelerisque arcu. Integer id imperdiet justo, at blandit sem. Etiam cursus mauris sollicitudin, euismod sem et, sollicitudin risus. Mauris accumsan odio sed neque fringilla sollicitudin ut in massa. Vivamus aliquet massa risus, in rhoncus nisl maximus vitae. Aliquam sem nulla, mattis id imperdiet ac, porttitor vitae nisl. In ut dolor ac odio blandit dignissim vitae non est. Sed vitae enim non est finibus pretium. Ut at nunc vitae nunc aliquam tempor ac a nunc.",t.appendChild(e),e.appendChild(i),e.appendChild(a)}(),function(){let e=[],i=[],a=[];const n=document.createElement("div"),s=document.createElement("h2");for(let t=0;t<3;t++)e[t]=document.createElement("label"),i[t]=document.createElement("label");for(let e=0;e<2;e++)a[e]=document.createElement("div");n.classList.add("description-box"),n.setAttribute("id","testimonial-box"),s.classList.add("container-header"),s.textContent="Testimonials";for(let t=0;t<3;t++)e[t].classList.add("label-description"),i[t].classList.add("label-description"),i[t].classList.add("testimonial-name"),i[t].setAttribute("id",`testimonial-name-${t}`);e[0].textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at lectus viverra, tristique ex nec, vehicula dolor. Cras egestas, ligula et posuere efficitur, mauris sapien pharetra magna, ornare viverra eros lacus ac magna. Curabitur semper erat aliquam augue luctus finibus. Maecenas ac consequat diam. Proin in scelerisque arcu. Integer id imperdiet justo, at blandit sem. Etiam cursus mauris sollicitudin, euismod sem et, sollicitudin risus. Mauris accumsan odio sed neque fringilla sollicitudin ut in massa. Vivamus aliquet massa risus, in rhoncus nisl maximus vitae. Aliquam sem nulla, mattis id imperdiet ac, porttitor vitae nisl. In ut dolor ac odio blandit dignissim vitae non est. Sed vitae enim non est finibus pretium. Ut at nunc vitae nunc aliquam tempor ac a nunc.",e[1].textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at lectus viverra, tristique ex nec, vehicula dolor. Cras egestas, ligula et posuere efficitur, mauris sapien pharetra magna, ornare viverra eros lacus ac magna. Curabitur semper erat aliquam augue luctus finibus. Maecenas ac consequat diam. Proin in scelerisque arcu. Integer id imperdiet justo, at blandit sem. Etiam cursus mauris sollicitudin, euismod sem et, sollicitudin risus. Mauris accumsan odio sed neque fringilla sollicitudin ut in massa. Vivamus aliquet massa risus, in rhoncus nisl maximus vitae. Aliquam sem nulla, mattis id imperdiet ac, porttitor vitae nisl. In ut dolor ac odio blandit dignissim vitae non est. Sed vitae enim non est finibus pretium. Ut at nunc vitae nunc aliquam tempor ac a nunc.",e[2].textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at lectus viverra, tristique ex nec, vehicula dolor. Cras egestas, ligula et posuere efficitur, mauris sapien pharetra magna, ornare viverra eros lacus ac magna. Curabitur semper erat aliquam augue luctus finibus. Maecenas ac consequat diam. Proin in scelerisque arcu. Integer id imperdiet justo, at blandit sem. Etiam cursus mauris sollicitudin, euismod sem et, sollicitudin risus. Mauris accumsan odio sed neque fringilla sollicitudin ut in massa. Vivamus aliquet massa risus, in rhoncus nisl maximus vitae. Aliquam sem nulla, mattis id imperdiet ac, porttitor vitae nisl. In ut dolor ac odio blandit dignissim vitae non est. Sed vitae enim non est finibus pretium. Ut at nunc vitae nunc aliquam tempor ac a nunc.",i[0].textContent="Mythical Ferrywolf",i[1].textContent="Chloe",i[2].textContent="Benjamin Brynn";for(let e=0;e<2;e++)a[e].classList.add("separator"),a[e].setAttribute("id",`separator-${e}`);t.appendChild(n),n.appendChild(s);for(let t=0;t<3;t++)n.appendChild(e[t]),n.appendChild(i[t]),t<2&&n.appendChild(a[t])}()},unloadHomePage:function(){!function(){const e=document.querySelector("#about-box");console.log(e),t.removeChild(e)}(),function(){const e=document.querySelector("#testimonial-box");console.log(e),t.removeChild(e)}()}}}();n.loadHeaderAndSelectionTab(),n.loadHomePage();const s=document.querySelector("#tab-label-0"),o=document.querySelector("#tab-label-1"),l=document.querySelector("#tab-label-2");s.addEventListener("click",(function(e){t(),a(),n.loadHomePage()})),o.addEventListener("click",(function(t){n.unloadHomePage(),a(),e()})),l.addEventListener("click",(function(e){n.unloadHomePage(),t(),i()}))})();