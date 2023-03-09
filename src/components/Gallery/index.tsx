import {movies} from "../Gallery/data"
import { useState } from "react"
export function Gallery(){
    const [index, setIndex] = useState(0);

    function handleClickNext() {
        setIndex(index + 1);
    }
    function handleClickPrev() {
        setIndex(index - 1);
    }
    let movie = movies[index]

    return(
        <>
            <section className="gallery">
                <img src={movie.images.poster} />
            </section>

            <button onClick={handleClickPrev}>Anterior</button>
            <button onClick={handleClickNext}>Próximo</button>
            
        </>
    )
}