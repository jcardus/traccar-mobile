cd traccar-web || exit
npx cap add ios
npx capacitor-assets generate
mv -v ../fastlane ios/App
