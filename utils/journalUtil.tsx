import JournalModel from "../interfaces/JournalModel";

export enum SortEnum {
    ASC,
    DESC
}

export const journalUtilSortByDate = (journals: JournalModel[], sortBy: SortEnum) => {
    journals.sort((a, b) => {
        const aDate = new Date(a.frontmatter.date).getTime();
        const bDate = new Date(b.frontmatter.date).getTime();

        if (sortBy === SortEnum.ASC) {
            return aDate - bDate;
        }

        return bDate - aDate;

    })

}
