
const mealsList = JSON.parse(meals);

const listContainer = document.querySelector(".container-meals");

printCards = () => {
  listContainer.innerHTML = "";
  mealsList.forEach((meal) => {
    listContainer.innerHTML += ` <div class="col-4">
      <div class="card" style="width: 18rem">
        <img src="${meal.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${meal.name}</h5>
          <div class="btn btn-danger like-btn">
            Likes <span class="likes-count">${meal.likes}</span>
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
      mealsList[i].likes++;
      btn.querySelector(".likes-count").innerHTML = mealsList[i].likes;
      console.log(mealsList[i]);
    });
  });
};

localStorage.setItem("name", "Marry Doe");
let newName = localStorage.getItem("name");
localStorage.removeItem("name");
console.log(newName);

localStorage.setItem("meals", JSON.stringify(mealsList));
const mealsString = localStorage.getItem("users");
console.log(JSON.parse(mealsString));

printCards();
increaseLikes();
