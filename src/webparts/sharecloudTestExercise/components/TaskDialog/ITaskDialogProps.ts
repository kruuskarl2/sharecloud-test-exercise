export interface ITaskDialogProps {
    taskIndex?: number;
    onClose: () => void;
    header: string;
    action: string;
}
