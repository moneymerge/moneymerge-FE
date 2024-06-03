import Link from "next/link";

// const Article = () => {
//   return (
//     <div>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="406"
//         height="385"
//         fill="none"
//       >
//         <path fill="#000" d="M3.78 5.978H406V385H3.78z" />
//         <path fill="#FFAFBC" stroke="#000" d="M.5.5h401.22v378.022H.5z" />
//         <path
//           fill="#F1FF9D"
//           stroke="#000"
//           d="M1.256 31.587H401.72v345.739H1.256z"
//         />
//         <path
//           fill="#FFE9E9"
//           stroke="#000"
//           d="M9.694 40.941h382.833v324.423H9.694z"
//         />
//         <path fill="#fff" d="M337.5 6.5h24v19h-24z" />
//         <path fill="#fff" d="M337.5 6.5h24v19h-24z" />
//         <path fill="#fff" d="M337.5 6.5h24v19h-24z" />
//         <path stroke="#000" d="M337.5 6.5h24v19h-24z" />
//         <path fill="#050505" d="m349 8.5 7.361 8.556h-14.722L349 8.5Z" />
//         <path fill="#050505" d="M345.357 14.204h7.771V22.5h-7.771z" />
//         <path fill="#fff" d="M367.5 6.5h24v19h-24z" />
//         <path fill="#fff" d="M367.5 6.5h24v19h-24z" />
//         <path fill="#fff" d="M367.5 6.5h24v19h-24z" />
//         <path stroke="#000" d="M367.5 6.5h24v19h-24z" />
//         <path
//           stroke="#000"
//           strokeWidth="3"
//           d="M0-1.5h17.41"
//           transform="matrix(.66516 .7467 -.78453 .62009 373 10)"
//         />
//         <path
//           stroke="#000"
//           strokeWidth="3"
//           d="M0-1.5h17.41"
//           transform="matrix(.66516 -.7467 .78453 .62009 374.419 23)"
//         />
//       </svg>
//     </div>
//   );
// };
import React from "react";
import "./style/article.css";

export const Article = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          <div className="rectangle" />
          <img className="img" alt="Group" src="window.svg" />
          <div className="div">
            <img className="group-2" alt="Group" src="./image/close.svg" />
            <img className="group-3" alt="Group" src="home.svg" />
            <div className="group-4">
              <div className="text-wrapper">표</div>
              <div className="text-wrapper-2">달력</div>
              <div className="text-wrapper-3">소비분석표</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
