import { useState } from 'react';
import classes from './SharecloudTestExercise.module.scss';
import type { ISharecloudTestExerciseProps } from './ISharecloudTestExerciseProps';
import { getQuarter } from '../helpers/quarterCalculation/getQuarter';
import { IQuarter } from '../helpers/quarterCalculation/IQuarter';
import QuarterPicker from './QuarterPicker';
import TaskTable from './TaskTable';
import TaskContextProvider from '../context/TaskContext';

const SharecloudTestExercise: React.FC<ISharecloudTestExerciseProps> = () => {
    const [currentQuarter, setCurrentQuarter] = useState<IQuarter>(
        getQuarter()
    );

    const goToLastQuarter = (): void => {
        const { startDate } = currentQuarter;
        startDate.setDate(startDate.getDate() - 7);
        setCurrentQuarter(getQuarter(startDate));
    };

    const goToNextQuarter = (): void => {
        const { endDate } = currentQuarter;
        endDate.setDate(endDate.getDate() + 7);
        setCurrentQuarter(getQuarter(endDate));
    };

    return (
        <div className={classes.root}>
            <TaskContextProvider>
                <QuarterPicker
                    currentQuarter={currentQuarter}
                    goToLastQuarter={goToLastQuarter}
                    goToNextQuarter={goToNextQuarter}
                />
                <TaskTable currentQuarter={currentQuarter} />
            </TaskContextProvider>
        </div>
    );
};

export default SharecloudTestExercise;
