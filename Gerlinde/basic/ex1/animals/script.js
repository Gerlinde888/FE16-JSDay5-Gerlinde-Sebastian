console.log("works");
var name = "Porsche";

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 23,
//   fullName() {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(person.firstName);
// console.log(person.lastName);
const animalsList = JSON.parse(animals);

const listContainer = document.querySelector(".container-animals");

printCards = () => {
  listContainer.innerHTML = "";
  animalsList.forEach((animal) => {
    listContainer.innerHTML += ` <div class="col-3">
      <div class="card" style="width: 18rem">
        <img src="${animal.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${animal.name}</h5>
          <div class="btn btn-danger like-btn">
            Likes <span class="likes-count">${animal.likes}</span>
          </div>
        </div>
      </div>
    </div>`;
  });
};

const increaseLikes = () => {
  const likeBtn = document.querySelectorAll(".like-btn");
  likeBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      animalsList[i].likes++;
      btn.querySelector(".likes-count").innerHTML = animalsList[i].likes;
      console.log(animalsList[i]);
    });
  });
};

localStorage.setItem("name", "Perser Charly");
let newName = localStorage.getItem("name");
localStorage.removeItem("name");
console.log(newName);

localStorage.setItem("animals", JSON.stringify(animalsList));
const animalsString = localStorage.getItem("animals");
console.log(JSON.parse(animalsString));

printCards();
increaseLikes();
