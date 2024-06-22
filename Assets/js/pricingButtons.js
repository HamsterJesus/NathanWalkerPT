function faceToFace(){
    //reveal box
    document.getElementById("price-box-2").style.display = "flex";

    //Price Box 1
    document.getElementById("opt1Price").innerHTML = "£130";
    document.getElementById("opt1Desc").innerHTML = "1 session per week charged monthly";

    //Price Box 2
    document.getElementById("opt2Price").innerHTML = "£220";
    document.getElementById("opt2Desc").innerHTML = "2 sessions per week charged monthly";

    //sidebar info
    document.getElementById('pricing-additional-info').innerHTML = "Each block is 1 month which includes an hour session each week. Additional sessions per week can be added for £20 (A £10 discount) if a monthly member.";
}

function online(){
    //hide box
    document.getElementById("price-box-2").style.display = "none";

    //Price Box 1
    document.getElementById("opt1Desc").innerHTML = "3x Sessions per week at £60 a month<br>4x Sessions per week at £80 a month<br>5x Sessions per week at £100 a month";
    document.getElementById("opt1Price").innerHTML = "";

    //sidebar info
    document.getElementById('pricing-additional-info').innerHTML = "Personal training will reduce the monthly membership at the Altens Health club from £50 to £25 for full access of the health club for as long as you receive personal training.";
}