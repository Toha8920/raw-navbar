import { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/Home'
        },
        {
            id: 2,
            name: 'About',
            path: '/About'
        },
        {
            id: 3,
            name: 'Contact',
            path: '/Contact'
        },
        {
            id: 4,
            name: 'Product',
            path: '/Product'
        },
        {
            id: 5,
            name: 'Services',
            path: '/Services'
        },
    ]
    return (
        <nav className="bg-blue-200">
            <div onClick={() => setOpen(!open)} className="md:hidden">
                <span>
                    {
                        open === true ? <XMarkIcon className="h-6 w-6 text-blue-500" /> : <Bars3Icon className="h-6 w-6 text-blue-500" />
                    }
                </span>
            </div>
            <ul className={`md:flex absolute md:static duration-500 ${open ? 'top-6' : '-top-48'} bg-blue-200`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;