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

mongoimport --db api002 --collection users100 --type json --file users100.json --jsonArray

mongoimport --db api002 --collection articles --type json --file articles.json --jsonArray


---------------that is-----------
mongoimport --db api001 --collection users100 --type json --file users100.json --jsonArray

----------------------------------------------------------------------

mongosh "mongodb+srv://cluster0.qqwpv.mongodb.net/myFirstDatabase" --username <username>
mongosh "mongodb+srv://cluster0.qqwpv.mongodb.net/myFirstDatabase" --username main-user

---------------------------------------------------------

mongodb+srv://<username>:<password>@cluster0.qqwpv.mongodb.net/test
mongodb+srv://guest-user:elis@cluster0.qqwpv.mongodb.net/test

                   cluster0-shard-00-02.qqwpv.mongodb.net:27017
mongoimport --host cluster0-shard-00-01.ogshn.mongodb.net:27017 --db blogapp --collection articles --type json --file articles.json --jsonArray --authenticationDatabase admin --ssl --username mainuser
mongoimport --host cluster0-shard-00-02.qqwpv.mongodb.net:27017 --db blogapp --collection articles --type json --file articles.json --jsonArray --authenticationDatabase admin --ssl --username guest-user

                   cluster0-shard-00-02.qqwpv.mongodb.net:27017
mongoimport --host cluster0-shard-00-01.ogshn.mongodb.net:27017 --db api001 --collection users100 --type json --file users100.json --jsonArray --authenticationDatabase admin --ssl --username mainuser
mongoimport --host cluster0-shard-00-02.qqwpv.mongodb.net:27017 --db api001 --collection users100 --type json --file users100.json --jsonArray --authenticationDatabase admin --ssl --username guest-user


--------------------------------------
    "start": "npx nodemon backend.js"
    -------------------------

--------front------------
REACT_APP_BACKEND_URL=http://localhost:3016


--------back-----------
MONGODB_URI=mongodb://localhost:27017/
ALLOVED_FRONTEND_URI=http://localhost:3000

-------new--------
MONGODB_URI=mongodb+srv://elis:elis@cluster0.ldv56.mongodb.net/first-mern?retryWrites=true&w=majority
ALLOVED_FRONTEND_URI=http://localhost:3000

## https://first-mern-bck.herokuapp.com/

## https://drive.google.com/file/d/1Ql_CWa5ffr_gRjTQhnB0vJ0bWuRPsAuw/edit