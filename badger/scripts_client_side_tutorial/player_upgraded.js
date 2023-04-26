// Player Upgraded

CheckTutorial(
  "player_upgraded",
  and(
    HasThePlayerCollectedEnoughOfParticularResources(1, [
      "unlock_onboarding_welloffate_complete",
    ]),
    HasThePlayerCollectedEnoughOfParticularResources(80, ["stone"]),
    HasThePlayerCollectedEnoughOfParticularResources(120, ["xp_common"]),
    HaveSecondsPassedSinceSessionStart(300)
  )
);
