// import { getDinos } from './data/dinoData.js';
// import { healthChecker } from '../components/displayDinos.js';
// import { getDinos } from "../data/dinoData.js";
const dinos = [
  {
    id: "dino1",
    name: "Dino Doug",
    type: "Apatosaurus",
    age: 45,
    owner: "John Hammond",
    adventures: [],
    health: 60,
    image: "./images/apatosaurus.jpg",
    location: "kennel",
  },
  {
    id: "dino2",
    name: "Clever Girl",
    type: "Velociraptor",
    age: 33,
    owner: "Dr. Alan Grant",
    adventures: [],
    health: 60,
    image: "./images/velociraptor.jpg",
    location: "kennel",
  },
  {
    id: "dino3",
    name: "Rex",
    type: "T-Rex",
    age: 78,
    owner: "Dr. Ellie Satler",
    adventures: [],
    health: 60,
    image: "./images/trex.jpg",
    location: "kennel",
  },
  {
    id: "dino4",
    name: "Bernard",
    type: "Unknown",
    age: 900,
    owner: "Denis Nedry",
    adventures: [],
    health: 0,
    image: "./images/bernard.jpg",
    location: "kennel",
  },
  {
    id: "dino5",
    name: "Pepper",
    type: "Dogasaurus",
    age: 2,
    owner: "Ian Malcolm",
    adventures: [],
    health: 60,
    image: "./images/pepper.jpg",
    location: "kennel",
  },
  {
    id: "dino6",
    name: "Tim",
    type: "Talarurus",
    age: 100,
    owner: "Dr. T",
    adventures: [],
    health: 60,
    image:
      "https://vignette.wikia.nocookie.net/dinosaurs/images/2/2b/TalarurusInfobox.png/revision/latest/scale-to-width-down/340?cb=20150512165226",
    location: "kennel",
  },
  {
    id: "dino7",
    name: "Tracy",
    type: "Triceratops",
    age: 100,
    owner: "Abbey",
    adventures: [],
    health: 60,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81Wsvp2M7iL._AC_SX425_.jpg",
    location: "kennel",
  },
  {
    id: "dino8",
    name: "Percy",
    type: "Pterodactyl",
    age: 10,
    owner: "Jacob",
    adventures: [],
    health: 60,
    image: "https://images.dinosaurpictures.org/3_pterodactyl_63be.jpg",
    location: "kennel",
  },
  {
    id: "dino9",
    name: "Betty",
    type: "brontosaurus",
    age: 22,
    owner: "Dr. T",
    adventures: [],
    health: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOdrC7hlvBawFQ7g8vgwHcfQphX5WfeN2bth0dvc4M2oxNGdSD",
    location: "kennel",
  },
];
const displayDinos = () => {
  $("#kennel").html("");
  $("#hospital").html("");
  $("#graveyard").html("");

  dinos.forEach((item, index) => {
    healthChecker(item);
    if (item.location === "kennel") {
      $("#kennel").append(
        `<div class="card" id="dino-${item.id}" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="${item.type}">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">Health: ${item.health}</p>
              <button id="pet-button-${index}" type="button" class="btn btn-outline-primary">Pet</button>
              <button id="feed-button-${index}" type="button" class="btn btn-outline-secondary">Feed</button>
              <button id="adventure-button-${index}" type="button" class="btn btn-outline-warning">Adventure</button>
              <button id="delete-button-${index}" type="button" class="btn btn-outline-danger">Delete</button>
            </div>
          </div>`
      );
    } else if (item.location === "hospital") {
      $("#hospital").append(
        `<div class="card" id="dino-${index}" style="width: 18rem;">
                  <img src="${item.image}" class="card-img-top" alt="${item.type}">
                  <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Health: ${item.health}</p>
                    <a id="pet-button-${index}"  class="btn btn-primary">Pet</a>
                    <button id="pet-button-${index}" type="button" class="btn btn-outline-primary">Pet</button>
                    <button id="feed-button-${index}" type="button" class="btn btn-outline-secondary">Feed</button>
                    <button id="adventure-button-${index}" type="button" class="btn btn-outline-warning">Adventure</button>
                    <button id="delete-button-${index}" type="button" class="btn btn-outline-danger">Delete</button>
                  </div>
                </div>`
      );
    } else {
      $("#graveyard").append(
        `<div class="card" id="dino-${index}" style="width: 18rem;">
                  <img src="${item.image}" class="card-img-top" alt="${item.type}">
                  <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Health: ${item.health}</p>
                    <button id="pet-button-${index}" type="button" class="btn btn-outline-primary">Pet</button>
                    <button id="feed-button-${index}" type="button" class="btn btn-outline-secondary">Feed</button>
                    <button id="adventure-button-${index}" type="button" class="btn btn-outline-warning">Adventure</button>
                    <button id="delete-button-${index}" type="button" class="btn btn-outline-danger">Delete</button>
                  </div>
                </div>`
      );
    }
    buttonClicks(index);
  });
};

const healthChecker = (item) => {
  if (item.health >= 60) {
    item.location = "kennel";
  } else if (item.health < 60 && item.health > 0) {
    item.location = "hospital";
  } else {
    item.location = "graveyard";
  }
};

const buttonClicks = (index) => {
  deleteDinosButtonClick(index);
  petDinosButtonClick(index);
  feedDinosButtonClick(index);
  // adventureButtonClick(index);
};

const petDinosButtonClick = (index) => {
  $(`#pet-button-${index}`).on("click", petDinos);
};

const feedDinosButtonClick = (index) => {
  $(`#feed-button-${index}`).on("click", feedDinos);
};

const deleteDinosButtonClick = (index) => {
  $(`#delete-button-${index}`).on("click", deleteDinos);
};

const deleteDinos = (e) => {
  const ctype = e.target.type;
  const target = e.target.parentNode.parentNode.id;

  console.log(target);

  if (ctype === "button") {
    dinos.splice(target, 1);
    // console.log(dinos);
  }
  displayDinos();
};

const feedDinos = (e) => {
  const ctype = e.target.type;
  const target = e.target.parentNode.parentNode.id;
  console.log(target);
  if (ctype === "button") {
    // target.health += 10;
  }
  displayDinos();
};

const petDinos = (e) => {
  const ctype = e.target.type;
  const target = e.target.id;
  console.log(target);
  if (ctype === "button") {
    dinos.health += 5;
    console.log(dinos.heath);
  }
  displayDinos();
};

const init = () => {
  displayDinos(dinos);
};
init();
