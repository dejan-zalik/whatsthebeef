import memeBGW from '@/assets/images/blackgirlwat.png';
import memeMB from '@/assets/images/mrbean.png';
import memeWOL from '@/assets/images/watoldlady.png';

const imagesArray = new Array(memeBGW.src, memeMB.src, memeWOL.src);

const generateImage = () => {
  const currentImage = imagesArray[Math.floor(Math.random() * 3)];
  const mainElement = document.getElementById('main');

  const diffTop = mainElement?.offsetTop;
  const diffLeft = mainElement?.offsetLeft;
  const maxLeft = document.body.clientWidth + diffLeft! - 70;

  const img: any = document.createElement('img');
  img.src = currentImage;
  img.height = '50';
  img.width = '70';

  img.style.position = 'absolute';

  const evalLeft = document.body.clientWidth * Math.random() + diffLeft!;
  const calcLeft = evalLeft >= maxLeft ? evalLeft - 140 : evalLeft;

  img.style.top = document.body.clientHeight * Math.random() + diffTop! + 'px';
  img.style.left = calcLeft + 'px';

  document.body.appendChild(img);

  setTimeout(() => {
    img.style.display = 'none';
  }, 2000);
};

export default generateImage;
