// Fast Travel

CheckTutorial(
  "fast_travel",
  and(
    HasThePlayerCollectedEnoughOfParticularResources(
      1,
      "unlock_onboarding_fasttravel_tut"
    )
  )
);

BypassIf("fast_travel", HasPlayerFastTravelledEnough(1));

SetHintDelay("fast_travel", 10, "", 0);
