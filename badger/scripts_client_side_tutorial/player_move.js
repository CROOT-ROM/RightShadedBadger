// Player Movement

CheckTutorial("player_move", and(HaveSecondsPassedSinceSessionStart(240), not(HasPlayerMovedThisSession()), or(HasThePlayerCollectedEnoughOfParticularResources(1, ["unlock_onboarding_act0_started"]), HasThePlayerCollectedEnoughOfParticularResources(1, ["unlock_onboarding_act1_started"]))));

SetHintDelay("player_move", 5);

BypassIf("player_move", HasPlayerMovedThisSession());
