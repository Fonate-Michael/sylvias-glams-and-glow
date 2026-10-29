const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const wa=t=>`https://wa.me/${SITE.wa}?text=${encodeURIComponent(t)}`;
const money=n=>n.toLocaleString('fr-FR')+' FCFA';
const catName=id=>(CATS.find(c=>c.id===id)||{}).name||'';
const WAI='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.700 14.900L2 22l5.300-1.400A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.200 14.800l-.4-.2-2.900.8.800-2.900-.2-.4A8 8 0 0 1 12 4Zm-3 3.500c-.3.300-.8.900-.8 1.900s.8 2.300 2 3.500c1.300 1.200 2.600 1.900 3.500 2.100.8.200 1.500.1 2-.4.300-.3.500-.8.400-1.100l-1.600-.8c-.3-.1-.5 0-.7.200l-.5.600c-.7-.3-2.500-1.500-3-2.700l.5-.6c.2-.2.200-.4.100-.7L10.200 7.500c-.2-.3-.7-.2-1.200 0Z"/></svg>';
const nav=[["index.html","Accueil","home"],["boutique.html","Boutique","shop"],["a-propos.html","À propos","about"],["livraison-paiement.html","Livraison et paiement","ship"],["contact.html","Contact","contact"]];
const page=document.body.dataset.page;
$('#site-header').innerHTML=`<div class="bar">Commandez sur WhatsApp • Livraison à Douala</div>
<header class="hd"><div class="wrap hdin"><a class="logo" href="index.html"><b>${SITE.name}</b><small>Style • Confiance • Toi</small></a>
<button class="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span></button>
<nav class="nav">${nav.map(n=>`<a href="${n[0]}"${n[2]===page?' aria-current="page"':''}>${n[1]}</a>`).join('')}</nav>
<a class="btn dk hdwa" href="${wa('Bonjour, je souhaite des informations.')}" target="_blank" rel="noopener">${WAI}WhatsApp</a></div></header>`;
$('#site-footer').innerHTML=`<footer class="ft"><div class="wrap"><div class="ftg">
<div><h3>${SITE.name}</h3><p>Style • Confiance • Toi.<br>Boutique en ligne de mode, Douala, Cameroun.</p></div>
<div><h4>Boutique</h4>${CATS.map(c=>`<a href="boutique.html?cat=${c.id}">${c.name}</a>`).join('')}</div>
<div><h4>Contact</h4><a href="${wa('Bonjour !')}" target="_blank" rel="noopener">WhatsApp : ${SITE.phone}</a><a href="mailto:${SITE.email}">${SITE.email}</a>
<a href="${SITE.social.tiktok}">TikTok</a><a href="${SITE.social.snapchat}">Snapchat</a><a href="${SITE.social.facebook}">Facebook</a><a href="${SITE.social.instagram}">Instagram</a></div>
</div><div class="cp">© ${new Date().getFullYear()} ${SITE.name}. Tous droits réservés.</div></div></footer>
<a class="fab" href="${wa('Bonjour, je souhaite commander.')}" target="_blank" rel="noopener" aria-label="Commander sur WhatsApp">${WAI}</a>`;
const hd=$('.hd'),bg=$('.burger'),nv=$('.nav');
bg.onclick=()=>{const o=nv.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
addEventListener('scroll',()=>hd.classList.toggle('sc',scrollY>20),{passive:true});
// images cassées -> bloc rose "Photo à venir"
document.addEventListener('error',e=>{if(e.target.tagName==='IMG'){const p=e.target.closest('.ph,.cat,.zoom');p&&p.classList.add('broken')}},true);
// apparition au scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
const reveal=()=>$$('[data-r]:not(.in)').forEach((el,i)=>{el.style.setProperty('--d',(i%4)*.08+'s');io.observe(el)});
const card=p=>`<a class="card" href="produit.html?id=${p.id}" data-r><div class="ph"><img src="${p.img}" alt="${p.name}" loading="lazy"><span class="tag">${p.stock}</span><span class="quick">Voir l’article</span></div><div class="meta"><small>${catName(p.cat)}</small><h3>${p.name}</h3><p>${money(p.price)}</p></div></a>`;
const put=(sel,html)=>{const el=$(sel);if(el)el.innerHTML=html};
// accueil
put('#cats',CATS.map(c=>{const p=PRODUCTS.find(x=>x.cat===c.id);return `<a class="cat" href="boutique.html?cat=${c.id}" data-r><img src="${p.img}" alt="${c.name}" loading="lazy"><h3>${c.name}</h3></a>`}).join(''));
put('#new',PRODUCTS.filter(p=>p.nouveau).slice(0,4).map(card).join(''));
put('#best',PRODUCTS.filter(p=>p.best).slice(0,4).map(card).join(''));
// boutique
const grid=$('#grid');
if(grid){
  let cur=new URLSearchParams(location.search).get('cat')||'all';
  const chips=$('#chips');
  chips.innerHTML=[{id:'all',name:'Tout'},...CATS].map(c=>`<button class="chip" data-c="${c.id}" aria-pressed="${c.id===cur}">${c.name}</button>`).join('');
  const draw=()=>{grid.innerHTML=PRODUCTS.filter(p=>cur==='all'||p.cat===cur).map(card).join('')||'<p>Aucun article pour le moment.</p>';
    $$('.chip').forEach(b=>b.setAttribute('aria-pressed',b.dataset.c===cur));reveal()};
  chips.onclick=e=>{const b=e.target.closest('.chip');if(b){cur=b.dataset.c;history.replaceState(null,'','?cat='+cur);draw()}};
  draw();
}
// fiche produit
const pd=$('#product');
if(pd){
  const p=PRODUCTS.find(x=>x.id===new URLSearchParams(location.search).get('id'));
  if(!p){pd.innerHTML='<p>Article introuvable. <a class="ul" href="boutique.html">Retour à la boutique</a></p>'}
  else{
    document.title=p.name+' | '+SITE.name;
    const imgs=p.imgs||[p.img];let sel={size:p.sizes[0],color:p.colors[0]};
    const opts=(l,k,a)=>a.length?`<div class="lab">${l}</div><div class="opts" data-k="${k}">${a.map(v=>`<button class="opt" aria-pressed="${v===sel[k]}">${v}</button>`).join('')}</div>`:'';
    pd.innerHTML=`<div><div class="zoom"><img id="main" src="${imgs[0]}" alt="${p.name}"></div>${imgs.length>1?`<div class="thumbs">${imgs.map(i=>`<button aria-label="Voir la photo"><img src="${i}" alt=""></button>`).join('')}</div>`:''}</div>
    <div class="pi"><span class="eyebrow">${catName(p.cat)}</span><h1>${p.name}</h1><div class="price">${money(p.price)}</div><p>${p.desc}</p>
    ${opts('Taille','size',p.sizes)}${opts('Couleur','color',p.colors)}
    <div class="lab">Disponibilité : ${p.stock}</div>
    <a id="order" class="btn dk" target="_blank" rel="noopener">${WAI}Commander sur WhatsApp</a>
    <p class="note">Un message avec le nom de l’article s’ouvre dans WhatsApp.</p>
    <details><summary>Paiement</summary><p>MTN Mobile Money, Orange Money. Moitié avant la livraison, le reste à la livraison.</p></details>
    <details><summary>Livraison</summary><p>Douala, puis d’autres villes du Cameroun. <a class="ul" href="livraison-paiement.html">Voir les détails</a></p></details>
    <details><summary>Échange et retour</summary><p>Voir nos conditions sur la page Livraison et paiement.</p></details></div>`;
    const upd=()=>{$('#order').href=wa(`Bonjour, je souhaite commander : ${p.name}${sel.size?`, taille ${sel.size}`:''}${sel.color?`, couleur ${sel.color}`:''} (${money(p.price)}). Merci !`)};upd();
    $$('.opts',pd).forEach(g=>g.onclick=e=>{const b=e.target.closest('.opt');if(!b)return;sel[g.dataset.k]=b.textContent;$$('.opt',g).forEach(x=>x.setAttribute('aria-pressed',x===b));upd()});
    $$('.thumbs button',pd).forEach((b,i)=>b.onclick=()=>$('#main').src=imgs[i]);
    const z=$('.zoom',pd),zi=$('img',z);
    z.onmousemove=e=>{const r=z.getBoundingClientRect();zi.style.transformOrigin=`${(e.clientX-r.left)/r.width*100}% ${(e.clientY-r.top)/r.height*100}%`};
    put('#related',PRODUCTS.filter(x=>x.cat===p.cat&&x.id!==p.id).concat(PRODUCTS.filter(x=>x.cat!==p.cat)).slice(0,4).map(card).join(''));
  }
}
// contact
const f=$('#cform');
if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);open(wa(`Bonjour, je suis ${d.get('n')}. ${d.get('m')}`),'_blank')};
if($('#mtn'))$('#mtn').textContent=SITE.mtn,$('#om').textContent=SITE.orange;
reveal();
