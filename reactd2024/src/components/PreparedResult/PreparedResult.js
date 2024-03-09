import React, {useEffect, useState} from 'react';
import {movieService} from "../../services/movieService";


const PreparedResult = ({result}) => {
    const {name} = result;
    const resultId = result.id;
    const [resultItems, setResultItems] = useState(null);

    useEffect(() => {
        movieService.getMoviesPagesbyId(resultId)
            .then(({data}) => setResultItems(data))
            .catch(error => console.error('Error fetching movie details:', error));
    }, [resultId]);

    return (
        <div>
            {resultItems && (
                <div>
                    <p>{resultItems.title}</p>
                    <p>{resultItems.overview}</p>

                </div>
            )}
            {/*<PreparedResultDetails resultItems={resultItems}/>*/}
        </div>
    );
};

export {PreparedResult};
