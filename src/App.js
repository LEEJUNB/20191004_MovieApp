import React from 'react';

function Func(props) {
  console.log(props);
  return <h1>Good</h1>
}

function App() {
  return (
    <div className="App">
      testing server
      <Func 
        nameman="num1"
        something={true}
        arr={['hood','robin',1,2,true]}
      />
    </div>
  );
}

export default App;
