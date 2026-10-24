# Quranly

Static site (index.html) + PWA + auto APK via GitHub Actions.

APK: Releases > latest > al-quran.apk

Signed release APK: run "Create signing key (run once)" in Actions, then add 3 secrets
(KEYSTORE_BASE64, KEYSTORE_PASSWORD, KEY_ALIAS). Without them a debug APK is built.
