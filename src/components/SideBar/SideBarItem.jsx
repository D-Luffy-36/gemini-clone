
const SidebarItem = ({ iconSrc, label, className = "", isExtended = true }) => {
    return (
        <div
            className={`
                flex items-center cursor-pointer transition-all
                hover:bg-gray-100
                ${isExtended ? "gap-2  !px-3 !py-1.5 rounded-full justify-start" : "p-2 rounded-full justify-center"}
                ${className}
            `}
        >
            <img className="w-5 h-5" src={iconSrc} alt={label} />
            {isExtended && <p className="text-xs text-gray-700">{label}</p>}
        </div>
    );
};


export default SidebarItem;