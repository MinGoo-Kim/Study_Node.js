var myArray = [
        {
            "item": "set",
            "state": 1,
            "date": "2017-06-22T12:32:09.075Z",
            "state_log": [
                -1
            ]
        },
        {
            "item": "never",
            "state": 1,
            "date": "2017-06-22T10:26:33.636Z",
            "state_log": [
                -1,
                -1
            ]
        },
        {
            "item": "step by step",
            "state": 1,
            "date": "2017-06-22T10:14:41.374Z",
            "state_log": [
                -1,
                1,
                -1,
                1,
                -1
            ]
        },
        {
            "item": "no",
            "state": 1,
            "date": "2017-06-22T10:12:43.351Z",
            "state_log": [
                -1,
                1,
                -1,
                1,
                -1
            ]
        },
        {
            "item": "way",
            "state": 2,
            "date": "2017-06-21T15:50:18.909Z",
            "state_log": [
                1
            ]
        },
        {
            "item": "goes",
            "state": 2,
            "date": "2017-06-21T15:15:49.054Z",
            "state_log": [
                -1,
                1
            ]
        },
        {
            "item": "or",
            "state": 0,
            "date": "2017-06-20T15:38:22.907Z",
            "state_log": []
        },
        {
            "item": "too A to B",
            "state": 0,
            "date": "2017-06-20T15:38:22.907Z",
            "state_log": []
        },
        {
            "item": "a",
            "state": 0,
            "date": "2017-06-20T15:38:22.907Z",
            "state_log": []
        },
        {
            "item": "pain",
            "state": 2,
            "date": "2017-06-20T19:53:31.417Z",
            "state_log": [
                -1,
                1
            ]
        },
        {
            "item": "dream",
            "state": 0,
            "date": "2017-06-20T15:38:22.907Z",
            "state_log": []
        },
        {
            "item": "gain",
            "state": 0,
            "date": "2017-06-19T13:30:10.724Z",
            "state_log": []
        },
        {
            "item": "goal",
            "state": 0,
            "date": "2017-06-20T15:38:22.907Z",
            "state_log": []
        },
        {
            "item": "long",
            "state": 0,
            "date": "2017-06-20T15:23:23.775Z",
            "state_log": []
        },
        {
            "item": "new",
            "state": 0,
            "date": "2017-06-20T15:38:22.907Z",
            "state_log": []
        },
        {
            "item": "old",
            "state": 2,
            "date": "2017-06-20T18:23:09.657Z",
            "state_log": [
                1
            ]
        },
        {
            "item": "another",
            "state": 0,
            "date": "2017-06-20T15:38:22.907Z",
            "state_log": []
        },
        {
            "item": "are",
            "state": 0,
            "date": "2017-06-20T15:38:22.907Z",
            "state_log": []
        },
        {
            "item": "you",
            "state": 0,
            "date": "2017-06-20T15:38:22.907Z",
            "state_log": []
        },
        {
            "item": "happy",
            "state": 0,
            "date": "2017-06-18T15:38:22.907Z",
            "state_log": []
        }
    ],
    groupKey = 0;
    groups = myArray.reduce(function (o, a) {
        var m = a.date.slice(0,10);
        (o[m])? o[m].data.push(a) : o[m] = {group: String(groupKey++), data: [a]};
        return o;
    }, {});

var result = Object.keys(groups).map(function(k){ return groups[k]; });

console.log(result);
var total_page = Math.ceil(result.length/2)-1;
console.log(total_page);
var page = 0;

try {
    console.log(result[page*2].data.concat(result[page*2+1].data));
} catch (err) {
    try{
        console.log(result[page*2].data);
    } catch(err) {
        console.log("전체 페이지수 초과!!")
    }
}