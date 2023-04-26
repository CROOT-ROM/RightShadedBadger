// Looked at Map

CheckTutorial("player_looked_at_map", and(HasThePlayerCollectedEnoughOfParticularResources(1, ["unlock_onboarding_destroy_dbb"]), not(HasThePlayerCollectedEnoughOfParticularResources(1, ["unlock_onboarding_tutorials_valid"]))));

SetHintDelay("player_looked_at_map", 10);

BypassIf("player_looked_at_map", HasPlayerOpenedTheMap(1));
