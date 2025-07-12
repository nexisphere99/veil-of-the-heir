


// Master list of potion recipes
setup.leg_forward_potions = {
	"ml": {
		id: 1,
		from: "ml",
		to: "mm",
		name: "Silkenstride Draught",
		purpose: "Male Ultra Muscular Legs ➝ Male Muscular Legs",
		ingredients: {
			"lilywhisper_nectar": lilywhisper_nectar * 1,
			"vinesilk_essence": vinesilk_essence * 1,
			"velvetgrove_essence": velvetgrove_essence * 1
		},
		function: "Begins the softening of the legs, reducing Ultra Muscular tension and initiating the process of femininity.",
		sideEffects: "Mild tingling sensation, subtle tightness in the calf muscles as they begin to lose their bulk."
	},
	"mm": {
		id: 2,
		from: "mm",
		to: "ms",
		name: "Velvetfoot Elixir",
		purpose: "Male Muscular Legs ➝ Male Lean Legs",
		ingredients: {
			"lilywhisper_nectar": lilywhisper_nectar * 2,
			"vinesilk_essence": vinesilk_essence * 2,
			"velvetgrove_essence": velvetgrove_essence * 2
		},
		function: "Increases the smoothness and curvaceousness of the legs, starting the transformation of muscle into soft, feminine shapes.",
		sideEffects: "Heightened sensitivity in the skin; legs may feel warm and sensitive to touch."
	},
	"ms": {
		id: 3,
		from: "ms",
		to: "fs",
		name: "Languidstep Serum",
		purpose: "Male Lean Legs ➝ Female Slim Legs",
		ingredients: {
			"lilywhisper_nectar": lilywhisper_nectar * 3,
			"vinesilk_essence": vinesilk_essence * 3,
			"velvetgrove_essence": velvetgrove_essence * 3
		},
		function: "Shapes the legs to a more feminine form, gradually thinning the legs and giving them a gentler contour.",
		sideEffects: "Swelling and slight stiffness as the legs adjust to the shape; tingling along the thighs."
	},
	"fs": {
		id: 4,
		from: "fs",
		to: "fm",
		name: "Feminique Elixir",
		purpose: "Female Slim Legs ➝ Female Feminine Legs",
		ingredients: {
			"lilywhisper_nectar": lilywhisper_nectar * 4,
			"vinesilk_essence": vinesilk_essence * 4,
			"velvetgrove_essence": velvetgrove_essence * 4
		},
		function: "Focuses on smoothness and curvature, enhancing the legs’ natural feminity and curving them to a more delicate shape.",
		sideEffects: "Sensation of lightness; legs may feel weaker or more fragile as the transformation deepens."
	},
	"fm": {
		id: 5,
		from: "fm",
		to: "fl",
		name: "Silksheen Draught",
		purpose: "Female Feminine Legs ➝ Female Ultra Feminine Legs",
		ingredients: {
			"lilywhisper_nectar": lilywhisper_nectar * 5,
			"vinesilk_essence": vinesilk_essence * 5,
			"velvetgrove_essence": velvetgrove_essence * 5
		},
		function: "Finalizes the transformation, softening the muscles, enhancing shape, and giving the legs a smooth, slender, and graceful look.",
		sideEffects: "Complete loss of muscle tension, legs feel extremely smooth and delicate, may be temporarily weaker."
	}
};

// Master list of anti-potions for leg reversal transformation
setup.leg_reverse_potions = {
	"fl": {
		id: 1,
		from: "fl",
		to: "fm",
		name: "Stonestride Draught",
		purpose: "Female Ultra Feminine Legs ➝ Female Feminine Legs",
		ingredients: {
			"lilywhisper_nectar": lilywhisper_nectar * 1,
			"sorrowseed_oil": sorrowseed_oil * 1,
			"thornberry_juice": thornberry_juice * 1
		},
		function: "Begins to harden the legs, firming up muscle tone and starting the reversal of softness.",
		sideEffects: "Sensitivity in legs will decrease, legs may feel more rigid and less flexible, slight swelling."
	},
	"fm": {
		id: 2,
		from: "fm",
		to: "fs",
		name: "Brutewalk Serum",
		purpose: "Female Feminine Legs ➝ Female Slim Legs",
		ingredients: {
			"lilywhisper_nectar": lilywhisper_nectar * 2,
			"sorrowseed_oil": sorrowseed_oil * 2,
			"thornberry_juice": thornberry_juice * 2
		},
		function: "Further strengthens the leg muscles, initiating the return to a more masculine build, firming up the calves and thighs.",
		sideEffects: "Feeling of tightness, slight soreness in the legs as they revert back to a less graceful form."
	},
	"fs": {
		id: 3,
		from: "fs",
		to: "ms",
		name: "Ironstep Tonic",
		purpose: "Female Slim Legs ➝ Male Lean Legs",
		ingredients: {
			"lilywhisper_nectar": lilywhisper_nectar * 3,
			"sorrowseed_oil": sorrowseed_oil * 3,
			"thornberry_juice": thornberry_juice * 3
		},
		function: "Encourages the thickening and muscle regrowth in the legs, firming them up and reversing femininity.",
		sideEffects: "A tightening of the skin, legs may feel bulkier and heavier, discomfort in the thighs as they reassert masculinity."
	},
	"ms": {
		id: 4,
		from: "ms",
		to: "mm",
		name: "Hearthstride Mixture",
		purpose: "Male Lean Legs ➝ Male Muscular Legs",
		ingredients: {
			"lilywhisper_nectar": lilywhisper_nectar * 3,
			"sorrowseed_oil": sorrowseed_oil * 3,
			"thornberry_juice": thornberry_juice * 3
		},
		function: "Promotes muscle reconditioning, reducing softness and starting to return the legs to a more masculine appearance.",
		sideEffects: "Legs may feel swollen, more muscle tension, a sense of “heaviness” in the calves and thighs."
	},
	"mm": {
		id: 5,
		from: "mm",
		to: "ml",
		name: "Brawnwalk Elixir",
		purpose: "Male Muscular Legs ➝ Male Ultra Muscular Legs",
		ingredients: {
			"lilywhisper_nectar": lilywhisper_nectar * 4,
			"sorrowseed_oil": sorrowseed_oil * 4,
			"thornberry_juice": thornberry_juice * 4
		},
		function: "Final stage of muscle restoration, enhancing masculine leg features and reversing the femininity entirely.",
		sideEffects: "Legs may feel completely rigid and firm, skin could tighten and feel rough as the transformation ends."
	}
};