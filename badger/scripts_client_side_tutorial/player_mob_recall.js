// Player Mob Recall

CreatePlayerProximityBucket("wood_golem_prox_bucket",["wood_golem_onboarding"],[""],"friendly",100);
CreatePlayerProximityBucket("stone_golem_prox_bucket",["stone_golem_onboarding"],[""],"friendly",100);
CreatePlayerProximityBucket("mossy_golem_prox_bucket",["mossy_golem_onboarding"],[""],"friendly",100);
CreatePlayerProximityBucket("cobblestone_golem_prox_bucket",["cobblestone_golem_onboarding"],[""],"friendly",100);


CheckTutorial("player_mob_recall", and(
    HasThePlayerCollectedEnoughOfParticularResources(1, ["unlock_onboarding_act1_started"]), 
    or(
        HasMobExitedAPlayerProximityBucketANumberOfTimesThisSession("wood_golem_prox_bucket", 3),
        HasMobExitedAPlayerProximityBucketANumberOfTimesThisSession("stone_golem_prox_bucket", 3),
        HasMobExitedAPlayerProximityBucketANumberOfTimesThisSession("mossy_golem_prox_bucket", 3),
        HasMobExitedAPlayerProximityBucketANumberOfTimesThisSession("cobblestone_golem_prox_bucket", 3),
    )
)
    );

// SetHintDelay("player_mob_recall", 5);
