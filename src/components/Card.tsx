import styles from './card.module.css';
import Image from 'next/image';

export default function Card(){
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/card1.jpg'}
                alt='Product Picture'
                fill={true}
                objectFit='cover'
                />
            </div>
            <div className={styles.cardtexttitle}>Laguna Grand Hotel & Spa Songkhla</div>
            <div className={styles.cardtextdetail}>Host a one-of-a-kind private party with a stylish event space, a special menu, and an atmosphere that will make your night unforgettable and full of fun.</div>
        </div>
    );
}