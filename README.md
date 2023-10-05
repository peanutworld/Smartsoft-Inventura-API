# InventuraAPI
Inventura API for Smartsoft Inventura App built with Node.js and Express

## Configuration

The database connection for this project is configured in the `.env` file. It contains the following values, which are used to connect to the MS SQL Server:

  ```
PORT=[Port of the API]
DATABASE_NAME=[Database name]
DATABASE_USERNAME=[Username]
DATABASE_PASSWORD=[User password]
DATABASE_HOST=[Hostname]
  ```

## Install API as Windows service

To install the API as Windows service, run these commands:

  ```
npm install
node service
  ```