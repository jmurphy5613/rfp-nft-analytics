import styles from './CollectionGrid.module.css';
import { useRouter } from 'next/router';

interface CollectionGridProps {
    collections: any[];
}

const CollectionGrid:React.FC<CollectionGridProps> = ({ collections }) => {

    const router = useRouter();

    return (
        <div className={styles.grid}>
            {collections.map((collection: any) => {
                return (
                    <div className={styles["grid-item"]} onClick={() => {
                        router.push(`/collection/${collection.collectionSlug}`);
                    }}>
                        <div style={{ backgroundImage: `url(${collection.image})` }} className={styles.image} />
                        <h2 className={styles.label}>{collection.name}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default CollectionGrid;