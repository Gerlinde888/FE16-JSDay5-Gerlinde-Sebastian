console.log("works");
var firstName = "Marry";

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
const usersList = JSON.parse(users);

const listContainer = document.querySelector(".container-users");

printCards = () => {
  listContainer.innerHTML = "";
  usersList.forEach((user) => {
    listContainer.innerHTML += ` <div class="col-4">
      <div class="card" style="width: 18rem">
        <img src="${user.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
          <div class="btn btn-danger like-btn">
            Likes <span class="likes-count">${user.likes}</span>
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
      usersList[i].likes++;
      btn.querySelector(".likes-count").innerHTML = usersList[i].likes;
      console.log(usersList[i]);
    });
  });
};

localStorage.setItem("name", "Marry Doe");
let newName = localStorage.getItem("name");
localStorage.removeItem("name");
console.log(newName);

localStorage.setItem("users", JSON.stringify(usersList));
const usersString = localStorage.getItem("users");
console.log(JSON.parse(usersString));

printCards();
increaseLikes();
