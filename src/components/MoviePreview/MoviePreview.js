import {Link} from "react-router-dom";


function MoviePreview(props) {

    return (
        <div>
            <Link key={props.id} to={`/movie/${props.slug}`}>
                <img key={props.id} width={200} height={280}
                     src={'https://m.media-amazon.com/images/I/81Mahls3HnL._SL1500_.jpg'} alt={'s'}></img>
            </Link>
            <br></br>
            <span>{props.title}<br></br><span style={{marginRight:"100px"}}>Рейтинг</span>{props.rating}/10</span>
        </div>
    );
}

export default MoviePreview;

