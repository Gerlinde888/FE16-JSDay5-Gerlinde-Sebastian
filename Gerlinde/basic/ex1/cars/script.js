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
const carsList = JSON.parse(cars);

const listContainer = document.querySelector(".container-cars");

printCards = () => {
  listContainer.innerHTML = "";
  carsList.forEach((car) => {
    listContainer.innerHTML += ` <div class="col-4">
      <div class="card" style="width: 18rem">
        <img src="${car.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${car.name}</h5>
          <div class="btn btn-danger like-btn">
            Likes <span class="likes-count">${car.likes}</span>
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
      carsList[i].likes++;
      btn.querySelector(".likes-count").innerHTML = carsList[i].likes;
      console.log(carsList[i]);
    });
  });
};

localStorage.setItem("name", "Porsche Cayenne");
let newName = localStorage.getItem("name");
localStorage.removeItem("name");
console.log(newName);

localStorage.setItem("cars", JSON.stringify(carsList));
const carsString = localStorage.getItem("cars");
console.log(JSON.parse(carsString));

printCards();
increaseLikes();
