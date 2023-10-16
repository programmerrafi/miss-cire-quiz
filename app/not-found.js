"use client";

import Button from "@/components/shared/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <h1 className="mb-4">Not found – 404!</h1>
      <div>
        <Link href="/" className="">
          <Button title="Go back to Home" />
        </Link>
      </div>
    </div>
  );
}
