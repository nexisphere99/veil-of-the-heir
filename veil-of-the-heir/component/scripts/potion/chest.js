let crimsonroot_dust = 5
let seraphmilk = 5
let ashfern_flakes = 2
let frostvine_elixir = 5
let eversilk_thread = 2
let nightshade_bloom = 2
let dragonmoss_resin = 2
let nullroot_dust = 1
let glowleaf_powder = 1
let starblossom_pollen = 2
let velvetgrove_essence = 1
let softroot_essence = 2
let frostleaf_crystals = 1
let moonpetal_extract = 3
let feylace_petal = 1
let lilywhisper_nectar = 1
let vinesilk_essence = 1
let sorrowseed_oil = 1
let thornberry_juice = 5
let velmorian_honey = 10
let crimsondew_drops = 1

setup.chest_forward_potions = {
	"chest_1": {
		id: 1,
		from: "chest_1",
		to: "chest_2",
		name: "Subtle Bloom Tincture",
		purpose: "Musscle Grace ➝ Man's Bud",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 1,
			"seraphmilk": seraphmilk * 1,
			"starblossom_pollen": starblossom_pollen * 1
		},
		function: "Skin softens over chest, faint tingling sensation begins.",
		sideEffects: "Increased awareness of chest, shy arousal when touched there."
	},
	"chest_2": {
		id: 2,
		from: "chest_2",
		to: "chest_3",
		name: "Chestwhisper Draft",
		purpose: "Man's Bud ➝ Blossom's Stir",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 2,
			"seraphmilk": seraphmilk * 2,
			"starblossom_pollen": starblossom_pollen * 2
		},
		function: "Areolae darken slightly, underlying glandular formation starts.",
		sideEffects: "Tingling when in cold rooms, stronger heartbeat sensations in chest."
	},
	"chest_3": {
		id: 3,
		from: "chest_3",
		to: "chest_4",
		name: "Budding Curve Elixir",
		purpose: "Blossom's Stir ➝ Petal Bloom (A)",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 3,
			"seraphmilk": seraphmilk * 3,
			"starblossom_pollen": starblossom_pollen * 3
		},
		function: "Breast buds push outward, nipples gain shape and become sensitive.",
		sideEffects: "Brief moaning during sleep, strong nipple sensitivity."
	},
	"chest_4": {
		id: 4,
		from: "chest_4",
		to: "chest_5",
		name: "Nectar of Early Bloom",
		purpose: "Petal Bloom (A) ➝ Early Bloom (B)",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 4,
			"seraphmilk": seraphmilk * 4,
			"starblossom_pollen": starblossom_pollen * 4
		},
		function: "Rounded shape appears, light jiggle when moving.",
		sideEffects: "Blushing during court dances, gentle bouncing distracts Caelan."
	},
	"chest_5": {
		id: 5,
		from: "chest_5",
		to: "chest_6",
		name: "Curvelace Tonic",
		purpose: "Early Bloom (B) ➝ Full Bloom (C)",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 5,
			"seraphmilk": seraphmilk * 5,
			"starblossom_pollen": starblossom_pollen * 5
		},
		function: "Breasts swell in volume, bounce becomes visible.",
		sideEffects: "Excitement when hugged, habit of cupping chest during thought."
	},
	"chest_6": {
		id: 6,
		from: "chest_6",
		to: "chest_7",
		name: "Queen's Bud Elixir",
		purpose: "Full Bloom (C) ➝ Lush Curve (D)",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 6,
			"seraphmilk": seraphmilk * 6,
			"starblossom_pollen": starblossom_pollen * 6
		},
		function: "Shape firms up and pushes forward gracefully.",
		sideEffects: "Longing glances at other women’s figures, desire for corsetry."
	},
	"chest_7": {
		id: 7,
		from: "chest_7",
		to: "chest_8",
		name: "Blossombond Draft",
		purpose: "Lush Curve (D) ➝ Lady’s Bust (E)",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 7,
			"seraphmilk": seraphmilk * 7,
			"starblossom_pollen": starblossom_pollen * 7
		},
		function: "Deepened cleavage, top and bottom curves round fully.",
		sideEffects: "Lingerie starts to feel erotic, arousal from mirror reflections."
	},
	"chest_8": {
		id: 8,
		from: "chest_8",
		to: "chest_9",
		name: "Velvet Crest Serum",
		purpose: "Lady’s Bust (E) ➝ Noble Crest (F)",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 8,
			"seraphmilk": seraphmilk * 8,
			"starblossom_pollen": starblossom_pollen * 8
		},
		function: "Breasts become full, hang with weight and softness.",
		sideEffects: "Breast sway when walking, erotic dreams become common."
	},
	"chest_9": {
		id: 9,
		from: "chest_9",
		to: "chest_10",
		name: "Crownsworn Bloom",
		purpose: "Noble Crest (F) ➝ Regal Bloom (F+)",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 9,
			"seraphmilk": seraphmilk * 9,
			"starblossom_pollen": starblossom_pollen * 9
		},
		function: "Upper swell perky, breasts rest high and bounce heavily.",
		sideEffects: "Desire to flaunt cleavage, nipples react to attention."
	},
	"chest_10": {
		id: 10,
		from: "chest_10",
		to: "chest_11",
		name: "Empress’s Embrace",
		purpose: "Regal Bloom (F+) ➝ Crown's Embrace (G+ Regal)",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 10,
			"seraphmilk": seraphmilk * 10,
			"starblossom_pollen": starblossom_pollen * 10
		},
		function: "Royal curve forms, fuller areolae, stretch marks vanish.",
		sideEffects: "Dresses feel “too tight,” craving adornment."
	},
	"chest_11": {
		id: 11,
		from: "chest_11",
		to: "chest_12",
		name: "Royal Form Finalé",
		purpose: "Crown's Embrace (G+ Regal) ➝ Throne’s Heirloom (G++ Queenly)",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 11,
			"seraphmilk": seraphmilk * 11,
			"starblossom_pollen": starblossom_pollen * 11
		},
		function: "Final size locks in—voluptuous, symmetrical, and regal.",
		sideEffects: "Accustomed to breasts' pull, constant desire for support and flirty outfits."
	}
};


