import { getQuarterNumberByDate } from './getQuarterNumberByDate';
import { IQuarter, IMonth, IWeek } from './IQuarter';
import { getClosestMonday, getClosestSunday } from './getClosestWeekDay';

const getQuarter = (date: Date = new Date()): IQuarter => {
    const quarter = getQuarterNumberByDate(date);
    const quarterIndex = quarter - 1;

    const firstMonthIndex = quarterIndex * 3;

    const year = date.getFullYear();

    const months: IMonth[] = [];
    let totalWeekIndex = 0;

    for (let i = 0; i < 3; i++) {
        const monthStartDate = new Date(year, firstMonthIndex + i);
        const monthEndDate = new Date(year, firstMonthIndex + i + 1, 0);

        const monthName = monthStartDate.toLocaleString('default', {
            month: 'short',
        });

        const startingMonday = getClosestMonday(monthStartDate);
        const endingSunday = getClosestSunday(monthEndDate);

        let weekAmount = 0;
        const counterDate = new Date(startingMonday.getTime());
        const weeks: IWeek[] = [];

        while (
            counterDate.getTime() >= startingMonday.getTime() &&
            counterDate.getTime() < endingSunday.getTime()
        ) {
            const startDate = new Date(counterDate.getTime());

            const endDate = new Date(startDate.getTime());
            endDate.setDate(counterDate.getDate() + 6);

            weeks[weekAmount] = {
                startDate,
                endDate,
                index: totalWeekIndex,
            };

            counterDate.setDate(counterDate.getDate() + 7);

            weekAmount += 1;
            totalWeekIndex += 1;
        }

        months[i] = {
            startDate: startingMonday,
            endDate: endingSunday,
            name: monthName,
            weekAmount,
            weeks,
        };
    }

    const startDate = months[0].startDate;
    const endDate = months[2].endDate;

    return {
        startDate,
        endDate,
        year,
        index: quarterIndex,
        months,
    };
};

export { getQuarter };
