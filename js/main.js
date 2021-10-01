var movies2 = JSON.parse(movies);
console.table(movies2);

for (val of movies2){
    document.getElementById("row").innerHTML += `
    <div class="card col-lg-4 col-md-6 p-0" >
          <div class="row g-0 cardRow">
            <div class="col-md-4">
              <img
                src="${val.image}"
                class="img-fluid rounded-start cardImage"
                alt="John Wick"
              />
            </div>
            <div class="col-md-8 text-light position-relative backgroundColor">
              <div class="card-body pe-lg-1 pb-0 ">
                <h4 class="card-title "> ${val.movieName}</h4>
                <p class="card-text"><small> ${val.description}
                  </small>
                </p>
                <p class="mb-0 text-info">Release Date: ${val.releaseDate}</p>
                <div class=" d-flex cardBottom position-absolute justify-content-end w-100 pe-2 pb-2 " >
                <button type="button" class="btn  bg-transparent text-success fs-4  text-end shadow-none ">Like 
                    <span class="btn-label"><i class="fa fa-thumbs-up"></i></span></button>
                    <div class="circle"><span id="circleText"> ${val.likes}</span></div>
            </div>
              </div>
            </div>
          </div>
        </div>`
}

