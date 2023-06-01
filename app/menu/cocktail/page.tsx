import Header from '../../layout/Header';
import NaviBar from '../../layout/NaviBer';
import Image from 'next/image';
import cocktailStyle from '../../style/css/Cocktail.module.css';

import testImg from '../../style/image/002.png';

export default function Cocktail() {

    return (
        <div>
            <Header/>
            <NaviBar/>
            <div className={cocktailStyle.cocktailMain}>
                <div className={cocktailStyle.cocktailItem}>
                    <Image src={testImg} alt='테스트 이미지'/>
                    <p>벨리니</p>
                    <p className={cocktailStyle.cocktailPrice}>15,000</p>
                </div>
                <div className={cocktailStyle.cocktailItem}>
                    <Image src={testImg} alt='테스트 이미지'/>
                    <p>벨리니</p>
                    <p className={cocktailStyle.cocktailPrice}>15,000</p>
                </div>
                <div className={cocktailStyle.cocktailItem}>
                    <Image src={testImg} alt='테스트 이미지'/>
                    <p>벨리니</p>
                    <p className={cocktailStyle.cocktailPrice}>15,000</p>
                </div>
            </div>

        </div>
    );
}