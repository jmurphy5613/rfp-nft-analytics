import styles from './CollectionGrid.module.css';

interface CollectionGridProps {
    collections: any[];
}

const CollectionGrid:React.FC<CollectionGridProps> = ({ collections }) => {



    return (
        <div className={styles.grid}>
            {collections.map((collection: any) => {
                return (
                    <div className={styles["grid-item"]}>
                        <div style={{ backgroundImage: `url(${collection.image})` }} className={styles.image} />
                        <h2 className={styles.label}>{collection.name}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default CollectionGrid;