import { observer } from 'mobx-react';
import * as MonacoType from 'monaco-editor';
import * as React from 'react';

import { AppState } from '../state';
import { Output } from './output';

const defaultMonacoOptions: MonacoType.editor.IEditorOptions = {
  minimap: {
    enabled: false,
  },
  wordWrap: 'on',
};

interface OutputsProps {
  appState: AppState;
}

interface OutputsState {
  isMounted: boolean;
  monaco: typeof MonacoType;
  monacoOptions: MonacoType.editor.IEditorOptions;
}

@observer
export class Outputs extends React.Component<OutputsProps, OutputsState> {
  constructor(props: OutputsProps) {
    super(props);

    this.state = {
      isMounted: false,
      monaco: window.ElectronFiddle.app.monaco,
      monacoOptions: defaultMonacoOptions,
    };
  }

  /**
   * Executed right after the component mounts.
   *
   * @memberof Outputs
   */
  public componentDidMount() {
    this.setState({ isMounted: true });
  }

  public render() {
    const { appState } = this.props;
    const { monaco } = this.state;

    return (
      <Output
        monaco={monaco}
        appState={appState}
        monacoOptions={defaultMonacoOptions}
      />
    );
  }
}
