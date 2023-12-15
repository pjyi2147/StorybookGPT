import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import { useState, useEffect } from "react";

function ImageSide({id, currPage, maxPage}) {
  const navigate = useNavigate();
  const muiTheme = createMuiTheme({});

  function handleNextPage() {
    if ((parseInt(currPage)+1)<=maxPage) {
      var bookUrl = "/book/"+id+"/"+(parseInt(currPage)+1)+"/"+maxPage;
      navigate(bookUrl);
    }
  }

  // TODO: what if the page is valid but the file doesn't exist?
  // should be using localhost
  // let musicUrl = `http://localhost:3001/books/${id}/${currPage}/music.wav`;
  // let imageUrl = `http://localhost:3001/books/${id}/${currPage}/image.png`;
  let musicUrl = `http://172.22.37.113:3001/books/${id}/${currPage}/music.wav`;
  let imageUrl = `http://172.22.37.113:3001/books/${id}/${currPage}/image.png`;

  const [imageExists, setImageExists] = useState(false);
  const [musicExists, setMusicExists] = useState(false);

  const imageCheck = () => {
    const img = new Image();
    img.src = imageUrl;
    if (img.complete) {
      if (img.naturalWidth === 0) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  }

  const musicCheck = () => {
    // const audio = new Audio();
    // audio.src = musicUrl;
    // console.log(audio.readyState);
    // if (audio.readyState >= 2) {
    //   return true;
    // }
    // return false;
  }

  useEffect(() => {
    setImageExists(false);
    const interval = setInterval(() => {
      const result = imageCheck();
      if (result) {
        setImageExists(true);
        clearInterval(interval);
      } else {
        setImageExists(false);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [imageUrl]);

  useEffect(() => {
    setMusicExists(false);
    const interval = setInterval(() => {
      const result = true;
      if (result) {
        setMusicExists(true);
        clearInterval(interval);
      } else {
        setMusicExists(false);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [musicUrl]);

  const getPlayer = (player, dispatch) => {
    player.loop = true;
  }

  return (
    <>
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        {
          imageExists
          ? <img className="rounded-2xl" alt="describing current page text" src={imageUrl} />
          : <img className="rounded-2xl" src="https://www.vyvapts.com/wp-content/uploads/loading.gif" width="100" />
        }
        {
          musicExists
          ?
          <div className="absolute top-0 left-1/2 m-5">
            <ThemeProvider theme={muiTheme}>
            <AudioPlayer
              elevation={1}
              width="max-content"
              variation="default"
              spacing={2}
              download={false}
              autoplay={true}
              order="standard"
              preload="auto"
              loop={false}
              displaySlider={false}
              getPlayer={getPlayer}
              src={musicUrl}
            />
            </ThemeProvider>
          </div>
          : <></>
        }
        <IoIosArrowForward onClick={handleNextPage} className="absolute inset-y-0 right-0 h-full text-gray-400 text-4xl cursor-pointer hover:bg-amber-200" />
      </div>
    </>
  );
}

export default ImageSide;
