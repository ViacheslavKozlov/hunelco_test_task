
# Movie Search and Description Generator

This project is a test task for Hunelco Ltd as movie search and description generation application. It allows users to search for movies using the Watchmode API and generate short descriptions for the movies using the OpenAI API.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Controllers](#controllers)
- [Models](#models)
- [Routes](#routes)
- [Services](#services)
- [Validation](#validation)

## Features

- Search for movies using the Watchmode API
- Generate short descriptions for movies using the OpenAI API

## Technologies Used

- Node.js
- Express.js
- TypeScript
- Axios
- OpenAI API
- Watchmode API
- Sequalize
- SQLite

## Installation

1. Clone the repository:
`git clone https://github.com/ViacheslavKozlov/hunelco_test_task.git`

2. Install dependencies:
`npm install`

3. Compile TypeScript files:
`npm run build`

## Usage

1. Start the server:
`npm start`

2. Start dev server:
`npm run dev`

2. Send requests to the server using a tool like Postman or curl:

- Search for movies:
GET http://localhost:3000/movies?search_req=terminator

- Generate a short description for a movie:
POST http://localhost:3000/movies/description
{
"name": "Terminator: Dark Fate",
"year": 2019
}

## Controllers

### movieController.ts

This controller handles the movie search functionality. It exports a single function `getMovies` which takes a search request from the user, queries the Watchmode API, and returns the search results. If no results are found, it throws a NotFound error.

### openaiController.ts

This controller handles the movie description generation functionality. It exports a single function `getShortDescription` which takes a movie name and year, generates a short description using the OpenAI API, and returns the generated description.

## Models

### movie.ts

This file defines the Movie model, which represents a movie in the application. It includes fields such as id, name, year, and description.

## Routes

### movieRoutes.ts

This file defines the routes for the movie search and description generation functionalities. It includes two routes:

- `GET /movies`: Search for movies using the Watchmode API.
- `POST /movies/description`: Generate a short description for a movie using the OpenAI API.

## Services

### errHandler.ts

This file defines custom error classes for handling different types of errors in the application, such as BadRequest, NotFound, and ValidationError.

### openai.ts

This file sets up the OpenAI API client for use in the application.

### watchmode.ts

This file sets up the Watchmode API client for use in the application.

## Validation

### validation.ts

This file defines a middleware function `movieRequest` for validating the search request from the user. It checks if the search request is present and if its length is between 3 and 20 characters. If the validation fails, it throws a ValidationError.
