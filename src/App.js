import React from 'react';

function Func(props) {
return <h1> Good {props}</h1>
}


function App() {
  return (
    <div className="App">
      testing server
      <Func props="L"/>
      <Func props="O"/>
      <Func props="V"/>
      <Func props="E"/>
      />
    </div>
  );
}

export default App;
