import { 
    FaHome, 
    FaBookOpen, 
    FaBoxes, 
    FaShoppingCart, 
    FaTruck, 
    FaUsers, 
    FaCog, 
    FaInfoCircle, 
    FaCubes 
  } from 'react-icons/fa';
  
  import Link from 'next/link';
  
  const links = [
    { name: 'Home', href: '/', icon: FaHome },
    { name: 'Books', href: '/store', icon: FaBookOpen },
    { name: 'Sell or Lend', href: '/store/sell-lend', icon: FaBoxes },
    { name: 'Cart', href: '/store/cart', icon: FaShoppingCart },
    { name: 'Track Order', href: '/store/track-order', icon: FaTruck },
    { name: 'Community', href: '/store/community', icon: FaUsers },
    { name: 'Settings', href: '/store/settings', icon: FaCog },
    { name: 'About', href: '/store/about', icon: FaInfoCircle },
    { name: 'Admin', href: '/store/admin', icon: FaCubes },
  ];
 const NavLinks =()=>{
    return(
        <>
    {
      links.map((link) => {
        const IconComponent = link.icon;
        return (
          <Link 
            key={link.name}
            href = {link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <IconComponent className="w-6"/>
            <p className="hidden md:block">
              
              </p>
          </Link>
        )
      })
    }
    </>
    )
 }
 export default NavLinks;