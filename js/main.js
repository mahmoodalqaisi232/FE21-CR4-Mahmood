var movies2 = JSON.parse(movies);
// console.log(movies2);

for (val of movies2){
    document.getElementById("row").innerHTML += `
    <div class="card col-lg-4 col-md-5 p-0 backgroundColor me-md-5 me-lg-0 ms-md-2 ms-lg-0 " >
          <div class="row g-0 cardRow">
            <div class="col-md-5 col-lg-5">
              <img
                src="${val.image}"
                class="img-fluid cardImage ps-2 pt-2 pb-2 "
                alt="John Wick"
              />
            </div>
            <div class="col-md-7 col-lg-7 text-light position-relative">
              <div class="card-body pe-lg-1 pb-0 ">
                <h4 class="card-title fs-2 "> ${val.movieName}</h4>
                <p class="card-text"><small> ${val.description}
                  </small>
                  <p class="mb-0 text-info">Release Date: ${val.releaseDate}</p>
                  <p class="text-danger"> ${val.genre}</p>
                </p>
                
                <div class=" d-flex cardBottom position-absolute justify-content-end w-100 pe-2 pb-2 " >
                <button type="button" class="btn myBtn  bg-transparent text-success fs-3  text-end shadow-none ">Like 
                    <span class="btn-label"><i class="fa fa-thumbs-up"></i></span></button>
                    <div class="circle circleText  pt-1 pt-lg-1  pt-xl-3 fs-4 mt-sm-2 mt-md-1 mt-lg-2 mt-xl-2"> ${val.likes}</div>
            </div>
              </div>
            </div>
          </div>
        </div>
        `
}



var btns= document.getElementsByClassName("myBtn");
var countUp = document.getElementsByClassName("circleText");

console.log(countUp);
console.log(btns);
var btn1=btns[0];
var btn1Counter=countUp[0];
var value1 =movies2[0].likes
console.log(btn1);
console.log(btn1Counter);

btn1.addEventListener("click", function(){
    btn1Counter.innerHTML = value1 ++;
})




var btn2=btns[1];
var btn2Counter=countUp[1];
var value2 =movies2[1].likes;
btn2.addEventListener("click", function(){
  btn2Counter.innerHTML = value2 ++;
})



var btn3=btns[2];
var btn3Counter=countUp[2];
var value3 =movies2[2].likes;
btn3.addEventListener("click", function(){
  btn3Counter.innerHTML = value3 ++;
})

var btn4=btns[3];
var btn4Counter=countUp[3];
var value4 =movies2[3].likes;
btn4.addEventListener("click", function(){
  btn4Counter.innerHTML = value4 ++;
})

var btn5=btns[4];
var btn5Counter=countUp[4];
var value5 =movies2[4].likes;
btn5.addEventListener("click", function(){
  btn5Counter.innerHTML = value5 ++;
})

var btn6=btns[5];
var btn6Counter=countUp[5];
var value6 =movies2[5].likes;
btn6.addEventListener("click", function(){
  btn6Counter.innerHTML = value6 ++;
})


// var btns= document.getElementsByClassName("myBtn");
// var countUp = document.getElementsByClassName("circleText");
// console.log(countUp[0])
// console.log(btns[0])
// function increment(){
//   let value =`${movies2[0].likes}`;
//   value++;
//   countUp[0].innerHTML=value;
// }

//   btns[0].addEventListener("click", increment)  






