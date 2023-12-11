
from MusicLM import Music
import sys

# Create a new instance of Music
music = Music()

def api(prompt, save_location):
    tracks = music.get_tracks(prompt, 1)
    if isinstance(tracks, list):
        music.b64toMP3(tracks, save_location)
        # Success
        return "pass"
    else:
        # Error handling
        return tracks

# Get input from command arguments
prompt = sys.argv[1]
save_location = sys.argv[2]

# Call the api function
print(api(prompt, save_location))
