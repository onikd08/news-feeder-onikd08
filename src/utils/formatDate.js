export default function formatDate(dateString) {
  const dateObject = new Date(dateString);

  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = dateObject.toLocaleDateString("en-US", options);

  return formattedDate;
}
