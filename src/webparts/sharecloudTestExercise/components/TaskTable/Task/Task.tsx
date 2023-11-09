import { formatDate } from '../../../helpers/formatting/formatDate';
import { ITaskProps } from './ITaskProps';
import classes from './Task.module.scss';

const Task: React.FC<ITaskProps> = (props: ITaskProps) => {
    const { task, months, onModifyTask, index } = props;

    const { title, startDate, endDate, description } = task;

    const weekCells: JSX.Element[] = [];

    months.forEach((month) => {
        month.weeks.forEach((week) => {
            const taskContainsWeek =
                startDate <= week.startDate && endDate >= week.endDate;

            const weekContainsStartDate =
                week.startDate <= startDate && week.endDate >= startDate;
            const weekContainsEndDate =
                week.startDate <= endDate && week.endDate >= endDate;

            const isActive =
                taskContainsWeek ||
                weekContainsStartDate ||
                weekContainsEndDate;

            const weekCell = (
                <td className={classes.weekCell} key={week.index}>
                    {isActive ? <div className={classes.activeLine} /> : null}
                </td>
            );

            weekCells.push(weekCell);
        });
    });

    return (
        <tr className={classes.root} onClick={() => onModifyTask(index)}>
            <td>{title}</td>
            <td>{formatDate(startDate)}</td>
            <td>{formatDate(endDate)}</td>
            {weekCells}
            <div className={classes.description}>
                <div className={classes.textContent}>{description}</div>
            </div>
        </tr>
    );
};

export default Task;
