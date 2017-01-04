var fs = require('fs');


//BasicFlashcard object constructor.
var BasicFlashcard = function(front, back){
  this.front = front;
  this.back = back;
  this.saveBasic = function(){
    var basicData = {
      type: 'basic flashcard',
      front: this.front,
      back: this.back,
    };

    fs.appendFile('log.txt','\n'+JSON.stringify(basicData,null,2)+';\n','utf8',function(err){
      if(err){
        console.log(err);
      }
    });


  };
}

module.exports = BasicFlashcard;
