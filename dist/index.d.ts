/// <reference types="react" />
import { ButtonProps } from '@mui/material/Button';

interface MyButtonProps extends ButtonProps {
    label: string;
}
declare const ButtonUI: {
    (props: MyButtonProps): JSX.Element;
    defaultProps: {
        color: string;
        size: string;
        variant: string;
    };
};

export { ButtonUI };
