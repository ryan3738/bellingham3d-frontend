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

## Server Side Rendering with Next.js

This project uses server side rendering so that products and inventory can be up to date. On the server, the application grabs the data it needs and renders the html to the client. The application interacts with Apollo’s cache and awaits results from the database.

### Main product and home page
![Bellingham 3D main page](/assets/images/bham3d-homepage.png)

## User cart

As the user adds items it will be added to their cart and displayed in the cart modal.

![Bellingham 3D checkout](/assets/images/bham3d-cart.png )
<figcaption>Cart Modal</figcaption>

## Integration with Stripe API for Customer Checkout

If items require shipping address create/update options are displayed. Once an address is selected the stripe checkout is displayed. To ensure a secure checkout, the final checkout mutation is handled on the server.

### Cart checkout page
![Bellingham 3D checkout](/assets/images/bham3d-cart-checkout.png )

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
