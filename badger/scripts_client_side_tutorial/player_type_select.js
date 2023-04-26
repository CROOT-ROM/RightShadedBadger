// Advanced Direct

CheckTutorial("player_type_select", and((HasThePlayerCollectedEnoughOfParticularResources(1, ["unlock_advanced_wof_upgrades2"]), HasThePlayerPlacedABuildableStructure("badger:unlock_advanced_direct"), HasTutorialBeenCompletedSomeAmountOfSecondsAgo("player_advanced_direct", 20))));

SetHintDelay("player_type_select", 5);
