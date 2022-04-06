import React from "react";
import VideoPlayer from "./VideoPlayer";

import videoFile from "./video/IceAge4/Ice_age_continental_drift.mp4";
import subsEn from "./video/IceAge4/subsEn.vtt";
import subsRu from "./video/IceAge4/subsRu.vtt";

function App (){
  const subs = [subsEn,subsRu];
  const labels = ["English","Russian"];
  const lang = ["en","ru"];
    return (
        <VideoPlayer video={videoFile}
                     subs = {subs}
                     label = {labels}
                     lang = {lang}/>
    );
}

export default App;
