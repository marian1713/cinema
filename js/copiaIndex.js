// console.log(tempData);

$(document).ready(function () {
    const movieContainer = document.getElementById("containerMovies");

    $.get("https://students-api.up.railway.app/movies", (data, error) => {
        if (!data) {
            alert("Ah ocurrido un error", error)
        }

        data.forEach((movie) => {
            const moviesCard = document.createElement("div");
            moviesCard.classList.add("moviesCard");
            moviesCard.innerHTML = `
            <h2>Director: ${movie.title}</h2>
            <img src="${movie.poster}" alt="${movie.title}">
            <p>Año: ${movie.year}</p>
            <div class="movieDetails ">
            <p>Director: ${movie.director}</p>
            <p>Duración: ${movie.duration}</p>
            <p>Género: ${movie.genre}</p>
    <p>Puntuación: ${movie.rate}</p>
    </div>
    `;
            movieContainer.appendChild(moviesCard);
        });
    })
})


// console.log(tempData);

$(document).ready(function () {
    const $movieContainer = $("#containerMovies");

    $.get("https://students-api.up.railway.app/movies", (data, error) => {
        if (!data) {
            alert("Ah ocurrido un error", error)
        }

        data.forEach((movie) => {
            const $moviesCard = $("<div></div>").addClass("moviesCard")
            $moviesCard.html(`
            <h2>Director: ${movie.title}</h2>
            <img src="${movie.poster}" alt="${movie.title}">
            <p>Año: ${movie.year}</p>
            <div class="movieDetails ">
            <p>Director: ${movie.director}</p>
            <p>Duración: ${movie.duration}</p>
            <p>Género: ${movie.genre}</p>
            <p>Puntuación: ${movie.rate}</p>
           </div>
    `);
            $movieContainer.append($moviesCard);
        });
    })
})

