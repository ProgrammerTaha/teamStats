/*

create and extract information about your favorite sports team using data structures arrays and objects

% manipulate these data structures
% gain insights from them

! get the total number of games your team has played
! the average score of all of their games

*/

const team = {
  _players: [
    {
      firstName: 'Taha',
      lastName: 'Saad',
      age: 24
    }, {
      firstName: 'Furqan',
      lastName: 'Jamal',
      age: 24
    }, {
      firstName: 'Ahmad',
      lastName: 'Emara',
      age: 35
    }
  ],
  _games: [
    {
      opponent: 'Barshallona',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Riyal',
      teamPoints: 50,
      opponentPoints: 50
    },
    {
      opponent: 'Saudi Arabia',
      teamPoints: 20,
      opponentPoints: 22
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age,
    };
    return this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints,
    };
    return this._games.push(game);
  },
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Egypt', 30, 20);
team.addGame('Iraq', 40, 10);
team.addGame('Kwait', 20, 20);

// console.log(team._players);
// console.log(team._games);