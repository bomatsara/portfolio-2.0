import{a as w,i as b,S,N as I,b as k}from"./vendor-2e1e6a85.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".mob-menu-btn"),t=document.querySelector("html"),s=document.querySelector(".mob-close-btn"),o=document.querySelector(".mobile-menu"),i=document.querySelectorAll(".mobile-menu-item .header-menu-link"),r=document.querySelectorAll(".header-menu-link");e.addEventListener("click",a),s.addEventListener("click",a),i.forEach(n=>n.addEventListener("click",c)),r.forEach(n=>n.addEventListener("click",c));function a(){o.classList.toggle("open"),t.classList.toggle("menu-opened")}function c(n){n.preventDefault();const L=this.getAttribute("href").substring(1),x=document.getElementById(L);x&&(g(x),o.classList.contains("open")&&a())}function g(n){window.scrollTo({top:n.offsetTop,behavior:"smooth"})}});const m=document.querySelectorAll(".darkModeToggle");function l(e){e==="dark"?m.forEach(t=>{t.checked=!0}):m.forEach(t=>{t.checked=!1}),localStorage.setItem("theme",e),document.documentElement.setAttribute("data-color-scheme",e)}const f=localStorage.getItem("theme");if(f)l(f);else{const e=window.matchMedia("(prefers-color-scheme: dark)").matches;l(e?"dark":"light")}window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{localStorage.getItem("theme")||l(e.matches?"dark":"light")});m.forEach(e=>{e.addEventListener("change",t=>{const s=t.target.checked?"dark":"light";l(s)})});m.forEach(e=>{e.addEventListener("change",t=>{const s=t.target.checked?"dark":"light";l(s)})});document.addEventListener("click",e=>{if(e.target.closest(".accordion")){const t=e.target.closest(".accordion");if(t.classList.contains("is-open")){t.classList.remove("is-open");return}t.closest(".accordion_list").querySelectorAll(".accordion").forEach(o=>{o.classList.remove("is-open")}),t.classList.add("is-open")}});const _="/portfolio-2.0/assets/wallet-1x-3c825982.png",N="/portfolio-2.0/assets/wallet-2x-ccae7d5e.png",J="/portfolio-2.0/assets/green_harvest-1x-e3ce8762.png",M="/portfolio-2.0/assets/green_harvest-2x-dcbf9707.png",P="/portfolio-2.0/assets/english_excellence-1x-1cbe0665.png",T="/portfolio-2.0/assets/english_excellence-2x-cbe329dd.png",R="/portfolio-2.0/assets/vyshyvanka-1x-8cb40753.png",$="/portfolio-2.0/assets/vyshyvanka-2x-9ef2bb1f.png",q="/portfolio-2.0/assets/powerpulse-1x-3f1f8be0.png",G="/portfolio-2.0/assets/powerpulse-2x-3392102c.png",O="/portfolio-2.0/assets/mimino-1x-7423a74c.png",A="/portfolio-2.0/assets/mimino-2x-4ff6bbf3.png",j="/portfolio-2.0/assets/chego-1x-0c65d650.png",B="/portfolio-2.0/assets/chego-2x-1a7437df.png",C="/portfolio-2.0/assets/energy_flow-1x-c7364d13.png",V="/portfolio-2.0/assets/energy_flow-2x-504d234b.png",D="/portfolio-2.0/assets/fruitbox-1x-0a8f0931.png",H="/portfolio-2.0/assets/fruitbox-2x-48f3ea92.png",z="/portfolio-2.0/assets/starlight-1x-f8c338e9.png",F="/portfolio-2.0/assets/starlight-2x-03eb72ba.png",p=[{image1x:_,image2x:N,text:"React, JavaScript, Node JS, Git",description:"Wallet webservice",alt:"Wallet webservice"},{image1x:J,image2x:M,text:"React, JavaScript, Node JS, Git",description:"Green harvest webservice",alt:"Green harvest webservice"},{image1x:P,image2x:T,text:"React, JavaScript, Node JS, Git",description:"English Excellence website",alt:"English Excellence website"},{image1x:R,image2x:$,text:"React, JavaScript, Node JS, Git",description:"Vyshyvanka vibes Landing Page",alt:"Vyshyvanka vibes Landing Page"},{image1x:q,image2x:G,text:"React, JavaScript, Node JS, Git",description:"power pulse webservice",alt:"power pulse webservice"},{image1x:O,image2x:A,text:"React, JavaScript, Node JS, Git",description:"mimino website",alt:"mimino website"},{image1x:j,image2x:B,text:"React, JavaScript, Node JS, Git",description:"chego jewelry website",alt:"chego jewelry website"},{image1x:C,image2x:V,text:"React, JavaScript, Node JS, Git",description:"energy flow webservice",alt:"energy flow webservice"},{image1x:D,image2x:H,text:"React, JavaScript, Node JS, Git",description:"fruitbox online store",alt:"fruitbox online store"},{image1x:z,image2x:F,text:"React, JavaScript, Node JS, Git",description:"starlight studio landing page",alt:"starlight studio landing page"}],W={BASE_URL:"https://portfolio-js.b.goit.study/api",ENDPOINT_REVIEWS:"/reviews"};let d=0;const v=3,y=document.getElementById("load-more"),U=document.getElementById("projects-list");y.addEventListener("click",E);function E(){let e=null;for(let t=0;t<v&&d<p.length;t++){const s=p[d++],o=document.createElement("li");o.className="projects-cards",o.innerHTML=`
      <picture>
        <source
          srcset="${s.image1x} 1x, ${s.image2x} 2x"
          media="(min-width: 1280px)"
          sizes="1008px"
        >
        <source
          srcset="${s.image1x} 1x, ${s.image2x} 2x"
          media="(min-width: 768px) and (max-width: 1279px)"
          sizes="704px"
        >
        <source
          srcset="${s.image1x} 1x, ${s.image2x} 2x"
          sizes="(max-width: 359px) 100vw,
                 (min-width: 360px) and (max-width: 767px) 50vw,
                 (min-width: 768px) and (max-width: 1279px) 704px,
                 (min-width: 1280px) 1008px"
        >
        <img
          src="${s.image1x}"
          srcset="${s.image1x} 1x, ${s.image2x} 2x"
          alt="${s.alt}"
          class="card-image" loading="lazy"
        >
      </picture>
      <p class="text">${s.text}</p>
      <div class="button-card-container">
        <h3 class="projects-name-title">${s.description}</h3>
        <a href="https://github.com/bomatsara/portfolio-2.0" target="_blank" class="button button-light_grey">visit</a>
      </div>
    `,t===0&&(e=o),U.appendChild(o)}e&&d>v&&e.scrollIntoView({behavior:"smooth",block:"start"}),d>=p.length&&(y.style.display="none")}E();const{BASE_URL:K,ENDPOINT_REVIEWS:Q}=W;async function X(){return(await w(K+Q)).data}async function Y(e){const{name:t,email:s}=e;return await w.post("https://portfolio-js.b.goit.study/api/requests/",{name:t,email:s})}const Z=document.querySelector(".reviews");X().then(e=>{ee(e),te()}).catch(e=>{b.error({title:"Error",message:e.message}),document.querySelector("#section-reviews .swiper").innerHTML="Not found"});function ee(e){const t=e.reduce((s,o)=>s+=`<li class="review swiper-slide">
                    <div class="review__text">${o.review}</div>
                    <div class="review__wrap">
                        <img class="review__img" src="${o.avatar_url}" alt="${o.author}"/>
                        <div class="review__author">${o.author}</div>
                    </div>
                </li>`,"");Z.insertAdjacentHTML("afterbegin",t)}function te(){new S(".section-reviews .swiper",{slidesPerView:1,spaceBetween:32,modules:[I],navigation:{nextEl:".section-reviews .swiper-button-next",prevEl:".section-reviews .swiper-button-prev"},mousewheel:!0,breakpoints:{769:{slidesPerView:2}}})}function se(){return k.create(`
    <div class="modal">
        <button class="modal-close icon icon-close"></button>
        <div class="modal-title text_caption color-accent">test</div>
        <div class="modal-text text">text</div>
    </div>
