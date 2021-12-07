const students = [
    {id: 21, name:'Omar Sunny'},
    {id: 31, name:'Maanaaaa'},
    {id: 41, name:'Moyouri'},
    {id: 21, name:'Shuvo'},
    {id: 71, name:'Deepjol'},
];

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter( s => s.id>40);
console.log(bigger);