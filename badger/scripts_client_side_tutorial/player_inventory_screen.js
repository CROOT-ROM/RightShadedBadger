CheckTutorial("player_inventory_screen", and(HasThePlayerCollectedEnoughOfParticularResources(1, ["unlock_onboarding_act1_complete"]), HaveSecondsPassedSinceSessionStart(600)));

SetHintDelay("player_inventory_screen", 240);
