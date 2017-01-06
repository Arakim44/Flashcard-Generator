var fs = require('fs');

var ClozeFlashcard = function(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.clozeDeleted = "";
    this.saveCloze = function() {
        var clozeData = {
            type: 'cloze flash card',
            text: this.text,
            cloze: this.cloze,
            clozeDeleted: this.clozeDeleted
        };

        fs.appendFile('log.txt', '\n' + JSON.stringify(clozeData, null, 2) + ';\n', 'utf8', function(err) {
            if (err) {
                console.log(err);
            }
        });
    }

    this.deleteCloze = function(){


     //not sure what it means to throw error when not be able to find where cloze should go.
     if (this.text.indexOf(this.cloze) >= 0) {
                // replace the cloze in the text with ellipses
                this.clozeDeleted = this.text.replace(this.cloze,'______');

            } else {
                // if the cloze is not the text, console log this error
                console.log('ERROR: ')
            }//burrowed the code from someone else, but not working.



    }


}

module.exports = ClozeFlashcard;
