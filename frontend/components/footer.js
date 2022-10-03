import { format } from "date-fns"

const Footer = () => {
  return (
    <footer className="container rounded prose prose-pink prose-sm sm:prose-lg lg:prose-lg xl:prose-2xl mx-auto">
      <div className="fluid-container">
        <p>
          © {format(new Date(), "yyyy")} woutervm.com -
          <a
            className="p-1"
            href="https://www.twitter.com/wottavm"
            rel="noopener noreferrer"
            aria-label="woutervm.com on Twitter"
            target="_blank"
          >
            Twitter
          </a>
          <a
            className="p-1"
            href="https://www.github.com/wotta"
            rel="noopener noreferrer"
            aria-label="woutervm.com on Github"
            target="_blank"
          >
            Github
          </a>
          <a
            className="p-1"
            href="https://www.linkedin.com/in/wouter-van-marrum/"
            rel="noopener noreferrer"
            aria-label="woutervm.com on Linkedin"
            target="_blank"
          >
            Linkedin
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
