const horses = document.querySelectorAll('.horse');
const play = document.querySelector('.play');
const resultRace = document.querySelector('#resultRace');
const positions = {};

const horseRace = () => {
  document.body.removeEventListener('click', horseRace)
  const startRace = setInterval(function(){
    const horseIndex = Math.floor(Math.random() * horses.length);
    const selectedHorse = horses[horseIndex];
    const previousPosition = positions[horseIndex] || 0;
    selectedHorse.style.left = `${previousPosition + 8}px`;
    positions[horseIndex] = previousPosition + 8;

    const widthScreen = document.body.offsetWidth;

    if (positions[horseIndex] > widthScreen){
      clearInterval(startRace);
      const winnerHorse = horses[horseIndex];
      const h1Finished = document.createElement('h1');
      const textFinished = document.createTextNode('THE WINNER IS');
      h1Finished.appendChild(textFinished);
      const selectedWinnerHorse = winnerHorse.cloneNode(true);
      selectedWinnerHorse.id = 'winner';
      selectedWinnerHorse.style.left = '60px';
      selectedWinnerHorse.style.marginTop = '10px';
      selectedWinnerHorse.style.transition = 'all 1s';
      h1Finished.style.display = 'flex';
      h1Finished.style.justifyContent = 'flexStart';
      resultRace.appendChild(h1Finished) + resultRace.appendChild(selectedWinnerHorse);
    }   
  },30)
}

play.addEventListener('click', horseRace);