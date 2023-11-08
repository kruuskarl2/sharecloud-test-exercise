export interface IWeek {
    startDate: Date;
    endDate: Date;
    index: number;
}

export interface IMonth {
    startDate: Date;
    endDate: Date;
    weekAmount: number;
    name: string;
    weeks: IWeek[];
}

export interface IQuarter {
    startDate: Date;
    endDate: Date;
    year: number;
    index: number;
    months: IMonth[];
}
