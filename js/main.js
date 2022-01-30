var movies2 = JSON.parse(movies);
//  console.log(movies2);
var btns = document.getElementsByClassName("myBtn");
var countUp = document.getElementsByClassName("circle");

function PrintFunction(arr) {
  document.getElementById("row").innerHTML = ""
  for (val of arr){
    document.getElementById("row").innerHTML += `
    <div class="card col-12 col-md-6 col-sm-12 col-lg-4  d-flex p-0 flex-row  ">
    <div class="imgContainer">
        <img src="${val.image}" class="img-fluid rounded-start" alt="${val.movieName}">
      </div>
        <div class="card-body">
          <h5 class="card-title">${val.movieName}</h5>
          <p class="card-descsription">${val.description}</p>
          <p class="releaseDate">Release Date: ${val.releaseDate}</p>
          <p class="genre">Genre: ${val.genre}  </p>
          <div class="d-flex justify-content-end likeContainer">
            <button class="myBtn me-2">Like <span class="fs-4"><i class="fas fa-thumbs-up"></i></span></button> 
            <span class="circle me-2 ">${val.likes}</span></div>
        </div>
        </div>
        `
}LikesFunction(movies2)
}
PrintFunction(movies2)





// Like Function
 function LikesFunction(x) {
  for(let i = 0; i <btns.length; i++){
    btns[i].addEventListener("click", function(){
    countUp[i].innerHTML = ++x[i].likes;
  })}}




// Desc.
function des() {
  homeBarElement.innerHTML = " Home > Descending"
  let moviesDes= [...movies2].sort((a,b)=> b.likes - a.likes);
  document.getElementById("row").innerHTML = ""
  PrintFunction(moviesDes)
  LikesFunction(moviesDes)
}

var DescendingElement = document.getElementById('des')
DescendingElement.addEventListener('click',des)



//Asc.
var AscendingElement = document.getElementById('asc')
var homeBarElement = document.getElementById('homeBar')
function asc() {
  homeBarElement.innerHTML = " Home > Ascending"
  var moviesAsc= [...movies2].sort((a,b)=> a.likes- b.likes);
  document.getElementById("row").innerHTML = ""
PrintFunction(moviesAsc)
LikesFunction(moviesAsc)
}
AscendingElement.addEventListener('click',asc)







// Reset
var ResetSort = document.getElementById("noSort")
function reset() {
  homeBarElement.innerHTML = " Home"
  PrintFunction(movies2)
}
ResetSort.addEventListener('click', reset)





