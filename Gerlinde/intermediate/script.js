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
const employeesList = JSON.parse(employees);

const listContainer = document.querySelector(".container-employees");

printCards = () => {
  listContainer.innerHTML = "";
  employeesList.forEach((employee) => {
    listContainer.innerHTML += ` <div class="col-4">
      <div class="card" style="width: 18rem">
        <img src="${employee.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${employee.FirstName} ${employee.LastName}</h5>
          <div class="card-text">Email Address: ${employee.EmailAddress}</div>
          <div class="card-text">Job Title: ${employee.JobTitle}</div>
          <div class="card-text">Salary: ${employee.Salary}</div>
          <div class="card-text">Employee Uniqu ID: ${employee.UniqueID}</div>
        </div>
      </div>
    </div>`;
  });
};



localStorage.setItem("employees", JSON.stringify(employeesList));
const employeesString = localStorage.getItem("employees");
console.log(JSON.parse(employeesString));

printCards();
