# 13 ORM: E-Commerce Back End

## The Challenge:

Internet retail, also known as **e-commerce**, plays a significant role within the electronics industry, as it empowers businesses and consumers alike to conveniently engage in online buying and selling of electronic products. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

Your task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a PostgreSQL database.

## Project Conduction:

As a manager at an internet retail company, I want a back end for my e-commerce website that uses the latest technologies, that way my company can compete with other e-commerce companies.


## Acceptance Criteria:

- With a functional Express.js API, when the user adds my database name, PostgreSQL username, and PostgreSQL password to an environment variable file, they are able to connect to a database using Sequelize.

- When the user enters schema and seed commands, a development database is then created and is seeded with test data.

- When the user enters the command to invoke the application, the server will start and the Sequelize models are synced to the PostgreSQL database.

- When the user opens API GET routes in Postman for categories, products, or tags, the data for each of these routes is then displayed in a formatted JSON.

- When the user tests API POST, PUT, and DELETE routes in Postman, they are able to successfully create, update, and delete data in my database.

- Syncs Sequelize models to a PostgreSQL database on the server start.

- Includes column definitions for all four models outlined.


## Technology Stacks:
- PostgreSQL
- Postman


## npm Packages:
- Inquirer
- pg
- dotenv


## Mock-Up:

The following screenshot shows the application's GET routes to return all categories, all products, and all tags being tested in Postman:

![In Postman, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)


The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![In Postman, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)


The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Postman, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)


## The Deployment:

The Repository: [Click Here.](https://github.com/NovaLanceBrittany/HW-12-SQL-Employee-Tracker)

The Google Drive: [Click Here.](https://drive.google.com/drive/folders/1aI_xm6MjSVz5ZbHi5ZtEBc2YxGKFKRR1?usp=sharing)















## Getting Started



### Associations

You'll need to execute association methods on your Sequelize models to create the following relationships between them:

* `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

> **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.

### Fill Out the API Routes to Perform RESTful CRUD Operations

Fill out the unfinished routes in `product-routes.js`, `tag-routes.js`, and `category-routes.js` to perform create, read, update, and delete operations using your Sequelize models.

Note that the functionality for creating the many-to-many relationship for products has already been completed for you.

> **Hint**: Be sure to look at the mini-project code for syntax help and use your model's column definitions to figure out what `req.body` will be for POST and PUT routes!


### Sync Sequelize to the Database on Server Start

Create the code needed in `server.js` to sync the Sequelize models to the PostgreSQL database on server start.




