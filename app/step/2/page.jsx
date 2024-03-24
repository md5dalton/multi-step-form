import UList from "@/components/UList"
import Image from "next/image"
import Fieldset from "./Fieldset"

const plans = {
    monthly: [
        {name: "arcade", price: 9},
        {name: "advanced", price: 12},
        {name: "pro", price: 15},
    ],
    yearly: [
        {name: "arcade", price: 90, benefits: true},
        {name: "advanced", price: 120, benefits: true},
        {name: "pro", price: 150, benefits: true},
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
            <UList
                className="grid gap-3"
                items={plans.yearly}
                itemHandler={({ name, price, benefits }) => (
                    <fieldset className="border-[2px] border-light-gray rounded-lg overflow-hidden">
                        <label htmlFor={name} className="flex gap-4 items-start p-4 cursor-pointer bg-very-light-gray">
                            <Image
                                height={40}
                                width={40}
                                alt="plan icon"
                                src={`/icons/icon-${name}.svg`}
                            />
                            <div className="grid gap-1">
                                <p className="capitalize font-medium">{name}</p>
                                <p className="text-sm text-cool-gray">{`$${price}/${plan === "monthly" ? "mo" : "yr"}`}</p>
                                {benefits && <p className="text-xs">2 months free</p>}
                            </div>

                        </label>
                        <input className="hidden" type="radio" name={name} />
                    </fieldset>
                )}
            />
            <div className="flex items-center justify-center gap-6 capitalize text-sm h-12 bg-very-light-gray rounded-lg">
                <p>monthly</p>
                <div className="w-10 h-5 bg-marine-blue grid items-center px-1 rounded-xl">
                    <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>
                <p>yearly</p>
            </div>
        </form>
    </div>
)