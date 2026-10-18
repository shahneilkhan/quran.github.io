# Run once next to your index.html:  python update.py
import re,sys
p="index.html";s=open(p,encoding="utf-8").read()
HERO='''<section class="hero" id="top" style="padding:0;min-height:0;display:block">
<h1 style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)" data-i="h">কুরআন পড়ুন, শুনুন, বুঝুন</h1>
<img src="hero.webp" alt="Quranly — কুরআন পড়ুন, শুনুন এবং বুঝুন" width="1376" height="768" style="display:block;width:100%;height:auto;max-height:92vh;object-fit:cover;object-position:left center">
<div class="cta" style="margin:0;padding:26px 5vw;animation:none"><a class="btn" href="#surahs" data-open="1" data-i="go">পড়া শুরু করুন</a><a class="btn o" href="#" id="cont" hidden data-i="ct">Continue</a><a class="btn o" href="#" id="kidsb" data-i="kd">Kids</a><a class="btn o" href="#plans" data-i="pl">প্ল্যান দেখুন</a></div>
</section>'''
s,n=re.subn(r'<section class="hero" id="top">.*?</section>',lambda m:HERO,s,count=1,flags=re.S);print("hero",n)
s,n=re.subn(r'const bs=document\.querySelector\("\.bism"\);bs\.innerHTML=','const bs=document.querySelector(".bism");if(bs)bs.innerHTML=',s);print("bism guard",n)
n=s.count("Al Quran");s=s.replace("Al Quran","Quranly");print("brand",n)
n=s.count("shahneilkhan.snkbp.com/quran.github.io");s=s.replace("shahneilkhan.snkbp.com/quran.github.io","alquran.snkbp.com");print("url",n)
s,n=re.subn(r'logo:"[^"]*"','logo:"Quranly"',s);print("logo",n)
open(p,"w",encoding="utf-8").write(s);print("done")
