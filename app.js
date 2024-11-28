// setTimeout(()=>{
//     console.log("Chandan is learning Asynchrounous javascript")
// },9000)

// function sayHello(){
//     console.log("Hello");
    
// // }
// // setTimeout(sayHello,5000)

// function getData(dataid,getNextdata){
//    setTimeout(()=>{
//     console.log("data ", dataid);
//     if(getNextdata){
//         getNextdata();
//     }
    
//    },3000)
    
// }
// getData(1,()=>{
//     console.log(getData(2,()=>{
//         console.log(getData(3,()=>{
//             console.log(getData(4,()=>{
//                 console.log(getData(5))
//             }))
//         }))
//     }))
// })



// const getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a Promise")
//         // resolve("success")
//         reject("Network error OOPSS!!!")
//     })
// }

// let promise =getPromise()
// promise.then((res)=>{
//     console.log("Promise fulfilled", res)
// })

// promise.catch((err)=>{
//     console.log("Rejected Promise",err)
// })

// function asyncfunct1(){
// return new Promise ((resolve,reject)=>{
//     // console.log("fetching data 1")
//     setTimeout(()=>{
//         console.log("data1")
//         resolve("success")
//     },4000)
    
// })
// }

// function asyncfunct2(){
//     return new Promise((resolve,reject)=>{
//         // console.log("fetching data 2")
//         setTimeout(()=>{
//             console.log("data2")
//             resolve("success")
//         },4000)
//     })
// }
// console.log("fetching data 1")
// let p1 =asyncfunct1();
// p1.then((res)=>{
//     console.log("retreived successfully")
//     console.log("fetching data 2")
//     let p2 =asyncfunct2();
//     p2.then((res)=>{
//         console.log("retreived successfully")
//     })
// })

// function getData(dataid){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data",dataid)
//         resolve("successfully retrieved")
//     },3000)
// })
// }
// console.log("fetching data......")
// let p1=getData(1)
// p1.then((res)=>{
//     console.log("retreived successfully")
//     console.log("fetching data.....")
//     let p2 =getData(2)
//     p2.then((res)=>{
//         console.log("retreived successfully")
//     })
// })

// console.log("fetching data....")
// getData(1).then((res)=>{
//     console.log(res)
//     console.log("fetching data...")
//     getData(2).then((res)=>{
//         console.log(res)
//     })
// })

// console.log("fetching data.......")
// getData(1).then((res)=>{
//     return getData(2)
//     .then((res)=>{
//         return getData(3).then((res)=>{
//             console.log(res)
//         })
//     })
// }) 


// function api(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("Weather data")
//             resolve("successfully retrieved")
//         },3000)
//     })
// }

// async function getweather(){
// await api()
// await api()
// }
 

// ******************  Async await *********************


function sayname(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Hey username is : ${name}`)
            resolve("congratulations successfully registered")
            console.log("congratulations successfully registered")
        },1000)
    })
}

// async function getname(){
//     console.log("Getting name.....")
//    await sayname("Chandan")
//       console.log("Getting name....")
//    await sayname("Kundan")
   
//    console.log("Getting name....")
//    await sayname("Nidhi")
// }


//                   IIFE --->>> immediately invoked functions expressions

(async function(){
        console.log("Getting name.....")
       await sayname("Chandan")
          console.log("Getting name....")
       await sayname("Kundan")
       
    console.log("Getting name....")
   await sayname("Nidhi")
     } ) ();
    
