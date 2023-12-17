import search from '../../assets/icon-image/search.png';
import setting from '../../assets/icon-image/setting.png';
import notification from '../../assets/icon-image/notification.png';
import avator from '../../assets/Avatar.png';
import icon from '../../assets/icon-image/paperb.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const infoList = [
        {
            id: 1,
            name: 'search',
            image: search,
        },
        {
            id: 2,
            name: 'setting',
            image: setting,
        },
        {
            id: 3,
            name: 'notification',
            image: notification,
        },
        {
            id: 4,
            name: 'avator',
            image: avator,
        },

    ]

    const navList = [
        {
            id: 1,
            name: 'Home',
            link: '/'
        },
        {
            id: 2,
            name: 'Users',
            link: '/users'
        },
        {
            id: 3,
            name: 'Projects',
            link: '/projects'
        },
        {
            id: 4,
            name: 'Tasks',
            link: '/tasks'
        },
        {
            id: 5,
            name: 'Reporting',
            link: '/reporting'
        },
    ]

    return (
        <div className="w-full h-auto px-5 py-2 flex justify-center items-center navigation">
            <div className="w-1/2 flex justify-end">
                <div className='w-1/3 flex justify-end gap-2'>
                    <img src={icon} alt="" />
                    <span className='logo-title py-2'>
                        Stack
                    </span>
                </div>
                <div className='w-2/3 flex justify-end'>
                <ul className="list-none flex justify-end items-center w-full gap-5 ">
                {
                        navList.map((navL) =>{
                            return (
                                <li key={navL.id}>
                                   <NavLink to={navL.link} className='nav-list'>{navL.name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                </div>
            </div>
            <div className="w-1/2 flex justify-end items-center">
                <ul className="list-none flex justify-end items-center w-full gap-4 ">
                    {
                        infoList.map((infoL) =>{
                            return (
                                <li key={infoL.id}>
                                    <img src={infoL.image} alt='' />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header;





