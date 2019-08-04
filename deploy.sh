learningbranch="2.custom-component"
msg="custom component"
exists=`git show-ref refs/heads/$learningbranch`
if [ -n "$exists" ]; 
    then
    git checkout -b $learningbranch
    else
    git checkout $learningbranch
fi
git add .
git commit -m "$msg"
git push -u origin $learningbranch
git checkout master
git merge $learningbranch
git push -u origin master