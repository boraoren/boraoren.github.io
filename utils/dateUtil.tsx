import { DateTime } from "luxon";

export const dateToDay = (date: string) => {
    return DateTime.fromFormat(date, 'yyyy/MM/dd');
}

export const monthNumberToMonthName = (monthNumber: number) => {
    const date = new Date();
    date.setMonth(monthNumber-1);

    return date.toLocaleString('en-US', {
        month: 'short',
    });
}
