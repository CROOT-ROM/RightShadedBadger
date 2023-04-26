// Player Hero Spawned Units

//CheckTutorial(
//  "player_hero_spawned_units",
//  orN(
//    andN(
//      HasThePlayerCollectedEnoughOfParticularResources(1, [
//        "unlock_onboarding_herospawn_complete",
//      ]),
//      HaveSecondsPassedSinceSessionStart(360),
//      not(
//        HasThePlayerPlacedABuildableStructure(
//          "badger:temp_spawner_single_cavalry_golem"
//        )
//      ),
//      not(
//        HasThePlayerPlacedABuildableStructure(
//          "badger:temp_spawner_single_stone_golem"
//        )
//      ),
//      not(
//        HasThePlayerPlacedABuildableStructure(
//          "badger:temp_spawner_single_support_golem"
//        )
//      ),
//      not(
//        HasThePlayerPlacedABuildableStructure(
//          "badger:temp_spawner_single_wood_golem"
//        )
//      )
//    ),
//    andN(
//      HasPlayerApproachedPiglinBaseThisSession(),
//      HasThePlayerCollectedEnoughOfParticularResources(1, [
//        "unlock_onboarding_herospawn_complete",
//      ]),
//      not(
//        HasThePlayerPlacedABuildableStructure(
//          "badger:temp_spawner_single_cavalry_golem"
//        )
//      ),
//      not(
//        HasThePlayerPlacedABuildableStructure(
//          "badger:temp_spawner_single_stone_golem"
//        )
//      ),
//      not(
//        HasThePlayerPlacedABuildableStructure(
//          "badger:temp_spawner_single_support_golem"
//        )
//      ),
//     not(
//        HasThePlayerPlacedABuildableStructure(
//          "badger:temp_spawner_single_wood_golem"
//        )
//      )
//    )
//  )
//);

//BypassIf(
//  "player_hero_spawned_units",
//  and(
//    HasThePlayerCollectedEnoughOfParticularResources(1, [
//      "unlock_onboarding_herolure_complete",
//    ]),
//    or(
//      HasThePlayerPlacedABuildableStructure(
//        "badger:temp_spawner_single_cavalry_golem"
//      ),
//      HasThePlayerPlacedABuildableStructure(
//        "badger:temp_spawner_single_stone_golem"
//      ),
//      HasThePlayerPlacedABuildableStructure(
//        "badger:temp_spawner_single_support_golem"
//      ),
//      HasThePlayerPlacedABuildableStructure(
//        "badger:temp_spawner_single_wood_golem"
//      )
//    )
//  )
//);
