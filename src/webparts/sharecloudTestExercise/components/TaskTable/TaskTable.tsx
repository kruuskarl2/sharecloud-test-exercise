import TaskContextProvider from '../../context/TaskContext';
import { ITaskTableProps } from './ITaskTableProps';
import TableHeader from './TableHeader/TableHeader';
import classes from './TaskTable.module.scss';
import NewTaskButton from './NewTaskButton/NewTaskButton';

const TaskTable: React.FC<ITaskTableProps> = (props: ITaskTableProps) => {
    const { currentQuarter } = props;

    const { months } = currentQuarter;

    return (
        <TaskContextProvider>
            <table className={classes.root}>
                <TableHeader months={months} />
            </table>
            <NewTaskButton />
        </TaskContextProvider>
    );
};

export default TaskTable;
