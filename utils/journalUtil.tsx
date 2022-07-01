import JournalModel from "../interfaces/JournalModel";
import {monthNumberToMonthName} from "./dateUtil";

export enum SortEnum {
    ASC,
    DESC
}

export const journalUtilSortByDate = async (journals: JournalModel[], sortBy: SortEnum) => {
    journals.sort((a, b) => {
        const aDate = new Date(a.frontmatter.date).getTime();
        const bDate = new Date(b.frontmatter.date).getTime();

        if (sortBy === SortEnum.ASC) {
            return aDate - bDate;
        }

        return bDate - aDate;

    })

}

export const journalUtilGetJournalsByYearsWithMonths = (journals: JournalModel[]) => {
    const years = [];
    const months: JournalModel[] = [];

    journals.forEach((journal)=>{
        const date = new Date(journal.frontmatter.date);
        const year = date.getFullYear();
        const month = date.getMonth();

        if(years[`_${year}`] === undefined){
            years[`_${year}`] = [];
        }

        if(months[`_${month}`] === undefined){
            months[`_${month}`] = [];
        }

        months[`_${month}`] = [...months[`_${month}`] , journal];
        years[`_${year}`] = months;
    })


    return years;

}
