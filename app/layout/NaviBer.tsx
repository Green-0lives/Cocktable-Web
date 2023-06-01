import naviBarStyle from '../style/css/layout/NaviBar.module.css'; 
import testImg from '../style/image/001.png';

export default function NaviBar() {

    return (
        <div className={naviBarStyle.naviBarMain}>
            <div className={naviBarStyle.naviBarMenu}>
                <p className={naviBarStyle.text}>Cocktail</p>
                <p>Wine</p>
                <p>Food</p>
                <p>Drink</p>
            </div>
        </div>
    );
}