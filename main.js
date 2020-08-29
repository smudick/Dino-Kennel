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
    owner: "Ian Malcolm",
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
    owner: "Sam",
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
  $("#kennel-cards").html("");
  $("#hospital-cards").html("");
  $("#graveyard-cards").html("");

  dinos.forEach((item, index) => {
    healthChecker(item);
    if (item.location === "kennel") {
      $("#kennel-cards").append(
        `<div class="card m-2" id="${index}" style="width: 18rem;">
            <img src="${item.image}" id="dino-image-${index}" class="card-img-top card-size" alt="${item.type}">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">Health: ${item.health}</p>
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
                    <p class="card-text">Health: ${item.health}</p>

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
                  <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Health: ${item.health}</p>
                    <button id="delete-button-${index}" type="button" class="btn btn-outline-danger m-1">Delete</button>
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
  addDinoButtonClick();
  dinoModalPictureClick(index);
  deleteDinosButtonClick(index);
  petDinosButtonClick(index);
  feedDinosButtonClick(index);

  // adventureButtonClick(index);
};

const addDinoButtonClick = () => {
  $("#add-dino-button").on("click", addDinoModal);
};

const dinoModalPictureClick = (index) => {
  $(`#dino-image-${index}`).on("click", buildModal);
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

const addDinoModal = () => {
  $("#add-dino").html(`
    <div class="modal" id="add-dino-modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add a Dino</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
            <div class="form-group">
                <label for="formGroupExampleInput">Namel</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Name">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput">Age</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Age">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput">Type</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Type">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput">Owner</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Owner">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput">Image</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Image Url">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>`);
  $("#add-dino-modal").modal("show");
};

const buildModal = (e) => {
  let pictureId = e.target.parentNode.id;
  console.log(pictureId);
  dinos.forEach((item) => {
    console.log(`dino-${item.id}`);
    if (pictureId === `dino-${item.id}`) {
      $("#dino-info").html(`
      <div class="modal" id="dino-info-modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Dino Profile</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <div class="modal-image">
            <img src="${item.image}">
          </div>
            <div class="modal-info">
                <h3>${item.name}</h3>
                <p>Type: ${item.type}</p>
                <p>Age: ${item.age}</p>
                <p>Owner: ${item.owner}</p>
            </div>
          </div>
          <div class="modal-footer">
            <div class="container-lg">100% wide until large breakpoint</div>
          </div>
        </div>
      </div>
    </div>`);
    }
    $("#dino-info-modal").modal("show");
  });
};

const deleteDinos = (e) => {
  const ctype = e.target.type;
  const target = e.target.parentNode.parentNode.id;
  const target2 = e.currentTarget.parentNode.parentNode.id;

  console.log(target, target2);

  if (ctype === "button") {
    dinos.splice(target, 1);
  }
  displayDinos();
};

const feedDinos = (e) => {
  const ctype = e.target.type;
  const target = e.target.parentNode.parentNode.id;
  console.log(target);
  if (ctype === "button") {
    dinos[target].health += 10;
  }
  displayDinos();
};

const petDinos = (e) => {
  const ctype = e.target.type;
  const target = e.target.parentNode.parentNode.id;
  console.log(target);
  if (ctype === "button") {
    dinos[target].health += 5;
  }
  displayDinos();
};

const init = () => {
  displayDinos(dinos);
};
init();
