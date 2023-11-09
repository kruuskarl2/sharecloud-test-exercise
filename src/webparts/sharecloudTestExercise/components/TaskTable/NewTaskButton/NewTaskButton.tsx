import { Suspense, lazy, useState } from 'react';
import classes from './NewTaskButton.module.scss';
import { useTaskContext } from '../../../context/TaskContext';

const TaskDialog = lazy(
    () =>
        import(
            '../../TaskDialog' /* webpackChunkName: 'task-creation-dialog' */
        )
);

const NewTaskButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { tasks } = useTaskContext();

    const onOpen = (): void => {
        setIsOpen(true);
    };

    const onClose = (): void => {
        setIsOpen(false);
    };

    const isDisabled = tasks.length >= 10;

    return (
        <>
            <button
                className={classes.root}
                onClick={onOpen}
                disabled={isDisabled}
            />
            <Suspense fallback={null}>
                {isOpen ? (
                    <TaskDialog
                        onClose={onClose}
                        header={'Create a new task'}
                        action={'Create'}
                    />
                ) : null}
            </Suspense>
        </>
    );
};

export default NewTaskButton;
