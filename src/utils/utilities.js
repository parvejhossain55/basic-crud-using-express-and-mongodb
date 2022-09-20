exports.validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

exports.checkGender = (gender) => {
    return ["Male", "Female", "Others"]
        .filter((value) => {
            if (value == gender) {
                return value;
            } else {
                return false;
            }
        })
        .toString();
};
