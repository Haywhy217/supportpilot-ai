import Link from "next/link";

const navigation = [
    {name : "Inbox", href:"/", icon : "📥"},
    {name : "Escalations", href:"/escalations", icon : "⚠️"},
    {name : "Customers ", href:"/customers", icon : "👥"},
    {name : "Analytics", href:"/analytics", icon : "📊"},
];

export default function Sidebar() {
    return (
        <aside className="flex min-h-screen w-[260px] flex-col bg-[#17243b] text-white px-5 py-5 shrink-0">
            <div className= "mb-16 flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 rounded-xl font-bold text-xl place items-center ">S</div>
                <div>
                    <h1 className="text-lg font-bold tracking-tight ">SupportPilot AI</h1>
                    <p className="mt-4 text-[10px] tracking-[1.5px] text-slate-400">AI SUPPORT WORKSPACE </p>
                </div>
            </div>



          <div className="mb-5 ml-3 text-[10px] font-semibold tracking-[1.8px] text-slate-400">WORKSPACE</div>

            <nav className="flex flex-col gap-2.5">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className=" flex items-center gap-4 rounded-lg px-4 py-3.5 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-[#293b59] hover:text-white "
                    >
                        <span className="text-base">{item.icon}</span>
                        {item.name}
                    </Link>
                ))}
            </nav>

            <div className="mt-auto border-t border-slate-600/60 pt-6">
                <div className="flex items-center gap-3 rounded-lg px-2 py-2">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-600 font-bold">P</div>
                <div>
                    <p className="text-sm font-semibold">Paynest</p>
                    <p className="mt-1 text-xs text-slate-400">Support</p>
                </div>
                </div>
            </div>
        </aside>
    );
}