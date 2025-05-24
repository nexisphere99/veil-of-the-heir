
function goTo(passageName) {
    const content = document.getElementById("wiki-content");

    if (!content) return;

    if (passageName === "Velmoria") {
        content.innerHTML = `
            <h2>📜 Kingdom Lore: Velmoria – The Matriarchal Throne</h2>
            <blockquote>
                “The throne of Velmoria is not won by war nor granted by marriage it is inherited through the blood of queens and shaped by the will of women.”
            </blockquote>
    
            <h3>I. Origins of the Matriarchal Line</h3>
            <p>Velmoria was founded over eight centuries ago by Queen Vaeloria the First, a visionary warrior-mage who united the splintered valley clans under a single banner. Legend says she forged the Thornwood Crown not of gold, but of living roots, entwined with magic and bound to her bloodline. Her reign established the Matriarchal Decree: the royal line would pass from mother to daughter, and the crown would always rest upon a queen’s head.</p>
            <p>This law was not merely symbolic it was sealed by a magical pact with the River Oracle, binding the succession of the throne to the feminine essence of the ruling bloodline. Thus, from the very beginning, Velmoria’s identity was built upon the sacred rulership of queens.</p>
    
            <h3>II. Succession Law: The Crownbind Rite</h3>
            <p>Succession in Velmoria does not follow primogeniture in the traditional sense. Instead, it is determined by a ritual known as the <strong>Crownbind Rite</strong>, in which a queen selects her successor but only if the successor is recognized as a woman by both law and magic.</p>
            <p>This has led to various forms of succession:</p>
            <ul>
                <li>Biological daughters</li>
                <li>Adopted daughters (undergoing ceremonial bonding and magical alignment)</li>
                <li>Transformed heirs, often born male but transitioned through the rites of mental, magical, and ceremonial preparation.</li>
            </ul>
            <p>The current queen, <strong>Alinora Velmoria</strong>, has only one child Prince Caelan and with no other heirs, she has invoked <em>The Empress Clause</em>, a rare tradition allowing a son to be reshaped into a daughter to preserve the lineage.</p>
    
            <h3>III. Notable Past Queens of Velmoria</h3>
            <ul>
                <li><strong>Queen Vaeloria the First – The Founder</strong><br>
                A sorceress-warrior who raised the capital from stone and fire. Defeated the Wyrm-King and sealed the northern pass with her own blood. Her roots still grow through the throne room floor, according to legend.</li>
    
                <li><strong>Queen Selene the Wise – The Peacemaker</strong><br>
                Brokered alliances with mountain tribes through diplomacy. Introduced the Royal Conclave. Developed the Twin Crown Rule: daughters must master both politics and magic.</li>
    
                <li><strong>Queen Elantra the Unyielding – The Iron Reformer</strong><br>
                Outlawed male succession after her brother's attempted coup. Strengthened the Matriarchal Decree with blood ritual. Instituted mandatory training for all royal daughters including transformed ones.</li>
            </ul>
    
            <h3>IV. The King Consort: A Crown Without Power</h3>
            <p>In Velmoria, a king consort holds ceremonial prestige but no political authority. He may:</p>
            <ul>
                <li>Appear at formal events</li>
                <li>Serve as artist, educator, or public figure</li>
                <li>Offer counsel privately to the queen</li>
            </ul>
            <p>He may not vote, command troops, or influence succession. King Consort <strong>Therion</strong> is a philosopher-musician, admired but politically quiet. Some say his gentleness has shaped Caelan’s nature for better or worse.</p>
    
            <h3>V. Gender Norms in Velmoria</h3>
            <p>Velmoria’s society is not just matriarchal it is <strong>feminine-led</strong>. Women command armies, study magic, and rule. Men are valued, but expected to support, protect, or create.</p>
            <p><strong>Women:</strong> Command, lead, enchant, rule.<br>
                <strong>Men:</strong> Assist, create, protect, obey.</p>
            <p>A man ascending the throne is considered unnatural unless he transforms <em>mind, body, and soul</em>.</p>
    
            <h3>VI. Alchemy and Rule: The Throne’s Magic</h3>
            <p>Magic and monarchy are bound through <strong>Bloodbinding</strong>, a lineage spell tied to the throne. Only those with a feminine-aligned essence naturally or magically can access the throne's powers:</p>
            <ul>
                <li>Command the <strong>Throne Wards</strong> (palace defenses)</li>
                <li>Use the <strong>Royal Altar</strong> for kingdom-wide enchantments</li>
                <li>Connect with the <strong>Voice of Velmoria</strong>, a divine guide of true queens</li>
            </ul>
            <p>Thus, Caelan’s transformation is not about vanity it’s about <strong>inheritance and survival</strong>. The royal mage, <strong>Archmage Thalara Moonveil</strong>, ensures all heirs are ritually and magically aligned before coronation.</p>
            `;

        setTimeout(() => {
            document.getElementById("Velmoria-section").scrollIntoView({ behavior: 'smooth' });
        }, 50);
    } else if (passageName === "Caelan") {
        content.innerHTML = `
                <h2>👤 Prince Caelan / Queen Caelene</h2>

                <blockquote>
                “To be born an heir is not to be born a queen. Destiny is forged in the fires of choice and change.”<br>
                  <i>The Royal Codex of Velmoria</i>
                </blockquote>

                <img src="https://example.com/images/caelan_prince_portrait.jpg" alt="Prince Caelan Portrait" style="width:100%; max-width:600px; display:block; margin:1rem auto; border-radius:12px; box-shadow: 0 0 15px rgba(44, 27, 16, 0.4);">

                <h3>Background and Early Life</h3>
                <p>Prince Caelan Velmoria, age 20, was born the only son to Queen Alinora and King Consort Therion in the ancient capital of Velmoria. From a young age, Caelan showed a complex blend of curiosity, intellect, and a gentle heart qualities that endeared him to the court but set him apart from traditional heirs.</p>
                <p>Raised under the heavy mantle of the Matriarchal Decree, Caelan’s path was uncertain. As a male heir in a realm where queens rule, he faced pressure to transform his mind, body, and soul to fit the destiny awaiting him as <em>Queen Caelene</em>.</p>

                <img src="https://example.com/images/caelan_childhood_castle.jpg" alt="Young Caelan at the Castle" style="width:100%; max-width:600px; display:block; margin:1rem auto; border-radius:12px; box-shadow: 0 0 15px rgba(44, 27, 16, 0.3);">

                <h3>The Crown and the Transformation</h3>
                <p>Caelan’s transformation from prince to queen is both a political necessity and a deeply personal journey. The <strong>Crownbind Rite</strong> demands not only physical change but the full embrace of feminine identity, magic, and rule.</p>
                <p>This transformation is overseen by the court’s greatest minds:</p>
                <ul>
                <li><strong>Lady Serelyne Virellis</strong> – guiding mental and emotional transformation.</li>
                <li><strong>Archmage Thalara Moonveil</strong> – performing the arcane rites of physical transition.</li>
                <li><strong>Sir Aldric Vornhelm</strong> – training Caelan in courtly combat and diplomacy to wield power with strength and grace.</li>
                </ul>

                <img src="https://example.com/images/caelan_ceremony.jpg" alt="The Crownbind Rite Ceremony" style="width:100%; max-width:600px; display:block; margin:1rem auto; border-radius:12px; box-shadow: 0 0 20px rgba(44, 27, 16, 0.5);">

                <h3>Personality and Inner Conflict</h3>
                <p>Caelan is a deeply conflicted soul. Torn between his birth identity and the role he must fulfill, he struggles with feelings of doubt, fear, and resolve. His journey explores themes of selfhood, destiny, and the meaning of power beyond gender.</p>
                <p>Despite the pressures, Caelan exhibits remarkable resilience, a sharp mind for politics, and a genuine compassion for his people. These traits foreshadow the potential greatness of Queen Caelene, should he fully embrace his transformation.</p>

                <h3>Appearance: Before and After</h3>
                <div style="display:flex; flex-wrap: wrap; gap: 1rem; justify-content:center; margin:2rem 0;">
                <div style="flex: 1 1 300px; max-width: 300px; text-align:center;">
                    <img src="https://example.com/images/caelan_before.jpg" alt="Prince Caelan" style="width:100%; border-radius:12px; box-shadow: 0 0 10px rgba(44, 27, 16, 0.3);">
                    <p><strong>Prince Caelan</strong>   strong jawline, dark hair, youthful and earnest.</p>
                </div>
                <div style="flex: 1 1 300px; max-width: 300px; text-align:center;">
                    <img src="https://example.com/images/caelene_after.jpg" alt="Queen Caelene" style="width:100%; border-radius:12px; box-shadow: 0 0 10px rgba(44, 27, 16, 0.3);">
                    <p><strong>Queen Caelene</strong>   elegant, lithe, with refined features and a regal bearing.</p>
                </div>
                </div>

                <h3>Key Relationships</h3>
                <ul>
                <li><strong>Queen Alinora Velmoria</strong>: Mother and mentor, whose pragmatic guidance shapes Caelan’s path.</li>
                <li><strong>King Consort Therion</strong>: Father, whose gentle artistry influences Caelan’s sensitivity and creativity.</li>
                <li><strong>Lady Serelyne Virellis</strong>: Mental guide and counselor through the rites of transformation.</li>
                <li><strong>Archmage Thalara Moonveil</strong>: Magical overseer of the physical transformation, a mysterious figure of immense power.</li>
                <li><strong>Maera</strong>: Loyal companion and fierce protector, often the voice of honesty in Caelan’s court.</li>
                </ul>

                <h3>Notable Events</h3>
                <ol>
                <li><strong>The First Crownbind Rite</strong>: Caelan’s initial step toward accepting the queen’s mantle.</li>
                <li><strong>The Duel of the Twin Blades</strong>: A trial by combat that tested Caelan’s resolve and honor.</li>
                <li><strong>The Veil of Reflection</strong>: A magical ceremony where Caelan confronts his deepest fears and desires.</li>
                <li><strong>The Pact of the Thornwood Crown</strong>: The moment Caelan swore fealty to the ancient magical bloodline.</li>
                </ol>

                <h3>Quotes from Caelan</h3>
                <blockquote>
                “I am not merely becoming what was written for me   I am choosing who I will be.”<br>
                  Caelan Velmoria
                </blockquote>
                <blockquote>
                “Power is not in the shape of the body, but in the strength of the soul.”<br>
                  Caelan Velmoria
                </blockquote>

                <h3>Gallery</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit,minmax(200px,1fr)); gap: 1rem; margin-top: 1rem;">
                <img src="https://example.com/images/caelan_study.jpg" alt="Caelan studying royal tomes" style="width:100%; border-radius:12px; box-shadow: 0 0 10px rgba(44, 27, 16, 0.3);">
                <img src="https://example.com/images/caelan_training.jpg" alt="Caelan training with sword" style="width:100%; border-radius:12px; box-shadow: 0 0 10px rgba(44, 27, 16, 0.3);">
                <img src="https://example.com/images/caelan_magic.jpg" alt="Caelan practicing magic" style="width:100%; border-radius:12px; box-shadow: 0 0 10px rgba(44, 27, 16, 0.3);">
                <img src="https://example.com/images/caelan_court.jpg" alt="Caelan in court" style="width:100%; border-radius:12px; box-shadow: 0 0 10px rgba(44, 27, 16, 0.3);">
                </div>

                <p style="margin-top:2rem; font-style: italic; text-align:center;">
                The story of Caelan and Caelene is one of transformation, courage, and the power of identity   a tale unfolding at the heart of Velmoria's royal saga.
                </p>
            `;
        setTimeout(() => {
            document.getElementById("wiki-content").scrollIntoView({ behavior: 'smooth' });
        }, 50);
    } else if (passageName === "Characters") {

        content.innerHTML = `
            <h2>📖 Main Characters</h2>

            <section id="Characters" style="color: #3b2f2f; padding: 2em; border-radius: 10px; max-width: 900px; margin: auto;">

                <h2 style="text-align:center; font-size: 2.5em; border-bottom: 3px solid #7a5c4f; padding-bottom: 0.5em; margin-bottom: 1em;">Main Characters</h2>

                <article style="margin-bottom: 3em;">
                    <h3 style="font-size: 1.8em; color: #5a3e36;">🟊 Prince Caelan Velmoria</h3>
                    <p><strong>Age:</strong> 20<br>
                    <strong>Role:</strong> Protagonist, Heir to the Throne<br>
                    <strong>Gender:</strong> Male (transitioning to Female   Player-determined)<br>
                    <strong>Personality:</strong> Determined, intelligent, and deeply conflicted. Raised in Velmoria’s harsh warrior culture, Caelan hides a quiet sensitivity often misunderstood by his peers. His journey is one of self-discovery, wrestling with the pressure to conform to the crown's rigid traditions or to embrace a new identity forged by his own will. His fate is shaped by the choices of the player   a prince who may become a radiant queen, a reluctant ruler, or carve a unique path.<br>
                    <strong>Appearance:</strong> Tall and slender, with sharp, noble features. Dark hair falls in waves to his shoulders, often tied back for duty. His eyes are a piercing gray, reflecting both strength and vulnerability. His regal bearing is tempered by moments of hesitant warmth.<br>
                    <strong>Background:</strong> Son of Queen Alinora and King Consort Therion, Caelan was groomed from birth to inherit the throne. His upbringing involved sword training, royal etiquette, and political lessons, yet beneath the armor of duty lies a soul yearning for freedom and authenticity.</p>
                    <img src="https://example.com/images/prince_caelan.jpg" alt="Prince Caelan Velmoria" style="width:100%; max-width:400px; border-radius:8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.3); margin-top: 1em;">
                </article>

                <article style="margin-bottom: 3em;">
                    <h3 style="font-size: 1.8em; color: #b08d57;">👑 Queen Alinora Velmoria</h3>
                    <p><strong>Age:</strong> 42<br>
                    <strong>Role:</strong> Reigning Monarch of Velmoria, Mother of Caelan<br>
                    <strong>Personality:</strong> Regal, pragmatic, and emotionally reserved. Alinora is the embodiment of royal duty, bearing the weight of her ancestors with grace and a cold steel will. She loves her son but prioritizes the survival and legacy of the kingdom above personal desires. To her, tradition is the lifeblood of the realm.<br>
                    <strong>Appearance:</strong> Tall, statuesque, with sharp cheekbones and silver-streaked ebony hair always styled in an intricate braid. Her eyes are a stormy blue, commanding attention and respect. She favors dark velvet gowns embroidered with the royal sigil.<br>
                    <strong>Background:</strong> A queen hardened by decades of political intrigue and war, Alinora’s reign has been defined by unyielding control and sharp diplomacy. Her relationship with Caelan is complex tender yet fraught with the tension of expectation and sacrifice.</p>
                    <img src="https://example.com/images/queen_alinora.jpg" alt="Queen Alinora Velmoria" style="width:100%; max-width:400px; border-radius:8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.3); margin-top: 1em;">
                </article>

                <article style="margin-bottom: 3em;">
                    <h3 style="font-size: 1.8em; color: #6a5e44;">🪶 King Consort Therion Velmoria</h3>
                    <p><strong>Age:</strong> 45<br>
                    <strong>Role:</strong> Ceremonial King, Father of Caelan<br>
                    <strong>Personality:</strong> Gentle, artistic, and introspective. Therion is a tender soul amidst the rigid court. An accomplished painter and musician, he offers Caelan empathy and quiet wisdom. He often struggles with his ceremonial role’s impotence but wields his influence through subtle emotional guidance.<br>
                    <strong>Appearance:</strong> Slightly older, with soft features, silver-streaked auburn hair, and eyes the color of autumn leaves. His hands are calloused from gardening and painting rather than swordplay.<br>
                    <strong>Background:</strong> Though sidelined politically, Therion’s kindness and cultural refinement provide a counterbalance to Alinora’s austerity. His relationship with Caelan is nurturing, acting as an emotional anchor.</p>
                    <img src="https://example.com/images/king_therion.jpg" alt="King Consort Therion Velmoria" style="width:100%; max-width:400px; border-radius:8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.3); margin-top: 1em;">
                </article>

                <h2 style="text-align:center; font-size: 2.3em; margin-top: 3em; border-bottom: 3px solid #7a5c4f; padding-bottom: 0.5em;">Transformation Guides</h2>

                <article style="margin-bottom: 3em;">
                    <h3 style="font-size: 1.6em; color: #4a3c3c;">🧠 Lady Serelyne Virellis</h3>
                    <p><strong>Age:</strong> 39<br>
                    <strong>Role:</strong> High Counselor to the Queen, Head of Mental Conversion<br>
                    <strong>Personality:</strong> Sharp, authoritative, and mercilessly efficient. Lady Serelyne is the queen’s secret weapon in shaping Caelan’s mind. She is a master manipulator, wielding etiquette and psychological insight like a blade. Believing that true power is cloaked in feminine grace, she is both mentor and taskmaster.<br>
                    <strong>Appearance:</strong> Tall and willowy, with steel-gray eyes that pierce through facades. Her raven-black hair is braided tightly, always dressed in austere, embroidered black robes marked with royal sigils.<br>
                    <strong>Background:</strong> Born to a minor noble family, she rose through cunning and intellect. Her loyalty to the crown is absolute, but beneath her cold exterior lies a mind obsessed with perfection.</p>
                    <img src="https://example.com/images/lady_serelyne.jpg" alt="Lady Serelyne Virellis" style="width:100%; max-width:350px; border-radius:8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.3); margin-top: 1em;">
                </article>

                <article style="margin-bottom: 3em;">
                    <h3 style="font-size: 1.6em; color: #6b5876;">🔮 Archmage Thalara Moonveil</h3>
                    <p><strong>Age:</strong> Unknown (Appears ~30)<br>
                    <strong>Role:</strong> Royal Mage, Overseer of Physical Conversion<br>
                    <strong>Personality:</strong> Enigmatic, nurturing, bound by ancient arcane wisdom. Thalara views the body as sacred clay, and transformation as an art and ritual. Her magic is subtle, rooted in alchemy, soul resonance, and herbalism. Consent and harmony are paramount to her methods.<br>
                    <strong>Appearance:</strong> Ethereal and ghostlike, with moon-pale skin and shimmering white-lavender hair that floats ethereally. Her eyes shift colors with her moods, and she wears flowing robes woven with enchanted silver thread.<br>
                    <strong>Background:</strong> A mysterious figure whose origins are unknown. She is revered and sometimes feared for her ancient power and gentle heart.</p>
                    <img src="https://example.com/images/archmage_thalara.jpg" alt="Archmage Thalara Moonveil" style="width:100%; max-width:350px; border-radius:8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.3); margin-top: 1em;">
                </article>

                <h2 style="text-align:center; font-size: 2.3em; margin-top: 3em; border-bottom: 3px solid #7a5c4f; padding-bottom: 0.5em;">Trainers & Mentors</h2>

                <article style="margin-bottom: 3em;">
                    <h3 style="font-size: 1.6em; color: #665544;">⚔️ Sir Aldric Vornhelm</h3>
                    <p><strong>Age:</strong> 48<br>
                    <strong>Role:</strong> Commander of the Royal Guard, Combat Trainer<br>
                    <strong>Personality:</strong> Stern, battle-hardened, and blunt. Aldric embodies discipline and strength. Skeptical of Caelan’s transformation but loyal to the crown’s command, he pushes the prince to prove his worth through action. Beneath his gruff exterior lies grudging respect.<br>
                    <strong>Appearance:</strong> Broad-shouldered and scarred, graying hair tied back, clad in worn leather and chainmail. Wields the broadsword Frostfang.<br>
                    <strong>Background:</strong> A veteran of many campaigns, Aldric trains the young royal in swordsmanship and battlefield tactics, valuing skill and courage above all.</p>
                    <img src="https://example.com/images/sir_aldrich.jpg" alt="Sir Aldric Vornhelm" style="width:100%; max-width:350px; border-radius:8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.3); margin-top: 1em;">
                </article>

                <article style="margin-bottom: 3em;">
                    <h3 style="font-size: 1.6em; color: #664433;">📜 Lord Malrec Thorne</h3>
                    <p><strong>Age:</strong> 56<br>
                    <strong>Role:</strong> Queen’s Main Counselor, Rulership Mentor<br>
                    <strong>Personality:</strong> Suave, cunning, and manipulative. Master of court intrigue and shadow diplomacy. Malrec teaches Caelan the subtle art of power behind the throne where secrets, alliances, and whispers rule.<br>
                    <strong>Appearance:</strong> Lean and elegant, velvet and lace attire, piercing green eyes that seem to see through all pretense.<br>
                    <strong>Background:</strong> His long service to the crown is marked by survival in political storms. He tests Caelan with riddles and moral dilemmas, shaping the prince into a shrewd ruler.</p>
                    <img src="https://example.com/images/lord_malrec.jpg" alt="Lord Malrec Thorne" style="width:100%; max-width:350px; border-radius:8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.3); margin-top: 1em;">
                </article>

                <article style="margin-bottom: 3em;">
                    <h3 style="font-size: 1.6em; color: #a05a44;">🧵 Mistress Veletia Roswyn</h3>
                    <p><strong>Age:</strong> 34<br>
                    <strong>Role:</strong> Royal Clothier and Stylist, Female Attire Trainer<br>
                    <strong>Personality:</strong> Vivacious, theatrical, and a lover of drama. Veletia teaches Caelan how to embody the queen’s grace through clothing, movement, and presence.<br>
                    <strong>Appearance:</strong> Curvy with fiery red curls, dressed in luxurious silk and feathers.<br>
                    <strong>Background:</strong> Once a performer herself, Veletia sees clothing as magical and transformative, vital to Caelan’s rebirth.</p>
                    <img src="https://example.com/images/mistress_veletia.jpg" alt="Mistress Veletia Roswyn" style="width:100%; max-width:350px; border-radius:8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.3); margin-top: 1em;">
                </article>

                <article style="margin-bottom: 3em;">
                    <h3 style="font-size: 1.6em; color: #735c4f;">🗝️ Malgros the Vaultkeeper</h3>
                    <p><strong>Age:</strong> Unknown (Appears ~50)<br>
                    <strong>Role:</strong> Keeper of Velmoria’s Essence Vault, Gatekeeper to Forbidden Ingredients<br>
                    <strong>Personality:</strong> Gruff, intimidating, and fiercely unyielding. Malgros tests all who seek the kingdom’s volatile magic. Beneath the harsh exterior, a mysterious past lurks.<br>
                    <strong>Appearance:</strong> Towering, bronze skin, iron-grey hair, a jagged scar on his face, and amber eyes that never miss a detail.<br>
                    <strong>Background:</strong> A sentinel of secrets, Malgros guards the magical heart of Velmoria and judges those worthy of its power.</p>
                    <img src="https://example.com/images/malgros_vaultkeeper.jpg" alt="Malgros the Vaultkeeper" style="width:100%; max-width:350px; border-radius:8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.3); margin-top: 1em;">
                </article> 

                <article style="margin-bottom: 3em;">
                <h3 style="font-size: 1.6em; color: #a05a44;">🩷 Maera</h3>
                <p><strong>Role:</strong> Handmaid and Confidante<br>
                <strong>Personality:</strong> Maera’s sarcasm masks fierce loyalty. She’s a master of navigating servant gossip and court danger. She teaches Caelan how to “read a room,” when to fight back, and when to smile and stab later. Protective since childhood, but sometimes fears losing her place as Caelan changes.<br>
                <strong>Appearance:</strong> Petite with short, dark curls, quick movements, and a mischievous sparkle in her eyes.</p>
                </article>

                <article style="margin-bottom: 3em;">
                <h3 style="font-size: 1.6em; color: #4a4a6a;">🛡️ Torin</h3>
                <p><strong>Role:</strong> Silent Bodyguard<br>
                <strong>Personality:</strong> Torin is a wall of quiet strength who rarely speaks but memorizes every route, face, and danger. Beneath his stoicism lies deep emotion, especially his unspoken feelings for Caelan. He carves runes into his armor and keeps vigilant watch.<br>
                <strong>Appearance:</strong> Tall, muscular, with stormy gray eyes and close-cropped hair. Always wears black-and-silver armor.</p>
                </article>

                <article style="margin-bottom: 3em;">
                <h3 style="font-size: 1.6em; color: #4a437a;">🌙 Nyssa</h3>
                <p><strong>Role:</strong> Mage’s Apprentice<br>
                <strong>Personality:</strong> Nyssa is a bubbling cauldron of magic, mischief, and manic energy. Often forgets protocol, speaks in riddles, and casts minor glamours for fun. Sees Caelan as a mythical figure from prophecy.<br>
                <strong>Appearance:</strong> Always barefoot, wears layered robes with star patterns, and carries a floating crystal orb humming with her mood.</p>
                </article>

                <article style="margin-bottom: 3em;">
                <h3 style="font-size: 1.6em; color: #445576;">📘 Jeral</h3>
                <p><strong>Role:</strong> Junior Steward<br>
                <strong>Personality:</strong> Ambitious, intelligent, and pragmatic. Serves Caelan efficiently but listens to the walls. Dreams of becoming Chancellor; loyalty depends on recognition.<br>
                <strong>Appearance:</strong> Thin with sharp features, spectacles perched on his nose, wearing muted blue tunics and carrying scrolls.</p>
                </article>

                <article style="margin-bottom: 3em;">
                <h3 style="font-size: 1.6em; color: #6a4a2f;">🐎 Tomasin "Tomm" Greathoof</h3>
                <p><strong>Role:</strong> Royal Stable Keeper<br>
                <strong>Personality:</strong> Gruff, earthy, endlessly patient. Knows every horse by name and temperament. Mistrusts nobles but respects hard work.<br>
                <strong>Appearance:</strong> Weathered skin, thick beard flecked with hay, smells faintly of leather and oats.</p>
                </article>

                <article style="margin-bottom: 3em;">
                <h3 style="font-size: 1.6em; color: #4b4b4b;">🔒 Old Marda Brimhook</h3>
                <p><strong>Role:</strong> Dungeon Keeper<br>
                <strong>Personality:</strong> Sardonic, fiercely loyal, unnervingly calm. Rumored former assassin, speaks in clipped phrases, sees everything as a power transaction.<br>
                <strong>Appearance:</strong> Wiry frame, sharp cheekbones, wears dark wool and iron keys at her waist.</p>
                </article>

                <article style="margin-bottom: 3em;">
                <h3 style="font-size: 1.6em; color: #456a3b;">👹 Gribblek the Begrudged</h3>
                <p><strong>Role:</strong> Goblin in the Right Tower<br>
                <strong>Personality:</strong> Cynical, clever, begrudgingly loyal. Former thief turned arcane informant. Sarcastic with a wise mind; offers magical insight for candied figs.<br>
                <strong>Appearance:</strong> Greenish skin, oversized ears, patchy robe, wears a monocle that doesn’t quite fit.</p>
                </article>

                <article style="margin-bottom: 3em;">
                <h3 style="font-size: 1.6em; color: #a05a44;">🥘 Cookmaster Halda Brox</h3>
                <p><strong>Role:</strong> Royal Cook<br>
                <strong>Personality:</strong> Loud, proud, and full of flavor. Commands the kitchen with authority, believes food shapes moods and alliances.<br>
                <strong>Appearance:</strong> Broad, flour-dusted, thick arms, booming laugh, spice pouches on her belt.</p>
                </article>

                <article style="margin-bottom: 3em;">
                <h3 style="font-size: 1.6em; color: #4a6a4a;">🌿 Edran Mossfoot</h3>
                <p><strong>Role:</strong> Royal Gardener<br>
                <strong>Personality:</strong> Quiet, poetic, deeply in tune with nature. Speaks rarely but gardens with hidden meanings and herbal insights.<br>
                <strong>Appearance:</strong> Always barefoot, long brown hair tangled with leaves, dirt under fingernails.</p>
                </article>

                <article style="margin-bottom: 3em;">
                <h3 style="font-size: 1.6em; color: #a05329;">🔨 Brannic & Eolla Copperwright</h3>
                <p><strong>Role:</strong> Royal Craftsmen (Blacksmith & Jeweler)<br>
                <strong>Brannic:</strong> Gruff, fire-tempered, loyal to tradition. Barrel-chested, soot-covered, wears leather apron.<br>
                <strong>Eolla:</strong> Graceful, elegant, lover of detail. Soot-smudged fingers, gems in her hair.</p>
                </article>

                <article style="margin-bottom: 3em;">
                <h3 style="font-size: 1.6em; color: #4a4a7a;">📚 Mistress Anethra Quillshade</h3>
                <p><strong>Role:</strong> Royal Librarian<br>
                <strong>Personality:</strong> Stern, knowledgeable, quietly subversive. Hoards forbidden texts and supports Caelan’s intellect for a price.<br>
                <strong>Appearance:</strong> Tall, thin, deep blue robes, moonstone glasses.</p>
                </article>
            </section>
            `;
        setTimeout(() => {
            document.getElementById("Velmoria-section").scrollIntoView({ behavior: 'smooth' });
        }, 50);
    } else if(passageName === "MindPath"){
        content.innerHTML = `<article style="margin-bottom: 3em;">
        <h3 style="font-size: 1.6em; color: #6a3d2f;">🧠 The Shaping of the Mind: Mental Transformation   Lady Serelyne Virellis</h3>
        <p><strong>Instructor:</strong> Lady Serelyne Virellis, High Counselor of the Queen<br>
            <strong>Location:</strong> The Roseglass Study   A chamber of velvet chairs, incense, and towering bookshelves in the East Wing</p>

        <p><strong>Purpose:</strong> This path delves into the inner transformation of Prince Caelan's psyche. Under Lady Serelyne’s precise, sometimes merciless guidance, Caelan begins the psychological metamorphosis required to ascend not only the throne but the identity of a queen. Emotions must be refined. Behaviors softened. Pride undone and rebuilt into regal elegance. The mind must rule before the crown does.</p>

        <p>The Roseglass Study is no simple classroom it is a sanctuary and crucible. Perfumed with rose and myrrh, filled with tomes of etiquette, political maneuvering, and psychological alchemy, it is where Caelan is taught to unlearn what he was and imagine what he might become. Serelyne’s methods are both cerebral and symbolic blending philosophy, roleplay, and subtle enchantments that unravel Caelan's mental armor thread by thread.</p>

        <h4 style="color: #5a2e1e;">🪞 Training Themes</h4>
        <ul style="line-height: 1.8;">
            <li><strong>Feminine Etiquette:</strong> How to sit with grace, speak in tones of velvet, walk as if floating on diplomacy, and gesture with precision and power. Every movement becomes a message.</li>
            <li><strong>Emotional Intelligence:</strong> Caelan must embrace softness without surrender, intuition without fear, empathy without fragility. He is taught to read rooms, hearts, and silences.</li>
            <li><strong>Courtly Grace:</strong> In the labyrinth of courtly life, words are weapons. Caelan studies the art of veiled compliments, honeyed threats, strategic silences, and how to host with both warmth and command.</li>
            <li><strong>Deconstructing Masculinity:</strong> Serelyne confronts Caelan's past beliefs his pride, aggression, and rigidity. Through rhetorical duels and moral exercises, she exposes the cracks in his armor and urges him to redefine strength.</li>
            <li><strong>Internal Roleplay:</strong> Caelan must perform roles: the dutiful daughter, the cunning duchess, the grieving widow, the radiant debutante. In these acts he discovers truths about himself and others what is real and what is learned.</li>
        </ul>

        <h4 style="color: #5a2e1e;">🎭 Instructor Profile: Lady Serelyne Virellis</h4>
        <p>Serelyne is velvet wrapped around a dagger. Elegant, composed, and unfathomably intelligent, she was once the Queen’s shadow advisor, known for guiding succession transitions and quelling scandal with a whisper. Her eyes see the future of the kingdom and in Caelan, she sees a puzzle that must be reshaped, not merely solved. She does not tolerate defiance, but rewards growth with real power. Beneath her calm exterior lies the mind of a master manipulator one who believes in Caelan’s potential, even if she must break him to reach it.</p>

        <h4 style="color: #5a2e1e;">🧩 Player Impact</h4>
        <ul style="line-height: 1.8;">
            <li><strong>Adaptive Choices:</strong> Players can choose whether Caelan accepts Serelyne’s teachings with eagerness, resists them with pride, or navigates a complex middle path of strategic compliance.</li>
            <li><strong>Dialogue Branching:</strong> Court scenes, political negotiations, and personal encounters are all shaped by Caelan’s mental transformation. Charm, tact, and submissive grace can unlock alternative routes and outcomes.</li>
            <li><strong>Trait Development:</strong> Mental stats such as <em>Composure</em>, <em>Charm</em>, <em>Empathy</em>, and <em>Submission</em> are affected by Caelan’s decisions. Mastery of this path may unlock passive abilities like “Disarming Presence” or “Velvet Authority.”</li>
            <li><strong>Inner Conflict System:</strong> Choices and responses can trigger internal conflict scenes dreams, flashbacks, or hallucinated trials where Caelan wrestles with his old identity, past expectations, or imagined futures.</li>
        </ul>

        <h4 style="color: #5a2e1e;">🔮 Sample Session: “The Mirror Rite”</h4>
        <p>In one pivotal ritual, Caelan is seated before a massive silver mirror enchanted to reflect not only one’s appearance, but their innermost self. Serelyne asks him questions not to be answered aloud, but felt within. With each confession, the mirror shifts. It may show a queen, a child, a monster, or something Caelan cannot name. What he sees and how he reacts sets the tone for his mental journey henceforth.</p>

        <img src="https://example.com/images/serelyne_study.jpg" alt="Lady Serelyne in the Roseglass Study" style="width:100%; max-width:500px; border-radius:8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.3); margin-top: 1em;">
        </article>
        `
        setTimeout(() => {
            document.getElementById("Velmoria-section").scrollIntoView({ behavior: 'smooth' });
        }, 50);
    }else if(passageName==="BodyPath"){
        content.innerHTML = `<article style="margin-bottom: 3em;">
        <h3 style="font-size: 1.6em; color: #5b3d88;">✨ The Shaping of the Body: Physical Transformation   Archmage Thalara Moonveil</h3>
        <p><strong>Instructor:</strong> Archmage Thalara Moonveil, Royal Mage and Keeper of the Bodysoul Grimoire<br>
            <strong>Location:</strong> The Veil Tower   A crystalline spire half-submerged in magical fog, pulsing with ancient runes and moonlight</p>

        <p><strong>Purpose:</strong> In the Tower of the Veil, Caelan begins the bodily journey from prince to princess not merely cross-dressing or illusion, but a complete, irreversible alchemical remaking of the flesh. Velmoria’s deepest enchantments long hidden from the outside world are now turned inward, on one heir’s very body. Each breath, each heartbeat, becomes a spell in motion. The body becomes a canvas upon which destiny, identity, and erotic transformation are painted stroke by stroke.</p>

        <h4 style="color: #472c68;">🌙 The Archmage and Her Tower</h4>
        <p>Archmage Thalara is not merely a spellcaster. She is a sculptor of souls, a lover of forbidden transformation, and a mistress of body-magicks both sacred and sensual. Elegant and ageless, Thalara wears robes of translucent silk and inked runes across her skin. Her voice is music, her presence magnetic, her discipline merciless. In the tower, Caelan is stripped of titles, garments, and assumptions. What remains is clay warm, aching, and waiting to be reshaped.</p>

        <blockquote style="background-color: #ece2f6;">
            “Do not fear what is leaving you, my sweet heir. Let the weight between your legs melt, and feel how your new curves sing. The queen within has always ached for release.”
            <br>  Archmage Thalara, during Caelan’s First Mirror Rite
        </blockquote>

        <h4 style="color: #472c68;">⚗️ Phases of Physical Transformation</h4>
        <ul style="line-height: 1.8;">
            <li><strong>Initial Shift <em>(Mandatory)</em>:</strong> The prince’s masculinity begins to dissolve. The genitals shrink, contract, and eventually vanish, replaced by a budding cleft of silken skin. This moment is intimate, magical, and often erotically overwhelming. Thalara guides Caelan gently or sternly through the sensations of emptiness and emergence. Vulnerability, heat, and aching softness flood him as his new center forms.</li>

            <li><strong>Emergence:</strong> The female sex is not simply grown it is composed. Muscles twist, bones realign, and nerves rewire under glittering sigils. Caelan may feel phantom heat, ghost orgasms, or psychic echoes from a body not yet fully formed. Magical oils, breath rituals, and full-body sigil massages accompany each change.</li>

            <li><strong>Refinement Rituals <em>(Player-Controlled)</em>:</strong> Every part of Caelan’s form may be customized through rare potions, quest-bound reagents, and deeply sensual rites.</li>
        </ul>

        <h4 style="color: #472c68;">🔮 Customization Paths & Quests</h4>
        <p>Each bodily refinement is an intimate ritual often requiring both physical ingredients and a psychological trial. Some of these trials are gentle; others are harsh, humiliating, or ecstatic.</p>

        <ul style="line-height: 1.8;">
            <li><strong>Breasts:</strong> Shape, weight, sensitivity. Potions brewed with siren pearls or motherroot sap may lead to heavy, aching swells that throb with magic or dainty, perky forms of subtle allure.</li>
            <li><strong>Hips & Waist:</strong> Bone shifting is slow and painful. Some players may experience Caelan crying out during the twist, others may choose to submit silently and let the curve bloom.</li>
            <li><strong>Face:</strong> Softening of jawline, cheek enhancements. Mirrors may show “her” before Caelan feels ready.</li>
            <li><strong>Voice:</strong> Caelan’s voice cracks sometimes mid-sentence into lilting tones or smoky purrs. A silk chord ritual around the throat may seal the change.</li>
            <li><strong>Hair:</strong> Growth is sensual and uncontrolled tresses bloom from the scalp overnight unless trimmed. Hair texture is altered with moon-dust, foxbane oil, or ritual moaning beneath enchanted windchimes.</li>
            <li><strong>Skin:</strong> Becomes velvet-soft. Caelan may develop a scent like jasmine, rose, or fertile earth depending on potion selection.</li>
            <li><strong>Height & Muscle:</strong> He may choose to remain tall and willowy, or shrink slightly for a more demure form. Strength is replaced with flexibility, or a curvaceous power.</li>
            <li><strong>Pubic Style:</strong> A rare potion from the Lushvine Hollow determines hair stylization delicate lace patterns, complete smoothness, or floral growths.</li>
        </ul>

        <h4 style="color: #472c68;">🗺️ Example Quests</h4>
        <p>Refinements require rare reagents, each hidden in quests that test Caelan’s resolve:</p>
        <ul>
            <li><strong>The Trial of Mirrors:</strong> A cursed ruin that reflects Caelan’s body in potential forms some monstrous, some divine. He must embrace the one he most fears.</li>
            <li><strong>Rose of the Deep Root:</strong> An herb found in a forest spirit’s lair. To gain it, Caelan must submit to the spirit’s judgment often through ritual dance, pleasure, or confession.</li>
            <li><strong>Diplomatic Body Bargain:</strong> A court of enchanters offers him a rare essence but only if he undergoes public display of his changing body during a gala.</li>
        </ul>

        <h4 style="color: #472c68;">🎭 Emotional & Erotic Impact</h4>
        <p>The transformation is not only physical it seeps into Caelan’s soul. As his curves swell and his center shifts, so do his instincts. Some players may experience moments of arousal, shame, and wonder all at once. Flirtation feels different. Eye contact lingers. Even clothing against his skin may make him tremble. His body becomes both his temple and his battlefield.</p>

        <p>NPCs respond to changes in unexpected ways. Some see a beautiful rival. Others, a blossoming queen. A few cannot hide their desire, offering flirtations, favors, or dominance depending on Caelan’s form. Internally, Caelan may feel confusion, acceptance, or pleasure at being seen as truly, deeply feminine.</p>

        <h4 style="color: #472c68;">📈 Player Impact</h4>
        <ul style="line-height: 1.8;">
            <li><strong>Full Visual Customization:</strong> Sliders, spell menus, and cosmetic changes are reflected in dialogue, mirrors, and artwork.</li>
            <li><strong>Stat Shifts:</strong> Changes in femininity, body shape, and sexual development affect seduction, intimidation, agility, and fertility mechanics.</li>
            <li><strong>Body Sync System:</strong> As Caelan’s body aligns with his chosen identity, inner monologues change. Some transformations unlock new desires, memories, or gender euphorias.</li>
            <li><strong>Relationship Branching:</strong> Certain NPCs only romance Caelan if specific traits are present (e.g., full breasts, high voice, submissive gait).</li>
        </ul>

        <img src="https://example.com/images/thalara_veil_tower.jpg" alt="Archmage Thalara Moonveil in the Veil Tower" style="width:100%; max-width:500px; border-radius:8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.3); margin-top: 1em;">
        </article>
        `;
        setTimeout(() => {
            document.getElementById("Velmoria-section").scrollIntoView({ behavior: 'smooth' });
        }, 50);       
    }else if(passageName==="TrainingPath"){
        content.innerHTML = `<article style="margin-bottom: 3em;">
            <h3 style="font-size: 1.6em; color: #5b3d88;">⚔️ III. The Shaping of the Ruler — Sword, State, and Silk</h3>
            <p><strong>Location:</strong> The Inner Wings of Velmoria’s Royal Citadel — each training chamber lies behind enchanted doors, accessible only by the heir</p>
            <p><strong>Purpose:</strong> Beyond mind and body, the crown demands something more: mastery of the world. Whether queen or rebel, Caelan must learn to wield power — not just over himself, but over others. This path prepares him to navigate court, command armies, and enrapture an audience with poise and presence. Velvet and steel. Law and grace. Seduction and sovereignty.</p>

            <blockquote style="background-color: #f6efe1;">
                “To wear the crown is to become its shape. Let your walk command, your dress dictate, your sword speak. The world kneels not to truth, but to performance.”
                <br>— Mistress Veletia Roswyn
            </blockquote>

            <h4 style="color: #472c68;">🛡️ Sir Aldric Vornhelm — The Iron Garden</h4>
            <p><strong>Title:</strong> Knight-Commander of the Eastern Watch</p>
            <p><strong>Domain:</strong> Combat and Physical Sovereignty</p>
            <p><strong>Training Site:</strong> <em>The Iron Garden</em> — A storm-battered courtyard flanked by stone statues of fallen queens and warriors, eternally watching. Wind howls through broken rose trellises. Blood is often spilled on the cracked flagstones. This is no place for poetry — only purpose.</p>

            <h5>Training Focus:</h5>
            <ul style="line-height: 1.8;">
                <li><strong>Weapons Mastery:</strong> Swordplay (duelist style), dagger dance, shortbow archery, polearms, and mounted combat with enchanted steeds. Caelan is expected to train shirtless or in ceremonial garb, depending on the form he chooses — forcing him to own his changed body under physical duress.</li>

                <li><strong>Combat Beauty:</strong> Sir Aldric believes elegance enhances lethality. He trains Caelan to move like a dancer before striking, to combine performance with violence. Spins, parries, and lunges must feel like royal theatre.</li>

                <li><strong>Survival Rites:</strong> Caelan is stripped of comforts and sent on wilderness drills. He must learn to bind wounds, make fires from enchanted flint, and sleep alone in the whispering forests of Velmoria. These nights are cold, and the body's new softness becomes both challenge and temptation.</li>

                <li><strong>Symbolic Duels:</strong> Some battles are not won through death, but by making others see your strength. Caelan participates in ceremonial sparrings—often attended by nobles. These fights may require mid-combat speeches, seductive feints, or armor designed for intimidation more than protection.</li>
            </ul>

            <p><strong>Player Impact:</strong> Physical traits (Agility, Stamina, Dominance) evolve based on combat performance. NPC knights and warriors may develop rivalries, respect, or attraction depending on Caelan’s martial prowess and physical expression.</p>

            <hr>

            <h4 style="color: #472c68;">📜 Lord Malrec Thorne — The Throne’s Mirror</h4>
            <p><strong>Title:</strong> Royal Vizier of Secrets and Silence</p>
            <p><strong>Domain:</strong> Politics, Law, Power Projection</p>
            <p><strong>Training Site:</strong> <em>The Throne’s Mirror</em> — A hidden chamber behind the great royal library, shrouded in silence wards. The walls are lined with mirrored scrolls — documents that watch back. Maps move on their own. Listening crystals whisper the court’s lies.</p>

            <h5>Training Focus:</h5>
            <ul style="line-height: 1.8;">
                <li><strong>Political Games:</strong> Caelan learns to arrange marriages, blackmail nobles, forge alliances, and dissolve them with grace. Simulated councils force him to outwit his own allies while appearing noble. He must lie like a dove and rule like a serpent.</li>

                <li><strong>Royal Law:</strong> Justice in Velmoria is fluid. Malrec teaches Caelan how to pass decrees that punish enemies without ever appearing cruel. Trials become theatre. Executions become art. Economic policies serve vengeance as easily as virtue.</li>

                <li><strong>Espionage:</strong> Caelan must read eyes, decode perfume messages, and anticipate betrayals. His body becomes bait in some exercises — attending events with seducers sent to compromise him. How far he lets them go is up to the player.</li>
            </ul>

            <p><strong>Player Impact:</strong> Unlocks manipulation mechanics, blackmail quests, and court seduction arcs. Traits like Cunning, Influence, and Sovereignty rise. Reputation shifts based on policy choices and how Caelan dresses while ruling — sheer gowns may signal submission or superiority.</p>

            <hr>

            <h4 style="color: #472c68;">👗 Mistress Veletia Roswyn — The Dressing Bloom</h4>
            <p><strong>Title:</strong> Keeper of the Silken Seal, Royal Presentation Tutor</p>
            <p><strong>Domain:</strong> Elegance, Beauty, Royal Persona</p>
            <p><strong>Training Site:</strong> <em>The Dressing Bloom</em> — A magical carousel of gowns, cosmetics, illusion spells, and mannequin mirrors. Each wall reveals a different version of femininity — noble, sensual, and terrifying. Caelan steps into a realm where fashion is power, and self-image is warfare.</p>

            <h5>Training Focus:</h5>
            <ul style="line-height: 1.8;">
                <li><strong>Hairstyling & Glamour:</strong> From court buns to siren curls. Veletia teaches hair magic with oils that moan when touched. Caelan’s hair responds to mood — if agitated, it bristles; if aroused, it gleams. Makeup can charm or dominate, depending on rune placement.</li>

                <li><strong>Movement & Seduction:</strong> Caelan is taught to walk like a queen: hips swaying like ripples in silk. Sitting becomes an act of political allure — one leg displayed, back slightly arched. High heels are not just aesthetic but strategic, altering posture and eye contact.</li>

                <li><strong>Wardrobe Language:</strong> Every dress speaks. Red lace whispers of fertility and aggression. Silver silk evokes mourning and majesty. A plunging neckline at the council table may distract enemies, or invite their submission. Caelan chooses what messages to send with fabric and flesh.</li>

                <li><strong>Public Debuts:</strong> Veletia prepares Caelan for ceremonies where his femininity must be flawless. One test includes a “Velvet Night” — a masked banquet where he must seduce, rebuke, or command five noble suitors without revealing his former identity.</li>
            </ul>

            <p><strong>Kink & Sensuality:</strong> Some gowns are hexed to increase sensitivity. Others whisper encouragement or discipline. Caelan may experiment with undergarments enchanted to tighten, tease, or reshape. How much he enjoys these sensations affects gameplay — arousal during rule is not punished, but explored.</p>

            <p><strong>Player Impact:</strong> Raises traits like Beauty, Influence, and Submissive Power. Unlocks special courtship paths and glamour-based persuasion options. Royal fashion builds alliances — or enemies — before a single word is spoken.</p>

            <hr>

            <h4 style="color: #472c68;">🌺 Final Integration: The Crown’s Trial</h4>
            <p>When all three paths are complete, Caelan is summoned to the Mirror Throne — a chamber that shows rulers not as they are, but as the realm sees them. Here, the player’s choices in combat, politics, and presentation merge. Caelan’s appearance, body, behavior, and rulership style are judged.</p>

            <p>He may emerge as:</p>
            <ul>
                <li><strong>The Enchantress Queen</strong> — a velvet-clad seductress who rules with soft cruelty and whispered power.</li>
                <li><strong>The Warrior Princess</strong> — armored in gold and silk, blade poised beside throne.</li>
                <li><strong>The Trickster Monarch</strong> — smiling, plotting, dressed to distract while minds unravel.</li>
                <li><strong>The Dual-Souled Heir</strong> — blending masculine strategy and feminine grace into something revolutionary.</li>
            </ul>

            <p><strong>Legacy:</strong> Based on training paths, Caelan’s rule changes Velmoria forever — a nation reborn under steel, spell, or silk.</p>
            </article>
            `;
        setTimeout(() => {
            document.getElementById("Velmoria-section").scrollIntoView({ behavior: 'smooth' });
        }, 50);    
    }else if(passageName==="MagicAndQuests"){
        content.innerHTML = `<h3>Transformation Codex</h3>

            <blockquote>
            “In Velmoria, flesh is but clay, and the wise know how to mold it... yet not without price.”  
            <br>— Archmage Thalara Moonveil
            </blockquote>

            <h3>I. Magical Ingredients</h3>
            <p>The following is a collection of known ingredients used in gender-transformative alchemy across Velmoria. Each item has unique magical properties and must be handled with care by trained alchemists.</p>

            <table>
            <thead>
                <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Unit</th>
                <th>Min. Amount</th>
                <th>Effect</th>
                </tr>
            </thead>
            <tbody>
                <!-- Begin Ingredient Loop -->
                <tr>
                <td><img src="veil-of-the-heir/images/ingredients/moonpetal_extract.png" alt="Moonpetal Extract"></td>
                <td><strong>Moonpetal Extract</strong><br><em>Silvery nectar harvested from a rare flower that blooms only under full moons.</em></td>
                <td>tsp</td>
                <td>1</td>
                <td>Deeply enhances femininity and emotional openness. Essential for internal rewiring during genital changes and emotional softening during transformation.</td>
                </tr>
                <tr>
                <td><img src="veil-of-the-heir/images/ingredients/velmorian_honey.png" alt="Velmorian Honey"></td>
                <td><strong>Velmorian Honey</strong><br><em>Golden sap from enchanted forest beehives, rich with dream pollen.</em></td>
                <td>ml</td>
                <td>10</td>
                <td>Smooths transitional phases, adds sweetness to scent and aura, used as a base in softening brews.</td>
                </tr>
                <tr>
                <td><img src="veil-of-the-heir/images/ingredients/glowleaf_powder.png" alt="Glowleaf Powder"></td>
                <td><strong>Glowleaf Powder</strong><br><em>Crushed leaves of the glowing duskplant, harvested at twilight.</em></td>
                <td>pinch</td>
                <td>1</td>
                <td>Magical catalyst that stabilizes anatomical restructuring. Core ingredient in most transformations.</td>
                </tr>
                <!-- Add all other ingredients here in the same pattern. For brevity, not all rows are shown. -->
                <!-- Repeat above <tr> block for each ingredient -->
            </tbody>
            </table>

            <h3>II. Forbidden Alterations</h3>
            <p>Though Velmoria has embraced transformation magicks, certain acts are condemned by the Grand Conclave and punishable by magical law:</p>
            <ul>
            <li><strong>Chimera Grafting:</strong> The splicing of beast traits—claws, tails, wings—into humanoid bodies is deemed an affront to natural form.</li>
            <li><strong>Duplicitous Vessels:</strong> The creation of dual genitalia is strictly forbidden due to metaphysical instability.</li>
            <li><strong>Perpetual Youth Elixirs:</strong> Halting aging disrupts magical bloodline inheritance and is outlawed.</li>
            <li><strong>Mindshaping Brews:</strong> Potions that overwrite memories or personalities are viewed as a violation of soul integrity.</li>
            <li><strong>Soul-Split Drafts:</strong> Splitting consciousness into multiple beings within one form is a high heresy.</li>
            </ul>

            <p class="note">Punishments range from exile to branding with arcane soul marks that burn whenever the forbidden art is used again.</p>

            <h3>III. Hidden Transformations</h3>
            <p>Rumors whisper of brews lost to time or concealed by guilds too proud or fearful to share their secrets:</p>

            <h3>Voiceweaver Draught</h3>
            <p><strong>Effect:</strong> Perfectly alters the voice to match new gender identity.<br>
            <strong>Ingredients:</strong> Nightingale Blood, Starbark Resin<br>
            <strong>Side Effects:</strong> May cause temporary or permanent voice loss if overused.</p>

            <h3>Everscent Elixir</h3>
            <p><strong>Effect:</strong> Instills natural pheromones enhancing allure and vulnerability.<br>
            <strong>Ingredients:</strong> Flowerdragon Spores, Liquid Desire (extremely rare)<br>
            <strong>Side Effects:</strong> Can cause loss of control over emotional expression.</p>

            <h3>Mimicmist Philter</h3>
            <p><strong>Effect:</strong> Adopts appearance of another woman temporarily.<br>
            <strong>Ingredients:</strong> Shifting Lilies, Phantomroot Dust<br>
            <strong>Side Effects:</strong> Overuse may cause identity fragmentation or delusion.</p>

            <h3>IV. Magical Potions</h3>
            <p><em>To be compiled...</em></p>

            <p class="note">Scholars are still experimenting with hybrid potions and regional variants. Contributions to the Codex are welcomed by the Alchemic Order.</p>

            <h3>V. Notes for Alchemists and Players</h3>
            <ul>
            <li><strong>Mixing Potions:</strong> Combining two or more potions can lead to unpredictable outcomes. Hybrid effects include accelerated transformations, random body growth, or emotional imbalance.</li>
            <li><strong>Potion Quality:</strong> Low-quality brews risk permanent deformation. Always use at least Master-tier ingredients for full-body transformations.</li>
            <li><strong>Emotional State:</strong> The mental and emotional state during consumption influences transformation strength. Joy amplifies, fear distorts, and doubt may nullify the potion's effects.</li>
            </ul>`;
        setTimeout(() => {
            document.getElementById("Velmoria-section").scrollIntoView({ behavior: 'smooth' });
        }, 50);
    }else {
        console.log(passageName);
        content.innerHTML = `
            <h2>📜 Kingdom Lore: Velmoria – The Matriarchal Throne</h2>
            <blockquote>
                “The throne of Velmoria is not won by war nor granted by marriage it is inherited through the blood of queens and shaped by the will of women.”
            </blockquote>
    
            <h3>I. Origins of the Matriarchal Line</h3>
            <p>Velmoria was founded over eight centuries ago by Queen Vaeloria the First, a visionary warrior-mage who united the splintered valley clans under a single banner. Legend says she forged the Thornwood Crown not of gold, but of living roots, entwined with magic and bound to her bloodline. Her reign established the Matriarchal Decree: the royal line would pass from mother to daughter, and the crown would always rest upon a queen’s head.</p>
            <p>This law was not merely symbolic it was sealed by a magical pact with the River Oracle, binding the succession of the throne to the feminine essence of the ruling bloodline. Thus, from the very beginning, Velmoria’s identity was built upon the sacred rulership of queens.</p>
    
            <h3>II. Succession Law: The Crownbind Rite</h3>
            <p>Succession in Velmoria does not follow primogeniture in the traditional sense. Instead, it is determined by a ritual known as the <strong>Crownbind Rite</strong>, in which a queen selects her successor but only if the successor is recognized as a woman by both law and magic.</p>
            <p>This has led to various forms of succession:</p>
            <ul>
                <li>Biological daughters</li>
                <li>Adopted daughters (undergoing ceremonial bonding and magical alignment)</li>
                <li>Transformed heirs, often born male but transitioned through the rites of mental, magical, and ceremonial preparation.</li>
            </ul>
            <p>The current queen, <strong>Alinora Velmoria</strong>, has only one child Prince Caelan and with no other heirs, she has invoked <em>The Empress Clause</em>, a rare tradition allowing a son to be reshaped into a daughter to preserve the lineage.</p>
    
            <h3>III. Notable Past Queens of Velmoria</h3>
            <ul>
                <li><strong>Queen Vaeloria the First – The Founder</strong><br>
                A sorceress-warrior who raised the capital from stone and fire. Defeated the Wyrm-King and sealed the northern pass with her own blood. Her roots still grow through the throne room floor, according to legend.</li>
    
                <li><strong>Queen Selene the Wise – The Peacemaker</strong><br>
                Brokered alliances with mountain tribes through diplomacy. Introduced the Royal Conclave. Developed the Twin Crown Rule: daughters must master both politics and magic.</li>
    
                <li><strong>Queen Elantra the Unyielding – The Iron Reformer</strong><br>
                Outlawed male succession after her brother's attempted coup. Strengthened the Matriarchal Decree with blood ritual. Instituted mandatory training for all royal daughters including transformed ones.</li>
            </ul>
    
            <h3>IV. The King Consort: A Crown Without Power</h3>
            <p>In Velmoria, a king consort holds ceremonial prestige but no political authority. He may:</p>
            <ul>
                <li>Appear at formal events</li>
                <li>Serve as artist, educator, or public figure</li>
                <li>Offer counsel privately to the queen</li>
            </ul>
            <p>He may not vote, command troops, or influence succession. King Consort <strong>Therion</strong> is a philosopher-musician, admired but politically quiet. Some say his gentleness has shaped Caelan’s nature for better or worse.</p>
    
            <h3>V. Gender Norms in Velmoria</h3>
            <p>Velmoria’s society is not just matriarchal it is <strong>feminine-led</strong>. Women command armies, study magic, and rule. Men are valued, but expected to support, protect, or create.</p>
            <p><strong>Women:</strong> Command, lead, enchant, rule.<br>
                <strong>Men:</strong> Assist, create, protect, obey.</p>
            <p>A man ascending the throne is considered unnatural unless he transforms <em>mind, body, and soul</em>.</p>
    
            <h3>VI. Alchemy and Rule: The Throne’s Magic</h3>
            <p>Magic and monarchy are bound through <strong>Bloodbinding</strong>, a lineage spell tied to the throne. Only those with a feminine-aligned essence naturally or magically can access the throne's powers:</p>
            <ul>
                <li>Command the <strong>Throne Wards</strong> (palace defenses)</li>
                <li>Use the <strong>Royal Altar</strong> for kingdom-wide enchantments</li>
                <li>Connect with the <strong>Voice of Velmoria</strong>, a divine guide of true queens</li>
            </ul>
            <p>Thus, Caelan’s transformation is not about vanity it’s about <strong>inheritance and survival</strong>. The royal mage, <strong>Archmage Thalara Moonveil</strong>, ensures all heirs are ritually and magically aligned before coronation.</p>
            `;
    }
}