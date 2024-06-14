const prompt = require('prompt-sync')();

console.log("--- RESERVA DE HOTEIS ---");

const hotels = [
  {
    "id": 1,
    "name": "Ocean View Resort",
    "city": "Miami",
    "totalRooms": 100,
    "availableRooms": 20
  },
  {
    "id": 2,
    "name": "Mountain Escape Lodge",
    "city": "Aspen",
    "totalRooms": 80,
    "availableRooms": 15
  },
  {
    "id": 3,
    "name": "City Central Hotel",
    "city": "New York",
    "totalRooms": 200,
    "availableRooms": 50
  },
  {
    "id": 4,
    "name": "Beachside Inn",
    "city": "Santa Monica",
    "totalRooms": 60,
    "availableRooms": 10
  },
];

const reservations = [
  {
    "reservationId": 101,
    "hotelId": 1,
    "clientName": "John Smith"
  },
  {
    "reservationId": 102,
    "hotelId": 3,
    "clientName": "Emily Johnson"
  },
  {
    "reservationId": 103,
    "hotelId": 3,
    "clientName": "Michael Brown"
  },
  {
    "reservationId": 104,
    "hotelId": 2,
    "clientName": "Sarah Davis"
  },
  {
    "reservationId": 105,
    "hotelId": 4,
    "clientName": "David Wilson"
  },
  {
    "reservationId": 106,
    "hotelId": 1,
    "clientName": "Emma Moore"
  }
];

const isHotelAvailable = (id, name) => {
  for (let i = 0; i < hotels.length; i++) {
    if (id === hotels[i].id || name === hotels[i].name) {
      return false;
    }
  }
  return true;
}

const getHotel = (hotelId) => {
  for (let i = 0; i < hotels.length; i++) {
    if (hotelId === hotels[i].id) {
      return hotels[i];
    }
  }
  return "Hotel não encontrado";
}

const getHotelId = (hotelName) => {
  for (let i = 0; i < hotels.length; i++) {
    if (hotelName === hotels[i].name) return hotels[i].id;
  }
  console.log("Hotel não encontrado ou nome digitado inválido\n");
}

const addHotel = () => {
  console.log("--- INSIRA ABAIXO OS DADOS DO HOTEL ---");
  const id = hotels[hotels.length-1].id + 1;
  const name = prompt("Nome: ");
  const city = prompt("Localização (cidade): ");
  const totalRooms = Number(prompt("Número total de quartos: "));
  const occupiedRooms = Number(prompt("Número de quartos já ocupados (se houver): "));

  if (isNaN(Number(id))) {
    console.log("Número de identificação inválido\n");
    return false;
  }
  if (isNaN(totalRooms) || totalRooms <= 0 || isNaN(occupiedRooms) || occupiedRooms < 0) {
    console.log("O número de quartos (total e ocupados) deve ser um número maior do que zero!\n");
    return false;
  }
  if (occupiedRooms > totalRooms) {
    console.log("O número de quartos ocupados não pode ser superior ao número de quartos totais!\n");
    return false;
  }

  if (!isHotelAvailable(id, name)) {
    console.log("Este hotel (ou identificador) já está cadastrado!\n");
    return false;
  }

  const newHotel = { "id": id, "name": name, "city": city, "totalRooms": totalRooms, "availableRooms": (totalRooms - occupiedRooms) };
  hotels.push(newHotel);
  console.log(`Hotel ${name} adicionado com sucesso!\n`);
  return newHotel;
}

const getHotelsByCity = (city) => {
  let quantityOfHotels = 0;
  const hotelsAvailable = []
  for (let i = 0; i < hotels.length; i++) {
    if (city === hotels[i].city) {
      hotelsAvailable.push(hotels[i]);
      quantityOfHotels++;
    }
  }

  if (quantityOfHotels === 0) {
    console.log("Não há hotéis disponíveis na cidade digitada (ou o nome dela foi digitado incorretamente)!\n");
  } else {
    console.log(`\nHotéis disponíveis em ${city} (${quantityOfHotels})\n`);
    for (let i = 0; i < hotelsAvailable.length; i++) {
      console.log(`Identificador: ${hotelsAvailable[i].id}`);
      console.log(`Hotel: ${hotelsAvailable[i].name}`);
      console.log(`Número de quartos disponíveis: ${hotelsAvailable[i].availableRooms}\n`);
    }
  }
}

