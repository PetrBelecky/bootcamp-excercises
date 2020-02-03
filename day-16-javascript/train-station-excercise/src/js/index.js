const departures = [
  494,
  499,
  500,
  517,
  520,
  523,
  530,
  556,
  563,
  576,
  586,
  613,
  625
];

let departuresObj = [];

const outputEl = document.querySelector('.output__body');

for (let index = 0; index < departures.length; index += 1) {
  // calculate army time
  let hours = Math.ceil(departures[index] / 60);
  let minutes = departures[index] % 60;
  let status = null;
  let randomNum = Math.floor(Math.random() * 10);
  let destination = null;

  // make random decision on status
  if (randomNum % 2 === 0) {
    status = 'On Time';
  } else {
    status = 'Delayed';
  }

  // make random decision on destination
  switch (randomNum) {
    case 0:
      destination = 'Hradec Králové';
      break;
    case 1:
      destination = 'Prague';
      break;
    case 2:
      destination = 'Bratislava';
      break;
    case 3:
      destination = 'Beroun';
      break;
    case 4:
      destination = 'Plzeň';
      break;
    case 5:
      destination = 'Ostrava';
      break;
    case 6:
      destination = 'Brno';
      break;
    case 7:
      destination = 'České Budějovice';
      break;
    case 8:
      destination = 'Písek';
      break;
    case 9:
      destination = 'Ústí nad Labem';
      break;
    case 10:
      destination = 'Liberec';
      break;
  }

  // populate array of objects
  let time = {
    hours: hours,
    minutes: minutes,
    status: status,
    destination: destination
  };

  departuresObj.push(time);
}

// print array of objects to page

departuresObj.forEach(departure => {
  if (departure.status === 'On Time') {
    outputEl.innerHTML += `<tr> 
    <td> ${departure.hours}:${departure.minutes} </td> 
    <td> ${departure.destination}</td>
    <td class="output__item--ontime"> ${departure.status}</td>
    </tr>`;
  } else {
    outputEl.innerHTML += `<tr> 
    <td> ${departure.hours}:${departure.minutes} </td> 
    <td> ${departure.destination}</td>
    <td class="output__item--delayed"> ${departure.status}</td>
    </tr>`;
  }
});

console.log(departuresObj);
