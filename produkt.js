/* https://kea-alt-del.dk/t7/api */

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((Response) => Response.json())
  .then((data) => showProduct(data));

/* linje 5 det er hvad vi sender med,og linje 9 er det vi modtager(den kan vi kalde havd vi vil)  */
/* Vi skal gøre noget med dataen */
function showProduct(product) {
  /* querySelected øgr så vi kan ændre noget i vores DOM */
  document.querySelector(".box_højre h4").textContent = product.productdisplayname;
  document.querySelector(".box_højre .brand").textContent = product.brandname;
  document.querySelector("img.produktBilled").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  copy.querySelector(".readMore").setAtttribute("href", `produkt.html?id=${product.id}`);
}

/*  VORES DOM 
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
  */
