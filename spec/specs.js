describe('Pizza', function () {
  it("will return a pizza order with the folloiwng entered values", function() {
    var testPizza = new Pizza(2, "medium", ["pepperoni", "cheese", "olives"]);
    expect(testPizza.quantity).to.equal(2);
    expect(testPizza.size).to.equal("medium");
    expect(testPizza.toppings).to.be.a("array");
    });

  it("will calculate a price based on the customer's order", function() {
    var testPizza = new Pizza(2, "medium", ["pepperoni", "cheese", "olives"]);
    expect(testPizza.price()).to.equal(26);
  });

  it("will return true if the user does not enter a quantity", function() {
      var testPizza = new Pizza(undefined, "medium", ["pepperoni", "cheese", "olives"]);
      expect(testPizza.noQuantity()).to.equal(true);
  });

  it("will return true if the user enters a negative quantity", function() {
      var testPizza = new Pizza(-2, "medium", ["pepperoni", "cheese", "olives"]);
      expect(testPizza.negQuantity()).to.equal(true);
  });
});
