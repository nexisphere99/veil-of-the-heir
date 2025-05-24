// Store items object
setup.storeItems = {
	"moonpetal_extract": { 
		name: "Moonpetal Extract", 
		value: 8, 
		unit: "tsp", 
		min_amount: 1,
		img: "images/ingredients/moonpetal_extract.png",
		description: "Silvery nectar harvested from a rare flower that blooms only under full moons.",
		effect: "Deeply enhances femininity and emotional openness. Essential for internal rewiring during genital changes and emotional softening during transformation."
	},
	"velmorian_honey": { 
		name: "Velmorian Honey", 
		value: 30, 
		unit: "ml", 
		min_amount: 10,
		img: "images/ingredients/velmorian_honey.png",
		description: "Golden sap from enchanted forest beehives, rich with dream pollen.",
		effect: "Smooths transitional phases by harmonizing bodily changes. Adds sweetness—both in scent and aura—to the emerging form. Often a base for softening potions."
	},
	"glowleaf_powder": { 
		name: "Glowleaf Powder", 
		value: 3, 
		unit: "pinch", 
		min_amount: 1,
		img: "images/ingredients/glowleaf_powder.png",
		description: "Crushed leaves of the glowing duskplant, harvested at twilight.", 
		effect: "A potent magical catalyst, essential for activating and stabilizing anatomical restructuring. Common in core transformation brews."
	},
	"starblossom_pollen": { 
		name: "Starblossom Pollen", 
		value: 5, 
		unit: "scoop", 
		min_amount: 1,
		img: "images/ingredients/starblossom_pollen.png",
		description: "Shimmering pollen from a starlit flower that only blooms on solstice nights.", 
		effect: "Stimulates growth of feminine features, particularly breasts and hips. Promotes expansion in lower-body curves and hair development."
	},
	"crimsondew_drops": { 
		name: "Crimsondew Drops", 
		value: 4, 
		unit: "ml", 
		min_amount: 1,
		img: "images/ingredients/crimsondew_drops.png",
		description: "Scarlet dewdrops collected from cliffside succulents at dawn.", 
		effect: "Sharpens sensual receptivity and heightens erotic pleasure. Frequently added to intimate transformation potions for arousal enhancement."
	},
	"feylace_petal": { 
		name: "Feylace Petal", 
		value: 3, 
		unit: "petal", 
		min_amount: 1,
		img: "images/ingredients/feylace_petal.png",
		description: "Iridescent petal plucked from a flower born at the crossing of fae realms.", 
		effect: "Intensifies beautification and femininity, especially in facial and chest regions. Used to give delicate symmetry and ethereal glow to features."
	},
	"dragonmoss_resin": { 
		name: "Dragonmoss Resin", 
		value: 5, 
		unit: "drop", 
		min_amount: 1,
		img: "images/ingredients/dragonmoss_resin.png",
		description: "Thick green resin scraped from magically enriched rocks near dragon dens.", 
		effect: "Adds physical strength and firmness to reshaped tissues. A stabilizer that prevents structural collapse during deep transformation. Fortifies muscles and tissues, restoring firmness and mass. Often used to revert delicate curves and reinforce masculine traits like jawline, shoulders, and hands."
	},
	"seraphmilk": { 
		name: "Seraphmilk", 
		value: 15, 
		unit: "ml", 
		min_amount: 5,
		img: "images/ingredients/seraphmilk.png",
		description: "A pearly-white, otherworldly milk obtained from blessed celestial livestock.", 
		effect: "Refines tissue delicacy and grace. Accelerates divine-aligned transformations, often used to enhance the elegance and femininity of fingers, lips, and skin tone. Accelerates divine transformation traits, especially those aligned with purity and grace. Speeds up feminization in spiritually sensitive areas."
	},
	"frostvine_elixir": { 
		name: "Frostvine Elixir", 
		value: 10, 
		unit: "ml", 
		min_amount: 5,
		img: "images/ingredients/frostvine_elixir.png",
		description: "Icy blue liquid distilled from creeping alpine vines.",
		effect: "Halts expansion and softening of body tissue. Reintroduces rigidity, used in cooling draughts to restore firmness and reduce swelling or puffiness." 
	},
	"ashfern_flakes": { 
		name: "Ashfern Flakes", 
		value: 4, 
		unit: "g", 
		min_amount: 1,
		img: "images/ingredients/ashfern_flakes.png",
		description: "Powdered ash from a magically scorched fern, cold to the touch.", 
		effect: "Inhibits and slows magical transformations, especially those related to bodily softening and reshaping. Common in base anti-potion formulas to reduce enchantment flow. Inhibits magical expansion and masculinity. Frequently used in suppressive or reversal brews to reduce unwanted male traits."
	},
	"softroot_essence": { 
		name: "Softroot Essence", 
		value: 7, 
		unit: "drop", 
		min_amount: 1,
		img: "images/ingredients/softroot_essence.png",
		description: "Earthy, mellow root extract cultivated in alchemic gardens.", 
		effect: "Makes skin and underlying tissues more malleable, especially on the hands and joints. Helps blend new shapes seamlessly during magical restructuring. Increases skin elasticity and suppleness. Integral to body-modifying draughts, especially for forming soft inner folds."
	},
	"sorrowseed_oil": { 
		name: "Sorrowseed Oil", 
		value: 6, 
		unit: "tsp", 
		min_amount: 1,
		img: "images/ingredients/sorrowseed_oil.png",
		description: "Heavy, oily extract from a weeping tree that grows in mourning groves.",
		effect: "Alters emotional thresholds and magical receptivity. Often used to mellow overstimulation and attune emotional states to the new body. Deeply softens and smooths skin, imbuing a refined texture and emotional depth. Adds subtle vulnerability to touch and expression. Suppresses heightened sensitivity and dulls tactile response. Used in potions meant to return skin and emotions to a more stoic, masculine baseline." 
	},
	"nightshade_bloom": { 
		name: "Nightshade Bloom", 
		value: 3, 
		unit: "petal", 
		min_amount: 1,
		img: "images/ingredients/nightshade_bloom.png",
		description: "Velvet-dark violet flower growing in shaded glens.",
		effect: "Intensifies nerve sensitivity, particularly in intimate regions. Used with care to enhance physical receptivity and sensation during transformation. Targets and undoes delicate transformations, particularly those affecting grace, sensitivity, or feminized features. Best used in precision reversal brews." 
	},
	"thornberry_juice": { 
		name: "Thornberry Juice", 
		value: 20, 
		unit: "ml", 
		min_amount: 5,
		img: "images/ingredients/thornberry_juice.png",
		description: "Bitter, stinging juice extracted from thorned bramble berries.", 
		effect: "Stimulates toughness and coarseness in skin and tissues. Frequently used to reinforce masculine textures and combat softening agents. Triggers tissue regression and tightens base masculine traits. Initiates tension in physical structures during transformation, often used early in feminization."
	},
	"lilywhisper_nectar": { 
		name: "Lilywhisper Nectar", 
		value: 2, 
		unit: "ml", 
		min_amount: 1,
		img: "images/ingredients/lilywhisper_nectar.png",
		description: "A delicate, fragrant nectar gathered from white lilies touched by wind spirits.", 
		effect: "Encourages lightness, grace, and ethereal softness in the legs. Grants a weightless, flowing sensation that enhances elegance in walking and poise."
	},
	"vinesilk_essence": { 
		name: "Vinesilk Essence", 
		value: 2, 
		unit: "ml", 
		min_amount: 1,
		img: "images/ingredients/vinesilk_essence.png" ,
		description: "A transparent, silky liquid drawn from vine-threads deep in enchanted woods.",
		effect: "Lengthens and slims limbs while softening their texture. Often used in dancer potions or to elongate legs with elegance and control."
	},
	// "dragonroot_oil": { 
	// 	name: "Dragonroot Oil", 
	// 	value: 10, 
	// 	unit: "ml", 
	// 	min_amount: 1,
	// 	img: "images/ingredients/dragonroot_oil.png",
	// 	description: "A potent, earthy oil distilled from the roots of the fire-fed Dragonroot plant.", 
	// 	effect: "Encourages rapid growth and fortification of hair follicles. Commonly used in transformative brews to thicken hair, boost volume, and strengthen each strand with a resilient, luxurious finish."
	// },
	// "sunlily_sap": { 
	// 	name: "Sunlily Sap", 
	// 	value: 10, 
	// 	unit: "ml", 
	// 	min_amount: 1,
	// 	img: "images/ingredients/sunlily_sap.png",
	// 	description: "Golden sap extracted from the radiant Sunlily, a flower that blooms only at sunrise.", 
	// 	effect: "Stimulates healthy, accelerated hair growth and imbues strands with a radiant, sun-kissed glow. Frequently used in potions that enhance femininity through lush, vibrant hair transformation."
	// },
	"crimsonroot_dust": { 
		name: "Crimsonroot Dust", 
		value: 10, 
		unit: "g", 
		min_amount: 1,
		img: "images/ingredients/crimsonroot_dust.png",
		description: "Finely ground powder from the rare Crimsonroot, known to grow only at the convergence of magical leylines.", 
		effect: "Helps stabilize ongoing physical transformations, preventing erratic shifts. Simultaneously enhances feminine traits subtly and harmoniously, making it a favored component in balanced, full-body feminization potions."
	},
	"velvetgrove_essence": { 
		name: "Velvetgrove Essence", 
		value: 2, 
		unit: "tsp", 
		min_amount: 1,
		img: "images/ingredients/velvetgrove_essence.png",
		description: "A silky green extract from deep-forest mosses and vines known for their softness.", 
		effect: "Deeply softens skin and promotes supple textures. Favored for use in delicate-area transformations such as the hands, lips, and thighs. Smooths and softens skin across the limbs. Leaves a lasting softness perfect for feminine touch and appearance, especially on thighs, knees, and calves."
	},
	"frostleaf_crystals": {
		name: "Frostleaf Crystals", 
		value: 4, 
		unit: "tsp", 
		min_amount: 1,
		img: "images/ingredients/frostleaf_crystals.png",
		description: "Crystalline shards from the Frostleaf plant, known for its icy blue hue.", 
		effect: "When ground and applied in specific anti-transformation potions, these crystals thicken and roughen the skin, reducing softness and reversing delicate feminine textures. Often used to restore a rugged or masculine exterior."
	},
	"eversilk_thread": { 
		name: "Eversilk Thread", 
		value: 3, 
		unit: "cm", 
		min_amount: 1,
		img: "images/ingredients/eversilk_thread.png",
		description: "A rare, ethereal fiber spun by enchanted silkworms, known for its softness and enduring properties.", 
		effect: "Dissolves into potions to aid in the formation of delicate tissues, such as vaginal lining and inner folds. Often used in transformation potions to enhance feminine anatomy with enduring softness and natural flexibility."
	},
	"nullroot_dust": {
		name: "Nullroot Dust", 
		value: 4, 
		unit: "tsp", 
		min_amount: 1,
		img: "images/ingredients/nullroot_dust.png",
		description: "A rare and potent powdered root harvested from the Nullroot plant, known for its anti-magical properties.", 
		effect: "Halts or reverses the progress of magical transformations, effectively freezing any ongoing changes. Due to its power, it is tightly controlled and only used by mages under strict restrictions to prevent misuse."
	}
};