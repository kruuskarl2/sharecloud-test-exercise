import { IQuarter } from '../../helpers/quarterCalculation/IQuarter';

export interface IQuarterPickerProps {
    currentQuarter: IQuarter;
    goToLastQuarter: () => void;
    goToNextQuarter: () => void;
}
