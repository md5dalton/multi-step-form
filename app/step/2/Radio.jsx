import Image from "next/image"

export default ({ name, price, benefits }) => <>
    <input className="hidden peer" type="radio" id={name} name="plan" />
    <label
        htmlFor={name}
        className="
            border-[2px] border-light-gray rounded-lg
            flex gap-4 items-start p-4
            transition-colors
            peer-checked:border-purplish-blue
            peer-checked:bg-very-light-gray
        "
    >
        <Image
            height={40}
            width={40}
            alt="plan icon"
            src={`/icons/icon-${name}.svg`}
        />
        <div className="grid gap-1">
            <p className="capitalize font-medium">{name}</p>
            <p className="text-sm text-cool-gray">{`$${price}`}</p>
            {benefits && <p className="text-xs">2 months free</p>}
        </div>
    </label>
</>