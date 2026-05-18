// Source - https://stackoverflow.com/a/54754427
// Posted by Abhinav Chandra, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-18, License - CC BY-SA 4.0

export function getCurrentDate(separator='/'){

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
}

let todaysDate = getCurrentDate()

export default todaysDate