const getPreviousWeekDay = (dayIndex: number, date: Date): Date => {
    let previousDay: null | Date = null;

    for (let i = 0; !previousDay; i++) {
        const previousDate = new Date(date.getTime());
        previousDate.setDate(date.getDate() - i);

        if (previousDate.getDay() === dayIndex) {
            previousDay = previousDate;
        }
    }

    return previousDay;
};

const getPreviousMonday = (date: Date): Date => {
    return getPreviousWeekDay(1, date);
};

export { getPreviousWeekDay, getPreviousMonday };
