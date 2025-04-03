document.querySelector("#grab").addEventListener("click", async function() {
    let gamertag = document.querySelector("#gamertag").value;
    let xuidRequestUrl = "https://api.geysermc.org/v2/xbox/xuid/" + encodeURIComponent(gamertag);
    let xuid = await (await fetch(xuidRequestUrl)).json();
    if (xuid.message) {
        document.querySelector("#error").textContent = "Error! Geyser said this: " + xuid.message;
        return false;
    }
    let skinRequestUrl = "https://api.geysermc.org/v2/skin/" + xuid.xuid;
    let skin = await (await fetch(skinRequestUrl)).json();
    let skinDisplay = document.querySelector("#skindisplay");
    skinDisplay.style.display = "block";
    skinDisplay.src = "https://textures.minecraft.net/texture/" + skin.texture_id;
});
