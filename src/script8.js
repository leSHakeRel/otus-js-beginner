export function getDateFromString(dateString){
    if (!dateString || typeof dateString !== 'string') {
        return undefined;
    }

    const [day, month, year] = dateString.split('.');
    if(day && month && year)
        return new Date(Date.parse(`${year}-${month}-${day}`));
    return undefined;
}

export function getDayOfWeek(date){
    if (!date || typeof date !== 'object') {
        return undefined;
    }
    return date.toLocaleString('ru-ru', {weekday:'long'});
}

export function getMinutesFrom(currentDate){
    if (!currentDate || typeof currentDate !== 'object') {
        return undefined;
    }
    return currentDate.getHours() * 60 + currentDate.getMinutes();
}

export function getYounger(fDate, sDate){
    if (!(fDate instanceof Date) || !(sDate instanceof Date) ||
        isNaN(fDate) || isNaN(sDate)) {
        return undefined;
    }
    return fDate.getTime() > sDate.getTime() ? fDate : sDate;
}

const promptDate = prompt("Enter date (DD.MM.YYYY");

const userDate = getDateFromString(promptDate);
console.log(getDayOfWeek(userDate));

console.log(getMinutesFrom(new Date(Date.now())));

console.log(getYounger(getDateFromString('18.11.1985'), getDateFromString('19.11.1985')));
