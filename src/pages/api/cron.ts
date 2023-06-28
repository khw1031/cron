import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export const config = {
  runtime: "edge",
};

export default () => {
  
  axios(
    "https://wh.jandi.com/connect-api/webhook/24103837/8b387069bc2751bceb53d12c9a9b122c",
    {
      method: "POST",
      data: {
        body: "🕰️ 주간업무보고 작성 리마인더 🕰️",
        connectColor: "#087f5b",
        connectInfo: [
          {
            title: "👉 [주간 업무 보고 작성하러 가기](https://hanssem.atlassian.net/wiki/spaces/FIST/pages/21692493/2.2)",
          },
        ],
      },
    }
  );
};
