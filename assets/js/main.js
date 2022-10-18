let showDiv = document.getElementById("catsShow");
let catsHome;

if (localStorage.getItem("catsList") != null) {
  catsHome = JSON.parse(localStorage.getItem("catsList"));
  catDisplay();
  select();
}
function catDisplay() {
  let catData = "";
  for (let i = 0; i < catsHome.length; i++) {
    catData += `<div class="col-lg-2 col-md-3 col-sm-6">
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
function select() {
  let catData = "";
  for (let i = 0; i < catsHome.length; i++) {
    catData += `
      <option value="${i}">${catsHome[i].name}</option>
      `;
  }
  document.getElementById("select").innerHTML = catData;
}

// Start Of Writer Section Show
let writerDiv = document.getElementById("writers");
let writersSection;
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  slidesPerGroup: 3,
  loop: true,
  centerSlide: "true",
  fade: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

if (localStorage.getItem("writersList") != null) {
  writersSection = JSON.parse(localStorage.getItem("writersList"));
  writerShow();
}

function writerShow() {
  let writerBody = "";
  for (let j = 0; j < writersSection.length; j++) {
    writerBody += `
      <div class="card swiper-slide">
            <div class="image-content">
              <span class="overlay"></span>
                <div class="card-image">
                  <img src="./assets/img/writers/${writersSection[j].writerImg}" alt="" class="card-img">
                </div>
              
            </div>
            <div class="card-content">
              <h2 class="name">${writersSection[j].writer}</h2>
            </div>
          </div>

      `;
  }
  writerDiv.innerHTML = writerBody;
  console.log(writerBody);
}
// End Of Writer Section Show
