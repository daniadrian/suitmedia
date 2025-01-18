import banner_image from "../assets/banner_suit.png";

export const Header = () => {
    return (
        <div className="relative w-full h-64 overflow-hidden mb-8">
            <div
                className="absolute w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${banner_image})` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Ideas</h1>
                    <p className="text-lg">Where all our great things begin</p>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <svg
                    className="w-full h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 100"
                >
                    <polygon points="0,100 1440,70 1440,100 0,100" fill="#ffffff" />
                </svg>
            </div>
        </div>
    );
};
