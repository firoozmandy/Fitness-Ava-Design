export enum SelectedPage {
  Home = "home",
  Plans = "plans",
  Blog = "blog",
  AboutUs = "aboutUs",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
export interface ClassesType {
  name: string;
  description: string;
  image: string;
}
