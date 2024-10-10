function Button(props) {
  return (
    <>
    {
        props.name == "login" 
        ?
        <button className="px-4 w-20 h-8 bg-white rounded-md shadow-md  border-slate-700 active:bg-slate-400 active:text-white transition-all">
            {props.name}
        </button>
        :
      <button className="px-4 text-white hover:text-slate-900 ">{props.name}</button>
    }
    </>
  );
}

export default Button;
