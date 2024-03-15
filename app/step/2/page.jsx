import Fieldset from "./Fieldset"

export default () => (
    <div className="grid gap-6">
        <div className="grid gap-2">
            <h1 className="text-2xl">Select your plan</h1>
            <p className="text-cool-gray max-w-72">You have the option of monthly or yearly billing.</p>
        </div>
        <form className="grid gap-4">
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
        </form>
    </div>
)