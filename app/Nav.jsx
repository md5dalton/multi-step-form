import NavLink from "@/components/NavLink"
import UList from "@/components/UList"

export default () => (
    <nav
        className="min-h-44 bg-no-repeat bg-nav bg-cover"
    >
        <UList
            className="flex justify-center gap-4 py-8"
            items={[1,2,3,4]}
            itemHandler={item => <NavLink
                href={`/step/${item}`}
                activeClassName="text-black bg-pastel-blue border-transparent"
                className="
                    border-white border-[1px] rounded-full
                    h-8 w-8 grid place-items-center
                    text-white
                "
            >{item}</NavLink>}
        />
    </nav>
)