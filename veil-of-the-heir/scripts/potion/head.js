// Master list of potion recipes - Face Feminization
setup.head_forward_potions = {
	"ml": {
		id: 1,
		from: "ml",
		to: "mm",
		name: "Dewkiss Elixir",
		purpose: "Male Ultra Muscular Face ➝ Male Muscular Face",
		ingredients: {
			"glowleaf_powder": 5,
			"softroot_essence": 7,
			"moonpetal_extract": 8,
		},
		function: "Begins to soften the jawline and smooth rough facial textures.",
		sideEffects: "Tingling in cheeks and sudden blushes; heightened emotional awareness."
	},
	"mm": {
		id: 2,
		from: "mm",
		to: "ms",
		name: "Blushweave Tincture",
		purpose: "Male Muscular Face ➝ Male Lean Face",
		ingredients: {
			"feylace_petal": 5,
			"velmorian_honey": 10,
			"glowleaf_powder": 5
		},
		function: "Narrows nose and enhances cheeks, reducing masculine edge.",
		sideEffects: "Frequent blushing and subtle floral breath aroma."
	},
	"ms": {
		id: 3,
		from: "ms",
		to: "fs",
		name: "Veilpetal Infusion",
		purpose: "Male Lean Face ➝ Female Slim Face",
		ingredients: {
			"starblossom_pollen": 11,
			"moonpetal_extract": 12,
			"seraphmilk": 15
		},
		function: "Refines eye sockets, raises brow arches, enhances lash length.",
		sideEffects: "Eyes glimmer faintly; vision more sensitive under moonlight."
	},
	"fs": {
		id: 4,
		from: "fs",
		to: "fm",
		name: "Silklip Decoction",
		purpose: "Female Slim Face ➝ Female Feminine Face",
		ingredients: {
			"crimsondew_drops": 10,
			"feylace_petal": 20,
			"velmorian_honey": 50
		},
		function: "Plumps lips, smooths facial lines, reshapes chin for femininity.",
		sideEffects: "Increased lip sensitivity; slight urge to smile uncontrollably."
	},
	"fm": {
		id: 5,
		from: "fm",
		to: "fl",
		name: "Starlace Serum",
		purpose: "Female Feminine Face ➝ Female Ultra Feminine Face",
		ingredients: {
			"feylace_petal": 25,
			"seraphmilk": 45,
			"starblossom_pollen": 13
		},
		function: "Finalizes facial feminization, enhancing glow, symmetry, and allure.",
		sideEffects: "Strong charm aura; irresistible smiles; fits of feminine giggling."
	}
};


// Master list of anti-potion recipes - Face Masculinization
setup.head_reverse_potions = {
	"fl": {
		id: 1,
		from: "fl",
		to: "fm",
		name: "Grimshade Extract",
		purpose: "Female Ultra Feminine Face ➝ Female Feminine Face",
		ingredients: {
			"ashfern_flakes": 2,
			"nullroot_dust": 2,
			"thornberry_juice": 5
		},
		function: "Dulls feminine radiance, retracts symmetry and soft textures.",
		sideEffects: "Loss of sparkle in the eyes, increased frown reflex."
	},
	"fm": {
		id: 2,
		from: "fm",
		to: "fs",
		name: "Roughskin Infusion",
		purpose: "Female Feminine Face ➝ Female Slim Face",
		ingredients: {
			"thornberry_juice": 20,
			"frostvine_elixir": 10,
			"sorrowseed_oil": 2
		},
		function: "Thickens jawline slightly, reduces lip volume and cheek softness.",
		sideEffects: "Tight jaw feeling; reduced smile flexibility."
	},
	"fs": {
		id: 3,
		from: "fs",
		to: "ms",
		name: "Charmbreaker Tonic",
		purpose: "Female Slim Face ➝ Male Lean Face",
		ingredients: {
			"ashfern_flakes": 1,
			"nullroot_dust": 2,
			"frostvine_elixir": 20
		},
		function: "Removes residual feminizing charm, coarsens subtle details.",
		sideEffects: "Facial expression flattens; emotional dullness."
	},
	"ms": {
		id: 4,
		from: "ms",
		to: "mm",
		name: "Bluntline Brew",
		purpose: "Male Lean Face ➝ Male Muscular Face",
		ingredients: {
			"dragonmoss_resin": 1,
			"thornberry_juice": 10,
			"sorrowseed_oil": 1
		},
		function: "Broadens nose bridge, straightens brows, coarsens skin slightly.",
		sideEffects: "Slight facial itching; urge to grimace more often."
	},
	"mm": {
		id: 5,
		from: "mm",
		to: "ml",
		name: "Ruggedskin Tincture",
		purpose: "Male Muscular Face ➝ Male Ultra Muscular Face",
		ingredients: {
			"ashfern_flakes": 2,
			"nullroot_dust": 1,
			"dragonmoss_resin": 2
		},
		function: "Finalizes masculinization by reinforcing bone structure and roughening skin tone.",
		sideEffects: "Harsh facial hair stubble growth, strong earthy musk emerges."
	}
};
