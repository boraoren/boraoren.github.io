import { DateTime } from "luxon";

export const dateToDay = (date: string) => {
    console.log("DATE", date);
    return DateTime.fromFormat(date, 'yyyy/MM/dd').day;


}
