declare interface IManifestLocWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  WelcomeMessage: string;
  WelcomeDescription:string;
  LearnMoreButtonText:string;
}

declare module 'ManifestLocWebPartStrings' {
  const strings: IManifestLocWebPartStrings;
  export = strings;
}
