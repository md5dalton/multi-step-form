"use client"

import * as Yup from "yup"
import { Formik, Field, ErrorMessage, Form } from "formik"
import Fieldset from "./Fieldset"

export default () => (
    <div className="grid gap-6">
        <div className="grid gap-2">
            <h1 className="text-2xl">Personal info</h1>
            <p className="text-cool-gray max-w-72">Please provide your name, email address, and phone number.</p>
        </div>
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
            <Form className="grid gap-4">
                <Fieldset
                    name="name"
                    label="name"
                    type="text"
                    placeholder="e.g Majara Mpiti"
                />
                <Fieldset
                    name="email"
                    label="email address"
                    type="email"
                    placeholder="e.g mmpiti@giga.ls"
                />
                <Fieldset
                    name="phone"
                    label="phone number"
                    type="text"
                    placeholder="e.g +266 58 000 000"
                />
            </Form>
        </Formik>
    </div>
)