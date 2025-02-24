import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name : Yup.string().min(3).max(25).required("Please enter your name"),
    email : Yup.string().email().required("Please enter valid email "),
    password : Yup.string().min(8).required("Password atleast 8 char long"),
    // phone : Yup.number().min(10).required("Enter a valid phone number"),
    phone : Yup.string().matches(/^\d+$/, "Phone number must contain only digits") // Only numbers
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number must not exceed 10 digits")
    .required("Phone number is required"),
    role : Yup.string().required("Choose your role"),
    // confirmPassword : Yup.string().required().oneOf([Yup.ref("password"), null, "Password must match"]),
})

export const loginSchema = Yup.object({
   
    email : Yup.string().email().required("Please enter valid email"),
    password : Yup.string().min(8).required("Password atleast 8 char long"),
})