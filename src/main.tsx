import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class RootErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in ADROVIX application:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', backgroundColor: '#070a12', color: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'sans-serif', textAlign: 'center' }}>
          <div style={{ maxWidth: '480px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px', color: '#38bdf8' }}>ADROVIX</h1>
            <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>
              We encountered a temporary interface issue. Please refresh the page to reload the curriculum.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{ backgroundColor: '#06b6d4', color: '#090d16', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  );
}
