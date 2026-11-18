import floralBannerImg from '../assets/floral-banner.jpg'

export default function Footer({ names }) {
  return (
    <footer>
      <div className="script">{names}</div>
      <p>WITH LOVE, WE INVITE YOU TO OUR WEDDING CELEBRATION</p>
      <img className="floral-banner" src={floralBannerImg} alt="" aria-hidden="true" />
      <div className="credit">
        <a
          className="credit-btn"
          href={'https://wa.me/917025423395?text=' + encodeURIComponent("Hi Velora! I saw your wedding invitation templates and I'm interested. I'd like to get a wedding e-invitation made for us. Could you please share the details?")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Crafted by Velora - chat with us on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
          </svg>
          <span>Crafted by <b>Velora</b></span>
          <em>Chat</em>
        </a>
      </div>
    </footer>
  )
}
