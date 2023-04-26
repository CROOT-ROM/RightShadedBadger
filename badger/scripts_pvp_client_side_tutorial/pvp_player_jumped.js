// Jump Tutorial
CheckTutorial(
  "pvp_player_jumped",
  and(
    not(HasPlayerJumpedThisSession()),
    HasTutorialBeenCompletedSomeAmountOfSecondsAgo(
      "pvp_player_turned_camera",
      10
    ),
    HasTutorialBeenCompleted("pvp_player_move")
  )
);

SetHintDelay("player_jumped", 5);

BypassIf("pvp_player_jumped", HasPlayerJumpedThisSession());
