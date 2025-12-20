import { useState } from "react";
function TodoPage_Basic(){
    const [inputValue, setInputValue] = useState("");
    const [items,setItems] =useState([]);
    const handleClick= ()=>{
        if ( inputValue.trim() !=""){
            items.push(inputValue.trim());
            setItems([...items]);
            setInputValue("");
        }
    }
    return (
        <>
           <main className=" font-mono text-yellow-700 h-screen w-screen flex flex-col  justify-center items-center  shadow-md shadow-amber-300">
                <h1 className="text-red-500">To do Application</h1>
                <section className="">
                    <input 
                        className="bg-zinc-300 border-amber-200 "
                        type="text" 
                        value={inputValue} 
                        onChange={(e)=> setInputValue(e.target.value)}
                    />
                    <button 
                    className="bg-amber-700 text-white "
                    onClick={handleClick}> Add </button>
                </section>
                <section>
                    <ol className="list-decimal pl-5">
                        {
                            items.map(
                                (values,index)=>{ 
                                    return <li key={index}>{values}</li>
                                }
                            )
                        }
                    </ol>
                </section>
           </main>
        </>
    );
}
export default  TodoPage_Basic;