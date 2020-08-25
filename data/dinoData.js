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
  },
  {
    id: "dino3",
    name: "Rex",
    type: "Velociraptor",
    age: 78,
    owner: "Dr. Ellie Satler",
    adventures: [],
    health: 60,
    image: "./images/trex.jpg",
  },
  {
    id: "dino4",
    name: "Bernard",
    type: "Unknown",
    age: 900,
    owner: "Denis Nedry",
    adventures: [],
    health: 60,
    image: "./images/bernard.jpg",
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
  },
  {
    id: "dino9",
    name: "Betty",
    type: "brontosaurus",
    age: 22,
    owner: "Dr. T",
    adventures: [],
    health: 60,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOdrC7hlvBawFQ7g8vgwHcfQphX5WfeN2bth0dvc4M2oxNGdSD",
  },
];

const getDinos = () => {
  console.log(dinos);
  return dinos;
};

export { getDinos };
