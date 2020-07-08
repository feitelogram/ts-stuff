export const parseDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((part) => parseInt(part));
  const day = dateParts[0];
  const month = dateParts[1] - 1;
  const year = dateParts[2];

  return new Date(year, month, day);
};
