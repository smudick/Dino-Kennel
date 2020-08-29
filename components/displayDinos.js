import { getDinos } from "../data/dinoData.js";
import { buttonClicks } from "./dinoButtons.js";

const displayDinos = () => {
  $("#kennel-cards").html("");
  $("#hospital-cards").html("");
  $("#graveyard-cards").html("");

  getDinos().forEach((item, index) => {
    healthChecker(item);
    if (item.location === "kennel") {
      $("#kennel-cards").append(
        `<div class="card m-2" id="${index}" style="width: 18rem;">
            <img src="${item.image}" id="dino-image-${index}" class="card-img-top card-size" alt="${item.type}">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <div class="progress">
                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: ${item.health}%" aria-valuenow="${item.health}" aria-valuemin="0" aria-valuemax="100">${item.health}%</div>
                </div>
              <button id="pet-button-${index}" type="button" class="btn btn-outline-primary m-1">Pet</button>
              <button id="feed-button-${index}" type="button" class="btn btn-outline-success m-1">Feed</button>
              <button id="adventure-button-${index}" type="button" class="btn btn-outline-warning m-1">Adventure</button>
              <button id="delete-button-${index}" type="button" class="btn btn-outline-danger m-1">Delete</button>
            </div>
          </div>`
      );
    } else if (item.location === "hospital") {
      $("#hospital-cards").append(
        `<div class="card m-2" id="${index}" style="width: 18rem;">
                  <img src="${item.image}" id="dino-image-${index}" class="card-img-top card-size" alt="${item.type}">
                  <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <div class="progress">
                <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: ${item.health}%" aria-valuenow="${item.health}" aria-valuemin="0" aria-valuemax="100">${item.health}%</div>
                </div>

                    <button id="pet-button-${index}" type="button" class="btn btn-outline-primary m-1">Pet</button>
                    <button id="feed-button-${index}" type="button" class="btn btn-outline-success m-1">Feed</button>
                    <button id="adventure-button-${index}" type="button" class="btn btn-outline-warning m-1">Adventure</button>
                    <button id="delete-button-${index}" type="button" class="btn btn-outline-danger m-1">Delete</button>
                  </div>
                </div>`
      );
    } else {
      $("#graveyard-cards").append(
        `<div class="card m-2" id="${index}" style="width: 18rem;">
                  <img src="${item.image}" id="dino-image-${index}" class="card-img-top card-size" alt="${item.type}">
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${item.name}</h5>
                    <img class="dead-icon align-self-center" src="https://i.pinimg.com/originals/73/41/88/7341884ed3a6c8449ad968dbd7d038e5.jpg">
                    <button id="delete-button-${index}" type="button" class="btn btn-outline-danger m-1">Delete</button>
                  </div>
                </div>`
      );
    }
    item.id = index;
    buttonClicks(index);
  });
};

const healthChecker = (item) => {
  if (item.health > 100) {
    item.health = 100;
  };
  if (item.health >= 50) {
    item.location = "kennel";
    item.healthbarColor = "bg-success"
  } else if (item.health < 50 && item.health > 0) {
    item.location = "hospital";
    item.healthbarColor = "bg-danger"
  } else {
    item.location = "graveyard";
  }
};

export { displayDinos }