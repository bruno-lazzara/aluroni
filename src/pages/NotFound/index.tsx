import styles from './NorFound.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import stylesTema from 'styles/Tema.module.scss';

export default function NotFound() {
    return (
        <div className={classNames({
            [styles.container]: true,
            [stylesTema.continer]: true
        })}>
            <NotFoundImage />
        </div>
    );
}