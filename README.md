# Freezer

This is a web application to get an overview of your freezer inventory.

* Print some QR codes which represent a unique ID.
* When you put something in your freezer attach a QR code to it.
* Go to the PUT tab, scan the QR code and add the necessary information.
* On the app's main screen you get an overview of your freezer inventory.
* When you take something out, go to the GET tab and scan the QR code.

To scan QR codes, I use the JsQRScanner (https://github.com/jbialobr/JsQRScanner).

## Hosting

I run an apache web server with SSL support (which is required to get access to the camera) on a raspberry pi. Instructions can be found here: https://www.raspberrypi.org/documentation/remote-access/web-server/apache.md and here:https://pimylifeup.com/raspberry-pi-ssl-lets-encrypt/

## Domain name

* I got a free domain name (www.mwbaert.tk) at 'freenom.com' which is valid for one year. 
* When the server is down, check if the correct IP is linked with the domain name. This can be done on the freenom website.
* Check the modem settings, make sure port 80 (HTTP) and 443 (HTTPS) are forwarded for the rpi. The local IP of the raspberry pi should also be the DMZ address.
