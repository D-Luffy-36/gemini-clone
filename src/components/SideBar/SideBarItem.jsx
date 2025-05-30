



const SidebarItem = ({ iconSrc, label, className = "", onClick }) => {
    return (
        <div className={`flex justify-start items-center gap-2 mx-1.5 cursor-pointer ${className}`} onClick={onClick}>
            <img className="w-5 h-5" src={iconSrc} alt={label} />
            <p className="text-xs">{label}</p>
        </div>
    );
}


export default SidebarItem;