

/**
 * Evaluate the hint criteria for a tutorial. This is the heart of checking game state.
 *
 * @param tutorialName The name of the tutorial to evaluate.
 * @param queryToEvaluate The conditions to determine if the tutorial hint should be displayed.
 */
declare function CheckTutorial( tutorialName: string, queryToEvaluate: Query): void;

/**
 * Evaluates criteria if a tutorial should be completed without displaying a hint.
 *
 * @param tutorialName The name of the tutorial to evaluate bypass.
 * @param queryToEvaluate The conditions to determine if the tutorial hint should be bypassed.
 */
declare function BypassIf( tutorialName: string, queryToEvaluate: Query): void;

/**
 * Sets up a tutorial to become an intermitteent reminder before being completed
 * 
 * @param tutorialName  The name of the tutorial to have an intermittent reminder
 * @param nagInterval The interval of the reminder VO
 * @param advanceSequenceCue The sequence cue from `vo_sequence_definitions.json` to use for checking when VO is done
 * @param nagCompletionQuery The query/conditions to check if the player has completed the required criteria
 */
declare function CheckNagPattern( tutorialName: string, nagInterval: number, advanceSequenceCue: string, nagCompletionQuery: Query);

/**
 * Sets the upper limit on the number of times a tutorial can nag from `CheckNagPattern`
 * 
 * @param tutorialName The name of the tutorial to set the limit on the number of nags
 * @param maxNumberOfTimesToNag The upper limit on the amount of times that a tutorial can nag
 */
declare function SetMaxNagCount( tutorialName: string, maxNumberOfTimesToNag: number );

/**
 * Overrides the default time the hint should display on the screen
 *
 * @param tutorialName The name of the tutorial to override
 * @param overrideTime The time to override the hint display (clamped between `0.1` and `30` seconds)
 */
declare function HintTime( tutorialName: string, overrideTime: number): void;

/**
 * Sets the final tutorial item. If this item is completed, that indicates that client-side tutorial work is done.
 * 
 * @param tutorialName The name of the tutorial to indicate as complete
 */
declare function SetFinalOnboardingItem( tutorialName: string );

/**
 * A condition that periodically evaluates the game state to see if it's `true` or `false`.
 */
declare interface Query {};

/**
 * Evaluates to `true` if **both** `a` and `b` evaluate to `true`.
 *
 * @param a
 * @param b
 */
declare function and(a: Query, b: Query): Query;

/**
 * Evaluates to `true` if **all** of the queries evaluate to `true`.
 *
 */
declare function andN(...queries: Query): Query;

/**
 * Evaluates to `true` if **one of** `a` or `b` evaluates to `true`.
 *
 * @param a
 * @param b
 */
declare function or(a: Query, b: Query): Query;

/**
 * Evaluates to `true` if **one of** of the queries evaluates to `true`.
 *
 */
declare function orN(...queries: Query): Query;

/**
 * Evaluates to the opposite of the query provided
 *
 * @param a The Query to negate.
 */
declare function not(a: Query): Query;

/**
 * Evaluates depending on how much time has been passed since the user started playing.
 *
 * @param seconds The amount of time since the game has been loaded.
 */
declare function HaveSecondsPassedSinceSessionStart( seconds: number ): Query;

/**
 * Evaluates depending if the player has moved this session.
 */
declare function HasPlayerMovedThisSession(): Query;

/**
 * Evaluates depending if the player has turned the camera this session.
 */
declare function HasPlayerTurnedCameraThisSession(): Query;

/**
 * Evaluates depending if the player has placed a lure this session.
 */
declare function HasPlayerPlacedLureThisSession(): Query;

/**
 * Evaluates to true if the player has placed a lure a number of times this session.
 *
 * @param quantity The quantity to check against
 */
declare function HasPlayerPlacedLureANumberOfTimesThisSession(quantity: number): Query;

/**
 * Evaluates depending if the player has placed a director this session.
 */
