const users = [
    { userId: 1, userName : 'Tom', attributes: ['Nice', 'Cute'] },
    { userId: 2, userName : 'Mike', attributes: ['Lovely'] },
    { userId: 3, userName : 'Nico', attributes: ['Nice', 'Cool'] },
]

const result = users.map(user => user.attributes).flat();
const result1 = users.flatMap(user => user.attributes);

console.log('Map-Flat', result);
console.log('Flatmap', result1);

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
};

const result2 = Object.values(calendars).flatMap(item => item.map(date => date.startDate));
console.log(result2);