let universal = () => {
    // document.getElementById("light").src -it unda gavigot ra misamarti weria console.log-it
    let suratismisamarti = document.getElementById("light").src;
    console.log(suratismisamarti);

    // cvladi = suratis es miamarti

    // if(cvladi == rac kosolshi dabrunda){
        //naturis antebis kodi
    // }else{

    // }

    if(suratismisamarti=="file:///C:/Users/khurt/OneDrive/Desktop/meate%20davaleba/img/off.png"){
       document.getElementById("light").src = "img/on.png";
    }else{
        document.getElementById("light").src = "img/off.png";
    }

}