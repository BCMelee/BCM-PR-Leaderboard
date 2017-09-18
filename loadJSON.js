function loadJSON(data) {
  var playerListingDiv = "<div class=\"player-listing\"></div>";
  var playerInfoDiv = "<div class=\"player-info\"></div>";
  var playerNameAndRankH2 = [];
  var playerScoreP = [];
  var playerWinsAndLossesP = [];
  for(var i=0; i < data.length; i++) {
    $(".rank-container").append(playerListingDiv)
    $(".rank-container").append(playerInfoDiv);
  };
  for(var i=0; i < data.length; i++) {
    console.log(data[i]);
    var name = data[i].Name;
    var rank = i+1
    var wins = data[i].Wins;
    var losses = data[i].Losses;
    var score = data[i].Score;
    playerNameAndRankH2.push("<h2><span class=\"player-rank\">" + rank + "</span>" + name + "</h2>");
    playerWinsAndLossesP.push("<div class=\"player-WL\"><p><span class=\"player-win\">W: " + wins + "</span> | <span class=\"player-loss\">L: " + losses + "</span></p></div>");
    playerScoreP.push("<div class=\"player-score\"><p>Score: "+ score +"</p></div>");
  };
  console.log(playerNameAndRankH2);
  $(".player-listing").each(function(index){
    $(this).append(playerNameAndRankH2[index]);
  });
  $(".player-info").each(function(index){
    $(this).append(playerScoreP[index]);
  });
  $(".player-info").each(function(index){
    $(this).append(playerWinsAndLossesP[index]);
  });
};

loadJSON(data);
