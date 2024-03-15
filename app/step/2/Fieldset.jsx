// import { Field } from "formik"

export default ({ name, type, placeholder, label }) => (
    <fieldset className="grid gap-1">
        <div className="flex items-center justify-between text-xs">
            <label htmlFor={name} className="capitalize">{label}</label>
            <p className="text-strawberry-red">Must be 15 characters or less</p>
            {/* <ErrorMessage name="name" component="p" /> */}
        </div>
        {/* <Field
            className="h-10 w-full border-light-gray border-[2px] rounded-md px-4 outline-none focus:border-purplish-blue transition-colors"
            name={name}
            type={type}
            placeholder={placeholder}
        /> */}
    </fieldset>
)