"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DashboardNav } from "@/components/layout/dashboard-nav";

export function MobileDashboardNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="flex lg:hidden">
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="border-b px-6 py-4 text-left">
          <SheetTitle>Zentry</SheetTitle>
        </SheetHeader>

        <DashboardNav />
      </SheetContent>
    </Sheet>
  );
}