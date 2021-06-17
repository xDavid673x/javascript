function validate()
{
var Pass=document.getElementById("Pass").value;
var conpas=document.getElementById("con-pass").value;
if (Pass==conpas) {
    if (Pass==("")) {
        alert("Please Enter Your Password and Confirm Password Correctly")
        return false
    } else {
        alert("correct")
        return false
    }
    } else {
        alert("Enter your password again")
        return false
    }
}