import "./global.css";
import Sidebar from "./Sidebar";
import Article from "./Article";
import Footer from "./Footer";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
//export default function RootLayout({ children }) {

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#FFF",
        }}
      >
        <div
          style={{
            width: "1150px",
            height: "640px",
            backgroundColor: "#316094",
            display: "flex",
            gap: "10px",
          }}
        >
          {/* 사이드 바 */}
          <div
            className="flex-grow-[1] m-[auto] relative"
            style={{ marginLeft: "30px" }}
          >
            <Sidebar />
          </div>
          {/* 메인 Article */}
          <div className="flex-grow-[2.5] m-[auto] relative">
            <Article />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#000", // 글자 색상
                pointerEvents: "none", // 클릭 불가
              }}
            >
              {children}
            </div>
          </div>
          {/* 푸터 */}
          <div className="flex-grow-[1]" style={{ marginRight: "20px" }}>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;