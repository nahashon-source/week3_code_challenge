Here is the rewritten README.md file in paragraph form:

Flatdango Movie Ticketing Website
<!-- Brief overview of the project -->
The Flatdango movie ticketing website is a dynamic web application built using HTML, CSS, and JavaScript. The website's primary function is to display a list of movies in the sidebar, which are fetched from a JSON server. When a user clicks on a movie, its details are displayed in the main section of the website. The movie details include the title, runtime, showtime, available tickets, description, and a poster image.

One of the key features of the website is the ability to buy tickets for a movie. When a user clicks the "Buy Ticket" button, the available tickets count is updated in real-time. If the available tickets count reaches zero, the button is disabled and its text is changed to "Sold Out". This ensures that users cannot buy tickets for a movie that is no longer available.

The website's design is responsive, thanks to the use of CSS flexbox. This means that the layout of the website adapts to different screen sizes and devices, providing an optimal user experience. The website's styles are defined in a separate CSS file, which makes it easy to maintain and update the design.

From a technical perspective, the website uses the Fetch API to fetch movie data from the JSON server. The data is then parsed and used to populate the movie list and display movie details. The website also uses event listeners to handle user interactions, such as clicking on a movie or buying a ticket.

To set up the website, simply open the index.html file in a web browser. However, please note that the website will not function correctly unless the filmsUrl variable in the index.js file is replaced with the URL of a functional JSON server. This is because the website relies on the JSON server to fetch movie data.




