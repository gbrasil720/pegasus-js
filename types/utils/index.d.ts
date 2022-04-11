import { NodeLib } from '../types/node/node';
export declare class Utils {
    protected colorizeString({ symbol, message }: NodeLib.Utils.ColorizeString): void;
    protected verifyFileExtension(dir: string): void;
    protected validateColor(props: NodeLib.Utils.ValidateColor): boolean;
    protected charsGenerator(props: NodeLib.Utils.CharsGenerator): string;
}
