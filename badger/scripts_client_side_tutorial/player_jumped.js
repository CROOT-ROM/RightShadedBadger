// Jump Tutorial
CheckTutorial("player_jumped", and(not(HasPlayerJumpedThisSession()), HasTutorialBeenCompletedSomeAmountOfSecondsAgo("player_turned_camera", 40), HasTutorialBeenCompleted("player_move"), or(HasThePlayerCollectedEnoughOfParticularResources(1, ["unlock_onboarding_act0_started"]), HasThePlayerCollectedEnoughOfParticularResources(1, ["unlock_onboarding_act1_started"]))));

SetHintDelay("player_jumped", 5);

BypassIf("player_jumped", HasPlayerJumpedThisSession());
