// Player Placed Map Marker

CheckTutorial(
  "pvp_placed_map_marker",
  and(
    HaveSecondsPassedSinceSessionStart(120),
    HasTutorialBeenCompleted("pvp_player_move"),
    HasTutorialBeenCompleted("pvp_player_turned_camera"),
    HasTutorialBeenCompleted("pvp_player_jumped")
  )
);

BypassIf("pvp_placed_map_marker", HasPlayerPlacedAMapMarkerEnough(1));
