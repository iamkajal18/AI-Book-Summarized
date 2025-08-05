import { NextRequest } from "next/server";
import axios from "axios";

type Context = {
  params: {
    id: string;
  };
};

export async function GET(req: NextRequest, context: Context) {
  const videoId = context.params.id;

  if (!videoId) {
    return new Response(JSON.stringify({ error: "Video ID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const response = await axios.get(
      `https://api.d-id.com/talks/${videoId}`,
      {
        headers: {
          Authorization: `Basic ${process.env.DID_KEY!}`,
          Accept: "application/json",
        },
        timeout: 10000,
      }
    );

    const data = response.data as {
      status?: string;
      result_url?: string;
      created_at?: string;
      started_at?: string;
      completed_at?: string;
    };

    return new Response(
      JSON.stringify({
        status: data.status,
        result_url: data.result_url,
        created_at: data.created_at,
        started_at: data.started_at,
        completed_at: data.completed_at,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: "Failed to check video status",
        details: error.response?.data || error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
