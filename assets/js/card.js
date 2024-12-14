document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      const name = this.getAttribute("data-name");
      const price = parseFloat(this.getAttribute("data-price"));
      const product = { name, price, quantity: 1 };
  
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      const existingProduct = cart.find((item) => item.name === name);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push(product); 
      }
  
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Đã thêm sản phẩm vào giỏ!");
    });
  });