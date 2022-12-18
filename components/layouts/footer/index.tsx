import React from 'react'
import { Footer } from "flowbite-react";

export const FooterMain = () => {
  return (
<Footer>
  <div className="w-full bg-gray-800">
    <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
      <div>
        <Footer.Title title="Company" />
        <Footer.LinkGroup col>
          <Footer.Link href="#">
            About
          </Footer.Link>
          <Footer.Link href="#">
            Careers
          </Footer.Link>
          <Footer.Link href="#">
            Brand Center
          </Footer.Link>
          <Footer.Link href="#">
            Blog
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div>
        <Footer.Title title="help center" />
        <Footer.LinkGroup col>
          <Footer.Link href="#">
            Discord Server
          </Footer.Link>
          <Footer.Link href="#">
            Twitter
          </Footer.Link>
          <Footer.Link href="#">
            Facebook
          </Footer.Link>
          <Footer.Link href="#">
            Contact Us
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div>
        <Footer.Title title="legal" />
        <Footer.LinkGroup col>
          <Footer.Link href="#">
            Privacy Policy
          </Footer.Link>
          <Footer.Link href="#">
            Licensing
          </Footer.Link>
          <Footer.Link href="#">
            Terms & Conditions
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div>
        <Footer.Title title="download" />
        <Footer.LinkGroup col>
          <Footer.Link href="#">
            iOS
          </Footer.Link>
          <Footer.Link href="#">
            Android
          </Footer.Link>
          <Footer.Link href="#">
            Windows
          </Footer.Link>
          <Footer.Link href="#">
            MacOS
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
    </div>
    <div className="w-full px-4 py-6 bg-gray-700 sm:flex sm:items-center sm:justify-between">
      <Footer.Copyright
        by="Flowbite™"
        href="#"
        year={2022}
      />
      <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
        Icons
      </div>
    </div>
  </div>
</Footer>
  )
}
