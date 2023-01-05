var vaporwindow = `new Nightmare({
"title": "PumpkinTools",
"type": "js",
"js": "https://cdn.jsdelivr.net/gh/FogNetwork/Vapor/app.min.js",
"width": 800,
"height": 600,
"theme": "dark"
})`

async function injectnightmare() {
var NightmareWindows = await fetch("https://cdn.jsdelivr.net/gh/FogNetwork/Nightmare-Windows/windows.min.js")
var NightmareCode = await NightmareWindows.text()
NightmareCode = NightmareCode.replaceAll("<br>", ";")
var cdn1 = document.createElement("script")
cdn1.innerHTML = NightmareCode  + "\n\n" + "eval(" + vaporwindow + ")"
document.getElementsByTagName("html")[0].appendChild(cdn1)
}

injectnightmare()
