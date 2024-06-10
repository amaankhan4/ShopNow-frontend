import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../public/logo.webp'

function header(){
    const [query,setquery] = useState('')
    function search(e: React.ChangeEvent<HTMLInputElement>): void {
        e.preventDefault();
        setquery(e.target.value);
        console.log(query);
    }
    return (
            <div className="bg-slate-800 w-screen h-16  flex items-center">
                <img src={logo} alt="logo" className='w-14 h-14 rounded-lg ml-7'/>
                <div className='relative ml-96'>
                    <input 
                        type="text" 
                        className="rounded-md w-[500px] h-10 pl-4 pr-10" // Add padding to the right to make space for the icon
                        onChange={search}
                        value={query}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </div>
                </div>
                    <div className='flex-1 text-right mr-10'>
                        <FontAwesomeIcon icon={faShoppingCart} style={{color:'white', fontSize:'1.5em'}}/>
                    </div>
            </div>
        );
        
}

export default header;