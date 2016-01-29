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

  it("add the fullOrder method to all orders", function () {
    var testPizza = new Pizza(2, "medium", ["pepperoni", "cheese", "olives"]);
  });
});

describe('Contact', function () {
  it("create a new contact with the given properties", function () {
    var testContact = new Contact("Rita", "Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
  });
});
