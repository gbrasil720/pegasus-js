import { Utils } from '../../../utils/';
import { NodeLib } from '../../../types/node/node';
export default class LogProvider extends Utils {
    file: string;
    constructor({ filePath }: NodeLib.LogProvider.LogProviderConstructorProps);
    write(props: NodeLib.LogProvider.LogWriteProps): void;
    getAllLogs(filePath: string): any;
}
