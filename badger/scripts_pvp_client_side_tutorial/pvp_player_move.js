// Player Movement

CheckTutorial(
  "pvp_player_move",
  and(not(HasPlayerMovedThisSession()), HaveSecondsPassedSinceSessionStart(20))
);

BypassIf("pvp_player_move", HasPlayerMovedThisSession());
