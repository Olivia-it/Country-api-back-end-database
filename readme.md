# Country API
## Overview

A Country API that allows you to add, remove and view countries. 

## Getting Started

### Prerequisites

- Node.js
- NPM
- A cloud-based database hosting platform, such as Supabase 
  
### Installation

1. Clone the repository

    - Run `git clone https://github.com/yourusername/country-api.git` in the CLI of your choice

2. Navigate to the project directory

    - Navigate to the project with `cd country-api`

3. Install dependencies

    - Run `npm install` to install all dependencies for the project

4. Setup your database

  - Create a database instance on [Supabase](https://supabase.com/) (or other cloud-based database hosting platforms)
  - Retrieve the database URL & copy it
  - Create a `.env` file in the root directory with the following:
  
    ```js
    DB_URL=<your_database_url>
    ```
    
  - Replace `<your_database_url>` with the database URL you just copied
  - Run `npm run setup-db` to setup the database

### Database Schema

```sql
DROP TABLE IF EXISTS country;

CREATE TABLE country (
-- db is going to generate id for us 
    country_id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100) NOT NULL,
    capital VARCHAR(100) NOT NULL,
    population INT NOT NULL,
    languages VARCHAR(100) NOT NULL,
    fun_fact VARCHAR(255),
    map_image_url VARCHAR(255),
    PRIMARY KEY (country_id)
);

INSERT INTO country (name, capital, population, languages, fun_fact, map_image_url)
VALUES
('Brazil', 'Brasília', 212559417, 'Portuguese', 'Brazil is the fifth largest country in the world by both land area and population.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png'),
('Mexico', 'Mexico City', 127575529, 'Spanish', 'Mexico is home to the world''s largest pyramid, the Great Pyramid of Cholula.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png'),
('United States', 'Washington, D.C.', 329064917, 'English', 'The United States has the largest economy in the world.', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png'),
('India', 'New Delhi', 1353000000, 'Hindi, English', 'India is the world''s largest democracy.', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'),
('China', 'Beijing', 1409517397, 'Mandarin', 'China has the world''s largest population.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png'),
('Russia', 'Moscow', 145934462, 'Russian', 'Russia is the largest country in the world by land area.', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png'),
('Japan', 'Tokyo', 126860301, 'Japanese', 'Japan is home to the world''s largest fish market, Tsukiji Market.', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png'),
('South Africa', 'Pretoria', 57779622, 'Afrikaans, English, Zulu, Xhosa, and others', 'South Africa has 11 official languages.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1200px-Flag_of_South_Africa.svg.png'),
('Australia', 'Canberra', 24982688, 'English', 'Australia is the only country that is also a continent.', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Flag_of_Australia.svg/1200px-Flag_of_Australia.svg.png');
```


5. Setup your port

  - Add A `PORT` key assigned to the port of your choice in your `.env` file
  
      ```
      PORT=<port-of-your-choice>
      ```

    
  - Replace `<your_database_url>` with the database URL you just copied
  - Run `npm run setup-db` to setup the database

6. Run the server

 - Run `npm run dev` to run the server in development mode
 - Run `npm start` to run the server in production mode

## API Endpoints

All available API endpoints with their methods and descriptions.

### Base URL
`http://localhost:<port>/countries` (or your deployed URL)

### API Endpoints

| Method | Endpoint                  | Description                  |
|--------|---------------------------|------------------------------|
| GET    | /countries                | Retrieves all countries          |
| GET    | /countries/:name            | Retrieves a single country      |
| POST   | /countries                | Creates a new country           |
| DELETE | /countries/:name            | Deletes a country               |

## Get all countries

### Example Request

To retrieve all countries, you can use the following GET request:

`GET /countries`

`curl -X GET http://localhost:<port>/countries`

### Example Response

A successful response will return a JSON array of countries objects, similar to the following:
      
    ```json
    [
        {
          "id": 1,
          "name": "country1",
          "capital": "capital1",
          "population": 1,
          "languages": "language1",
          "fun_fact": "fact1",
          "map_image_url": "url1"
        },
        {
          "id": 2,
          "name": "country2",
          "capital": "capital2",
          "population": 2,
          "languages": "language2",
          "fun_fact": "fact2",
          "map_image_url": "url2"
        },
    ]
    ```
(edited)
SupabaseSupabase
Supabase | The Postgres Development Platform.
Build production-grade applications with a Postgres database, Authentication, instant APIs, Realtime, Functions, Storage and Vector embeddings. Start for free. (9 kB)
https://supabase.com/


DROP TABLE IF EXISTS country;

CREATE TABLE country (
    country_id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100) NOT NULL,
    capital VARCHAR(100) NOT NULL,
    population INT NOT NULL,
    languages VARCHAR(100) NOT NULL,
    fun_fact VARCHAR(255),
    map_image_url VARCHAR(255),
    PRIMARY KEY (country_id)
);







