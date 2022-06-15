import { useEffect } from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {getPhotos} from './features/gallarySlice'

function App() {

  const dispatch=useDispatch();
  const photos=useSelector(state=>state.gallery.photos);

  useEffect(()=>{
    dispatch(getPhotos())
  },[]);
  console.log(photos)
  return (
    <div className="App">
        <h1>PHOTO GALLERY</h1>
        <p>This is a photogallery using redux toolkit and redux thunk</p>
        <hr/>
        <div className='Gallery'>
          {photos.map(photo =>
            
            <img
              key={photo.id}
              alt={photo.author}
              src={photo.download_url}
              width="400"
              height="400"
            />

            )}
        </div>
        <button>VIEW MORE</button>
    </div>
  );
}

export default App;
