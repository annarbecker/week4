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
  if(this.size === "medium") {
    price += 5;
  }
  if(this.size === "large") {
    price += 10;
  }
  return price * this.quantity
}

Pizza.prototype.noQuantity = function() {
  if(isNaN(this.quantity)){
    return true;
  }
}

Pizza.prototype.negQuantity = function() {
  if(this.quantity <= 0){
    return true;
  }
}


$(document).ready(function() {

  $("form#pizzaOrder").submit(function(event) {

    var quantity = parseInt($("input#quantity").val());
    var size = $("select#size").val();
    var toppings = [];
    $.each($('input[name="topping"]:checked'), function() {
      toppings.push($(this).val());
    });
    var newPizza = new Pizza(quantity, size, toppings);
    var orderPrice = newPizza.price();
    if(newPizza.noQuantity()) {
      alert("Please enter how many pizzas you would like to order. The order minimum is 1 pizza.");
      return false;
    }
    if(newPizza.negQuantity()) {
      alert("Please enter a valid quantity number. The order minimum is 1 pizza.");
      return false;
    }
    event.preventDefault();

    toppings = toppings.join(", ");

    $(".pizzaPrice").text(orderPrice);
    $("#receipt").show();
    $(".pizzaQuantity").text(quantity);
    $("#pizzaSize").text(size);
    $("#pizzaToppings").text(toppings);
    $("#pizzaReceipt").show();
    $("form#pizzaOrder").hide();

    $("#placeAnotherOrder").click(function() {
      location.reload();
    });
  });
});
