import{a as l,S as d,i as u}from"./assets/vendor-BBSqv8W6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="49461257-d92cdcbbc0ac75fcae3d36a6d",p="https://pixabay.com/api/";async function m(t){return(await l(p,{params:{key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const c=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt"});function g(t,o){h(o);const s=t.map(a=>`
    <a class="gallery-item" href="${a.largeImageURL}">
      <img src="${a.webformatURL}" alt="${a.tags}" loading="lazy" />
      <div class="info">
        <p><span>Likes:</span> ${a.likes}</p>
        <p><span>Views:</span> ${a.views}</p>
        <p><span>Comments:</span> ${a.comments}</p>
        <p><span>Downloads:</span> ${a.downloads}</p>
      </div>
    </a>
  `).join("");o.insertAdjacentHTML("beforeend",s),y.refresh()}function h(t){t.innerHTML=""}function i(t){u.error({title:"Error",message:t})}function L(){c.classList.remove("visually-hidden")}function b(){c.classList.add("visually-hidden")}const w=document.querySelector(".form"),v=document.querySelector(".gallery");w.addEventListener("submit",S);async function S(t){t.preventDefault(),L();const o=t.target.elements["search-text"].value.trim();if(!o){i("You forgot important data");return}try{const s=await m(o);s.length||i("Sorry, there are no images matching your search query. Please try again!"),g(s,v)}catch{i("Failed to load images. Please try again!")}finally{b()}}
//# sourceMappingURL=index.js.map
