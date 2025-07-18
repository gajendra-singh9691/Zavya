export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-rose-50 to-rose-100 text-gray-900 py-10 pb-2.5 font-sans">
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Logo and Tagline */}
        <div className="flex items-center mb-5">
          <div className="mr-6">
            <span className="text-4xl font-bold border-b-4 border-gray-900 pb-0.5">zavya</span>
          </div>
          <div className="text-lg text-gray-600">She's my constant. My forever. My always</div>
        </div>
        {/* Main Sections */}
        <div className="flex flex-wrap justify-between border-t border-rose-200 pt-8">
          {/* ADVANTAGES */}
          <div className="min-w-[180px] mb-8">
            <h3 className="font-bold text-lg tracking-wide">ADVANTAGES</h3>
            <ul className="list-none p-0 mt-4 space-y-2 text-gray-700 text-sm">
              <li>15 Days Return</li>
              <li>Free Shipping</li>
              <li>Weekly Launches</li>
              <li>Jewellery Kit</li>
              <li>Plating Warranty</li>
            </ul>
          </div>
          {/* CUSTOMER SERVICES */}
          <div className="min-w-[210px] mb-8">
            <h3 className="font-bold text-lg tracking-wide">CUSTOMER SERVICES</h3>
            <ul className="list-none p-0 mt-4 space-y-2 text-gray-700 text-sm">
              <li>Bulk Enquiry</li>
              <li>Track Your Order</li>
              <li>Return & Exchange</li>
              <li>Silver Return Policy</li>
              <li>Lab Grown Diamonds Return Policy</li>
              <li>Shipping and Handling</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>FAQ's</li>
            </ul>
          </div>
          {/* ABOUT US */}
          <div className="min-w-[190px] mb-8">
            <h3 className="font-bold text-lg tracking-wide">ABOUT US</h3>
            <ul className="list-none p-0 mt-4 space-y-2 text-gray-700 text-sm">
              <li>About us</li>
              <li>Our Launch Campaign</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Partner with Us</li>
              <li>Influencer Collaboration</li>
            </ul>
          </div>
          {/* CONTACT US */}
          <div className="min-w-[240px] mb-8">
            <h3 className="font-bold text-lg tracking-wide">CONTACT US</h3>
            <div className="mt-4 leading-relaxed">
              <div className="text-gray-600 text-sm mb-2">
                For any suggestions, queries or complaints please contact us:
              </div>
              <div className="text-sm">
                Rubenzo Ventures Private Limited
                <br />
                4B, Ground Floor, Centrum Plaza, Golf Course Road, Gurgaon, Haryana 122002
              </div>
              <div className="mt-2 text-sm">care@zavya.co</div>
              <div className="mt-2 text-sm">+91-9810814945 (10.00 A.M. - 6.00 PM)</div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-rose-200 pt-3.5 mt-6 text-center text-sm text-gray-500">
          <div>© 2025 All Right reserved!</div>
          <div className="mt-2">PRIVACY POLICY | TERMS & CONDITIONS | FREQUENTLY ASKED QUESTION</div>
        </div>
      </div>
    </footer>
  )
}