// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer.
function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
let totalCost=meal_cost+(tip_percent/100*meal_cost)+(tax_percent/100*meal_cost);
console.log(Math.round(totalCost));
}
function main() {
    const meal_cost = parseFloat(readLine().trim());

    const tip_percent = parseInt(readLine().trim(), 10);

    const tax_percent = parseInt(readLine().trim(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
