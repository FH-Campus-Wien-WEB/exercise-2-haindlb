window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);

      const mainElement = document.createElement("main");

      const overviewElement = document.createElement("h1");
      overviewElement.textContent = "Favorite Movies from Berni";
      mainElement.appendChild(overviewElement);

      movies.forEach(function (movie) {
        const articleElement = document.createElement("article");
        articleElement.id = movie.imdbID;

        const editLinkElement = document.createElement("button");
        editLinkElement.type = "button";
        editLinkElement.textContent = "Edit";
        editLinkElement.addEventListener("click", function () {
          location.href = "/edit.html?imdbID=" + movie.imdbID;
        });

        const titleElement = document.createElement("h2");
        titleElement.textContent = movie.Title;

        const posterElement = document.createElement("img");
        posterElement.src = movie.Poster;
        posterElement.alt = "Poster of " + movie.Title;

        const releasedElement = document.createElement("p");
        releasedElement.textContent = "Released: " + movie.Released;

        const runtimeElement = document.createElement("p");
        runtimeElement.textContent = "Runtime: " + movie.Runtime + " minutes";

        const genreElement = document.createElement("h4");
        genreElement.textContent = "Genres";
        const genreListElement = document.createElement("ul");
        movie.Genres.forEach(function (genre) {
          const genreItemElement = document.createElement("li");
          genreItemElement.textContent = genre;
          genreListElement.appendChild(genreItemElement);
        });

        const directorElement = document.createElement("p");
        directorElement.textContent = "Director: " + movie.Directors.join(", ");

        const writerElement = document.createElement("h4");
        writerElement.textContent = "Writers";
        const writerListElement = document.createElement("ul");
        movie.Writers.forEach(function (writer) {
          const writerItemElement = document.createElement("li");
          writerItemElement.textContent = writer;
          writerListElement.appendChild(writerItemElement);
        });

        const actorsElement = document.createElement("h4");
        actorsElement.textContent = "Actors";
        const actorsListElement = document.createElement("ul");
        movie.Actors.forEach(function (actor) {
          const actorItemElement = document.createElement("li");
          actorItemElement.textContent = actor;
          actorsListElement.appendChild(actorItemElement);
        });

        const plotElement = document.createElement("p");
        plotElement.textContent = "Plot: " + movie.Plot;

        const metascoreElement = document.createElement("p");
        metascoreElement.textContent = "Metascore: " + movie.Metascore;

        const imdbRatingElement = document.createElement("p");
        imdbRatingElement.textContent = "IMDb Rating: " + movie.imdbRating;

        articleElement.appendChild(titleElement);
        articleElement.appendChild(editLinkElement);
        articleElement.appendChild(posterElement);
        articleElement.appendChild(releasedElement);
        articleElement.appendChild(runtimeElement);
        articleElement.appendChild(plotElement);
        articleElement.appendChild(directorElement);
        articleElement.appendChild(genreElement);
        articleElement.appendChild(genreListElement);
        articleElement.appendChild(writerElement);
        articleElement.appendChild(writerListElement);
        articleElement.appendChild(actorsElement);
        articleElement.appendChild(actorsListElement);
        articleElement.appendChild(metascoreElement);
        articleElement.appendChild(imdbRatingElement);

        mainElement.appendChild(articleElement);
      });

      bodyElement.appendChild(mainElement);
    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };

  xhr.open("GET", "/movies");
  xhr.send();
};