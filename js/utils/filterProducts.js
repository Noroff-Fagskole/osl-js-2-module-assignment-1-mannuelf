export default function filterProducts(searchValue, products) {
  return products.filter(product => {
    const productName = product.name;
    if (productName.toLowerCase().startsWith(searchValue)) return true;
    if (parseFloat(product.price) <= parseFloat(searchValue)) return true;
  });
}
