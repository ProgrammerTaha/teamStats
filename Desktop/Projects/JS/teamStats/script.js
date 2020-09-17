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
};