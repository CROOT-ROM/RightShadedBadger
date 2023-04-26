// Player Movement

CheckTutorial("player_changed_hotbar", and(HasThePlayerCollectedEnoughOfParticularResources(1, ["unlock_onboarding_hotbar_tut"]), HaveSecondsPassedSinceSessionStart(90)));

SetHintDelay("player_changed_hotbar", 20);

BypassIf("player_changed_hotbar", orN(HasPlayerChangedHotbarCategoryEnough(2), HasThePlayerPlacedABuildableStructure("badger:spawner_wood_golem"), HasThePlayerPlacedABuildableStructure("badger:spawner_stone_golem")));
