var Promise = require('promise');

/**
 * Simple Example
 * */
var asyncfunction = function(param){

    return new Promise(function(result, rejected){ // 리턴값으로 Promise 객체 리
                                                    // Promise 객체 안에서는 처리할 비지니스 로직이 정의되어 있다
        setTimeout(
            function(){
                result('hello' + param);
            },2000);
    });

};

var promise = asyncfunction(' goo ');

promise.then(console.log,console.err); // 여기가 비동기 결과에 대한 콜백함

/**
 * Promise Chaining
 * */
var asyncfunction1 = function(param){

    return new Promise(function(result, rejected){

        setTimeout(
            function(){
                result('result 1 ' + param);
            },1000);
    });

};

var asyncfunction2 = function(param){

    return new Promise(function(result, rejected){

        setTimeout(
            function(){
                result('result 2 ' + param);
            },1000);
    });

};

var asyncfunction3 = function(param){

    return new Promise(function(result, rejected){

        setTimeout(
            function(){
                result('result 3 ' + param);
            },1000);
    });

};

var promise = asyncfunction1(' goo ');

promise
    .then(asyncfunction2)
    .then(asyncfunction3)
    .then(console.log);
