import style from 'styles/hero.module.css'

export default function Hero({ title, subtitle, imageOn = false }) {
    return (
        <div className={style.flexContainer}>
            <div className={style.text}>
                <h1 className={style.title}>{title}</h1>
                <p className={style.subtitle}>{subtitle}</p>
            </div>
            {imageOn && <figure> [画像] </figure>}
        </div>
    )
}