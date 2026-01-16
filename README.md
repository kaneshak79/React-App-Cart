🛒 Add to Cart Modal – ReactJS Application

📌 Project Overview

This is a ReactJS-based shopping cart application that fetches product data from the Fake Store API and allows users to add products to a cart using a modal interface.
The application demonstrates component-based architecture, state management using React hooks, API integration, and responsive UI design.

🎯 Objectives

Fetch and display products from an external API
Implement add-to-cart functionality
Prevent duplicate items in the cart
Display cart items inside a modal
Allow users to remove items from the cart
Maintain clean and reusable component structure

🚀 Features

✔ Fetch products from Fake Store API

✔ Display product image, title, and price

✔ Add products to cart

✔ Alert message for duplicate items

✔ Cart item count displayed in Navbar

✔ Modal popup to view cart items

✔ Remove items from cart

✔ Responsive design for mobile & desktop

✔ Clean and modular code structure

🧑‍💻 Tech Stack Used:

ReactJS	Frontend framework
JavaScript (ES6)	Application logic
HTML5	Structure
CSS3	Styling and layout
Axios	API requests
React Icons	UI icons

📡 API Used

Fake Store API

https://fakestoreapi.com/products

⚙️ Functional Description

🔹 Product Listing
Products are fetched using Axios when the application loads.
Each product displays:
Image
Title
Price
Add to Cart button

🔹 Add to Cart
Clicking Add to Cart adds the product to the cart.
If the product already exists, an alert is shown:
Item already added to the cart

🔹 Cart Count
Navbar displays the number of items currently in the cart.
Count updates dynamically when items are added or removed.

🔹 Cart Modal
Clicking the Cart button opens a modal.
The modal displays:
List of cart items
Remove button for each item
Cart becomes empty when all items are removed.

📱 Responsive Design

Desktop: Horizontal product card layout
Mobile: Vertical stacked layout
CSS media queries ensure smooth responsiveness

▶️ How to Run the Project

Clone the repository:
git clone <repository-url>
Navigate to the project folder:
cd project-folder
Install dependencies:
npm install
Run the application:
npm run dev

🔮 Future Enhancements

Show product image and price inside cart modal
Disable Add to Cart button for already added items
Add total cart price calculation
Add smooth animations to modal
Implement Tailwind CSS styling
Add localStorage support for cart persistence

✅ Conclusion

This project successfully implements a complete Add to Cart system with modal functionality using ReactJS.
It demonstrates strong understanding of:
React hooks (useState, useEffect)
Component communication using props
API integration
Conditional rendering
Responsive UI design

👩‍💻 Author

Kanesha K
ReactJS Developer
