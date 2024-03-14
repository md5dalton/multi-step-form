import GoBack from "@/components/GoBack"
import NextStep from "@/components/NextStep"

export default () => (
    <footer className="fixed w-full bottom-0 grid grid-cols-[auto_auto] items-center justify-between p-4 bg-white">
        <div><GoBack /></div>
        <div><NextStep /></div>
    </footer>
)