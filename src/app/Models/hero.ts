export interface IHero {
  name: string;
  phoneNumber: string;
  email: string;
  date: Date;
  country: IHeroCountry;
  company: string;
}

export interface IHeroCountry {
  Flag: string;
  Name: string;
  Alpha3Code: string;
  NativeName: string;
}
