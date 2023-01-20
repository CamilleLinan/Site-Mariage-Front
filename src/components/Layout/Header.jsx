import { useState } from "react";
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const menuIcon = <FontAwesomeIcon icon={faBars} />

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <header className="header">
            <h1 className="header_title">M & P</h1>
            
            <button 
                className="header_btn" 
                onClick={() => {setIsNavExpanded(!isNavExpanded)}}
            >
                    {menuIcon}
            </button>
            <div className={isNavExpanded ? "header_nav expanded" : "header_nav"}>
                <ul>
                    <li><NavLink 
                        title='Accueil' 
                        className='header_nav_link' 
                        end to='/'
                    >
                        ACCUEIL
                    </NavLink></li>
                    
                    <li><NavLink 
                        title='Blog du mariage' 
                        className='header_nav_link' 
                        end to='/'
                    >
                        BLOG DU MARIAGE
                    </NavLink></li>
                    
                    <li><NavLink 
                        title='Confirmer sa présence' 
                        className='header_nav_link' 
                        end to='/'
                    >
                        CONFIRMER SA PRÉSENCE
                    </NavLink></li>
                    
                    <li><NavLink 
                        title="Livre d'or" 
                        className='header_nav_link' 
                        end to='/'
                    >
                        LIVRE D'OR
                    </NavLink></li>
                    
                    <li><NavLink 
                        title='Nous contacter' 
                        className='header_nav_link' 
                        end to='/'
                    >
                        NOUS CONTACTER
                    </NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header