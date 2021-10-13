# Full Stack Next.JS E-Commerce App

## Description
Bellingham 3D is a 3D printing and design service based in Bellingham, WA. With the need to showcase products and allow customers to order an array of products, this application dynamically renders item pages and maintains a detailed cart that stores their orders and customizations. This project employs multiple modern web development tools and techniques, including Server Side Rendering, interacting with a GraphQL API, running server-less functions, and dynamically rendering individual item pages with Next JS’s dynamic routes.

## Tech used:

    Next.js
    React
    GraphQL
    PostgreSQL
    Apollo Client
    Styled-Components
    React-Transition-Group
    Stripe
    Frontend Deployed to Vercel
    Keystone-next
    Backend Deployed to Digital Ocean

## Server Side Rendering with Next.js

Next.js allows for choosing between Server Side Rendering and Static Page Generation on a page-by-page basis. This project uses SSR so that products and inventory can be up to date. On the server, the application grabs the data it needs and renders the html to the client. The application interacts with Apollo’s cache and awaits results from the database.

## Crafting API Resolvers in Keystone-next

The back end uses Keystone-next which is a node & Typescript based Graphql server-side client that uses Next.js for its front end. This is hosted on a Digital Ocean droplet. Keystone takes in GraphQL schemas and resolvers. The resolvers then fetch the data from MongoDB through interacting with Mongoose schemas. It can also be used as a cms for performing CRUD operations on database items.

## Integration with Stripe API for Customer Checkout

In the Stripe implementation. To ensure a secure checkout, the order is handled on the server. There, prices are recalculated with price information on items from the database to ensure correct charging. The order is then converted to a record in the database. Finally, an order is returned to the client with details on their purchase.
Interacting with GraphQL API

# Dependencies

This projects requires a GraphQL API endpoint and a public Stripe key to enable the e-commerce features.

# Getting Started

1. Clone the repository locally
2. Navigate to the root directory
3. Install dependencies
        npm install
        # or
        yarn
4. Create a .env.local file the following env variables
   1. NEXT_PUBLIC_STRIPE_KEY=pk_test_
   2. API_ENDPOINT=http://localhost:3000/api/graphql
5. 4. Run the development server
   
        npm run dev
        # or
        yarn dev
6. Open http://localhost:3000 with your browser to see the website

## Next Steps

Make changes to the website info in the public folder or the component files
Deploy the application using Netlify, Vercel, or another service

## Deploy

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
## License

This project is licensed under the MIT License - see the LICENSE.md file for details