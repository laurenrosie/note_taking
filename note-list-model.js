(function(exports) {
  var notes
  function List(){
    notes = []
  }
  List.prototype.showNotes = function(){
    return notes
  }

  List.prototype.addNote = function(string){
    notes.push(new Note(string))
  }

  exports.List = List;
  exports.showNotes = List.showNotes;
  exports.addNote = List.addNote;
  
})(this);
