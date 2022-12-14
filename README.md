## MongoDB + Swagger REST backend for smartdoc app

Based on [node-mongo-signup-verification-api](https://github.com/cornflourblue/node-mongo-signup-verification-api)

### Setup (Windows)

Prerequisites: NodeJS ver.14+ installed

1. Install MongoDB for your OS version. Minimal version is 3.6.23
   1. Install MongoDB app (if using version 4+) then choose 'Install as service', otherwise [setup a service manually](https://stackoverflow.com/questions/2438055/how-can-i-run-mongodb-as-a-windows-service)
   2. Test MongoDB connection using Compass or by CLI command `mongo`
2. Install packages `npm i` or `yarn`
3. Run app `npm run start`
4. Visit (Swagger UI)[http://localhost:4000/api-docs/] 

