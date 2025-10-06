#!/bin/bash
# Install extension VSCode

extensions=(
  "ChakrounAnas.turbo-console-log"
  "VisualStudioExptTeam.vscodeintellicode"
  "xabikos.JavaScriptSnippets"
  "mgmcdermott.vscode-language-babel"
  "formulahendry.auto-rename-tag"
  "evondev.evonsnippets"
  "ritwickdey.LiveServer"
  "esbenp.prettier-vscode"
  "xyz.local-history"
)

for ext in "${extensions[@]}"; do
  code --install-extension $ext --force
done

echo "Installed extensions successfully"