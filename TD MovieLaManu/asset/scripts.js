const max_length = 120;

function getMovie (movie) {
    let container = document.createElement("article");
    ///responsible web design
    container.classList.add("col-lg-3", "col-xl-3", "col-md-6", "col-sm-12" , "col-12");
    let description = movie.overview;
    if (description.length > max_length) {
        description = description.slice(0,max_length-3);
        description += "..."
    };

    ///box film
    container.innerHTML = `
    <div class = "row mt-5 mb-4">
        <div class="col-4 justify-content-center d-flex align-items-center"><img class="w-100" src="${movie.poster_path}"></div>
            <div class="col-8 d-flex flex-column justify-content-between">
                <h2>${movie.original_title}</h2>
                    <div>
                        <p class="fs-5 mt-1">${description}</p>
                            <div class="mt-3 d-flex">
                            ${getStarsFromVote(movie.vote_average)}
                            </div>
                    </div>
            </div>
    </div>
    `;

return container;
}

///Etoile rating
function getStarsFromVote(vote) {
    vote = parseInt(vote+0.5)/2; 
    container = document.createElement("div");
    let fill = parseInt(vote);
    let half = parseInt(vote-fill+0.5);
    for (let i = 0; i < 5; i++) {
        let star = document.createElement("i");
        if (i < fill) {star.classList.add("fa-solid", "fa-star");}
        else if (i < fill+half) {star.classList.add("fa-solid", "fa-star-half-stroke");}
        else {star.classList.add("fa-regular", "fa-star");}
        container.append(star);
    }
    return container.innerHTML;
}

///importation fetch
fetch(new Request("asset/data/movies.json"))
    .then((result) => result.json())
    .then((result) => {
    const movies = result.results
    let global_container = document.getElementById('global-container');
    for(i of movies){
        global_container.append(getMovie(i))
    }
});