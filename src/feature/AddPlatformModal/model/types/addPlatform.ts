import { Platform } from '../../../../entities/Platform/model/types/platforms';

export interface AddPlatformSchema {
  data: Platform[];
  isLoading: boolean;
  error?: string;
}
