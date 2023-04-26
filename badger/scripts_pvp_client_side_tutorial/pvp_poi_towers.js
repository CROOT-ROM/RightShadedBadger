// Player POI towers

CreateVillageInfoBucket("pvp_poi_tower_01", [], ["faction.poi.tower_01"], []);
CreateVillageInfoBucket("pvp_poi_tower_02", [], ["faction.poi.tower_02"], []);
CreateVillageInfoBucket("pvp_poi_tower_04", [], ["faction.poi.tower_04"], []);

CheckTutorial(
  "pvp_poi_towers",
  and(
    HaveSecondsPassedSinceSessionStart(10),
    orN(
      HasPlayerVisitedVillageANumberOfTimes("pvp_poi_tower_01", 1),
      HasPlayerVisitedVillageANumberOfTimes("pvp_poi_tower_02", 1),
      HasPlayerVisitedVillageANumberOfTimes("pvp_poi_tower_04", 1)
    )
  )
);

SetHintDelay("pvp_poi_towers", 5);
