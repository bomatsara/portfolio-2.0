import{a as m,i as p,S as u,N as v,b as w}from"./vendor-2e1e6a85.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const n=[{image1x:"./img/my_projects/wallet-1x.jpeg",image2x:"./img/my_projects/wallet-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"Wallet webservice",alt:"Wallet webservice"},{image1x:"./img/my_projects/green_harvest-1x.jpeg",image2x:"./img/my_projects/green_harvest-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"Green harvest webservice",alt:"Green harvest webservice"},{image1x:"./img/my_projects/english_excellence-1x.jpeg",image2x:"./img/my_projects/english_excellence-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"English Exellence website",alt:"English Exellence website"},{image1x:"./img/my_projects/vyshyvanka-1x.jpeg",image2x:"./img/my_projects/vyshyvanka-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"Vyshyvanka vibes Landing Page",alt:"Vyshyvanka vibes Landing Page"},{image1x:"./img/my_projects/powerpulse-1x.jpeg",image2x:"./img/my_projects/powerpulse-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"power pulse webservice",alt:"power pulse webservice"},{image1x:"./img/my_projects/mimino-1x.jpeg",image2x:"./img/my_projects/mimino-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"mimino website",alt:"mimino website"},{image1x:"./img/my_projects/chego-1x.jpeg",image2x:"./img/my_projects/chego-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"chego jewelry website",alt:"chego jewelry website"},{image1x:"./img/my_projects/energy_flow-1x.jpeg",image2x:"./img/my_projects/energy_flow-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"energy flow webservice",alt:"energy flow webservice"},{image1x:"./img/my_projects/fruitbox-1x.jpeg",image2x:"./img/my_projects/fruitbox-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"fruitbox online store",alt:"fruitbox online store"},{image1x:"./img/my_projects/starlight-1x.jpeg",image2x:"./img/my_projects/starlight-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"starlight studio landing page",alt:"starlight studio landing page"}],h={BASE_URL:"https://portfolio-js.b.goit.study/api",ENDPOINT_REVIEWS:"/reviews"};let c=0;const l=3,g=document.getElementById("load-more"),y=document.getElementById("projects-list");g.addEventListener("click",d);function d(){let t=null;for(let i=0;i<l&&c<n.length;i++){const e=n[c++],o=document.createElement("li");o.className="projects-cards",o.innerHTML=`
      <picture>
        <source
          srcset="${e.image1x} 1x, ${e.image2x} 2x"
          media="(min-width: 1280px)"
          sizes="1008px"
        >
        <source
          srcset="${e.image1x} 1x, ${e.image2x} 2x"
          media="(min-width: 768px) and (max-width: 1279px)"
          sizes="704px"
        >
        <source
          srcset="${e.image1x} 1x, ${e.image2x} 2x"
          sizes="(max-width: 359px) 100vw,
                 (min-width: 360px) and (max-width: 767px) 50vw,
                 (min-width: 768px) and (max-width: 1279px) 704px,
                 (min-width: 1280px) 1008px"
        >
        <img
          src="${e.image1x}"
          srcset="${e.image1x} 1x, ${e.image2x} 2x"
          alt="${e.alt}"
          class="card-image"
        >
      </picture>
      <p class="text">${e.text}</p>
      <div class="button-card-container">
        <h3 class="projects-name-title">${e.description}</h3>
        <a href="https://github.com/bomatsara/portfolio-2.0" target="_blank" class="button button-light_grey">visit</a>
      </div>
    `,i===0&&(t=o),y.appendChild(o)}t&&c>l&&t.scrollIntoView({behavior:"smooth",block:"start"}),c>=n.length&&(g.style.display="none")}d();const{BASE_URL:f,ENDPOINT_REVIEWS:j}=h;async function b(){return(await m(f+j)).data}async function _(t){const{name:i,email:e}=t;return await m.post("https://portfolio-js.b.goit.study/api/requests/",{name:i,email:e})}const S=document.querySelector(".reviews");b().then(t=>{E(t),N()}).catch(t=>{p.error({title:"Error",message:t.message}),document.querySelector("#section-reviews .swiper").innerHTML="Not found"});function E(t){const i=t.reduce((e,o)=>e+=`<li class="review swiper-slide">
                    <div class="review__text">${o.review}</div>
                    <div class="review__wrap">
                        <img class="review__img" src="${o.avatar_url}" alt="${o.author}"/>
                        <div class="review__author">${o.author}</div>
                    </div>
                </li>`,"");S.insertAdjacentHTML("afterbegin",i)}function N(){new u(".section-reviews .swiper",{slidesPerView:1,spaceBetween:32,modules:[v],navigation:{nextEl:".section-reviews .swiper-button-next",prevEl:".section-reviews .swiper-button-prev"},mousewheel:!0,breakpoints:{769:{slidesPerView:2}}})}function J(){return w.create(`
    <div class="modal">
        <button class="modal-close icon icon-close"></button>
        <div class="modal-title text_caption color-accent">test</div>
        <div class="modal-text text">text</div>
    </div>
`,{onShow:t=>{t.element().querySelector(".modal-close").onclick=t.close}})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#form-work-together");let i=null;t&&t.addEventListener("submit",async e=>{e.preventDefault();const{email:o,message:s}=e.target.elements;try{const r=await _({email:o.value,message:s.value});if(r.data){const{title:a,message:x}=r.data;i||(i=J()),i.element().querySelector(".modal-title").textContent=a,i.element().querySelector(".modal-text").textContent=x,i.show(),t.reset()}}catch(r){p.error({title:"Error",message:r.message})}})});
//# sourceMappingURL=main-fe6b286b.js.map
