import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'John Woodrow',
    lastName: 'Wilson',
    likescore: 10,
  });

  function handlePlusClick() {
    // const nextPlayer = { ...player, likescore: player.likescore+1 };
    // player.likescore++;
    // setPlayer(nextPlayer)
    // console.log(player)
    setPlayer({
      ...player,
      likescore: player.likescore+1 
    });
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
    // console.log(player)
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value
    });
    // console.log(player)
  }

  return (
    <>
      <label>
        Like Score: <b>{player.likescore}</b>
        {'  '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}
