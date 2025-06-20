//step 1
git --version
https://git-scm.com/downloads

//step 2 
git config --global user.name "Keng Mo"
git config --global user.email "kenglongmo@gmail.com"

//step 3
mkdir GitAdventure
cd GitAdventure
git init

//step 4
echo "Embarking on my journey to master Git." > journey.txt
git status
git add journey.txt
git commit -m "Initial commit with journey.txt"
git status

//step 5
echo "This file is meant to be deleted." > temp.txt
git add temp.txt
git commit -m "Prepare temp.txt for deletion"
git rm temp.txt
git commit -m "Delete temp.txt"

//step 6
git mv journey.txt adventure.txt
echo "My journey evolves into an adventure with Git." > adventure.txt
git add adventure.txt
git commit -m "Rename journey.txt to adventure.txt and update content"

//step 7
echo "*.log" > .gitignore
git add .gitignore
git commit -m "Add .gitignore to ignore log files"
touch test.log
git status

//step 8
echo "Exploring the depths of Git commands and their powers." >> adventure.txt
git status -s
git add adventure.txt
git commit -m "Update adventure.txt with exploration insights"

//step 9
git log --oneline --reverse
git restore --source=<commit_id> adventure.txt
git add adventure.txt
git commit -m "Revert adventure.txt to its initial state"