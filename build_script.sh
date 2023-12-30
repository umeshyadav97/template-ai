#!/bin/bash
if [ -e $1 ]; then
  exit 1
fi
 
PROJECT_NAME="stropeai"
PROCESS_NAME="${PROJECT_NAME}_$1"
 
echo -e "\n*************** Build for $PROJECT_NAME ***************\n"
 
print_step() {
  echo -e "\n***************************************"
  echo "$1"
  echo -e "***************************************\n"
}
 
# Check git status
print_step "1. Check git status"
GIT_STATUS=$(git status -s)
if [ -n "$GIT_STATUS" ]; then
  echo "Git status dirty, cleaning now"
  git reset --hard
else
  echo "Git status clean"
fi
 
# Get latest code
print_step "2. Pull latest code"
git pull origin $1
 
# Check pm2 status
print_step "3. Check pm2 status"
OUTPUT=$(pm2 pid $PROCESS_NAME)
CHECK="NO"
 
if [ -n "$OUTPUT" ]; then
  CHECK="YES"
else
  CHECK="NO"
fi
 
COMMAND=""
 
# Clean npm cache
print_step "4. Clean npm cache"
npm cache clean --force
 
# Clean next cache
print_step "4a. Clean next cache"
rm -rf .next/
 
# Run build commands
print_step "5. npm install and run build"
npm install --legacy-peer-deps
npm run build:$1
 
# Decide PM2 script
print_step "6. Run the server"
if [ $CHECK == "NO" ]; then
  COMMAND="pm2 start npm --name $PROCESS_NAME -- run serve:$1"
else
  COMMAND="pm2 reload $PROCESS_NAME"
fi
 
# Run pm2 command
$COMMAND
 
