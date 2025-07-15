import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function App() {
  const { roomID } = useParams();
  const location = useLocation();
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Get role from URL query string
  const queryParams = new URLSearchParams(location.search);
  const role_str = queryParams.get("role") || "Audience";

  const role =
    role_str === "Host"
      ? ZegoUIKitPrebuilt.Host
      : role_str === "Cohost"
      ? ZegoUIKitPrebuilt.Cohost
      : ZegoUIKitPrebuilt.Audience;

  let sharedLinks = [];
  if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
    sharedLinks.push({
      name: "Join as co-host",
      url:
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?roomID=" +
        roomID +
        "&role=Cohost",
    });
  }
  sharedLinks.push({
    name: "Join as audience",
    url:
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?roomID=" +
      roomID +
      "&role=Audience",
  });

  // generate Kit Token
  const appID = 1536139531;
  const serverSecret = "0c7186504eb94e7d7fed479c0ee43d9a";
  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    roomID,
    Date.now().toString(),
    role
  );

  useEffect(() => {
    if (!roomID || !containerRef.current) return;
    let zp;
    let myMeeting = async (element) => {
      zp = ZegoUIKitPrebuilt.create(kitToken);
      zp?.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.LiveStreaming,
          config: {
            role,
          },
        },
        sharedLinks,
      });
    };
    myMeeting(containerRef.current);
    return () => {
      if (zp) {
        zp.destroy();
      }
    };
  }, [roomID]);

  return (
    <>
     <div
      className="myCallContainer"
      ref={containerRef}
      style={{ width: "100%", height: "80vh" }}
    ></div>

    {/* الزر تحت الـ div */}
    <div style={{ textAlign: "center", }}>
      <button
        onClick={() => navigate("/")}
        style={{
          display: "inline-block",
          background: "#007bff",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer"
        }}
      >
      Back To Website
      </button>
    </div>
    </>
  );
}
