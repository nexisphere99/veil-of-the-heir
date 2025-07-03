// Master list of torso transformation potions
setup.torso_forward_potions = {
	"ml": {
		id: 1,
		from: "ml",
		to: "mm",
		name: "Softshape Draught",
		purpose: "Male Ultra Muscular Torso ➝ Male Muscular Torso",
		ingredients: {
			"velmorian_honey": 30,
			"crimsondew_drops": 8,
			"crimsonroot_dust": 20
		},
		function: "Softens and tightens the torso muscles, starts reshaping the waist, reducing broadness.",
		sideEffects: "Mild tightness around the waist and torso, some mild discomfort as the body begins to shift."
	},
	"mm": {
		id: 2,
		from: "mm",
		to: "ms",
		name: "Waistbind Elixir",
		purpose: "Male Muscular Torso ➝ Male Lean Torso",
		ingredients: {
			"velmorian_honey": 60,
			"crimsondew_drops": 12,
			"crimsonroot_dust": 30
		},
		function: "Focuses on slimming the waist and narrowing the shoulders, enhancing the feminine curves.",
		sideEffects: "Soreness as the body begins narrowing; discomfort from the shifting of the waistline."
	},
	"ms": {
		id: 3,
		from: "ms",
		to: "fs",
		name: "Curvature Serum",
		purpose: "Male Lean Torso ➝ Female Slim Torso",
		ingredients: {
			"velmorian_honey": 90,
			"crimsondew_drops": 16,
			"crimsonroot_dust": 40
		},
		function: "Shifts torso to a more feminine shape, promoting hip widening and narrowing of the waist.",
		sideEffects: "Sensation of warmth as the hips and waist begin to adjust, some temporary discomfort from changes."
	},
	"fs": {
		id: 4,
		from: "fs",
		to: "fm",
		name: "Hourglass Draught",
		purpose: "Female Slim Torso ➝ Female Feminine Torso",
		ingredients: {
			"velmorian_honey": 120,
			"crimsondew_drops": 20,
			"crimsonroot_dust": 50
		},
		function: "Intensifies hip widening, enhances waist cinching, and adds softness to the belly.",
		sideEffects: "Increased fullness in the hips, a tightening sensation around the waist, mild dizziness."
	},
	"fm": {
		id: 5,
		from: "fm",
		to: "fl",
		name: "Femmeshape Elixir",
		purpose: "Female Feminine Torso ➝ Female Ultra Feminine Torso",
		ingredients: {
			"velmorian_honey": 150,
			"crimsondew_drops": 24,
			"crimsonroot_dust": 60
		},
		function: "Final refinement of feminine curves, softens the torso’s appearance with full body reshaping.",
		sideEffects: "Final changes to the body’s outline, slight tingling as the curves fully solidify into place."
	}
};


// Master list of torso reversal potions
setup.torso_reverse_potions = {
	"fl": {
		id: 1,
		from: "fl",
		to: "fm",
		name: "Slimshape Draught",
		purpose: "Female Ultra Feminine Torso ➝ Female Feminine Torso",
		ingredients: {
			"velmorian_honey": 30,
			"thornberry_juice": 20,
			"ashfern_flakes": 4
		},
		function: "Reduces width of hips, tightens the waist, and begins to masculinize the torso.",
		sideEffects: "Initial tightness around the waist, temporary discomfort from narrowing of the hips."
	},
	"fm": {
		id: 2,
		from: "fm",
		to: "fs",
		name: "Broadbind Elixir",
		purpose: "Female Feminine Torso ➝ Female Slim Torso",
		ingredients: {
			"velmorian_honey": 60,
			"thornberry_juice": 40,
			"ashfern_flakes": 8
		},
		function: "Begins widening the shoulders and reshapes the torso into a more angular, masculine form.",
		sideEffects: "Muscle ache from reshaping the body; mild dizziness as the chest narrows and shoulders broaden."
	},
	"fs": {
		id: 3,
		from: "fs",
		to: "ms",
		name: "Hardshape Serum",
		purpose: "Female Slim Torso ➝ Male Lean Torso",
		ingredients: {
			"velmorian_honey": 90,
			"thornberry_juice": 60,
			"ashfern_flakes": 12
		},
		function: "Shifts the torso back to a less curved shape, restoring the broader male torso appearance.",
		sideEffects: "Tingling sensation in the belly and waist, slight discomfort from body hardening and broadening."
	},
	"ms": {
		id: 4,
		from: "ms",
		to: "mm",
		name: "Masculinize Draught",
		purpose: "Male Lean Torso ➝ Male Muscular Torso",
		ingredients: {
			"velmorian_honey": 120,
			"thornberry_juice": 80,
			"ashfern_flakes": 16
		},
		function: "Focuses on reducing the waist and narrowing the hips, restoring the male body shape.",
		sideEffects: "Intense muscle contractions, minor soreness as the body reverts to a broader male shape."
	},
	"mm": {
		id: 5,
		from: "mm",
		to: "ml",
		name: "Uncurve Elixir",
		purpose: "Male Muscular Torso ➝ Male Ultra Muscular Torso",
		ingredients: {
			"velmorian_honey": 150,
			"thornberry_juice": 100,
			"ashfern_flakes": 20
		},
		function: "Finalizes the reversal, reestablishing the male body structure with broad shoulders and a flat waist.",
		sideEffects: "A slight feeling of loss of softness, discomfort as the body expands and sharpens into a male form."
	}
};