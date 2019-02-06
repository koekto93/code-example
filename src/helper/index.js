export const datePlusHour = (date: Date, hour: string) => {
  return new Date(date.setHours(hour.split(':')[0]))
}
