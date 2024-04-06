let descriptionDiv = document.querySelector(".description");
let gridContainer = document.querySelector(".gridContainer");



var colleges = [
  {
    name: "seneca",
    description: "Hello, K cha",
  },
  {
    name: "georgian",
    description: "Sanchai xau",
  },
  {
    name: "georgeBrown",
    description: "Tic-Tac-Toe",
  },
  {
    name: "fleming",
    description: "Bingo",
  },
];

function displayDescription(collegeID) {
  var college = colleges.find(function (college) {
    return college.name === collegeID;
  });

  if (college) {
    descriptionDiv.innerHTML = "";

    var description = document.createElement("p");
    description.textContent = college.description;

    var closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", function () {
      descriptionDiv.style.display = "none";
      gridContainer.style.filter = "none"; 
      
    });
    descriptionDiv.appendChild(closeButton);
    descriptionDiv.appendChild(description);
    gridContainer.style.filter = "blur(5px)";
    

    descriptionDiv.style.display = "block";
    
  }
}

var collegeImages = document.querySelectorAll(".collegeImage");
collegeImages.forEach((element) => {
  element.addEventListener("click", function () {
    var collegeID = this.id;
    displayDescription(collegeID);
  });
});
