/// WARNING
///
/// This file is much more for the programmers than other roles on the team.
/// It's very cute, but you might want to check in with someone before changing it.
/// If you're in a design or production role. Feel free to reach out on #badger-campaign
/// for more information.

const d_and = function (...params) {
  return { name: "and", values: params };
};

const d_and_delay = function (delay, ...params) {
  return { name: "and", values: params, delay: delay };
};

const d_or = function (...params) {
  return { name: "or", values: params };
};

const d_or_delay = function (delay, ...params) {
  return { name: "or", values: params, delay: delay };
};

const d_not = function (a) {
  return { name: "not", value: a };
};

const d_HaveSecondsPassedSinceSessionStart = function (seconds) {
  return { name: "HaveSecondsPassedSinceSessionStart", secondsPassed: seconds };
};

const d_HasPlayerMovedThisSession = function () {
  return { name: "HasPlayerMovedThisSession" };
};

const d_HasPlayerTurnedCameraThisSession = function () {
  return { name: "HasPlayerTurnedCameraThisSession" };
};

const d_HasTutorialBeenCompleted = function (key) {
  return { name: "HasTutorialBeenCompleted", tutorial: key };
};

const d_HasTutorialBeenCompletedSomeSecondsAgo = function (key, seconds) {
  return {
    name: "HasTutorialBeenCompletedSomeSecondsAgo",
    tutorial: key,
    delay: seconds,
  };
};

const d_HasPlayerPlacedLureThisSession = function () {
  return { name: "HasPlayerPlacedLureThisSession" };
};

const d_HasPlayerPlacedLureANumberOfTimesThisSession = function (quantity) {
  return {
    name: "HasPlayerPlacedLureANumberOfTimesThisSession",
    quantity: quantity,
  };
};

const d_HasPlayerUsedLureANumberOfTimesThisSession = function (quantity) {
  return {
    name: "HasPlayerUsedLureANumberOfTimesThisSession",
    quantity: quantity,
  };
};

const d_HasPlayerStartedLuringMobs = function (bucketName, quantity) {
  return {
    name: "HasPlayerStartedLuringMobs",
    bucketName: bucketName,
    quantity: quantity
  }
};

const d_HasPlayerStoppedLuringMobs = function (bucketName, quantity) {
  return {
    name: "HasPlayerStoppedLuringMobs",
    bucketName: bucketName,
    quantity: quantity
  }
}

const d_HasPlayerStartedDirectingMobs = function (bucketName, quantity) {
  return {
    name: "HasPlayerStartedDirectingMobs",
    bucketName: bucketName,
    quantity: quantity
  }
};

const d_HasPlayerStoppedDirectingMobs = function (bucketName, quantity) {
  return {
    name: "HasPlayerStoppedDirectingMobs",
    bucketName: bucketName,
    quantity: quantity
  }
}

const d_HasPlayerUsedDirectorANumberOfTimesThisSession = function (quantity) {
  return {
    name: "HasPlayerUsedDirectorANumberOfTimesThisSession",
    quantity: quantity,
  };
};

const d_HasPlayerJumpedThisSession = function () {
  return { name: "HasPlayerJumpedThisSession" };
};

const d_HasPlayerApproachedPiglinBaseThisSession = function () {
  return { name: "HasPlayerApproachedPiglinBaseThisSession" };
};

const d_HasThePlayerCollectedEnoughResources = function (amount) {
  return {
    name: "HasThePlayerCollectedEnoughResources",
    amount: amount,
    resources: ["wood", "stone", "iron", "coal", "gold", "diamond", "redstone"],
  };
};

const d_HasThePlayerCollectedEnoughOfParticularResources = function (
  amount,
  resources
) {
  return {
    name: "HasThePlayerCollectedEnoughResources",
    amount: amount,
    resources: resources,
  };
};

const d_HasThePlayerPlacedABuildableStructure = function (buildableArchetype) {
  return {
    name: "HasThePlayerPlacedABuildableStructure",
    buildable: buildableArchetype,
  };
};

const d_HasPlayerClosedTheMap = function () {
  return { name: "HasPlayerClosedTheMap" };
}

const d_HasPlayerClosedTheMapEnoughTimes = function (quantity) {
  return { name: "HasPlayerClosedTheMapEnoughTimes", quantity: quantity };
};

const d_HasPlayerOpenedTheMap = function () {
  return { name: "HasPlayerOpenedTheMap" };
};

const d_HasPlayerOpenedTheMapEnoughTimes = function (quantity) {
  return { name: "HasPlayerOpenedTheMapEnoughTimes", quantity: quantity };
};

