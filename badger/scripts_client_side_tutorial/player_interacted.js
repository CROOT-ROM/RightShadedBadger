// Player Interacted
//CheckTutorial(
//  "player_interacted",
//  and(
//    HasThePlayerSeenAnInteractPromptACertainNumberOfTimesThisSession(8),
//    HaveSecondsPassedSinceSessionStart(60),
//    HasPlayerApproachedANewVillageANumberOfTimesThisSession(1),
//    HasTutorialBeenCompletedSomeAmountOfSecondsAgo(
//      "player_built_structures",
//      30
//    )
//  )
//);

//BypassIf(
//  "player_interacted",
//  or(
//    HasPlayerInteractedThisSession(4),
//    HasThePlayerDeconstructedACertainNumberOfTimesThisSession(4)
//  )
//);
