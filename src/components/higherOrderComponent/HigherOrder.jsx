const withLowerCase=(WrappedComponent)=>{
    return function({text ,...restProps}) {
        const lowerCaseText=text.toLowerCase();

        return <WrappedComponent {...restProps} text={lowerCaseText}/>
    }

}

const MyComponent=({text})=><div>{text}</div>

const ConvertedText=withLowerzCase(MyComponent);
export default ConvertedText