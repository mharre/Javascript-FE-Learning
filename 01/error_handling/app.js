const user = {email: 'abc@abc.com'}

try{
//    myFunc();
    // Produce TypeError
//    null.myFunc();
    // URI error
//    decodeURIComponent('%');
    if(!user.name){
//        throw 'User has no name';
        throw new SyntaxError('User has no name')
    }

} catch(err){
    console.log(err);
//    console.log(err.message);
//    console.log(err.name);
//    console.log(err instanceof TypeError);
} finally {
    console.log('Finally runs regardless of anything else')
}

console.log('Program Continues')