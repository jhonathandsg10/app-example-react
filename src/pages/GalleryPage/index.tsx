import { Gallery } from "../../components/Gallery";
import { BaseLayout } from "../../layout/BaseLayout";

export function GalleryPage(){
    return(
        <BaseLayout appBarTitle="Galeria">
            <Gallery></Gallery>
        </BaseLayout>
    )
}