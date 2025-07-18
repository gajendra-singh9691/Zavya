const Banner = ({ image }) => {
    return (
        <div className="w-full h-fit flex justify-center">
            <div className='w-11/12 h-130 my-8'>
                <img className="w-full h-full object-cover rounded-lg" src={image} alt="Banner image" />
            </div>
        </div>
    )
}

export default Banner
