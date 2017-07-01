import Types from 'constants';

// 这里声明action
const TEMPLATE_ACTION = {type: Types.TEMPLATE_ACTION};

// 这里声明action creator
export const template = () => (dispatch,getState) => {
    dispatch({...TEMPLATE_ACTION});
}