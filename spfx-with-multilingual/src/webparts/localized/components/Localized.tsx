import * as React from 'react';
import styles from './Localized.module.scss';
import { ILocalizedProps } from './ILocalizedProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as strings from 'LocalizedWebPartStrings';

export default class Localized extends React.Component<ILocalizedProps, {}> {
  public render(): React.ReactElement<ILocalizedProps> {
    return (
      <div className={ styles.localized }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
            <span className={styles.title}>{strings.WelcomeMessage}</span>
              <p className={styles.subTitle}>{strings.WelcomeDescription}</p>
              <p className={styles.description}>{escape(this.props.greeting)}</p>
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
