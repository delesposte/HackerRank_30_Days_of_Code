function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  const tip_value = meal_cost * tip_percent / 100;
  const tax_value = meal_cost * tax_percent / 100;
  console.log(Math.round(meal_cost + tip_value + tax_value));
}
