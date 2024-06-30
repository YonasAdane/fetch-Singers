const MediumCard=({coverArt,title,subtitle})=>{
    // <MediumCard coverArt={} title={} subtitle={}/>
// 
  return (
    <div className='w-[12rem] p-2 border rounded-md flex flex-col justify-center items-center indent-4 shadow-lg'>
        <img src={coverArt} alt='cover-art' className='w-full rounded-sm max-h-44 max-w-44 aspect-square object-cover'/>
        <div className=' w-full'>
            <h3 className='text-start  m-0 p-0 w-full truncate'>{title}</h3>
            <p className='text-start dark:text-gray-600 m-0 p-0 w-full truncate light:text-gray-200'>{subtitle}</p>
        </div>
    </div>
  )
}

export default MediumCard

