import { LocationDescriptor } from 'history';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect } from 'react-router-dom';

import styles from 'global/styles';
import {StandardPageLayout} from 'ui/components';

import {UnitEditorWidget} from '../UnitEditorWidget/UnitEditorWidget';

interface MatchProps {
    unitId: string;  // obtained from the url
}

interface Props extends RouteComponentProps<MatchProps> {

}

interface State {
    loading: boolean;
    redirectTo?: LocationDescriptor;
}

export class UnitEditPage extends React.PureComponent<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    public async componentDidMount() {
    }

    public render() {
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

    private renderHeader() {
        return (
            <div>header</div>
        );
    }
}
