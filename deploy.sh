learningbranch="7.Pass-values-and-method-calls-using-the-Input-and-parent-child-components"
msg="父子组件传值，方法调用"
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