(function(exports){
  var list
  function ListView(theList){
    list = theList
  }

  ListView.prototype.list = function () {
    return list;
  };

  ListView.prototype.toHtml = function(){
    if(list.showNotes().length==0){

      return "<ul><li><div></div></li></ul>"

    }else{

      var string = ""
      for(i=0; i<list.showNotes().length; i++){
        string += "<ul><li><div>"+list.showNotes()[i].getText()+"</div></li></ul>"
      }
      return string
      
    }
  }

  exports.ListView = ListView
  exports.list = ListView.list
  exports.toHtml = ListView.toHtml

})(this)
