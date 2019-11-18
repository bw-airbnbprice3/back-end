# AirBnB Optimal Price Endpoint

## HEROKU BASE_URL

https://airbnb-optimal-price-app.herokuapp.com

## ENDPOINTS

### Authentication

| Method | Endpoint      | Description                                                                                       |
| ------ | ------------- | ------------------------------------------------------------------------------------------------- |
| POST   | api/register/ | Creates a `user` using the information sent inside the `body` of the request.                     |
| POST   | api/login/    | login in a `user` using the information sent inside the `body` of the request. return a JWT token |

Example user object:
{
username:"username",
password:"password"
}

### Property Listing

| Method | Endpoint         | Description                                                                                                     |
| ------ | ---------------- | --------------------------------------------------------------------------------------------------------------- |
| GET    | api/listings/    | get a list of properties for a particular user that has successfully logged in. Require token in request.header |
| POST   | api/listings/    | add a new listing for a particular user that has successfully logged in. Require token in request.header        |
| GET    | api/listings/:id | get a particular listing for a particular user that has successfully logged in. Requier token in request.header |
| PUT    | api/listings/:id | update a listing for a particular user that has successfully logged in. Requier token in request.header         |
| DELETE | api/listings/:id | delete a listing for a particular user that has successfully logged in. Requier token in request.header         |

Example listing object:
POST && PUT:
{
"host_username":"host_username",
"property_name":"property_name",
"property_type":"property_type",
"property_location":"property_location",
"property_price":10,
"minimun_stay": 2,
"property_amenities":"property_amenities"
}
