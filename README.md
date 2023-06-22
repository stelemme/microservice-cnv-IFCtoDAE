# IFC-to-COLLADA Conversion Microservice
## Installation
To install this Microservice, make sure Node.js 19 or higher is installed on your device. Installing the Microservice can be done by running the following command. The command makes sure all the dependencies present in the [package.json](https://github.com/stelemme/microservice-conv-ifc-to-collada/blob/main/package.json) file are correctly installed.
```
npm install
```
**IMPORTANT**: Add to the root of the Microservice one new folder: "base-files".
## Running the Microservice
The Microservice can be run normally or in development mode respectively with the following commands.
```
npm run start
npm run start:dev
```
## Using the Microservice
The functionality of this Microservice can be accessed via the following endpoint.
  
[http://localhost:3000/conv/ifc-to-collada](http://localhost:3000/conv/ifc-to-collada)
  
This endpoint has a GET and POST method. The GET response of the endpoint returns a JSON object that specifies which methods and data types are supported by the endpoint. This endpoint must receive a IFC-file. The POST response then returns the converted COLLADA-file. The process can be tested using Postman or a Controller Microservice.
