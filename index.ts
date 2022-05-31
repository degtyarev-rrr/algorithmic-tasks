// Функция принимает массив meetups,
// и возвращает суммарное количество человек, находящихся на активных митапах
 
// Пример: 
// const meetups = [
//   { name: 'JavaScript', isActive: true, members: 100 },
//   { name: 'Angular', isActive: true, members: 900 },
//   { name: 'Node', isActive: false, members: 600 },
//   { name: 'React', isActive: true, members: 500 },
// ];
// membersOnActiveMeetups(meetups); // 1500

interface Meetup {
  name: string;
  isActive: boolean;
  members: number;
}

const membersOnActiveMeetups = (meetups: Meetup[]): number => {
  return meetups.reduce((prev, item) => {
    if(item.isActive) return item.members + prev;

    return prev;
  }, 0)
}

const meetups = [
  { name: 'JavaScript', isActive: true, members: 100 },
  { name: 'Angular', isActive: true, members: 900 },
  { name: 'Node', isActive: false, members: 600 },
  { name: 'React', isActive: true, members: 500 },
];

console.log(membersOnActiveMeetups(meetups)); // 1500