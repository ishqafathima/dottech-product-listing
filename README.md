DotTech Product Listing 

This project is a responsive product listing page built with React.js for the DotTech Software internship test.

I created this application to practice building a clean product browsing experience with search,filtering, sorting,responsive design,and a few additional UI features.

## Features
- 12 product cards with images,names,categories,prices,and descriptions.
- Search products by name in real time
- Filter products by catgory
- Sort products by:
    - Price: Low to High
    - Price: High to Low
    - Name: A to Z
- Displays a message when no products match the search or filter
- Loading skeleton while the products are loading
- Light and Dark mode
- Responsive Layout for desktop , tablet , and mobile screens
- Reusable React components

## Technologies
- React.js
- JavaScript
- HTML5
- CSS3
- Vite

## Project Structure 

src/
├── Components/
│   ├── CategoryFilter.jsx
│   ├── LoadingSkeleton.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── SearchBar.jsx
│   └── SortSelect.jsx
│
├── Data/
│   └── products.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx

## How to Run the Project
First , clone the repository:

````terminal
git clone https://github.com/ishqafathima/dottech-product-listing

Go to the project folder:

```terminal 
cd dottech-product-listing;

Install the required packages:

```terminal 
npm install 

Start the development server:

``` npm run dev

Then open the local URL shown in the terminal
 http://localhost:5173/

## My Approach

- I kept the product data in a separate 'product.js' file because  the task requires hardcoded products.
- I divided the interface into smaller React components such as the product card, search bar, category filter,sorting control, and loading skeleton. This made the code easier to organize and update.
- For the search and category filter, I used React state together with JavaScript array methods to update the displayed products in real time.
- I also added sorting as an extra feature, along with Dark Mode and a loading skeleton to improve the overall user experience.
- The loading skeleton is simulated because the products are hardcoded and are not being loaded from a api.

## Responsive Design 
I tested the layout at different screen sizes to make sure the product cards and controls work properly on:
- Desktop
- Tablet
- Mobile

## Author 
Fathima Ishka
