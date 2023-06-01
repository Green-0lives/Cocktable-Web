import Header from '../../layout/Header';
import NaviBar from '../../layout/NaviBer';
import Image from 'next/image';
import foodStyle from '../../style/css/FoodMenu.module.css';

import testImg from '../../style/image/001.png';

export default function Food() {
   
    return (
        <div>
            <Header/>
            <NaviBar/>
            <div className={foodStyle.foodContant}>
                <div className={foodStyle.foodItem}>
                    <Image src={testImg} alt='테스트 이미지'/>
                    <p>로제 닭볶음탕</p>
                    <p className={foodStyle.foodPrice}>23,000</p>
                </div>

                <div className={foodStyle.foodItem}>
                    <Image src={testImg} alt='테스트 이미지'/>
                    <p>로제 닭볶음탕</p>
                    <p className={foodStyle.foodPrice}>23,000</p>
                </div>

                <div className={foodStyle.foodItem}>
                    <Image src={testImg} alt='테스트 이미지'/>
                    <p>로제 닭볶음탕</p>
                    <p className={foodStyle.foodPrice}>23,000</p>
                </div>

                <div className={foodStyle.foodItem}>
                    <Image src={testImg} alt='테스트 이미지'/>
                    <p>로제 닭볶음탕</p>
                    <p className={foodStyle.foodPrice}>23,000</p>
                </div>
            </div>

            <div className={foodStyle.foodContant}>
                <div className={foodStyle.foodItem}>
                    <Image src={testImg} alt='테스트 이미지'/>
                    <p>로제 닭볶음탕</p>
                    <p className={foodStyle.foodPrice}>23,000</p>
                </div>

                <div className={foodStyle.foodItem}>
                    <Image src={testImg} alt='테스트 이미지'/>
                    <p>로제 닭볶음탕</p>
                    <p className={foodStyle.foodPrice}>23,000</p>
                </div>

                <div className={foodStyle.foodItem}>
                    <Image src={testImg} alt='테스트 이미지'/>
                    <p>로제 닭볶음탕</p>
                    <p className={foodStyle.foodPrice}>23,000</p>
                </div>

                <div className={foodStyle.foodItem}>
                    <Image src={testImg} alt='테스트 이미지'/>
                    <p>로제 닭볶음탕</p>
                    <p className={foodStyle.foodPrice}>23,000</p>
                </div>
            </div>
        </div>
    )
}