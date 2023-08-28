var details = localStorage.getItem("details");
let liftCount;
let floorCount;
if (details !== null) {
  details = JSON.parse(details);
  liftCount = details.lifts;
  floorCount = details.floors;
  document.getElementById("p").innerText = "Floors Count " + floorCount;
  document.getElementById("p2").innerText = "Lift Count " + liftCount;
  console.log(details.floors);
  console.log(details.lifts);
  localStorage.clear();
} else {
  console.log("Details not found in localStorage");
}
