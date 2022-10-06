// Cat Crud:
let catName = document.getElementById("name");
let catImg = document.getElementById("img");
let submitBtn = document.getElementById("submitBtn");
let catClear = document.getElementById("clearallcats");
let tbody = document.getElementById("tbody");
let index;
let cats;
if (localStorage.getItem("catsList") == null) {
  cats = [];
} else {
  cats = JSON.parse(localStorage.getItem("catsList"));
}
catDisplay_catPage();
submitBtn.addEventListener("click", function () {
  if (submitBtn.innerHTML == "إضافة") {
    catAdd();
  } else {
    updateCat();
  }
  catDisplay_catPage();
  erase();
  submitBtn.setAttribute("disabled", "disabled");
});

function catAdd() {
  let catimgval = catImg.value;
  let split = catimgval.split("fakepath\\");
  let imgname = split[1];
  let catObject = {
    name: catName.value,
    img: imgname,
  };
  cats.push(catObject);
  localStorage.setItem("catsList", JSON.stringify(cats));
}

function erase() {
  catName.value = "";
  catImg.value = "";
}

function catDisplay_catPage() {
  let catData = "";
  for (let i = 0; i < cats.length; i++) {
    catData += `
        <tr>
        <td>${i + 1}</td>
        <td>${cats[i].name}</td>
        <td><img src="assets/img/cats/${
          cats[i].img
        }" class="card-img-top w-25 m-auto pt-2" alt="..."></td>
        <td class = "d-flex">
        <button type="button" class="btn btn-danger" onclick="catDelete(${i})">حذف</button>
        <button type="button" onclick="getCatData(${i})" class="btn btn-primary">تعديل</button>
        </td>
        </tr>
        `;
  }
  tbody.innerHTML = catData;
}
catClear.onclick = function () {
  Swal.fire({
    title: "هل أنت متأكد ؟",
    text: "لا يمكنك استرجاع هذه البيانات عند القيام بعملية الحذف !",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "تأكيد عملية الحذف",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("catsList");
      cats = [];
      tbody.innerHTML = "";
      Swal.fire("تمت عملية الحذف", "تمت عملية حذف جميع الأصناف بنجاح ", "success");
    }
  });
};
function catDelete(i) {
  Swal.fire({
    title: "هل أنت متأكد ؟",
    text: "لا يمكنك استرجاع هذه البيانات عند القيام بعملية الحذف !",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "تأكيد عملية الحذف",
  }).then((result) => {
    if (result.isConfirmed) {
      cats.splice(i, 1);
      localStorage.setItem("catsList", JSON.stringify(cats));
      catDisplay_catPage();
      Swal.fire("تمت عملية الحذف", "تمت عملية حذف الصنف بنجاح", "success");
    }
  });
}
function getCatData(i) {
  submitBtn.innerHTML = "تعديل";
  catName.value = cats[i].name;
  index = i;
}
function updateCat() {
  let catObject;
  if (catImg.value !== "") {
    let catimgval = catImg.value;
    let split = catimgval.split("fakepath\\");
    let imgname = split[1];
    catObject = {
      name: catName.value,
      img: imgname,
    };
  } else {
    catObject = {
      name: catName.value,
      img: cats[index].img,
    };
  }

  Swal.fire({
    title: "هل تريد حفظ التغييرات ؟",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "حفظ",
    denyButtonText: `عدم الحفظ`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      cats[index].name = catObject.name;
      cats[index].img = catObject.img;
      localStorage.setItem("catsList", JSON.stringify(cats));
      submitBtn.innerHTML = "إضافة";
      catDisplay_catPage();
      Swal.fire("تم حفظ التغييرات !", "", "success");
    } else if (result.isDenied) {
      Swal.fire("لم يتم حفظ التغييرات", "", "info");
    }
  });
}
submitBtn.setAttribute("disabled", "disabled");
catName.addEventListener("keyup", function () {
  let reg = /^.{5,}$/;
  if (reg.test(catName.value)) {
    submitBtn.removeAttribute("disabled");
    document.getElementById("catalert").classList.replace("d-block", "d-none");
  } else {
    submitBtn.setAttribute("disabled", "disabled");
    document.getElementById("catalert").classList.replace("d-none", "d-block");
    document.getElementById("catalert").innerHTML =
      "يجب عليك كتابة اسم صنف يتجاوز الثلاثة حروف";
  }
});
