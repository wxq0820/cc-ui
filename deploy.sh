rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "updata" &&
git branch -M main &&
git remote add origin git@github.com:wxq0820/cc-ui.git &&
git push -f -u origin main &&
cd ..
