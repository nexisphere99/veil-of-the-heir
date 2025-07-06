Macro.add("speech", {
    tags: null,
    handler: function () {
        let charKey = this.args[0]; // e.g., "mc" or "guard"
        // let text = this.args[1];
        let image_path_direct = this.args[1];
        let charName = "";

        // Default layers if MC
        const head = State.variables.userBody.head.img;
        const hair = State.variables.userBody.hair.img;
        const torso = State.variables.userBody.torso.img;
        const left_hand = State.variables.userBody.left_hand.img;
        const right_hand = State.variables.userBody.right_hand.img;
        const top_wear = State.variables.userBody.top_wear.img;
        // const clothes = State.variables.userBody.clothes.img;

        console.log("charKey", charKey);
        // console.log("charName", charName);
        console.log("head", head);
        console.log("hair", hair);
        console.log("torso", torso);
        console.log("left_hand", left_hand);
        console.log("right_hand", right_hand);
        // console.log("clothes", clothes);

        if (!charKey) {
            return this.error("Usage: <<speech 'charKey' 'DisplayName'>>...<</speech>>");
        }

        let speechContent = "";


        // Evaluate the body as wikicode
        let content = (this.payload?.[0]?.contents || "").trim();
        let temp = document.createElement("div");
        new Wikifier(temp, content);
        speechContent = temp.innerHTML;


        let imageHTML = "";

        if (charKey === "mc") {
            charName = State.variables.userName || "Caelan"
            let hair_path = setup.ImagePath + hair;
            let head_path = setup.ImagePath + head;
            let torso_path = setup.ImagePath + torso;
            let left_hand_path = setup.ImagePath + left_hand;
            let right_hand_path = setup.ImagePath + right_hand;
            let top_wear_path = setup.ImagePath + top_wear;
            imageHTML = `
                <div class="character-image-dialog">
                    <div class="layer-container" style="position: relative;">
                        <img src="${torso_path}" class="layer torso">
                        <img src="${head_path}" class="layer head">
                        <img src="${hair_path}" class="layer hair">
                        <img src="${left_hand_path}" class="layer left-hand">
                        <img src="${right_hand_path}" class="layer right-hand">
                        <img src="${top_wear_path}" class="layer top-wear">
                    </div>
                </div>
            `;
        } else {
            let image_path = ""
            if (charKey == "alinora") {
                image_path = setup.ImagePath + "character/alinora/alinora.png";
                charName = "Queen Alinora";
            } else if (charKey == "therion") {
                image_path = setup.ImagePath + "character/therion/therion.png";
                charName = "King Consort Therion";
            }else if (charKey == "malrec") {
                image_path = setup.ImagePath + "character/malrec/malrec.png";
                charName = "Lord Malrec";
            } else if (charKey == "serelyne") {
                image_path = setup.ImagePath + "character/serelyne/serelyne.png";
                charName = "Lady Serelyne";
            } else if (charKey == "aldric") {
                image_path = setup.ImagePath + "character/aldric/aldric.png";
                charName = "Sir Aldric";
            }else if (charKey == "veletia") {
                image_path = setup.ImagePath + "character/valetia/valetia.png";
                charName = "Mistress Veletia";
            }else if (charKey == "thalara") {
                image_path = setup.ImagePath + "character/thalara/thalara.png";
                charName = "Archmage Thalara"; 
            } else if (charKey == "malgros") {
                image_path = setup.ImagePath + "character/malgros/malgros.png";
                charName = "Keeper Malgros";
            }else if (charKey == "maera") {
                image_path = setup.ImagePath + "character/maera/maera.png";
                charName = "Handmaid Maera";
            }else if (charKey == "nyssa") {
                image_path = setup.ImagePath + "character/nyssa/nyssa.png";
                charName = "Mage’s Apprentice Nyssa";
            }else if (charKey == "torin") {
                image_path = setup.ImagePath + "character/torin/torin.png";
                charName = "Bodyguard Torin";
            }else if (charKey == "jeral") {
                image_path = setup.ImagePath + "character/jeral/jeral.png";
                charName = "Steward Jeral";
            }else if (charKey == "tomm") {
                image_path = setup.ImagePath + "character/tomm/tomm.png";
                charName = "Tomasin Greathoof";
            }else if (charKey == "marda") {
                image_path = setup.ImagePath + "character/marda/marda.png";
                charName = "Marda Brimhook";
            }else if (charKey == "gribblek") {
                image_path = setup.ImagePath + "character/gribblek/gribblek.png";
                charName = "Gribblek the Begrudged";
            }else if (charKey == "anthos") {
                image_path = setup.ImagePath + "character/anthos/anthos.png";
                charName = "Royal Librarian Anthos";
            }else if (charKey == "halda") {
                image_path = setup.ImagePath + "character/halda/halda.png";
                charName = "Royal Cook Halda";
            }else if (charKey == "edran") {
                image_path = setup.ImagePath + "character/edran/edran.png";
                charName = "Royal Gardener Edran";
            } else if (charKey == "gisela") {
                image_path = setup.ImagePath + "character/gisela/gisela.png";
                charName = "Lady Gisela";
            } else {
                // image_path = setup.ImagePath + "character/queen/avatar.png";
                charName = charKey
                charKey = "other";
            }
            if (image_path_direct) {
                image_path = setup.ImagePath + image_path_direct;
            }
            imageHTML = `
                <div class="character-image-dialog">
                    <div class="layer-container" style="position: relative;">
                        <img src="${image_path}" class="layer">
                    </div>
                </div>
            `;
        }

        const html = `
            <div class="speech-box ${charKey}">
                <div class="character-column">
                    ${imageHTML}
                    <div class="character-name">${charName}</div>
                </div>
                <div class="dialog-content">
                    <div class="character-text">${speechContent}</div>
                </div>
            </div>
        `;

        $(this.output).append(html);
    }
});