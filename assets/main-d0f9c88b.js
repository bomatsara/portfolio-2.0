import{a as f,i as h,S as E,N as S,b as L}from"./vendor-2e1e6a85.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".mob-menu-btn"),t=document.querySelector("html"),o=document.querySelector(".mob-close-btn"),s=document.querySelector(".mobile-menu"),i=document.querySelectorAll(".mobile-menu-item .header-menu-link"),r=document.querySelectorAll(".header-menu-link");e.addEventListener("click",n),o.addEventListener("click",n),i.forEach(a=>a.addEventListener("click",l)),r.forEach(a=>a.addEventListener("click",l));function n(){s.classList.toggle("open"),t.classList.toggle("menu-opened")}function l(a){a.preventDefault();const y=this.getAttribute("href").substring(1),p=document.getElementById(y);p&&(b(p),s.classList.contains("open")&&n())}function b(a){window.scrollTo({top:a.offsetTop,behavior:"smooth"})}});const m=document.querySelectorAll(".darkModeToggle");function c(e){e==="dark"?m.forEach(t=>{t.checked=!0}):m.forEach(t=>{t.checked=!1}),localStorage.setItem("theme",e),document.documentElement.setAttribute("data-color-scheme",e)}const u=localStorage.getItem("theme");if(u)c(u);else{const e=window.matchMedia("(prefers-color-scheme: dark)").matches;c(e?"dark":"light")}window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{localStorage.getItem("theme")||c(e.matches?"dark":"light")});m.forEach(e=>{e.addEventListener("change",t=>{const o=t.target.checked?"dark":"light";c(o)})});m.forEach(e=>{e.addEventListener("change",t=>{const o=t.target.checked?"dark":"light";c(o)})});document.addEventListener("click",e=>{if(e.target.closest(".accordion")){const t=e.target.closest(".accordion");t.closest(".accordion_list").querySelectorAll(".accordion").forEach(s=>{s.classList.remove("is-open")}),t.classList.add("is-open")}});const I="/portfolio-2.0/assets/wallet-1x-3c825982.png",k="/portfolio-2.0/assets/wallet-2x-ccae7d5e.png",_="/portfolio-2.0/assets/green_harvest-1x-e3ce8762.png",N="/portfolio-2.0/assets/green_harvest-2x-dcbf9707.png",J="/portfolio-2.0/assets/english_excellence-1x-1cbe0665.png",T="/portfolio-2.0/assets/english_excellence-2x-cbe329dd.png",q="/portfolio-2.0/assets/vyshyvanka-1x-8cb40753.png",M="/portfolio-2.0/assets/vyshyvanka-2x-9ef2bb1f.png",P="/portfolio-2.0/assets/powerpulse-1x-3f1f8be0.png",R="/portfolio-2.0/assets/powerpulse-2x-3392102c.png",$="/portfolio-2.0/assets/mimino-1x-7423a74c.png",G="/portfolio-2.0/assets/mimino-2x-4ff6bbf3.png",O="/portfolio-2.0/assets/chego-1x-0c65d650.png",j="/portfolio-2.0/assets/chego-2x-1a7437df.png",A="/portfolio-2.0/assets/energy_flow-1x-c7364d13.png",B="/portfolio-2.0/assets/energy_flow-2x-504d234b.png",C="/portfolio-2.0/assets/fruitbox-1x-0a8f0931.png",D="/portfolio-2.0/assets/fruitbox-2x-48f3ea92.png",V="/portfolio-2.0/assets/starlight-1x-f8c338e9.png",H="/portfolio-2.0/assets/starlight-2x-03eb72ba.png",g=[{image1x:I,image2x:k,text:"React, JavaScript, Node JS, Git",description:"Wallet webservice",alt:"Wallet webservice"},{image1x:_,image2x:N,text:"React, JavaScript, Node JS, Git",description:"Green harvest webservice",alt:"Green harvest webservice"},{image1x:J,image2x:T,text:"React, JavaScript, Node JS, Git",description:"English Excellence website",alt:"English Excellence website"},{image1x:q,image2x:M,text:"React, JavaScript, Node JS, Git",description:"Vyshyvanka vibes Landing Page",alt:"Vyshyvanka vibes Landing Page"},{image1x:P,image2x:R,text:"React, JavaScript, Node JS, Git",description:"power pulse webservice",alt:"power pulse webservice"},{image1x:$,image2x:G,text:"React, JavaScript, Node JS, Git",description:"mimino website",alt:"mimino website"},{image1x:O,image2x:j,text:"React, JavaScript, Node JS, Git",description:"chego jewelry website",alt:"chego jewelry website"},{image1x:A,image2x:B,text:"React, JavaScript, Node JS, Git",description:"energy flow webservice",alt:"energy flow webservice"},{image1x:C,image2x:D,text:"React, JavaScript, Node JS, Git",description:"fruitbox online store",alt:"fruitbox online store"},{image1x:V,image2x:H,text:"React, JavaScript, Node JS, Git",description:"starlight studio landing page",alt:"starlight studio landing page"}],z={BASE_URL:"https://portfolio-js.b.goit.study/api",ENDPOINT_REVIEWS:"/reviews"};let d=0;const x=3,v=document.getElementById("load-more"),W=document.getElementById("projects-list");v.addEventListener("click",w);function w(){let e=null;for(let t=0;t<x&&d<g.length;t++){const o=g[d++],s=document.createElement("li");s.className="projects-cards",s.innerHTML=`
      <picture>
        <source
          srcset="${o.image1x} 1x, ${o.image2x} 2x"
          media="(min-width: 1280px)"
          sizes="1008px"
        >
        <source
          srcset="${o.image1x} 1x, ${o.image2x} 2x"
          media="(min-width: 768px) and (max-width: 1279px)"
          sizes="704px"
        >
        <source
          srcset="${o.image1x} 1x, ${o.image2x} 2x"
          sizes="(max-width: 359px) 100vw,
                 (min-width: 360px) and (max-width: 767px) 50vw,
                 (min-width: 768px) and (max-width: 1279px) 704px,
                 (min-width: 1280px) 1008px"
        >
        <img
          src="${o.image1x}"
          srcset="${o.image1x} 1x, ${o.image2x} 2x"
          alt="${o.alt}"
          class="card-image" loading="lazy"
        >
      </picture>
      <p class="text">${o.text}</p>
      <div class="button-card-container">
        <h3 class="projects-name-title">${o.description}</h3>
        <a href="https://github.com/bomatsara/portfolio-2.0" target="_blank" class="button button-light_grey">visit</a>
      </div>
    `,t===0&&(e=s),W.appendChild(s)}e&&d>x&&e.scrollIntoView({behavior:"smooth",block:"start"}),d>=g.length&&(v.style.display="none")}w();const{BASE_URL:F,ENDPOINT_REVIEWS:U}=z;async function K(){return(await f(F+U)).data}async function Q(e){const{name:t,email:o}=e;return await f.post("https://portfolio-js.b.goit.study/api/requests/",{name:t,email:o})}const X=document.querySelector(".reviews");K().then(e=>{Y(e),Z()}).catch(e=>{h.error({title:"Error",message:e.message}),document.querySelector("#section-reviews .swiper").innerHTML="Not found"});function Y(e){const t=e.reduce((o,s)=>o+=`<li class="review swiper-slide">
                    <div class="review__text">${s.review}</div>
                    <div class="review__wrap">
                        <img class="review__img" src="${s.avatar_url}" alt="${s.author}"/>
                        <div class="review__author">${s.author}</div>
                    </div>
                </li>`,"");X.insertAdjacentHTML("afterbegin",t)}function Z(){new E(".section-reviews .swiper",{slidesPerView:1,spaceBetween:32,modules:[S],navigation:{nextEl:".section-reviews .swiper-button-next",prevEl:".section-reviews .swiper-button-prev"},mousewheel:!0,breakpoints:{769:{slidesPerView:2}}})}function ee(){return L.create(`
    <div class="modal">
        <button class="modal-close icon icon-close"></button>
        <div class="modal-title text_caption color-accent">test</div>
        <div class="modal-text text">text</div>
    </div>
`,{onShow:e=>{e.element().querySelector(".modal-close").onclick=e.close}})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#form-work-together");let t=null;e&&e.addEventListener("submit",async o=>{o.preventDefault();const{email:s,message:i}=o.target.elements;try{const r=await Q({email:s.value,message:i.value});if(r.data){const{title:n,message:l}=r.data;t||(t=ee()),t.element().querySelector(".modal-title").textContent=n,t.element().querySelector(".modal-text").textContent=l,t.show(),e.reset()}}catch(r){h.error({title:"Error",message:r.message})}})});
//# sourceMappingURL=main-d0f9c88b.js.map
