import * as React from 'react';

import '../../assets/scss/app.scss';
import {ShortAdvancedSettings} from './ShortAdvancedSettings';
import {SingleAdvancedSettings} from './SingleAdvancedSettings';
import {MultiAdvancedSettings} from './MultiAdvancedSettings';
import {ShortAnswers} from './ShortAnswers';
import {SingleSelectAnswers} from './SingleSelectAnswers';
import {MultiSelectAnswers} from './MultiSelectAnswers';


export class UnitEditorWidget extends React.PureComponent {

    render() {
        return (
            <div>
                <div className="unit-editor-wrapper">
                    <SingleSelectAnswers
                        answersList={[
                            {id: '1', title: 'Cholesterol molecule'},
                            {id: '2', title: 'Protein channel'},
                            {id: '3', title: 'Glycoprotein molecule'},
                            {id: '4', title: 'Phospholipid molecule'},
                        ]}
                    />
                    <SingleAdvancedSettings/>
                </div>
                <div className="unit-editor-wrapper">
                    <MultiSelectAnswers
                        answersList={[
                            {id: '1', title: 'Cholesterol molecule'},
                            {id: '2', title: 'Protein channel'},
                            {id: '3', title: 'Glycoprotein molecule'},
                            {id: '4', title: 'Phospholipid molecule'},
                        ]}
                    />
                    <MultiAdvancedSettings/>
                </div>
                <div className="unit-editor-wrapper">
                    <ShortAnswers
                        answersList={[
                            {id: '1', title: 'Cholesterol molecule'},
                            {id: '2', title: 'Protein channel'},
                            {id: '3', title: 'Glycoprotein molecule'},
                            {id: '4', title: 'Phospholipid molecule'},
                        ]}
                    />
                    <ShortAdvancedSettings/>
                </div>
            </div>
        );
    }

}