declare function HasPlayerPlacedDirectorThisSession(): Query;

/**
 * Evaluates to true if the player has placed a director a number of times this session.
 *
 * @param quantity The quantity to check against
 */
declare function HasPlayerPlacedDirectorANumberOfTimesThisSession(quantity: number): Query;


/**
 * Evaluates depending if the player has jumped at all this session.
 */
declare function HasPlayerJumpedThisSession(): Query;

/**
 * Evaluates depending if the player has approached a piglin base this session.
 */
declare function HasPlayerApproachedPiglinBaseThisSession(): Query;

/**
 * Evaluates depending if the player has approached a piglin base a number of times this session.
 * 
 * @param quantity The minimum number of times a player should have approached a piglin base this session.
 */
declare function HasPlayerApproachedPiglinBaseANumberOfTimesThisSession(quantity: number): Query;

/**
 * Evaluates depending if the player has collected a certain quantity of resources.
 */
declare function HasThePlayerCollectedEnoughResources(quantityThreshold: number): Query;

/**
 * Evaluates depending if the player has collected a certain quantity of resources.
 *
 * @param quantityThreshold The quantity to check against
 * @param resourcesToCheck An array of strings representing particular resources (eg: `['wood', 'iron'] would check against the sum of both wood and iron)
 */
declare function HasThePlayerCollectedEnoughOfParticularResources(quantityThreshold: number, resourcesToCheck: string[]): Query;

/**
 * Evaluates depending if an onboarding flag is up
 * 
 * @param onboardingFlagResource The resource to check against
 */
declare function IsTheCurrentOnboardingFlagUp(onboardingFlagResource: string): Query;

/**
 * Evaluates depending if another tutorial has been completed.
 *
 * @param tutorialName The name of the tutorial to check
 */
declare function HasTutorialBeenCompleted( tutorialName: string): Query;

/**
 * Evaluates depending if another tutorial has been completed for a certain amount of seconds this session.
 *
 * The time passed will reset to zero upon a new session starting.
 *
 * @param tutorialName The name of the tutorial to check
 * @param threshold The amount of seconds passed that the tutorial has been completed.
 */
declare function HasTutorialBeenCompletedSomeAmountOfSecondsAgo( tutorialName: string, threshold: number): Query;

/**
 * Evaluates depending if a specific structure has been placed by the local player this session
 *
 * @param structureArchetype The archetype of the structure to check (eg: `badger:spawner_wood_golem`)
 */
declare function HasThePlayerPlacedABuildableStructure(structureArchetype: string): Query;

/**
 * Evaluates depending on whether the passed in game rule is active.
 * 
 * @param gameRule The name of the game rule to be checked.
 */
declare function IsGameRuleSet(gameRule: string): Query;

/**
 * Evaluates depending if the local player has placed a structure a number of times this session.
 * 
 * @param quantity The number of times to check if the player has placed something.
 */
declare function HasThePlayerPlacedAnyBuildableANumberOfTimes(quantity: number): Query;

/**
 * Evaluates depending if whether or not the player has oepned the map or not.
 */
declare function HasPlayerOpenedTheMap(): Query;

/**
 * Evaluates depending the player has opened the map a certain number of times.
 *
 * @param quantity The minimum number of times the player should have opened the map.
 */
declare function HasPlayerOpenedTheMapEnoughTimes(quantity: number): Query;

/**
 * Evaluates to `true` if the player's health is currently *above* a certain percentage. **WARNING**: Queries may not evaluate every frame; very abrupt consectuive changes in player health can't be guarunteed to be evaluated correctly.
 *
 * @param quantity The percentage of health to check against
 */
declare function IsPlayerHealthAboveACertainPercentage(percentage: number): Query;

/**
 * Evaluates to `true` if the player's health is currently *below* a certain percentage. **WARNING**: Queries may not evaluate every frame; very abrupt consectuive changes in player health can't be guarunteed to be evaluated correctly.
 *
 * @param quantity The percentage of health to check against
 */
