var inquirer = require('inquirer');
var fs = require('fs');

var BasicFlashcard = require('./basicFlashcard.js');
var ClozeFlashcard = require('./clozeFlashcard.js');

function start(){
  inquirer.prompt([
  {
      name: 'start',
      type: 'list',
      message: 'This is flashcard Generator app. What would you like to do?',
      choices: ['Create a flashcard','Show All flashcards','Exit'],
  }]).then(function(answers){
    if (answers.start === 'Create a flashcard'){
      createCard();
    } else if (answers.start === 'Show All flashcards'){
      showCard();
    } else
    return;
  });
}

function createCard(){
  inquirer.prompt([
    {
      name: 'cardType',
      type:'list',
      message: 'What type of card would you like to make?',
      choices: ['Basic Flashcard','Cloze Flashcard','Exit'],
    }]).then(function(answers){
      switch (answers.cardType){
        case "Basic Flashcard":
          createBasic();
          break;

        case "Cloze Flashcard":
          createCloze();
          break;
        case "Exit":
          return;
      }
    })

}

function createBasic(){
  inquirer.prompt([
    {
      name: 'front',
      type:'input',
      message:'Type the front(questions) of the flash card: '
    },{
      name:'back',
      type: 'input',
      message:'Type the back (answers) of the flash card: '
    }]).then(function(response){
      var newBasicFlashcard = new BasicFlashcard(response.front, response.back);

      newBasicFlashcard.saveBasic();

      console.log('Front: ',newBasicFlashcard.front);
      console.log('Back: ', newBasicFlashcard.back);

      start();//maybe ask question would you like to make more?
    })
}

function createCloze(){

  inquirer.prompt([
    {
      name:'fullText',
      type: 'input',
      message: 'Type full text of card'
    },{
      name:'cloze',
      type:'input',
      message:'Type cloze from text'
    }]).then(function(response){
      var newClozeFlashcard = new ClozeFlashcard(response.fullText, response.cloze);

      newClozeFlashcard.deleteCloze();


      console.log('Partial Text: ',newClozeFlashcard.clozeDeleted);

      newClozeFlashcard.saveCloze();

      start();

    })
}



start();
