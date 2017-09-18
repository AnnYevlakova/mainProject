import validator from "validator";

export default function() {
    const pas1 = document.getElementById("pas1").value;
    const pas2 = document.getElementById("pas2").value;
    const errors = {};

    if (!validator.isEmpty(pas1)) {
        if (!validator.equals(pas1, pas2)) {
            errors.pas2 = "Passwords must match";
        }
        if (validator.isEmpty(pas2)) {
            errors.pas2 = "This field is required";
        }
    }

    return errors;
}
