import React from 'react'
import {NavLink} from 'react-router-dom'

import styles from './index.module.css'

import{GiHamburgerMenu} from 'react-icons/gi'
import {FiChevronLeft} from 'react-icons/fi'
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlinePeopleAlt} from 'react-icons/md'
import {MdOutlineMapsHomeWork} from 'react-icons/md'
import {VscLibrary} from 'react-icons/vsc'


const drawerWidthOpen = 240;
const drawerWidthClose = 50;

const drawerData = [
    {
        'title':'Dashboard',
        'ic':<AiOutlineHome/>,
        'url':''
    },
    {
        'title':'Users',
        'ic':<MdOutlinePeopleAlt/>,
        'url':'users'
    },
    {
        'title':'Department',
        'ic':<MdOutlineMapsHomeWork/>,
        'url':'department'
    },
    {
        'title':'Sections',
        'ic': <VscLibrary/>,
        'url':'sections'
    },
    // {
    //     'title':'Report',
    //     'ic': <ReportOutlined/>,
    //     'url':'reports'
    // },
    // {
    //     'title':'Settings',
    //     'ic': <SettingsOutlined/>,
    //     'url':'settings'
    // }
 

]

interface IDrawer{
    width?: number;
    children?:{},
    open:boolean
}

const Drawer = (props:IDrawer) =>{
    return(
        <div style={{width:props.width}} className={styles.sidebar}>
               <ul>
                {drawerData.map((data)=> {
                    return(
                        <NavLink to = {data.url} 
                        style ={{
                            
                            textDecoration:'none'
                        }}                    
                        className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
                           
                          <div style={{display:'flex', alignItems:"center"}} className={styles.li_container}>
                           <li  className= { props.open ? '' : styles.li }>{data.ic}</li>
                           <li style={{display: props.open ? "flex" : "none"}} className={styles.link_text}>{data.title}</li>
                          </div>
                        </NavLink>
                    )
                })}
            </ul>
        </div>
    )
}

const Sidebar = () => {

    const [open, setOpen] = React.useState(false)
    const toggle = () => setOpen(!open)

  return (
    <div>
        <nav style={{marginLeft: open ? drawerWidthOpen: 0}}>
            <div className={styles.logo} onClick={toggle}>
                {open ? '': <GiHamburgerMenu  style={{margin:'10px'}}/>}
            </div>

            <h1>Simple College Management System</h1>
        </nav>

        <div className = {styles.menu_control}onClick={toggle}> 
            <FiChevronLeft color='black' style={{marginLeft: open ? '210px' : '-100%'}}/>
        </div>

        <Drawer width={open ? drawerWidthOpen : drawerWidthClose} open = {open}/>
      
       
     </div>
  )
}

export default Sidebar