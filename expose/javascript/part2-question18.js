function displayTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
  
  // Call displayTime every 1000 milliseconds (1 second)
  setInterval(displayTime, 1000);
  