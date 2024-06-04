import{a as x,i as h,S as b,N as E,b as S}from"./vendor-2e1e6a85.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".mob-menu-btn"),t=document.querySelector("html"),i=document.querySelector(".mob-close-btn"),o=document.querySelector(".mobile-menu"),s=document.querySelectorAll(".mobile-menu-item .header-menu-link"),r=document.querySelectorAll(".header-menu-link");e.addEventListener("click",n),i.addEventListener("click",n),s.forEach(a=>a.addEventListener("click",c)),r.forEach(a=>a.addEventListener("click",c));function n(){o.classList.toggle("open"),t.classList.toggle("menu-opened")}function c(a){a.preventDefault();const y=this.getAttribute("href").substring(1),g=document.getElementById(y);g&&(f(g),o.classList.contains("open")&&n())}function f(a){window.scrollTo({top:a.offsetTop,behavior:"smooth"})}});function m(e){e==="dark"?document.getElementById("darkModeToggle").checked=!0:document.getElementById("darkModeToggle").checked=!1,localStorage.setItem("theme",e),document.documentElement.setAttribute("data-color-scheme",e)}const p=localStorage.getItem("theme");if(p)m(p);else{const e=window.matchMedia("(prefers-color-scheme: dark)").matches;m(e?"dark":"light")}window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{localStorage.getItem("theme")||m(e.matches?"dark":"light")});document.getElementById("darkModeToggle").addEventListener("change",e=>{const t=e.target.checked?"dark":"light";m(t)});document.addEventListener("click",e=>{if(e.target.closest(".accordion")){const t=e.target.closest(".accordion");t.closest(".accordion_list").querySelectorAll(".accordion").forEach(o=>{o.classList.remove("is-open")}),t.classList.add("is-open")}});const d=[{image1x:"./img/my_projects/wallet-1x.png",image2x:"./img/my_projects/wallet-2x.png",text:"React, JavaScript, Node JS, Git",description:"Wallet webservice",alt:"Wallet webservice"},{image1x:"./img/my_projects/green_harvest-1x.png",image2x:"./img/my_projects/green_harvest-2x.png",text:"React, JavaScript, Node JS, Git",description:"Green harvest webservice",alt:"Green harvest webservice"},{image1x:"./img/my_projects/english_excellence-1x.png",image2x:"./img/my_projects/english_excellence-2x.png",text:"React, JavaScript, Node JS, Git",description:"English Exellence website",alt:"English Exellence website"},{image1x:"./img/my_projects/vyshyvanka-1x.png",image2x:"./img/my_projects/vyshyvanka-2x.png",text:"React, JavaScript, Node JS, Git",description:"Vyshyvanka vibes Landing Page",alt:"Vyshyvanka vibes Landing Page"},{image1x:"./img/my_projects/powerpulse-1x.png",image2x:"./img/my_projects/powerpulse-2x.png",text:"React, JavaScript, Node JS, Git",description:"power pulse webservice",alt:"power pulse webservice"},{image1x:"./img/my_projects/mimino-1x.png",image2x:"./img/my_projects/mimino-2x.png",text:"React, JavaScript, Node JS, Git",description:"mimino website",alt:"mimino website"},{image1x:"./img/my_projects/chego-1x.png",image2x:"./img/my_projects/chego-2x.png",text:"React, JavaScript, Node JS, Git",description:"chego jewelry website",alt:"chego jewelry website"},{image1x:"./img/my_projects/energy_flow-1x.png",image2x:"./img/my_projects/energy_flow-2x.png",text:"React, JavaScript, Node JS, Git",description:"energy flow webservice",alt:"energy flow webservice"},{image1x:"./img/my_projects/fruitbox-1x.png",image2x:"./img/my_projects/fruitbox-2x.png",text:"React, JavaScript, Node JS, Git",description:"fruitbox online store",alt:"fruitbox online store"},{image1x:"./img/my_projects/starlight-1x.png",image2x:"./img/my_projects/starlight-2x.png",text:"React, JavaScript, Node JS, Git",description:"starlight studio landing page",alt:"starlight studio landing page"}],_={BASE_URL:"https://portfolio-js.b.goit.study/api",ENDPOINT_REVIEWS:"/reviews"};let l=0;const u=3,v=document.getElementById("load-more"),L=document.getElementById("projects-list");v.addEventListener("click",w);function w(){let e=null;for(let t=0;t<u&&l<d.length;t++){const i=d[l++],o=document.createElement("li");o.className="projects-cards",o.innerHTML=`
      <picture>
        <source
          srcset="${i.image1x} 1x, ${i.image2x} 2x"
          media="(min-width: 1280px)"
          sizes="1008px"
        >
        <source
          srcset="${i.image1x} 1x, ${i.image2x} 2x"
          media="(min-width: 768px) and (max-width: 1279px)"
          sizes="704px"
        >
        <source
          srcset="${i.image1x} 1x, ${i.image2x} 2x"
          sizes="(max-width: 359px) 100vw,
                 (min-width: 360px) and (max-width: 767px) 50vw,
                 (min-width: 768px) and (max-width: 1279px) 704px,
                 (min-width: 1280px) 1008px"
        >
        <img
          src="${i.image1x}"
          srcset="${i.image1x} 1x, ${i.image2x} 2x"
          alt="${i.alt}"
          class="card-image" loading="lazy"
        >
      </picture>
      <p class="text">${i.text}</p>
      <div class="button-card-container">
        <h3 class="projects-name-title">${i.description}</h3>
        <a href="https://github.com/bomatsara/portfolio-2.0" target="_blank" class="button button-light_grey">visit</a>
      </div>
    `,t===0&&(e=o),L.appendChild(o)}e&&l>u&&e.scrollIntoView({behavior:"smooth",block:"start"}),l>=d.length&&(v.style.display="none")}w();const{BASE_URL:j,ENDPOINT_REVIEWS:k}=_;async function N(){return(await x(j+k)).data}async function J(e){const{name:t,email:i}=e;return await x.post("https://portfolio-js.b.goit.study/api/requests/",{name:t,email:i})}const I=document.querySelector(".reviews");N().then(e=>{M(e),T()}).catch(e=>{h.error({title:"Error",message:e.message}),document.querySelector("#section-reviews .swiper").innerHTML="Not found"});function M(e){const t=e.reduce((i,o)=>i+=`<li class="review swiper-slide">
                    <div class="review__text">${o.review}</div>
                    <div class="review__wrap">
                        <img class="review__img" src="${o.avatar_url}" alt="${o.author}"/>
                        <div class="review__author">${o.author}</div>
                    </div>
                </li>`,"");I.insertAdjacentHTML("afterbegin",t)}function T(){new b(".section-reviews .swiper",{slidesPerView:1,spaceBetween:32,modules:[E],navigation:{nextEl:".section-reviews .swiper-button-next",prevEl:".section-reviews .swiper-button-prev"},mousewheel:!0,breakpoints:{769:{slidesPerView:2}}})}function R(){return S.create(`
    <div class="modal">
        <button class="modal-close icon icon-close"></button>
        <div class="modal-title text_caption color-accent">test</div>
        <div class="modal-text text">text</div>
    </div>
`,{onShow:e=>{e.element().querySelector(".modal-close").onclick=e.close}})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#form-work-together");let t=null;e&&e.addEventListener("submit",async i=>{i.preventDefault();const{email:o,message:s}=i.target.elements;try{const r=await J({email:o.value,message:s.value});if(r.data){const{title:n,message:c}=r.data;t||(t=R()),t.element().querySelector(".modal-title").textContent=n,t.element().querySelector(".modal-text").textContent=c,t.show(),e.reset()}}catch(r){h.error({title:"Error",message:r.message})}})});
//# sourceMappingURL=main-584a887b.js.map
