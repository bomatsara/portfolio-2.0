import{a as m,i as p,S as u,N as v,b as w}from"./vendor-2e1e6a85.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();document.addEventListener("click",e=>{if(e.target.closest(".accordion")){const i=e.target.closest(".accordion");i.closest(".accordion_list").querySelectorAll(".accordion").forEach(r=>{r.classList.remove("is-open")}),i.classList.add("is-open")}});const n=[{image1x:"./img/my_projects/wallet-1x.jpeg",image2x:"./img/my_projects/wallet-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"Wallet webservice",alt:"Wallet webservice"},{image1x:"./img/my_projects/green_harvest-1x.jpeg",image2x:"./img/my_projects/green_harvest-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"Green harvest webservice",alt:"Green harvest webservice"},{image1x:"./img/my_projects/english_excellence-1x.jpeg",image2x:"./img/my_projects/english_excellence-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"English Exellence website",alt:"English Exellence website"},{image1x:"./img/my_projects/vyshyvanka-1x.jpeg",image2x:"./img/my_projects/vyshyvanka-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"Vyshyvanka vibes Landing Page",alt:"Vyshyvanka vibes Landing Page"},{image1x:"./img/my_projects/powerpulse-1x.jpeg",image2x:"./img/my_projects/powerpulse-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"power pulse webservice",alt:"power pulse webservice"},{image1x:"./img/my_projects/mimino-1x.jpeg",image2x:"./img/my_projects/mimino-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"mimino website",alt:"mimino website"},{image1x:"./img/my_projects/chego-1x.jpeg",image2x:"./img/my_projects/chego-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"chego jewelry website",alt:"chego jewelry website"},{image1x:"./img/my_projects/energy_flow-1x.jpeg",image2x:"./img/my_projects/energy_flow-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"energy flow webservice",alt:"energy flow webservice"},{image1x:"./img/my_projects/fruitbox-1x.jpeg",image2x:"./img/my_projects/fruitbox-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"fruitbox online store",alt:"fruitbox online store"},{image1x:"./img/my_projects/starlight-1x.jpeg",image2x:"./img/my_projects/starlight-2x.jpeg",text:"React, JavaScript, Node JS, Git",description:"starlight studio landing page",alt:"starlight studio landing page"}],h={BASE_URL:"https://portfolio-js.b.goit.study/api",ENDPOINT_REVIEWS:"/reviews"};let c=0;const l=3,d=document.getElementById("load-more"),y=document.getElementById("projects-list");d.addEventListener("click",g);function g(){let e=null;for(let i=0;i<l&&c<n.length;i++){const t=n[c++],r=document.createElement("li");r.className="projects-cards",r.innerHTML=`
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
    `,i===0&&(e=r),y.appendChild(r)}e&&c>l&&e.scrollIntoView({behavior:"smooth",block:"start"}),c>=n.length&&(d.style.display="none")}g();const{BASE_URL:f,ENDPOINT_REVIEWS:j}=h;async function b(){return(await m(f+j)).data}async function _(e){const{name:i,email:t}=e;return await m.post("https://portfolio-js.b.goit.study/api/requests/",{name:i,email:t})}const S=document.querySelector(".reviews");b().then(e=>{E(e),L()}).catch(e=>{p.error({title:"Error",message:e.message}),document.querySelector("#section-reviews .swiper").innerHTML="Not found"});function E(e){const i=e.reduce((t,r)=>t+=`<li class="review swiper-slide">
                    <div class="review__text">${r.review}</div>
                    <div class="review__wrap">
                        <img class="review__img" src="${r.avatar_url}" alt="${r.author}"/>
                        <div class="review__author">${r.author}</div>
                    </div>
                </li>`,"");S.insertAdjacentHTML("afterbegin",i)}function L(){new u(".section-reviews .swiper",{slidesPerView:1,spaceBetween:32,modules:[v],navigation:{nextEl:".section-reviews .swiper-button-next",prevEl:".section-reviews .swiper-button-prev"},mousewheel:!0,breakpoints:{769:{slidesPerView:2}}})}function N(){return w.create(`
    <div class="modal">
        <button class="modal-close icon icon-close"></button>
        <div class="modal-title text_caption color-accent">test</div>
        <div class="modal-text text">text</div>
    </div>
`,{onShow:e=>{e.element().querySelector(".modal-close").onclick=e.close}})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#form-work-together");let i=null;e&&e.addEventListener("submit",async t=>{t.preventDefault();const{email:r,message:s}=t.target.elements;try{const o=await _({email:r.value,message:s.value});if(o.data){const{title:a,message:x}=o.data;i||(i=N()),i.element().querySelector(".modal-title").textContent=a,i.element().querySelector(".modal-text").textContent=x,i.show(),e.reset()}}catch(o){p.error({title:"Error",message:o.message})}})});
//# sourceMappingURL=main-b41fa9f8.js.map
