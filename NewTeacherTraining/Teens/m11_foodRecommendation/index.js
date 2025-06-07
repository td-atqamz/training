function rice() {
    var menus = ["Risotto", "Fried Rice", "Sushi", "Bibimbap", "Curry Rice"];
    var random = Math.floor(Math.random() * menus.length);
    var recommendation = menus[random];
    console.log(`I recommend ${recommendation}`);
    alert(`I recommend ${recommendation}`);
  }
  
  function noodle() {
    var menus = ["Udon", "Pad Thai", "Mie Goreng", "Wonton Noodle Soup", "Laksa"];
    var random = Math.floor(Math.random() * menus.length);
    var recommendation = menus[random];
    console.log(`I recommend ${recommendation}`);
    alert(`I recommend ${recommendation}`);
  }
  