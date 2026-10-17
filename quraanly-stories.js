/* Quraanly add-on: brand + premium cinematic stories. Load AFTER the main script. */
(function(){
// 1) Brand
BRAND.name="Quraanly";BRAND.logo="Quraanly";
document.title="Quraanly — কুরআন পড়ুন, শুনুন, বুঝুন";

// 2) More stories (kid-friendly, short)
STORIES.push(
{id:"yusuf",e:"🌙",ti:["ইউসুফ (আ.)-এর স্বপ্ন","Yusuf's Dream"],g:"linear-gradient(160deg,#7b6cff,#1b1458)",ref:[12,4,6],pg:[["🌙⭐","ছোট্ট ইউসুফ (আ.) একদিন এক সুন্দর স্বপ্ন দেখলেন। এগারোটি তারা, সূর্য আর চাঁদ তাঁকে সম্মান জানাচ্ছে।"],["👨‍👦","তিনি আব্বু ইয়াকুব (আ.)-কে স্বপ্নটা বললেন। আব্বু বললেন, ‘বাবা, এটা কাউকে বলো না। আল্লাহ তোমাকে বিশেষ সম্মান দেবেন।’"],["🕳️","ভাইয়েরা হিংসা করে তাঁকে কুয়োয় ফেলে দিল। কিন্তু আল্লাহ তাঁর সাথেই ছিলেন।"],["👑✨","অনেক বছর পর সেই ইউসুফ (আ.)-ই সম্মানিত হলেন। আল্লাহর কথা সত্যি হলো।"]],ls:"হিংসা করতে নেই। ধৈর্য ধরলে আল্লাহ সুন্দর পথ বের করে দেন।"},
{id:"musa",e:"🧺",ti:["ছোট্ট মূসা (আ.)","Baby Musa"],g:"linear-gradient(160deg,#ffd27a,#2b6f8f)",ref:[28,7,9],pg:[["👶","ছোট্ট মূসা (আ.)-এর জন্মের সময় এক নিষ্ঠুর রাজা ছিল। মা খুব ভয়ে ছিলেন।"],["🤲","আল্লাহ মাকে মনে মনে বললেন, ‘ভয় পেয়ো না, দুঃখ করো না। আমি তাকে তোমার কাছে ফিরিয়ে দেব।’"],["🧺🌊","মা মূসাকে একটি ঝুড়িতে রেখে নদীতে ভাসিয়ে দিলেন। আল্লাহ ঝুড়িটিকে নিরাপদে পথ দেখালেন।"],["🏰💛","নদী ঝুড়িটাকে নিয়ে গেল রাজপ্রাসাদে। আল্লাহর কথামতো মূসা (আ.) আবার মায়ের কোলে ফিরে এলেন।"]],ls:"আল্লাহর ওপর ভরসা রাখলে তিনি সবচেয়ে ভয়ের সময়েও রক্ষা করেন।"},
{id:"kahfy",e:"🏔️",ti:["গুহার যুবকেরা","The Cave Youths"],g:"linear-gradient(160deg,#6bd3b0,#1e3d59)",ref:[18,10,13],pg:[["🏙️","কয়েকজন যুবক এক শহরে থাকত। তারা শুধু এক আল্লাহর ইবাদত করত।"],["🏔️","শহরের লোকেরা তাদের বাধা দিল। তাই তারা এক গুহায় আশ্রয় নিয়ে দোয়া করল, ‘হে রব, আমাদের সঠিক পথ দেখাও।’"],["😴🌙","আল্লাহ তাদের গভীর ঘুমে ডুবিয়ে দিলেন। অনেক অনেক বছর তারা ঘুমিয়ে রইল।"],["☀️✨","যখন জাগল, বিশ্বের অনেক কিছু বদলে গেছে। কিন্তু আল্লাহ তাদের ঈমান রক্ষা করেছেন।"]],ls:"আল্লাহর জন্য কিছু ছাড়লে তিনি আরও ভালো কিছু দেন।"}
);

// 3) Styles
const css=document.createElement("style");css.textContent=`
.cine{position:relative;min-height:76vh;border-radius:32px;overflow:hidden;padding:18px 16px 24px;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:space-between;text-align:center;background:var(--g);box-shadow:0 30px 70px -30px rgba(0,0,0,.6);animation:cin .7s cubic-bezier(.2,.7,.2,1) both;isolation:isolate}
.cine::before{content:"";position:absolute;inset:-30%;z-index:-1;background:radial-gradient(circle at 30% 20%,rgba(255,255,255,.28),transparent 45%),radial-gradient(circle at 80% 90%,rgba(0,0,0,.35),transparent 50%);animation:drift 12s ease-in-out infinite alternate}
@keyframes drift{to{transform:translate(6%,4%) rotate(8deg)}}@keyframes cin{from{opacity:0;transform:translateY(30px) scale(.97)}to{opacity:1;transform:none}}
.cb{display:flex;gap:5px;width:100%}.cb i{flex:1;height:4px;border-radius:9px;background:rgba(255,255,255,.28)}.cb i.d{background:#fff}.cb i.c{background:#fff;box-shadow:0 0 12px #fff}
.pc{position:absolute;bottom:-20px;color:rgba(255,255,255,.7);font-weight:400;font-size:calc(14px*var(--s));animation:rise2 8s linear infinite;pointer-events:none;z-index:-1}
@keyframes rise2{to{transform:translateY(-95vh) rotate(180deg);opacity:0}}
.cem{font-size:clamp(5rem,26vw,9rem);line-height:1.1;margin:18px 0 8px;animation:flt 3.4s ease-in-out infinite,pop .8s cubic-bezier(.2,.9,.3,1.4) both;filter:drop-shadow(0 12px 22px rgba(0,0,0,.35))}
@keyframes pop{from{opacity:0;transform:scale(.3) rotate(-20deg)}}
.ctx{max-width:560px;padding:18px 22px;border-radius:26px;background:rgba(0,0,0,.28);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.25);font-size:1.4rem;line-height:2;margin:8px 0 16px}
.ctx small{display:block;opacity:.8;letter-spacing:.08em}.cw{display:inline-block;opacity:0;animation:wd .55s ease forwards}
@keyframes wd{from{opacity:0;transform:translateY(10px);filter:blur(6px)}to{opacity:1;transform:none;filter:none}}
.cine .btn.o{color:#fff;border-color:rgba(255,255,255,.7)}.cx{align-self:flex-start;background:rgba(0,0,0,.25);color:#fff;border:0;border-radius:99px;padding:6px 16px;margin-top:10px;font-size:1.2rem}
.qcard{position:relative;overflow:hidden;color:#fff;border:0;min-height:200px;border-radius:30px;box-shadow:0 20px 40px -22px rgba(0,0,0,.6)}
.qcard::after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 35%,rgba(255,255,255,.35) 50%,transparent 65%);transform:translateX(-120%);animation:shn 4s ease-in-out infinite}
@keyframes shn{60%,100%{transform:translateX(120%)}}.qcard small{opacity:.85;font-size:.85rem}
@media (prefers-reduced-motion:reduce){.cw{opacity:1}.qcard::after{display:none}}`;
document.head.appendChild(css);

// 4) Helpers
const wf=tx=>tx.split(" ").map((w,i)=>`<span class="cw" style="animation-delay:${.15+i*.13}s">${w}</span>`).join(" ");
const dust=()=>Array.from({length:16},()=>`<b class="pc" style="left:${Math.random()*100}%;--s:${.6+Math.random()*1.2};animation-duration:${6+Math.random()*8}s;animation-delay:-${Math.random()*10}s">✦</b>`).join("");
const bar=(n,p)=>`<div class="cb">${Array.from({length:n+1},(_,j)=>`<i class="${j<p?"d":j===p?"c":""}"></i>`).join("")}</div>`;

// 5) Premium story list
window.kidsT=function(){kopen();lv=kidsT;const t=tt();
r.innerHTML=`<button class="btn o" data-kd="H">←</button><h2>📚 ${t.kst}</h2><div class="kgrid">${STORIES.map((s,i)=>`<button class="kc qcard" style="background:${s.g}" data-kd="t" data-kv="${i}"><span>${s.e}</span>${s.ti[L2()]}<small>${bn(s.pg.length)} ${L2()?"scenes":"দৃশ্য"}${KS.done.includes("T"+s.id)?" ✓":""}</small></button>`).join("")}</div>`};

// 6) Premium story reader
window.stShow=function(){const t=tt(),s=STORIES[ST.i],n=s.pg.length,p=ST.p;
if(p>=n){r.innerHTML=`<div class="cine" style="--g:${s.g}">${bar(n,p)}${dust()}<button class="cx" data-kd="T">←</button><div class="cem">💡</div><div class="ctx"><small>${t.ksh}</small>${wf(s.ls)}</div><div class="ctl"><button class="btn o" data-kd="ref">📖 ${t.krf}</button><button class="btn" data-kd="tdone">⭐ ${t.kfin}</button></div></div>`;return}
r.innerHTML=`<div class="cine" style="--g:${s.g}">${bar(n,p)}${dust()}<button class="cx" data-kd="T">←</button><div class="cem" key="${p}">${s.pg[p][0]}</div><div class="ctx">${wf(s.pg[p][1])}</div><div class="ctl">${p>0?`<button class="btn o" data-kd="tb">${t.kb}</button>`:""}<button class="btn" data-kd="tp">${t.kn}</button>${"speechSynthesis"in window?`<button class="btn o" data-kd="tts">🔊</button>`:""}</div></div>`};

// 7) Swipe left/right
let sx=0;r.addEventListener("touchstart",e=>{sx=e.touches[0].clientX},{passive:true});
r.addEventListener("touchend",e=>{if(!r.querySelector(".cine"))return;const dx=e.changedTouches[0].clientX-sx,n=STORIES[ST.i].pg.length;if(dx<-60&&ST.p<n)kAct("tp");else if(dx>60&&ST.p>0)kAct("tb")});

applyUI();
})();
