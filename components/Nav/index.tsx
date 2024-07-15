import React from "react";
import { ThemeToggle } from "../ThemeToggle";
import Link from "next/link";
import { Button } from "../ui/button";
import { Brain, FlaskConical, PersonStanding } from "lucide-react";

export default function Nav() {
  return (
    <div className="max-w-6xl w-full flex justify-between">
      <div className="">
        <Button variant="ghost">
          <Brain className="h-4 w-4 mr-1" />
          <Link href="/ponderings">Ponderings</Link>
        </Button>
        <Button variant="ghost">
          <FlaskConical className="h-4 w-4 mr-1" />
          <Link href="/lab">Lab</Link>
        </Button>
        <Button variant="ghost">
          <PersonStanding className="h-4 w-4 mr-1" />
          <Link href="/about">About</Link>
        </Button>
      </div>
      <div>Ayoungh.dev</div>
      <div className="w-60 flex justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
}