const d_IsPlayerHealthAboveACertainPercentage = function (percentage) {
  return {
    name: "IsPlayerHealthAboveACertainPercentage",
    percentage: percentage,
  };
};

const d_IsPlayerHealthBelowACertainPercentage = function (percentage) {
  return {
    name: "IsPlayerHealthBelowACertainPercentage",
    percentage: percentage,
  };
};

const d_HasPlayerHealthStayedAboveACertainPercentageThisSession = function (
  percentage
) {
  return {
    name: "HasPlayerHealthStayedAboveACertainPercentageThisSession",
    percentage: percentage,
  };
};

const d_HasPlayerHealthEverDroppedToACertainPercentageThisSession = function (
  percentage
) {
  return {
    name: "HasPlayerHealthEverDroppedToACertainPercentageThisSession",
    percentage: percentage,
  };
};

const d_HasThePlayerRespawnedACertainNumberOfTimesThisSession = function (
  quantity
) {
  return {
    name: "HasThePlayerRespawnedACertainNumberOfTimesThisSession",
    quantity: quantity,
  };
};

const d_HasThePlayerDeconstructedACertainNumberOfTimesThisSession = function (
  quantity
) {
  return {
    name: "HasThePlayerDeconstructedACertainNumberOfTimesThisSession",
    quantity: quantity,
  };
};

const d_HasThePlayerSeenAnInteractPromptACertainNumberOfTimesThisSession = function (
  quantity
) {
  return {
    name: "HasThePlayerSeenAnInteractPromptACertainNumberOfTimesThisSession",
    quantity: quantity,
  };
};

const d_HasPlayerWatchedAnFMVThisSession = function (fmv) {
  return { name: "HasPlayerWatchedAnFMVThisSession", fmv: fmv };
};

const d_HasPlayerFinishedWatchingAnFMVThisSession = function (fmv) {
  return { name: "HasPlayerFinishedWatchingAnFMVThisSession", fmv: fmv };
};

const d_HasPlayerPressedLocalActionButton = function (action, quantity) {
  return {
    name: "HasPlayerPressedLocalActionButton",
    action: action,
    quantity: quantity,
  };
};

const d_IsGameRuleSet = function (gameRule) {
  return {
    name: "IsGameRuleSet",
    gameRule: gameRule
  };
};

const d_HasPlayerInteractedThisSession = function (quantity) {
  return { name: "HasPlayerInteractedThisSession", quantity: quantity };
};

const d_HasPlayerApproachedANewVillageANumberOfTimesThisSession = function (
  quantity
) {
  return {
    name: "HasPlayerApproachedANewVillageANumberOfTimesThisSession",
    quantity: quantity,
  };
};

const d_HasPlayerAttemptedToBuildOnAnInvalidBlockANumberOfTimesThisSession = function (
  blockType,
  quantity
) {
  return {
    name: "HasPlayerAttemptedToBuildOnAnInvalidBlockANumberOfTimesThisSession",
    blockType: blockType,
    quantity: quantity,
  };
};

const d_HasPlayerAttemptedToBuildOnNetherANumberOfTimesThisSession = function (
  quantity
) {
  return d_HasPlayerAttemptedToBuildOnAnInvalidBlockANumberOfTimesThisSession(
    "badger:block_netherrack",
    quantity
  );
};

const d_HasPlayerAttemptedToPlaceOnAnInvalidZone = function (quantity) {
  return {
    name: "HasPlayerAttemptedToPlaceOnAnInvalidZone",
    quantity: quantity,
  };
};

const d_HasPlayerCycledTheHotbarEnough = function (quantity) {
  return { name: "HasPlayerCycledTheHotbarEnough", quantity: quantity };
};

const d_HasPlayerChangedHotbarCategoryEnough = function (quantity) {
  return { name: "HasPlayerChangedHotbarCategoryEnough", quantity: quantity };
};

const d_HasPlayerPlacedAMapMarkerEnough = function (quantity) {
  return { name: "HasPlayerPlacedWaypointMarkerEnough", quantity: quantity };
};
const d_HasPlayerFastTravelledEnough = function (quantity) {
  return { name: "HasPlayerFastTravelledEnough", quantity: quantity };
};

const d_HasPlayerJumpedThisNagSession = function(quantity) {
  return { name: "HasPlayerJumpedThisNagSession", quantity: quantity };
};

