
import styles from './MenuBarTwo.module.css';
import {Link, Outlet} from 'react-router-dom'



export default function MenuBarTwo(props){

    
    return (
    <div className={styles.navbar}>
        {/* pass the menu options as props! */}
        {
            props.menuOptionsTwo.map(option => option.showAuth && <Link to={option.label} key={option.label} onClick={option.hasLogoutOption ? props.handleLogout: ''}>{option.label}</Link>)
        }
    </div>
   
    )
}