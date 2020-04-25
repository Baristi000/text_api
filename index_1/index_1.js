function on(){
    document.getElementById("fanpage").innerHTML = "fanpage";
    setTimeout(function(){
        document.getElementById("contact").className="fade";
    },1000)
};
//show pic
var index=1;
//set defaul to affect on first pic and first dot
showpic(index);

//set a pic
function curpic(n){
    index = n;
    showpic(index);
};
//next or prev pic
function pluspic(n){
    index = index + n;
    showpic(index);
};

function showpic(n){
    var i=0;
    var pic=document.getElementsByClassName("mypic");
    var dot=document.getElementsByClassName("dot");
    if(n>pic.length){index=1;}
    if(n<1){index=pic.length;}
    i=0;
    while(i<pic.length)
    {
        pic[i].style.display = "none";
        dot[i].className = dot[i].className.replace("active", "");
        i++;
    }
    pic[index-1].style.display="block";
    dot[index-1].className=dot[index].className +="active";
};