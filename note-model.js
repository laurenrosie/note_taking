(function(exports) {
  var text 

 function Note(string){
    text = string
 }
 Note.prototype.getText = function(){
   return text
 }
 exports.Note = Note;
 exports.getText = Note.getText; //Could also be this.getText;
})(this);
