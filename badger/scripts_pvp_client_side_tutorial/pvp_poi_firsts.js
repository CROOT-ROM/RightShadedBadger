// Player POI Firsts

CreateVillageInfoBucket(
  "pvp_poi_first_01",
  [],
  ["faction.poi.ally.01.faction"],
  []
);
CreateVillageInfoBucket("pvp_poi_first_02", [], ["faction.poi.ally.02"], []);
CreateVillageInfoBucket("pvp_poi_first_03", [], ["faction.poi.ally.04"], []);
CreateVillageInfoBucket("pvp_poi_first_04", [], ["faction.poi.ally.05"], []);

CheckTutorial(
  "pvp_poi_firsts",
  and(
    HaveSecondsPassedSinceSessionStart(10),
    orN(
      HasPlayerVisitedVillageANumberOfTimes("pvp_poi_first_01", 1),
      HasPlayerVisitedVillageANumberOfTimes("pvp_poi_first_02", 1),
      HasPlayerVisitedVillageANumberOfTimes("pvp_poi_first_03", 1),
      HasPlayerVisitedVillageANumberOfTimes("pvp_poi_first_04", 1)
    )
  )
);

SetHintDelay("pvp_poi_firsts", 5);
