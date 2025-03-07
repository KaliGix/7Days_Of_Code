let language = 0
let name = ''
let age = 0
let programmingLanguage = ''

// This function will validate the option selected by the user
function validateOption () {
  // we ask the user to select the language
  option = parseInt(
    prompt(
      'Select the language you want this program: 1 for English, 2 for Spanish'
    )
  );

  switch (option) {
    case 1:
      getAnswer(option)
      break

    case 2:
      getAnswer(option)
      break

    default: //if the user enter a number different from 1 or 2 will show this message
    //we call the function again to ask the user to enter a valid option
      alert('Invalid option selected')
      return validateOption()
      break
  }
  return
}

function getAnswer (optionSelected) {
  /*we ask the user to enter the name, age and programming language.
     we use the ternary operator to display the message in the language selected by the user
    */
  name = prompt(
    `${optionSelected === 1 ? `What is your name?` : `¿Cuál es tu nombre?`}`
  );
  age = parseInt(
    prompt(
      `${optionSelected === 1 ? `How old are you` : `¿Cuántos años tienes?`}`
    )
  );
  programmingLanguage = prompt(
    `${
      optionSelected === 1
        ? `What programming language are you studying?`
        : `¿Qué lenguaje de programación estás estudiando?`
    }`
  );

  while (true) {
    //we use a while loop to validate the option selected by the user

    let like = parseInt(
      prompt(
        `${
          optionSelected === 1
            ? `Do you like studying  ${programmingLanguage}? Respond with 1 for YES or 2 for NO.`
            : `¿Te gusta estudiar ${programmingLanguage}? Responde con 1 para SI o 2 para NO.`
        }`
      )
    );

    //if the user enter 1 or 2 will display the message in the language selected by the user
    if (like === 1 || like === 2) {
      alert(
        optionSelected === 1
          ? like == 1
            ? 'Great! Keep studying and you will have a lot of success.'
            : 'Oh, what a shame... Have you tried learning other Languages?'
          : like === 1
          ? '¡Genial! Sigue estudiando y tendrás mucho éxito.'
          : '¡Oh, qué lástima! ¿Has intentado aprender otros lenguajes?'
      );

      return
    } else {
      //if the user enter a number different from 1 or 2 will show this message
      alert('Invalid option selected');
      continue;
    }
    return;
  }
}

validateOption();
