const arr = [10, 11, 12];
const getArr = (a) => {
  return new Promise((resolve, reject) => {
    if (a === "y") {
      resolve(arr);
    } else throw new Error("error");
  });
};

getArr("er")
  .then((i) => console.log(i))
  .catch((err) => console.log(err));

const getArrReg = (a) => {
  return new Promise((resolve, reject) => {
    if (a === "y") {
      resolve(arr);
    } else reject("rejected");
  });
};

getArrReg("er")
  .then((i) => console.log(i))
  .catch((err) => console.log(err));
