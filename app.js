let yearOfBirth = Number(prompt('Введіть ваш рік народження'));
if(!yearOfBirth) {
  alert('Шкода що Ви не захотіли ввести свій рік народження');
  yearOfBirth = '????';
}
let city = prompt('Введіть ваше місто');
if(!city) {
  alert('Шкода що Ви не захотіли ввести своє місто');
  city = '????';
} else {
  city = city.toLowerCase();
}
let favSport = prompt('Введіть ваш улюблений спорт');
if(!favSport) {
  alert('Шкода що Ви не захотіли ввести свій улюблений спорт');
  favSport = '????';
} else {
  favSport = favSport.toLowerCase();
}

let cityMessage = '';
switch(city) {
  case('київ') : 
    cityMessage = `Ти живеш у Київі - столиці України.`;
    break;
  case('лондон') : 
    cityMessage = `Ти живеш у Лондоні - столиці Великої Британії.`;
    break;
  case('вашингтон') : 
    cityMessage = `Ти живеш у Вашингтоні - столиці США.`;
    break;
  default:
    cityMessage = `Ти живеш у ${city}.`;
}

let sportMessage = '';
switch(favSport) {
  case('футбол') : 
    sportMessage = `Твій улюблений спорт - футбол. Круто! Хочешь стати Рональдо!`;
    break;
  case('теніс') : 
    sportMessage = `Твій улюблений спорт - теніс. Круто! Хочешь стати Новаком Джоковичем!`;
    break;
  case('баскетбол') : 
    sportMessage = `Твій улюблений спорт - баскетбол. Круто! Хочешь стати Майклом Джорданом!`;
    break;
  default:
    sportMessage = `Твій улюблений спорт ${favSport}.`;
}

const today = new Date();
const currentYear = today.getFullYear();
const age = currentYear - yearOfBirth;

alert(`Тобі ${age} років. ${cityMessage} ${sportMessage}`);
