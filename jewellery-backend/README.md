# Jewellery Backend API

This is a simple backend project for a **Jewellery Product Detail Page** assignment.  
It includes APIs to get product details, calculate prices, check inventory, and validate delivery.

---

## 🚀 Features

1. **Product API**
   - Get details of a product (name, price, available metals, diamond sizes, ring sizes)
   - Endpoint: `GET /products/:id`

2. **Pricing API**
   - Calculate the price based on selected metal and diamond
   - Endpoint: `POST /price/calculate`
   - Request Body:
     ```json
     {
       "metal": "gold_18k",
       "diamond": "1.0"
     }
     ```
   - Response includes metal cost, diamond cost, making charges, tax, and total price

3. **Inventory API**
   - Check stock of a product
   - Endpoint: `GET /inventory/:productId`
   - Response example:
     ```json
     {
       "stock": 5,
       "deliverablePincodes": ["500001", "560001", "110001"]
     }
     ```

4. **Delivery API**
   - Check if product can be delivered to a pincode
   - Endpoint: `POST /inventory/check-delivery`
   - Request Body:
     ```json
     {
       "productId": "ring001",
       "pincode": "500001"
     }
     ```
   - Response:
     ```json
     { "canDeliver": true }
     ```

---

## 💻 Tech Stack

- Node.js
- Express.js
- In-memory data (no database required)
- JSON responses

---

## ⚡ How to Run

1. Install dependencies:
   ```bash
   npm install
Start the server:

node index.js

Server runs on http://localhost:3000


Folder Structure

jewellery-backend/
├── data/
├── routes/
├── utils/
├── index.js
├── package.json
└── README.md

Developer
Chandu Vemula
Backend Developer (Node.js)
GitHub: https://github.com/IamChandu114
