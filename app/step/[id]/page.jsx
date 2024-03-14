"use client"

import * as Yup from "yup"
import { Formik, Field, ErrorMessage } from "formik"

export default () => (
    <div>
        <h1 className="text-2xl">Personal info</h1>
        <p className="text-cool-gray">Please provide your name, email address, and phone number.</p>
        <Formik
            initialValues={{
                name: "",
                email: "",
                phone: "",
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
        
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
        
                phone: Yup.string()
                    .min(8, 'Must be at least 8 digits'),
            })}
            
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {

                    console.log(values);
        
                    setSubmitting(false);
        
                }, 400)
        
            }}
        >
            <fieldset >
                <div className="flex items-center justify-between">
                    <label htmlFor="name">Name</label>
                    <p>Must be 15 characters or less</p>
                    {/* <ErrorMessage name="name" component="p" /> */}
                </div>
                <Field name="name" type="text" placeholder="majara" />
            </fieldset>
        </Formik>
    </div>
)