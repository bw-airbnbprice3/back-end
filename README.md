# AirBnB Optimal Price Endpoint

## HEROKU BASE_URL

tbd

## ENDPOINTS

### Authentication

| Method | Endpoint | Description |
|------------|-------------|---------------|
|POST| api/register/ | Creates a `user` using the information sent inside the `body` of the request.|

|POST| api/login/ | login in a `user` using the information sent inside the `body` of the request. return a JWT token |

### Property Listing

| Method | Endpoint | Description |

|GET| api/listings/ | get a list of properties for a particular user that has successfully logged in. Require token in request.header|

|POST| api/listings/ | add a new listing for a particular user that has successfully logged in. Require token in request.header|

|GET| api/listings/:id | get a particular listing for a particular user that has successfully logged in. Requier token in request.header|

|PUT| api/listings/:id | update a listing for a particular user that has successfully logged in. Requier token in request.header|

|DELETE| api/listings/ | delete a listing for a particular user that has successfully logged in. Requier token in request.header|