`,{onShow:e=>{e.element().querySelector(".modal-close").onclick=e.close}})}function oe(e){return`<span class="--error">${e}</span>`}function u(e){return/^\s*$/.test(e.value)?{validated:!1,message:"Field can not be empty"}:e.type==="email"&&!new RegExp(e.getAttribute("pattern")).test(e.value)?{validated:!1,message:"Incorrect email"}:{validated:!0}}function h(e){const t=e.nextElementSibling;t&&t.classList.contains("--error")&&t.remove(),e.classList.remove("--error","--success");const{validated:s,message:o}=u(e);s?e.classList.add("--success"):(e.classList.add("--error"),e.insertAdjacentHTML("afterend",oe(o)))}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#form-work-together");let t=null;if(!e)return;const{email:s,message:o}=e.elements;s.addEventListener("blur",()=>h(s)),o.addEventListener("blur",()=>h(o)),e.addEventListener("submit",async i=>{i.preventDefault();const r=u(s).validated,a=u(o).validated;if(!(!r||!a))try{const c=await Y({email:s.value,message:o.value});if(c.data){const{title:g,message:n}=c.data;t||(t=se()),t.element().querySelector(".modal-title").textContent=g,t.element().querySelector(".modal-text").textContent=n,t.show(),e.reset(),s.classList.remove("--success"),o.classList.remove("--success")}}catch(c){b.error({title:"Error",message:c.message})}})});
//# sourceMappingURL=main-29f8d83b.js.map
