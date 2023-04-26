// Player Used Hero Lure

CheckTutorial(
  "player_used_hero_lure",
  and(
    HasTutorialBeenCompleted("player_placed_spawner"),
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
  "player_used_hero_lure",
  HasPlayerUsedLureANumberOfTimesThisSession(3)
);

SetHintDelay("player_used_hero_lure", 15);