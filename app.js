$(".player-listing").on("click", function(){
  $playerListing = $(this);
  $playerInfo = $playerListing.next(".player-info");
  $playerInfo.slideToggle(200).siblings(".player-info").slideUp(200);
});
