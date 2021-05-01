export interface IHero {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  date: string;
  country: IHeroCountry;
  company: string;
}

export interface IHeroCountry {
  Flag: string;
  Name: string;
  Alpha3Code: string;
  NativeName: string;
}
