
document.getElementById('switch_image').addEventListener("click" , myFunction);

var stat = false;

function myFunction()
{
    if (stat == false)
    {
        document.getElementById('bulb_image').src='image/bulb_on.png';
        document.getElementById('switch_image').src='image/switch-on.png';
        stat = true;
    }
    else if (stat == true)
    {
        document.getElementById('bulb_image').src='image/bulb-off.png';
        document.getElementById('switch_image').src='image/switch-off.png';
        stat = false;
    }

}


