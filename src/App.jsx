// import Button from "./Components/task-29/Button"
// import ShowDate from "./Components/task-29/showDate"

import ClassCart from "./Components/classBased/ClassCart"

// import MyComponent from "./Components/classBased/Class"
// import Basic from "./Components/forms/forms"


const App = ()=>{
//   function getDay(day) {
//     switch (day) {
//       case 0:
//         return "sunday"
//       case 1:
//         return "monday"
//         case 2:
//         return "tuesday"
//         case 3:
//         return "wednsday"
//         case 4:
//         return "thursday"
//         case 5:
//         return "friday"
//         case 6:
//         return "saturday"
      
//       default:
//         return "error"
//     }
//     }

//     function getGreeting(hour) {
//       if (hour>=0 && hour<=11) {
//         return "Good Morning"
//       }else if(hour>11 && hour<16){
//         return "Good Afternoon"
//       }else if(hour>=16 && hour<=20){
//         return "Good Evening"
//       }else{
//         return "Good night"
//       }
//     }

//     function gettingMonth(month) {
//       month=["January","February","March","April","May","June","July","August","September","October","November","December"]
//       let c=month[new Date().getMonth()]
//       let d=new Date().getFullYear()
//       let season = "";
//       switch (c) {
//         case "December":
//         case "January":
//         case "February":
//           season = "Winter";
//           break;
//         case "March":
//         case "April":
//         case "May":
//           season = "Spring";
//           break;
//         case "June":
//         case "July":
//         case "August":
//           season = "Summer";
//           break;
//         case "September":
//         case "October":
//         case "November":
//           season = "Fall";
//           break;
//         default:
//           season = "Unknown";
//           break;
//       }
//       return `${c} ,${d} ${season}`
//     }


  return(
    <div>
      {/* <ShowDate day={getDay(new Date().getDay())} timing={getGreeting(new Date().getHours())} month={gettingMonth(new Date().getMonth())}/>
      <Button/> */}
      {/* <MyComponent/> */}
      {/* <Basic/> */}
      <ClassCart/>
    </div>
  )
}

export default App