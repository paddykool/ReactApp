import React from "react";

function App() {
  const date = new Date(2020, 2, 2, 19);
  let hours = date.getHours();
  let message;
  console.log("Hours is : " + hours);

  const styles = {
    fontSize: 30
  }

  if (hours < 12) {
    message = "Good Morning";
    styles.color = "blue"
  } else if (hours >= 12 && hours < 18) {
    message = "Good afternoom";
    styles.color = "green"
  } else {
    message = "Good evening";
    styles.color = "red"
  }

  

  return <h1 style={styles}>My Second App. {`${message}`}</h1>;
}

export default App;
