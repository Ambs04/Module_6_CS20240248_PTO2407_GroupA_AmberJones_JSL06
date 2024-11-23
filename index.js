// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
  Starters: ["Garlic Bread", "Bruschetta"],
  MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
  Desserts: ["Tiramisu", "Cheesecake"],
};

displayMenuItems(menu);

// Function to display menu items by category
function displayMenuItems(menu) {
  // Get the menu container element from the HTML
  let menuSection = document.getElementById("menu");
  // Loop through each category and its items in the menu object
  Object.keys(menu).forEach((headings) => {
    // Create an element to represent the category
    let heading = document.createElement("h3");
    // Set the text content of the category element to the category name
    heading.innerHTML = headings;
    // Append the category element to the menu container
    menuSection.appendChild(heading);
    // Loop through the items in the category and create list items
    menu[headings].forEach((items) => {
      // Create an element to represent a list of items
      list = document.createElement("ul");
      // Create a list item element
      let itemName = document.createElement("li");
      // Set the text content of the list item element to the item name
      itemName.textContent = items;
      // Append a list of items element to the menu container
      menuSection.appendChild(itemName);
      // Append the list item to the list of items
      let itemList = itemName;
      // Attach a click event listener to the list item to add it to the order
      itemList.addEventListener("click", () => {
        addToOrder(itemName);
      });
    });
  });
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
  // Get the order items list and the order total element from the HTML
  let orderList = document.getElementById("order-items");
  // Create a list item for the order
  let orderListing = document.createElement("li");
  // Set the text content of the list item to the item name
  orderListing.textContent = itemName.innerText;
  // Append the list item to the order items list
  orderList.appendChild(orderListing);
  //Get element from HTML to display and calculate the total cost
  let orderTotal = document.getElementById("order-total");
  // Calculate and update the total price
  let itemPrice = 60;
  let currentTotal = parseFloat(orderTotal.textContent);
  currentTotal += itemPrice;
  // Update the text content of the order total element with the new total
  orderTotal.textContent = currentTotal;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
  // Call the function to display menu items
  displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
