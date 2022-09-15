
var likes =  [9, 12, 9];
var spans = [
    document.querySelector("#post-1"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3")
];



function like(id) {
    likes[id] ++;
    spans[id].innerHTML = likes[id] + "like(s)";

}
    
var likeCount1 = 9;
var likeSpan1 = document.querySelector ("#post-1");

function like1() {
    likeCount1 ++; 
    likeSpan1.innerText = likeCount1 + "like(s)";
}
var likeCount2 = 12;
var likeSpan2 = document.querySelector ("#post-2");

function like2() {
    likeCount2 ++; 
    likeSpan2.innerText = likeCount2 + "like(s)";
}
var likeCount3 = 9;
var likeSpan3 = document.querySelector ("#post-3");

function like3() {
    likeCount3 ++; 
    likeSpan3.innerText = likeCount3 + "like(s)";
}