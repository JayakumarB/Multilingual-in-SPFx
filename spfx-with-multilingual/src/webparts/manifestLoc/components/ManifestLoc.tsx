import * as React from 'react';
import styles from './ManifestLoc.module.scss';
import * as strings from 'ManifestLocWebPartStrings';
import { IManifestLocProps } from './IManifestLocProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ManifestLoc extends React.Component<IManifestLocProps, {}> {
  public render(): React.ReactElement<IManifestLocProps> {
    return (
      <div className={styles.manifestLoc}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>{strings.WelcomeMessage}</span>
              <p className={styles.subTitle}>{strings.WelcomeDescription}</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>{strings.LearnMoreButtonText}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
