// Code by Maddie Kahlon

var color;

function changecolor() {
        color = document.getElementById("playercolor").value;
        document.getElementById("tracktitle").style.color = "#" + color;
        document.getElementById("pause1").style.background = "#" + color;
        document.getElementById("pause2").style.background = "#" + color;
        document.getElementById("play").style.borderLeft = "6px solid " + "#" + color;
        document.getElementById("skip1").style.borderLeft = "4px solid " + "#" + color;
        document.getElementById("skip2").style.borderLeft = "4px solid " + "#" + color;
}

var autos = "off";

function auto() {
        if (autos == "off") {
                autos = "on";
                document.getElementById("autobox").style.background = "#0CDB58";
                document.getElementById("autobox").value = "autoplay is on";
        } else if (autos == "on") {
                autos = "off";
                document.getElementById("autobox").style.background = "#F05";
                document.getElementById("autobox").value = "autoplay is off";
        } else {}
}

function generate() {
        document.getElementById("index-color-select").style.display = "none";
        document.getElementById("desc").style.textAlign = "left";

        document.getElementById("desc").innerHTML =
                "The preview for your custom music player isn't viewable here, but it will appear correctly once installed." +

                "<div id='click1'>Click once in the white box to select the script, then copy and paste it in your own code after <code>/body</code></div>" +
                '<textarea id="code1" spellcheck="false"></textarea>' +
                "The following is where you can add any number of audio files. Positioning and audio help are provided in the code comments. Paste this in your code after <code>body</code>" +
                '<textarea id="code2" spellcheck="false"></textarea>' +
                "<div id='proton'>💬 For additional support, reach me <a href='mailto:maddie.kahlon@proton.me' target='_blank'>here</a>.</div>";

        var code1 = document.getElementById("code1");
        var code2 = document.getElementById("code2");

        var design = "#" + color + " " + autos + " ";
        var display = "0,0,";
        var limit, url, url2, title, title2;

        for (limit = 1; limit < 7; limit++) {
                url = "trackurl" + limit;
                title = "trackname" + limit;
                url2 = document.getElementById(url);
                title2 = document.getElementById(title);

                if (url2.value != "") {
                        url2.value += " ";
                        design += url2.value;
                }

                if (title2.value != "") {
                        title2.value += ",";
                        display += title2.value;
                }
        }

        var designlength = design.length - 1;
        var designcompressed = design.slice(0, designlength);
        var displaylength = display.length - 1;
        var displaycompressed = display.slice(0, displaylength);

        code1.value =
                '<script src="https://scriptest.github.io/sp/mtp/multituneplayer-mini.js"></script>';

        code2.value =
                "<!--------------------------------------------------------------------------------  Positioning → The player is automatically positioned to be at the bottom left of your site. If you specifically want it somewhere, paste it there and replace BOTTOM with MARGIN-TOP and replace LEFT with MARGIN-LEFT. Adjust the margin numbers to your liking. Depending on your site's coding, you may have to remove POSITION: FIXED. Unlimited Audio → Simply separate the track URLs with a single space, and if you chose to display titles, separate with a single comma. --------------------------------------------------------------------------------> " +
                '<div id="mtplayer" style="bottom: 16px; left: 5px; position: fixed;">' +
                '<span id="multi-info" style="display: none;">' +
                designcompressed +
                "</span>" +
                '<span id="multi-names" style="display: none;">' +
                displaycompressed +
                "</span>" +
                "</div>";
}

document.onclick = function(e) {
        var code1 = document.getElementById("code1");
        var code2 = document.getElementById("code2");

        if (e.target.tagName === "CODE") {
                document.querySelectorAll("code").forEach(function(item) {
                        item.classList.remove("selected");
                });

                e.target.classList.add("selected");
        }

        if (e.target.id === "code1") {
                code1.style.backgroundColor = "#000";
                code1.style.color = "#32CD32";

                code2.style.backgroundColor = "#FFF";
                code2.style.color = "#999";

                SelectText("code1");
        } else if (e.target.id === "code2") {
                code2.style.backgroundColor = "#000";
                code2.style.color = "#32CD32";

                code1.style.backgroundColor = "#FFF";
                code1.style.color = "#999";

                SelectText("code2");
        }
};
