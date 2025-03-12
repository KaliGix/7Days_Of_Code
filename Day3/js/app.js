let webside = 0
let technology = 0
let specialization = 0
let technologyName = ''

function GameStart (webside) {
  if (validateOption(webside)) {
    if (webside === 1) {
      technologyName = 'Front end'
      technology = parseInt(
        prompt(
          'Front end is so interesting and funny! what library/framework would you like to learn? 1. React 2. Vue'
        )
      );

      if (validateOption(technology))
        alert(
          `Great! ${
            technology === 1 ? 'React is a good choice' : 'Vue is a good choice'
          }`
        );
      else alert('Enter a valid option');
    } else {
      technologyName = 'Back end'
      technology = parseInt(
        prompt(
          'Back end is amazing!What programming language do you want to learn? 1. C#  2. Java'
        )
      );

      if (validateOption(technology))
        alert(
          `Great! ${
            technology === 1 ? 'C# is a good choice' : 'Java is a good choice'
          }`
        );

        else alert('Enter a valid option');
    }

    specialization = parseInt(
      prompt(
        `Do you want to continue improving in ${technologyName} or become a FullStack developer? 1.Improving 2. Become a FullStack`
      )
    );

    if(validateOption(specialization))
      alert(`${specialization===1 ? `Great! you can learn more technologies ${technologyName}` : 'Awsome! You can become a good Full Stack develper. Keep Going!'}`)

    else alert('Enter a valid option');

    while (
      (
        parseInt(
          prompt('Would you like to learn other technology? 1. OK 2. No')
        ) === 1)
    ) {
     
          prompt('What technology you wanna learn? ')
          alert('Great! That is a good goal to reach in this year!') 
      
    }
  }
  
  else {
    alert('Enter a valid option')
    return GameStart(
      parseInt(
        prompt(
          'If you want to be a web developer you can choose between Front end and Back end. Enter 1 for Front end or 2 for Back end'
        )
      )
    );
  }

  return;
}

function validateOption (option) {
  if (option > 0 && option < 3 && !isNaN(option)) {
    return true
  }
  return false
}

GameStart(
  parseInt(
    prompt(
      'If you want to be a web developer you can choose between Front end and Back end. Enter 1 for Front end or 2 for Back end'
    )
  )
)
