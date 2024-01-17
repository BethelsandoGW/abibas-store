const moment = require('moment');

type DateFormatType = [
    'YYYY-MM-DD',
    'MMMM Do YYYY',
    'dddd, MMMM Do YYYY, hh:mm:ss',
];
export const dateFormat = (date: string, format?:DateFormatType[number] | string): string => {
    try {
        return moment(date).format(format ?? 'MMMM Do YYYY');
    } catch (error) {
        return 'Input invalid';
    }
};
