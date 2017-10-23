
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://data.nba.net/prod/v1/2017/players.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();

$(".page-wrap").click(function() {
    $( "tr" ).slideDown();
  });

// $("#page-wrap" ).bootstrapTable({
//     onClickRow: function () {
//        alert( "Handler for .click() called." );
//     }
// });

// $(document).ready(function() {
//     $('#example').DataTable();
// } );

// Handlebars.registerHelper("calculateAge", function(dateOfBirthUTC) {
//   var age = new Date().toISOString().slice(0,10) - dateOfBirthUTC;
//   console.log(new Date().to().slice(0,10));
// //   return age;

// //   if (age > 0) {
// //     return age + " years old";
// //   } else {
// //     return "Less than a year old";
// //   }

// });
Handlebars.registerHelper("actualTeam", function(teamId) {
if (teamId == 1610612760)
return "OKC Thunder"
else if (teamId == 1610612759)
return "SA Spurs"
else if (teamId == 1610612749)
return "MIL Bucks"
else if (teamId == 1610612764)
return "WAS Wizards"
else if (teamId == 1610612737)
return "ATL Hawks"
else if (teamId == 1610612738)
return "BOS Celtics"
else if (teamId == 1610612751)
return "BRO Nets"
else if (teamId == 1610612766)
return "CHA Hornets"
else if (teamId == 1610612741)
return "CHI Bulls"
else if (teamId == 1610612739)
return "SA CLE Cavaliers"
else if (teamId == 1610612742)
return "DAL Mavericks"
else if (teamId == 1610612743)
return "DEN Nuggets"
else if (teamId == 1610612765)
return "DET Pistons"
else if (teamId == 1610612744)
return "GS Warriors"
else if (teamId == 1610612745)
return "HOU Rockets"
else if (teamId == 1610612754)
return "IND Pacers"
else if (teamId == 1610612746)
return "LA Clippers"
else if (teamId == 1610612747)
return "LA Lakers"
else if (teamId == 1610612763)
return "MEM Grizzlies"
else if (teamId == 1610612748)
return "MIA Heat"
else if (teamId == 1610612750)
return "MIN Timberwolves"
else if (teamId == 1610612740)
return "NO Pelicans"
else if (teamId == 1610612752)
return "NY Knicks"
else if (teamId == 1610612753)
return "ORL Magic"
else if (teamId == 1610612755)
return "PHI 76ers"
else if (teamId == 1610612756)
return "PHO Suns"
else if (teamId == 1610612757)
return "POR Trail Blazers"
else if (teamId == 1610612758)
return "SAC Kings"
else if (teamId == 1610612761)
return "TOR Raptors"
else if (teamId == 1610612762)
return "UTA Jazz"});

function createHTML(playersData) {
  var rawTemplate = document.getElementById("playersInfo").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(playersData);

  var playersContainer = document.getElementById("players-container");
  playersContainer.innerHTML = ourGeneratedHTML;
}

//Papildoma statistikos lentele/nuotrauku ikelimas


clickable.addEventListener("click", function() {
var secondRequest = new XMLHttpRequest();
secondRequest.open('GET', 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/'+ teamId +'/2017/260x190/'+ personId +'.png');
// secondRequest.open('GET', 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612739/2017/260x190/2544.png');
secondRequest.onload = function() {
  if (secondRequest.status >= 200 && secondRequest.status < 400) {
    var data = JSON.parse(secondRequest.responseText);
    createStats(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};
function createStats(playersStats) {
    var statsTemplate = document.getElementById("playersInfo").innerHTML;
    var compiledTemplate = Handlebars.compile(statsTemplate);
    var ourGeneratedHTML = compiledTemplate(playersStats);
  
    var statsContainer = document.getElementById("stats-table");
    statsContainer.innerHTML = ourGeneratedHTML;
  }});
  Handlebars.registerHelper("selectTeam", function(value) {
    
  });