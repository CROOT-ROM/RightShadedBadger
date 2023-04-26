// Player Used Hero Director

CheckTutorial(
  "player_used_hero_director",
  and(
    HasTutorialBeenCompleted("player_used_hero_lure"),
    
    or(
      HasPlayerApproachedPiglinBaseThisSession(),
      HasPlayerApproachedANewVillageANumberOfTimesThisSession(1)
    ),
    orN(
      HasThePlayerPlacedABuildableStructure("badger:spawner_wood_golem"),
      HasThePlayerPlacedABuildableStructure("badger:spawner_stone_golem"),
      HasThePlayerPlacedABuildableStructure("badger:spawner_calvary_golem"),
      HasThePlayerPlacedABuildableStructure("badger:spawner_support_golem"),
      HasThePlayerPlacedABuildableStructure("badger:spawner_zombie"),
      HasThePlayerPlacedABuildableStructure("badger:spawner_creeper"),
      HasThePlayerPlacedABuildableStructure("badger:spawner_skeleton")
      )
  )
);

BypassIf(
  "player_used_hero_director",
  HasPlayerUsedDirectorANumberOfTimesThisSession(3)
);

SetHintDelay("player_used_hero_director", 15);