// // Function from original HTML to display the current time
// function startTime() {
//   const today = new Date();
//   let h = today.getHours();
//   let m = today.getMinutes();
//   let s = today.getSeconds();
//   m = checkTime(m);
//   s = checkTime(s);
  
//   // Format the full date and time string
//   const formattedDate = today.toLocaleDateString('en-US', {
//     weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
//   });
  
//   const formattedTime = `${h}:${m}:${s}`;
  
//   // Display in the element with id 'txt'
//   const timeElemfile:///C:/Users/SUYASH/Desktop/IIIT-Hyderabad/Semester%201/SSD/A2/Q2/script.jsent = document.getElementById('txt');
//   if (timeElement) {
//     timeElement.innerHTML = formattedDate + " - " + formattedTime; 
//   }

//   setTimeout(startTime, 1000);
// }

// function checkTime(i) {
//   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//   return i;
// }