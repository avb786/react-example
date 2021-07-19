import { Formik, Form } from "formik"
import { Fragment } from "react"
import TextField from "../TextField/TextField";
import * as Yup from "yup"

const SignUp = () => {

    const validate = Yup.object({
        firstName: Yup.string().max(4, 'Must be of 4 Charaters').required('First Name Required'),
        lastName: Yup.string().max(4, 'Must be of 4 Charaters').required('Last Name Required'),
        email: Yup.string().email('Email is invalid').required('Email Required'),
        password: Yup.string().min(6, 'Minimum of 6 Charaters').required('Password Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null] ,'Password Does Match').required('Confirm Password s required'),
    })

    return (
        <Formik 
        initialValues={{
            firstName: "",
            lastName:"",
            email:"",
            password:"",
            confirmPassword: ""
        }}
        validationSchema={validate}
        onSubmit={values =>{
            console.log(values)
        }}
        >
        {formik => {
                return (
                    <Fragment>
                        <h1 className="my-4 font-weight-bold-display-4">
                            Sign Up
                        </h1>
                        {/* {console.log(formik.values)} */}
                        <Form>
                        <TextField label="First Name" name="firstName" type="text" />
                        <TextField label="Last Name" name="lastName" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="Confirm Password" name="confirmPassword" type="password" />
                        <button className="btn btn-primary m-2" type="submit">Signup</button>
                        <button className="btn btn-danger m-2" type="reset">Reset</button>
                        </Form>
                    </Fragment>

                )
            }}
        </Formik>
    )

}

export default SignUp
