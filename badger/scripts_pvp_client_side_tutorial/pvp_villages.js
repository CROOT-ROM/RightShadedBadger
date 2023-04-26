// Player Melee Attack

CreateVillageInfoBucket("pvp_villages", [], ["faction.cul.001"], []);

CheckTutorial(
  "pvp_villages",
  and(
    HaveSecondsPassedSinceSessionStart(10),
    HasPlayerVisitedVillageANumberOfTimes("pvp_villages", 3),
    HasTutorialBeenCompletedSomeAmountOfSecondsAgo("pvp_emerald_economy", 10)
  )
);
