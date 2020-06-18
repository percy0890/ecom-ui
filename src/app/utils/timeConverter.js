import AppConstants from 'app/app.constants.json';
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const shortMonthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const getMonthName = number => months[number];

const getShortMonthName = number => shortMonthNames[number];

export const addZero = number => (number < 10 ? `0${number}` : number);

export const getDateWithSlash = dateStr => {
  const dateObj = new Date(dateStr);
  return !dateStr || dateStr === AppConstants.NOT_AVAILABLE
    ? AppConstants.NOT_AVAILABLE
    : `${addZero(dateObj.getDate())}/${addZero(
        dateObj.getMonth() + 1,
      )}/${dateObj.getFullYear()}`;
};

export const getDateWithMonthName = dateStr => {
  const dateObj = new Date(dateStr);
  return !dateStr || dateStr === AppConstants.NOT_AVAILABLE
    ? AppConstants.NOT_AVAILABLE
    : `${dateObj.getDate()} ${getMonthName(
        dateObj.getMonth(),
      )}, ${dateObj.getFullYear()}`;
};

export const getTime = dateStr => {
  const dateObj = new Date(dateStr);
  return !dateStr || dateStr === AppConstants.NOT_AVAILABLE
    ? AppConstants.NOT_AVAILABLE
    : `${addZero(dateObj.getHours())}:${addZero(dateObj.getMinutes())}`;
};

export const getUpdatedDateByDate = (date, isPastDate, daysNo) =>
  isPastDate
    ? date.setDate(date.getDate() - daysNo)
    : date.setDate(date.getDate() + daysNo);

export const getUpdatedDateByMonth = (date, isPastDate, monthsNo) =>
  isPastDate
    ? date.setMonth(date.getMonth() - monthsNo)
    : date.setMonth(date.getMonth() + monthsNo);

export const getDateTS = dateStr => {
  const dateObj = new Date(dateStr);
  return dateObj ? dateObj.getTime() : null;
};

export const getDateTimeWithSlash = dateStr => {
  const dateObj = new Date(dateStr);
  return !dateStr || dateStr === AppConstants.NOT_AVAILABLE
    ? AppConstants.NOT_AVAILABLE
    : `${dateObj.getDate()}-${getShortMonthName(dateObj.getMonth())} ${getTime(
        dateStr,
      )}`;
};
export const addHours = (date, hour) => (date ? date.getHours() + hour : null);

export const getStartTimeOfDay = date =>
  date ? date.setHours(0, 0, 0, 0) : null;

export const getEndTimeOfDay = date =>
  date ? date.setHours(23, 59, 59, 999) : null;

export const minutesToHHMM = minutes => {
  if (minutes === null || minutes === undefined) {
    return minutes;
  }
  let hour = minutes / 60;
  hour = parseInt(hour, 10);
  let remainingMinutes = minutes % 60;
  hour = hour.toString();
  remainingMinutes = remainingMinutes.toString();

  if (hour.length === 1) {
    hour = '0'.concat(hour);
  }
  if (remainingMinutes.length === 1) {
    remainingMinutes = '0'.concat(remainingMinutes);
  }
  return `${hour}:${remainingMinutes}`;
};

export const convertTo12HrFormat = time24Hr => {
  switch (true) {
    case time24Hr === 0:
      return '12:00 AM';
    case time24Hr < 12:
      return `${addZero(time24Hr)}:00 AM`;
    case time24Hr === 12:
      return `${time24Hr}:00 PM`;
    case time24Hr > 12:
      return `${addZero(time24Hr - 12)}:00 PM`;
    default:
      return time24Hr;
  }
};
