/* Quraanly add-on: word-by-word meaning. Load AFTER quraanly-stories.js */
(function(){
const css=document.createElement("style");css.textContent=`
.wbw{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;direction:rtl;margin:0 0 18px;animation:fade .5s both}
.wb{padding:8px 12px;border:1px solid var(--line);border-radius:14px;background:var(--card);color:var(--ink);text-align:center;font:inherit;transition:transform .2s,border-color .2s}
.wb:hover,.wb:active{border-color:var(--gold);transform:translateY(-3px)}
.wb b{display:block;font-family:Amiri,serif;font-weight:400;font-size:calc(1.7rem*var(--fz,1));color:var(--gold);line-height:1.6}
.wb small{display:block;font-size:.82rem;color:var(--mute);direction:ltr;max-width:110px}`;
document.head.appendChild(css);
const cache={},KEY="nwbw",isBn=()=>(lang||"bn").startsWith("bn");
const code=()=>lang==="none"?"en":(lang||"bn").split(".")[0];
const on=()=>{try{return localStorage.getItem(KEY)==="1"}catch(e){return false}};
async function load(n,c){const k=n+c;if(cache[k])return cache[k];const out={};let pg=1;
 while(pg&&pg<12){const res=await fetch(`https://api.quran.com/api/v4/verses/by_chapter/${n}?language=${c}&words=true&word_fields=text_uthmani&per_page=50&page=${pg}`);if(!res.ok)throw 0;const j=await res.json();j.verses.forEach(v=>out[v.verse_number]=v.words.filter(w=>w.char_type_name==="word"));pg=j.pagination&&j.pagination.next_page}
 return cache[k]=out}
const label=()=>(on()?"✓ ":"")+(isBn()?"শব্দে শব্দে অর্থ":"Word by word");
async function apply(){document.querySelectorAll(".wbw").forEach(e=>e.remove());const b=document.getElementById("wbtn");if(b)b.textContent=label();if(!on())return;const s=cur;if(!s)return;
 let d;try{d=await load(s.n,code())}catch(e){try{d=await load(s.n,"en")}catch(x){toast(tt().er);return}}
 if(cur!==s||!on())return;
 document.querySelectorAll(".ay").forEach(ay=>{const bk=ay.querySelector(".bk[data-b]");if(!bk)return;const ws=d[+bk.dataset.b.split(":")[1]];if(!ws)return;
  const el=document.createElement("div");el.className="wbw";
  el.innerHTML=ws.map(w=>`<button class="wb" data-wa="${esc(w.audio_url||"")}"><b>${esc(w.text_uthmani||w.text||"")}</b><small>${esc((w.translation&&w.translation.text)||"")}</small></button>`).join("");ay.after(el)})}
new MutationObserver(()=>{if(!cur||r.querySelector("#wbtn")||!r.querySelector(".ay .bk[data-b]"))return;
 const t=document.createElement("div");t.className="ctl";t.innerHTML=`<button class="btn o" id="wbtn">${label()}</button>`;const sub=r.querySelector(".sub");sub?sub.after(t):r.prepend(t);if(on())apply()}).observe(r,{childList:true});
const wa=new Audio();
document.addEventListener("click",e=>{const w=e.target.closest(".wb");if(w){const u=w.dataset.wa;if(u){wa.src="https://audio.qurancdn.com/"+u;wa.play().catch(()=>{})}return}
 if(e.target.closest("#wbtn")){try{localStorage.setItem(KEY,on()?"0":"1")}catch(x){}apply()}});
})();
