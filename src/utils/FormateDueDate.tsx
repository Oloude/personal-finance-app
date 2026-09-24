import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md"


const ordinalSuffixes = [
  "st", // 1st
  "nd", // 2nd
  "rd", // 3rd
  "th", // 4th
  "th", // 5th
  "th", // 6th
  "th", // 7th
  "th", // 8th
  "th", // 9th
  "th", // 10th
  "th", // 11th
  "th", // 12th
  "th", // 13th
  "th", // 14th
  "th", // 15th
  "th", // 16th
  "th", // 17th
  "th", // 18th
  "th", // 19th
  "th", // 20th
  "st", // 21st
  "nd", // 22nd
  "rd", // 23rd
  "th", // 24th
  "th", // 25th
  "th", // 26th
  "th", // 27th
  "th", // 28th
  "th", // 29th
  "th", // 30th
  "st", // 31st
];

function FormateDueDate(date : string) {
    let newDate = new Date(date)
    let isDueSoon = newDate.getMonth() === 6 && (newDate.getDate() > 19 && newDate.getDate() < 25)
    let paid = (newDate.getMonth() > 6 || newDate.getDate() < 19)
  return (
    <>
     {isDueSoon && <div className="flex items-center gap-2"> <span className="text-preset5 text-grey500">Monthly - {newDate.getDate()}{ordinalSuffixes[newDate.getDate()-1]}</span><MdError className="w-4 h-4 text-red" /></div>}
     {paid && <div className="flex items-center gap-2"> <span className="text-preset5 text-green">Monthly - {newDate.getDate()}{ordinalSuffixes[newDate.getDate()-1]}</span><FaCircleCheck className="w-4 h-4 text-green" /></div>}
     {(!paid && !isDueSoon) &&<span className="text-preset5 text-grey500">Monthly - {newDate.getDate()}{ordinalSuffixes[newDate.getDate()-1]}</span>}
     </>
   
  )
}

export default FormateDueDate