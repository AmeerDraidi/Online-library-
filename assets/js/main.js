let showDiv = document.getElementById("catsShow");
const showBooks = document.getElementById("bookshow");
let catsHome;
let booksHome;

if(localStorage.getItem("catsList") != null && localStorage.getItem("booksList") != null){
    catsHome = JSON.parse(localStorage.getItem("catsList"));
    booksHome = JSON.parse(localStorage.getItem("booksList"));
    catDisplay();
    BookDisplay();
    select();
}
function BookDisplay(){
  let booksData='';
  for(let i = 0;i < booksHome.length;i++){
    booksData +=`
    <div class="col-lg-3 col-md-3 col-sm-6">
    <div class="book-cover text-center">
      <img src="assets/img/books covers/${booksHome[i].img}" class=booksImg h-100" alt="..." />
      <div class="content">
        <h4 class="name">${booksHome[i].name}</h4>
        <p class="author">${booksHome[i].author}</p>
        <p class="m-0">${booksHome[i].price}</p>
      </div>
      <button class="btn order-btn mb-5">Order Now</button>
    </div>
    `;
  }
  showBooks.innerHTML = booksData;
  console.log(booksData);
}
function catDisplay(){
    let catData = '';
    for(let i = 0;i < catsHome.length;i++){
        catData+=`<div class="col-lg-2 col-md-3 col-sm-6">
        <div class="card m-auto mb-3" style="width: 10rem;">
          <img src="assets/img/cats/${catsHome[i].img}" class="card-img-top w-75 m-auto pt-2" alt="...">
          <div class="card-body">
            <h5 class="card-title">${catsHome[i].name}</h5>
          </div>
        </div>
      </div>`;
    }
    showDiv.innerHTML = catData;
    console.log(catData);
}
function select(){
  let catData = '';
  for(let i = 0;i < catsHome.length;i++){
      catData+=`
      <option value="${i}">${catsHome[i].name}</option>
      `
  }
  document.getElementById("select").innerHTML = catData;
  
}
if(localStorage.getItem("booksList") != null){
  booksHome = JSON.parse(localStorage.getItem("booksList"));
  BookDisplay();
}

