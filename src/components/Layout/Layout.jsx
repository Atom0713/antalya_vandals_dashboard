import style from './Layout.module.css';
import Navigationbar from "../Navbar/Navbar";

const NavbarLayout = props => {
    const { children } = props;

    return (
        <div className={style.layout}>
            <aside className={style.aside}>
                <Navigationbar />
            </aside>
            <main className={style.main}>{children}</main>
        </div>
    )
}

export default NavbarLayout;