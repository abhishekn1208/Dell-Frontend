import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";
import "./productnav.css";

const ProductNavbar = () => {
  return (
    <div id="p-nav-main">
      <nav>
        <div className="product-left">
          <Link to="/" ><span style={{textDecoration:'none', color:'black'}}>
            <FontAwesomeIcon icon={faHouse} />
          </span></Link>
        /   
          <span>Laptop Computers</span>
        </div>
        <div className="product-right">
          <div>
            <Link>
              <img
                src="https://i.dell.com/is/svg/brand-assets/3rd-party-logos/microsoft/windows-11/windows-11-mda-banner-en-gb.svg"
                alt="windows"
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src="https://i.dell.com/is/svg/brand-assets/3rd-party-logos/intel/11thgen/intel-core-ultra-processor-family-badges-5-7-9-135x60.svg"
                alt="Intel"
              />
            </Link>
          </div>
          <div>
            <span>Intel® Core™ Ultra Processors <br />Learn More about Intel</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ProductNavbar;
