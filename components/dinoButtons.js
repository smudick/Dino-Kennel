import { getDinos } from "../data/dinoData.js";
import { displayDinos } from "./displayDinos.js";

const buttonClicks = (index) => {
    dinoModalPictureClick(index);
    deleteDinosButtonClick(index);
    petDinosButtonClick(index);
    feedDinosButtonClick(index);
    adventureButtonClick(index);
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

  const buildModal = (e) => {
    const target = e.target.parentNode.id;
    getDinos().forEach((item) => {
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
              <div class="table">
              <div class="adventure-table-header text-center">
                  <h5>Adventure Table</h5>
                  <table>
                      <tr class="timestamp-summary">
                          <th>Timestamp</th>
                          <th>Summary</th>
                      </tr>
                  </table>
              <div id="adventure-table" class="adventure-table text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>`);
        adventureTable(item);
        $("#dino-info-modal").modal("show");
      }
    });
  };

  const deleteDinos = (e) => {
    const ctype = e.target.type;
    const target = e.target.parentNode.parentNode.id;
  
    if (ctype === "button") {
      getDinos().splice(target, 1);
    }
    displayDinos();
  };
  
  const feedDinos = (e) => {
    const ctype = e.target.type;
    const target = e.target.parentNode.parentNode.id;
    if (ctype === "button") {
      getDinos()[target].health += 10;
    }
    displayDinos();
  };
  
  const petDinos = (e) => {
    const ctype = e.target.type;
    const target = e.target.parentNode.parentNode.id;
    if (ctype === "button") {
      getDinos()[target].health += 5;
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
        getDinos()[target].health += 20;
        summary = "A Fantastic Adventure!";
      } else if (adventureRisk >= 4 && adventureRisk <= 6) {
        getDinos()[target].health -= 1;
        summary = "Meh";
      } else if (adventureRisk < 4 && adventureRisk > 0) {
        getDinos()[target].health -= 20;
        summary = "A Challenging Adventure, The Dino has Sustained an Injury";
      } else {
        getDinos()[target].health = 0;
        summary = `There's Been An Accident! The Dino has not Survived`;
      }
    }
    adventureLog.timestamp = timestamp;
    adventureLog.summary = summary;
    getDinos()[target].adventures.push(adventureLog);
    displayDinos();
  };
  
  const adventureTable = (dino) => {
    let adventuresArray = dino.adventures;
    adventuresArray.forEach((adventure) => {
      $("#adventure-table").append(`
      <table>    
          <tr>
              <td>${adventure.timestamp}</td>
              <td>${adventure.summary}</td>
              
          </tr>
      </table>
          `);
    });
  };

  export {buttonClicks}