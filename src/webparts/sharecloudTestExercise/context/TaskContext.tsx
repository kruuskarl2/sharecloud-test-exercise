import {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from 'react';

import { ITask } from './ITask';

type TaskContextType = {
    tasks: ITask[];
    setTasks: Dispatch<SetStateAction<ITask[]>>;
};

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskContextProvider = ({
    children,
}: PropsWithChildren<{}>): JSX.Element => {
    const [tasks, setTasks] = useState([]);

    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = (): TaskContextType => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error(
            'useTaskContext must be used inside the TaskContextProvider'
        );
    }

    return context;
};

export default TaskContextProvider;
