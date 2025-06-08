if (document.location.href.toLowerCase().includes("/temp/") || document.location.href.toLowerCase().includes("/private/") || hasOwnProperty.call(window, "storyFormat")) {
    // Change this to the path where the HTML file is
    // located if you want to run this from inside Twine.
} else {
    setup.Path = "";  // Running in a browser
}
setup.ImagePath = setup.Path + "images/";
setup.SoundPath = setup.Path + "sounds/";
setup.VideoPath = setup.Path + "videos/";

/* Create the Right UI Bar. */
var $rightUiBar = $('<div id="right-ui-bar"></div>').insertAfter("#ui-bar");
/* Automatically show the contents of the StoryRightSidebar passage in the right-ui-bar-body element. */
postrender["Display Right Sidebar Contents"] = function (content, taskName) {
    setPageElement('right-ui-bar', 'StoryRightSidebar');
};

function toggleClothing(type) {
    var clothingElements = document.querySelectorAll(`.${type}`);
    clothingElements.forEach(function (element) {
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    });
}

Setting.addHeader("Content Settings");


// Intro
postdisplay["introOverlayInit"] = function (taskName) {
    const button = document.getElementById("enterGame");
    if (button) {
        button.addEventListener("click", function () {
            const overlay = document.getElementById("velmoria-intro");
            overlay.classList.add("fade-out");

            setTimeout(function () {
                overlay.remove();
                Engine.play("intro");
            }, 1500);
        });
    }
};
postdisplay["intro_relam"] = function (taskName) {
    const button = document.getElementById("enter-relam");
    if (button) {
        button.addEventListener("click", function () {
            const overlay = document.getElementById("velmoria-intro-2");
            overlay.classList.add("fade-out");
            setTimeout(function () {
                overlay.remove();
                Engine.play("body_choice");
            }, 1500);
        });
    }
};


// function adjustItemListFont() {
//     const list = document.getElementById('user-item-list');
//     let fontSize = 0.7; // starting font size in em

//     while (list.scrollHeight > list.clientHeight && fontSize > 0.3) {
//       fontSize -= 0.05;
//       Array.from(list.getElementsByClassName('user-item')).forEach(item => {
//         item.style.fontSize = fontSize + 'em';
//       });
//     }
//   }

//   window.addEventListener('load', adjustItemListFont);
//   window.addEventListener('resize', adjustItemListFont);



setup.toilet_feelings = [
    [
        "Why does it feel so strange to imagine my chest growing soft and full? Is this really happening to me?",
        "I catch myself wondering if I’ll ever enjoy the gentle sway of hips instead of the stiff stance I’ve always known.",
        "What if the shrinking down... is less loss and more awakening? Can I really become her, and still be me?"
    ],
    [
        "My fingers feel lighter lately, almost feminine. I wonder if they’d tremble touching silk instead of steel.",
        "That tightening, changing feeling between my legs is unnerving... but also strangely exciting in a way I can’t explain.",
        "The mage says I have control, but part of me wants to surrender fully—to feel every inch of change."
    ],
    [
        "I imagine long hair brushing past my shoulders, soft and flowing like a river. It feels unreal yet so real inside.",
        "My heart races at the thought of losing my manhood but gaining something delicate, secret, and hidden.",
        "Will I ever catch myself admiring these new curves? Or will I always be the prince trapped inside this changing skin?"
    ],
    [
        "When I sit here alone, I feel the magic stirring in my bones, rewriting what I thought was permanent.",
        "The idea of delicate hands, slender fingers tracing my skin, sends a flush to my cheeks I can’t hide.",
        "Maybe this isn’t just about becoming queen. Maybe it’s about discovering who I was meant to be all along."
    ],
    [
        "I wonder if I’ll feel pain, or if the transformation will be a secret pleasure hiding in the shadows.",
        "How strange it is to want to be touched differently—to crave soft kisses instead of warrior’s blows.",
        "Could this new body be a prison? Or is it finally the home I never knew I needed?"
    ],
    [
        "The swelling of my breasts is more than physical—it feels like a secret I’m only beginning to understand.",
        "The shrinking of my manhood feels like losing an old friend and finding a mysterious stranger at the same time.",
        "I catch myself imagining the softness of my new skin, the curve of my hips, and wonder if I’ll ever stop hiding."
    ],
    [
        "Every potion makes me less like the prince I was and more like the queen I am meant to be.",
        "Sometimes I’m terrified, but sometimes the idea of surrender feels like freedom in disguise.",
        "Who will I be after this? The boy with secrets or the woman with power?"
    ],
    [
        "I never thought I’d want to feel soft and delicate, but now it feels like a hunger I can’t ignore.",
        "My hands tingle, my legs ache to be slender and graceful. Am I becoming a stranger to myself?",
        "What will the court say when the prince walks in with breasts and curves instead of armor and swords?"
    ],
    [
        "Sometimes I imagine the shock on everyone’s face when I fully become queen—will they see strength or weakness?",
        "The shrinking between my legs is almost unbearable... but also exhilarating in a way that makes me blush.",
        "Maybe I’m not losing a part of myself but finally revealing what was hidden all along."
    ],
    [
        "I’m starting to think this transformation isn’t just magic—it’s a revelation of my true self.",
        "Every curve, every softness feels like a secret waiting to be explored—by me and maybe by others.",
        "When I look in the mirror, I don’t know if I’ll see a prince fading or a queen rising... but maybe both can live inside me."
    ]
]



