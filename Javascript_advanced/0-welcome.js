function welcome(firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
    return displayFullName;
    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }

    displayFullName();
}
