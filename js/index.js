const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Putting the nav elements back with color
// EX: cell4.innerHTML = "<span style='font-size:40px'>John Doe</span>";
// "nav-item-1": "Services",
//     "nav-item-2": "Product",
//     "nav-item-3": "Vision",
//     "nav-item-4": "Features",
//     "nav-item-5": "About",
//     "nav-item-6": "Contact",

let navi = document.querySelectorAll("header nav a");
// navi[0].innerHTML= "<span style='color:green'>Services</span>";
// navi[1].innerHTML= "<span style='color:green'>Product</span>";
// navi[2].innerHTML= "<span style='color:green'>Vision</span>";
// navi[3].innerHTML= "<span style='color:green'>Features</span>";
// navi[4].innerHTML= "<span style='color:green'>About</span>";
// navi[5].innerHTML= "<span style='color:green'>Contact</span>";

//using textContent - innerHTML displays text and any HTML tags within the "" while textContent will display
// everything as written within the "" including text like <b> or </br>.
navi[0].textContent= "Services";
navi[0].style.color = "green";
navi[1].textContent= "Product";
navi[1].style.color = "green";
navi[2].textContent= "Vision";
navi[2].style.color = "green";
navi[3].textContent= "Features";
navi[3].style.color = "green";
navi[4].textContent= "About";
navi[4].style.color = "green";
navi[5].textContent= "Contact";
navi[5].style.color = "green";

//Adding 2 extra navs
// EX: var p = document.createElement("p");
// document.body.appendChild(p);
// Another EX: 
// var parent = document.createElement("div");
// var p = document.createElement("p");
// parent.append(p);
// console.log(parent.childNodes); // NodeList [ <p> ]
//Parent

let navParent = document.querySelector("header nav");
let newNav = document.createElement("a");
let newNav2 = document.createElement("a");
newNav.innerHTML = "<span style='color:green'>DARK_SIDE</span>";
newNav.setAttribute("href", "#");
newNav2.setAttribute("href", "#");
newNav2.innerHTML = "<span style='color:green'>DARKER_SIDE</span>";
navParent.append(newNav);
navParent.append(newNav2);


// Putting the cta elements back
//h1
let head1 = document.querySelector('.cta-text h1');
head1.innerHTML = "DOM </br> Is </br> Awesome";

//button
let button1 = document.querySelector('.cta-text button');
button1.innerHTML = "Get Started";

//code snippet picture
let codeSnip = document.getElementById("cta-img");
codeSnip.setAttribute("src","img/header-img.png");


// "main-content": {
//   "features-h4":"Features",
//   "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "about-h4":"About",
//   "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "middle-img-src": "img/mid-page-accent.jpg",
//   "services-h4":"Services",
//   "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "product-h4":"Product",
//   "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "vision-h4":"Vision",
//   "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

//Adding Back Main Content
//Look up textContent
let mainH4 = document.querySelectorAll(".text-content h4");
mainH4[0].innerHTML = "Features";
mainH4[1].innerHTML = "About";
mainH4[2].innerHTML = "Services";
mainH4[3].innerHTML = "Product";
mainH4[4].innerHTML = "Vision";

let mainP = document.querySelectorAll(".text-content p");
mainP[0].innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainP[1].innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainP[2].innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainP[3].innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainP[4].innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//middle image
let midImg = document.getElementById("middle-img");
midImg.setAttribute("src","img/mid-page-accent.jpg");


// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io", }

//Setting the Contact
let leContactsH4 = document.querySelector(".contact h4");
leContactsH4.innerHTML = "Contact";

let leContactsP = document.querySelectorAll(".contact p");
leContactsP[0].innerHTML = "123 Way 456 Street </br> Somewhere, USA";
leContactsP[1].innerHTML = "1 (888) 888-8888";
leContactsP[2].innerHTML = "sales@greatidea.io";

// "footer": {
//   "copyright" : "Copyright Great Idea! 2018" }

let footerz = document.querySelector("footer");
footerz.innerHTML = "Copyright Great Idea! 2018";



