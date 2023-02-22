import { AdPlatform } from '../../../../entities/AdPlatform/model/types/adPlatforms';

export interface AddPlatformSchema {
  data: AdPlatform[];
  isLoading: boolean;
  error: string;
}
