document.addEventListener('DOMContentLoaded', function() {
    const filmsUrl = 'http://localhost:3000/films'; // My JSON server URL
  
    // Function to fetch all films and populate the movie list
    function fetchFilms() {
        fetch(filmsUrl)
            .then(response => response.json())
            .then(films => {
                const filmsList = document.getElementById('films');
                films.forEach(film => {
                    const li = document.createElement('li');
                    li.classList.add('film', 'item');
                    li.textContent = film.title;
                    li.dataset.filmId = film.id;
                    filmsList.appendChild(li);
                });
  
                // Add click event listener to each film item
                filmsList.addEventListener('click', handleFilmClick);
  
                // Display details of the first film by default
                if (films.length > 0) {
                    fetchFilmDetails(films[0].id); // Fetch and display details of the first film
                }
            })
            .catch(error => console.error('Error fetching films:', error));
    }
  
    // Function to handle click events on film items
    function handleFilmClick(event) {
        if (event.target.tagName === 'LI') {
            const filmId = event.target.dataset.filmId;
            fetchFilmDetails(filmId);
        }
    }
  
    // Function to fetch and display movie details
    function fetchFilmDetails(filmId) {
        fetch(`${filmsUrl}/${filmId}`)
            .then(response => response.json())
            .then(displayMovieDetails)
            .catch(error => console.error('Error fetching movie details:', error));
    }
  
    // Function to display movie details
    function displayMovieDetails(film) {
        const movieDetailsSection = document.getElementById('movie-details');
        movieDetailsSection.innerHTML = `
            <div class="movie-info">
                <h2>${film.title}</h2>
                <p><strong>Runtime:</strong> ${film.runtime} mins</p>
                <p><strong>Showtime:</strong> ${film.showtime}</p>
                <p><strong>Available Tickets:</strong> ${film.capacity - film.tickets_sold}</p>
                <p>${film.description}</p>
                <img src="${film.poster}" alt="${film.title} Poster">
                <button id="buy-ticket">Buy Ticket</button>
            </div>
        `;
  
        const buyTicketButton = document.getElementById('buy-ticket');
        buyTicketButton.addEventListener('click', () => {
            if (film.capacity - film.tickets_sold > 0) {
                film.tickets_sold++;
                displayMovieDetails(film); // Update the UI
            } else {
                buyTicketButton.textContent = 'Sold Out';
                buyTicketButton.disabled = true;
            }
        });
    }
  
    // Initial fetch of films when the page loads
    fetchFilms();
});
