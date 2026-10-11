

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
  slug: string;        
  nameBn: string;
  category: string;    
  categoryNameBn: string;
  categoryIcon: string;
  unit: Unit;
  image: string;       
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: ChangeDir;
    pct: number;       
  };
  markets: Market[];
};

export type Market = {
  market: string;      
  division: string;   
  min: number;
  max: number;
};