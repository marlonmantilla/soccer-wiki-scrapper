# Wikipedia Soccer player Scrapper
Wikipedia Footballer player scrapper basic information. 

## Node version

`v6.2.0`

## Setup & Running

    npm install
    node index.js

## API

There's only one endpoint `http://localhost:8081/players?name=Messi` it will return a JSON:

      {
       "name": "Lionel Andrés Messi[note 1]",
       "dob": "(age 29)",
       "team": "Barcelona",
       "clubes": [
        {
          "years": "2003–2004",
          "club": "Barcelona C"
        },
        {
          "years": "2004–2005",
          "club": "Barcelona B"
        },
        {
          "years": "2004–",
          "club": "Barcelona"
        }
        ],
        "avatar": "//upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2015_UEFA_Super_Cup_64_crop.jpg/220px-2015_UEFA_Super_Cup_64_crop.jpg"
       }