declare function IsPlayerHealthBelowACertainPercentage(percentage: number): Query;

/**
 * Evaluates to `true` if the player's health has always stayed above a certain percentage this session.
 *
 * @param percentage The percentage of health to check against for this session.
 */
declare function HasPlayerHealthStayedAboveACertainPercentageThisSession(percentage: number): Query;

/**
 * Evaluates to `true` if the player's health has ever dropped below a certain percentage this session.
 *
 * @param percentage The percentage of health to check against for this session.
 */
declare function HasPlayerHealthEverDroppedToACertainPercentageThisSession(percentage: number): Query;

/**
 * Evaluates depending on the number of times the player has used (not placed) a lure.
 * @param quantity The quantity to check against
 */
declare function HasPlayerUsedLureANumberOfTimesThisSession(quantity: number): Query;

/**
 * Evaluates depending on the number of times the player has used (not placed) a director.
 * @param quantity The quantity to check against
 */
declare function HasPlayerUsedDirectorANumberOfTimesThisSession(quantity: number): Query;

/**
 * Evaluates depending on the number of times the player has respawned this session.
 *
 * @param quantity The quantity to check against
 */
declare function HasThePlayerRespawnedACertainNumberOfTimesThisSession(quantity: number): Query;

/**
 * Evaluates depending on the number of times the player has successfully deconstructed a buildable.
 *
 * @param quantity The quantity to check against
 */
declare function HasThePlayerDeconstructedACertainNumberOfTimesThisSession(quantity: number): Query;

/**
 * Evaluates depending on the number of times the player has seen an interact prompt this session.
 *
 * @param quantity The quantity to check against
 */
declare function HasThePlayerSeenAnInteractPromptACertainNumberOfTimesThisSession(quantity: number): Query;

/**
 * Evaluates depending if the player has *started* watching a particular FMV.
 *
 * @param fmvName The name of the FMV to query against. Please use the relative path of the FMV to the resource pack (eg: `esource_packs/badger/videos/story/mst05_c05_the_factions_invade_fmv.bk2`)
 */
declare function HasPlayerWatchedAnFMVThisSession(fmvName: string): Query;

/**
 * Evaluates depending if the player has *started* watching a particular FMV. (alais of `HasPlayerWatchedAnFMVThisSession`)
 * 
 * @param fmvName  The name of the FMV to query against. Please use the relative path of the FMV to the resource pack (eg: `esource_packs/badger/videos/story/mst05_c05_the_factions_invade_fmv.bk2`)
 */
declare function HasPlayerStartedWatchingAnFMVThisSession(fmvName: string): Query;

/**
 * Evaluates depending if the player has *finished or skipped* a particular FMV.
 * 
 * @param fmvName  The name of the FMV to query against. Please use the relative path of the FMV to the resource pack (eg: `esource_packs/badger/videos/story/mst05_c05_the_factions_invade_fmv.bk2`)
 */
 declare function HasPlayerFinishedWatchingAnFMVThisSession(fmvName: string): Query;

/**
 * The name of the action for the player swinging their sword.
 */
declare const LOCAL_ACTION_PLAYER_ATTACK: string;

/**
 * The name of the action for the player activiating the mount ability.
 */
declare const LOCAL_ACTION_MOUNT_ABILITY: string;

/**
 * Evaluates depending if the player has pressed a particular button for a player action.
 *
 * @param actionName the name of the action
 */
declare function HasPlayerPressedLocalActionButton(actionName: string, quantity: number): Query;

/**
 * Evaluates depending on the number of times the player has interacted with something.
 *
 * @param quantity The number of times the player has attempted to interact with something.
 */
declare function HasPlayerInteractedThisSession(quantity: number): Query;

/**
 * Evaluates depending on the number of times a player has Approached a Village this session
 *
 * @param quantity The number of times the player has attempted to interact with something.
 */
declare function HasPlayerApproachedANewVillageANumberOfTimesThisSession(quantity: number): Query;

