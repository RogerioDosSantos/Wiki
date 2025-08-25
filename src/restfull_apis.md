# RestFull APIs

## HTTP methods

Use HTTP methods to map [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) (create, retrieve, update, delete) operations to HTTP requests.

### GET

Retrieve information. GET requests must be safe and idempotent, meaning regardless of how many times it repeats with the same parameters, the results are the same. They can have side effects, but the user doesn't expect them, so they cannot be critical to the operation of the system. Requests can also be partial or conditional.

Retrieve an address with an ID of 1:

`GET /addresses/1`

### POST

Request that the resource at the URI do something with the provided entity. Often POST is used to create a new entity, but it can also be used to update an entity.

Create a new address:

`POST /addresses`

### PUT

Store an entity at a URI. PUT can create a new entity or update an existing one. A PUT request is idempotent. Idempotency is the main difference between the expectations of PUT versus a POST request.

Modify the address with an ID of 1:

`PUT /addresses/1`

**Note**: 

PUT replaces an existing entity.

If only a subset of data elements are provided, the rest will be replaced with empty or null.

Some considerations:

- Do you name your URL objects you create explicitly, or let the server decide? If you name them then use PUT. If you let the server decide then use POST.
- PUT is idempotent, so if you PUT an object twice, it has no effect. This is a nice property, so I would use PUT when possible.
- You can update or create a resource with PUT with the same object URL
- With POST you can have 2 requests coming in at the same time making modifications to a URL, and they may update different parts of the object.

### PATCH

Update only the specified fields of an entity at a URI. A PATCH request is neither safe nor idempotent (RFC 5789). That's because a PATCH operation cannot ensure the entire resource has been updated.

`PATCH /addresses/1`

### DELETE
Request that a resource be removed; however, the resource does not have to be removed immediately. It could be an asynchronous or long-running request.

Delete an address with an ID of 1:

`DELETE /addresses/1`

## HTTP status codes

Status codes indicate the result of the HTTP request.

- **1XX** : informational
- **2XX** : success
- **3XX** : redirection
- **4XX** : client error
- **5XX** : server error
