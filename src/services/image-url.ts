import noImage from "../assets/no-image-placeholder.webp";

let target = "media/";
function getCropImageUrl(url: string) {
  if (!url) return noImage;
  let index = url.indexOf(target) + target.length;
  let newUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return newUrl;
}

export default getCropImageUrl;
