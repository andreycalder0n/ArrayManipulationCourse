// const numbers = [1, 2, 3, 4, , 5, 6];

// let result = false;
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     if (element % 2 === 0) {
//         result = true;
//         break;
//     }
// }

// console.log(result);

// const result1 = numbers.some(item => item % 2 === 0);
// console.log('Result with some', result1); 

// const orders = [
//     {
//         customerName: 'Pepe',
//         total: 100,
//         delivered: true,
//     },
//     {
//         customerName: 'Juana',
//         total: 120,
//         delivered: false,
//     },
//     {
//         customerName: 'Jorge',
//         total: 50,
//         delivered: false,
//     },
//     {
//         customerName: 'Ana',
//         total: 75,
//         delivered: true,
//     },
//     {
//         customerName: 'Jina',
//         total: 80,
//         delivered: true,
//     },
// ];

// const result2 = orders.some(item => item.delivered);
// console.log('Result2', result2);

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            { start: date.startDate, end: date.endDate },
            { start: newDate.startDate, end: newDate.endDate },
        )
    })
}

console.log(isOverlap(newAppointment));