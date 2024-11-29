function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="text-center bg-violet-200 py-3 text-sm font-thin">
      <p>Copyright &copy;{year}</p>
      <p>Antonio Blašković</p>
    </div>
  );
}

export default Footer;
