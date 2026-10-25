# Build an AL TAAM EATERY APK with GitHub Actions

A GitHub Actions workflow is included at `.github/workflows/android-apk.yml` (relative to the workspace/repository root). It installs the Android app dependencies, copies the latest website into the Android project, builds a debug APK, and saves the APK as a downloadable workflow artifact.

## Run it

1. Put the complete workspace contents in a GitHub repository. Keep the `.github/workflows/android-apk.yml` folder at the repository root and the app in `outputs/`.
2. Push the repository to GitHub.
3. In the repository, open **Actions** → **Build Android APK** → **Run workflow**. A push that changes files under `outputs/` also starts a build.
4. Open the completed run and download **al-taam-eatery-debug-apk** from its Artifacts section. Transfer the APK to an Android phone and install it. Android may ask to allow installation from that source.

The workflow builds a debug APK for testing. It is not a Play Store release. Play Store publishing requires a signed Android App Bundle (`.aab`) and a release signing key. Keep that key private; it should be stored as a GitHub Actions secret or used locally, never committed to the repository. Apple App Store builds still require macOS with full Xcode and Apple signing credentials.
