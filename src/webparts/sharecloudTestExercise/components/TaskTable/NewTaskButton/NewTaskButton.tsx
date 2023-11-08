import { Suspense, lazy, useState } from 'react';
import classes from './NewTaskButton.module.scss';

const TaskDialog = lazy(
    () =>
        import(
            '../../TaskDialog' /* webpackChunkName: 'task-creation-dialog' */
        )
);

const NewTaskButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = (): void => {
        setIsOpen(true);
    };

    const onClose = (): void => {
        setIsOpen(false);
    };

    return (
        <>
            <button className={classes.root} onClick={onOpen} />
            <Suspense fallback={null}>
                {isOpen ? <TaskDialog onClose={onClose} /> : null}
            </Suspense>
        </>
    );
};

export default NewTaskButton;
