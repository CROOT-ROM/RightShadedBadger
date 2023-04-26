//PVP Piglins
CreateVillageInfoBucket("pvp_piglins", [], ["faction.pig.pvp"], []);

CheckTutorial(
  "pvp_piglins",
  and(
    HaveSecondsPassedSinceSessionStart(10),
    HasPlayerVisitedVillageANumberOfTimes("pvp_piglins", 1)
  )
);
