import React from 'react';
import PropTypes from "prop-types"; //1. npm i prop-types를 한다. prop-types가 할 일은 내가 전달받은 props가 내가 원하는 props인지를 확인하는것

function Food({name, picture, rating}) { // Components는 대문자 이기에 Func. fav는 Func의 argument. {fav}는 props의 내부에서 fav를 가져오는 것을 의미
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
}

// 데이터가 이미 API를 통해서 받은 경우를 위해 함수를 만든다.
// Food object의 배열이 되는 함수
// react에서 element들은 유일해야 하기에, 그 유일성을 위해 각 엘리먼트마다 id를 부여한다.
const foodILike = [
  {
    id : 1,
    title : "Kim",
    image : "https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2019-09/kim-kardashian-west-emmys-2019-1280.jpg?itok=vAGBUUzi&h=000b89ad",
    rating : 5
  },
  {
    id : 2,
    title : "KimChi",
    image : "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
    rating : 4.8
  },
  {
    id : 3,
    title : "MulKimChi",
    image : "http://www.trifood.com/image/food/mulkimchi.jpg",
    rating : 4
  }

];

//2. prop를 체크해보자
Food.propTypes = {

};


function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id}
          name={dish.title} 
          picture={dish.image} 
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
