#!/bin/bash
set -e

if [ -z "$AUSTINABUOGA_PORTFOLIO_KEY" ]; then
  echo "Error: AUSTINABUOGA_PORTFOLIO_KEY secret is not set."
  exit 1
fi

REPO="https://austin-abuoga:${AUSTINABUOGA_PORTFOLIO_KEY}@github.com/austin-abuoga/austinabuoga.github.io.git"

git remote set-url origin "$REPO"

git add .

if git diff --cached --quiet; then
  echo "Nothing new to commit. Pushing existing commits..."
else
  git commit -m "Update portfolio"
fi

git push origin main

echo "Done! Portfolio pushed to GitHub."
