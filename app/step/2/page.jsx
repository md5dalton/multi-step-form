import UList from "@/components/UList"
import Radio from "./Radio"

const plans = {
    monthly: [
        {name: "arcade", price: "9/mo"},
        {name: "advanced", price: "12/mo"},
        {name: "pro", price: "15/mo"},
    ],
    yearly: [
        {name: "arcade", price: "90/yr", benefits: true},
        {name: "advanced", price: "120/yr", benefits: true},
        {name: "pro", price: "150/yr", benefits: true},
    ],
}
const plan ="yearly"

export default () => (
    <div className="grid gap-6">
        <div className="grid gap-2">
            <h1 className="text-2xl">Select your plan</h1>
            <p className="text-cool-gray max-w-72">You have the option of monthly or yearly billing.</p>
        </div>
        <form className="grid gap-6">
            <fieldset>
                <UList
                    className="grid gap-3"
                    items={plans.yearly}
                    itemHandler={item => <Radio {...item} />
                    }
                />
            </fieldset>
            <fieldset className="flex items-center justify-center gap-6 capitalize text-sm h-12 bg-very-light-gray rounded-lg">
                <p>monthly</p>
                <div className="w-10 h-5 bg-marine-blue grid items-center px-1 rounded-xl">
                    <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>
                <p>yearly</p>
            </fieldset>
        </form>
    </div>
)