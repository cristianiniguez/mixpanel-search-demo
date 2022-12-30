import mixpanel from 'mixpanel-browser';

mixpanel.init(import.meta.env.VITE_MISPANEL_TOKEN, { debug: true });

export default mixpanel;
