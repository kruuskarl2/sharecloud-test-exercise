import { useRef, useState } from 'react';
import { ITaskDialogProps } from './ITaskDialogProps';
import classes from './TaskDialog.module.scss';
import { useTaskContext } from '../../context/TaskContext';

const TaskDialog: React.FC<ITaskDialogProps> = (props: ITaskDialogProps) => {
    const { onClose } = props;

    const [error, setError] = useState('');

    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const startDateRef = useRef<HTMLInputElement>(null);
    const endDateRef = useRef<HTMLInputElement>(null);

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
        newTasks.push({
            startDate,
            endDate,
            title,
            description,
        });
        setTasks(newTasks);

        onClose();
    };

    return (
        <div className={classes.root}>
            <div className={classes.dialog}>
                <h3 className={classes.header}>Create a new task</h3>
                <input
                    type="text"
                    ref={titleRef}
                    className={classes.input__title}
                    placeholder="Title"
                    maxLength={30}
                />
                <textarea
                    ref={descriptionRef}
                    className={classes.input__description}
                    placeholder="Description"
                />
                <div className={classes.dates}>
                    <div>
                        <label htmlFor="">Start Date</label>
                        <input
                            type="date"
                            ref={startDateRef}
                            className={classes.input__date}
                            name={'startDate'}
                        />
                    </div>
                    <div>
                        <label htmlFor="endDate">End Date</label>
                        <input
                            type="date"
                            ref={endDateRef}
                            className={classes.input__date}
                            name={'endDate'}
                        />
                    </div>
                </div>
                <span>{error}</span>
                <div className={classes.actions}>
                    <button
                        className={classes.actionButton}
                        onClick={onModifyTasks}
                    >
                        Create
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
