import { IQuarterPickerProps } from './IQuarterPickerProps';
import classes from './QuarterPicker.module.scss';

const QuarterPicker: React.FC<IQuarterPickerProps> = (
    props: IQuarterPickerProps
) => {
    const { currentQuarter, goToNextQuarter, goToLastQuarter } = props;

    const { index, year } = currentQuarter;

    const quarterInfo = `Quarter ${index + 1}, ${year}`;

    return (
        <div className={classes.root}>
            <button
                onClick={goToLastQuarter}
                className={classes.changeQuarterButton__previous}
            />
            <span className={classes.quarter}>{quarterInfo}</span>
            <button
                onClick={goToNextQuarter}
                className={classes.changeQuarterButton__next}
            />
        </div>
    );
};

export default QuarterPicker;
