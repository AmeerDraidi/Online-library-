let showDiv = document.getElementById("catsShow");
let catsHome;
if(localStorage.getItem("catsList") != null){
    catsHome = JSON.parse(localStorage.getItem("catsList"));
    catDisplay();
    select();
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
