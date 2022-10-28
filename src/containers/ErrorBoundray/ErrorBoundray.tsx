import { Component, ErrorInfo } from "react";

import { ErrorPage } from "./error.style";

interface Props {
  children: any;
}

interface State {
  hasError: boolean;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundray extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
      errorInfo: null,
    };
  }

  componentDidCatch(error: globalThis.Error, errorInfo: ErrorInfo): void {
    console.log("error page", error);

    this.setState({
      errorInfo,
      hasError: true,
    });

    // log.send('error_boundary', {
    //   error,
    //   info,
    //   errorStr: JSON.stringify(error),
    //   infoStr: JSON.stringify(info)
    // })
  }

  render() {
    const { hasError, errorInfo } = this.state;
    const { children } = this.props;

    return hasError ? (
      <ErrorPage>
        <div>{errorInfo?.componentStack}</div>
        <img alt="qrcode" src="/icons/close.png" />
        <div>Something Happened Here ...</div>
      </ErrorPage>
    ) : (
      children
    );
  }
}

export default ErrorBoundray;
