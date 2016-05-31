var log = function (text) { console.log(text) }//Basic service in case the rest of the function has not yet loaded

//Update this as per need
var debugText = '',//Default Text in hte debug Console...Replace with you app Intro/copyright etc
    debugBuffer = 4444,//Number of Characters you want in to be visible Including scrolled text
    debugRefreshDelay = 44,//How quickly you want the console to be refreshed. Use higher values if too much Logs are flowing and nothing difficult to read
    DISPLAYDEBUGLOG = true,// use false to NOT show and use debuglog in your app
    STREAMTOCONSOLE = true//Make this true if you want to log to console.log as well 

//Do NOT Change this
var debugUpdateScreen = true

window.onload = function () {

    'use strict'

    //Core Log Update Function
    log = function (msg) {
        if (STREAMTOCONSOLE) { console.log(msg) }//Kept to debug debugconsole app
        if (DISPLAYDEBUGLOG) {
            debugText = (((typeof msg) === 'string' ? msg : JSON.stringify(msg)) + '\n' + debugText).slice(0, debugBuffer)
            if (debugUpdateScreen) {
                document.getElementById('debugConsole').textContent = debugText
                debugUpdateScreen = false//Delay refresh of console till debugRefreshDelay have passed
                setTimeout(function () { debugUpdateScreen = true }, debugRefreshDelay)
            }
        }
    }
    //This inserts the log into the body
    if (DISPLAYDEBUGLOG) {
        if (!document.getElementById('debugConsole')) {
            var debugView = document.createElement("aside")
            debugView.setAttribute('draggable', true)

            var debugViewStyle = document.createElement('style')
            debugView.className = 'debugConsole'
            debugViewStyle.innerHTML = ".debugConsole{width:25em;height:7em;position:absolute;bottom:1%;right:1%;z-index:111;max-height:44vh;color: white;opacity:0.16;background-color: black;overflow: visible;border-radius:7px;border-width:2px;border-color:black;border-style:solid;box-sizing:border-box}\n"
            debugViewStyle.innerHTML += ".debugConsole:hover{width:100%;height:100%;max-width:99%;overflow: auto;opacity:1;animation: mymove 1s infinite;animation-direction: alternate;}\n"
            debugViewStyle.innerHTML += "@keyframes mymove {100% {box-shadow: 0px 0px 7px 7px darkgrey;}}"//Comment this if need to use in low performance clients
            debugView.appendChild(debugViewStyle)

            var debugPre = document.createElement("pre")
            debugPre.id = 'debugConsole'
            debugView.appendChild(debugPre)

            var body = document.getElementsByTagName("body")[0].appendChild(debugView)

            log('Julian Frank says: Your Debug Console V0.0.2is now Ready')
        } else {
            log('Julian Frank says: Your Debug Console was Ready')
        }
    }
}
