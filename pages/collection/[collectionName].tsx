import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from '../../styles/CollectionPage.module.css';


const CollectionProfile = () => {

    const router = useRouter();
    const { collectionName } = router.query;

    useEffect(() => {
        console.log(collectionName);

    }, [router.isReady])

    return (
        <div className={styles.root}>

        </div>
    )
}

export default CollectionProfile;