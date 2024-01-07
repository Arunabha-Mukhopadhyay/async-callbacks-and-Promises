//ASYNCRO

// setTimeout(()=>{
//   console.log("hello")
// },4000);  //timeout


// CALLBACK TOPIC:=>

// function getData(dataid,nextData){
//   setTimeout(()=>{
//    console.log("data",dataid);
//     if(nextData){
//       nextData();
//     }
//   },2000);
// }

//CALLBACK HELL
// getData(1,()=>{
//   console.log("getting data 2..")
//   getData(2,()=>{
//     console.log("getting gata 3...")
//     getData(3,()=>{
//       console.log("getting data 4...")
//       getData(4)
//     })
//   });
// });



function getData(dataid,nextData){
  return new Promise((resolve,reject)=>{
   setTimeout(()=>{
     console.log("data",dataid);
     resolve("success")
    },2000);
  })
 }

 //ASYNC AND AWAIT :=>
 async function getAllData(){
  console.log("getting data 1")
  await getData(1);
  console.log("getting data 2")
  await getData(2);
  console.log("getting data 3")
  await getData(3);
  console.log("getting data 4")
  await getData(4);
 }
 
// IIFE METHOD

(async function(){
  console.log("getting data 1")
  await getData(1);
  console.log("getting data 2")
  await getData(2);
  console.log("getting data 3")
  await getData(3);
  console.log("getting data 4")
  await getData(4);
 })();

 //PROMISE CHAIN
 // getData(1).then((res)=>{
 //   console.log(res);
 //   getData(2).then((res)=>{
 //     console.log(res)
 //     getData(3).then((res)=>{
 //       console.log(res)
 //       getData(4).then((res)=>{
 //         console.log(res)
 //       })
 //     })
 //   })
 // })
 
 //BETTER WAY OF PROMISE CHAIN

//  console.log("getting data1...")
//  getData(1)
//    .then((res)=>{
//     console.log("getting data2...")
//    return getData(2)
//    })
//    .then((res)=>{
//     console.log("getting data3...")
//      return getData(3)
//    })
//    .then ((res)=>{
//     console.log("getting data4...")
//      return getData(4)
//    })
//    .then ((res)=>{
//      console.log(res)
//    })








//PROMISES TOPICS:=>

// const getPromise=()=>{
//   return new Promise((resolve,reject)=>{
//     console.log("hello ji");
//     resolve("done");
//     // reject("error")
//   })
// }
// let promise=getPromise();
// promise.then(()=>{
//   console.log("promise fullfiled");
// })

// //let promise=getPromise()
// promise.catch(()=>{
//   console.log("error here")
// })


//PROMISES AND CHAINING: PART2

// function asynFuncn1(){
//  return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("data1")
//     resolve("success")
//   },3000)
//  })
// }
// function asynFuncn2(){
//   return new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//      console.log("data2")
//      resolve("success")
//    },3000)
//   })
//  }

// console.log("fetching data1...")
// asynFuncn1().then((res)=>{
//   console.log("fetching data2...")
//   asynFuncn2().then((res)=>{
//     })
// })





// ASYNC AND AWAIT TOPIC:=>

// async function hello(){
//   console.log("hello")
// }



// function wheteher(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("whether data")
//       resolve(200)
//     },2000)
//   })
// }
// async function getwhetherData(){
//   await wheteher(); //1st call
//   await wheteher(); //2nd call
// }