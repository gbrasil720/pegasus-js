import { Utils } from '../../../utils';
interface MethodProps {
    type: 'info' | 'success' | 'warning' | 'error' | 'debug';
    message: string;
    colored?: boolean;
}
export default class Logger extends Utils {
    use({ type, message, colored }: MethodProps): {
        type: "info" | "success" | "warning" | "error" | "debug";
    };
}
export {};
