class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    getProductDetails() {
      return `${this.name} - ${this.price}`;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    removeProduct(product) {
      const index = this.products.indexOf(product);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    }
  
    getTotalCost() {
      let total = 0;
      for (let i = 0; i < this.products.length; i++) {
        total += this.products[i].price;
      }
      return total;
    }
  }
  
  const cart = new ShoppingCart();
  const product1 = new Product("Arch - T-shirt", 95,);
  const product2 = new Product("Troppo pocket", 102,);
  
  cart.addProduct(product1);
  cart.addProduct(product2);
  
  console.log(cart.getTotalCost());
  
  cart.removeProduct(product1);
  
  console.log(cart.getTotalCost());
  
  let addToCartButton = document.getElementById("add-to-cart-button");
  addToCartButton.addEventListener("click", function() {
    let productId = "";
    let product = new Product("Product Name", 10);
    cart.addProduct(product);
  });
  
//połączenie z db
  var cartData = JSON.stringify(cart.items);

$.ajax({
    url: 'koszyk.php',
    method: 'POST',
    data: {cart: cartData},
    success: function(response) {
        console.log('Produkt został dodany do koszyka');
    },
    error: function(xhr, status, error) {
        console.log('Wystąpił bład podczas dodawania produkty');
    }
});
