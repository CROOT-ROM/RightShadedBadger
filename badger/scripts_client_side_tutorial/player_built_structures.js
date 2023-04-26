// Player Building Structures Tutorial
CheckTutorial("player_built_structures", and(not(HasThePlayerPlacedAnyBuildableANumberOfTimes(1)), HasThePlayerCollectedEnoughOfParticularResources(1, ["unlock_onboarding_act1_complete"]), HaveSecondsPassedSinceSessionStart(300), HasPlayerApproachedANewVillageANumberOfTimesThisSession(1)));

HintTime("player_built_structures", 10);

BypassIf("player_built_structures", HasThePlayerPlacedAnyBuildableANumberOfTimes(1));
