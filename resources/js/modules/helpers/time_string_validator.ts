export default function (timeString : string) : boolean {
    const regularExpression = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
    return regularExpression.test(timeString);
}