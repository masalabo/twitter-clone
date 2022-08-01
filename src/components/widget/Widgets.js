import { Search } from "@mui/icons-material";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
  TwitterShareButton,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <Search className="widgets_searchIcon" />
        <input placeholder="キーワード検索" type="text"></input>
      </div>
      <div className="widgets_widgetContainer">
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed
          tweetId="1103404560389992460"
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="TSM"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/ImperialHal"}
          options={{ text: "#Reactjs勉強中", via: "ImperialHal" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
