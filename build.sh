rm -rf traccar-web
git clone --depth 1 https://github.com/traccar/traccar-web
cp -v capacitor.config.ts traccar-web
cp -vr src traccar-web
{
  echo "import './capacitor.js';"
  cat traccar-web/src/index.jsx
} > temp && mv temp traccar-web/src/index.jsx
