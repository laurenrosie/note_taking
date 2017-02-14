function testNoteListView(){
  var list = new List()
  list.addNote("hi")
  var listView = new ListView(list);
  assert.isTrue(listView.list()===list)
}

testNoteListView();


function htmlListViewTestOneNote(){
  var list = new List()
  list.addNote("hi")
  var listView = new ListView(list);
  assert.isTrue(listView.toHtml()==="<ul><li><div>hi</div></li></ul>")
}

htmlListViewTestOneNote()

function htmlListViewTestNoNote(){
  var list = new List()
  var listView = new ListView(list);
  assert.isTrue(listView.toHtml()==="<ul><li><div></div></li></ul>")
}

htmlListViewTestNoNote()

function htmlListViewTestTwoNotes(){
  var list = new List()
  list.addNote("hi")
  list.addNote("hey")
  list.addNote("hello")
  var listView = new ListView(list);
  console.log(listView.list().showNotes()[0].getText())
  console.log(listView.toHtml())
  assert.isTrue(listView.toHtml()==="<ul><li><div>hi</div></li></ul><ul><li><div>hey</div></li></ul>")
}

htmlListViewTestTwoNotes()
