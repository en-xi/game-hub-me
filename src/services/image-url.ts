let target = "media/";
function getCropImageUrl(url: string) {
  let index = url.indexOf(target) + target.length;
  let newUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return newUrl;
}

export default getCropImageUrl;
