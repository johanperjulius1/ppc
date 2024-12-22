export interface Casino {
  title: string;
  logoObject: {
    logoTitle: string
    logoName: string
    backgroundColor: string
    altText: string
  };
  rating: number;
  excerpt: string;
  link: string;
  positive1: string
  positive2: string
  turnoverBonus: number | string;
  turnoverFreespin: number | string;
  perks: {
    perk1?: string | number
    perk2?: string | number
    perk3?: string | number
    perk4?: string | number
    perk5?: string | number
    perk6?: string | number
  },
  badges: {
    trustly: boolean
    swish: boolean
    bankId: boolean
    license: boolean
  }
}

