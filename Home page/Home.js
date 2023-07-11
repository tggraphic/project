// Responsive burger menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active');
});

// Smooth scrolling
const smoothScroll = (target) => {
  const targetSection = document.querySelector(target);
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  }
};

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    smoothScroll(targetId);
  });
});
// JavaScript code for adding items to cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartLimit = 7; // Maximum items allowed in the cart
let cartCount = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (cartCount < cartLimit) {
      cartCount++;
      updateCartCount(cartCount);
      console.log('Added to Cart:', button.parentElement.querySelector('h3').textContent);
    } else {
      console.log('Cart is full!');
    }
  });
});

// Helper function to update the cart count display
const updateCartCount = (count) => {
  const cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = count;
  }
};
