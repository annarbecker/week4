describe('Pizza', function () {
  it("will return a pizza order with the folloiwng entered values", function() {
    var testPizza = new Pizza(2, 2, ["pepperoni", "cheese", "olives"]);
    expect(testPizza.quantity).to.equal(2);
    expect(testPizza.size).to.equal(2);
    expect(testPizza.toppings).to.be.a("array");
    });

  it("will calculate a price based on the customer's order", function() {
    var testPizza = new Pizza(2, 2, ["pepperoni", "cheese", "olives"]);
    expect(testPizza.price()).to.equal(26);
  });
});
