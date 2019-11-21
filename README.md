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

```
{
    username:"username",
    password:"password"
}
```

### User

| Method | Endpoint      | Description                         |
| ------ | ------------- | ----------------------------------- |
| GET    | api/users/    | get a list of registered users      |
| GET    | api/users/:id | get a particular registered user    |
| PUT    | api/users/:id | update a particular registered user |
| DELETE | api/users/:id | delete a particular registered user |

### Property Listing

| Method | Endpoint                   | Description                                                                                                     |
| ------ | -------------------------- | --------------------------------------------------------------------------------------------------------------- |
| GET    | api/listings/:username     | get a list of properties for a particular user that has successfully logged in. Require token in request.header |
| POST   | api/listings/:username     | add a new listing for a particular user that has successfully logged in. Require token in request.header        |
| GET    | api/listings/:username/:id | get a particular listing for a particular user that has successfully logged in. Require token in request.header |
| PUT    | api/listings/:username/:id | update a listing for a particular user that has successfully logged in. Require token in request.header         |
| DELETE | api/listings/:username/:id | delete a listing for a particular user that has successfully logged in. Require token in request.header         |

Example listing object:
POST && PUT:

```
{
    host_username:"username"
    property_name: "property name",
    room_type: "room type",
    address: "address",
    neighborhood_group: "neighborhood group",
    neighborhood: "neighborhood",
    availability_of_year: 200,
    property_price: 100,
    bedroom_number: 3,
    bathroom_number: 2,
    minimum_nights: 3,
    property_amenities: "gym, swimming pool"
}
```
