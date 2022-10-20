const bookName = document.getElementById("name");
const bookImg = document.getElementById("img");
const authorName = document.getElementById("author");
const bookPrice = document.getElementById("price");
const tbody = document.getElementById("tbody");
let books;
let index;
if (localStorage.getItem("booksList") == null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("booksList"));
  }
  BooksDisplay();

  function bookAdd() {
    let bookimgval = bookImg.value;
    let split = bookimgval.split("fakepath\\");
    let imgname = split[1];
    let bookObject = {
      name: bookName.value,
      img: imgname,
      author: authorName.value,
      price: bookPrice.value,
    };
    books.push(bookObject);
    localStorage.setItem("booksList", JSON.stringify(books));
  }

  function getBookData(i) {
    submitBtn.innerHTML = "تعديل";
    bookName.value = books[i].name;
    authorName.value=books[i].author;
    bookPrice.value = books[i].price;
    index = i;
  }

  function BooksDisplay() {
    let booksData = "";
    for (let i = 0; i < books.length; i++) {
      booksData += `
          <tr>
          <td>${i + 1}</td>
          <td>${books[i].name}</td>
          <td><img src="assets/img/books covers/${
            books[i].img
          }" class="w-25" alt="..."></td>
          <td>${books[i].author}</td>
          <td>${books[i].price}</td>
          <td class = "d-flex">
          <button type="button" class="btn btn-danger" onclick="bookDelete(${i})">حذف</button>
          <button type="button" onclick="getBookData(${i})" class="btn btn-primary">تعديل</button>
          </td>
          </tr>
          `;
    }
    tbody.innerHTML = booksData;
  }

  function clear() {
    bookName.value = "";
    bookImg.value = "";
    authorName.value= "";
    bookPrice.value ="";
  }
  submitBtn.addEventListener("click", function () {
    if (submitBtn.innerHTML == "إضافة") {
        bookAdd();
    } else {
        updateBook();
    }
    BooksDisplay();
    clear();
    submitBtn.setAttribute("disabled", "disabled");
  });

  function updateBook() {
    let bookObject;
    if (bookImg.value !== "") {
      let bookimgval = bookImg.value;
      let split = bookimgval.split("fakepath\\");
      let imgname = split[1];
      bookObject = {
        name: bookName.value,
        img: imgname,
        author: authorName.value,
        price: bookPrice.value, 
      };
    } else {
      bookObject = {
        name: bookName.value,
        img: books[index].img,
        author: authorName.value,
        price: bookPrice.value,
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
          books[index].name = bookObject.name;
          books[index].img = bookObject.img;
          books[index].author = bookObject.author;
          books[index].price = bookObject.price;
          localStorage.setItem("booksList", JSON.stringify(books));
          submitBtn.innerHTML = "إضافة";
          BooksDisplay();
          Swal.fire("تم حفظ التغييرات !", "", "success");
        } else if (result.isDenied) {
          Swal.fire("لم يتم حفظ التغييرات", "", "info");
        }
      });
}

clearallBooks.onclick = function () {
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
        localStorage.removeItem("booksList");
        books = [];
        tbody.innerHTML = "";
        Swal.fire("تمت عملية الحذف", "تمت عملية حذف جميع الأصناف بنجاح ", "success");
      }
    });
  };

  function bookDelete(i) {
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
        books.splice(i, 1);
        localStorage.setItem("booksList", JSON.stringify(books));
        BooksDisplay();
        Swal.fire("تمت عملية الحذف", "تمت عملية حذف الصنف بنجاح", "success");
      }
    });
  }
  selectCat();
  function selectCat(){
    if(localStorage.getItem("catsList") != null){
      catsHome = JSON.parse(localStorage.getItem("catsList"));
      let catData = '';
      for(let i = 0;i < catsHome.length;i++){
          catData+=`
          <option value="${i}"> ${catsHome[i].name} </option>
          `
          console.log(catData);
      }

      document.getElementById("select").innerHTML = catData;
    }
  }
  //validation
submitBtn.setAttribute("disabled", "disabled");
bookName.addEventListener("keyup", function () {
  let reg = /^.{5,}$/;
  if (reg.test(bookName.value)) {
    submitBtn.removeAttribute("disabled");
    document.getElementById("bookalert").classList.replace("d-block", "d-none");
  } else {
    submitBtn.setAttribute("disabled", "disabled");
    document.getElementById("bookalert").classList.replace("d-none", "d-block");
    document.getElementById("bookalert").innerHTML =
      "يجب عليك كتابة اسم كتاب يتجاوز الثلاثة حروف";
  }
});

authorName.onkeyup =function() {
  let reg = /^.{5,}$/;
  if (reg.test(authorName.value)) {
    submitBtn.removeAttribute("disabled");
    document.getElementById("authorAlert").classList.replace("d-block", "d-none");
  } else {
    submitBtn.setAttribute("disabled", "disabled");
    document.getElementById("authorAlert").classList.replace("d-none", "d-block");
    document.getElementById("authorAlert").innerHTML =
      "يجب عليك كتابة اسم كاتب بالثنائي";
  }
}
bookPrice.onkeyup =function() {
  let reg = /^[0-9]*$/;
  if (reg.test(bookPrice.value)) {
    submitBtn.removeAttribute("disabled");
    document.getElementById("pricealert").classList.replace("d-block", "d-none");
  } else {
    submitBtn.setAttribute("disabled", "disabled");
    document.getElementById("pricealert").classList.replace("d-none", "d-block");
    document.getElementById("pricealert").innerHTML =
      "ادخل السعر رقميا";
  }
}





