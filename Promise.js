//what is promise

//three state of promise
//1.pending (initial state is pending)
//2.fulfill(resolved)
//3.Rejected

console.log("start");

let promise = new Promise((resolve, reject) => {
  //fetching data from server
  let data = true;
  if (data === true) {
    resolve(["item1", "item2", "item3"]);
  } else {
    reject("received error while fetching");
  }
});

promise
.then((text) =>text)
.then(forwardedText=>console.log(forwardedText))
.catch((err) => console.log(err));

console.log("end");
