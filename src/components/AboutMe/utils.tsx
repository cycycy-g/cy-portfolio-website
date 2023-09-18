export const isEvening = () => {
  const hour = new Date().getHours();
  const isEvening = hour > 18;
  return isEvening;
}