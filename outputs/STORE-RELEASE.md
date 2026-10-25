# AL TAAM EATERY store release checklist

## App project status

- Android Capacitor project is generated in `android/`, with app id `com.altaameatery.ordering` and version `1.0` (version code `1`). The web app is bundled locally.
- The iOS project has not been generated on this machine. Capacitor requires CocoaPods for platform generation, and this machine has Command Line Tools rather than the full Xcode installation needed to build and sign an iOS app.
- Neither store upload has been signed or submitted. Store submission must be done from the owner’s Google Play Console and Apple Developer/App Store Connect accounts.

## Build and sync

From this folder, run `pnpm install` once and `pnpm cap:sync` after website changes. Open `android/` in Android Studio, set the release signing configuration, create a signed Android App Bundle (`.aab`), and upload it in Play Console.

On a Mac with full Xcode and CocoaPods installed, run `pnpm exec cap add ios`, then `pnpm cap:sync`. Open `ios/App/App.xcworkspace` in Xcode, select the restaurant’s Apple Developer team, set signing and bundle id `com.altaameatery.ordering`, archive, and upload through App Store Connect.

## Owner items needed before submission

1. Google Play Console developer account and Apple Developer Program membership.
2. Legal business/developer name, support email, privacy policy URL, and customer support contact.
3. Store listing text, app icon artwork, screenshots for required device sizes, and age/content rating answers.
4. Privacy disclosures and data collection answers. Booking details are sent from the customer’s device to WhatsApp; the current app does not provide a restaurant-side booking dashboard or collect payments.
5. Release signing handled in the owner’s accounts, plus any requested tax, identity, or business verification.

Reserve access for testers and review, then submit each signed release for store review. Review approval and publication timing are controlled by Apple and Google.

## Important functionality limitation

The current ordering flow opens a pre-filled WhatsApp message. It does not automatically save an order, reserve a slot, take payment, send push notifications, or notify staff unless the customer sends the message and the restaurant confirms it. Those automated functions require a backend and payment/notification service before advertising them as automatic bookings.
