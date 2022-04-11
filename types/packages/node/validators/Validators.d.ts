import { Utils } from '../../../utils';
import { NodeLib } from '../../../types/node/node';
export default class Validators extends Utils {
    isEmail(email: string): boolean;
    isUrl(url: string): boolean;
    isDate(date: string): boolean;
    isColorValid(props: NodeLib.Validators.isColorValid): boolean;
}
