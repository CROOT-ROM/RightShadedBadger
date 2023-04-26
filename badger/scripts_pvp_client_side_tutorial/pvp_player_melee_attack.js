// Player Melee Attack

CheckTutorial(
  "pvp_player_melee_attack",
  and(
    not(HasPlayerPressedLocalActionButton(LOCAL_ACTION_PLAYER_ATTACK, 15)),
    HaveSecondsPassedSinceSessionStart(90)
  )
);

BypassIf(
  "pvp_player_melee_attack",
  HasPlayerPressedLocalActionButton(LOCAL_ACTION_PLAYER_ATTACK, 3)
);
