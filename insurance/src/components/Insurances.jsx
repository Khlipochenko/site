export const Insurances=({items})=>{
      const specialIndices = [0, 3, 4, 7];
    return(<>
  
        {items.map((item, index)=>(
        <div key={index} className={`border border-gray-200  p-2 ${specialIndices.includes(index)? "bg-[#E3F2FD]":"" }`}>
   <div className="flex gap-2 items-center pb-1" >         
<span className="text-[#E87722]">{item.icon}</span>
<h2 className=" text-[#0D4F7A] font-medium">{item.name}</h2>
</div>
<p className="text-gray-800 text-sm">{item.description}</p>
        </div>
    
    ))}
 
    </>)
}