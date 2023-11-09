import { getPreviousMonday } from './getPreviousWeekDay';

const getQuarterNumberByDate = (date: Date = new Date()): number => {
    const previousMonday = getPreviousMonday(date);

    const mondaysMonth = previousMonday.getMonth();

    let daysInMondaysMonth = 0;
    for (let i = 0; i < 7; i++) {
        const weekDay = new Date(previousMonday.getTime());
        weekDay.setDate(previousMonday.getDate() + i);

        if (weekDay.getMonth() === mondaysMonth) {
            daysInMondaysMonth += 1;
        }
    }

    let monthIndex = mondaysMonth;
    if (daysInMondaysMonth <= 3) {
        monthIndex += 1;
        if (monthIndex === 12) {
            monthIndex = 0;
        }
    }

    return Math.ceil((monthIndex + 1) / 3);
};

export { getQuarterNumberByDate };
