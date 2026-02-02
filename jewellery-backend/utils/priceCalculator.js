const metals = require("../data/metals");
const diamonds = require("../data/diamonds");

function calculatePrice({ metal, diamond }) {
  const metalWeight = 5; // grams (assumption)

  const metalCost = metals[metal].pricePerGram * metalWeight;
  const diamondCost = diamonds[diamond].price;
  const makingCharges = 5000;
  const tax = 0.03 * (metalCost + diamondCost + makingCharges);

  return {
    metalCost,
    diamondCost,
    makingCharges,
    tax,
    totalPrice:
      metalCost + diamondCost + makingCharges + tax
  };
}

module.exports = calculatePrice;
