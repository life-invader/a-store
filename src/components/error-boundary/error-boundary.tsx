import { Component } from 'react';
import ErrorPage from '../../pages/error-page/error-page';
import type { IErrorBoundaryProps } from './type';

class ErrorBoundary extends Component<IErrorBoundaryProps> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorPage />;
    }

    return children;
  }
}

export default ErrorBoundary;
