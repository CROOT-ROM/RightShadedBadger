// Player Melee Attack

CheckTutorial(
  "pvp_upgrades_available",
  and(
    HasThePlayerCollectedEnoughOfParticularResources(
      1,
      "unlock_allegiance_structure"
    )
  )
);

SetHintDelay("pvp_upgrades_available", 20, "", 0);
