console.log("bruh");
var left=document.querySelector(".ogsidecolor").style.height;
var right=document.querySelector(".ognewbutton2").style.height;
if(left>right)
{
    document.querySelector('.ognewbutton2').style.height=left;
}
else
{
    document.querySelector('.ogsidecolor').style.height=right;
}