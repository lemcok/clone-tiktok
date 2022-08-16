const SRC =
   'https://v16-webapp.tiktok.com/9b4c40ba8234ebdaa7907e78f5eae603/62fb0f9b/video/tos/useast2a/tos-useast2a-ve-0068c003/11ba0538b73b41b98eaaaf76eaa04f07/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1938&bt=969&cs=0&ds=3&ft=eXd.6HK9Myq8ZKqfAwe2NPtwyl7Gb&mime_type=video_mp4&qs=0&rc=NDtkNTxlNjhmPDs7OmQ2OEBpM3d1NjQ6ZnZ0ZTMzNzczM0BfNC81Ly40NTMxY2JgYWAtYSNyanFhcjRfbG5gLS1kMTZzcw%3D%3D&l=202208152131300101920572171B9C646A&btag=80000';

import { useRef, useState } from 'react';
import { IconPlayer } from './IconPlayer';
import s from './styles.module.css';

export default function VideoPlayer() {
   const [playing, setPlaying] = useState(false)
   const video = useRef()

   const handlePlay = () => {
      playing 
         ? video.current.pause()
         : video.current.play()
         
      setPlaying(!playing)
   }
   return (
      <div>
         <video
            // autoPlay
            // muted
            loop
            src={SRC}
            className={s.video}
            ref={ video }
            onClick={ handlePlay }

         ></video>
         <IconPlayer playing={playing}></IconPlayer>
      </div>
   );
}
