#!/bin/bash

# Nektyd Sync: Automation for GitHub Repository Initialization
# Path to gh binary (Check Homebrew first, then local bin)
if [ -f "/opt/homebrew/bin/gh" ]; then
    GH_BIN="/opt/homebrew/bin/gh"
elif [ -f "/usr/local/bin/gh" ]; then
    GH_BIN="/usr/local/bin/gh"
elif [ -f "./bin/gh" ]; then
    GH_BIN="./bin/gh"
else
    GH_BIN="gh" # Try system path
fi

# Colors for output
CYAN='\033[0;36m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${CYAN}--- Nektyd Sync Automation ---${NC}"

# 1. Check gh binary
if [ ! -f "$GH_BIN" ]; then
    echo -e "${RED}Error: GitHub CLI binary not found in ./bin/${NC}"
    exit 1
fi

# 2. Check Authentication
$GH_BIN auth status > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo -e "${RED}Warning: Not authenticated with GitHub.${NC}"
    echo -e "Please run: ${CYAN}./bin/gh auth login${NC}"
    exit 1
fi

echo -e "${GREEN}[✔] Authenticated with GitHub${NC}"

# 3. Initialize Git if needed
if [ ! -d ".git" ]; then
    echo -e "Initializing Git repository..."
    git init
fi

# 4. Create Repository if it doesn't exist
REPO_NAME="nektyd-demo"

echo -e "Syncing changes to GitHub..."
git add .
git commit -m "Auto-sync: Moving web app to root for Vercel zero-config deployment"

$GH_BIN repo view "$REPO_NAME" > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo -e "Creating GitHub repository: ${CYAN}$REPO_NAME${NC}..."
    $GH_BIN repo create "$REPO_NAME" --public --source=. --remote=origin --push
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}[✔] Repository created and pushed successfully${NC}"
    else
        echo -e "${RED}Error creating repository. It might already exist.${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}[✔] Repository $REPO_NAME already exists on GitHub.${NC}"
    git push origin main
fi

echo -e "${CYAN}--- Sync Complete ---${NC}"
echo -e "View your code at: ${GREEN}https://github.com/$($GH_BIN api user -q .login)/$REPO_NAME${NC}"
