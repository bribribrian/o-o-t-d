import axios from 'axios';

export const itemImageToAWS = (imageFile) => {
  return axios.post('/api/upload/image-upload', imageFile);
  // return axios.post('/api/upload/image-upload', {image: imageFile.get('post[image]')});
};
