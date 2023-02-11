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

//search-by 
const searchBy = document.getElementById("search-by");
// title tag
const titleInput = document.getElementById("title");
// gender tag
const genreInput = document.getElementById("genre");
// ul tag
const ul = document.getElementById("results");
//list
const list = document.getElementById("list");

//
function onlyTitle() {
    console.log("hi")
    genreInput.disabled = true;
}
let results;
//search button
function search() {
    if (titleInput.value && !genreInput.value) {
        // searchByGenere(titleInput.value)
        results = searchByTitle(titleInput.value);
        // console.log(results);
    } else if (genreInput.value && !titleInput.value) {
        results = searchByGenere(genreInput.value);
    } else if (titleInput.value && genreInput.value) {
        results = searchByBoth(titleInput.value, genreInput.value);
        console.log(results)
    }
    displayResults(results);
    titleInput.value = "";
    genreInput.value = "";
}

//Part 1: Search by Title
function searchByTitle(searchedTitle) {
    console.log("search by title");
    // movies.filter(function (movie) {
    //     if (movie.title.toLowerCase().includes(searchedTitle.toLowerCase().trim())) {
    //         console.log(movie)
    //     }
    // })
    return movies.filter(movie =>
        movie.title.toLowerCase().includes(searchedTitle.toLowerCase().trim())
    )
}

//Part 2: Search by Genre
function searchByGenere(searchedGenere) {
    console.log("search by genere");
    return movies.filter(movie =>
        movie.genre.toLowerCase().trim().includes(searchedGenere.toLowerCase().trim())
    )
}

// extra
function searchByBoth(searchedTitle, searchedGenere) {
    return movies.filter(movie =>
        movie.title.toLowerCase().includes(searchedTitle.toLowerCase().trim()) && movie.genre.toLowerCase().trim().includes(searchedGenere.toLowerCase().trim())
    )
}

//Part 3: Display Results
function displayResults(searchedItem) {
    ul.innerHTML = "";
    searchedItem.map(movie => {
        ul.innerHTML += `<li>${movie.title}:${movie.genre}</li>`
    })
    countByGenre(searchedItem)
}

//Part 5: Sort Results
function sortByTitle() {
    const newSortedResults = results.sort((a, b) => a.title.localeCompare(b.title));
    displayResults(newSortedResults);
}
function sortByGenre() {
    const newSortedResults = results.sort((a, b) => a.genre.localeCompare(b.genre));
    displayResults(newSortedResults);
}

//Part 6: Count Results
function countByGenre(searchedItem) {
    list.innerHTML = "";
    let map = new Map;
    searchedItem.map(movie => {
        if (!map.has(movie.genre)) {
            map.set(movie.genre, 1)
        } else {
            map.set(movie.genre, map.get(movie.genre) + 1)
        }
    })
    console.log(map);
    for (let t of map) {
        list.innerHTML += `<li>${t[0]}: ${t[1]}</li>`
    }
}

//Part 7: Advanced Search
titleInput.disabled = true;
genreInput.disabled = true;
searchBy.addEventListener("change", function () {
    if (searchBy.value === "title") {
        genreInput.disabled = true;
        titleInput.disabled = false;
    } else if (searchBy.value === "genre") {
        titleInput.disabled = true;
        genreInput.disabled = false;
    } else if (searchBy.value === "both") {
        titleInput.disabled = false;
        genreInput.disabled = false;
    } else if (searchBy.value === "SelectOption") {
        titleInput.disabled = true;
        genreInput.disabled = true;
    }
});