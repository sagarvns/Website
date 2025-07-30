# 🛍️ React E-commerce Dashboard & Cart

An interactive **e-commerce web application** built with **React.js**, featuring a dynamic product dashboard, category filtering, and real-time cart management using Redux.  
Data is fetched from the public [Fake Store API](https://fakestoreapi.com/) to simulate a real online shop.

---

## 📌 Project Overview

This project showcases:
- Dynamic product listing page (**Dashboard**) displaying items, images, prices, and descriptions
- **Category filtering** using API-driven categories
- **Add to Cart** functionality with real-time updates
- **Cart page** to increase/decrease quantity, view totals, and checkout
- Toast notifications for better user feedback
- Clean, responsive UI styled with Bootstrap

> 🧩 Built to demonstrate how React, Redux, and modern libraries work together to create an engaging shopping experience.

---

## ⚙️ Tech Stack

- **Frontend Framework:** React.js
- **State Management:** Redux
- **Routing:** React Router
- **API Requests:** Axios
- **Notifications:** React Hot Toast
- **UI & Styling:** Bootstrap

---

## ✨ Features

✅ View all products fetched dynamically from an API  
✅ Filter products by category in real time  
✅ Add items to cart, with toast notifications  
✅ Increase or decrease product quantity in cart  
✅ View total price calculated dynamically  
✅ Responsive design for desktop & mobile

---

## 📂 Project Structure

```plaintext
src/
 ├── components/
 │   ├── Dashboard/       # Product listing & category filter
 │   ├── Cart/            # Shopping cart page
 │   ├── slider/          # Homepage slider
 │   └── offer/           # Offers section
 ├── store/               # Redux slices & store config
 ├── App.js               # App entry with routing
 └── index.js             # React DOM render
