import validator from "validator";

export default function(data) {
    const errors = {};
    const { pas1, pas2 } = data;

    if (validator.isEmpty(pas1)) {
        errors.pas1 = "New Password is required.";
    }
    if (validator.isEmpty(pas2)) {
        errors.pas2 = "Password confirmation is required.";
    }
    if (!validator.equals(pas1, pas2)) {
        errors.pas2 = "Passwords must match";
    }

    return errors;
}
