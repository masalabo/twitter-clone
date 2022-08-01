import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./timeline.css";
import TweetBox from "./TweetBox";
import db from "../../firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import FlipMove from "react-flip-move";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timeStamp", "desc"));
    // getDocs(q).then((QuerySnapshot) => {
    //   setPosts(QuerySnapshot.docs.map((doc) => doc.data()));
    // });

    // リアルタイムでデータを取得
    onSnapshot(q, (QuerySnapshot) => {
      setPosts(QuerySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline_header">
        <h2>ホーム</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Timeline;
