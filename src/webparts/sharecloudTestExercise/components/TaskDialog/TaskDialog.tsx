import { useRef, useState } from 'react';

import { ITaskDialogProps } from './ITaskDialogProps';
import { useTaskContext } from '../../context/TaskContext';

import classes from './TaskDialog.module.scss';

const TaskDialog: React.FC<ITaskDialogProps> = (props: ITaskDialogProps) => {
    const { onClose, header, action, taskIndex } = props;

    const [error, setError] = useState('');

    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const startDateRef = useRef<HTMLInputElement>(null);
    const endDateRef = useRef<HTMLInputElement>(null);

    const taskIndexExists = taskIndex !== undefined;

    const { tasks, setTasks } = useTaskContext();

    const onModifyTasks = (): void => {
        const title = titleRef.current?.value;
        const description = descriptionRef.current?.value;
        const startDate = startDateRef.current?.valueAsDate;
        const endDate = endDateRef.current?.valueAsDate;

        if (!title || !description || !startDate || !endDate) {
            setError('All fields are required.');
            return;
        }

        if (endDate.getTime() < startDate.getTime()) {
            setError('Start date cannot be later than end date.');
            return;
        }

        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(0, 0, 0, 0);

        const newTasks = [...tasks];
        const newTask = {
            startDate,
            endDate,
            title,
            description,
        };

        if (taskIndexExists) newTasks[taskIndex] = newTask;
        else newTasks.push(newTask);

        setTasks(newTasks);

        onClose();
    };

    const defaultTitle = taskIndexExists ? tasks[taskIndex].title : '';
    const defaultDesc = taskIndexExists ? tasks[taskIndex].description : '';
    const defaultStartDate = taskIndexExists
        ? tasks[taskIndex].startDate
        : null;
    const defaultEndDate = taskIndexExists ? tasks[taskIndex].endDate : null;

    return (
        <div className={classes.root}>
            <div className={classes.dialog}>
                <h3 className={classes.header}>{header}</h3>
                <input
                    type="text"
                    ref={titleRef}
                    className={classes.input__title}
                    placeholder="Title"
                    maxLength={30}
                    defaultValue={defaultTitle}
                />
                <textarea
                    ref={descriptionRef}
                    className={classes.input__description}
                    placeholder="Description"
                    defaultValue={defaultDesc}
                />
                <div className={classes.dates}>
                    <div className={classes.dateContainer}>
                        <label htmlFor="">Start Date</label>
                        <input
                            type="date"
                            ref={startDateRef}
                            className={classes.input__date}
                            name={'startDate'}
                            defaultValue={defaultStartDate?.toLocaleDateString(
                                'en-CA'
                            )}
                        />
                    </div>
                    <div className={classes.dateContainer}>
                        <label htmlFor="endDate">End Date</label>
                        <input
                            type="date"
                            ref={endDateRef}
                            className={classes.input__date}
                            name={'endDate'}
                            defaultValue={defaultEndDate?.toLocaleDateString(
                                'en-CA'
                            )}
                        />
                    </div>
                </div>
                <span>{error}</span>
                <div className={classes.actions}>
                    <button
                        className={classes.actionButton}
                        onClick={onModifyTasks}
                    >
                        {action}
                    </button>
                    <button className={classes.actionButton} onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskDialog;
