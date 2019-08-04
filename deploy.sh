learningbranch="2.custom component"
msg="custom component"
git checkout -b $learningbranch
git add .
git commit -m "$msg"
git push -u origin $learningbranch
git checkout master
git merge $learningbranch
git push -u origin master