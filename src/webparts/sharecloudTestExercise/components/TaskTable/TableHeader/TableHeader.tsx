import { ITableHeaderProps } from './ITableHeaderProps';
import classes from './TableHeader.module.scss';

const TableHeader: React.FC<ITableHeaderProps> = (props: ITableHeaderProps) => {
    const { months } = props;

    const weekColumns: JSX.Element[] = [];

    const monthColumns = months.map((month, index) => {
        const { name, weekAmount } = month;

        const newWeekColumns = month.weeks.map((week) => {
            const weekNumber = week.index + 1;

            return (
                <th className={classes.weekNumber} key={week.index}>
                    {weekNumber}
                </th>
            );
        });

        weekColumns.push(...newWeekColumns);

        return (
            <th key={index} colSpan={weekAmount} className={classes.header}>
                {name}
            </th>
        );
    });

    return (
        <>
            <tr>
                <th colSpan={3} />
                {monthColumns}
            </tr>
            <tr>
                <th className={classes.header}>Task name</th>
                <th className={classes.header}>Start date</th>
                <th className={classes.header}>End date</th>
                {weekColumns}
            </tr>
        </>
    );
};

export default TableHeader;
