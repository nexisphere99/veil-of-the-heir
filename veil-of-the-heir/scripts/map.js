
$(document).on('click', 'polygon.bodypart', function () {
    const passage = $(this).data('passage');
    const value = $(this).data('value');
    State.variables.direction = value;
    $('polygon.bodypart').removeClass('active');
    $(this).addClass('active');
    Engine.play(passage);
});

$(document).on('click', 'polygon.castle_front_map', function () {
    const passage = $(this).data('passage');
    $('polygon.castle_front_map').removeClass('active');
    $(this).addClass('active');
    Engine.play(passage);
});

$(document).on('click', 'polygon.castle_back_map', function () {
    const passage = $(this).data('passage');
    $('polygon.castle_back_map').removeClass('active');
    $(this).addClass('active');
    Engine.play(passage);
});

$(document).on('click', 'polygon.mc_bed_chamber_map', function () {
    const passage = $(this).data('passage');
    $('polygon.mc_bed_chamber_map').removeClass('active');
    $(this).addClass('active');
    Engine.play(passage);
});



postdisplay["gifPopupHandler"] = function () {
    // Wait for DOM to be fully ready
    setTimeout(function () {
        var popup = document.getElementById("gif_pop_up");
        var closeBtn = document.getElementById("closeBtn");
        // var rest = document.getElementById("restPassage");

        if (closeBtn && popup) {
            closeBtn.addEventListener("click", function () {
                popup.style.display = "none";
                // rest.style.display = "block";
            });

            setTimeout(function () {
                popup.style.display = "none";
                // rest.style.display = "block";
            }, 3000);
        }
    }, 0);
};