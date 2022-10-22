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
    console.log(writersSection);
  }