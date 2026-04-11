import { useState } from "react";

const phases = [
  { name: "PHASE 1: UNLEARNING", range: [1, 10], color: "#8B4513", icon: "🔥" },
  { name: "PHASE 2: REBUILDING", range: [11, 20], color: "#B8860B", icon: "⚒️" },
  { name: "PHASE 3: THE QUEEN'S STEEL", range: [21, 30], color: "#4682B4", icon: "⚔️" },
  { name: "PHASE 4: THE QUEEN'S CRUCIBLE", range: [31, 40], color: "#800020", icon: "🛡️" },
  { name: "PHASE 5: THE QUEEN ASCENDANT", range: [41, 50], color: "#DAA520", icon: "👑" },
];

const days = [
  { day: 1, title: "The Reckoning in the Iron Garden", location: "Iron Garden", keyEvent: "Aldric summons Caelan at dawn. Longsword fails — disarmed in 3 strokes", transformBeat: "Chest won't sit flat in leathers. Shifted center of gravity, narrower shoulders, wider hips destroy old stance", combat: "Disarmed repeatedly. Every trained combo misfires", emotional: "Fury at treacherous body. Punches bathwater. Stares at breasts breaking waterline" },
  { day: 2, title: "Stance and Center", location: "Iron Garden", keyEvent: "Learns the Velmorian Feminine Guard — ancient female fighting stance", transformBeat: "Sand sack strapped to chest to simulate full breast weight. Breasts bounce against the sack. Voice yelps at unfamiliar pitch", combat: "Holds feminine guard for 60 seconds. Earns Aldric's first nod", emotional: "Mortified when Aldric discusses breasts like equipment. Maera comforts after" },
  { day: 3, title: "The Rapier Introduction", location: "Iron Garden", keyEvent: "Aldric introduces the court rapier. Attacks Caelan at full speed to prove 'fast kills slow'", transformBeat: "Breasts bounce visibly during lunge drills. Soldiers on rampart snicker. Rapier suits thinner wrists and new body", combat: "Learns prima/seconda/terza guards. First weapon that fits the changing body", emotional: "Rampart soldiers mock the bouncing. Aldric bellows them into 30 laps. Caelan resolves to never give cause again" },
  { day: 4, title: "Archery Reimagined", location: "Castle Archery Range", keyEvent: "Dame Yseldra teaches feminine draw after bowstring strikes Caelan's breast", transformBeat: "Bowstring drags across tender left breast — agonizing pain. Must relearn entire draw with higher elbow, cheekbone anchor. Nipples hardening in cold", combat: "50 arrows. 30 miss. Last 10 on target. 'Acceptable' from Yseldra", emotional: "Touches breast in chamber — electric sensitivity unlike anything the prince's chest felt. The breasts are real" },
  { day: 5, title: "Footwork and the Weighted Corset", location: "Iron Garden / Bloom Room", keyEvent: "Veletia introduces the training corset. Caelan discovers the drop-step", transformBeat: "Corset eliminates bouncing, stabilizes center of gravity. Breasts supported for first time. Liberation and revelation", combat: "Cross-step, pivot-retreat, drop-step mastered. Rapier to Aldric's heart on drop-step. Second nod earned", emotional: "Asks how it felt, answers 'Like armour.' First stirring of pride" },
  { day: 6, title: "Sparring the Ghost", location: "Iron Garden (pre-dawn)", keyEvent: "Caelan drills alone by moonlight. Attacks Aldric for the first time", transformBeat: "Hair requires binding for combat — ties it like Yseldra, like mother. Shadow on wall shows female silhouette with breasts", combat: "Lands 3 touches on Aldric in a single session — unprecedented", emotional: "Binds hair for first time. Grief at another piece of prince surrendered. Maera notices something different" },
  { day: 7, title: "First Blood in the Courtyard", location: "Castle Courtyard", keyEvent: "First public spar against Sir Cedric Rowenblade. Court watches", transformBeat: "Blow below left breast — disproportionate pain through nerve-rich tissue. New pain map of the female body", combat: "Takes blow to ribs. Fury-driven counterattack puts rapier to Cedric's throat. Cedric: 'Thou art going to be a formidable queen'", emotional: "Shame and fury ignite simultaneously. Chooses fury. Jeral gives a nod of respect" },
  { day: 8, title: "The Forest Threshold", location: "Greenhollow (forest edge)", keyEvent: "First combat training beyond castle walls. Fighting on uneven ground", transformBeat: "Lighter frame moves quietly through underbrush. Lower center of gravity excels on roots and slopes. Corset chafes under arms", combat: "Invents low-lunge technique against tree — 'That was not a technique I taught thee.' 'It was mine.' Third nod", emotional: "Discovers the forest responds to the changing body differently — lighter, quieter, more nimble" },
  { day: 9, title: "The Village of Briar's End", location: "Briar's End village", keyEvent: "First real mission — rescue kidnapped boy Coll from goblin brute den", transformBeat: "Villagers stare: 'Is that the prince or a lady?' Child whispers to mother. Body between forms in public", combat: "Drop-step beneath goblin's claw. Rapier to hilt in belly. First real kill with the new style. Drenched in blood", emotional: "Village kneels: 'Long live the Queen.' Caelan feels warmth of the people the crown protects for the first time" },
  { day: 10, title: "Rest, Reflection, and the Mirror", location: "Castle — Bed Chamber / Bath", keyEvent: "Rest day. Full body examination in mirror. Confronts the transformation honestly", transformBeat: "Breasts rounder, heavier. Waist narrower. Hips wider. Thighs thicker. Face softening. Areolae widened. Chooses to stop hating the body", combat: "Drills alone by torchlight at dusk — rapier forms meditative", emotional: "Done hating the body. Not done fearing it. But hatred requires energy. Chooses to walk willingly" },

  { day: 11, title: "The Dual Blade", location: "Iron Garden", keyEvent: "Parrying dagger introduced. Dual-weapon style of the ancient Queen's Blades", transformBeat: "Narrower shoulders allow blades to cross closer to centerline. Thinner wrists rotate dagger into positions thick wrists cannot", combat: "Learns rapier + dagger independence — right attacks, left defends. Fourth nod earned on first clean combination", emotional: "'Thy hands must learn to disagree' — resonates with two warriors sharing one body" },
  { day: 12, title: "Mounted Combat", location: "Castle Stable / Riding Fields", keyEvent: "Relearning horseback fighting. Saddle no longer fits the widened hips", transformBeat: "Breasts bounce painfully at canter/gallop despite corset. Wider hips change saddle contact. Thighs grip differently with female fat distribution", combat: "Mounted rapier thrusts at straw targets — 4/10 accuracy. Hip-driven seat discovered as advantage", emotional: "Horse spooks, Caelan nearly cuts off Sovereignty's ear. Tomm laughs for 5 minutes. Aldric's mouth twitches" },
  { day: 13, title: "The Ambush Drill", location: "Greenhollow forest", keyEvent: "Six soldiers hidden as ambush targets. Soldier drops onto Caelan from tree", transformBeat: "Smaller, narrower frame slips free of a grapple pin — body slides through gap that male body couldn't fit. 'The body knew'", combat: "Spots 3/6 soldiers. Escapes full pin using feminine frame advantage. Soldier: 'How in the seven hells did thou do that?'", emotional: "'I am learning what this body can do'" },
  { day: 14, title: "Archery in the Wind", location: "Archery Range / Eastern Battlements", keyEvent: "Warbow fails — female shoulders can't draw 90lbs. Receives Velmorian composite bow", transformBeat: "Female shoulder girdle cannot produce warbow draw force. Composite bow designed for woman's anatomy. Lighter draw = longer hold time = patience advantage in wind", combat: "First bullseye with composite bow. Groups arrows in crosswind on battlements", emotional: "Yseldra: 'Thy mother was a fine archer. Thou hast her eye.' Caelan feels like a queen on the battlements" },
  { day: 15, title: "Knife Fighting: The Intimate Distance", location: "Iron Garden (torchlight)", keyEvent: "Misericorde — the hidden mercy blade. Close-quarters combat", transformBeat: "Smaller frame harder to grab. Thinner wrist escapes holds. Narrower neck requires cleverer throat defense", combat: "Throat defense drill x40. Draw speed refined to beat a choking grip. Misericorde now lives in boot", emotional: "'It was death, and it was mine, and no one would see it coming'" },
  { day: 16, title: "The Giggle in the Garden", location: "Royal Garden / Iron Garden", keyEvent: "Toad lands on breast. Caelan giggles involuntarily — feminine voice emerging", transformBeat: "Involuntary giggle in a new, higher register. Voice changing — baritone becoming unreliable. Vocal feminization milestone", combat: "Sparring in foul mood after giggle. Vibration through corset boning triggers second giggle mid-fight", emotional: "Aldric tells story of Queen Alinora giggling at Therion falling in horse trough. 'Giggling doth not diminish thee'" },
  { day: 17, title: "The Thief of Millhaven Road", location: "Millhaven Road", keyEvent: "Nine thieves ambush merchant caravan. Caelan drops into ravine and disarms the leader", transformBeat: "Wears adapted armour with shaped chest plate for first time. Body no longer questioned — it's recognized. Thief leader mocks 'princess with tits'", combat: "15-foot drop-step into ravine. Rapier through sword arm radial nerve. 9 thieves captured", emotional: "Merchant Brella: 'I shall tell every town what I have seen.' Body as authority, not apology" },
  { day: 18, title: "Flexibility and the Female Advantage", location: "Iron Garden / Veil Tower", keyEvent: "Thalara intervenes — tendons loosening, joints flexible. Stretching protocol. Endurance revelation", transformBeat: "Female flexibility surpasses male range. Hips spread into stretches impossible weeks ago. Female muscles built for sustained effort not burst strength", combat: "Drills redesigned for deeper hip rotation, lower drop-step, narrower cross-step profile", emotional: "Realization: female body outlasts, outmaneuvers, outpatiences. 'When the enemy is tired and the queen is not — strike'" },
  { day: 19, title: "The Night Hunt", location: "North Forest (deep Greenhollow)", keyEvent: "First night forest combat. Three goblin scroungers killed alone in the dark", transformBeat: "Lighter body = less noise on forest floor. Different scent chemistry may confuse goblin olfaction. New stride from wider hips covers ground smoothly", combat: "3 goblins killed under 1 minute in darkness. Aldric trusts Caelan to handle it alone", emotional: "Companionable silence on the walk back — the silence of two warriors, not teacher and student" },
  { day: 20, title: "The Queen's Blade Ceremony", location: "Great Hall", keyEvent: "Formal combat demonstration before the full court. Four opponents", transformBeat: "Wears first undeniably feminine armour — shaped breastplate, articulated waist, narrower shoulders. 'Not a prince in armour... something uniquely mine'", combat: "Defeats Cedric (rapier), ties Yseldra (archery 3-3), disarms 2 soldiers simultaneously (dual wield)", emotional: "Queen Alinora descends the throne, tucks hair behind Caelan's ear: 'There she is. There is my queen.' Caelan does NOT cry (rapier trembles)" },

  { day: 21, title: "The Mountain Path Patrol", location: "Hawkseat (mountain village)", keyEvent: "Clears blocked road for neglected mountain village. Four hours of manual labor", transformBeat: "Lighter body handles mountain terrain well. Breast discomfort from heavy lifting ignored. Elder who spat now shakes Caelan's hand", combat: "No combat — labor, presence, leadership. 'We had a prince for 20 years and he never came'", emotional: "Aldric: 'That was worth more than a hundred sparring victories'" },
  { day: 22, title: "Dual Wielding Under Pressure", location: "Iron Garden", keyEvent: "Five soldiers attack simultaneously. Survives 2 minutes against all five", transformBeat: "Spinning riposte — unorthodox technique born of feminine rotation. Body creates combat innovations", combat: "5-on-1 drill. Tags 3 soldiers. Cornered and yields but survives the full two minutes", emotional: "Blood from split lip wiped on hand. 'The prince's blood and the queen's blood looked exactly the same'" },
  { day: 23, title: "The Rogues of Fernwick", location: "Fernwick (river town)", keyEvent: "Uses self as bait to catch skilled rogue. Alley fight. Rogue is a starving girl named Wren", transformBeat: "Walking through town dressed as a woman — the disguise is not a disguise, it's the truth. Body recognized as female by predator targeting women", combat: "Alley fight with trained knife fighter. Pursuit on foot — endurance advantage closes the gap. Rapier at Wren's throat", emotional: "Mercy over execution. Wren given a choice, not a cage. Later saves Caelan's life in return" },
  { day: 24, title: "Pain Management and the Body's New Map", location: "Veil Tower / Iron Garden", keyEvent: "Thalara examines — breasts accelerated to 6-week growth by training. Medical session and pain protocols", transformBeat: "Breasts now filling a modest cup. Training accelerates transformation. 'The warrior and the woman are the same forge.' Sensitivity near-plateau", combat: "Adjusted sparring drills — Aldric avoids chest strikes. 'I did not sign on to be nursemaid to royal breasts'", emotional: "Caelan develops humor about her own body. Aldric recognizes this as the most dangerous weapon" },
  { day: 25, title: "The Goblin Warren", location: "North Forest (deep interior)", keyEvent: "Commands 20+ soldiers in three-pronged assault on organized goblin warren. Kills the chieftain", transformBeat: "Streambed approach works because lighter, smaller body fits. Breasts flatten against corset boning during tight spaces. Chieftain incredulous at being killed by 'this slender creature'", combat: "Strategic split-command. Streambed infiltration. Rapier through chieftain's heart on drop-step. Fifth nod", emotional: "Aldric sits beside Caelan for first time — equals, not instructor/student. 'A fighter saveth herself. A commander saveth everyone else. Today thou didst both'" },
  { day: 26, title: "Running the Gauntlet", location: "Iron Garden / Castle Corridors", keyEvent: "12 soldiers in a corridor with padded clubs. Caelan runs through 7 times", transformBeat: "Blow to left breast despite instructions — disproportionate pain. Learns to angle torso to present shoulder plate instead of chest", combat: "7 gauntlet runs. By 7th run: exits with a soldier disarmed at full sprint", emotional: "Aldric: 'Thou art a target. Every queen is. Learn to be a target that striketh back'" },
  { day: 27, title: "The Rescue at Thornfield Bridge", location: "Thornfield Bridge", keyEvent: "12 Murkkin bandits attack merchant train on bridge. Caelan commands the counterattack", transformBeat: "Body check slams breasts against bridge parapet — blinding pain. Rises each time. 'The queen's body that had learned to take a blow and return it threefold'", combat: "Murkkin belly-thrust through tough hide. Bridge fight close-quarters. Three-pronged counterattack commanded. 7 Murkkin killed", emotional: "Wounded guard: 'Thank you, Your Highness.' Merchant: 'They say thou art becoming a warrior queen'" },
  { day: 28, title: "The Uncomfortable Gown", location: "Great Hall / Iron Garden", keyEvent: "Serelyne forces full day in court gown. Caelan fights in its remnants at dusk", transformBeat: "Bodice lifts and presents breasts — exposed, unsupported. Nipples rub against fabric all day. Heeled slippers change gait to unmistakably feminine. Whalebone pinches breast mid-petition", combat: "Sparring in gown ruins — learns to gather skirts, kick heels off, pop bodice lacing. Savages training dummy", emotional: "Aldric chuckles (first time ever). Reveals Queen Alinora once killed an assassin in her undershift with a bread knife. 'The apple doth not fall far'" },
  { day: 29, title: "The Hollow Glade Patrol", location: "Hollow Glade (deep North Forest)", keyEvent: "Finds dead hunting party. Tracks and kills a Griln Flesh Twister", transformBeat: "Lying on back beneath Griln — sees clawed hand descending toward chest. Torin severs the hand. Combat awareness of breast vulnerability", combat: "Severs Griln's regenerating vein from behind — learned from Thalara. Aldric finishes it with Frostfang. Alchemical shards recovered", emotional: "Stands with mourning village. 'A queen's duty is not to be invincible. It is to be present'" },
  { day: 30, title: "The Halfway Fire", location: "Iron Garden (evening fire)", keyEvent: "Aldric builds fire in yard. Tells story of Queen Velathra, the Last Steel Queen. 'The warrior queens faded. Until now'", transformBeat: "Face softer — jawline delicate, cheekbones higher, lips fuller, hair past shoulder blades. Voice carries new notes. Body measurably different from Day 1", combat: "No combat — reflection, bonding", emotional: "'I am afraid.' Aldric: 'Good. Fear is the whetstone upon which courage is sharpened.' Quiet, cleansing tears — gratitude for what she's becoming" },

  { day: 31, title: "The New Armour", location: "Forge / Iron Garden", keyEvent: "Brannic and Eolla unveil custom armour designed entirely for the female body", transformBeat: "Breastplate shaped for the chest — practical, elegant. Waist articulated. Hip guards accommodate wider pelvis. First armour that moves WITH the body, not against it", combat: "Full sparring session in new armour. Every plate tested. Everything holds", emotional: "Brannic's eyes go bright. Eolla: 'It is the finest work we have ever done'" },
  { day: 32, title: "The Farmstead Defense", location: "Widow Maren's farmstead", keyEvent: "6 mercenary deserters raiding a widow's farm. Caelan kicks in the barn door", transformBeat: "Leader mocks 'prince with the tits.' Caelan flicks rapier through the jug in his hand without cutting the hand. Shame no longer lands", combat: "Barn fight — rapier through brute's thigh on drop-step. Torin handles the sixth", emotional: "Widow Maren: 'I see her in thee.' 'Do not hope. Be.'" },
  { day: 33, title: "Swimming and the Changing Body", location: "River Vel (south bend)", keyEvent: "Relearning to swim — different buoyancy, fat distribution, stroke mechanics", transformBeat: "Water finds every curve — breasts, hips, softer stomach. Buoyancy changed by female fat distribution. Hip-driven side-stroke replaces crawl", combat: "Practices underwater rapier draw. Combat swimming basics", emotional: "Falls back into river trying to climb out. Torin pulls her up, struggling not to laugh. Hands meet — hers smaller, thinner. Warmth between them" },
  { day: 34, title: "The Shadebound Changeling", location: "North Forest (deep interior)", keyEvent: "Shape-shifting creature wears the prince's old face and body. Caelan kills her past", transformBeat: "Changeling shows the old body — flat chest, broad shoulders, square jaw. 'Look at what they have done to thee.' Breast tissue contracts in the creature's presence", combat: "Fights a psychic shapeshifter cycling through familiar faces. Drop-step rising thrust pierces the Changeling's core of condensed doubt", emotional: "'I do not miss thee. I have surpassed thee.' — Caelan to her own former self. The ghost of the prince is laid to rest" },
  { day: 35, title: "Dame Yseldra's Challenge", location: "Castle Archery Range", keyEvent: "Formal archery match: Caelan vs. Yseldra before the court. Caelan wins 12-11 bullseyes", transformBeat: "Breasts fill the breast guard now. Composite bow fully integrated. Lighter draw = longer hold = more patience", combat: "50 arrows each. 38 inner rings, 12 bullseyes. Beats Yseldra's 36/11. 'Fuck' — Yseldra", emotional: "Yseldra: 'Better than thy mother's eye.' Handshake — iron grip meets silk over steel. Kinship between warrior women" },
  { day: 36, title: "Teaching the Guard", location: "Iron Garden", keyEvent: "Caelan teaches 4 female recruits the feminine guard. Birth of the Queen's Blades", transformBeat: "Recruits call Caelan 'she' naturally — without prompting, correction, or performance. She. Pronoun sits in chest like warmth", combat: "Teaches stance, cross-step, drop-step. Bryn holds stance for 1 minute on first try — promoted to assistant", emotional: "'She. They had called me she.' The pronoun settles. Not a burn. A warmth" },
  { day: 37, title: "The Deep Forest Hunt", location: "North Forest (inner forest)", keyEvent: "Stag hunt — tracking, patience, clean kill with composite bow. Court feast", transformBeat: "In the forest without audience, body simply IS — changing, growing, present but not enemy. Hair lustrous from potions. Breast guard comfortable. Green gown at feast accommodates the chest", combat: "50-pace clean kill through lungs with composite bow. Field dresses the stag", emotional: "Father Therion mouths across the feast table: 'I am so proud of you.' Wine and venison and candlelight and belonging" },
  { day: 38, title: "Sparring Yseldra", location: "Iron Garden", keyEvent: "Rapier vs. spear. Caelan fights Yseldra in close combat for the first time", transformBeat: "Compact feminine frame crowds the spear's range advantage. Yseldra: 'Thou art never where I expect thee'", combat: "4-minute spar. 3 touches landed vs. Yseldra's 2. Dagger catches spear shaft, rapier tags hip", emotional: "Yseldra's full-throated laugh — rarer than Aldric's nod. 'Thou art not merely acceptable. Thou art dangerous'" },
  { day: 39, title: "The Ambush on the Western Road", location: "Western Road", keyEvent: "Real assassination attempt — 12 men with crossbows. Shield wall. Caelan kills one attacker personally", transformBeat: "Crossbow bolt trims her hair. Drop-step in full armour. First time the body performs perfectly under lethal threat", combat: "8 vs. 12 after casualties. Shield wall holds. Rapier through attacker's armour gap. 9 killed/disabled, 3 flee. Torin wounded protecting Caelan", emotional: "Wounded soldier: 'Worth it, Your Highness.' Torin 'is not injured' (he is injured). Hands steady after killing" },
  { day: 40, title: "Recovery and the Bruised Heart", location: "Castle — Veil Tower / Iron Garden", keyEvent: "Rest and examination. Breasts reach 'third stage.' Nude mirror meditation. Solo rapier forms watched by friends", transformBeat: "Breasts fuller, rounder, filling corset to edges. Third stage — dense, warm, sensitivity plateauing. 'The breast thou art growing is a strong breast.' Performs a woman's bow instinctively", combat: "Solo rapier forms — no armour, no corset, breasts moving freely. Movements flow. Audience gathers naturally", emotional: "Instinctive woman's bow. Doesn't notice until too late to be embarrassed. 'Perhaps it was too late to need to be'" },

  { day: 41, title: "Training the Queen's Blades", location: "Iron Garden", keyEvent: "Recruits double to 8 women. Caelan teaches full curriculum. Bryn promoted to assistant instructor", transformBeat: "Students emulate Caelan's movement — the feminine style spreading from one transforming body to eight trained ones", combat: "Teaches guard, cross-step, pivot-retreat, drop-step, rapier basics, dagger trapping to 8 recruits", emotional: "Aldric: 'They follow thee. They see what they wish to become. That is not instruction. That is inspiration'" },
  { day: 42, title: "The Village Circuit", location: "Briar's End / Ashwick / Hawkseat / Fernwick", keyEvent: "Full-day ride visiting every village from the arc. Presence, not crisis", transformBeat: "Coll training to serve the Queen. Carved marker: 'Protected by the Queen's Blade.' Fernwick tapestry has 'artistic liberties' with bust size. 'The strength is in the sword arm, not the bodice'", combat: "No combat — diplomacy, presence, leadership. Twelve hours in the saddle", emotional: "Hawkseat elder gifts a hawk-head walking staff: 'For the queen who listeneth.' The people know her" },
  { day: 43, title: "The Duel with Aldric", location: "Iron Garden (dawn)", keyEvent: "Formal duel — best of 5 touches. Caelan wins 3-1. Wall-run spin improvisation", transformBeat: "Body operates without doubt, without the ghost of what it used to be. Complete integration of body and blade. Wall-run exploit: lighter frame + flexibility = impossible maneuver", combat: "Touch 1: cross-step wrist tag. Touch 2 (Aldric): knee to chest. Touch 3: patience riposte. Touch 4: wall-run spinning leap past Aldric. 3-1 victory", emotional: "Aldric is proud. Full, visible, undeniable pride. 'Thou art the finest warrior I have taught. It is my honour.' Hands clasp — his engulfing hers. Eyes bright" },
  { day: 44, title: "Healing and Herbs with Thalara", location: "Veil Tower / Royal Garden", keyEvent: "Field medicine and herbalism. A queen who heals is worshipped by soldiers", transformBeat: "Moonpetal extract — the transformation ingredient — also heals in dilute form. The alchemy that changes the body also mends it", combat: "No combat — tourniquets, wound cleaning, bone-setting, field potion brewing", emotional: "'I will not let it be lost again' — women's herbal wisdom. Thalara: 'That is why I teach thee'" },
  { day: 45, title: "Queen's Blades: First Exercise", location: "Greenhollow forest", keyEvent: "8 Blades complete field exercise. Three engagements. Bryn, Halla, and Kess defeat Aldric 3-1", transformBeat: "Blades move as a feminine fighting unit — lighter, faster, more maneuverable than male soldiers. The style works at squad level", combat: "Simulated ambush, pursuit, 3-on-Aldric final test. Aldric loses to the Blades", emotional: "Reinstates Queen's Blades as official unit. Bryn promoted to Blade-Captain. 'We will not fail thee.' 'I know. I taught you myself'" },
  { day: 46, title: "The Bandit King", location: "Eastern Ridge", keyEvent: "Military operation: 30 soldiers + 8 Blades assault Garvek the Nail's fortified camp. South face cliff climb", transformBeat: "9 women scale a cliff in light armour — lighter by 40lbs than male soldiers. Feminine body type makes the impossible possible. Breasts protest against rock; adrenaline drowns it", combat: "Three-pronged assault. Blades over the back wall. Camp taken from behind. Rapier through two fighters. Garvek captured at bladepoint", emotional: "Garvek: 'They told me thou wert a boy in a dress.' 'They were wrong. On every count.' Bryn: 'When can we do it again?'" },
  { day: 47, title: "Aldric's Story", location: "Iron Garden (fire, evening)", keyEvent: "Aldric reveals why he knows the feminine style — his dead lover Verana. Ill-fitting male armour killed her", transformBeat: "Aldric's 30-year oath to Verana: never again would a woman fight in armour not made for her body. Every sand sack, corset, breast guard — his oath fulfilled", combat: "No combat — story, bonding, revelation", emotional: "Caelan weeps — grief shared, promise kept. 'Thou art my oath to a dead woman, fulfilled through a living queen.' 'Thank you'" },
  { day: 48, title: "The Full Kit", location: "Iron Garden / Castle Perimeter", keyEvent: "Full-armour endurance run: 2-mile perimeter, all weapons, timed targets. Completes in 21 minutes — 3 under qualifying standard", transformBeat: "Female endurance: sustained 80% capacity over distance. 'The body that could fight for hours.' Beats Yseldra's record", combat: "Every weapon deployed: rapier thrust, dagger slash, arrow at sprint, misericorde strike over a barrier. All targets hit", emotional: "Aldric smiles. A real, full smile. 2 seconds. Stone returns. But seen. Never forgotten" },
  { day: 49, title: "The Vigil", location: "Temple of Origins (overnight)", keyEvent: "Night alone in the Temple with the rapier. Full body awareness meditation. Reconciliation", transformBeat: "White shift, no armour, no binding. Breasts rest against ribcage — soft, present, permanent. Hair to mid-back. Face fully female. The body catalogued and accepted completely", combat: "No combat — vigil, reflection, spiritual preparation", emotional: "Hears Aldric sharpening Frostfang through the stone — a lullaby. Sleeps with rapier across chest. Heart at peace with both warrior and woman" },
  { day: 50, title: "The Queen's Steel", location: "Great Hall / Iron Garden", keyEvent: "Formal presentation to the full court. Aldric names Caelan a warrior. Queen Alinora names Caelan a queen", transformBeat: "Full feminine armour — breastplate accommodates chest, waist articulated, hip guards shaped. Hair in warrior's knot. Face unmistakably female. 'The body I would wear to the throne'", combat: "No live combat — formal presentation. All weapons displayed. 50 days of training made manifest", emotional: "Alinora descends throne again. 'He hath revealed a queen.' Court erupts. Rapier raised to the light. 'A warrior's heart. Steady. Strong. Unafraid. And entirely, irrevocably, mine'" },
];

