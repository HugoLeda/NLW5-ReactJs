import format from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './styles.module.scss'

export function Header() {
    const currentDate = new Date().toLocaleDateString('pt-br')

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Poadcastr" />

            <p>O melhor para você ouvir sempre!</p>

            <span>{currentDate}</span>
        </header>
    )
}