import { ITaskTableProps } from './ITaskTableProps';
import TableHeader from './TableHeader/TableHeader';
import classes from './TaskTable.module.scss';

const TaskTable: React.FC<ITaskTableProps> = (props: ITaskTableProps) => {
    const { currentQuarter } = props;

    const { months } = currentQuarter;

    return (
        <table className={classes.root}>
            <TableHeader months={months} />
        </table>
    );
};

export default TaskTable;
