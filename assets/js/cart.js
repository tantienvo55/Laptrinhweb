let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((product, index) => {
    const subtotal = product.price * product.quantity;
    total += subtotal;

    cartItems.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>${product.price.toLocaleString()} ₫</td>
                <td>
                    <button class="btn btn-sm btn-outline-secondary decrease" data-index="${index}">-</button>
                    <span class="mx-2">${product.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary increase" data-index="${index}">+</button>
                </td>
                <td>${subtotal.toLocaleString()} ₫</td>
                <td>
                    <button class="btn btn-sm btn-danger delete" data-index="${index}">Xóa</button>
                </td>
            </tr>
        `;
  });

  totalPriceElement.innerText = `Tổng cộng: ${total.toLocaleString()} ₫`;

  localStorage.setItem("cart", JSON.stringify(cart));
}

document.addEventListener("click", function (e) {
  const index = e.target.getAttribute("data-index");

  if (e.target.classList.contains("increase")) {
    cart[index].quantity += 1;
  } else if (e.target.classList.contains("decrease")) {
    cart[index].quantity = Math.max(1, cart[index].quantity - 1);
  } else if (e.target.classList.contains("delete")) {
    cart.splice(index, 1);
  }

  updateCart();
});

updateCart();
