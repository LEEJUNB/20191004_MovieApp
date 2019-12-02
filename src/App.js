import React from 'react';

function Food({name, picture}) { // Components는 대문자 이기에 Func. fav는 Func의 argument. {fav}는 props의 내부에서 fav를 가져오는 것을 의미
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
}

// 1. 데이터가 이미 API를 통해서 받은 경우를 위해 함수를 만든다.
// 2. Food object의 배열이 되는 함수
const foodILike = [
  {
    title : "Kim",
    image : "https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2019-09/kim-kardashian-west-emmys-2019-1280.jpg?itok=vAGBUUzi&h=000b89ad"
  },
  {
    title : "KimChi",
    imgage : "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg"
  },
  {
    title : "MulKimChi",
    imgage : "http://www.trifood.com/image/food/mulkimchi.jpg"
  }

];

// 3. Food와 foodILike를 렌더링해보자. JS의 map을 이용해서. 
// 4. map은 arr의 각 item에서 func을 실행하는 arr을 가지는 js func이며 그 func의 res를 갖는 arr을 준다.
// 예를들어 배열함수.map(function(obj){return obj}) 라고하면 배열함수에 있는 배열 하나하나 모두에 function을 적용시켜서 불러온다.
function App() {
  return (
    <div className="App">
      <h1>testing server</h1>
      {/* dish는 object이다. object에는 name과 image가 존재. 고로 dish는 첫번째로 Kim object 그리고 KimChi object... 순이다 */}
      {foodILike.map(dish => (
        <Food name={dish.title} picture={dish.image}/>
        ))}  
    </div>
  );
}

export default App;
