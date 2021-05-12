export default function filterProducts(searchValue, products) {
  console.log('filtering on: ', products);
  const newArray = products.filter((product) => {
    const productName = product.name;
    // if productName === searchValue'
    if (
      productName.toLowerCase().includes(searchValue) ||
      productName.toLowerCase().startsWith(searchValue)
    ) {
      return true;
    }

    // if product.price <= "the number the user entered"
    if (parseFloat(product.price) <= parseFloat(searchValue)) {
      return true;
    }
  });

  console.log('newArray:', newArray);
  return newArray;
}