const d_HaveSecondsPassedSinceTheNagSessionStarted = function(duration) {
  return { name: "HaveSecondsPassedSinceTheNagSessionStarted", duration: duration };
};

const d_HasPlayerUsedTheLureDuringTheNagSession = function(quantity) {
  return { name: "HasPlayerUsedTheLureDuringTheNagSession", quantity: quantity };
};

const d_HasPlayerUsedTheDirectorDuringTheNagSession = function(quantity) {
  return { name: "HasPlayerUsedTheDirectorDuringTheNagSession", quantity: quantity };
};

const d_HasPlayerApproachedAPiglinBaseDuringTheNagSession = function(quantity) {
  return { name: "HasPlayerApproachedAPiglinBaseDuringTheNagSession", quantity: quantity };
};

const d_HasPlayerOpenedTheMapDuringTheNagSession = function(quantity) {
  return { name: "HasPlayerOpenedTheMapDuringTheNagSession", quantity: quantity };
};

const d_HasPlayerClosedTheMapDuringTheNagSession = function(quantity) {
  return { name: "HasPlayerClosedTheMapDuringTheNagSession", quantity: quantity };
};

const d_HasPlayerCycledTheHotbarDuringTheNagSession = function(quantity) {
  return { name: "HasPlayerCycledTheHotbarDuringTheNagSession", quantity: quantity };
};

const d_HasThePlayerPlacedABuildableStructureThisNagSessionDescription = function(buildable) {
  return { name: "HasThePlayerPlacedABuildableStructureThisNagSessionDescription", buildable: buildable };
};

const d_PVPPlayerHQHealthAtOrBelowPercent = function (percent) {
  return { name: "PVP_PlayerHQHealthAtOrBelowPercent", percent: percent };
}

const d_PVPPlayerHasPlayedEnoughMatches = function (quantity) {
  return { name: "PVP_PlayerHasPlayedEnoughMatches", quantity: quantity };
}

const d_HasTheClientPlayerCollectedEnoughOfParticularResources = function (
  amount,
  resources
) {
  return {
    name: "HasLocalPlayerCollectedResourcesOfAParticularAmount",
    amount: amount,
    resources: resources,
  };
};

const d_HasTheClientPlayerCollectedEnoughOfParticularResourcesThisNagSession = function (
  amount,
  resources
) {
  return {
    name: "HasLocalPlayerCollectedResourcesOfAParticularAmountThisNagSession",
    amount: amount,
    resources: resources,
  };
};

const d_HasPlayerVisitedVillageANumberOfTimes = function (bucketName, quantity) {
  return {
    name: "HasPlayerVisitedVillageANumberOfTimes",
    bucketName: bucketName,
    quantity: quantity
  }
};

const d_IsPlayerVisitingVillage = function (bucketName) {
  return {
    name: "IsPlayerVisitingVillage",
    bucketName: bucketName
  }
};

const LOCAL_ACTION_PLAYER_ATTACK = "button.hero_action_1";
const LOCAL_ACTION_MOUNT_ABILITY = "button.mount_action_1";

const CheckTutorial = d_CheckTutorial;
const BypassIf = d_BypassIf;

const SetHintDelay = (tutorialKey, hintDelay, voCue, voCompleteDelay) => {
  // If the scripter doesn't handle the hint delay config, 
  voCue = voCue ? voCue : "";
  voCompleteDelay = voCompleteDelay ? voCompleteDelay : 0;

  d_SetHintDelay(tutorialKey, hintDelay, voCue, voCompleteDelay);
};

const CheckNagPattern = d_SetNagInterval;
const SetMaxNagCount = d_SetMaxNagCount;
const BypassNagIf = d_BypassNagIf;

const SetFinalOnboardingItem = d_SetCompletionItem;

const CreateMobInfoBucket = d_CreateMobInfoBucket;
const CreateVillageInfoBucket = (villageBucketName, teamNames, factionNames, sizes, allianceRules) => {
  allianceRules = allianceRules ? allianceRules : [];

  d_CreateVillageInfoBucket(villageBucketName, teamNames, factionNames, sizes, allianceRules);
}

const d_HasMobExitedAPlayerProximityBucketANumberOfTimesThisSession = function(bucketName, quantity) {
  return {
    name: "HasMobExitedAPlayerProximityBucketANumberOfTimesThisSession",
    bucketName: bucketName,
    quantity: quantity ? quantity : 1
  }
};
const d_HasMobEnteredAPlayerProximityBucketANumberOfTimesThisSession = function(bucketName, quantity) {
  return {
    name: "HasMobEnteredAPlayerProximityBucketANumberOfTimesThisSession",
    bucketName: bucketName,
    quantity: quantity ? quantity : 1
  }
};

