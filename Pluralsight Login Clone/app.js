// let value;
// console.log(window)

// value = document.location.href;
// value = document.location.hostname;
// value = document.location.protocol;
// value = document.location.host;
// value = document.location.ancestorOrigins;
// value = document.URL;
// value = document.images.item(0);
// value = document.links.item(2);
// value = document.links.item(5).className;
// value = document.forms.item(0).children[2].textContent;

// console.log(value);

//! DOM Seçiciler(Selectors)
//! classname, id, tagname lar üzerinden html etiketleri üzerinden işlem yapılır

// value = document.getElementsByClassName("secondary-btn").item(0);
// value = document.getElementById("kayıt-ol");
//value = document.getElementsByTagName();

// const button = document.getElementsByTagName("p");
// const button = document.getElementsByClassName("logo");
// console.log(button.getAttribute("class"));
// console.log(button.getAttribute("type"));
// console.log(button.className);
// console.log(button.classList);
//! console.log(button.textContent);
//! console.log(button.innerHTML);  textContent ile innerHTML arsındaki fark innerHTML html etiketlerini tanır.
// button.textContent = "<b> kayıt ol</b>";
// button.innerHTML = "<b> kayıt ol </b>";

// console.log(button.item(0));

//! bu üstekilerin hepsini yapan bir metot var
//! querySelector() veya querySelectorAll()

// const inputArea = document.querySelector("input");
// console.log(inputArea);

//! style özelliği kullanımı

// const item = document.querySelector(".links").children[0];
// console.log(item);

// item.style.backgroundColor = "green";
// console.log(item);
// item.style.color = "green";

// let button = document.querySelectorAll(".secondary-btn")[0];
// let sigin = button.parentElement;
// let left = sigin.parentElement;
// let wrapper = left.parentElement;
// let body = wrapper.parentElement;
// let head  = body.parentElement.children[0];
// let child = Array.from(head.children);
// let title = head.children[head.children.length - 1];
// let newTitle = title.textContent = "klonlanmış giriş sayfası";
// console.log(title);

//! element oluşturma perşembe - cuma 75 ye kadar yap
// const form = document.querySelector("form");
// const link = document.createElement("a");
// link.id = "goSomeWhere";
// link.className = "btn btn-primary ";
// link.innerHTML = "youtube adresim";
// link.href = "https://www.youtube.com";
// link.target = "_blank";

// form.appendChild(link);

// console.log(link);

// const a = document.querySelector(".signin");
//const links = document.querySelectorAll(".links")[0];
// const asd = document.querySelectorAll(".asd")[Math.floor(Math.random()*2)];
// a.children[0].remove();
//  link.remove();
// asd.remove()
// links.removeChild(links.lastElementChild);
// a.removeChild(a.children[2]);
// links.replaceChildren(links.children[1],links.children[0]);
//  console.log(links);

//  const button = document.querySelector(".secondary-btn");

//  button.addEventListener("click", hesapla);

//  function hesapla(e) {
//  console.log(e.target.textContent);
//    console.log(e.type)
//   console.log(e.x);
//    console.log(e);
//  }
//console.log(button);

// const input = document.querySelectorAll(".text-input")[0];
// input.addEventListener("keypress", show);

// function show(){
//     console.log("tuşa basıldı");
// }
// console.log(input);

// document.addEventListener("keydown", show);

// function show(e){
// const key = e.key;
// if(key == "F5"){
//     console.log("F5 yapılamaz");
//     e.preventDefault();
//  }
// }
 const btn = document.querySelector(".primary-btn");

//  btn.addEventListener("click",replace);
 const input = document.querySelectorAll(".text-input")[0];
  const text = document.querySelector(".text-email");
// function replace(e){
// text.textContent = input.value;
// }
input.addEventListener("select", run);

function run(e){
    text.textContent = e.target.value;
}