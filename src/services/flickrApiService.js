const getImageUrls = async () => {
  const baseUrl = ' https://www.flickr.com/services/rest/?method=flickr.photos.search'
  const options = '&api_key=0108b623dbb81829b5f013074dee22bb&tags=yurt&per_page=20&page=1&format=json&nojsoncallback=1';

  let responseBody;
  try {
    const response = await fetch(baseUrl + options);
    responseBody = await response.json();

    return responseBody.photos.photo.map(image =>
      `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
    );
  } catch (error){
    console.log(`an error occured while fetching images: ${error}`);

    return [];
  }
};

export default { getImageUrls };