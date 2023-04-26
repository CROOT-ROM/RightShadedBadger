//PVP Emerald Economy

CreateVillageInfoBucket("pvp_emerald_economy", [], ["faction.cul.001"], []);

CheckTutorial(
  "pvp_emerald_economy",
  and(
    HaveSecondsPassedSinceSessionStart(10),
    HasPlayerVisitedVillageANumberOfTimes("pvp_emerald_economy", 1)
  )
);
