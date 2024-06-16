import { useSelector } from 'react-redux';

export const useAdministrator = () => false

export const useManager = () => false

export const useDeviceReadonly = () => true

export const useRestriction = (key) => useSelector((state) => {
  const admin = state.session.user.administrator;
  const serverValue = state.session.server[key];
  const userValue = state.session.user[key];
  return !admin && (serverValue || userValue);
});