/**
 * Evaluates depending on the number of times the player has placed on an invalid block.
 *
 * @param quantity
 */
declare function HasPlayerAttemptedToBuildOnAnInvalidBlockANumberOfTimesThisSession(quantity: number): Query;

/**
 * Evaluates depending on the number of times the player has attempted to place on netherrack.
 *
 * @param quantity
 */
declare function HasPlayerAttemptedToBuildOnNetherANumberOfTimesThisSession(quantity: number): Query;

/**
 * Evaluates depending on the number of times the player attempted to place on an invalid zone.
 *
 * @param quantity
 */
declare function HasPlayerAttemptedToPlaceOnAnInvalidZone(quantity: number): Query;

/**
 * Evaluates depending on the number of times the player has cycled up/down the hotbar.
 *
 * @param quantity
 */
declare function HasPlayerCycledTheHotbarEnough(quantity: number): Query;

/**
 * Evaluates depending on the number of times the hotbar category has changed.
 *
 * @param quantity
 */
declare function HasPlayerChangedHotbarCategoryEnough(quantity: number): Query;

/**
 * Evaluates depending on the number of times the player has attempted to place a map marker.
 *
 * This does not check for server-side confirmation.
 *
 * @param quantity
 */
declare function HasPlayerPlacedAMapMarkerEnough(quantity: number): Query;

/**
 * Evaluates depending on the number of times the player has attempted to fast travel.
 *
 * This does not check for server-side confirmation.
 *
 * @param quantity
 */
declare function HasPlayerFastTravelledEnough(quantity: number): Query;

/**
 * Set HUD Element to reveal on a delay if tutorial has been completed
 *
 * @param tutorialName The name of the tutorial to evaluate.
 * @param hudName The name of the hud element to reveal.
 * @param delay The delay in seconds before revealing the hud element.
 */
declare function RevealHUDElementWithDelayIfTutorialComplete(tutorialName: string, hudName: string, delay: number): void;

/**
 * Evaluates depending on the number of times the local player has jumped during the current nag session
 * 
 * @param quantity The number of times the player will need to jump during the nag session.
 */
declare function HasPlayerJumpedThisNagSession(quantity: number): void;

/**
 * Evaluates depending on the amount of time that has passed during the nag session.
 * 
 * @param duration The number of seconds in the nag session to pass before this evaluates to true. 
 */
declare function HaveSecondsPassedSinceTheNagSessionStarted(duration: number): void;

/**
 *  Evaluates depending on the number of times the local player has used the lure this nag session
 * 
 * @param quantity The number of times to check that the player has used the lure this nag session
 */
declare function HasPlayerUsedTheLureDuringTheNagSession(quantity: number): void;

/**
 *  Evaluates depending on the number of times the local player has used the director this nag session
 * 
 * @param quantity The number of times to check that the player has used the director this nag session
 */
declare function HasPlayerUsedTheDirectorDuringTheNagSession(quantity: number): void;

/**
 *  Evaluates depending on the number of times the local player has approached a Piglin base this nag session
 * 
 * @param quantity The number of times to check that the player has approached a Piglin base this nag session
 */
declare function HasPlayerApproachedAPiglinBaseDuringTheNagSession(quantity: number): void;

/**
 *  Evaluates depending on the number of times the local player has opened the map this nag session
 * 
 * @param quantity The number of times to check that the player has opened the map this nag session
 */
declare function HasPlayerOpenedTheMapDuringTheNagSession(quantity: number): void;

/**
 *  Evaluates depending on the number of times the local player has closed the map this nag session
 * 
 * @param quantity The number of times to check that the player has closed the map this nag session
 */
declare function HasPlayerClosedTheMapDuringTheNagSession(quantity: number): void;

/**
 *  Evaluates depending on the number of times the local player has cycled the hotbar this nag session
 * 
 * @param quantity The number of times to check that the player has cycled the hotbar this nag session
 */
