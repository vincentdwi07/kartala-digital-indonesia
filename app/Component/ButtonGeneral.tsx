interface ButtonGeneralProps{
    content: string
    onClick: () => void
}

export default function ButtonGeneral(props: ButtonGeneralProps){
    return(
        <button
            className="cursor-pointer border border-gray-300 px-10 p-1 rounded-md text-gray-600 hover:bg-gray-700 hover:text-white transition-all duration-300"
            onClick={props.onClick}
        >
            
            {props.content}
        </button>
    )
}