// Player Placed Spawner

CheckTutorial(
  "player_placed_spawner",
  and(
    HasPlayerApproachedPiglinBaseANumberOfTimesThisSession(2)
  )
);

BypassIf(
  "player_placed_spawner",
  or(
    HasThePlayerPlacedABuildableStructure("badger:spawner_wood_golem"),
    HasThePlayerPlacedABuildableStructure("badger:spawner_stone_golem"),
    HasThePlayerPlacedABuildableStructure("badger:spawner_calvary_golem"),
    HasThePlayerPlacedABuildableStructure("badger:spawner_support_golem"),
    HasThePlayerPlacedABuildableStructure("badger:spawner_zombie"),
    HasThePlayerPlacedABuildableStructure("badger:spawner_creeper"),
    HasThePlayerPlacedABuildableStructure("badger:spawner_skeleton")
  )
);

SetHintDelay("player_placed_spawner", 10);