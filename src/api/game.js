export const gamesFromApi = [
  {
    id: 5,
    name: "Final Fantasy XII",
    description: "lorems ipsiumm lorems ipsiumm vlorems ipsiumm lorems ipsiumm",
    genre: ["RPG", "Long Play"],
    ratingPercent: 89,
    creationDate: {
      year: 2021,
      month: 4,
      day: 5,
    },
    gameTimes: [
      {
        id: 6,
        name: "Main+extras",
        timeInHours: 120,
        creationDate: {
          year: 2021,
          month: 4,
          day: 5,
        },
      },
      {
        id: 5,
        name: "Main",
        timeInHours: 90,
        creationDate: {
          year: 2021,
          month: 4,
          day: 5,
        },
      },
    ],
  },
  {
    id: 8,
    name: ".hack G.U.",
    description: "lorem ipsium lorem ipsium lorem ipsium 2",
    genre: ["rpg", " action"],
    ratingPercent: 99,
    creationDate: {
      year: 2021,
      month: 4,
      day: 6,
    },
    gameTimes: [
      {
        id: 8,
        name: "Main+Extras",
        timeInHours: 59,
        creationDate: {
          year: 2021,
          month: 4,
          day: 6,
        },
      },
      {
        id: 7,
        name: "Main",
        timeInHours: 89,
        creationDate: {
          year: 2021,
          month: 4,
          day: 6,
        },
      },
    ],
  },
  {
    id: 9,
    name: "God of War",
    description: "lorem ipsium lorem ipsium lorem ipsium 2",
    genre: ["action", "long-play", "adventure"],
    ratingPercent: 75,
    creationDate: {
      year: 2021,
      month: 4,
      day: 6,
    },
    gameTimes: [
      {
        id: 11,
        name: "Main",
        timeInHours: 22,
        creationDate: {
          year: 2021,
          month: 4,
          day: 6,
        },
      },
      {
        id: 10,
        name: "Main+Extras",
        timeInHours: 47,
        creationDate: {
          year: 2021,
          month: 4,
          day: 6,
        },
      },
      {
        id: 9,
        name: "Completionist",
        timeInHours: 65,
        creationDate: {
          year: 2021,
          month: 4,
          day: 6,
        },
      },
    ],
  },
  {
    id: 10,
    name: "Super Metroid",
    description:
      "Take on a legion of Space Pirates and a new Metroid force as you forge into the underworld of Planet Zebes! It's up to you and Samus to recapture the long-surviving Metroid hatchling before evil hands unleash its energy. An army of ominous creatures ...",
    genre: ["Action", " Adventure"],
    ratingPercent: 90,
    creationDate: {
      year: 2021,
      month: 5,
      day: 15,
    },
    gameTimes: [
      {
        id: 14,
        name: "All Styles",
        timeInHours: 8,
        creationDate: {
          year: 2021,
          month: 5,
          day: 15,
        },
      },
      {
        id: 12,
        name: "Completionist",
        timeInHours: 9,
        creationDate: {
          year: 2021,
          month: 5,
          day: 15,
        },
      },
      {
        id: 15,
        name: "Main Story",
        timeInHours: 7,
        creationDate: {
          year: 2021,
          month: 5,
          day: 15,
        },
      },
      {
        id: 13,
        name: "Main + Extras",
        timeInHours: 8,
        creationDate: {
          year: 2021,
          month: 5,
          day: 15,
        },
      },
    ],
  },
  {
    id: 11,
    name: "Super Mario World",
    description:
      "Mario's off on his biggest adventure ever, and this time he's brought along a friend. Yoshi the dinosaur teams up with Mario to battle Bowser, who has kidnapped Princess Toadstool once again. Guide Mario and Yoshi through nine peril-filled worlds to ...",
    genre: [""],
    ratingPercent: 89,
    creationDate: {
      year: 2021,
      month: 5,
      day: 15,
    },
    gameTimes: [
      {
        id: 18,
        name: "All Styles",
        timeInHours: 6,
        creationDate: {
          year: 2021,
          month: 5,
          day: 15,
        },
      },
      {
        id: 19,
        name: "Main Story",
        timeInHours: 5,
        creationDate: {
          year: 2021,
          month: 5,
          day: 15,
        },
      },
      {
        id: 17,
        name: "Main + Extras",
        timeInHours: 7,
        creationDate: {
          year: 2021,
          month: 5,
          day: 15,
        },
      },
      {
        id: 16,
        name: "Completionist",
        timeInHours: 10,
        creationDate: {
          year: 2021,
          month: 5,
          day: 15,
        },
      },
    ],
  },
];

export const sendNewGameForSearch = (gameForSearch) => {
  const body = `{ searchTerm: ${gameForSearch}}`
  const options = {
    method: 'POST',
    body: body
  }

  return fetch('http://localhost:8080/ps4library/searchQueue', options)
};

export const getAllGamesInQueue = () => {
  fetch('http://localhost:8080/ps4library/searchQueue')
    .then(resp => {
      console.log("Status: ", resp.status)
      return resp.json()
    })
    .then(games => {
      console.log(games)
    })
    .catch(err => {
      console.error(err)
    })
}