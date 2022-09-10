# Desafio Técnico LinkApi

Welcome to Desafio Técnico LinkApi!

This is an API to fetch users data from MockApi.io and return required information.

## Install

1. Install nodemon globally, use command below:
```
npm install -g nodemon
```
2. Install the dependencies:
```
npm install
```
## Usage

1. Create a `.env` file in the root of your project with the variable below:
```
URL_USERS="https://{{host}}.mockapi.io/api/v1/users"
 # use host parameter from the test document
```
2. Run the project:
```
npm start
```
From now on, the API is ready to be accessed through `http://localhost:8080/users`!

## Endpoints

Routes available along the API:

### Get `/users`

- Returns a collection of users in the following format:

```
[
	{
		"createdAt": "2022-02-23T05:20:06.524Z",
		"email": "Melissa.Stamm84@hotmail.com",
		"id": "1",
		"fullName": "Nakia Towne",
		"addresses": [
			{
				"city": "Kimfurt",
				"state": "Oklahoma",
				"zipcode": "88216-1135",
				"country": "Tuvalu",
				"addressId": "1",
				"address": "57 Leuschke Mountain"
			},
			{
				"city": "National City",
				"state": "North Dakota",
				"zipcode": "88457",
				"country": "Bangladesh",
				"addressId": "56",
				"address": "61 Windler Circles"
			}
		],
		"contacts": [
			{
				"name": "Nina Jacobs I",
				"phoneNumber": "976-271-2917",
				"email": "Desiree_Schmidt@gmail.com",
				"contactId": "1"
			}
		]
	}
]
```

#### Query:

- Queries are available in two ways after `/users`:
  - **Pagination:** `?page=1&limit=10`
  - **Sort**: `?sortBy=fullName&order=desc` or `?sortBy=fullName` with order being `asc` by default.

### Get `/users/:id`

- Returns a single user:

```
{
	"createdAt": "2022-02-23T05:20:06.524Z",
	"firstName": "Nakia",
	"avatar": "https://cdn.fakercloud.com/avatars/al_li_128.jpg",
	"email": "Melissa.Stamm84@hotmail.com",
	"lastName": "Towne",
	"id": "1"
}
```

### Get `/users/:id/address`

- Return a single user address(es):

```
[
	{
		"street": "Leuschke Mountain",
		"city": "Kimfurt",
		"state": "Oklahoma",
		"zipcode": "88216-1135",
		"country": "Tuvalu",
		"number": 57,
		"id": "1",
		"userId": "1"
	},
	{
		"street": "Windler Circles",
		"city": "National City",
		"state": "North Dakota",
		"zipcode": "88457",
		"country": "Bangladesh",
		"number": 61,
		"id": "56",
		"userId": "1"
	}
]
```

### Get `/users/:id/contacts`

- Return a single user contact(s):
```
[
	{
		"name": "Nina Jacobs I",
		"phoneNumber": "976-271-2917",
		"email": "Desiree_Schmidt@gmail.com",
		"id": "1",
		"userId": "1"
	}
]
```

#### Thank you for your attention! Have a nice day!!!
