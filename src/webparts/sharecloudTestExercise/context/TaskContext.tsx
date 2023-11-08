import {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useState,
} from 'react';
import { ITask } from './ITask';

type TaskContextType = {
    tasks: ITask[];
    setTasks: Dispatch<SetStateAction<ITask[]>>;
};

export const TaskContext = createContext<TaskContextType | null>(null);

export const SectionProvider = ({
    children,
}: PropsWithChildren<{}>): JSX.Element => {
    const [tasks, setTasks] = useState([]);

    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    );
};

export default SectionProvider;
