# 🛒 Shopping Cart Application (JavaScript)

A minimalist and robust shopping cart application written in Vanilla JavaScript. This project focuses on handling typed inputs, strict invoice calculation logic, and version control using Git.

## 🚀 Key Features

*   **Product Management:** Add items to the cart with basic attributes (Product ID, Price, Quantity).
*   **Validation Checks:** The system catches errors and immediately prevents invalid input data:
    *   Product ID cannot be an empty string.
    *   Price cannot be a negative number.
    *   Quantity must be a positive integer.
    *   Discount and tax parameters must fall within a valid range (0% - 100%).
*   **Scalable Calculation Logic:** Automatically calculates the Subtotal, flexibly applies discounts (both percentage-based and flat-rate deductions), and adds Tax.
*   **Visual Output:** Prints a detailed list of items in the cart and the final summarized invoice to the console.

## 🛠️ System Requirements

To run this project directly on your machine (especially in an Ubuntu/Linux environment), you need to have **Node.js** installed.

## 💻 How to Run

1. Open your Terminal.
2. Clone this repository to your local machine or download the `shopping_cart.js` file directly.
3. Navigate to the directory containing the source code and execute the following command:
   ```bash
   node shopping_cart.js