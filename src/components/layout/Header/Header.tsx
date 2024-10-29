import React, { ChangeEvent, FC } from 'react';
import styles from './Header.module.css';
import { ListFilter, Search } from 'lucide-react';
import { replace, useNavigate, useSearchParams } from 'react-router-dom';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get('q') || '';
 
    function updateSearchTerm(e: ChangeEvent<HTMLInputElement>) {
        const newValue = e.target.value;
        
        const newSearchParams = new URLSearchParams(searchParams);
        
        if (newValue === '') {
            newSearchParams.delete('q');
        } else {
            newSearchParams.set('q', newValue);
        }
         
        setSearchParams(newSearchParams);
    }

    function handleAddPetsAllowedFilter() {
        const isPetsAllowed = searchParams.get('filter') === 'pets allowed';
        const newSearchParams = new URLSearchParams(searchParams);

        if (isPetsAllowed) {
            newSearchParams.delete('filter');
        } else {
            newSearchParams.set('filter', 'pets allowed');
        }

        setSearchParams(newSearchParams);
    }

    return (
        <header data-testid="Header" className='sticky z-10 top-0 bg-white border-b border-b-gray-200'>
            <div className='max-w-3xl px-9 py-3 flex justify-between items-center m-auto gap-8'>
                <form className='w-full rounded-full relative'>
                    <Search width={16} height={16} className='absolute top-[calc(50%_-_10px)] left-3' />
                    <input type="search" onChange={updateSearchTerm} value={searchTerm} placeholder='Search here...' className='w-full h-full px-3 pl-10 py-[10px] rounded-full bg-grey-50 placeholder:text-gray-500 text-sm outline-none border border-[#EB5017]' />
                </form>
                <button onClick={handleAddPetsAllowedFilter} type="button">
                    <ListFilter />
                </button>
            </div>
        </header>
    );
}

export default Header;
