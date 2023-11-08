const getClosestWeekDay = (dayIndex: number, date: Date): Date => {
    if (date.getDay() === dayIndex) return date;

    let closestDay: null | Date = null;

    for (let i = 1; !closestDay; i++) {
        const nextDate = new Date(date.getTime());
        nextDate.setDate(date.getDate() + i);

        const previousDate = new Date(date.getTime());
        previousDate.setDate(date.getDate() - i);

        if (nextDate.getDay() === dayIndex) {
            closestDay = nextDate;
        } else if (previousDate.getDay() === dayIndex) {
            closestDay = previousDate;
        }
    }

    return closestDay;
};

const getClosestMonday = (date: Date): Date => {
    return getClosestWeekDay(1, date);
};

const getClosestSunday = (date: Date): Date => {
    return getClosestWeekDay(0, date);
};

export { getClosestWeekDay, getClosestMonday, getClosestSunday };
