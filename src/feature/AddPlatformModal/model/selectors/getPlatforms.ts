import { StateSchema } from '../../../../app/providers/store/StateSchema';

export const getPlatforms = (state: StateSchema) => state.addPlatform.data;
