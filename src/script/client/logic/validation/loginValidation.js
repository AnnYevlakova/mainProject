import Validator from "validator";

export default function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.login)) {
        errors.login = "Login is required";
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }

    return { errors };
}
