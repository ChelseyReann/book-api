import fetch from 'node-fetch'
//you just want to grab the promises from the fetch
import {promises as fsPromises} from "fs"

fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=HBsGYq5nNkhntcjxjwAluMMYqbGVojdy')
    .then(response => response.json())
    .then(data => fsPromises.writeFile("./books.json", JSON.stringify(data)))
    .catch(error => console.error(error))
