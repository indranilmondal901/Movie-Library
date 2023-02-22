# Movie-Library
![Movie library](https://user-images.githubusercontent.com/122368872/220533979-b31d9aa5-3891-4c35-832f-fb10e9de729d.png)

You are building a movie library where users can search for movies based on their title and genre. You'll use JavaScript array methods to manipulate the data and display the results to the user.

Here's the movie data that you'll be working with:

const movies = [
  { title: "The Shawshank Redemption", genre: "Drama" },
  { title: "The Godfather", genre: "Crime" },
  { title: "The Godfather: Part II", genre: "Crime" },
  { title: "The Dark Knight", genre: "Action" },
  { title: "12 Angry Men", genre: "Drama" },
  { title: "Schindler's List", genre: "Drama" },
  { title: "The Lord of the Rings: The Return of the King", genre: "Adventure" },
  { title: "Pulp Fiction", genre: "Crime" },
  { title: "The Good, the Bad and the Ugly", genre: "Western" },
  { title: "Fight Club", genre: "Drama" },
  { title: "Forrest Gump", genre: "Drama" },
  { title: "Inception", genre: "Action" },
  { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Adventure" },
  { title: "Star Wars: Episode V - The Empire Strikes Back", genre: "Action" },
  { title: "The Lord of the Rings: The Two Towers", genre: "Adventure" },
  { title: "The Matrix", genre: "Action" },
  { title: "Goodfellas", genre: "Crime" },
  { title: "One Flew Over the Cuckoo's Nest", genre: "Drama" },
  { title: "Seven Samurai", genre: "Adventure" },
  { title: "Se7en", genre: "Crime" },
  { title: "City of God", genre: "Crime" },
  { title: "The Silence of the Lambs", genre: "Thriller" },
  { title: "It's a Wonderful Life", genre: "Drama" },
  { title: "Life is Beautiful", genre: "Comedy" },
  { title: "The Usual Suspects", genre: "Crime" },
  { title: "Léon: The Professional", genre: "Action" },
  { title: "Spirited Away", genre: "Animation" },
  { title: "Saving Private Ryan", genre: "Drama" },
  { title: "Interstellar", genre: "Adventure" },
  { title: "The Green Mile", genre: "Drama" },
  { title: "The Prestige", genre: "Drama" },
  { title: "The Intouchables", genre: "Comedy" },
  { title: "The Lion King", genre: "Animation" },
  { title: "The Pianist", genre: "Drama" },
  { title: "The Departed", genre: "Crime" },
  { title: "Whiplash", genre: "Drama" },
  { title: "Gladiator", genre: "Action" }
]

Part 1: Search by Title
Create a function called searchByTitle that takes in a string title and returns an array of movies with titles that contain the string. For example, if the input is "The Lord", the function should return an array with the following movies:

RESPONSE:
[  { title: "The Lord of the Rings: The Return of the King", genre: "Adventure" },  { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Adventure" },  { title: "The Lord of the Rings: The Two Towers", genre: "Adventure" }]

Use the .filter() method to find all movies with titles that contain the string.

Part 2: Search by Genre
Create a function called searchByGenre that takes in a string genre and returns an array of movies with that genre. For example, if the input is "Drama", the function should return an array with the following movies:

RESPONSE:
[  { title: "The Shawshank Redemption", genre: "Drama" },  { title: "12 Angry Men", genre: "Drama" },  { title: "Schindler's List", genre: "Drama" },  { title: "Fight Club", genre: "Drama" },  { title: "Forrest Gump", genre: "Drama" },  { title: "One Flew Over the Cuckoo's Nest", genre: "Drama" },  { title: "Saving Private Ryan", genre: "Drama" },  { title: "The Green Mile", genre: "Drama" },  { title: "The Prestige", genre: "Drama" },  { title: "The Pianist", genre: "Drama" },  { title: "Whiplash", genre: "Drama" }]

Use the .filter() method to find all movies with the specified genre

Part 3: Display Results
Create a function called displayResults that takes in an array of movies and displays the titles and genres of each movie in a list.

Use the .map() method to create a new array of strings that represent each movie, and then use console.log() to display the list. For example, the output for the movies in Part 1 could look like this:

The Lord of the Rings: The Return of the King (Adventure)
The Lord of the Rings: The Fellowship of the Ring (Adventure)
The Lord of the Rings: The Two Towers (Adventure)

Part 4: User Interface
Create a simple user interface with two input fields (one for title and one for genre) and a button to search for movies.

When the user clicks the button, call either the searchByTitle or searchByGenre function, depending on which field has a value, and pass the result to the displayResults function to display the results.

You can use the following code as a starting point for the user interface:

<input type="text" id="title">
<input type="text" id="genre">
<button id="search">Search</button>
<ul id="results"></ul>

Use JavaScript to select the elements by their id and add an event listener to the button to listen for clicks.

When the button is clicked, get the values from the input fields and call either searchByTitle or searchByGenre with the appropriate value.

Clear the previous results from the list (#results) and display the new results by adding a list item for each movie in the returned array. The list items should display the title and genre of each movie.

Example output:

The Lord of the Rings: The Return of the King (Adventure)
The Lord of the Rings: The Fellowship of the Ring (Adventure)
The Lord of the Rings: The Two Towers (Adventure)

Part 5: Sort Results
Create a function called sortByTitle that sorts the results of a search by title in ascending order.

Create another function called sortByGenre that sorts the results of a search by genre in ascending order.

Modify the user interface to add two buttons, one for sorting by title and one for sorting by genre, and add event listeners to the buttons to call the appropriate sorting function.

Part 6: Count Results
Create a function called countByGenre that takes in an array of movies and returns an object with the count of movies for each genre. For example, if the input is the entire list of movies, the function should return an object like this:

{
  Action: 3,
  Adventure: 5,
  Comedy: 2,
  Drama: 4,
  Fantasy: 4
}

Modify the user interface to display the result of the countByGenre function, either in a list or as a bar chart.

Part 7: Advanced Search
Modify the user interface to add a dropdown menu with options for searching by title, genre, or both.

Modify the search function to take the value from the dropdown menu into account and perform the appropriate search. If the user selects "title and genre", the function should only return movies that match both the title and genre search criteria.

Modify the displayResults function to display a message if there are no results for the search.

Bonus: Persistence
Store the list of movies in local storage so that it is available the next time the page is loaded.

Use the JSON.stringify method to store the data as a string and the JSON.parse method to retrieve the data as an object.



