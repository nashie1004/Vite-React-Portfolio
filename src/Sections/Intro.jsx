import React from 'react'
import '../Styles/Intro.scss'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Intro() {
  return (
    <>
      <div className="present">
        <div className="home-texts">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur nobis, debitis mollitia odio doloremque nam numquam quasi magni facere?</p>
          <div className="btn">
            <button>Lorem, ipsum.</button>
          </div>
        </div>
        <div className="home-imgs">
          <div className='skew'>
            <div className="bg-color">
              <img src="https://picsum.photos/id/234/300/300" alt="pic" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// export default function Intro() {
//   return (
//     <>
//       <div className="present">
//         <div className="homepage-left">
//           <div className="headers-h1">
//             <h1>Lorem ipsum dolor sit amet.</h1>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur nobis, debitis mollitia odio doloremque nam numquam quasi magni facere?</p>
//             <button>Lorem, ipsum.</button>
//           </div>
//         </div>
//         <div className="homepage-right">
//           <div className="bg-color"></div>
//           <img src="https://picsum.photos/id/234/300/300" alt="pic" />
//         </div>
//       </div>
//     </>
//   )
// }
