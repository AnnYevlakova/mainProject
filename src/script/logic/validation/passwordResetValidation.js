import validator from "validator";

export default function validateInput(data) {
    let errors = {};

    if (!validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    if (validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    }

    return { errors };
}
