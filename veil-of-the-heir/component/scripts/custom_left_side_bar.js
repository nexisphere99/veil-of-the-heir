$(document).ready(function () {
    // Create the Custom Left Sidebar
    $("body").append(`
        <div id="menu-toggle" class="mobile-only">L☰</div>
        <div id="custom-left-bar">
            <div id="sidebar-close" class="mobile-only">✖</div>
            <h1 style="margin: 15% 0 0 0; text-align: center;">Veil of the Heir</h1>
            <p style="margin: 0px; text-align: center;">Vesion - 0.0.3.B</p>
            <h3 style="margin: 0px; text-align: center;">by Nexisphere Games</h3>
            <div id="left-top-container" class="image-crop">
                <img id="player-image" class="player-image" src="" alt="Player Image">
                <img id="player-image-head" class="player-image" src="" alt="Player Image">
                <img id="player-image-left-hand" class="player-image" src="" alt="Player Image">
                <img id="player-image-right-hand" class="player-image" src="" alt="Player Image">
                <img id="player-image-top-wear" class="player-image" src="" alt="Player Image">
                <img id="player-image-hair" class="player-image" src="" alt="Player Image">
            </div>
            <div id="player-map">
                <h3 style="text-align: center; color: #f5deb3; margin: 0">Current Location</h3>
                <img id="map-image" src="" alt="Map Image" style="width: 95%;">
                <!--<p id="map-name"></p>-->
            </div>
            <h3 style="text-align: center; margin: 0">Current Objectives</h3>
            <div id="objectives-text" style="text-align: center; font-size: 16px; padding: 10px;">
            </div>
            <div style="text-align: center;">Day - <span id="day_number"></span></div>
        </div>
        <!-- Popup Container -->
        <div id="popup-container">
            <div id="popup-content">
                <span id="popup-close">✖</span>
                <div id="popup-body"></div>
            </div>
        </div>
        <div id="image-popup-overlay">
            <div id="image-popup-container">
                <span id="image-popup-close">&times;</span>
                <img id="popup-image" src="" alt="Zoomed Location Image" />
            </div>
        </div>
    `);

    console.log("Custom Left Sidebar loaded.");

    // Function to update UI from Twine variables
    function updateSidebar() {
        console.log("Updating sidebar...", State.variables.userBody);
        // Update Player Image
        if (State.variables.userBody){
            if (State.variables.userBody.torso.img) {
                $("#player-image").attr("src", setup.ImagePath+State.variables.userBody.torso.img);
            }
            if (State.variables.userBody.head) {
                $("#player-image-head").attr("src", setup.ImagePath+State.variables.userBody.head.img);
            }
            if (State.variables.userBody.left_hand) {
                $("#player-image-left-hand").attr("src", setup.ImagePath+State.variables.userBody.left_hand.img);
            }
            if (State.variables.userBody.right_hand) {
                $("#player-image-right-hand").attr("src", setup.ImagePath+State.variables.userBody.right_hand.img);
            }
            if (State.variables.userBody.top_wear) {
                $("#player-image-top-wear").attr("src", setup.ImagePath+State.variables.userBody.top_wear.img);
            }
            if (State.variables.userBody.hair) {
                $("#player-image-hair").attr("src", setup.ImagePath+State.variables.userBody.hair.img);
            }
            // Update Location Image
            if (State.variables.locationImage) {
                $("#map-image").attr("src", State.variables.locationImage);
            }

            // Click handler to open popup
            $("#map-image").on("click", function () {
                const src = $(this).attr("src");
                $("#popup-image").attr("src", src);
                $("#image-popup-overlay").fadeIn(300);
            });

            // Close popup on click
            $("#image-popup-close, #image-popup-overlay").on("click", function (e) {
                if (e.target.id === "image-popup-overlay" || e.target.id === "image-popup-close") {
                    $("#image-popup-overlay").fadeOut(300);
                }
            });
        }

        // Update Player Stats
        $("#player-health").text(State.variables.playerHealth || "100");
        $("#player-stamina").text(State.variables.playerStamina || "100");
        $("#player-gold").text(State.variables.playerGold || "0");

        $("#objectives-text").text(State.variables.currentObjectives || "No current objectives");

        // Update Location Name
        $("#map-name").text(State.variables.locationName || "Unknown Location");

        $("#day_number").text(State.variables.day_number || "0");

    }

        // Mobile menu open
        $("#menu-toggle").on("click", function () {
            $("#custom-left-bar").fadeIn();
            $("#menu-toggle").hide();
        });
    
        // Mobile menu close
        $("#sidebar-close").on("click", function () {
            $("#custom-left-bar").fadeOut();
            $("#menu-toggle").fadeIn();
        });
    

    // Ensure the popup opens properly
    function showPopup(content) {
        $("#popup-body").html(content);
        $("#popup-container").fadeIn();

    }

    // Ensure the popup closes when clicking the close button
    $(document).on("click", "#popup-close", function (event) {
        event.stopPropagation(); // Prevents accidental close from other elements
        closePopup();
    });

    // Ensure clicking outside the popup closes it
    $(document).on("click", "#popup-container", function (event) {
        if (!$(event.target).closest("#popup-content").length) {
            closePopup();
        }
    });

    // Function to close the popup
    function closePopup() {
        $("#popup-container").fadeOut();
    }

    // Update sidebar when a passage loads
    $(document).on(":passagerender", function () {
        updateSidebar();
    });

    // Initial update when the game loads
    updateSidebar();
});