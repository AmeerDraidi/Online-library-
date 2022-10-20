let ApiBooks;
let bookName = document.getElementById("bookname");
let bookSection = document.getElementById("bookapi");
let submit = document.getElementById("submit");
async function getbooks(keyword){
    let books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=AIzaSyDOBSQm5kOAhsvSK_rc-lWsw0wlPkG4bvE`);
    let book2 = await books.json();
    ApiBooks = book2.items;
    display();
}
submit.onclick = function(){
    let bookValue = bookName.value;
    getbooks(bookValue);
    bookName.value = "";
}
function display(){
    let Data = ``;
    for(let i = 0;i < ApiBooks.length;i++){
        Data+=`
        <div class="col-md-12">
                    <div class="card no-card mb-3 style="width: 20rem;"">
                      <div class="card-body">
                        <h5 class="card-title">${ApiBooks[i].volumeInfo.title}</h5>
                        <p class = "text-white">المؤلف : ${ApiBooks[i].volumeInfo.authors}</p>
                        <p class = "text-white">
                        <span class="d-block">الوصف : </span>
                        ${ApiBooks[i].volumeInfo.description}
                        </p>
                        <p class = "text-white">عدد الصفحات : ${ApiBooks[i].volumeInfo.pageCount}</p>
                        <p class = "text-white">الصنف : ${ApiBooks[i].volumeInfo.categories}</p>
                        <img src="${ApiBooks[i].volumeInfo.imageLinks.thumbnail}" class="pt-2" alt="...">
                        <a href = "${ApiBooks[i].volumeInfo.previewLink}" target = "_blanke" class = "d-block mt-4 text-white">عرض الكتاب</a>
                      </div>
                    </div>
                  </div>
        `;
    }
    bookSection.innerHTML = Data;
}