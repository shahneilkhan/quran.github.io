# Al Quran — website
Static site (index.html) + PWA + auto APK build via GitHub Actions.
1. Push everything to `main`.
2. Settings → Pages → Branch `main` / root → site goes live.
3. Actions tab → "Build APK" → Artifacts → `nur-apk` → app-debug.apk

## Branding (নাম ও লোগো বদলাতে)
1. `index.html` → `const BRAND={name:"Al Quran",logo:"القرآن"}` (নাম ও লোগো লেখা)
2. `icon-192.png`, `icon-512.png` → নিজের আইকন দিয়ে বদলান (`logo.svg` নমুনা)
3. `manifest.webmanifest` → `name`, `short_name`
4. `capacitor.config.json` → `appName` (APK-র নাম)
5. `index.html` → `<title>` ট্যাগ

## Signed APK (Release)
GitHub > Settings > Secrets and variables > Actions এ ৪টি secret দিন: KEYSTORE_BASE64, KEYSTORE_PASSWORD, KEY_ALIAS, KEY_PASSWORD।
এরপর main-এ push করলেই signed `al-quran.apk` বানিয়ে Releases পাতায় দেয়:
https://github.com/shahneilkhan/quran.github.io/releases/latest/download/al-quran.apk
keystore ফাইল কখনো repo-তে রাখবেন না।
