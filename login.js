function validate(){
var user=document.getElementById("user").value;
var pass=document.getElementById("pass").value;
    if (user=="david"&&pass=="Dd") {
        window.open("https://www.youtube.com/watch?v=-tKVN2mAKRI")
        return false
    } else {
        alert("pass wrong")
    }
}