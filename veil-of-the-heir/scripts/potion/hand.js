setup.hand_forward_potions = {
	"ml": {
		id: 1,
		from: "ml",
		to: "mm",
		name: "Silkweave Tincture",
		purpose: "Male Lean Hands ➝ Male Muscular Hands",
		ingredients: {
			"softroot_essence": 1,
			"starblossom_pollen": 1,
			"moonpetal_extract": 5
		},
		function: "Begins softening and lightening the skin on the hands; first stage of shaping the fingers for more delicate form.",
		sideEffects: "Mild tingling in the fingertips; feeling of warmth and lightness."
	},
	"mm": {
		id: 2,
		from: "mm",
		to: "ms",
		name: "Fingerspring Draught",
		purpose: "Male Muscular Hands ➝ Male Ultra Muscular Hands",
		ingredients: {
			"glowleaf_powder": 1,
			"velvetgrove_essence": 2,
			"thornberry_juice": 30
		},
		function: "Further softens the skin, causing it to lose its roughness and gain smoother texture; the fingers begin to shorten slightly in proportion.",
		sideEffects: "Occasional hand trembling; slight pain when gripping objects too tightly."
	},
	"ms": {
		id: 3,
		from: "ms",
		to: "fs",
		name: "Delicaflow Elixir",
		purpose: "Male Ultra Muscular Hands ➝ Female Slim Hands",
		ingredients: {
			"seraphmilk": 10,
			"feylace_petal": 1,
			"sorrowseed_oil": 1
		},
		function: "Shifts the structure of the hands, emphasizing more slender and graceful fingers; nails begin lengthening naturally.",
		sideEffects: "Constant urge to caress; light sensitivity to touch, especially in fingertips."
	},
	"fs": {
		id: 4,
		from: "fs",
		to: "fm",
		name: "Petalwisp Potion",
		purpose: "Female Slim Hands ➝ Female Feminine Hands",
		ingredients: {
			"starblossom_pollen": 2,
			"glowleaf_powder": 1,
			"velvetgrove_essence": 1
		},
		function: "Transforms the hands into their fully feminine shape; the fingers elongate, nails become more elegant, and the palms soften to a delicate texture.",
		sideEffects: "Heightened sensitivity in the hands; a compulsive need to use hands for fine motor tasks (e.g., writing)."
	},
	"fm": {
		id: 5,
		from: "fm",
		to: "fl",
		name: "Lilyliss Essence",
		purpose: "Female Feminine Hands ➝ Female Ultra Feminine Hands",
		ingredients: {
			"moonpetal_extract": 8,
			"softroot_essence": 1,
			"feylace_petal": 1
		},
		function: "Final stage of hand feminization; nails grow into smooth, glossy, and feminine shapes; the hands take on a more delicate, petite appearance.",
		sideEffects: "Overwhelming urge to adjust and style nails; constant admiration of hands, subtle increase in gracefulness."
	}
};

// Master list of anti-potion recipes for hand regression
setup.hand_reverse_potions = {
	"fl": {
		id: 1,
		from: "fl",
		to: "fm",
		name: "Roughroot Draught",
		purpose: "Female Ultra Feminine Hands ➝ Female Feminine Hands",
		ingredients: {
			"ashfern_flakes": 2,
			"nightshade_bloom": 2,
			"frostleaf_crystals": 4
		},
		function: "Begins the regression process, toughening the skin and starting to reassert the masculine texture.",
		sideEffects: "Minor stinging in the fingertips; dull ache as the skin loses its softness."
	},
	"fm": {
		id: 2,
		from: "fm",
		to: "fs",
		name: "Thorngrip Essence",
		purpose: "Female Feminine Hands ➝ Female Slim Hands",
		ingredients: {
			"sorrowseed_oil": 2,
			"ashfern_flakes": 1,
			"thornberry_juice": 20
		},
		function: "Reduces the softness and smoothness of the hands, subtly returning the hands to their more masculine shape and texture.",
		sideEffects: "Hands may feel stiff or uncomfortable; slight heaviness in the fingers."
	},
	"fs": {
		id: 3,
		from: "fs",
		to: "ms",
		name: "Roughenstride Elixir",
		purpose: "Female Slim Hands ➝ Male Ultra Muscular Hands",
		ingredients: {
			"glowleaf_powder": 1,
			"frostvine_elixir": 30,
			"nullroot_dust": 2
		},
		function: "Promotes muscle reassertion in the hands and fingers, gradually giving the hands a more masculine appearance, reducing elegance and grace.",
		sideEffects: "Heightened tension in the hands and fingers; discomfort when using hands for fine tasks."
	},
	"ms": {
		id: 4,
		from: "ms",
		to: "mm",
		name: "Gripstone Infusion",
		purpose: "Male Ultra Muscular Hands ➝ Muscular Male Hands",
		ingredients: {
			"dragonmoss_resin": 2,
			"frostvine_elixir": 5,
			"ashfern_flakes": 1
		},
		function: "Strengthens and thickens the fingers, causing them to become rougher and return to their male shape.",
		sideEffects: "Mild pain as fingers bulk up; nails may become brittle and tough."
	},
	"mm": {
		id: 5,
		from: "mm",
		to: "ml",
		name: "Ironbark Serum",
		purpose: "Muscular Male Hands ➝ Male Lean Hands",
		ingredients: {
			"nullroot_dust": 1,
			"ashfern_flakes": 1,
			"thornberry_juice": 15
		},
		function: "Reverses the softening of the hands and nails, making them large and more rugged, returning them to the masculine level.",
		sideEffects: "Hands may feel raw or sore, fingers losing their previous gracefulness."
	}
};