const and = d_and;
const andN = d_and;
const andNwithDelay = d_and_delay;
const or = d_or;
const orN = d_or;
const not = d_not;
const HaveSecondsPassedSinceSessionStart = d_HaveSecondsPassedSinceSessionStart;
const HasPlayerMovedThisSession = d_HasPlayerMovedThisSession;
const HasPlayerTurnedCameraThisSession = d_HasPlayerTurnedCameraThisSession;
const HasTutorialBeenCompleted = d_HasTutorialBeenCompleted;
const HasTutorialBeenCompletedSomeAmountOfSecondsAgo = d_HasTutorialBeenCompletedSomeSecondsAgo;
const HasPlayerPlacedLureThisSession = d_HasPlayerPlacedLureThisSession;
const HasPlayerPlacedLureANumberOfTimesThisSession = d_HasPlayerPlacedLureANumberOfTimesThisSession;
const HasPlayerUsedLureANumberOfTimesThisSession = d_HasPlayerUsedLureANumberOfTimesThisSession;
const HasPlayerStartedLuringMobs = d_HasPlayerStartedLuringMobs;
const HasPlayerStoppedLuringMobs = d_HasPlayerStoppedLuringMobs;
const HasPlayerStartedDirectingMobs = d_HasPlayerStartedDirectingMobs;
const HasPlayerStoppedDirectingMobs = d_HasPlayerStoppedDirectingMobs;
const HasPlayerUsedDirectorANumberOfTimesThisSession = d_HasPlayerUsedDirectorANumberOfTimesThisSession;
const HasPlayerJumpedThisSession = d_HasPlayerJumpedThisSession;
const HasPlayerApproachedPiglinBaseThisSession = d_HasPlayerApproachedPiglinBaseThisSession;
const HasThePlayerCollectedEnoughResources = d_HasThePlayerCollectedEnoughResources;
const HasThePlayerCollectedEnoughOfParticularResources = d_HasThePlayerCollectedEnoughOfParticularResources;
const IsTheCurrentOnboardingFlagUp = (onboardingFlagResource) => {
  return d_HasThePlayerCollectedEnoughOfParticularResources(1, [ onboardingFlagResource ] );
};
const HasThePlayerPlacedABuildableStructure = d_HasThePlayerPlacedABuildableStructure;
const HasPlayerClosedTheMap = d_HasPlayerClosedTheMap;
const HasPlayerClosedTheMapEnoughTimes = d_HasPlayerClosedTheMapEnoughTimes;
const HasPlayerOpenedTheMap = d_HasPlayerOpenedTheMap;
const HasPlayerOpenedTheMapEnoughTimes = d_HasPlayerOpenedTheMapEnoughTimes;
const IsPlayerHealthAboveACertainPercentage = d_IsPlayerHealthAboveACertainPercentage;
const IsPlayerHealthBelowACertainPercentage = d_IsPlayerHealthBelowACertainPercentage;
const HasPlayerHealthStayedAboveACertainPercentageThisSession = d_HasPlayerHealthStayedAboveACertainPercentageThisSession;
const HasPlayerHealthEverDroppedToACertainPercentageThisSession = d_HasPlayerHealthEverDroppedToACertainPercentageThisSession;
const HasThePlayerRespawnedACertainNumberOfTimesThisSession = d_HasThePlayerRespawnedACertainNumberOfTimesThisSession;
const HasThePlayerDeconstructedACertainNumberOfTimesThisSession = d_HasThePlayerDeconstructedACertainNumberOfTimesThisSession;
const HasThePlayerSeenAnInteractPromptACertainNumberOfTimesThisSession = d_HasThePlayerSeenAnInteractPromptACertainNumberOfTimesThisSession;
const HasPlayerWatchedAnFMVThisSession = d_HasPlayerWatchedAnFMVThisSession;
const HasPlayerStartedWatchingAnFMVThisSession = HasPlayerWatchedAnFMVThisSession;
const HasPlayerFinishedWatchingAnFMVThisSession = d_HasPlayerFinishedWatchingAnFMVThisSession;
const HasPlayerPressedLocalActionButton = d_HasPlayerPressedLocalActionButton;
const IsGameRuleSet = d_IsGameRuleSet;
const HasPlayerInteractedThisSession = d_HasPlayerInteractedThisSession;
const HasPlayerApproachedANewVillageANumberOfTimesThisSession = d_HasPlayerApproachedANewVillageANumberOfTimesThisSession;
const HasPlayerAttemptedToBuildOnAnInvalidBlockANumberOfTimesThisSession = d_HasPlayerAttemptedToBuildOnAnInvalidBlockANumberOfTimesThisSession;
const HasPlayerAttemptedToBuildOnNetherANumberOfTimesThisSession = d_HasPlayerAttemptedToBuildOnNetherANumberOfTimesThisSession;
const HasPlayerAttemptedToPlaceOnAnInvalidZone = d_HasPlayerAttemptedToPlaceOnAnInvalidZone;
const HasPlayerCycledTheHotbarEnough = d_HasPlayerCycledTheHotbarEnough;
const HasPlayerChangedHotbarCategoryEnough = d_HasPlayerChangedHotbarCategoryEnough;
const HasPlayerPlacedAMapMarkerEnough = d_HasPlayerPlacedAMapMarkerEnough;
const HasPlayerFastTravelledEnough = d_HasPlayerFastTravelledEnough;
const RevealHUDElementWithDelayIfTutorialComplete = d_RevealHUDElementWithDelayIfTutorialComplete;

