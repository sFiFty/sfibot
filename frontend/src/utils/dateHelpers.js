import {
  format, isToday, isTomorrow, isYesterday,
} from 'date-fns';
import { date as tDate } from 'locales';

export const DATE_FORMAT = 'dd.MM.yyyy';
export const TIME_FORMAT = 'HH:mm';

export const transformDayView = (date, translate) => {
  const parsedDate = new Date(date);
  if (isToday(parsedDate)) {
    return translate(tDate.today);
  }
  if (isTomorrow(parsedDate)) {
    return translate(tDate.tomorrow);
  }
  if (isYesterday(parsedDate)) {
    return translate(tDate.yesterday);
  }
  return format(new Date(date), DATE_FORMAT);
};

export const getDate = (date, translate, useDayNames = false) => {
  if (useDayNames) {
    return transformDayView(date, translate);
  }
  return format(new Date(date), DATE_FORMAT);
};

export const getTime = (date) => format(new Date(date), TIME_FORMAT);

export const getDateTime = (date, translate, useDayNames = false) => {
  const time = format(new Date(date), TIME_FORMAT);
  const day = useDayNames ? transformDayView(date, translate) : format(new Date(date), DATE_FORMAT);
  return `${day} ${translate(tDate.at)} ${time}`;
};
