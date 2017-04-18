function get_source(document_body){
    // 웹페이지의 내용물
    var contents = document_body.innerText;
    test(contents);
    return "아래와 같은 내용물 보냈습니다 !!!\n\n\n\n\n" + contents;
}

chrome.extension.sendMessage({
    action: "getSource",
    source: get_source(document.body)
});

// 서버 API 호출
function test(text){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8000/api/test", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({text:text}));
}