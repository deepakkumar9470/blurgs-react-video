// import React,{useState} from 'react'

// import ModalVideo from 'react-modal-video'



// const VideoPlayer = () => {
 
//      const [video,setVideo] = useState(null)
//      const [isOpen, setOpen] = useState(false) 

   
   

//      const fileHnadler = () =>{
         
//            const myfile = new FormData()
//            myfile.set('file',video)
        
//      }

//     return (
//         <div className='video_container'>

             
//           {/* <ModalVideo 
//             channel='youtube' autoplay isOpen={isOpen} videoId="7sDY4m8KNLc" onClose={() => setOpen(false)}>


//             </ModalVideo> */}

//        <label className="custom-file-label" htmlFor="customFile2">Video</label>  
       
//          <input  
//             type="file"   
//             value={video}
//             formControlName='fileSource'
//             onChange={(e) => setVideo(e.target.files[0])} 
//             name="video" />
    


//                   {video != null ? (
//                             <video width="320" height="240" controls>
//                             <source src={video.blob} type="video/mp4, video/avi"/>
//                           </video>
//                         ) : (
//                           ""
//                         )}

//                         <button onClick={fileHnadler}>Watch</button>
//           </div>
//     )
// }

// export default VideoPlayer


