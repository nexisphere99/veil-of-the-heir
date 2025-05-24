




$(document).ready(function () {
    // Add the popup button to the page
    $("body").append('<button id="popup-button-1">☰</button>');

    // Create popup container (but do NOT add content yet)
    $("body").append(`
        <div id="custom-popup-1">
            <h3>Game Menu</h3>
            <!--<button id="history-backward" tabindex="0" title="Go backward within the game history" aria-label="Go backward within the game history" type="button" role="button"></button>
            <button id="history-forward" tabindex="-1" title="Go forward within the game history" aria-label="Go forward within the game history" type="button" role="button" disabled="" aria-disabled="true" data-last-tabindex="0"></button>-->
            <div id="ui-bar-body">
                <header id="title" role="banner">
                <h1 id="story-title">Veil of the Heir</h1>
                <div id="story-title-separator"></div>
                </header>
                    <nav id="menu" role="navigation">
                    <ul id="menu-core">
                        <li id="menu-item-saves"><a tabindex="0" role="button">Saves</a></li>
                        <li id="menu-item-settings"><a tabindex="0" role="button">Settings</a></li>
                        <li id="menu-item-restart"><a tabindex="0" role="button">Restart</a></li>
                        <li id="menu-item-cheat">
                            <a tabindex="0" role="button" onclick="openCheatPopup()">🧪 Cheat Mode</a>
                        </li>
                        <li id="menu-item"><a tabindex="0" role="button" target="_blank">📘 WiKi</a></li>
                        <li id="menu-item"><a tabindex="0" href="https://www.patreon.com/c/nexispheregames" role="button" target="_blank">❤️ Patreon</a></li>
                        <li id="menu-item-honor">
                        <a tabindex="0" role="button" onclick="openHonorScroll()">📜 Honor Scrolls</a>
                        </li>
                        <button id="popup-close-1">Close</button>
                    </ul>
                    </nav>
                </div>
            </div>
        </div>

        <!-- Dark Overlay -->
        <div id="cheat-overlay" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); z-index:1000;"></div>

        <!-- Cheat Mode Popup -->
        <div id="cheat-popup" style="display:none; position:fixed; top:10%; left:10%; width:80%; max-width:80%; background:#222; color:#fff; padding:20px; border-radius:10px; z-index:1001; box-shadow:0 0 20px #000;">
            <h3>🧪 Cheat Mode</h3>
            <hr>
            <h4 id="ingredient-toggle" style="cursor:pointer; user-select:none;">🧪 Ingredient Value Change ▼</h4>
            <div id="ingredient-cheats" style="max-height:300px; overflow-y:auto; padding-right:10px; display:none;"></div>

            <h4 id="riddle-toggle" style="cursor:pointer; user-select:none;">🧪 Ingredient Riddle Answers ▼</h4>
            <div id="riddle-container" style="display:none; margin-top:10px;">
                <input type="text" id="riddle-search" placeholder="Search riddles..." style="width: 100%; padding: 8px; margin-bottom: 10px; border-radius: 5px; border: 1px solid #ccc;">

                <div id="riddle-list" style="max-height:300px; overflow-y:auto; padding-right:10px; background:#333; color:#eee; border-radius:5px; padding:10px;"></div>
            </div>
            <button style="margin-top:10px; padding:8px 16px;" onclick="closeCheatPopup()">Apply Cheats</button>
            <button onclick="simpleCloseCheatPopup()" style="position:absolute; top:10px; right:10px; background:none; color:#fff; border:none; font-size:20px; cursor:pointer;">&times;</button>

        </div>



        <!-- Honor Scroll Overlay -->
        <div id="honor-overlay" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); z-index:1000;"></div>

        <!-- Honor Scroll Popup -->
        <div id="honor-popup" style="display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 800px;
  max-height: 90%;
  overflow-y: auto;
  background: #f5f0dc;
  color: #4b3b1f;
  padding: 30px;
  border: 8px solid #c2aa7d;
  border-radius: 20px;
  box-shadow: 0 0 30px #000;
  font-family: 'Papyrus', cursive;
  z-index: 1001;">
        <h2 style="text-align:center; font-size:28px; margin-bottom:20px;">📜 Honor Scrolls</h2>
        <p style="text-align:center; font-style:italic; margin-bottom:30px;">In eternal gratitude to our noble supporters:</p>
        <div id="honor-list" style="max-height:400px; overflow-y:auto; padding-right:10px; font-size:18px;"></div>
        <div style="text-align:center; margin-top:30px;">
            <button onclick="closeHonorScroll()" style="padding:10px 20px; font-size:16px; background:#4b3b1f; color:#fff; border:none; border-radius:8px;">Close</button>
        </div>
        </div>


    `);


    // Example supporter data
    const supporterList = [
        { name: "nexis98_", contribution: "Main Game Dev" },
        { name: "Bswan", contribution: "Writer" },
        { name: "JaneZero", contribution: "Idea & Writer & Art Prompts" },
    ];
    
    // Open the Honor Scroll
    window.openHonorScroll = function() {
        const listDiv = document.getElementById("honor-list");
        listDiv.innerHTML = "";
    
        supporterList.forEach(supporter => {
        const entry = document.createElement("div");
        entry.style.marginBottom = "12px";
        entry.innerHTML = `<b>${supporter.name}</b> — <span style="font-style:italic;">${supporter.contribution}</span>`;
        listDiv.appendChild(entry);
        });
    
        document.getElementById("honor-popup").style.display = "block";
        document.getElementById("honor-overlay").style.display = "block";
    }
    
    // Close the scroll
    window.closeHonorScroll = function() {
        document.getElementById("honor-popup").style.display = "none";
        document.getElementById("honor-overlay").style.display = "none";
    }
  

    // Your riddles variable (make sure it’s accessible)
    const riddles = setup?.riddles || [];

    // Render riddles function
    function renderRiddles(filter = '') {
        const container = document.getElementById('riddle-list');
        container.innerHTML = '';

        const lowerFilter = filter.toLowerCase();

        const filtered = riddles.filter(r =>
            r.question.toLowerCase().includes(lowerFilter)
        );

        if (filtered.length === 0) {
            container.innerHTML = '<p>No riddles found.</p>';
            return;
        }

        filtered.forEach((riddle, i) => {
            const riddleDiv = document.createElement('div');
            riddleDiv.style.marginBottom = '15px';

            const question = document.createElement('p');
            question.style.fontWeight = 'bold';
            question.textContent = `${i + 1}. ${riddle.question}`;

            const options = document.createElement('ul');
            options.style.marginTop = '5px';
            options.style.marginBottom = '0';

            riddle.options.forEach((opt, idx) => {
                const li = document.createElement('li');
                li.textContent = opt;
                if (idx === riddle.answer) {
                    li.style.color = '#0f0';  // Highlight answer in green
                    li.style.fontWeight = 'bold';
                }
                options.appendChild(li);
            });

            riddleDiv.appendChild(question);
            riddleDiv.appendChild(options);

            container.appendChild(riddleDiv);
        });
    }

    // Setup toggle for riddles visibility
    document.getElementById('riddle-toggle').addEventListener('click', function() {
        const container = document.getElementById('riddle-container');
        const isHidden = container.style.display === 'none';

        container.style.display = isHidden ? 'block' : 'none';
        this.innerText = isHidden ? '🧪 Ingredient Riddle Answers ▲' : '🧪 Ingredient Riddle Answers ▼';
    });

    // Setup search input handler
    document.getElementById('riddle-search').addEventListener('input', (e) => {
        renderRiddles(e.target.value);
    });

    // Initial render all riddles
    renderRiddles();


    document.getElementById('ingredient-toggle').addEventListener('click', function() {
        const container = document.getElementById('ingredient-cheats');
        const isHidden = container.style.display === 'none';
    
        container.style.display = isHidden ? 'block' : 'none';
    
        // Change the arrow in header to indicate toggle state
        this.innerText = isHidden ? '🧪 Ingredient Values ▲' : '🧪 Ingredient Values ▼';
    });
    

    window.updateCheatValues = function () {
        // Update other cheat UI like gold, health here if needed
        // document.getElementById("gold-amount").innerText = SugarCube.State.variables.gold;
        // document.getElementById("health-amount").innerText = SugarCube.State.variables.health;

        // Update item values
        const container = document.getElementById("ingredient-cheats");
        container.innerHTML = "";

        for (const key in SugarCube.State.variables.userItems) {
            const item = SugarCube.State.variables.userItems[key];
            const currentValue = item.amount;

            const itemDiv = document.createElement("div");
            itemDiv.style.marginBottom = "10px";

            const label = document.createElement("span");
            label.innerHTML = `<b>${item.name}</b>: <span id="val-${key}">${currentValue}</span>`;

            const plusBtn = document.createElement("button");
            plusBtn.innerText = "+10";
            plusBtn.style.marginLeft = "10px";
            plusBtn.onclick = () => {
                item.amount += 10;
                document.getElementById(`val-${key}`).innerText = item.amount;
            };

            const minusBtn = document.createElement("button");
            minusBtn.innerText = "-10";
            minusBtn.style.marginLeft = "5px";
            minusBtn.onclick = () => {
                item.amount = Math.max(0, item.amount - 10);
                document.getElementById(`val-${key}`).innerText = item.amount;
            };

            itemDiv.appendChild(label);
            itemDiv.appendChild(plusBtn);
            itemDiv.appendChild(minusBtn);

            container.appendChild(itemDiv);
        }
    }

    window.openCheatPopup = function() {
        if (SugarCube.State.variables.veil_of_the_heir) {
            // Patreon user — open cheat popup and overlay
            document.getElementById('cheat-popup').style.display = 'block';
            document.getElementById('cheat-overlay').style.display = 'block';
    
            // Update cheat UI values on open
            updateCheatValues();
        } else {
            // Non-patreon user — show info modal instead
            showPatreonInfo();
        }
    }


    // Simple function to show a Patreon info message
    window.showPatreonInfo = function() {
        // Create modal overlay
        let overlay = document.getElementById('patreon-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'patreon-overlay';
            overlay.style = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:1500;display:flex;align-items:center;justify-content:center;';
            document.body.appendChild(overlay);
        }

        // Create modal box
        let modal = document.getElementById('patreon-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'patreon-modal';
            modal.style = 'background:#222;color:#fff;padding:20px;border-radius:10px;max-width:400px;text-align:center;box-shadow:0 0 20px #000;';
            overlay.appendChild(modal);
        }

        modal.innerHTML = `
            <h3>🧪 Cheat Mode - Patreon Only</h3>
            <p>This feature is only available to Patreon supporters.</p>
            <p><a href="https://www.patreon.com/c/nexispheregames" target="_blank" style="color:#0af;text-decoration:underline;">Support us on Patreon</a></p>
            <button id="patreon-close-btn" style="margin-top:15px;padding:8px 16px;">Close</button>
        `;

        overlay.style.display = 'flex';

        document.getElementById('patreon-close-btn').onclick = function() {
            overlay.style.display = 'none';
        }
    }

    window.closeCheatPopup = function() {
        document.getElementById('cheat-popup').style.display = 'none';
        document.getElementById('cheat-overlay').style.display = 'none';
        Engine.show(State.passage); // Refresh the current passage to reflect changes
    }

    window.simpleCloseCheatPopup = function() {
        document.getElementById('cheat-popup').style.display = 'none';
        document.getElementById('cheat-overlay').style.display = 'none';
    }
    
    

    // Run when a passage is displayed
    $(document).on(':passagedisplay', function () {
        updateCheatValues();
        
    });

    // Move the real UI-bar elements (not a clone) into the popup
    $("#popup-content-1").append($("#ui-bar-tray, #ui-bar-body, #ui-bar-history, #ui-bar-toggle"));
});



// Open popup
$(document).on("click", "#popup-button-1", function () {
    $("#custom-popup-1").fadeIn();
});

// Close popup
$(document).on("click", "#popup-close-1", function () {
    $("#custom-popup-1").fadeOut();
});

$(document).on(':passagerender', function () {
	if (!$('#wiki-button').length) {
		const wikiBtn = $('<button>')
			.attr('id', 'wiki-button')
			.text('📚 Wiki')
			.on('click', function () {
				window.open('https://your-wiki-url.example.com', '_blank');
			});
		$('#ui-bar').append(wikiBtn);
	}
});