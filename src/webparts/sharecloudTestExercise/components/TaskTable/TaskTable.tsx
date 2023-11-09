import { ITaskTableProps } from './ITaskTableProps';
import TableHeader from './TableHeader/TableHeader';
import classes from './TaskTable.module.scss';
import NewTaskButton from './NewTaskButton/NewTaskButton';
import { useTaskContext } from '../../context/TaskContext';
import Task from './Task/Task';

const TaskTable: React.FC<ITaskTableProps> = (props: ITaskTableProps) => {
    const { currentQuarter } = props;

    const { months } = currentQuarter;

    const { tasks } = useTaskContext();
    const taskElements = tasks.map((task, index) => {
        return <Task task={task} key={index} months={months} />;
    });

    return (
        <>
            <table className={classes.root}>
                <TableHeader months={months} />
                {taskElements}
            </table>
            <NewTaskButton />
        </>
    );
};

export default TaskTable;
