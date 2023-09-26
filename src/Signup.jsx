import { Formik, Form } from 'formik'
import React from 'react'
import TextField from './Component/TextField'
import * as Yup from 'yup'

const Signup = () => {
    const validate = Yup.object({
        firstName: Yup.string()
            .max(20, "Must be 20 character or less")
            .required('Required'),
        lastName: Yup.string()
            .max(25, "Must be 25 character or less")
            .required("Required"),
        mobileNo: Yup.number()
            //.min(10,"Mobile no must be 10 digit" )
            .max(10,"Mobile no must be 10 digit" )
            .required("Required"),
        email: Yup.string()
            .email("Email is invalid")
            .required("Required"),
        password: Yup.string()
            .min(8, "Password must be atleast 8 character")
            .required("required"),
        ConfirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Password must be same")
            .required("Required")
    })
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                mobileNo: 0,
                email: '',
                password: '',
                ConfirmPassword: ''

            }}
            validationSchema={validate}
            onSubmit={values => {

            }}
        >
            {formik => (
                <div style={{ width: '500px' }}>
                    <Form>
                        <TextField label="First Name" name="firstName" type="text" />
                        <TextField label="Last Name" name="lastName" type="text" />
                        <TextField label="Mobile No" name="mobileNo" type="number" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="Confirm Password" name="confirmPassword" type="password" />
                        <button class="btn btn-dark mt-3" type="submt">Register</button>
                        <button class="btn btn-dark mt-3" type="reset">Reset</button>
                    </Form>
                </div>

            )}
        </Formik>
    )
}

export default Signup