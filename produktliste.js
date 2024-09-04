/* Se Jonas` video fra uge 35 = MEGA GOD */

/* linket er et end-point */
/* Hvis man vil se ex 100 produkter tilføj fetch("https://kea-alt-del.dk/t7/api/products?limit=100") */
fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  /* Vi bestemmer ikke JSON,res: er en variable vi bestemmer  */

  /* når vi har vores data, kan en funktion der hedder X.  */
  .then((data) => showProducts(data));

function showProducts(products) {
  /* looper, og kalder showproduct */
  /* Nu skal det være i ental, for vi bestemmer ikke mere hvad der skal vises */
  /* products.forEach(product=>showProduct(product)) */
  /* Men pga forEach, så kan man bare skrive showProduct, så sender den det selv medfor mig */
  products.forEach(showProduct);
}

/* Her modtager jeg et produkt af gangen */
function showProduct(product) {
  /* 1. Fange template i denne funktion */
  const template = document.querySelector("#smallProductTemplate").content;
  /* Henviser til id i html (linje 34). constent = indhold */

  /* 2. Lave en kopi */
  const copy = template.cloneNode(true);
  /* true = man tager børnene med */

  /* 3. Ændre indhold */
  /* Copy fordi det skifter indholdet på hele sitet samtidige */
  copy.querySelector("h3").textContent = product.productdisplayname;
  /* Gør at vi også kan se billeder */
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("p").textContent = product.price;

  /* Vi skal brug en betingelse (if) fx soldout før vi appender */
  /* if gør at den læser DOM igennem og leder efter soldout, og læser resultatet af det */
  if (product.soldout) {
    /* product er soldout */
    copy.querySelector("article").classList.add("soldOut");
  }
  /* Product er på tilbu, MIT FORSVINDER NÅR DETTE INDSÆTTES */
  /*  if (produkt.discount) {
    kopi.querySelector("article").classList.add("onSale");
    kopi.querySelector(".discounted p span").textContent = Math.round(produkt.price - (produkt.price * produkt.discount) / 100);
    kopi.querySelector(".discounted p+p span").textContent = produkt.discount;
  } */

  copy.querySelector("a").href = `produkt.html?id=${product.id}`;
  /* Appende (Tilføje noget til en eksisterende array) hvor den skal være i DOM (html´en) */
  document.querySelector("main").appendChild(copy);
}

/*  VORES DOM {
    "id": 1163,
    "gender": "Men",
    "category": "Apparel",
    "subcategory": "Topwear",
    "articletype": "Tshirts",
    "season": "Summer",
    "productionyear": 2011,
    "usagetype": "Sports",
    "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
    "price": 895,
    "discount": null,
    "brandname": "Nike",
    "soldout": 0
  }, */
