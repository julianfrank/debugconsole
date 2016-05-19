# debugconsole
A Simple Console HTML Console Viewer for Lazy Developers who do not want to open developerTools->Console everytime while building the app

## How to Use
Simple ... Just include the debugconsole.js file inside your HTML file

For now download the file from the repository into your js directory and access using the <script> tag
''
<script src="/js/debugconsole.js"></script>
''
In future once a friendly CDN player uploads this repo, you should be able to change this script loading to point to CDN and receive the latest version/ specific version as per your design

Once this is done when the page is loaded in the browser the script exposes a log function. You can use it as follows:
''
log(<Your Text>)
''
The Script also inserts a transparent console window on the screen with sixe 25emx7em . When the mouse is over this screen it expands to fill about 75% of the screen width with black background.
