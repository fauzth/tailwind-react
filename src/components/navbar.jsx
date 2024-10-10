import Button from "./button";
function Navbar() {
  return (
    <div className="bg-slate-500 p-2 flex justify-between ">
      <div className="flex items-center px-8 gap-5">
        <div>
          <p className="text-white text-2xl">LOGO</p>
        </div>
        <small className="text-white">
          <a href="" className="px-1 hover:text-sm hover:transition-all hover:font-bold">
            About
          </a>
          <a href="" className="px-1 hover:text-sm hover:transition-all hover:font-bold">
            Information
          </a>
          <a href="" className="px-1 hover:text-sm hover:transition-all hover:font-bold">
            Scedule
          </a>
        </small>
      </div>

      <div className="px-8 flex gap-2 items-center">
        <Button name="login" />
        <Button name="register" />
      </div>
    </div>
  );
}

export default Navbar;
