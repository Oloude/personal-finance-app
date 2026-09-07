const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function formatDate(date: string){
    let presentDate = new Date(date)

    return `${presentDate.getDate()} ${months[presentDate.getMonth()]} ${presentDate.getFullYear()}`

}