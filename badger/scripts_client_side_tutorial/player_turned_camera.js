//Camera Tutorial

CheckTutorial("player_turned_camera", and(HaveSecondsPassedSinceSessionStart(240), HasTutorialBeenCompletedSomeAmountOfSecondsAgo("player_move", 20), or(HasThePlayerCollectedEnoughOfParticularResources(1, ["unlock_onboarding_act0_started"]), HasThePlayerCollectedEnoughOfParticularResources(1, ["unlock_onboarding_act1_started"]))));

SetHintDelay("player_turned_camera", 5);

BypassIf("player_turned_camera", HasPlayerTurnedCameraThisSession());
