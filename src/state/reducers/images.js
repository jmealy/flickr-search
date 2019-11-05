import { ADD_IMAGES } from '../actionTypes';

export default function images(state = [], action) {
  switch (action.type) {
      case ADD_IMAGES:
        return action.images || null;
      default:
        return state;
  }
}