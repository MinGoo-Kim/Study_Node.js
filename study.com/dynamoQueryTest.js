var AWS = require('aws-sdk');

var region = "ap-northeast-2";
var accessKeyId = "************";
var secretAccessKey = "*****************";

var dynamo = new AWS.DynamoDB.DocumentClient({
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
});

var tag_arr = ["뉴스"];
var search_word_arr = ["뉴스","소설"];
var filter_express_arr_tag = [];
var filter_express_arr_search = [];
var express_attr_val_json = {":user_id":"ap-northeast-2:65076f29-a69e-4670-a58d-ba0a7ae5a7e8"};

for(var i in tag_arr) {
    filter_express_arr_tag[i] = "contains(tag_list, :tag"+i+")";
    express_attr_val_json[":tag"+i] = tag_arr[i];
}
for(var i in search_word_arr) {
    filter_express_arr_search[i] = "contains(title, :search_word"+i+")";
    express_attr_val_json[":search_word"+i] = search_word_arr[i];
}

var filter_express_tag = filter_express_arr_tag.join(' or ');
var filter_express_search = filter_express_arr_search.join(' or ');
var filter_express = "("+filter_express_tag+")"+" and "+"("+filter_express_search+")";

console.log(filter_express_arr_tag);
console.log(filter_express_arr_search);
console.log(filter_express);
console.log(express_attr_val_json);

var params = {
    TableName:"USER_CONTENTS_TB",
    IndexName: "user_id-index",
    KeyConditionExpression:"#user_id = :user_id",
    FilterExpression: filter_express,
    // FilterExpression: "contains(tag_list, :tag) or contains(tag_list, :tag2)",
//        FilterExpression: "tag_list in (:tag, :tag2)",
    ExpressionAttributeNames: {
        "#user_id": "user_id"
    },
    // ExpressionAttributeValues: {
    //     ":user_id": "ap-northeast-2:65076f29-a69e-4670-a58d-ba0a7ae5a7e8",
    //     ":tag": "소설",
    //     ":tag2": "뉴스"
    //     // ":tag": ["소설"],
    //     // ":tag2": ["뉴스"]
    // }
    ExpressionAttributeValues: express_attr_val_json
};

dynamo.query(params, (err, data) => {
    if (err) console.log(err);
    else console.log(data)
});