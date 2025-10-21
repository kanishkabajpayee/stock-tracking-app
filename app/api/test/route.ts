import inngest from "@/lib/inngest/client";
import { NextResponse } from "next/server";

export async function GET() {
    await inngest.send({
        name: "app/demo",
        data: { test: true },
    });

    return NextResponse.json({ status: "Event sent to Inngest" });
}
