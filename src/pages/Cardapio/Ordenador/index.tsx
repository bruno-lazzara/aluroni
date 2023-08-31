import { memo, useState } from 'react';
import styles from './Ordernador.module.scss';
import opcoes from './opcoes.json';
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

interface Props {
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

function Ordenador({ ordenador, setOrdenador }: Props) {
    const [aberto, setAberto] = useState(false);
    const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;
    return (
        <button
            className={classNames({
                [styles.ordenador]: true,
                [styles['ordenador--ativo']]: ordenador !== ''
            })}
            onPointerEnter={() => setAberto(true)}
            onPointerLeave={() => setAberto(false)}
            onClick={() => setAberto(!aberto)}
        >
            <span>{nomeOrdenador || 'Ordenar Por'}</span>
            {aberto ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowRight size={20} />}
            <div className={classNames({
                [styles.ordenador__options]: true,
                [styles['ordenador__options--ativo']]: aberto
            })}>
                {opcoes.map((opcao) => (
                    <div
                        className={styles.ordenador__option}
                        key={opcao.value}
                        onClick={() => setOrdenador(opcao.value)}
                    >
                        {opcao.nome}
                    </div>
                ))}
            </div>
        </button>
    );
}

export default memo(Ordenador);