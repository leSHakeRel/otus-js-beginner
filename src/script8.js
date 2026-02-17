export function getDateFromString(dateString){
    const [day, month, year] = dateString.split('.');
    return new Date(`${year}-${month}-${day}`);
}

export function getDayOfWeek(date){
    return date.toLocaleString('ru-ru', {weekday:'long'})
}

export function getMinutesFrom(currentDate){
    return currentDate.getHours() + currentDate.getMinutes();
}

const promptDate = prompt("Enter date (DD.MM.YYYY");

const userDate = getDateFromString(promptDate);
console.log(getDayOfWeek(userDate));

console.log(getMinutesFrom(new Date(Date.now())));

export function getYounger(fDate, sDate){
    return fDate.getTime() > sDate.getTime() ? fDate : sDate;
}

console.log(getYounger(getDateFromString('18.11.1985'), getDateFromString('19.11.1985')))
