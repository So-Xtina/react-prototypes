import React from 'react';
import ReactDOM from 'react-dom';

function luckyNumber(){
    var randomNum =  Math.floor(Math.random() * 1000);
    return randomNum;
}

var user = {
    name: 'Christina',
    luckyNumber: luckyNumber()
};

function greeting(user){
    return  <div class="container">
                <h1>Hello! {user.name}</h1>
                <h2 class="text-muted">The lucky number is: {user.luckyNumber}</h2>
            </div>
}

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
