import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ManifestLocWebPartStrings';
import ManifestLoc from './components/ManifestLoc';
import { IManifestLocProps } from './components/IManifestLocProps';

export interface IManifestLocWebPartProps {
  description: string;
}

export default class ManifestLocWebPart extends BaseClientSideWebPart<IManifestLocWebPartProps> {
  public onInit(): Promise<void> {
    console.log("Site Preference " + this.context.pageContext.cultureInfo.currentCultureName);
    console.log("User Preference " + this.context.pageContext.cultureInfo.currentUICultureName);
    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<IManifestLocProps> = React.createElement(
      ManifestLoc,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
