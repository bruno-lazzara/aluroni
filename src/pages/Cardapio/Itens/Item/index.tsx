import TagsPrato from 'components/TagsPrato';
import styles from './Item.module.scss';
import { Prato } from 'types/Prato';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

function Item(props: Prato) {
    const prato = props;
    const { title, description, photo, id } = prato;
    const navigate = useNavigate();
    return (
        <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
            <div className={styles.item__imagem}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <TagsPrato {...prato} />
            </div>
        </div>
    );
}

export default memo(Item);