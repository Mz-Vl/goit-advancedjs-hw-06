/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

let weekdays: { [key: string]: number } = {
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
  SUNDAY: 7
}


function isWeekend(day: number): boolean {
  if (day === weekdays.SATURDAY || day === weekdays.SUNDAY) {
    return true;
  } else {
    return false;
  }
}

export {};