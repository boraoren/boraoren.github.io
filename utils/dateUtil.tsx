import { DateTime } from "luxon";

export const dateToDay = (date: string) => {
    return DateTime.fromFormat(date, 'dd/MM/yyyy').day;


}
