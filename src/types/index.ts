import { ReactNode } from "react";

export type Unit = "kg" | "litre" | "dozen" | "piece";
export type ChangeDir = "up" | "down" | "flat";

export interface navlinks {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}


export type Product = {
  id: number;
  slug: string;        // e.g. "ilish-mach"
  nameBn: string;
  category: string;    // e.g. "chal", "dim-dui"
  categoryNameBn: string;
  categoryIcon: string;
  unit: Unit;
  image: string;       // emoji
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: ChangeDir;
    pct: number;       // already negative when dir === "down"
  };
  markets: Market[];
};

export type Market = {
  market: string;      // e.g. "কারওয়ান বাজার"
  division: string;    // e.g. "ঢাকা"
  min: number;
  max: number;
};