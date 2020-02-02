import React from "react";

function App() {

  const date = new Date();
  let hours = date.getHours();
  let message;
  console.log('Hours is : ' + hours);

  hours = 17
  console.log('Hours is : ' + hours);
  if (hours < 12) {
    message = "Good Morning"
  }
  else if (hours >= 12 && hours < 18 ) {
    message = "Good afternoom"
  }
  else {
    message = "Good evening"
  }


  return <h1>My Second App. {`${message}`}</h1>;
}

export default App;
