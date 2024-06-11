// Get the order form and order total element
const orderForm = document.getElementById('order-form');
const orderTotalElement = document.getElementById('order-total');
const orderMessageElement = document.getElementById('order-message');

// Define the menu items and their prices
const menuItems = [
    { name: 'Coffee', price: 3.99 },
    { name: 'Sandwich', price: 6.99 },
    { name: 'Salad', price: 5.99 },
];

// Initialize the order total to 0
let orderTotal = 0;

// Add event listener to the order form
orderForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

  // Display the order details
  orderMessageElement.innerHTML = `Thank you, ${name}! Your order has been placed. We will contact you at ${phone} or ${email}.`;

  // Reset the order total
  orderTotal = 0;
  orderTotalElement.textContent = `$0.00`;
});

// Add event listeners to the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.btn-primary');
addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Add the price of the selected dish to the order total
    orderTotal += menuItems[index].price;
    orderTotalElement.textContent = `$${orderTotal.toFixed(2)}`;
  });
});

