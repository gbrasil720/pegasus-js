import { Utils } from '../../../utils';
export default class Generators extends Utils {
    generateRandomCharacter(length: number): string;
    generateRandomNumber(length: number): string;
    generateRandomString(length: number): string;
    generateRandomDate(): Date;
    generateRandomNumberBetween(min: number, max: number): number;
}
