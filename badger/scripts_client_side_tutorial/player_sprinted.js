// Sprint Tutorial
CheckTutorial("player_sprinted",
    and(
        not( HasPlayerSprintedANumberOfTimesThisSession(1) ),
        HaveSecondsPassedSinceSessionStart(600), 
        HasThePlayerCollectedEnoughOfParticularResources(1, ["unlock_onboarding_act1_started"])
    )
);

SetHintDelay("player_sprinted", 10);

BypassIf("player_sprinted", HasPlayerSprintedANumberOfTimesThisSession(2));
