export interface Platform {
  key: string;
  platform: string;
  accountId: string;
  date?: string;
  comment?: string;
}

export interface PlatformSchema {
  data: Platform[];
  isLoading: boolean;
  error?: string;
}
