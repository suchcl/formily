export type GlobalModelState = { projectInfo: Object };

export type GlobalModelType = {
  namespace: 'global';
  state: GlobalModelState;
  effects: {};
  reducers: {};
};

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    projectInfo: {},
  },
  effects: {},
  reducers: {
    updateStore: (state: any, { payload }: { payload: any }) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
