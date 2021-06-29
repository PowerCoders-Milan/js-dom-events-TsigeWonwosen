// 1. generate an array of 20 random numbers

function generateRandomNumber(number) {
  const randomNumberArray = [];
  let i = 1;

  while (i <= number) {
    let randomNumbers = Math.floor(Math.random() * 200);
    randomNumberArray.push(randomNumbers);
    i++;
  }
  return randomNumberArray;
}

console.log(generateRandomNumber(20));
// 2. show those numbers inside the page element.insertAdjentHTML

const writeList = (listElement, ListArray) => {
  // delete prevoius numbers list
  listElement.innerHTML = "";
  // insert new numbers in list
  ListArray.forEach((element) => {
    listElement.insertAdjacentHTML("beforeend", `<li>${element}</li>`);
  });
};

function createListOfNumber(type) {
  let ListArray = generateRandomNumber(20);
  if (type === "sort") {
    ListArray = ListArray.sort((a, b) => a - b);
  } else if (type === "even") {
    ListArray = ListArray.filter((numb) => numb % 2 === 0);
  } else if (type === "odd") {
    ListArray = ListArray.filter((numb) => numb % 2 !== 0);
  } else {
    console.log("Not Selected");
  }

  const numbersList = document.querySelector(".random-numbers ul");

  writeList(numbersList, ListArray);
}
// numbersList.forEach(() => {}); // complete this iterator to do the task

// 3. create an event on the a elements to change the page
// on each element call a callback functions that returns you the correct element
// refactor step 2 into a function to reuse that code to update the page
// createListOfNumber();

const Actions = document.querySelectorAll(".actions .btn");
createListOfNumber();
Actions[0].addEventListener("click", () => createListOfNumber("sort"));
Actions[1].addEventListener("click", () => createListOfNumber("odd"));
Actions[2].addEventListener("click", () => createListOfNumber("even"));

Actions.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    Actions.forEach((btn) => btn.classList.remove("active"));
    event.currentTarget.classList.add("active");
  });
});
