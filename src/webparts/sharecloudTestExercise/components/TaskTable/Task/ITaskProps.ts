import { ITask } from '../../../context/ITask';
import { IMonth } from '../../../helpers/quarterCalculation/IQuarter';

export interface ITaskProps {
    task: ITask;
    months: IMonth[];
    onModifyTask: (taskIndex: number) => void;
    index: number;
}
