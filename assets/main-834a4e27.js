import{a as x,i as f,S as y,N as E,b as S}from"./vendor-2e1e6a85.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".mob-menu-btn"),t=document.querySelector("html"),o=document.querySelector(".mob-close-btn"),s=document.querySelector(".mobile-menu"),i=document.querySelectorAll(".mobile-menu-item .header-menu-link"),n=document.querySelectorAll(".header-menu-link");e.addEventListener("click",r),o.addEventListener("click",r),i.forEach(a=>a.addEventListener("click",c)),n.forEach(a=>a.addEventListener("click",c));function r(){s.classList.toggle("open"),t.classList.toggle("menu-opened")}function c(a){a.preventDefault();const b=this.getAttribute("href").substring(1),g=document.getElementById(b);g&&(w(g),s.classList.contains("open")&&r())}function w(a){window.scrollTo({top:a.offsetTop,behavior:"smooth"})}});function d(e){e==="dark"?document.getElementById("darkModeToggle").checked=!0:document.getElementById("darkModeToggle").checked=!1,localStorage.setItem("theme",e),document.documentElement.setAttribute("data-color-scheme",e)}const p=localStorage.getItem("theme");if(p)d(p);else{const e=window.matchMedia("(prefers-color-scheme: dark)").matches;d(e?"dark":"light")}window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{localStorage.getItem("theme")||d(e.matches?"dark":"light")});document.getElementById("darkModeToggle").addEventListener("change",e=>{const t=e.target.checked?"dark":"light";d(t)});document.addEventListener("click",e=>{if(e.target.closest(".accordion")){const t=e.target.closest(".accordion");t.closest(".accordion_list").querySelectorAll(".accordion").forEach(s=>{s.classList.remove("is-open")}),t.classList.add("is-open")}});const I="/portfolio-2.0/assets/wallet-1x-3c825982.png",L="/portfolio-2.0/assets/wallet-2x-ccae7d5e.png",k="/portfolio-2.0/assets/green_harvest-1x-e3ce8762.png",_="/portfolio-2.0/assets/green_harvest-2x-dcbf9707.png",N="/portfolio-2.0/assets/english_excellence-1x-1cbe0665.png",J="/portfolio-2.0/assets/english_excellence-2x-cbe329dd.png",M="/portfolio-2.0/assets/vyshyvanka-1x-8cb40753.png",T="/portfolio-2.0/assets/vyshyvanka-2x-9ef2bb1f.png",P="/portfolio-2.0/assets/powerpulse-1x-3f1f8be0.png",R="/portfolio-2.0/assets/powerpulse-2x-3392102c.png",q="/portfolio-2.0/assets/mimino-1x-7423a74c.png",$="/portfolio-2.0/assets/mimino-2x-4ff6bbf3.png",G="/portfolio-2.0/assets/chego-1x-0c65d650.png",B="/portfolio-2.0/assets/chego-2x-1a7437df.png",O="/portfolio-2.0/assets/energy_flow-1x-c7364d13.png",j="/portfolio-2.0/assets/energy_flow-2x-504d234b.png",A="/portfolio-2.0/assets/fruitbox-1x-0a8f0931.png",C="/portfolio-2.0/assets/fruitbox-2x-48f3ea92.png",D="/portfolio-2.0/assets/starlight-1x-f8c338e9.png",V="/portfolio-2.0/assets/starlight-2x-03eb72ba.png",m=[{image1x:I,image2x:L,text:"React, JavaScript, Node JS, Git",description:"Wallet webservice",alt:"Wallet webservice"},{image1x:k,image2x:_,text:"React, JavaScript, Node JS, Git",description:"Green harvest webservice",alt:"Green harvest webservice"},{image1x:N,image2x:J,text:"React, JavaScript, Node JS, Git",description:"English Excellence website",alt:"English Excellence website"},{image1x:M,image2x:T,text:"React, JavaScript, Node JS, Git",description:"Vyshyvanka vibes Landing Page",alt:"Vyshyvanka vibes Landing Page"},{image1x:P,image2x:R,text:"React, JavaScript, Node JS, Git",description:"power pulse webservice",alt:"power pulse webservice"},{image1x:q,image2x:$,text:"React, JavaScript, Node JS, Git",description:"mimino website",alt:"mimino website"},{image1x:G,image2x:B,text:"React, JavaScript, Node JS, Git",description:"chego jewelry website",alt:"chego jewelry website"},{image1x:O,image2x:j,text:"React, JavaScript, Node JS, Git",description:"energy flow webservice",alt:"energy flow webservice"},{image1x:A,image2x:C,text:"React, JavaScript, Node JS, Git",description:"fruitbox online store",alt:"fruitbox online store"},{image1x:D,image2x:V,text:"React, JavaScript, Node JS, Git",description:"starlight studio landing page",alt:"starlight studio landing page"}],H={BASE_URL:"https://portfolio-js.b.goit.study/api",ENDPOINT_REVIEWS:"/reviews"};let l=0;const u=3,h=document.getElementById("load-more"),z=document.getElementById("projects-list");h.addEventListener("click",v);function v(){let e=null;for(let t=0;t<u&&l<m.length;t++){const o=m[l++],s=document.createElement("li");s.className="projects-cards",s.innerHTML=`
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
    `,t===0&&(e=s),z.appendChild(s)}e&&l>u&&e.scrollIntoView({behavior:"smooth",block:"start"}),l>=m.length&&(h.style.display="none")}v();const{BASE_URL:W,ENDPOINT_REVIEWS:F}=H;async function U(){return(await x(W+F)).data}async function K(e){const{name:t,email:o}=e;return await x.post("https://portfolio-js.b.goit.study/api/requests/",{name:t,email:o})}const Q=document.querySelector(".reviews");U().then(e=>{X(e),Y()}).catch(e=>{f.error({title:"Error",message:e.message}),document.querySelector("#section-reviews .swiper").innerHTML="Not found"});function X(e){const t=e.reduce((o,s)=>o+=`<li class="review swiper-slide">
                    <div class="review__text">${s.review}</div>
                    <div class="review__wrap">
                        <img class="review__img" src="${s.avatar_url}" alt="${s.author}"/>
                        <div class="review__author">${s.author}</div>
                    </div>
                </li>`,"");Q.insertAdjacentHTML("afterbegin",t)}function Y(){new y(".section-reviews .swiper",{slidesPerView:1,spaceBetween:32,modules:[E],navigation:{nextEl:".section-reviews .swiper-button-next",prevEl:".section-reviews .swiper-button-prev"},mousewheel:!0,breakpoints:{769:{slidesPerView:2}}})}function Z(){return S.create(`
    <div class="modal">
        <button class="modal-close icon icon-close"></button>
        <div class="modal-title text_caption color-accent">test</div>
        <div class="modal-text text">text</div>
    </div>
`,{onShow:e=>{e.element().querySelector(".modal-close").onclick=e.close}})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#form-work-together");let t=null;e&&e.addEventListener("submit",async o=>{o.preventDefault();const{email:s,message:i}=o.target.elements;try{const n=await K({email:s.value,message:i.value});if(n.data){const{title:r,message:c}=n.data;t||(t=Z()),t.element().querySelector(".modal-title").textContent=r,t.element().querySelector(".modal-text").textContent=c,t.show(),e.reset()}}catch(n){f.error({title:"Error",message:n.message})}})});
//# sourceMappingURL=main-834a4e27.js.map
