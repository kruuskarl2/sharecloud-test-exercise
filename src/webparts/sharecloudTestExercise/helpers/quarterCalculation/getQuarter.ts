import { getQuarterNumberByDate } from './getQuarterNumberByDate';
import { getClosestWeekDay } from './getClosestWeekDay';
import { IQuarter } from './IQuarter';

const getQuarter = (date: Date = new Date()): IQuarter => {
    const quarter = getQuarterNumberByDate(date);

    const lastMonthIndex = quarter * 3;
    const firstMonthIndex = lastMonthIndex - 3;

    const year = date.getFullYear();

    const firstMonthDate = getClosestWeekDay(
        1,
        new Date(year, firstMonthIndex, 1)
    );
    const lastMonthDate = getClosestWeekDay(
        0,
        new Date(year, lastMonthIndex, 0)
    );

    return {
        startDate: firstMonthDate,
        endDate: lastMonthDate,
        year,
        quarterNumber: quarter,
    };
};

export { getQuarter };
