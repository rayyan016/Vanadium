"use client";

import React, { Component, ReactNode, ErrorInfo } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: null };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state to show fallback UI on the next render
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReload = () => window.location.reload();

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center text-white text-center p-8 z-50">
          <div>
            <h1 className="text-2xl font-bold mb-4">Something Went Wrong</h1>
            <p className="text-lg mb-4">
              If you are using Brave browser, try disabling the shield. If not,
              please contact the{" "}
              <a
                href="https://www.linkedin.com/in/rayyan-aslam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline inline-flex items-center ml-2"
              >
                site admin
                <ArrowTopRightOnSquareIcon
                  className="w-4 h-4 ml-2 text-blue-300"
                  aria-hidden="true"
                />
              </a>
              .
            </p>
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              onClick={this.handleReload}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Reload Page
              </span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
