import styles from './Banner.module.css';

function Banner({ imagem }) {
    return (
        <div className={styles.capa} style={{ background: `url('/imagens/banner-${imagem}.png')` }} />
    )

}

export default Banner;