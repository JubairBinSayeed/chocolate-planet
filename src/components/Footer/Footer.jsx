


const Footer = () => {
    return (
        <footer className="relative bottom-0 footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <aside>
                <img src="/favicon.png" alt="" />
                <p>
      Chocolate Planet Ltd.
      <br />
      Providing reliable and affordable chocolate products.
    </p>
            </aside>
            <aside>
                <h6 className="footer-title">Product</h6>
                <a className="link link-hover">Landing</a>
                <a className="link link-hover">Pages</a>
                <a className="link link-hover">Sections</a>
                <a className="link link-hover">Documentation</a>
          </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;