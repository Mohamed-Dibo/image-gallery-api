let lang = {
  ar: {
    pageLang: "العربية",
    nav: {
      home: "الرئيسية",
      ABOUTUS: "عــننا",
      PRODUCTS: "منتجاتنا",
      CATALOGS: "كاتلوجات",
      LOGOS: "لوجو",
      CONTACT: "التواصل معنا",
      title: "ماس أسيا لتجارة",
    },
  },
  en: {
    pageLang: "الانجليزية",
    nav: {
      home: "Home",
      ABOUTUS: "ABOUT US",
      PRODUCTS: "PRODUCTS",
      CATALOGS: "CATALOGS",
      LOGOS: "LOGOS",
      CONTACT: " CONTACT",
      title: "MAS Asya For Trading",
    },
  },
};

// navbar
let btnLang = document.querySelector(".button-language");
let home = document.querySelector("[data-text = home]");
let PRODUCTS = document.querySelector("[data-text=PRODUCTS]");
let ABOUTUS = document.querySelector("[data-text=ABOUTUS]");
let CONTACT = document.querySelector("[data-text = CONTACT]");
let CATALOGS = document.querySelector("[data-text = CATALOGS]");
let LOGOS = document.querySelector("[data-text = LOGOS]");

// header

let title = document.querySelector("[data-text = title]");

let styleFile = document.querySelector("[data-file=en]");

btnLang.addEventListener("click", (e) => {
  //   console.log(e.target.innerTex);

  if (e.target.textContent == "العربية") {
    // navbar
    e.target.textContent = lang.en.pageLang;
    home.textContent = lang.ar.nav.home;
    ABOUTUS.textContent = lang.ar.nav.ABOUTUS;
    PRODUCTS.textContent = lang.ar.nav.PRODUCTS;
    CONTACT.textContent = lang.ar.nav.CONTACT;
    CATALOGS.textContent = lang.ar.nav.CATALOGS;
    LOGOS.textContent = lang.ar.nav.LOGOS;

    //header
    title.textContent = lang.ar.nav.title;

    styleFile.href = "css/styleArabic.css";
    console.log(styleFile.href);
  } else {
    e.target.textContent = lang.ar.pageLang;
    home.textContent = lang.en.nav.home;
    ABOUTUS.textContent = lang.en.nav.ABOUTUS;
    PRODUCTS.textContent = lang.en.nav.PRODUCTS;
    CONTACT.textContent = lang.en.nav.CONTACT;
    CATALOGS.textContent = lang.en.nav.CATALOGS;
    LOGOS.textContent = lang.en.nav.LOGOS;

    //header
    title.textContent = lang.en.nav.title;
    styleFile.href = "css/style.css";
    console.log(styleFile.href);
  }
});
