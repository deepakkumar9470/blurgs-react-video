import React,{useState} from 'react'
import ReactPlayer from "react-player";
import ModalVideo from 'react-modal-video'

import './FileUploader.css'

const FileUploader = () => {

    const [videoUrl, setVideoUrl] = useState(null)
    const [isOpen, setOpen] = useState(false)


    const handleFileInput = (e) => {
        
          const [file] = e.target.files;
          console.log('video', file)
          setVideoUrl(URL.createObjectURL(file))
              
    }

    return (

           <div className="file-uploader">

               <div className="video_container">
               <h2>Select video to play</h2>
               <input
                    className="custom-file-input"
                    type="file" 
                    onChange={handleFileInput}
                    />

                   <ReactPlayer 
                        className="video_player"
                        url={videoUrl}
                        width="640px" 
                        height="360px"
                        controls 
                        />
               </div>
           </div>
    )
}

export default FileUploader
