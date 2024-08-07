function changeProductQuantity() {
  let add = document.getElementById("add");
  let subtract = document.getElementById("subtract");
  let qtyNum = document.getElementById("qtyNum");

  add.addEventListener("click", () => {
    let value = Number(qtyNum.innerHTML);
    value = value + 1;
    qtyNum.innerHTML = value;
  });

  subtract.addEventListener("click", () => {
    let value = Number(qtyNum.innerHTML);
    if (value == 0) {
      return;
    }

    value = value - 1;
    qtyNum.innerHTML = value;
  });
}

function addToCart() {
  let qtyNum = document.getElementById("qtyNum");
  let addCart = document.getElementById("addToCart");
  addCart.addEventListener("click", () => {
    if (Number(qtyNum.innerHTML) === 0) {
      alert("Please increase the number of quantity");
      return;
    }
    let cartDisplay = document.getElementById("cartItems");

    let prodTitle = document.getElementById("prodTitle");
    let prodPrice = document.getElementById("prodPrice");

    let newDiv = document.createElement("div");
    newDiv.classList.add("cart-div-row");

    let newp1 = document.createElement("p");
    newp1.classList.add("prod-name");
    newp1.innerHTML = prodTitle.innerHTML;

    let newp2 = document.createElement("p");
    newp2.classList.add("prod-qty");
    newp2.innerHTML = prodPrice.innerHTML;

    newDiv.appendChild(newp1);
    newDiv.appendChild(newp2);

    cartDisplay.appendChild(newDiv);

    qtyNum.innerHTML = "0";
  });
}

changeProductQuantity();
addToCart();
