const list = document.getElementById("objects");
const getURL = "https://jsonplaceholder.typicode.com/todos/";

const showError = () => {
  const errorMessage = document.createElement("p");
  errorMessage.style.color = "red";
  errorMessage.textContent = "There is some error, try again later.";
  document.body.appendChild(errorMessage);
};

fetch(getURL)
  .then((response) => {
    if (!response.ok) {
      return Promise.reject();
    }
    return response.json();
  })
  .then((data) => {
    if (!data.title) {
      showError();
    }

    data.forEach((object) => {
      const eachTitle = document.createElement("li");
      eachTitle.textContent = object.title;
      list.appendChild(eachTitle);
    });
  })
  .catch(() => {
    showError();
  });
