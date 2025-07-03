// Show welcome message when the site loads
window.addEventListener('load', () => {
  alert('Welcome to Semzy Digital! Shop Phones, Laptops, Gadgets & More.');
});

// Add click events to all products
document.addEventListener('DOMContentLoaded', () => {
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    product.addEventListener('click', () => {
      const productName = product.querySelector('h3').textContent;
      alert(You clicked on: ${productName});
    });
  });
});