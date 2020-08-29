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

const getDinos = () => {
    return dinos
}

export { getDinos }