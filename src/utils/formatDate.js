export function formatDate(date) {
    if (!(date instanceof Date)) {
        return null
    }
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    let year = date.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export function formatDateTime(date) {
    if (!(date instanceof Date)) {
        return null
    }

    let hour = '' + (date.getHours() + 1);
    let minute = '' + date.getMinutes();
    let second = date.getSeconds();
    let time = [hour, minute, second].join(':')
    return [formatDate(date), time].join(' ')
}