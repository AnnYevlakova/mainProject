import Validator from "validator";

export default function(data) {
    const errors = {};

    if (Validator.isEmpty(data.username)) {
        errors.username = "Username is required";
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    }
    if (Validator.isEmpty(data.pas1)) {
        errors.pas1 = "Password is required";
    }
    if (!Validator.equals(data.pas1, data.pas2)) {
        errors.pas2 = "Passwords must match";
    }
    if (Validator.isEmpty(data.pas2)) {
        errors.pas2 = "Password confirmation is required";
    }

    return {
        errors,
    };
}
