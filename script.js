var ans = 0;
var inputs = [] 
const history = []

function result() {
    var str = inputs.join(',');
    let newStr = str.split(",").join("");
    return (eval(newStr));
};

function hisAdd() {
    let his = result();
    let a = String(his)
    history.unshift(a);
};

function hispr() {
    return (history[0]);
};
