const weekArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let logger = console.log.bind(console);

console.log = function (str) {
  let currentData = new Date();

  logger(
    weekArray[currentData.getDay()] +
      " " +
      monthArray[currentData.getMonth()] +
      " " +
      currentData.getDate() +
      " " +
      currentData.getHours() +
      ":" +
      currentData.getMinutes() +
      ":" +
      currentData.getSeconds() +
      " GMT+" +
      (currentData.getHours() - currentData.getUTCHours()) +
      " | " +
      str
  );
};

console.log("error");