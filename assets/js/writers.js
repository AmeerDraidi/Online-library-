// Writers CRUD :
let writerName = document.getElementById("writerName");
// let bookName = document.getElementById("bookName");
let writerImg = document.getElementById("writerImg");
let submitBtn = document.getElementById("submitBtn");
let clearAllWriters = document.getElementById("clearAllWriters");
let tbody = document.getElementById("tbody");
// let writersAlert = document.getElementById("writersAlert");
let index;
let writers;
erase();
if (localStorage.getItem("writersList") == null) {
  writers = [];
} else {
  writers = JSON.parse(localStorage.getItem("writersList"));
}
writerDisplay_writerPage();

function check() {
  document
    .getElementById("writersAlert")
    .classList.replace("d-block", "d-none");
  document
    .getElementById("writerImgAlert")
    .classList.replace("d-block", "d-none");
  let writerReg = /^[\u0621-\u064A\s]{2,}$/;
  let flag = writerReg.test(writerName.value);
  if (flag && writerImg.value !== "" && writerImg.value !== null) {
    return true;
  } else {
    if (flag == false) {
      document
        .getElementById("writersAlert")
        .classList.replace("d-none", "d-block");
      document.getElementById("writersAlert").innerHTML =
        "يجب أن يكون اسم الكاتب باللغة العربية ، وأن يتجاوز اسمه الحرفين";
    }
    if (writerImg.value == "" || writerImg.value == null) {
      document
        .getElementById("writerImgAlert")
        .classList.replace("d-none", "d-block");
      document.getElementById("writerImgAlert").innerHTML =
        "يجب إرفاق صورة الكاتب من الملف الذي يحمل اسم writers.";
    }
    return false;
  }
}

submitBtn.addEventListener("click", function () {
  if (check()) {
    if (submitBtn.innerHTML == "إضافة") {
      writerAdd();
    } else {
      updateWriter();
    }
    writerDisplay_writerPage();
    erase();
  }
});
function writerAdd() {
  let writerImg_ = writerImg.value;
  let split = writerImg_.split("fakepath\\");
  let imgName = split[1];
  let writerObject = {
    writer: writerName.value,
    // book: bookName.value,
    writerImg: imgName,
  };
  writers.push(writerObject);
  localStorage.setItem("writersList", JSON.stringify(writers));
}

function erase() {
  writerName.value = "";
  // bookName.value = "";
  writerImg.value = "";
}

function writerDisplay_writerPage() {
  let writerData = "";
  for (let i = 0; i < writers.length; i++) {
    writerData += `
        <tr>
        <td>${i + 1}</td>
        <td>${writers[i].writer}</td>
        
        <td><img src="assets/img/writers/${
          writers[i].writerImg
        }" class="w-50  m-auto pt-2 card-img " alt="Writer Image"></td>
        <td>
       <div class="d-flex flex-row  py-3">
        <button type="button" class="btn btn-danger ms-1" onclick="writerDelete(${i})">حذف</button>
        <button type="button" onclick="getwriterData(${i})" class="btn btn-primary">تعديل</button>
        </div>
        
        </td>
        </tr>
        `;
  }
  tbody.innerHTML = writerData;
}
clearAllWriters.onclick = function () {
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
      localStorage.removeItem("writersList");
      writers = [];
      tbody.innerHTML = "";
      Swal.fire(
        "تمت عملية الحذف",
        "تمت عملية حذف جميع الأصناف بنجاح ",
        "success"
      );
    }
  });
};
function writerDelete(i) {
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
      writers.splice(i, 1);
      localStorage.setItem("writersList", JSON.stringify(writers));
      writerDisplay_writerPage();
      Swal.fire("تمت عملية الحذف", "تمت عملية حذف الصنف بنجاح", "success");
    }
  });
}
function getwriterData(i) {
  submitBtn.innerHTML = "تعديل";
  writerName.value = writers[i].writer;
  // bookName.value=writers[i].book;
  index = i;
}

function updateWriter() {
  let writerObject;
  if (writerImg.value !== "") {
    let writerImg_ = writerImg.value;
    let split = writerImg_.split("fakepath\\");
    let imgName = split[1];
    writerObject = {
      writer: writerName.value,
      // book : bookName.value,
      writerImg: imgName,
    };
  } else {
    writerObject = {
      writer: writerName.value,
      // book : bookName.value,
      writerImg: writers[index].writerImg,
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
      writers[index].writer = writerObject.writer;
      writers[index].writerImg = writerObject.writerImg;
      localStorage.setItem("writersList", JSON.stringify(writers));
      submitBtn.innerHTML = "إضافة";
      writerDisplay_writerPage();
      Swal.fire("تم حفظ التغييرات !", "", "success");
    } else if (result.isDenied) {
      Swal.fire("لم يتم حفظ التغييرات", "", "info");
    }
  });
}
