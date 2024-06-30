const months = [
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
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // const date = new date();
  const date = new Date('09/12/2004');
  const month = date.getMonth();
  //console.log(months[month]);

  const day = date.getDate();
  //console.log(day[day]);

  console.log(date.getDate());
  console.log(date.getFullYear());

  const sentence = ` ${date.getDate()}, ${months[month]}, ${date.getFullYear()}`;
  console.log(sentence);

  document.body.innerHTML = sentence;
