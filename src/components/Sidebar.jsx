import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import './Sidebar.css';

const Sidebar = () => {
    const [showSidebar , setShowSidebar] = useState(false);
    // const [sidebarItem , setSidebarItem] = useState('');
    const [enableItem, setEnableItem] = useState({});

    const sidebarToggle = () =>{
        setShowSidebar((prev)=>!prev);
        // setSidebarItem('');
    }

    const handleToggle = (title) =>{
        // setSidebarItem(title);
        console.log(enableItem,'o');
        setEnableItem((prev) => ({
            ...prev,
            [title]: !prev[title],
          }))
        }
    console.log(enableItem,'out');
    
  return (
    <>
    <IconContext.Provider value={{color : '#fff'}} >
        <div className='sidebar'>
            <Link to='#' className='menubars' onClick={sidebarToggle}>
                <FaIcons.FaBars/>
            </Link>
        </div>
        <div className={showSidebar ? 'navbar active' : 'navbar'}>
            <div className='navbarItems'>
                <div className='crossToggle'>
                    <Link to='#' className='menubars' onClick={sidebarToggle}>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </div>
                {SidebarData.map((item,index)=>(
                    <div >
                        <div key={index}  className='navbarToggle'>
                            <Link to={item?.path} 
                            className='menubars' 
                            onClick={()=>handleToggle(item?.title)}
                            >
                                {item?.icon}
                                <span className='innerTitle'>{item?.title}</span>
                                { enableItem[item?.title] ? item?.iconOpened : item?.iconClosed}
                            </Link>
                        </div>
                        <ul className='navbarItemsInner'>    
                            {enableItem[item?.title] &&  item?.subNav?.map((subitem,index) => (
                                <li key={index} className='navbarToggle'>
                                    <Link to={subitem?.path} className='menubars'>
                                        {subitem?.icon}
                                        <span className='innerTitle'>{subitem?.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        </IconContext.Provider>
    </>
  )
}

export default Sidebar