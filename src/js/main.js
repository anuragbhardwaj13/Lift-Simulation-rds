var submit_btn = document.getElementById("submit-btn");

const getCountOfFloorAndLift = () => {
  var countOfFloors = document.getElementById("floor-input").value;
  var countOfLifts = document.getElementById("lift-input").value;
  var minFloor = document.getElementById("floor-input").getAttribute("min");
  var maxFloor = document.getElementById("floor-input").getAttribute("max");
  var minLift = document.getElementById("lift-input").getAttribute("min");
  var maxLift = document.getElementById("lift-input").getAttribute("max");

  if (
    countOfFloors < minFloor ||
    countOfFloors > maxFloor ||
    countOfLifts < minLift ||
    countOfLifts > maxLift
  ) {
    console.log("ah-oh");
    window.alert("Please check the minimum count");
  } else {
    var details = {
      floors: countOfFloors,
      lifts: countOfLifts,
    };
    if (typeof Storage !== "undefined") {
      localStorage.setItem("details", JSON.stringify(details));
      window.location.href = "lobby.html";
    } else {
      console.log("LocalStorage not supported");
    }
  }
};

submit_btn.addEventListener("click", getCountOfFloorAndLift);
