import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>

<footer class="footer">
        <div class="footer-content">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
            <ul class="footer-links">
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Services</Link></li>
                <li><Link to="#">Contact</Link></li>
            </ul>
        </div>
    </footer>

    </>
  )
}
