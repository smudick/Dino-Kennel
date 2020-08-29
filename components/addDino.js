import { getDinos } from "../data/dinoData.js";
import { displayDinos } from "./displayDinos.js";

const addDinoButtonClick = () => {
    $("#add-dino-button").on("click", addDinoModal);
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
              <div class="modal-body d-flex flex-column">
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
  
    getDinos().push(newDino);
    displayDinos(getDinos());
    clearDinoForm();
  };
  
  const clearDinoForm = () => {
    $("#new-dino-name").val("");
    $("#new-dino-type").val("");
    $("#new-dino-age").val("");
    $("#new-dino-owner").val("");
    $("#new-dino-image").val("");
  };

  export { addDinoButtonClick };
  