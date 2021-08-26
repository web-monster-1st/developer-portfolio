import React, { useContext, useState } from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { IoMenuSharp, IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BsFillGearFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { FaUser, FaFolderOpen } from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';

import './Navbar.css'
import { ThemeContext } from '../../contexts/ThemeContext'

function Navbar() {

    const { theme, setHandleDrawer }  = useContext(ThemeContext)

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer()

    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer()
    };

    const useStyles = makeStyles((t) => ({
        navMenu : {
            fontSize: '2.5rem',
            color: theme.secondary,
            cursor: 'pointer',
            transform: 'translateY(-10px)',
            transition: 'color 0.3s',
            "&:hover": {
                color: theme.primary,
            }
        },
        MuiDrawer: {
            padding:'0em 1.8em',
            width:'14em',
            fontFamily:' Poppins',
            fontStyle:' normal',
            fontWeight:' normal',
            fontSize:' 24px',
            background: theme.primary2,
            overflow: 'hidden',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
            [t.breakpoints.down('sm')]: {
                width:'12em',
            },
        },
        closebtnIcon: {
            fontSize: '2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: theme.primary,
            position: 'absolute',
            right: 40,
            top: 40
        },
        drawerItem: {
            margin: '2rem auto',
            borderRadius: '78.8418px',
            background: theme.primary2,
            color: theme.primary,
            width: '85%',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: '0 30px',
            boxSizing: 'border-box',
            border: '2px solid',
            borderColor: theme.primary,
            transition: 'background-color 0.3s, color 0.3s',
            "&:hover": {
                background: theme.primary,
                color: theme.primary2,
            },
            [t.breakpoints.down('sm')]: {
                width:'100%',
                padding: '0 25px',
            },
        },
        drawerLinks: {
            fontFamily: "Poppins",
            width:'50%',
            fontSize: '1.3rem',
            fontWeight: 600,
        },
        drawerIcon: {
            fontSize: '1.6rem',
        }
    }));

    const classes = useStyles();


    return (
        <div className="navbar">
            <div className="navbar--container">
                <h1 style={{color: theme.primary2}}>Jane Doe</h1>

                <IoMenuSharp className={classes.navMenu} onClick={handleDrawerOpen}/>
            </div>
            <Drawer
                variant="temporary"
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleDrawerClose()
                    } else if (reason !== 'escapeKeyDown') {
                        handleDrawerClose()
                    }
                }}
                anchor="left"
                open={open}
                classes={{ paper: classes.MuiDrawer }}
                className="drawer"
                disableScrollLock={true}
            >
                <div className="div-closebtn">
                    <CloseIcon onClick={handleDrawerClose} className={classes.closebtnIcon}/>
                </div><br/>


                <div onClick={handleDrawerClose}>
                    <div className="navLink--container">
                        <NavLink to="/" smooth={true} spy="true" duration={2000}>
                            <div className={classes.drawerItem}>
                                <IoHomeSharp className={classes.drawerIcon}/>
                                <span className={classes.drawerLinks}>Home</span>
                            </div>
                        </NavLink>

                        <NavLink to="/#about" smooth={true} spy="true" duration={2000}>
                            <div className={classes.drawerItem}>
                                <FaUser className={classes.drawerIcon}/>
                                <span className={classes.drawerLinks}>About</span>
                            </div>
                        </NavLink>

                        <NavLink to="/#resume" smooth={true} spy="true" duration={2000}>
                            <div className={classes.drawerItem}>
                                <HiDocumentText className={classes.drawerIcon}/>
                                <span className={classes.drawerLinks}>Resume</span>
                            </div>
                        </NavLink>

                        <NavLink to="/#services" smooth={true} spy="true" duration={2000}>
                            <div className={classes.drawerItem}>
                                <BsFillGearFill className={classes.drawerIcon}/>
                                <span className={classes.drawerLinks}>Services</span>
                            </div>
                        </NavLink>

                        <NavLink to="/#blog" smooth={true} spy="true" duration={2000}>
                            <div className={classes.drawerItem}>
                                <FaFolderOpen className={classes.drawerIcon}/>
                                <span className={classes.drawerLinks}>Blog</span>
                            </div>
                        </NavLink>

                        <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                            <div className={classes.drawerItem}>
                                <MdPhone className={classes.drawerIcon}/>
                                <span className={classes.drawerLinks}>Contact</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Navbar
