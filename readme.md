# Full Stack Next.JS E-Commerce App

## Description
Bellingham 3D is a 3D printing and design service based in Bellingham, WA. With the need to showcase and sell a multitude of products, this application dynamically renders item pages and maintains a detailed cart that stores customers itesm. In addition, there is a user dashboard that allows for looking at order history, and stored address information.

## Tech used:

- Next.js
- React
- TypeScript
- Javascript
- GraphQL
- Apollo Client
- Styled-Components
- React-Transition-Group
- Stripe
- Vercel
- KeystoneJS

# Site Features


## Server Side Rendering of Products with Next.js

This project uses server side rendering so that products and inventory can be up to date. On the server, the application grabs the data it needs and renders the html to the client. The application interacts with Apollo’s cache and awaits results from the database.


![Bellingham 3D main page](/assets/images/bham3d-homepage.png)
<figcaption>Products page</figcaption>

## Navigation & Search

On larger screens the navbar consists of a list of links that allow the user to navigate the site. On mobile devices a burger menu is generated that opens a navigation modal. The search bar queries the graphQL database and allows the user to search for products by name or description. The search generates a list of products that match the search query.


![Bellingham 3D burger navbar and search](/assets/images/bham3d-search.png)
<figcaption>Burger menu for mobile and search bar</figcaption>

## Individual Product Pages

A product page is generated for each product with a title, descriptin, image and price. If the product has multiple images then an image slider with ability to cycle through images is generated. The page also includes option selectors for products with multiple variations.

![Bellingham 3D product page](/assets/images/bham3d-product-page.png)
<figcaption>Product page</figcaption>

## Passwordless Login Component

Users can sign up for an account using a passwordless login. This is done by sending a link to the user’s email. The user clicks the link and is logged in.

![Bellingham 3D signup](/assets/images/bham3d-cart-signup.png)
<figcaption>Signup/Singin component</figcaption>

## User Cart

As the user adds items they will be added to their cart and displayed in the cart modal. The user has options to increment, decrement, and remove items from the cart.

![Bellingham 3D checkout](/assets/images/bham3d-cart.png )
<figcaption>Cart Modal</figcaption>

## Customer Checkout with Stripe API

If any item requires shipping the cart will display the option to select, create or update an address. Once an address is selected the stripe checkout is displayed. To ensure a secure checkout, the final checkout mutation is handled on the server.

![Bellingham 3D checkout](/assets/images/bham3d-cart-checkout.png)
<figcaption>Cart checkout modal</figcaption>

## Order History

The customer can access their dashboard where they can see their order history. Including details on the order date, order number, shipping address, and stripe payment ID.

![Bellingham 3D order history](/assets/images/bham3d-orders.png)
<figcaption>Customer order history</figcaption>

# Running the frontend

> **NOTE** you'll need Stripe credentials and a graphQL endpoint set up in your `.env` file or environment variables to run this project. See the `.env.sample` file for required fields.

The backend client for this project can be seen at [bellingham3d-backend](https://github.com/ryan3738/bellingham3d-backend)
## Getting Started

1. Clone the repository locally
2. Navigate to the root directory
3. Install dependencies
   
        npm install
        # or
        yarn

4. Run the development server
   
        npm run dev
        # or
        yarn dev
5. Open [localhost:7777](http://localhost:7777) with your browser to see the frontend

## Deploy

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
