import './ButtonOne.css'

const ButtonOne = ({children} : any) => {
    return (
        <button className="relative btn4  px-2 py-3 border border-white uppercase font-semibold tracking-wider leading-none rounded overflow-hidden text-white" type="button">
        <span className="absolute inset-x-0 h-2 bottom-0 bg-white"></span>
        {children}
    </button>
    );
};

export default ButtonOne;