const makeAReservation = (clientName, hotelId) => {
  const newReservation = {};
  const lastId = reservations[reservations.length - 1].reservationId;
  for (let i = 0; i < hotels.length; i++) {
    if (hotelId === hotels[i].id) {
      if (hotels[i].availableRooms === 0) {
        console.log("Não há quartos disponíveis neste hotel!\n");
        return false;
      }
      newReservation["reservationId"] = lastId + 1;
      newReservation["hotelId"] = hotelId;
      newReservation["clientName"] = clientName;
      hotels[i].availableRooms--;
      reservations.push(newReservation);
      console.log("Reserva feita com sucesso!\n");
      return newReservation;
    }
  }
  console.log("Número identificador do hotel inválido!\n");
}

const cancelReservation = (clientName) => {
  let foundClient = false;
  let hotelId = 0;
  for (let i = 0; i < reservations.length; i++) {
    if (clientName === reservations[i].clientName) {
      hotelId = reservations[i].hotelId;
      reservations.splice(i, 1);
      foundClient = true;
    }
  }
  if (foundClient) {
    for (let i = 0; i < hotels.length; i++) {
      if (hotelId === hotels[i].id) {
        hotels[i].availableRooms++;
        console.log("Reserva cancelada com sucesso!\n");
      }
    }
  } else {
    console.log("Cliente não encontrado!\n");
  }
}

const listReservations = () => {
  for (let i = 0; i < reservations.length; i++) {
    console.log(`\nID da reserva: ${reservations[i].reservationId}\n`);
    console.log(`--- Dados do Hotel ---\n`);
    console.log(`Identificador: ${getHotel(reservations[i].hotelId).id}`);
    console.log(`Hotel: ${getHotel(reservations[i].hotelId).name}`);
    console.log(`Cidade: ${getHotel(reservations[i].hotelId).city}`);
    console.log(`Total de quartos: ${getHotel(reservations[i].hotelId).totalRooms}`);
    console.log(`Quartos disponíveis: ${getHotel(reservations[i].hotelId).availableRooms}\n`);
    console.log(`Cliente: ${reservations[i].clientName}\n`);
  }
}

let continueExecution = true;

do {
  console.log("Digite a opção desejada");
  console.log("0 - SAIR");
  console.log("1 - ADICIONAR HOTEL");
  console.log("2 - BUSCAR HOTÉIS POR CIDADE");
  console.log("3 - FAZER RESERVA");
  console.log("4 - CANCELAR RESERVA");
  console.log("5 - LISTAR RESERVAS");

  let selectedOption = prompt("OPÇÃO: ");

  switch (selectedOption) {
    case "0":
      continueExecution = false;
      console.log("Você saiu do programa!");
      break;
    case "1":
      console.log("");
      addHotel();
      break;
    case "2":
      console.log("");
      let cityEntry = prompt("Digite o nome da cidade: ");
      getHotelsByCity(cityEntry);
      break;
    case "3":
      console.log("");
      let nameEntry = prompt("Digite o nome do cliente: ");
      let hotelIdEntry = prompt("Digite o nome ou identificador do hotel: ");
      if (isNaN(Number(hotelIdEntry))) {
        hotelIdEntry = getHotelId(hotelIdEntry);
      }
      makeAReservation(nameEntry, Number(hotelIdEntry));
      break;
    case "4":
      console.log("");
      let nameToCancel = prompt("Digite o nome do cliente cuja reserva será cancelada: ");
      cancelReservation(nameToCancel);
      break;
    case "5":
      listReservations();
      break;
    default:
      console.log("Opção digitada inválida!");
  }

} while (continueExecution);
