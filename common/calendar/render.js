import formatCalendar from './calendar.js';
let calendar={
	getLunar(year,month,date){
		return formatCalendar.solar2lunar(year,month,date);
	}
}
export default calendar