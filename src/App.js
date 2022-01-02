import React from "react";

const Namer = React.createElement('h1', null, "Hello from silanka");


function App() {
  return (
    <div className="App">
      <h1>hello world!</h1>
      {Namer}
    </div>
  );
}

export default App;
