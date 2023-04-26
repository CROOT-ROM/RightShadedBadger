//Camera Tutorial

CheckTutorial(
  "pvp_player_turned_camera",
  and(
    not(HasPlayerTurnedCameraThisSession()),
    HasTutorialBeenCompleted("pvp_player_move"),
    HaveSecondsPassedSinceSessionStart(40)
  )
);

BypassIf("pvp_player_turned_camera", HasPlayerTurnedCameraThisSession());
