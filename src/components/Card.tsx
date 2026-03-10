import styles from './card.module.css';
import Image from 'next/image';

type ProductCardProps = {
  imageSrc: string;
  altText?: string;
  title: string;
  description?: string;
};

export default function ProductCard({ imageSrc, altText = 'Product Picture', title, description }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image src={imageSrc} alt={altText} fill={true} objectFit='cover' />
      </div>
      <div className={styles.cardtext}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}