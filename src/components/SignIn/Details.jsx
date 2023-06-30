// import {useEffect, useState} from "react";
//
// const Details = () => {
//     const [loginData,setLoginData] = useState([])
//
//     var todayDate = new Date().toISOString().slice(0,10)
//   const Birthday = () => {
//    const getUser = localStorage.getItem("user_login")
//       if (getUser && getUser.length) {
//           const user = JSON.parse(getUser);
//           setLoginData(user)
//
//
//           const userBirth =  loginData.map((el,k) => {
//               return el.date === todayDate
//           });
//
//           if(userBirth){
//               setTimeout(() => {
//                   console.log("ok")
//               },3000)
//           }
//       }
//   }
//
//   useEffect(() => {
//      Birthday
//   },[])
//     return(
//         <>
//             {
//                 loginData.length === 0 ? "Error" :
//                     <>
//                        Details Page
//                     </>
//             }
//         </>
//     )
// }
//
// export default Details