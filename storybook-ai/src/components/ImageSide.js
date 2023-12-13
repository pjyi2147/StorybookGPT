import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

function ImageSide({imageUrl, musicUrl}) {
  const navigate = useNavigate();

  const muiTheme = createMuiTheme({});

  return (
    <>
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <img className="rounded-2xl" src={imageUrl} />
        <div className="absolute top-0 left-1/2 m-5">
            <ThemeProvider theme={muiTheme}>
                <AudioPlayer
                    elevation={1}
                    width="max-content"
                    variation="default"
                    spacing={2}
                    download={false}
                    autoplay={true}
                    order="standart"
                    preload="auto"
                    loop={false}
                    displaySlider={false}
                    src={musicUrl}
                />
            </ThemeProvider>
        </div>
        <IoIosArrowForward className="absolute inset-y-0 right-0 h-full text-gray-400 text-4xl cursor-pointer hover:bg-amber-200" />
      </div>
    </>
  );
}

export default ImageSide;
