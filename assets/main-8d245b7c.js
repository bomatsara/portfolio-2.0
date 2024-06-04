import{a as p,i as u,S as f,N as y,b}from"./vendor-2e1e6a85.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".mob-menu-btn"),i=document.querySelector("html"),t=document.querySelector(".mob-close-btn"),o=document.querySelector(".mobile-menu"),s=document.querySelectorAll(".mobile-menu-item .header-menu-link"),r=document.querySelectorAll(".header-menu-link");e.addEventListener("click",n),t.addEventListener("click",n),s.forEach(c=>c.addEventListener("click",a)),r.forEach(c=>c.addEventListener("click",a));function n(){o.classList.toggle("open"),i.classList.toggle("menu-opened")}function a(c){c.preventDefault();const w=this.getAttribute("href").substring(1),d=document.getElementById(w);d&&(h(d),o.classList.contains("open")&&n())}function h(c){window.scrollTo({top:c.offsetTop,behavior:"smooth"})}});document.addEventListener("click",e=>{if(e.target.closest(".accordion")){const i=e.target.closest(".accordion");i.closest(".accordion_list").querySelectorAll(".accordion").forEach(o=>{o.classList.remove("is-open")}),i.classList.add("is-open")}});const m=[{image1x:"./img/my_projects/wallet-1x.png",image2x:"./img/my_projects/wallet-2x.png",text:"React, JavaScript, Node JS, Git",description:"Wallet webservice",alt:"Wallet webservice"},{image1x:"./img/my_projects/green_harvest-1x.png",image2x:"./img/my_projects/green_harvest-2x.png",text:"React, JavaScript, Node JS, Git",description:"Green harvest webservice",alt:"Green harvest webservice"},{image1x:"./img/my_projects/english_excellence-1x.png",image2x:"./img/my_projects/english_excellence-2x.png",text:"React, JavaScript, Node JS, Git",description:"English Exellence website",alt:"English Exellence website"},{image1x:"./img/my_projects/vyshyvanka-1x.png",image2x:"./img/my_projects/vyshyvanka-2x.png",text:"React, JavaScript, Node JS, Git",description:"Vyshyvanka vibes Landing Page",alt:"Vyshyvanka vibes Landing Page"},{image1x:"./img/my_projects/powerpulse-1x.png",image2x:"./img/my_projects/powerpulse-2x.png",text:"React, JavaScript, Node JS, Git",description:"power pulse webservice",alt:"power pulse webservice"},{image1x:"./img/my_projects/mimino-1x.png",image2x:"./img/my_projects/mimino-2x.png",text:"React, JavaScript, Node JS, Git",description:"mimino website",alt:"mimino website"},{image1x:"./img/my_projects/chego-1x.png",image2x:"./img/my_projects/chego-2x.png",text:"React, JavaScript, Node JS, Git",description:"chego jewelry website",alt:"chego jewelry website"},{image1x:"./img/my_projects/energy_flow-1x.png",image2x:"./img/my_projects/energy_flow-2x.png",text:"React, JavaScript, Node JS, Git",description:"energy flow webservice",alt:"energy flow webservice"},{image1x:"./img/my_projects/fruitbox-1x.png",image2x:"./img/my_projects/fruitbox-2x.png",text:"React, JavaScript, Node JS, Git",description:"fruitbox online store",alt:"fruitbox online store"},{image1x:"./img/my_projects/starlight-1x.png",image2x:"./img/my_projects/starlight-2x.png",text:"React, JavaScript, Node JS, Git",description:"starlight studio landing page",alt:"starlight studio landing page"}],_={BASE_URL:"https://portfolio-js.b.goit.study/api",ENDPOINT_REVIEWS:"/reviews"};let l=0;const g=3,x=document.getElementById("load-more"),S=document.getElementById("projects-list");x.addEventListener("click",v);function v(){let e=null;for(let i=0;i<g&&l<m.length;i++){const t=m[l++],o=document.createElement("li");o.className="projects-cards",o.innerHTML=`
      <picture>
        <source
          srcset="${t.image1x} 1x, ${t.image2x} 2x"
          media="(min-width: 1280px)"
          sizes="1008px"
        >
        <source
          srcset="${t.image1x} 1x, ${t.image2x} 2x"
          media="(min-width: 768px) and (max-width: 1279px)"
          sizes="704px"
        >
        <source
          srcset="${t.image1x} 1x, ${t.image2x} 2x"
          sizes="(max-width: 359px) 100vw,
                 (min-width: 360px) and (max-width: 767px) 50vw,
                 (min-width: 768px) and (max-width: 1279px) 704px,
                 (min-width: 1280px) 1008px"
        >
        <img
          src="${t.image1x}"
          srcset="${t.image1x} 1x, ${t.image2x} 2x"
          alt="${t.alt}"
          class="card-image"
        >
      </picture>
      <p class="text">${t.text}</p>
      <div class="button-card-container">
        <h3 class="projects-name-title">${t.description}</h3>
        <a href="https://github.com/bomatsara/portfolio-2.0" target="_blank" class="button button-light_grey">visit</a>
      </div>
    `,i===0&&(e=o),S.appendChild(o)}e&&l>g&&e.scrollIntoView({behavior:"smooth",block:"start"}),l>=m.length&&(x.style.display="none")}v();const{BASE_URL:E,ENDPOINT_REVIEWS:L}=_;async function j(){return(await p(E+L)).data}async function N(e){const{name:i,email:t}=e;return await p.post("https://portfolio-js.b.goit.study/api/requests/",{name:i,email:t})}const J=document.querySelector(".reviews");j().then(e=>{k(e),R()}).catch(e=>{u.error({title:"Error",message:e.message}),document.querySelector("#section-reviews .swiper").innerHTML="Not found"});function k(e){const i=e.reduce((t,o)=>t+=`<li class="review swiper-slide">
                    <div class="review__text">${o.review}</div>
                    <div class="review__wrap">
                        <img class="review__img" src="${o.avatar_url}" alt="${o.author}"/>
                        <div class="review__author">${o.author}</div>
                    </div>
                </li>`,"");J.insertAdjacentHTML("afterbegin",i)}function R(){new f(".section-reviews .swiper",{slidesPerView:1,spaceBetween:32,modules:[y],navigation:{nextEl:".section-reviews .swiper-button-next",prevEl:".section-reviews .swiper-button-prev"},mousewheel:!0,breakpoints:{769:{slidesPerView:2}}})}function q(){return b.create(`
    <div class="modal">
        <button class="modal-close icon icon-close"></button>
        <div class="modal-title text_caption color-accent">test</div>
        <div class="modal-text text">text</div>
    </div>
`,{onShow:e=>{e.element().querySelector(".modal-close").onclick=e.close}})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#form-work-together");let i=null;e&&e.addEventListener("submit",async t=>{t.preventDefault();const{email:o,message:s}=t.target.elements;try{const r=await N({email:o.value,message:s.value});if(r.data){const{title:n,message:a}=r.data;i||(i=q()),i.element().querySelector(".modal-title").textContent=n,i.element().querySelector(".modal-text").textContent=a,i.show(),e.reset()}}catch(r){u.error({title:"Error",message:r.message})}})});
//# sourceMappingURL=main-8d245b7c.js.map
