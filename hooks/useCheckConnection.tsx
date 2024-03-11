import NetInfo, { NetInfoState, NetInfoStateType } from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';

const useCheckConnection = () => {
  const [connectionStatus, setConnectionStatus] = useState<null | boolean>(true);
  const [connectionType, setConnectionType] = useState<NetInfoStateType | null>(null);

  const handleNetworkChange = (state: NetInfoState) => {
    setConnectionStatus(state.isConnected);
    setConnectionType(state.type);
  };

  useEffect(() => {
    const netInfoSubscription = NetInfo.addEventListener(handleNetworkChange);
    return () => {
      netInfoSubscription && netInfoSubscription();
    };
  }, []);

  return { connectionStatus, connectionType };
};
export default useCheckConnection;
