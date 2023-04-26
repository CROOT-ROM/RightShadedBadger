//Player Built Pylons

CheckTutorial(
  "pvp_built_pylon",
  and(
    HaveSecondsPassedSinceSessionStart(60),
    HasThePlayerCollectedEnoughOfParticularResources(75, ["xp_common"])
  )
);
