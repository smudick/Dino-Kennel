const displayDinos = (dinos, location) => {
  //   console.log(location);
  $(`#${location}`).html("");
  dinos.forEach((item) => {
    $(`#${location}`).append(
      `<div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="${item.type}">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">Health: ${item.health}</p>
              <a id="pet-${item.class}" href="#" class="btn btn-primary">Pet</a>
              <a id="feed-${item.class}" href="#" class="btn btn-secondary">Feed</a>
              <a id="adventure-${item.class}" href="#" class="btn btn-warning">Adventure</a>
              <a id="delete-${item.class}" href="#" class="btn btn-danger">Delete</a>
            </div>
          </div>`
    );
  });
};

const healthChecker = (dinos) => {
  let healthyDinos = [];
  let sickDinos = [];
  let deadDinos = [];
  dinos.forEach((item) => {
    if (item.health >= 60) {
      healthyDinos.push(item);
      displayDinos(healthyDinos, "kennel");
    } else if (item.health < 60 && item.health > 0) {
      sickDinos.push(item);
      displayDinos(sickDinos, "hospital");
    } else {
      deadDinos.push(item);
      displayDinos(deadDinos, "graveyard");
    }
  });
};

export { healthChecker };
