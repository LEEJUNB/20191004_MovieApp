import React from 'react';

function Food({name, picture}) { // Components는 대문자 이기에 Func. fav는 Func의 argument. {fav}는 props의 내부에서 fav를 가져오는 것을 의미
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
}

// 데이터가 이미 API를 통해서 받은 경우를 위해 함수를 만든다.
// Food object의 배열이 되는 함수
// 1. react에서 element들은 유일해야 하기에, 그 유일성을 위해 각 엘리먼트마다 id를 부여한다.
const foodILike = [
  {
    id : 1,
    title : "Kim",
    image : "https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2019-09/kim-kardashian-west-emmys-2019-1280.jpg?itok=vAGBUUzi&h=000b89ad"
  },
  {
    id : 2,
    title : "KimChi",
    imgage : "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg"
  },
  {
    id : 3,
    title : "MulKimChi",
    imgage : "http://www.trifood.com/image/food/mulkimchi.jpg"
  }

];


// Food와 foodILike를 렌더링해보자. JS의 map을 이용해서. 
// map은 arr의 각 item에서 func을 실행하는 arr을 가지는 js func이며 그 func의 res를 갖는 arr을 준다.
// 예를들어 배열함수.map(function(obj){return obj}) 라고하면 배열함수에 있는 배열 하나하나 모두에 function을 적용시켜서 불러온다.
function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.title} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
