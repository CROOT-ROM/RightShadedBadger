// Player Melee Attack

CheckTutorial("player_melee_attack", and(HasTutorialBeenCompleted("player_move"), HasTutorialBeenCompleted("player_turned_camera"), HasTutorialBeenCompleted("player_jumped"), HasThePlayerCollectedEnoughOfParticularResources(1, ["unlock_onboarding_act1_melee_tut_start"])));

SetHintDelay("player_melee_attack", 20);

BypassIf("player_melee_attack", HasPlayerPressedLocalActionButton(LOCAL_ACTION_PLAYER_ATTACK, 3));
