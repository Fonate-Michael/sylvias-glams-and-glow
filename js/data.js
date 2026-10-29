// ====== Modifie ici : infos boutique, produits, images ======
const SITE={
  name:"Sylvia’s Glams and Glow",
  wa:"237687118451",            // WhatsApp (indicatif 237 + numéro)
  phone:"687118451",
  email:"kengnesylvanie237@gmail.com",
  mtn:"654510376", orange:"687118451",
  social:{tiktok:"#",snapchat:"#",facebook:"#",instagram:"#"} // remplace # par tes liens
};
// Photos enregistrées localement pour rester disponibles hors connexion.
const STORE="images/store/store.jpg";
const CATS=[
  {id:"vetements",name:"Vêtements"},{id:"chaussures",name:"Chaussures"},{id:"babouches",name:"Babouches"},
  {id:"accessoires",name:"Accessoires"},{id:"perruques",name:"Perruques"}];
const CL=["Noir","Rose","Blanc"], SZ=["S","M","L","XL"], SH=["37","38","39","40","41"];
// Les prix sont des EXEMPLES (FCFA). stock: "En stock" ou "Sur commande"
const PRODUCTS=[
 {id:"robe-elegante",name:"Robe élégante",cat:"vetements",price:12000,img:"images/products/robe-elegante.jpg",sizes:SZ,colors:CL,stock:"En stock",nouveau:1,best:1,desc:"Robe élégante pour vos sorties et occasions spéciales."},
 {id:"robe-soiree",name:"Robe de soirée",cat:"vetements",price:18000,img:"images/products/robe-soiree.jpg",sizes:SZ,colors:CL,stock:"Sur commande",nouveau:1,desc:"Une silhouette raffinée pour briller le soir."},
 {id:"ensemble-chic",name:"Ensemble chic",cat:"vetements",price:15000,img:"images/products/ensemble-chic.jpg",sizes:SZ,colors:CL,stock:"En stock",best:1,desc:"Ensemble assorti, facile à porter, toujours stylé."},
 {id:"tenue-tendance",name:"Tenue tendance",cat:"vetements",price:14000,img:"images/products/tenue-tendance.jpg",sizes:SZ,colors:CL,stock:"En stock",desc:"Une tenue tendance pour affirmer votre style."},
 {id:"talons-elegants",name:"Talons élégants",cat:"chaussures",price:14000,img:"images/products/talons-elegants.jpg",sizes:SH,colors:["Noir","Rouge"],stock:"En stock",nouveau:1,best:1,desc:"Talons confortables et élégants."},
 {id:"baskets",name:"Baskets",cat:"chaussures",price:16000,img:"images/products/baskets.jpg",sizes:SH,colors:["Blanc","Noir"],stock:"En stock",desc:"Baskets pour un look décontracté."},
 {id:"sandales",name:"Sandales à talons",cat:"chaussures",price:11000,img:"images/products/sandales.jpg",sizes:SH,colors:["Or","Noir"],stock:"Sur commande",desc:"Sandales légères pour les beaux jours."},
 {id:"babouches-glamour",name:"Babouches glamour",cat:"babouches",price:7000,img:"images/products/babouches-glamour.jpg",sizes:SH,colors:["Rose","Or"],stock:"En stock",nouveau:1,desc:"Babouches glamour pour toutes les occasions."},
 {id:"sac-elegant",name:"Sac élégant",cat:"accessoires",price:8000,img:"images/products/sac-elegant.jpg",sizes:[],colors:["Noir","Beige"],stock:"En stock",best:1,desc:"Sac à main pour différentes occasions."},
 {id:"bijoux",name:"Bijoux dorés",cat:"accessoires",price:5000,img:"images/products/bijoux.jpg",sizes:[],colors:["Or"],stock:"En stock",desc:"Bijoux pour compléter vos tenues."},
 {id:"lunettes",name:"Lunettes de soleil",cat:"accessoires",price:4000,img:"images/products/lunettes.jpg",sizes:[],colors:["Noir"],stock:"En stock",desc:"Lunettes tendance, protection et style."},
 {id:"perruque-lisse",name:"Perruque lisse",cat:"perruques",price:35000,img:"images/products/perruque-lisse.jpg",sizes:[],colors:["Noir naturel"],stock:"Sur commande",nouveau:1,best:1,desc:"Perruque lisse de qualité, effet naturel."},
 {id:"perruque-bouclee",name:"Perruque bouclée",cat:"perruques",price:38000,img:"images/products/perruque-bouclee.jpg",sizes:[],colors:["Noir naturel"],stock:"Sur commande",desc:"Perruque bouclée volumineuse."}
];
