const async = require('async');

/**
 * series
 * */
var tasks = [
    function (callback) {
        setTimeout(function () {
            console.log('one');
            callback(null, 'one-1', 'one-2');
        }, 200);
    },
    function (callback) {
        setTimeout(function () {
            console.log('two');
            callback(null, 'two');
        }, 100);
    }
];

async.series(tasks, function (err, results) {
    if (err) console.log(err);
    else console.log(results);
    // [ ['one-1', 'one-2'], 'two' ]
});

/**
 * waterfall
 * */
async.waterfall([
    function (callback) {
        callback(null, "hello")
    },
    function (param1, callback) {
        callback(null, param1, "world")
    },
    function (param1, param2, callback) {
        callback(null, param1, param2, "!!!")
    }
], function (err, param1, param2, param3) {
    if(err) console.log(err);
    else console.log(param1, param2, param3)
});

/**
 * parallel
 * */
async.parallel([
        function(callback){
            callback(null,'resultA');
        },
        function(callback){
            callback(null,'resultB');
        },
        function(callback){
            callback(null,'resultC');
        }
    ],
    function(err,results){
        if(err) console.log(err);
        else console.log(results)
        // results[0] = resultA, results[1] = resultB, results[2] = resultC
    }
);

/**
 * each
 * */
var my_arr = ["A","B","C"];
async.each(my_arr, printMyArr, (err) => {
    if (err) console.log(err);
    else console.log("End")
});

function printMyArr(element, callback) {
    console.log(element);
    callback()
}