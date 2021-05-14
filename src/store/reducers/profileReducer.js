const initialState = {
  profiles: [
    {
      id: 1,
      name: 'ebay seller',
      folder: 'Justfolder',
      status: 'Stop',
      os: 'windows',
      lastRun: 1620824430,
      proxy: { type: 'HTTP Proxy', country: 'US' },
      language: 'English',
      timezone: 'Europa',
      resolution: '1920x1080',
      geo: 'Stuttgart',
      cookie: 'CGIC',
      notes: 'Заметка с паролями',
      folders: ['folder', 'folder2'],
    },
    {
      id: 2,
      name: 'rough-term',
      folder: 'Seller',
      status: 'Ready',
      os: 'windows',
      lastRun: 1620824430,
      proxy: { type: 'With Proxy', country: 'US' },
      language: 'English',
      timezone: 'Europa',
      resolution: '1920x1080',
      geo: 'Stuttgart',
      cookie: 'CGIC',
      notes: 'Заметка с паролями',
      folders: ['folder', 'folder2'],
    },
  ],
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROXY_TYPE':
      return {
        ...state,
        profiles: state.profiles.map((profile) => {
          if (profile.id === action.payload.id) {
            profile.proxy.type = action.payload.type;
            profile.proxy.country = action.payload.country;
            return profile;
          }
          return profile;
        }),
      };
    default:
      return state;
  }
};
