import React from "react";

class VideoPlayer extends React.Component {
    componentDidMount() {
        let video = document.getElementById('video');
        video.onpause = ()=>{
            setTimeout(()=>{
                video.textTracks[1].mode = 'showing';
            },1000);
        }
        video.onplay = ()=>{
            setTimeout(()=>{
                video.textTracks[1].mode = 'hidden';
            },1000);
        }
        /* {this.props.subs.map((sub,index) =>(
                 <track id={this.props.labels[index]}
                        label={this.props.labels[index]}
                        src={sub}
                        srcLang={this.props.lang[index]}
                        kind="subtitles"  default/>
             )
         )}*/
    }

    render() {
        return (
            <div className="videoBlock" id="videoBlock">
                <video id="video" controls>
                    <source src={this.props.video} type="video/mp4"/>
                    <track id="subsEn" label="English" kind="subtitles" srcLang="en" src={this.props.subs[0]} default/>
                    <track id="subsRu" label="Russian" kind="subtitles" srcLang="ru" src={this.props.subs[1]}/>
                </video>
            </div>
        );
    }
}
export default  VideoPlayer;
