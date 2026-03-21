# The Wild Horizons API

A pure Node.js API that serves data about the world's most intriguing travel destinations. Built with core HTTP module knowledge to learn fundamental backend concepts.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Running the Server

```bash
npm start
```

The server runs on `http://localhost:8000`

## 📍 Project Structure

```
the-wild-horizons-api/
├── server.js              # Main server file with route handlers
├── package.json           # Project metadata and scripts
├── data/
│   └── data.js           # Travel destination dataset
├── database/
│   └── db.js             # Data retrieval function
├── utils/
│   ├── sendJSON.js       # Response formatting utility
│   ├── filterByParams.js # URL parameter-based filtering
│   └── filterByQueries.js # Query string-based filtering
```

## 🔗 API Endpoints

### Get All Destinations (with filtering)

**GET** `/api`

Filter using query parameters:
- `continent` - Filter by continent name
- `country` - Filter by country name  
- `is_open` - Filter by open status (true/false)

Example:
```
GET /api?continent=Asia&is_open=true
```

### Get Destination by Field

**GET** `/api/{field}/{value}`

Dynamically filter by any destination field (name, location, continent, country, etc.)

Examples:
```
GET /api/name/The%20Wave
GET /api/country/New%20Zealand
GET /api/continent/Europe
```

**Response Example:**
```json
[
  {
    "name": "The Wave",
    "location": "Arizona",
    "country": "USA",
    "continent": "North America",
    "is_open": true,
    "uuid": "550e8400-e29b-41d4-a716-446655440007",
    "details": [
      {
        "fun_fact": "The sandstone formations look like waves frozen in time."
      },
      {
        "description": "A sought-after hiking spot in the Coyote Buttes area..."
      }
    ]
  }
]
```

### Error Handling

Invalid routes return 404:
```json
{
  "error": "not found",
  "message": "The requested route does not exist"
}
```

Not found results:
```json
{
  "error": "not found",
  "message": "The request '{value}' in '{field}' does not exist"
}
```

## 📚 Core Concepts Learned

- **HTTP Module** - Node's native `node:http` module
- **Server Creation** - Creating and running HTTP servers
- **Status Codes** - Returning appropriate HTTP response codes (200, 404, etc.)
- **Headers** - Setting response headers like `Content-Type`
- **Request/Response Handling** - Processing incoming requests and sending responses
- **Data Filtering** - Multiple filtering strategies (query params, URL params)
- **Query Parameters** - Extracting and parsing URL search parameters

## 🎯 Stretch Goals

- [x] Error handling for invalid routes
- [ ] Handle POST requests (authentication to be added later)
- [ ] Advanced filtering capabilities
- [ ] Expand API routes and data
- [ ] Prepare for production deployment

## 📦 Data Model

Each destination object contains:
- `name` - Destination name
- `location` - Specific location/region
- `country` - Country name
- `continent` - Continent name
- `is_open` - Boolean indicating if open to visitors
- `uuid` - Unique identifier
- `details` - Array with fun facts and descriptions

## 💡 Technologies

- **Node.js** - JavaScript runtime
- **ES Modules** - Modern JavaScript modules
- **Native HTTP Module** - No external dependencies

---

Made with ❤️ as a learning project