declare function HasPlayerCycledTheHotbarDuringTheNagSession(quantity: number): void;

/**
 *  Evaluates whether the player has palced a buildable during the nag session
 * 
 * @param buildable The buildable to check if placed
 */
declare function HasThePlayerPlacedABuildableStructureThisNagSession(buildable: string): void;

/**
 * Evaluates depending if the specific local player has gathered a certain quantity of resources.
 *
 * @param quantityThreshold The quantity to check against
 * @param resourcesToCheck An array of strings representing particular resources (eg: `['wood', 'iron'] would check against the sum of both wood and iron)
 */
declare function HasTheClientPlayerCollectedEnoughOfParticularResources(quantityThreshold: number, resourcesToCheck: string[]): Query;

/**
 * Evaluates depending if the specific local player has gathered a certain quantity of resources during the nag session.
 *
 * @param quantityThreshold The quantity to check against
 * @param resourcesToCheck An array of strings representing particular resources (eg: `['wood', 'iron'] would check against the sum of both wood and iron)
 */
declare function HasTheClientPlayerCollectedEnoughOfParticularResourcesThisNagSession(quantityThreshold: number, resourcesToCheck: string[]): Query;

/**
 * Sets the hint delay for a tutorial query
 * 
 * @param tutorialKey  The name of the tutorial to have an intermittent reminder
 * @param hintDelay The delay to fire the hint after the tutorial completes
 * @param voCue The VO cue of the key if there's a nag pattern 
 * @param voCompleteDelay The delay after the VO cue finishes
 */
declare function SetHintDelay(tutorialKey: string, hintDelay: number, voCue: string, voCompleteDelay: number): void;

/**
 * Creates a bucket that villages can match against. Declare this before writing your queries.
 * 
 * @param villageBucketName The new name of the village bucket
 * @param teamNames An array of strings identifying which team IDs the village belongs to. (eg: `piglin_team`)
 * @param factionNames An array of strings identifying which faction IDs the village belongs to. (eg: `faction.cul.001`)
 * @param sizes An array of strings identifying the village's size
 * @param allianceFilters (optional) An array of strings for alliance filters
 */
declare function CreateVillageInfoBucket(villageBucketName: string, teamNames: string[], factionNames: string[], sizes: string[], allianceFilters: string[]): void;

/**
 * Evaluates to true if the player has visited a particular type of village a certain number of times *this session*. @see CreateVillageInfoBucket
 * 
 * @param villageBucketName The village bucket to check against when checking for entry.
 * @param quantity The amount of times for the player to have visited matching villages to evaluate to true.
 */
declare function HasPlayerVisitedVillageANumberOfTimes(villageBucketName: string, quantity: number): Query;

/**
 * Evaluates to true if the player is currently visiting a village that matches a particular bucket. @see CreateVillageInfoBucket
 * 
 * @param villageBucketName  The village bucket to check against when checking for entry.
 */
declare function IsPlayerVisitingVillage(villageBucketName: string) : Query;

/**
 * Evaluates depending if the player has started directed a certain quantity of mobs
 * 
 * @param bucketName The name of the bucket to poll
 * @param quantity  The amount of mobs required to start directing to evaluate to true
 */
declare function HasPlayerStartedDirectingMobs(bucketName: string, quantity: number);

/**
 * 
 * @param bucketName  The name of the bucket to poll
 * @param quantity The amount of mobs required to stop directing to evaluate to true
 */
declare function HasPlayerStoppedDirectingMobs(bucketName: string, quantity: number);

/**
 * Creates a bucket that villages can check against. Uses the local player's *alliance rules* to check, rather than faction or team names. (as defined in `team_manager.json`)
 * 
 * @param bucketName The name of the bucket to poll
 * @param allianceRuleNames An array of alliance rules to check against. Queries will evaluate to `true` if *one* of these rules match.
 */
declare function CreateAllianceRuleVillageInfoBucket(bucketName: string, allianceRuleNames: string[]): void;

