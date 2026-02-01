interface Window {
  downloadContact: () => void;
  handleEmailClick: () => void;
  openContactModal: () => void;
  openPrivacyModal: () => void;
  openTermsModal: () => void;
  setNavMobile: (isOpen: boolean) => void;
}