const getPhase = (day) => phases.find(p => day >= p.range[0] && day <= p.range[1]);

export default function ArcSummary() {
  const [expandedDay, setExpandedDay] = useState(null);
  const [filterPhase, setFilterPhase] = useState(null);

  const filtered = filterPhase !== null ? days.filter(d => {
    const p = phases[filterPhase];
    return d.day >= p.range[0] && d.day <= p.range[1];
  }) : days;

  return (
    <div style={{
      fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
      background: "linear-gradient(180deg, #1a1510 0%, #0d0b08 100%)",
      color: "#d4c5a9",
      minHeight: "100vh",
      padding: "24px 16px"
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32, borderBottom: "1px solid #3d3425", paddingBottom: 24 }}>
          <div style={{ fontSize: 14, letterSpacing: 6, textTransform: "uppercase", color: "#8B7355", marginBottom: 8 }}>Veil of the Heir</div>
          <h1 style={{ fontSize: 28, fontWeight: "normal", color: "#DAA520", margin: "8px 0", fontStyle: "italic" }}>⚔️ The Warrior Queen Arc</h1>
          <div style={{ fontSize: 13, color: "#8B7355" }}>50-Day Scene Summary — Sir Aldric's Feminine Combat Training</div>
          <div style={{ marginTop: 12, fontSize: 12, color: "#6b5d4a" }}>42,401 words · 5 Phases · First Person Caelan POV</div>
        </div>

        {/* Phase Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24, justifyContent: "center" }}>
          <button onClick={() => setFilterPhase(null)} style={{
            background: filterPhase === null ? "#3d3425" : "transparent",
            border: "1px solid #3d3425",
            color: filterPhase === null ? "#DAA520" : "#8B7355",
            padding: "6px 14px", borderRadius: 4, cursor: "pointer", fontSize: 12, fontFamily: "inherit"
          }}>All 50 Days</button>
          {phases.map((p, i) => (
            <button key={i} onClick={() => setFilterPhase(filterPhase === i ? null : i)} style={{
              background: filterPhase === i ? "#3d3425" : "transparent",
              border: `1px solid ${p.color}44`,
              color: filterPhase === i ? p.color : "#8B7355",
              padding: "6px 14px", borderRadius: 4, cursor: "pointer", fontSize: 11, fontFamily: "inherit"
            }}>{p.icon} {p.name}</button>
          ))}
        </div>

        {/* Stats Bar */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
          gap: 8, marginBottom: 28, padding: 16, background: "#1f1a14", borderRadius: 6, border: "1px solid #2d2519"
        }}>
          {[
            { label: "Goblins Killed", val: "8" },
            { label: "Murkkin Killed", val: "12+" },
            { label: "Griln Killed", val: "1" },
            { label: "Changeling Killed", val: "1" },
            { label: "Bandits Defeated", val: "65+" },
            { label: "Villages Protected", val: "5" },
            { label: "Aldric Nods", val: "7+" },
            { label: "Aldric Smiles", val: "1" },
            { label: "Giggles", val: "2" },
            { label: "Queen's Blades", val: "8+1" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 18, color: "#DAA520", fontWeight: "bold" }}>{s.val}</div>
              <div style={{ fontSize: 10, color: "#6b5d4a", textTransform: "uppercase", letterSpacing: 1 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Day Cards */}
        {filtered.map((d) => {
          const phase = getPhase(d.day);
          const isOpen = expandedDay === d.day;
          return (
            <div key={d.day} onClick={() => setExpandedDay(isOpen ? null : d.day)} style={{
              marginBottom: 6,
              background: isOpen ? "#1f1a14" : "#16130f",
              border: `1px solid ${isOpen ? phase.color + "66" : "#2d251900"}`,
              borderLeft: `3px solid ${phase.color}`,
              borderRadius: 4,
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}>
              {/* Collapsed Row */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr 1.2fr 1fr",
                gap: 12,
                padding: "10px 14px",
                alignItems: "center",
                fontSize: 12
              }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 18, fontWeight: "bold", color: phase.color }}>{d.day}</div>
                  <div style={{ fontSize: 9, color: "#6b5d4a" }}>DAY</div>
                </div>
                <div>
                  <div style={{ color: "#d4c5a9", fontWeight: "bold", fontSize: 13 }}>{d.title}</div>
                  <div style={{ color: "#6b5d4a", fontSize: 11 }}>{d.location}</div>
                </div>
                <div style={{ color: "#a89880", fontSize: 11, lineHeight: 1.4 }}>{d.keyEvent}</div>
                <div style={{ color: "#8B7355", fontSize: 11, lineHeight: 1.4, fontStyle: "italic" }}>
                  {d.transformBeat.length > 90 ? d.transformBeat.slice(0, 90) + "…" : d.transformBeat}
                </div>
              </div>

              {/* Expanded Detail */}
              {isOpen && (
                <div style={{
                  padding: "0 14px 16px 74px",
                  borderTop: `1px solid ${phase.color}22`,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  fontSize: 12,
                  lineHeight: 1.6
                }}>
                  <div>
                    <div style={{ color: phase.color, fontSize: 10, textTransform: "uppercase", letterSpacing: 2, marginBottom: 6, marginTop: 12 }}>🔮 Transformation Beat</div>
                    <div style={{ color: "#a89880" }}>{d.transformBeat}</div>
                    <div style={{ color: phase.color, fontSize: 10, textTransform: "uppercase", letterSpacing: 2, marginBottom: 6, marginTop: 14 }}>⚔️ Combat / Adventure</div>
                    <div style={{ color: "#a89880" }}>{d.combat}</div>
                  </div>
                  <div>
                    <div style={{ color: phase.color, fontSize: 10, textTransform: "uppercase", letterSpacing: 2, marginBottom: 6, marginTop: 12 }}>💜 Emotional Core</div>
                    <div style={{ color: "#a89880" }}>{d.emotional}</div>
                    <div style={{ color: phase.color, fontSize: 10, textTransform: "uppercase", letterSpacing: 2, marginBottom: 6, marginTop: 14 }}>📍 Key Event</div>
                    <div style={{ color: "#a89880" }}>{d.keyEvent}</div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 32, padding: 20, borderTop: "1px solid #3d3425", color: "#6b5d4a", fontSize: 12, fontStyle: "italic" }}>
          The veil thinneth. The blade shineth. The queen riseth.
        </div>
      </div>
    </div>
  );
}