/**
 * Evaluates depending if the player has hit the resource cap for a certain resource a number of times this session.
 * 
 * @param resource The resource to check if the cap has been hit
 * @param quantity The minimum number of times the resource cap should be reached
 */
declare function HasPlayerReachedAResourceCapACertainNumberOfTimes(resource: string, quantity: number): Query;

/**
 * Evaluates depending if the player has hit the resource cap for a certain resource a number of times this **nag session**.
 * 
 * @param resource The resource to check if the cap has been hit
 * @param quantity The minimum number of times the resource cap should be reached
 */
declare function HasPlayerReachedAResourceCapACertainNumberOfTimesThisNagSession(resource: string, quantity: number): Query;

/**
 * Creates a bucket that checks against mobs being close to the player.
 * 
 * In order to be admitted to the bucket, the mob must be on a team, have a `badger:tags` component, as well as a `"badger:damage_receiver"` component. This is for performance reasons.
 * 
 * @param bucketName The name of the bucket to create
 * @param includeTags The include tags of the bucket 
 * @param excludeTags The exclude tags of the bucket
 * @param allianceRule The alliance rule for the bucket's include/exclude tags
 * @param radius The radius of the bucket around the player
 */
declare function CreatePlayerProximityBucket(bucketName: string, includeTags: string[], excludeTags: string[], allianceRule: string, radius: number): void;

/**
 * Evaluates depending if a matching entity has exited a bucket a number of times (see: `CreatePlayerProximityBucket`)
 * 
 * @param bucketName The name of the bucket to check exit against.
 * @param quantity The number of times the matching entity should have exited the bucket.
 */
declare function HasMobExitedAPlayerProximityBucketANumberOfTimesThisSession(bucketName: string, quantity: number): Query;

/**
 * Evaluates depending if a matching entity has exited a bucket a number of times (see: `CreatePlayerProximityBucket`)
 * 
 * @param bucketName The name of the bucket to check entry against.
 * @param quantity The number of times the matching entity should have entered the bucket.
 */
declare function HasMobEnteredAPlayerProximityBucketANumberOfTimesThisSession(bucketName: string, quantity: number): Query;

/**
 * Evaluates depto true if the player has played a certain amount of PVP matches, either in public or private mode (does not include practice)
 * 
 * @param quantity The number of matches needed for this query to return true.
 */
declare function PVP_PlayerHasPlayedEnoughMatchequantity(quantity: number): Query;


/**
 * Index for the first songbook page.
 */
declare const SONGBOOK_PAGE_RESOURCING_MELODIES: number;

/**
 * Index for the second songbook page.
 */
declare const SONGBOOK_PAGE_COMBAT_MELODIES: number;

/**
 * Index for the third songbook page.
 */
declare const SONGBOOK_PAGE_PLAYER_BUILDING_MELODIES: number;

/**
 * Index for the fourth songbook page.
 */
declare const SONGBOOK_PAGE_IMPROVEMENTS_AND_HOST_MELODIES: number;

/**
 * Evaluates to true if the player has turned the songbook to a particular page a number of times.
 * 
 * @param pageIndex 
 * @param quantity 
 */
declare function HasPlayerTurnedToSongbookPageEnoughTimes(pageIndex: number, quantity: number): Query;

/**
 * Evaluates depedning if the local player has sprinted a number of times this session.
 * 
 * @param quantity The number of times to check if the local player has sprinted.
 * 
 */
declare function HasPlayerSprintedANumberOfTimesThisSession(quantity: number): Query;

/**
 * Evaluates depedning if the local player's mount is currently sprinting or not.
 */
declare function IsThePlayerCurrentlySprinting(): Query;

/**
 * Evaluates depending if the local player has used Advanced Direct a number of times this session.
 * 
 * @param quantity The number of times to check against.
 */
declare function HasPlayerUsedAdvancedDirectANumberOfTimesThisSession(quantity: number): Query;
