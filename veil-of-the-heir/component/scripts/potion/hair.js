// Master list of hair growth potions
setup.hair_forward_potions = {
	"hair_1": {
		id: 1,
		from: "hair_1",
		to: "hair_2",
		name: "Fibrefirst Draught",
		purpose: "Hair Level 1 ➝ Hair Level 2",
		ingredients: {
			"starblossom_pollen": 2,
			"moonpetal_extract": 1,
			"vinesilk_essence": 1
		},
		function: "Initiates the growth process, transforming short hair to a longer, thicker texture.",
		sideEffects: "Mild itching or tingling in the scalp as hair begins to sprout."
	},
	"hair_2": {
		id: 2,
		from: "hair_2",
		to: "hair_3",
		name: "Strandgrowth Elixir",
		purpose: "Hair Level 2 ➝ Hair Level 3",
		ingredients: {
			"glowleaf_powder": 5,
			"velvetgrove_essence": 1,
			"nightshade_bloom": 1
		},
		function: "Expands hair growth, providing greater volume and length, starting to touch the shoulders.",
		sideEffects: "Light sensitivity in the scalp, slight increased heat around hair follicles as they expand."
	},
	"hair_3": {
		id: 3,
		from: "hair_3",
		to: "hair_4",
		name: "Tressbloom Essence",
		purpose: "Hair Level 3 ➝ Hair Level 4",
		ingredients: {
			"starblossom_pollen": 3,
			"seraphmilk": 10,
			"feylace_petal": 8
		},
		function: "Lengthens hair further, starting to reach mid-neck with smooth, flowing strands.",
		sideEffects: "Tingling sensation as hair thickens and lengthens; scalp feeling soft and slightly heavier."
	},
	"hair_4": {
		id: 4,
		from: "hair_4",
		to: "hair_5",
		name: "Lustreweave Tonic",
		purpose: "Hair Level 4 ➝ Hair Level 5",
		ingredients: {
			"softroot_essence": 10,
			"dragonmoss_resin": 10,
			"nightshade_bloom": 2
		},
		function: "Hair reaches neck-length, becoming more voluminous and glossy, with a slightly feminine sheen.",
		sideEffects: "Hair becoming heavier; mild scalp tightness as length increases."
	},
	"hair_5": {
		id: 5,
		from: "hair_5",
		to: "hair_6",
		name: "Lengthening Draught",
		purpose: "Hair Level 5 ➝ Hair Level 6",
		ingredients: {
			"velvetgrove_essence": 20,
			"starblossom_pollen": 4,
			"glowleaf_powder": 10
		},
		function: "Hair grows rapidly to shoulder-length, now fuller and with a greater shine.",
		sideEffects: "Scalp tingling intensifies as length progresses; increased hair texture softness."
	},
	"hair_6": {
		id: 6,
		from: "hair_6",
		to: "hair_7",
		name: "Flowbloom Elixir",
		purpose: "Hair Level 6 ➝ Hair Level 7",
		ingredients: {
			"moonpetal_extract": 3,
			"feylace_petal": 1,
			"frostvine_elixir": 20
		},
		function: "Grows hair down to mid-back with a soft and flowing texture, increasing volume and luster.",
		sideEffects: "Stronger sense of hair growth, scalp warmth as hair thickens; mild itching as hair reaches mid-back."
	},
	"hair_7": {
		id: 7,
		from: "hair_7",
		to: "hair_8",
		name: "Majestic Mane Draught",
		purpose: "Hair Level 7 ➝ Hair Level 8",
		ingredients: {
			"seraphmilk": 15,
			"dragonmoss_resin": 2,
			"starblossom_pollen": 6
		},
		function: "Final stage of growth, hair reaches waist-length with added fullness, smooth texture, and shine.",
		sideEffects: "Fullness around scalp, scalp heat as hair becomes long and voluminous, slight tightness."
	}
};


// Master list of hair reduction (anti-hair) potions
setup.hair_reverse_potions = {
	"hair_8": {
		id: 1,
		from: "hair_8",
		to: "hair_7",
		name: "Rootsnip Elixir",
		purpose: "Hair Level 8 ➝ Hair Level 7",
		ingredients: {
			"ashfern_flakes": 2,
			"nightshade_bloom": 1,
			"frostvine_elixir": 10
		},
		function: "Begins the process of hair reduction, starting with the first stage of regrowth.",
		sideEffects: "Mild scalp discomfort as hair retracts; slight itching as the follicles slow."
	},
	"hair_7": {
		id: 2,
		from: "hair_7",
		to: "hair_6",
		name: "Tressfade Draught",
		purpose: "Hair Level 7 ➝ Hair Level 6",
		ingredients: {
			"ashfern_flakes": 6,
			"thornberry_juice": 30,
			"nullroot_dust": 6
		},
		function: "Slows hair growth and begins to decrease volume, reducing the length from mid-back to shoulder.",
		sideEffects: "Scalp feels light, some dryness; temporary shedding as length reduces."
	},
	"hair_6": {
		id: 3,
		from: "hair_6",
		to: "hair_5",
		name: "Strandslim Essence",
		purpose: "Hair Level 6 ➝ Hair Level 5",
		ingredients: {
			"ashfern_flakes": 3,
			"nullroot_dust": 2,
			"sorrowseed_oil": 2
		},
		function: "Reduces hair thickness and length, making hair feel thinner and shorter, reaching neck-level.",
		sideEffects: "Scalp tightness and dryness; hair may feel thinner but also a little more fragile."
	},
	"hair_5": {
		id: 4,
		from: "hair_5",
		to: "hair_4",
		name: "Snipclear Tonic",
		purpose: "Hair Level 5 ➝ Hair Level 4",
		ingredients: {
			"nullroot_dust": 3,
			"thornberry_juice": 20,
			"frostvine_elixir": 15
		},
		function: "Shortens hair from shoulder-length to mid-neck, thinning out volume for a finer texture.",
		sideEffects: "Tingling as hair shrinks, scalp cooling as length decreases."
	},
	"hair_4": {
		id: 5,
		from: "hair_4",
		to: "hair_3",
		name: "Fadingmane Draught",
		purpose: "Hair Level 4 ➝ Hair Level 3",
		ingredients: {
			"ashfern_flakes": 4,
			"velvetgrove_essence": 2,
			"frostvine_elixir": 10
		},
		function: "Further shortens hair to shoulder-length, smoothing out strands and reducing volume.",
		sideEffects: "The hair may become brittle during this stage, and scalp may feel slightly raw."
	},
	"hair_3": {
		id: 6,
		from: "hair_3",
		to: "hair_2",
		name: "Lankfall Elixir",
		purpose: "Hair Level 3 ➝ Hair Level 2",
		ingredients: {
			"nullroot_dust": 4,
			"ashfern_flakes": 2,
			"thornberry_juice": 5
		},
		function: "Reduces hair from shoulder to chin-length, making it thinner and less voluminous.",
		sideEffects: "Dryness and slight itchiness as the follicles stop producing thick strands."
	},
	"hair_2": {
		id: 7,
		from: "hair_2",
		to: "hair_1",
		name: "Baldshrink Draught",
		purpose: "Hair Level 2 ➝ Hair Level 1",
		ingredients: {
			"sorrowseed_oil": 3,
			"velvetgrove_essence": 1,
			"ashfern_flakes": 5
		},
		function: "Final reduction of hair to short stubs or full baldness, completely halting regrowth.",
		sideEffects: "Scalp tightness; hair follicles may feel dormant; intense shedding."
	}
};