const HasPlayerJumpedThisNagSession = d_HasPlayerJumpedThisNagSession;
const HaveSecondsPassedSinceTheNagSessionStarted = d_HaveSecondsPassedSinceTheNagSessionStarted;
const HasPlayerUsedTheLureDuringTheNagSession = d_HasPlayerUsedTheLureDuringTheNagSession;
const HasPlayerUsedTheDirectorDuringTheNagSession = d_HasPlayerUsedTheDirectorDuringTheNagSession;
const HasPlayerApproachedAPiglinBaseDuringTheNagSession = d_HasPlayerApproachedAPiglinBaseDuringTheNagSession;
const HasPlayerOpenedTheMapDuringTheNagSession = d_HasPlayerOpenedTheMapDuringTheNagSession;
const HasPlayerClosedTheMapDuringTheNagSession = d_HasPlayerClosedTheMapDuringTheNagSession;
const HasPlayerCycledTheHotbarDuringTheNagSession = d_HasPlayerCycledTheHotbarDuringTheNagSession;
const HasThePlayerPlacedABuildableStructureThisNagSession = d_HasThePlayerPlacedABuildableStructureThisNagSessionDescription;

const PVP_PlayerHQHealthAtOrBelowPercent = d_PVPPlayerHQHealthAtOrBelowPercent;
const PVP_PlayerHasPlayedEnoughMatches = d_PVPPlayerHasPlayedEnoughMatches;
const HasTheClientPlayerCollectedEnoughOfParticularResources = d_HasTheClientPlayerCollectedEnoughOfParticularResources;
const HasTheClientPlayerCollectedEnoughOfParticularResourcesThisNagSession = d_HasTheClientPlayerCollectedEnoughOfParticularResourcesThisNagSession;
const HasPlayerVisitedVillageANumberOfTimes = d_HasPlayerVisitedVillageANumberOfTimes;
const IsPlayerVisitingVillage = d_IsPlayerVisitingVillage;

const CreateAllianceRuleVillageInfoBucket = d_CreateAllianceRuleVillageInfoBucket;



const d_HasPlayerReachedAResourceCapACertainNumberOfTimes = function(resource, quantity) {
  return {
    name: "HasPlayerReachedAResourceCapACertainNumberOfTimes",
    resource: resource,
    amount: quantity ? quantity : 0
  }
};

const d_HasPlayerReachedAResourceCapACertainNumberOfTimesThisNagSession = function(resource, quantity) {
  return {
    name: "HasPlayerReachedAResourceCapACertainNumberOfTimesThisNagSession",
    resource: resource,
    amount: quantity ? quantity : 0
  }
};

const HasPlayerReachedAResourceCapACertainNumberOfTimes = d_HasPlayerReachedAResourceCapACertainNumberOfTimes;
const HasPlayerReachedAResourceCapACertainNumberOfTimesThisNagSession = d_HasPlayerReachedAResourceCapACertainNumberOfTimesThisNagSession;

const CreatePlayerProximityBucket = d_CreatePlayerProximityBucket;
const HasMobExitedAPlayerProximityBucketANumberOfTimesThisSession = d_HasMobExitedAPlayerProximityBucketANumberOfTimesThisSession;
const HasMobEnteredAPlayerProximityBucketANumberOfTimesThisSession = d_HasMobEnteredAPlayerProximityBucketANumberOfTimesThisSession;
