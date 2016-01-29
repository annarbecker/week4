function Pizza(quantity, size, toppings) {
  this.quantity = quantity;
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  var price = 5;
  for (var i = 0; i < this.toppings.length; i++) {
    if(this.toppings[i] === "pepperoni" || "cheese" || "peppers" || "olives" || "spinach" || "sausage") {
    }
    price += 1;
  }
  if(this.size === 2) {
    price += 5;
  }
  if(this.size === 3) {
    price += 10;
  }
  return price * this.quantity
}

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    var quantity = parseInt($("input#quantity").val());
    var size = parseInt($("select#size").val());
    var toppings = [];
    $.each($('input[name="topping"]:checked'), function() {
      toppings.push($(this).val());
    });
    var newPizza = new Pizza(quantity, size, toppings);
    var orderPrice = newPizza.price();

    $(".pizzaPrice").text(orderPrice);
    $("#result").show();
    
  event.preventDefault();
  });
});
