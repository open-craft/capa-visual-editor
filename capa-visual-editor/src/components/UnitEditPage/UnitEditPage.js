import * as React from 'react';
import { Redirect } from 'react-router-dom';

import styles from 'global/styles';
import {StandardPageLayout} from 'ui/components';

import {UnitEditorWidget} from '../UnitEditorWidget/UnitEditorWidget';

export class UnitEditPage extends React.PureComponent {

    async componentDidMount() {
    }

    render() {
        if (this.state.redirectTo) {
            // When the user clicks save or publish
            return <Redirect to={this.state.redirectTo}/>;
        }
        return (
            <StandardPageLayout headerFeature={this.renderHeader()}>
                <div className={styles.unitWrapper}>
                    <div className={styles.unitContentBar}>
                        <UnitEditorWidget />
                    </div>
                    <div className={styles.unitSideBar} />
                </div>
            </StandardPageLayout>
        );
    }

    renderHeader() {
        return (
            <div>header</div>
        );
    }
}
