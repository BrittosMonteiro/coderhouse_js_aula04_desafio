const product_price = Number(prompt("Informe o valor do produto:"));
const freight = Number(prompt("Informe o valor do frete:"));
const other_costs = Number(prompt("Informe o valor de outros custos:"));
const discount = Number(prompt("Informe o valor de desconto:"));
const icms = 18;

function calculateIcms() {
  if (!product_price || !icms) return;

  const calculate_costs = product_price + freight + other_costs - discount;
  const product_icms = calculate_costs * 0.18;
  return `O valor do ICMS do seu produto é: R$${product_icms.toFixed(2)}`;
}

console.log(calculateIcms())
alert(calculateIcms())
