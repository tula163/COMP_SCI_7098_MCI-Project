# Agent Recommendation System – API Documentation

## 1. Get Agents List (Paginated)

**Endpoint:**  
`GET /api/agents/`

**Description:**  
Retrieve a paginated list of agents. Supports filtering by query parameters.

**Query Parameters:**  

| Name       | Type   | Required | Description                      |
|------------|--------|----------|----------------------------------|
| page       | int    | No       | Page number                      |
| page_size  | int    | No       | Number of items per page         |
| ...        | mixed  | No       | Any agent model filter fields    |

**Sample Request:**  
GET /api/agents/?page=1&page_size=10


**Sample Response:**  
```json
{
  "code": 200,
  "msg": "Success",
  "data": {
    "count": 50,
    "next": "http://.../api/agents/?page=2",
    "previous": null,
    "results": [
      {
        "id": 1,
        "full_name": "Alice Smith",
        "marn": "1234567",
        "email": "alice@example.com",
        "phone": "0400 000 000"
        // ...other agent fields
      }
      // ...more agents
    ]
  }
}
```


## 2. Get Agents List (Paginated)

**Endpoint:**  
`POST /api/agents/all/`

**Description:**  
Returns all agents (no pagination). Supports keyword search on  `full_name`  or `marn`

**Request Body:**  
```json
{
  "q": "search_keyword"  // optional, string
}
```

**Sample Request:**  
**Request Body:**  
```json
POST /api/agents/all/
Content-Type: application/json

{
  "q": "Alice"
}
**Request Body:**  
```


**Sample Response:**  
```json
{
  "code": 200,
  "msg": "Success",
  "data": [
    {
      "id": 1,
      "full_name": "Alice Smith",
      "marn": "1234567"
      // ...other agent fields
    }
    // ...more agents
  ]
}
```

## 3. Agent AI Recommendation

**Endpoint:**  
`POST /api/agents/recommend/`

**Description:**  
Returns a list of recommended agents based on user input (AI powered).
At least one field must be provided.

**Request Body:**  
Fields are flexible—include any subset of user preference fields:
```json
{
  "Language": "English",
  "Visa_type": "Student",
  "Location": "Adelaide",
  "Success_rate": 90
  // ...other fields as required by your model
}

```

**Sample Request:**  
POST /api/agents/recommend/
Content-Type: application/json
```json
{
  "Language": "Mandarin",
  "Visa_type": "Business",
  "Location": "Sydney"
}
```


 



**Sample Response:**  
```json
{
  "code": 200,
  "msg": "Success",
  "data": [
    {
      "id": 3,
      "full_name": "John Doe",
      "marn": "8765432",
      "score": 0.92
      // ...other agent fields
    }
    // ...more recommended agents
  ]
}

```
**Sample Response (Error):**  
```json
{
  "code": 400,
  "msg": "At least one field must be filled in to make a recommendation",
  "data": null
}
```