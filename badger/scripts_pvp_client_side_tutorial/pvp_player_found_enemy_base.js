//Create a bucket that maps onto the "enemy" relationship (as per 'team_manager.json')

CreateAllianceRuleVillageInfoBucket("pvp_enemy_team_bucket", ["enemy"]);

//PVP Player Found Enemy Base

CheckTutorial(
  "pvp_player_found_enemy_base",
  and(
    HaveSecondsPassedSinceSessionStart(10),
    HasPlayerVisitedVillageANumberOfTimes("pvp_enemy_team_bucket", 1)
  )
);
