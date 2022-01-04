download the customer_orders.json file:
wget -O customer_orders.json https://raw.githubusercontent.com/edwardtanguay/downloads/master/customer_orders.json

---------------------------------
https://onespace.netlify.app/howtos?id=431

-------------------------------------
MONGODB_URI=mongodb+srv://user1:elis@cluster0.gzwcn.mongodb.net/test

-------------------------------

mongoimport --db northwind --collection products --type json --file products.json --jsonArray

mongoimport --db northwind --collection full_orders --type json --file full_orders.json --jsonArray

mongoimport --db northwind --collection customer_orders --type json --file customer_orders.json --jsonArray


---------------that is-----------
mongoimport --db api001 --collection users100 --type json --file users100.json --jsonArray

---------doing-first-part--------

    "start": "npx nodemon backend.js"
    -------------------------

--------front------------
REACT_APP_BACKEND_URL=http://localhost:3016

--------back-----------
MONGODB_URI=mongodb://localhost:27017/
ALLOVED_FRONTEND_URI=http://localhost:3000
