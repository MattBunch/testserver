const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (e) => {
  uploadToServer(e);
});

function uploadToServer(e) {
  e.preventDefault();

  let formData = {
    fName: document.getElementById("fname").value,
    lName: document.getElementById("lname").value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    if (xhr.responseText === "success") {
      console.log("success");
      console.log(xhr.responseText);
    } else {
      console.log("something went wrong");
      console.log(xhr.responseText);
    }
  };
  xhr.send(JSON.stringify(formData));
}
