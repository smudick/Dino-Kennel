// import { getDinos } from './data/dinoData.js';
// import { healthChecker } from '../components/displayDinos.js';
// import { getDinos } from "../data/dinoData.js";
const dinos = [
  {
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
  if (item.health >= 50) {
    item.location = "kennel";
  } else if (item.health < 50 && item.health > 0) {
    item.location = "hospital";
  } else {
    item.location = "graveyard";
  }
};

const buttonClicks = (index) => {
  dinoModalPictureClick(index);
  deleteDinosButtonClick(index);
  petDinosButtonClick(index);
  feedDinosButtonClick(index);
  adventureButtonClick(index);
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

const adventureButtonClick = (index) => {
  $(`#adventure-button-${index}`).on("click", dinoAdventure);
};

const deleteDinosButtonClick = (index) => {
  $(`#delete-button-${index}`).on("click", deleteDinos);
};

const submitDinoButtonClick = () => {
  $("#submit-new-dino").on("click", addNewDino);
};

const addDinoModal = () => {
  $("#add-dino").append(`
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
                    <label for="formGroupExampleInput">Name</label>
                    <input type="text" class="form-control" id="new-dino-name" placeholder="Enter Name">
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Age</label>
                    <input type="text" class="form-control" id="new-dino-age" placeholder="Enter Age">
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Type</label>
                    <input type="text" class="form-control" id="new-dino-type" placeholder="Enter Type">
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Owner</label>
                    <input type="text" class="form-control" id="new-dino-owner" placeholder="Enter Owner">
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Image</label>
                    <input type="text" class="form-control" id="new-dino-image" placeholder="Enter Image Url">
                </div>
        </div>
        <div class="modal-footer">
            <button type="button" id="submit-new-dino" class="btn btn-primary">Submit</button>
        </div>
    </div>
  </div>
</div>`);
  submitDinoButtonClick();
  $("#add-dino-modal").modal("show");
};

const addNewDino = () => {
  let newDino = {};
  newDino.health = 60;
  newDino.adventures = [];
  newDino.name = $("#new-dino-name").val();
  newDino.type = $("#new-dino-type").val();
  newDino.age = $("#new-dino-age").val();
  newDino.owner = $("#new-dino-owner").val();
  newDino.image = $("#new-dino-image").val();

  dinos.push(newDino);
  displayDinos(dinos);
};

const buildModal = (e) => {
  const target = e.target.parentNode.id;
  dinos.forEach((item) => {
    if (`${target}` === `${item.id}`) {
      $("#dino-info").html(`
      <div class="modal" id="dino-info-modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Dino Profile</h4>
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
                <p>Health:</p>
                <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: ${item.health}%" aria-valuenow="${item.health}" aria-valuemin="0" aria-valuemax="100">${item.health}%</div>
                </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="container-lg">
                <h5>Adventure Log</h5>
                <table id="adventure-table"> 
                    <tr>
                        <th>Timestamp</th>
                        <th>Summary</th>
                    </tr>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>`);
    //   adventureTable(item);
    }
    $("#dino-info-modal").modal("show");
  });
};

const deleteDinos = (e) => {
  const ctype = e.target.type;
  const target = e.target.parentNode.parentNode.id;

  if (ctype === "button") {
    dinos.splice(target, 1);
  }
  displayDinos();
};

const feedDinos = (e) => {
  const ctype = e.target.type;
  const target = e.target.parentNode.parentNode.id;
  if (ctype === "button") {
    dinos[target].health += 10;
  }
  displayDinos();
};

const petDinos = (e) => {
  const ctype = e.target.type;
  const target = e.target.parentNode.parentNode.id;
  if (ctype === "button") {
    dinos[target].health += 5;
  }
  displayDinos();
};

const dinoAdventure = (e) => {
  const ctype = e.target.type;
  const target = e.target.parentNode.parentNode.id;
  let summary;
  let adventureLog = {};
  let timestamp = Date();
  if (ctype === "button") {
    let adventureRisk = Math.floor(Math.random() * 10);
    if (adventureRisk > 6) {
      dinos[target].health += 20;
      summary = "A Fantastic Adventure!";
    } else if (adventureRisk >= 4 && adventureRisk <= 6) {
      dinos[target].health -= 1;
      summary = "Meh";
    } else if (adventureRisk < 4 && adventureRisk > 0) {
      dinos[target].health -= 20;
      summary = "A Challenging Adventure, The Dino has Sustained an Injury";
    } else {
      dinos[target].health = 0;
      summary = `There's Been An Accident! The Dino has not Survived`;
    }
  }
  adventureLog.timestamp = timestamp;
  adventureLog.summary = summary;
  dinos[target].adventures.push(adventureLog);
  //   console.log(dinos[target]);
  displayDinos();
};

const adventureTable = (dino) => {
  dino.adventures.forEach((adventure, index) => {
    $("#adventure-table").append(`
        <tr>
            <td>${adventure[index].summary}</td>
            <td>${adventure[index].timestamp}</td>
            
        </tr>
        `);
    console.log(adventure, index);
  });
};

const init = () => {
  displayDinos(dinos);
  addDinoButtonClick();
};
init();