setup.chest_reverse_potions = {
	"chest_12": {
		id: 1,
		from: "chest_12",
		to: "chest_11",
		name: "Shroud of Regality",
		purpose: "Throne’s Heirloom (G++ Queenly) ➝ Crown's Embrace (G+ Regal)",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 1,
			"ashfern_flakes": ashfern_flakes * 1,
			"frostvine_elixir": frostvine_elixir * 1
		},
		function: "Softens breast tissue, curve reduces, skin slightly sags.",
		sideEffects: "Loss of tightness in corsets, subtle shame when undressing."
	},
	"chest_11": {
		id: 2,
		from: "chest_11",
		to: "chest_10",
		name: "Elegance Receded Elixir",
		purpose: "Crown's Embrace (G+ Regal) ➝ Regal Bloom (F+)",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 2,
			"ashfern_flakes": ashfern_flakes * 2,
			"frostvine_elixir": frostvine_elixir * 2
		},
		function: "Weight lessens, breasts lose royal firmness.",
		sideEffects: "Bra feels emptier, involuntary crossing of arms over chest."
	},
	"chest_10": {
		id: 3,
		from: "chest_10",
		to: "chest_9",
		name: "Crownlight Decay",
		purpose: "Regal Bloom (F+) ➝ Noble Crest (F)",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 3,
			"ashfern_flakes": ashfern_flakes * 3,
			"frostvine_elixir": frostvine_elixir * 3
		},
		function: "Bounce disappears, slight shrinking and lift loss.",
		sideEffects: "Uneasy when dancing, flickers of doubt in femininity."
	},
	"chest_9": {
		id: 4,
		from: "chest_9",
		to: "chest_8",
		name: "Bloomless Drift",
		purpose: "Noble Crest (F) ➝ Lady’s Bust (E)",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 4,
			"ashfern_flakes": ashfern_flakes * 4,
			"frostvine_elixir": frostvine_elixir * 4
		},
		function: "Breast mass contracts subtly, upper roundness diminishes.",
		sideEffects: "Chest feels “too light,” dreams of wrapping cloth tightly."
	},
	"chest_8": {
		id: 5,
		from: "chest_8",
		to: "chest_7",
		name: "Fading Curve Tonic",
		purpose: "Lady’s Bust (E) ➝ Lush Curve (D)",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 5,
			"ashfern_flakes": ashfern_flakes * 5,
			"frostvine_elixir": frostvine_elixir * 5
		},
		function: "Side volume fades, cleavage shallows.",
		sideEffects: "Occasional discomfort from loose-fitting tops."
	},
	"chest_7": {
		id: 6,
		from: "chest_7",
		to: "chest_6",
		name: "Wilted Silk Serum",
		purpose: "Lush Curve (D) ➝ Full Bloom (C)",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 6,
			"ashfern_flakes": ashfern_flakes * 6,
			"frostvine_elixir": frostvine_elixir * 6
		},
		function: "Shape softens, slope decreases.",
		sideEffects: "Feels naked even when clothed, attempts to hide chest."
	},
	"chest_6": {
		id: 7,
		from: "chest_6",
		to: "chest_5",
		name: "Lacedown Liquor",
		purpose: "Full Bloom (C) ➝ Early Bloom (B)",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 7,
			"ashfern_flakes": ashfern_flakes * 7,
			"frostvine_elixir": frostvine_elixir * 7
		},
		function: "Tissue deflates modestly, nipples retract slightly.",
		sideEffects: "Panic when breasts are not visible under clothes."
	},
	"chest_5": {
		id: 8,
		from: "chest_5",
		to: "chest_4",
		name: "Breath of Modesty",
		purpose: "Early Bloom (B) ➝ Petal Bloom (A)",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 8,
			"ashfern_flakes": ashfern_flakes * 8,
			"frostvine_elixir": frostvine_elixir * 8
		},
		function: "Volume becomes minor, tight tops hang loosely.",
		sideEffects: "Phantom breast sensation, clinging to soft fabrics for comfort."
	},
	"chest_4": {
		id: 9,
		from: "chest_4",
		to: "chest_3",
		name: "Petalfall Brew",
		purpose: "Petal Bloom (A) ➝ Blossom's Stir",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 9,
			"ashfern_flakes": ashfern_flakes * 9,
			"frostvine_elixir": frostvine_elixir * 9
		},
		function: "Nipples flatten, glandular mass dissolves.",
		sideEffects: "Slight tears during bath, lingering gaze at mirrors."
	},
	"chest_3": {
		id: 10,
		from: "chest_3",
		to: "chest_2",
		name: "Unflowering Draft",
		purpose: "Blossom's Stir ➝ Man's Bud",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 10,
			"ashfern_flakes": ashfern_flakes * 10,
			"frostvine_elixir": frostvine_elixir * 10
		},
		function: "Skin tightens, flatness returns fully.",
		sideEffects: "Heavy melancholy, desire for padding or binding."
	},
	"chest_2": {
		id: 11,
		from: "chest_2",
		to: "chest_1",
		name: "Still Chest Elixir",
		purpose: "Man's Bud ➝ Musscle Grace",
		ingredients: {
			"crimsonroot_dust": crimsonroot_dust * 11,
			"ashfern_flakes": ashfern_flakes * 11,
			"frostvine_elixir": frostvine_elixir * 11
		},
		function: "Full masculine flatness restored, fat and tissue erased.",
		sideEffects: "Feels “too exposed,” chest feels cold, denial reflex intensifies."
	}
};