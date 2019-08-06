learningbranch="7.request"
msg="angule request data from server"
git add .
git commit -m "$msg"
git push -u origin master
exists=`git show-ref refs/heads/$learningbranch`
if [ -n "$exists" ]; 
    then
    echo "---------------branch exists---------------"
    git checkout $learningbranch
    git merge master
    else
    echo "---------------create branch---------------"
    git checkout -b $learningbranch
fi
git push -u origin $learningbranch
git checkout master