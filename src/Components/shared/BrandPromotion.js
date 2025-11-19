import { IoCheckmarkCircle } from 'react-icons/io5';
import Feat1 from '../assets/images/promo-feat-1.webp';
import Feat2 from '../assets/images/promo-feat-2.avif';
import Feat3 from '../assets/images/promo-feat-3.avif';
import Feat4 from '../assets/images/promo-feat-4.webp';
import AppStoreLogo from '../assets/images/app-store.webp';
import PlayStoreLogo from '../assets/images/play-store.webp';

export const allFeatures = [
  {
    // imgSrc: Feat1,
    text: 'Open the app',
    description:
      'Choose from over 7000 products across groceries, fresh fruits & veggies, meat, pet care, beauty items & more.',
  },
  {
    // imgSrc: Feat2,
    text: 'Place an order',
    description:
      'Add your favourite items to the cart & avail the best offers.',
  },
  {
    // imgSrc: Feat3,
    text: 'Get free delivery',
    description:
      'Experience lighting-fast speed & get all your items delivered in 10 minutes',
  },
 
];

const PromoFeature = (props) => {
  return (
    <div className="_border border rounded-2xl p-8 flex flex-col items-center gap-3">
      <img className="w-[100px] h-[100px] mb-4" src={props.imgSrc} alt="" />
      <h5 className="text-black font-bold text-sm text-center">{props.text}</h5>
      <p className="text-xs _text-default text-center">{props.description}</p>
    </div>
  );
};

const BrandPromotion = () => {
  return (
    <section className="py-6 mt-8">
     <div className="_container">
         {/*<div className="flex flex-col gap-8 lg:border-t _border-muted lg:pt-20">
          <div className="_bg-shade-1 py-10 px-4 rounded-2xl">
            <div className="lg:flex items-center justify-around h-full">
              <div className="hidden lg:flex flex-col justify-start w-[480px] relative">
                <div className="absolute">
                  <img
                    src="/phone.webp"
                    alt=""
                    className="max-h-[500px] -mt-20 -ml-4"
                  />
                </div>
                <div className="translate-y-32 -translate-x-16">
                  <div className="_swinging">
                    <img src="/bike.png" alt="" className="h-[360px]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-extrabold tracking-wide mb-6">
                  Get the bringit app
                </h2>
                <div className="text-lg space-y-2">
                  <div className="flex items-center">
                    <IoCheckmarkCircle
                      size={24}
                      className="text-green-600 mr-3"
                    />{' '}
                    <span>Miss live order tracking</span>
                  </div>
                  <div className="flex items-center">
                    <IoCheckmarkCircle
                      size={24}
                      className="text-green-600 mr-3"
                    />{' '}
                    <span>Miss latest feature updates</span>
                  </div>
                </div>
                <div className="hidden lg:flex items-center _bg-shade-2 p-3 mt-6 gap-3 rounded-xl">
                  <div>
                    <img src="/qrcode.png" alt="" width={105} height={105} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-extrabold text-lg max-w-[300px] _text-default">
                      Simple way to download the BringIt app
                    </p>
                    <span className="text-sm _text-default">
                      Scan QR code and download now
                    </span>
                  </div>
                </div>
                <div className="block lg:hidden mt-6">
                  <h4 className="font-semibold text-md leading-none mb-4">
                    Download the BringIt App Now
                  </h4>
                  <div className="flex flex-col xs:flex-row gap-2">
                    <div className="xs:flex-1 h-12 rounded cursor-pointer overflow-hidden bg-[#213b50]">
                      <img
                        src={AppStoreLogo}
                        alt="App store"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="xs:flex-1 h-12 rounded cursor-pointer overflow-hidden bg-[#213b50]">
                      <img
                        src={PlayStoreLogo}
                        alt="Play store"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 
                items-start justify-center gap-2 sm:gap-4 xl:gap-10 
                mt-6 mx-auto">
  {allFeatures.map((feat, i) => (
    <PromoFeature key={i} {...feat} />
  ))}
</div>

          <div className="border-b _border-light pt-2 pb-10">
            <p className="text-sm _text-default">
              "BringIt" is owned & managed by "Bring Commerce Private Limited"
              (formerly known as Loafers Inc Private Limited) and is not
              related, linked or interconnected in whatsoever manner or nature,
              to "LOAFER.COM" which is a real estate services business operated
              by "Blackstone Consultancy Services Fake Limited".
            </p>
          </div>
        </div>
         </section>
  );
};

export default BrandPromotion;
