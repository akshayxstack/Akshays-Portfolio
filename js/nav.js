/* Shared navigation: commands, page routes and page transitions */
(function(){
var d=document,h=d.documentElement;
var still=matchMedia("(prefers-reduced-motion:reduce)").matches;
var PAGE=(location.pathname.split("/").pop()||"index").replace(/\.html$/,"")||"index";
var FILES={index:"index.html",about:"about.html",skills:"skills.html",journey:"journey.html"};
var ROUTES={home:["index",""],about:["about",""],skills:["skills","skills"],projects:["skills","projects"],
 experience:["journey","experience"],education:["journey","education"],certs:["journey","certs"],contact:["index","contact"]};
var HOME_ONLY={highlights:1,whoami:1,"sudo hire akshay":1};
var AL={skill:"skills",project:"projects",exp:"experience",edu:"education",cert:"certs",certifications:"certs",
 highlight:"highlights",achievements:"highlights",achievement:"highlights",back:"home",cv:"resume",hire:"contact"};
function norm(raw){var c=String(raw).trim().toLowerCase().replace(/^npm\s+/,"");return AL[c]||c}
function go(file,hash){
 var url=FILES[file]+(hash?"#"+hash:"");
 if(still||go.busy){if(!go.busy)location.href=url;return}
 go.busy=true;var zoom=false;
 if(PAGE==="index"){var m=d.querySelector(".mon");
  if(m){var r=m.getBoundingClientRect();
   if(r.bottom>0&&r.top<innerHeight){zoom=true;
    d.body.style.transformOrigin=(r.left+r.width/2+scrollX)+"px "+(r.top+r.height/2+scrollY)+"px"}}}
 h.classList.add(zoom?"nav-zoom":"nav-fade");
 setTimeout(function(){location.href=url},zoom?480:260)}
addEventListener("pageshow",function(e){if(e.persisted){h.classList.remove("nav-zoom","nav-fade");go.busy=false}});
function scrollTo(id){var el=d.getElementById(id);if(!el)return false;
 el.scrollIntoView({behavior:still?"auto":"smooth"});try{history.replaceState(null,"","#"+id)}catch(e){}return true}
function download(){var a=d.createElement("a");a.href="Akshay_Resume.pdf";a.download="Akshay_Resume.pdf";d.body.appendChild(a);a.click();a.remove()}
function lights(say){h.classList.toggle("lights-off");say("light switched "+(h.classList.contains("lights-off")?"off":"on"))}
function handle(raw,ctx){
 var c=norm(raw),say=ctx.say;if(!c)return;
 if(c==="help"){say("try: about, skills, projects, experience, education, certs, highlights, contact, resume, lights, home");return}
 if(c==="lights"){(ctx.lights||function(){lights(say)})();return}
 if(c==="resume"){say("downloading Akshay_Resume.pdf…");download();return}
 if(HOME_ONLY[c]){try{sessionStorage.setItem("akshay-cmd",c)}catch(e){}say("opening home…");go("index");return}
 var r=ROUTES[c];
 if(r){
  if(r[0]===PAGE){
   if(r[1]&&scrollTo(r[1]))say("jumped to "+c);
   else if(r[1]===""&&PAGE==="index")say("you are already home");
   else say("you are already on /"+(PAGE==="journey"?c:PAGE));
  }else{say("opening "+(c==="home"?"home":c)+"…");go(r[0],r[1])}
  return}
 say("command not found: "+c+" — type help")}
window.Nav={page:PAGE,norm:norm,go:go,routes:ROUTES,homeOnly:HOME_ONLY,handle:handle,download:download};
})();
