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
        </form>
    </div>
)