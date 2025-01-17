import banner_image from "../assets/banner_suit.png";

export const Header = () => {
    return (
      <div className="relative w-full h-64 bg-gray-200 overflow-hidden mb-8">
        <img src={banner_image} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Suitmedia</h1>
                <p className="text-lg">We create digital products for your business</p>
            </div>
        </div>
      </div>
    );
}
