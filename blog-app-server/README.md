# Steps to follow for Local Environment

- Clone the BE repo ``` git clone https://github.com/rahulpanchal0106/blog-app-server.git ```
- Go to the local directory ``` cd blog-app-server ```
- Install the depenencies ``` npm install ```
- ⚠️⚠️⚠️ IMPORTANT: Add the .env file having,
  ```
  DB_CLUSTER="mongodb+srv://testers:o8Tqy1zmk2BwKHDM@cluster0.hyjs0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  PORT=3000
  JWT_SECRET="ilovecats!"
  ```
- Start the server ``` npm run start ``` and now set up the [front-end](https://github.com/rahulpanchal0106/blog-app-server/blob/main/README.md) local server
