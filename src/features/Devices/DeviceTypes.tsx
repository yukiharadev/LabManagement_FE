export interface Device {
  id: number;
  deviceName: string;
  total: number;
  categoryName: string;
}

export interface DeviceState {
  data: Device[];
  loading: boolean;
  error: string | null;
}
