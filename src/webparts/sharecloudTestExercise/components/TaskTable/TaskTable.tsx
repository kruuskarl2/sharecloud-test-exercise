import { ITaskTableProps } from './ITaskTableProps';
import TableHeader from './TableHeader/TableHeader';
import classes from './TaskTable.module.scss';
import NewTaskButton from './NewTaskButton/NewTaskButton';
import { useTaskContext } from '../../context/TaskContext';
import Task from './Task/Task';
import { Suspense, lazy, useState } from 'react';

const TaskDialog = lazy(
    () =>
        import(
            '../TaskDialog' /* webpackChunkName: 'task-modification-dialog' */
        )
);

const TaskTable: React.FC<ITaskTableProps> = (props: ITaskTableProps) => {
    const { currentQuarter } = props;

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [taskIndex, setTaskIndex] = useState(0);

    const onModifyTask = (taskIndex: number): void => {
        setTaskIndex(taskIndex);
        setIsDialogOpen(true);
    };

    const onDialogClose = (): void => {
        setIsDialogOpen(false);
    };

    const { months } = currentQuarter;

    const { tasks } = useTaskContext();
    const taskElements = tasks.map((task, index) => {
        return (
            <Task
                task={task}
                key={index}
                months={months}
                onModifyTask={onModifyTask}
                index={index}
            />
        );
    });

    return (
        <>
            <table className={classes.root}>
                <TableHeader months={months} />
                {taskElements}
            </table>
            <NewTaskButton />
            <Suspense fallback={null}>
                {isDialogOpen ? (
                    <TaskDialog
                        onClose={onDialogClose}
                        taskIndex={taskIndex}
                        header={'Modify a task'}
                        action={'Modify'}
                    />
                ) : null}
            </Suspense>
        </>
    );
};

export default TaskTable;
