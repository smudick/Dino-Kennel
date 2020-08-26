const displayDinos = (dinos) => {
    $('#dino-locations').html('');
    dinos.forEach((item) => {
    $('#dino-locations').append(
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
    )
})
};

export { displayDinos } 
