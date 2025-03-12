
let webside = 0;
let technology = 0;
let specialization =0;
let technologyName = "";

function GameStart(webside) {

    if(webside >= 0 && webside < 3){

    if(webside ===1){
        technology = parseInt(prompt("Front end is so interesting and funny! what library/framework would you like to learn? 1. React 2. Vue"));

    } else {
        technology = parseInt(prompt("Back end is amazing!What programming language do you want to learn? 1. C#  2. Java"));
    }


      specialization = parseInt(prompt(`Do you want to continue improving in ${webside} or become a FullStack developer? 1.Improving 2. Become a FullStack`))
      if(specialization==1){
          alert("Great! you can learn more technologies on the side client")
      } else{
        alert("Awsome! You can become a good Full Stack develper. Keep Going!")
      }

      while(specialization= parseInt(prompt("Would you like to learn other technology? 1. OK 2. No"))=== 1){
          
        switch(specialization){

            case 1:
                 technologyName = prompt("What technology you wanna learn? ");
                alert("Great! That is a good goal to reach in this year!")
            break;

            default:
                alert("Invalid option selected");
                continue;
            
        }
      }
} else  
    {
        alert("Enter a valid option");
        return GameStart(parseInt(promp("If you want to be a web developer you can choose between Front end and Back end. Enter 1 for Front end or 2 for Back end")))
    }

}

GameStart(parseInt(promp("If you want to be a web developer you can choose between Front end and Back end. Enter 1 for Front end or 2 for Back end")));