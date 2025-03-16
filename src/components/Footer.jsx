const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-blue-200 text-black p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};
export default Footer;
