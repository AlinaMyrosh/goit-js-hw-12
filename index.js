import{a as l,S as u,i as d}from"./assets/vendor-CZCqCKWq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const f="49461257-d92cdcbbc0ac75fcae3d36a6d",p="https://pixabay.com/api/";function m(t){return l.get(p,{params:{key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const c=document.querySelector(".loader"),g=new u(".gallery a",{captionsData:"alt"});function y(t,r){h(r);const n=t.map(a=>`
    <a class="gallery-item" href="${a.largeImageURL}">
      <img src="${a.webformatURL}" alt="${a.tags}" loading="lazy" />
      <div class="info">
        <p><span>Likes:</span> ${a.likes}</p>
        <p><span>Views:</span> ${a.views}</p>
        <p><span>Comments:</span> ${a.comments}</p>
        <p><span>Downloads:</span> ${a.downloads}</p>
      </div>
    </a>
  `).join("");r.insertAdjacentHTML("beforeend",n),g.refresh()}function h(t){t.innerHTML=""}function i(t){d.error({title:"Error",message:t})}function L(){c.classList.remove("visually-hidden")}function b(){c.classList.add("visually-hidden")}const v=document.querySelector(".form"),S=document.querySelector(".gallery");document.querySelector(".loader");v.addEventListener("submit",w);function w(t){t.preventDefault(),L();const r=t.target.elements["search-text"].value.trim();if(!r){i("You forgot important data");return}m(r).then(n=>{n.length||i("Sorry, there are no images matching your search query. Please try again!"),b(),y(n,S)}).catch(n=>console.log(n))}
//# sourceMappingURL=index.js.map
