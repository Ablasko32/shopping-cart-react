function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="text-center  py-3 text-sm font-thin pt-2 ">
      <p>Copyright &copy;{year}</p>
      <p>Antonio Blašković</p>
    </div>
  );
}

export default Footer;
