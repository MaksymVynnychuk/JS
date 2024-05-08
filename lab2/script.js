(function() {
  var names = ["John", "Jane", "Jack", "Jill", "James", "Alice", "Bob"];

  console.log("Дефолтний варіант:");
  for (var i = 0; i < names.length; i++) {
      var name = names[i];
      var firstLetter = name.charAt(0).toLowerCase();

      if (firstLetter === "j") {
          speakHello.speak(name);
      } else {
          speakGoodBye.speak(name);
      }
  }

  console.log("Мій варіант:")
  for(var j=0; j<names.length; j++){
    var name = names[j];
    if(j % 2 === 1){
        speakHello.speak(name);
    }
    else{
        speakGoodBye.speak(name)
    } 
  }
})();
