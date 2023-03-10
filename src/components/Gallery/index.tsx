import { movies } from "../Gallery/data"
import { useState } from "react"
import { Title } from "../Title/Index";
import '../Gallery/style.css'

export function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    function handleClickNext() {
        if (index < movies.length - 1)
            setIndex(index + 1);
    }
    function handleClickPrev() {
        if (index > 0)
            setIndex(index - 1);
    }
    let movie = movies[index]

    return (
        <>
            <h2 className="titulo">
                <i>{movie.title} </i>
            </h2>
            <button onClick={handleMoreClick}>
                {showMore ? 'Esconder' : 'Mostrar'} sinopse
            </button>
            {showMore && <p className="sinopse">{movie.synopsis}</p>}
            <section className="gallery">
                <img src={movie.images.poster} />
            </section>

            <button onClick={handleClickPrev}>Anterior</button>
            <button onClick={handleClickNext}>Próximo</button>

        </>
    )
}