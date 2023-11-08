import { useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { ITaskTableProps } from './ITaskTableProps';
import TableHeader from './TableHeader/TableHeader';
import classes from './TaskTable.module.scss';
import NewTaskButton from './NewTaskButton/NewTaskButton';

const TaskTable: React.FC<ITaskTableProps> = (props: ITaskTableProps) => {
    const [tasks, setTasks] = useState([]);

    const { currentQuarter } = props;

    const { months } = currentQuarter;

    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            <table className={classes.root}>
                <TableHeader months={months} />
            </table>
            <NewTaskButton />
        </TaskContext.Provider>
    );
};

export default TaskTable;
