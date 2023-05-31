import mainStyles from '../app/page.module.css';
import Image from 'next/image';
import mainCocktailImg from '../app/style/image/main_cocktail.png';


export default function Home() {
  return (
    <div className={mainStyles.mainPageContant}>
      <Image src={mainCocktailImg} alt="메인 칵테일 이미지" />
      <p>Cocktable</p>
    </div>
  )
}
