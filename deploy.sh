learningbranch="1.hello-world-angular"
msg="hello world angular"
git checkout -b $learningbranch
git add .
git commit -m "$msg"
git push -u origin $learningbranch
git checkout master
git merge $learningbranch
git push -u origin master