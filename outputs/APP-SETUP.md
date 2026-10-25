# AL TAAM EATERY app setup

The website is now a Progressive Web App (PWA). It can be installed from the browser on Android and iPhone and launches in its own app window. Menu pages and images are cached for offline browsing; sending a pre-order still requires an internet connection and WhatsApp.

## Host the app

Publish the contents of this `outputs` folder to any HTTPS static host. Service workers and app installation require HTTPS (or localhost); opening `index.html` directly as a `file://` URL will show the website but will not enable app installation/offline support. Keep `index.html`, `manifest.webmanifest`, `sw.js`, and `assets/` together at the same site path.

## Install on Android

Open the hosted HTTPS address in Chrome, choose **Install app** or **Add to Home screen**, and confirm.

## Install on iPhone

Open the hosted HTTPS address in Safari, tap **Share**, choose **Add to Home Screen**, then tap **Add**.

## App Store / Play Store

This PWA is installable directly and needs no store account. A store-distributed native wrapper can be made from the same site using Capacitor, then signed and submitted through Apple App Store Connect and Google Play Console. Store submission requires the restaurant owner’s developer accounts, app identifiers, signing credentials, and store listing details. The current booking flow sends a prefilled WhatsApp message; automated order storage, payment processing, push notifications, and staff booking management need a connected backend/service before launch.
