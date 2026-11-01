# AL TAAM EATERY — App handover

This project already contains the AL TAAM EATERY installable web app and Capacitor wrapper.

## What is in this app

- Responsive menu with category filters and search.
- Add-to-basket controls, quantity editing and estimated food subtotal.
- Pickup or delivery request details.
- WhatsApp order handoff to the restaurant number configured in the app.
- PWA manifest and service worker for browser installation/offline menu browsing.
- Capacitor configuration for Android and iOS wrappers.
- GitHub Actions workflow to produce an Android debug APK.

## App entry points

- Web/PWA app: `outputs/index.html`
- PWA install metadata: `outputs/manifest.webmanifest`
- Offline cache: `outputs/sw.js`
- Native wrapper config: `outputs/capacitor.config.json`
- Android build workflow: `.github/workflows/android-apk.yml`

## Build an Android APK

1. Open the repository's **Actions** tab.
2. Select **Build Android APK**.
3. Choose **Run workflow** on the branch containing the app.
4. Wait for the workflow to finish successfully.
5. Download the `AL-TAAM-EATERY-APK` artifact from the completed run.
6. Install the APK on a test Android device and verify menu, basket and WhatsApp handoff.

The workflow currently builds a **debug APK** for testing. A Play Store release needs a signed release build, signing credentials kept in GitHub Actions secrets, privacy policy, store listing and review.

## Install on iPhone

Host the contents of `outputs/` on an HTTPS origin, open it in Safari, then choose **Share → Add to Home Screen**.

## Configure before public launch

The existing website app has restaurant details embedded in `outputs/index.html`. Verify:
- Menu prices and day-based availability.
- Restaurant WhatsApp/phone numbers.
- Address, opening hours and delivery coverage.
- Whether customer-facing copy should say pre-order or regular order.
- Logo and food imagery.

## Current functional boundary

The current checkout creates a prefilled WhatsApp message. It does not yet create a server-side order record, process UPI/card payments, provide live order tracking, send push notifications, or provide a staff dashboard. These require a backend, database, payment-provider account and operational setup. Do not describe an order as confirmed until the restaurant confirms it.

## Suggested production architecture

- Keep this PWA/Capacitor front end.
- Add a secure API and database for menu, modifiers, orders, status and customer contact.
- Create orders server-side with an idempotency key and an auditable status history.
- Integrate a payment gateway's hosted checkout/UPI flow; verify payment webhooks on the server before marking paid.
- Add a staff dashboard with role-based access and order status management.
- Keep secrets in server environment variables; never embed payment secrets in the app.
- Add privacy, retention, consent and refund policies before collecting customer data or taking payments.
