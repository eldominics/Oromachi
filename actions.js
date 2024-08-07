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
  if (Number(qtyNum.innerHTML) === 0) {
    alert("Please increase the number of quantity");
    return;
  }
}

changeProductQuantity();
