import React from 'react';

// function Func(props) { 
//   console.log(props.fav); // fav는 props object안에 있다.
// return <h1> Good {props.fav}</h1>
// }

// jsx = HTML + JS

function Func({fav}) { // Components는 대문자 이기에 Func. fav는 Func의 argument. {fav}는 props의 내부에서 fav를 가져오는 것을 의미
  console.log(fav);
return <h1> Good {fav}</h1>
}


function App() {
  return (
    <div className="App">
      testing server
      <Func fav="L"/>
    </div>
  );
}

export default App;
