import { StateSchema } from '../../../../app/providers/store/StateSchema';

export const getPlatformList = (state: StateSchema) => state.platform.data;
