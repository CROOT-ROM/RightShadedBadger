// Player Nether

/* 
 *   Hello, game designer!
 *
 *   If you'd like to add a new "invalid nether" block archetype, feel free to add it to this array.
 *   It will be included as a potential candidate for the "player_nether" nudge.
 */
const netherArchetypesToCheck = [
  "badger:block_netherrack",
  "badger:block_netherrack_var02",
  "badger:block_netherrack_var03",
  "badger:block_burning_edge_var01",
  "badger:block_burning_edge_var02",
  "badger:block_burning_edge_var03",
  "badger:block_burning_edge_var04",
  "badger:block_burning_edge_var05",
  "badger:block_burning_edge_var06",
  "badger:block_burning_edge_var07",
  "badger:block_burning_edge_var08",
  "badger:block_sheet_netherrack",
  "badger:block_sheet_netherrack_var01",
  "badger:block_sheet_netherrack_var02",
  "badger:block_sheet_netherrack_var03",
  "badger:block_slab_netherrack",
  "badger:block_slab_netherrack_var01",
  "badger:block_slab_netherrack_var02",
  "badger:block_slab_netherrack_var03",
  "badger:block_netherrack_dried_var01",
  "badger:block_netherrack_dried",
  "badger:block_nylium",
  "badger:block_nylium_var01",
  "badger:block_nylium_var02",
  "badger:block_nylium_grass",
  "badger:block_nylium_grass_var01",
  "badger:block_deco_nether_grass_tall_dried",
  "badger:block_deco_nether_grass_dried_small",
  "badger:block_deco_nether_grass_dried",
  "badger:block_deco_netherwart_dried_large",
  "badger:block_deco_netherwart_dried_small",
  "badger:block_deco_netherwart_small",
  "badger:block_deco_netherwart_large",
  "badger:block_deco_nether_grass_tall",
  "badger:block_deco_nether_grass_small",
  "badger:block_deco_nether_grass",
];

// BBI-HACK: (dsavage) Do this unless we find programming time to add a query that evaluates invalid blocks by tags
const archetypeToQuery = (archetype) => {
  return HasPlayerAttemptedToBuildOnAnInvalidBlockANumberOfTimesThisSession(archetype, 1)
};

CheckTutorial(
  "player_nether",
  or(
    ...(netherArchetypesToCheck.map(archetypeToQuery))
  )
);
