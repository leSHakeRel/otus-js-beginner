export function getDateFromString(dateString){
    const [day, month, year] = dateString.split('.');
    if(day && month && year)
        return new Date(`${year}-${month}-${day}`);
    return undefined;
}

export function getDayOfWeek(date){
    return date.toLocaleString('ru-ru', {weekday:'long'})
}

export function getMinutesFrom(currentDate){
    return currentDate.getHours() + currentDate.getMinutes();
}

export function getYounger(fDate, sDate){
    return fDate.getTime() > sDate.getTime() ? fDate : sDate;
}

const promptDate = prompt("Enter date (DD.MM.YYYY");

const userDate = getDateFromString(promptDate);
console.log(getDayOfWeek(userDate));

console.log(getMinutesFrom(new Date(Date.now())));

console.log(getYounger(getDateFromString('18.11.1985'), getDateFromString('19.11.1985')))
