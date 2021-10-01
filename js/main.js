var movies2 = JSON.parse(movies);
console.table(movies2);

for (val of movies2){
    document.getElementById("row").innerHTML += `
    <div class="card col-4  p-0" style="max-width: 540px">
          <div class="row g-0 cardRow">
            <div class="col-md-4">
              <img
                src="${val.image}"
                class="img-fluid rounded-start cardImage"
                alt="John Wick"
              />
            </div>
            <div class="col-md-8 bg-dark text-light ">
              <div class="card-body pe-lg-1 pb-0 ">
                <h4 class="card-title "> ${val.movieName}</h4>
                <p class="card-text"><small> ${val.description}
                  </small>
                </p>
                <div class=" d-flex justify-content-end bottom pt-3 pe-2 pb-1   ">
                    <button type="button" class="btn  bg-transparent text-success fs-4 pt-1">Like 
                        <span class="btn-label"><i class="fa fa-thumbs-up"></i></span></button>
                        <div class="circle"><span id="circleText"> ${val.likes}</span> </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>`
}

