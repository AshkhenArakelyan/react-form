export const validate = (values) => {
    const {userName, password} = values; // val.userName
    if(userName === '' || password === '') {
        return "Username and Password fields can't be empty"
    } else if(password.length < 8) {
        return "Password can't contain less then 8 characters"
    } else {
        return "You have successfully logged in!";
    }
}