setup.bath_thoughts = [
    [
        "The water clings to my chest… is it just my imagination, or are those little swells more than just flesh now?",
        "I ran the sponge across my hips… they feel rounder, softer. Goddess, is this really me?",
        "I closed my eyes and let the water trail down between my legs… I felt something new… something forming."
    ],
    [
        "I caught a glimpse of myself in the steam-fogged mirror… was that curve on my waist always there?",
        "I used to scrub myself like a knight scrubbing armor. Now I wash gently… like skin deserves worship.",
        "The way the droplets collect on my nipples now… it sends a shiver down my spine. Not fear. Anticipation."
    ],
    [
        "I lathered my hair, and it fell across my face like a curtain of silk. So different from the cropped boyish cut I had.",
        "I cup water in my hands and pour it slowly over my chest… pretending they're breasts already.",
        "My fingers trail lower each time I bathe. Curiosity, or… desire? Maybe both."
    ],
    [
        "I wrap my arms around myself beneath the water. It feels… comforting. Like I’m becoming something worthy of being held.",
        "I imagined someone else washing me… their hands tracing my new curves like I was something precious.",
        "I should feel shame… but I don’t. I feel something warm blooming inside as my body shifts."
    ],
    [
        "I soap down my thighs and notice how close they’re getting. Am I becoming soft down there… smooth?",
        "Every time I touch my chest now, I wonder how big they'll grow. Would it feel good to wear silk over them?",
        "Would the Queen be proud if she saw me now… or would she smile, knowing I’m beginning to like this?"
    ],
    [
        "I used to rush through baths. Now I linger… letting the heat ease my thoughts and loosen my doubts.",
        "The bubbles rise around me, clinging to my chest like teasing hands. I wonder how real hands would feel.",
        "There’s something almost holy about this. Like I’m washing away the prince… and revealing the queen beneath."
    ],
    [
        "As I run my fingers through the water between my legs, the absence of what used to be… feels oddly right.",
        "I trace the inside of my thighs. They feel tighter together… almost inviting.",
        "Would it be wrong to moan if I feel something stir inside me? No one’s here. No one but me… and her."
    ],
    [
        "The mage said this part would feel ‘unnatural at first.’ But this heat in my chest feels anything but unnatural.",
        "Is it odd that I want to learn how to wash myself… like a maiden preparing for courtship?",
        "Maybe this bath isn’t about cleaning. Maybe it’s baptism… into something softer, fuller… more mine."
    ],
    [
        "When I run the cloth over my chest now, it catches slightly. Not flat anymore. Not a boy anymore.",
        "I imagine veils, perfume, soft garments—things I would’ve mocked once. Now I wonder how they’d feel against wet skin.",
        "I think I want someone to see me like this. Not as a prince in disguise… but a woman becoming."
    ],
    [
        "Even the scent of the bath oil clings to me differently now. Floral. Feminine. I don’t mind it.",
        "I find myself humming… a tune mother used to sing. I never realized how soft it made me feel.",
        "The water embraces me better each day… as if the tub knows I’m not the same body that entered weeks ago."
    ]
]




Macro.add('passage_img', {
    tags: null,
    handler() {
      const imagePath = this.args[0]; // Get the image path from the macro arguments
      if (!imagePath) {
        return this.error('No image path provided.');
      }
      // Generate the HTML for the image
      const html = `<div style="text-align: center;">
                      <img style="border-radius: 9px; border: 10px ridge #8b5e3c; width: 50%;" src="${setup.ImagePath + imagePath}" alt="Image">
                    </div><br><br>`;
      // Output the HTML
      $(this.output).append(html);
    }
  });