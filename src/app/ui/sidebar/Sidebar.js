import Link from 'next/link';
import NavLinks from './NavLinks';
import Logo from './Logo';
const Sidebar = ()=>{
    return (
        <div>
<Link href="/store" className='bg-yellow-200 flex h-20 items-end justify-start rounded-md p-4'>
    
    <div className='w-32 md:w-40'>
        <Logo/>
        </div> 
</Link>
<div  className="flex flex-wrap gap-2 justify-center md:grow flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
    <NavLinks/>
    <form>
        <button>sign out </button>
    </form>
</div>
        </div>
    )
}
export default Sidebar;