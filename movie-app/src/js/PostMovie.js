import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PostMovie.css';
import LinesEllipsis from 'react-lines-ellipsis';
import Typograph from '@material-ui/core/Typography';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function PostMovie({title, genres, poster, summary}){
  return(
    <div className='movie_frame'>
      <div className="movie_poster">
        <img src={poster} alt={title} width="200px" height="280px" />
      </div>
      <div className="movie_details">
        <h2>{title}</h2>
        <div className="movie_genres">
          {genres.map((genre, index) => { if(index < 4) {return(<span key={index}>{genre} </span>)}})}
        </div>
        <div className="movie_summary">
          <LinesEllipsis
            text={summary}
            maxLine='4'
            ellipsis='...'
            trimRight
            basedOn='words'
          />
          <p></p>
           <Button size="small" variant="contained" color="primary">Read More</Button>
        </div>
      </div>
    </div>
  )
}

// function PostMovie({title, genres, poster, summary}){
//   return(
//     <div className="frame">
//       <div className="gallery">
//         <div className="poster">
//           <img src={poster} alt={title} width="180px" height="250px" />
//         </div>
//         <div className="content">
//           <h2>{title}</h2>
//           <Typography>
//             {genres.map((genre,index) => {return <span key={index}><strong>{genre} </strong></span>})}
//           </Typography>
//           <p>
//           <Typograph>
//             <LinesEllipsis
//               text={summary}
//               maxLine='4'
//               ellipsis='...'
//               trimRight
//               basedOn='words'
//             />
//           </Typograph>
//           <p></p>
//           <Button size="small" variant="contained" color="primary">Read More</Button>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

PostMovie.prototype = {
    title: PropTypes.object.isRequired,
    genres: PropTypes.object.isRequired,
    poster: PropTypes.object.isRequired,
    summary: PropTypes.object.isRequired
}


export default PostMovie;