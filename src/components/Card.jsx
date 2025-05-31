

const Card = ({ description, key, iconSrc }) => {
    return (
        <>
            <div key={key} className="w-full md:w-32 bg-[#f0f4f9] flex flex-col justify-between hover:bg-gray-300 relative rounded-[10px]">
                <p className="text-[17px] text-[#585858] !m-2">{description}</p>
                <img className="w-6 h-6 absolute bottom-0 right-0  !m-2" src={iconSrc} alt="" />
            </div>
        </>
    )
}


export default Card;