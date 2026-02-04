// Portals SDK type declarations
declare global {
  interface Window {
    PortalsSdk?: {
      closeIframe: () => void;
      setMessageListener: (callback: (message: string) => void) => void;
    };
  }

  const PortalsSdk: {
    closeIframe: () => void;
    setMessageListener: (callback: (message: string) => void) => void;
  } | undefined;
}

export {};
