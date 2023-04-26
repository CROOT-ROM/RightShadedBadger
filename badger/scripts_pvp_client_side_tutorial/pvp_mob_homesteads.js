//PVP Mob Homestead

CreateVillageInfoBucket(
  "pvp_mob_alliance_skeleton",
  [],
  ["faction.mob.alliance.skeleton"],
  []
);

CreateVillageInfoBucket(
  "pvp_mob_alliance_creeper",
  [],
  ["faction.mob.alliance.creeper"],
  []
);

CreateVillageInfoBucket(
  "pvp_mob_alliance_zombie",
  [],
  ["faction.mob.alliance.zombie"],
  []
);

CheckTutorial(
  "pvp_mob_homesteads",
  and(
    HaveSecondsPassedSinceSessionStart(10),
    or(
      HasPlayerVisitedVillageANumberOfTimes("pvp_mob_alliance_zombie", 1),
      HasPlayerVisitedVillageANumberOfTimes("pvp_mob_alliance_skeleton", 1),
      HasPlayerVisitedVillageANumberOfTimes("pvp_mob_alliance_creeper", 1)
    )
  )
);
