declare interface ILocalizedWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  WelcomeMessage: string;
  WelcomeDescription:string;
  LearnMoreButtonText:string;
}

declare module 'LocalizedWebPartStrings' {
  const strings: ILocalizedWebPartStrings;
  export = strings;
}
